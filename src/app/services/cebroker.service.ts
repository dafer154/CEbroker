import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CebrokerService {

  principalCourses:any[] = [];

  //Principal courses
  urlSearch: string = "https://api.cebroker.com/v2/featuredCoursesProfession?profession=36";

  constructor(private http:Http) { }


//Obtain the principal courses of CEbroker
getPrincipalCourses(){

  let url = this.urlSearch;
  console.log(url);

  return this.http.get(url).map(res=>{
            this.principalCourses = res.json();
            console.log(this.principalCourses);
            return res.json();
  })
}

}
