import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'jps-root',
  template: '<router-outlet></router-outlet><div class="scroll-top-btn" *ngIf="isShow" (click)="gotoTop()"></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JPerfectSolution';
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
