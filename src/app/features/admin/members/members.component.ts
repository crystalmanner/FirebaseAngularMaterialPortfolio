import { Component, OnInit } from '@angular/core';
import { _categories, _talentTypes, _hourlyRate, _englishLevel } from 'src/app/consts/filter-cat.const';
import { _talentMembers } from 'src/app/consts/home-page.const'
@Component({
  selector: 'jps-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  allCategory = true;
  categories = _categories;
  talentTypes = _talentTypes;
  hourlyRates = _hourlyRate;
  englishLevels = _englishLevel;

  talentType = 0;
  hourlyRate = 0;
  englishLevel = 0;

  searchValue = '';

  talents = _talentMembers;

  constructor() { }

  ngOnInit() {

  }

}
