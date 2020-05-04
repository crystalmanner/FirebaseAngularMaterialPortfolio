import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUploadModel } from '../models/fileupload.model';

const TRIPS_IMG_DB = 'uploads';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private basePath: string = '/uploads';

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  pushUpload(fileUpload: FileUploadModel): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUploadModel) {
    this.db.collection(TRIPS_IMG_DB).add({
      name: fileUpload.name,
      url: fileUpload.url
    });
  }

  getFileUploads() {
    return this.db.collection(TRIPS_IMG_DB).snapshotChanges();
  }

  deleteFileUpload(id, name) {
    return this.deleteFileDatabase(id)
      .then(() => {
        this.deleteFileStorage(name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.collection(TRIPS_IMG_DB).doc(key).delete();
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
