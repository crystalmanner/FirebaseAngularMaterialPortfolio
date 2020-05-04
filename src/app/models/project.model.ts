export class Profile {
  id: String;
  userId: String;

  title: String;
  content: String;
  projectImgs: String;
  category: String;
  startedDate: Date;
  endedDate: Date;
  skills: String[];
  refUrl: String;
  difficulty: Number;   // 0~5

  published: Boolean;
  firstPage: Boolean;
}