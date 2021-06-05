import { Component } from '@angular/core';
import  countriesService  from '../service/uppercase.service';
import { HttpErrorResponse } from '@angular/common/http';
import upperCaseService from '../service/uppercase.service';

@Component({
 selector: 'upperCase',
 templateUrl: './upperCase.component.html'
})

export class upperCaseComponent {
  message:string;
 result:any;
 constructor(private service:upperCaseService) {
   this.message = '';

  }

        public clickMe():any {
          this.service.convertToUpperCase({'message':this.message}).subscribe((posRes)=>{
            this.result = posRes;
          },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
          });
        }
       }
