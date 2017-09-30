import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CebrokerService {

  principalCourses: any[] = [];
  courses: any[]=[];

  //Principal courses
  private urlPrincipalCourses: string = "https://api.cebroker.com/v2/featuredCoursesProfession?profession=36";
  private allCourses: string = "https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27";

  constructor(private http:Http) { }


//Obtain the principal courses of CEbroker
getPrincipalCourses(){

  let url = this.urlPrincipalCourses;
  console.log("principales cursos");

  return this.http.get(url).map(res=>{
            this.principalCourses = res.json();
            console.log(this.principalCourses);
            console.log("-----");
            return res.json();
  })
}

getCourses(word:string){

    //Autenticacion de spotify
    let url = this.allCourses;
    console.log(url);

    //Peticion URL => Observable o promesa
    return this.http.get( url).map(res =>{
                //console.log(res.json().artists.items);
                this.courses = res.json();
                console.log(this.courses);
                console.log("prueba de todos los cursos");
              } )
}

}
