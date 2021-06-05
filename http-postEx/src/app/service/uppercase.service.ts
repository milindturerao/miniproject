//import Injectable
//Injectable used to create the service
import { Injectable} from '@angular/core';
//import HttpClient
//HttpClient uset to make rest api calls
import { HttpClient } from '@angular/common/http';
//import Observable
//Observable uset to make asynchronous calls
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
//export the class
export default class upperCaseService{
  constructor(private http:HttpClient){}
  public convertToUpperCase(Data:any):Observable<any>{
    return this.http.post("http://test-routes.herokuapp.com/test/uppercase",Data);
  }
}

