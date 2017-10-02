import { Component, OnInit } from '@angular/core';
import {CebrokerService } from '../../services/cebroker.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  word: string = "";
  principalC = [];

  constructor( private _CebrokerService: CebrokerService) { }

  ngOnInit() {

    this.principalCourses();
    this.searchCourses();

  }



  principalCourses(){
    this._CebrokerService.getPrincipalCourses().subscribe();
  }

  searchCourses(){
    this._CebrokerService.getCourses(this.word).subscribe();

  }

}
