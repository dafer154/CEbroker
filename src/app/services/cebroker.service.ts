import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CebrokerService {

  principalC = [];
  courses: any = {};

  //Principal courses
  private urlPrincipalCourses: string = "https://api.cebroker.com/v2/featuredCoursesProfession?profession=36";
  private allCourses: string = "https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27";

  constructor(private http:Http) { }

//Obtain the principal courses of CEbroker
getPrincipalCourses(){

  let url = this.urlPrincipalCourses;

  return this.http.get(url).map(res =>{
                this.principalC = res.json();
                console.log("Principal", this.principalC);
              })
}

getCourses(word:string){

    let url = this.allCourses;
    console.log(url);


    return this.http.get( url).map(res =>{
      console.log("Respuesta de ", res);
      var items = res.json().items
                if(!word){
                  this.courses=items;
                }
                else{
                  this.courses = [];
                  items.map(item=>{
                    if(item.course.name.toLowerCase().indexOf(word) > -1) {
                      this.courses.push(item);
                    }
                  });
                }

              } )
}

}
