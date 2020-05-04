import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-carousel-lib';
import { _talentMembers, _topSkills, _trendingSkills } from 'src/app/consts/home-page.const';
@Component({
  selector: 'jps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  talentMembers = _talentMembers;
  topSkills = _topSkills;
  trendingSkills = _trendingSkills;
  groupedTalentMembers
  degree = 24;
  moreSlides = 3;
  initSlide = 3;

  @ViewChild('membersCarousel', { static: true }) membersCarousel: CarouselComponent


  constructor() { }

  ngOnInit() {
    // this.groupedTalentMembers = 
  }

  nextMember() {
    this.membersCarousel.slideNext();
  }
  prevMember() {
    this.membersCarousel.slidePrev();
  }

}
