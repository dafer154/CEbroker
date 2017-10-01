import { Component, OnInit } from '@angular/core';
import {CebrokerService } from '../../services/cebroker.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

//For the search of courses
  word: string = "";
  principal: any = [];

  //courses: any = [];

  constructor( private _CebrokerService: CebrokerService) { }

  ngOnInit() {

    //this.principal = this._CebrokerService.getPrincipalCourses();

    console.log(this._CebrokerService.getPrincipalCourses());
  }



  principalCourses(){
    this._CebrokerService.getPrincipalCourses().subscribe();
  }

  searchCourses(){
    this._CebrokerService.getCourses(this.word).subscribe();
  }

}
