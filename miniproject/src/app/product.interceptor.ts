import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})

export default class productInterceptor{
  intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
    const req1 = req.clone({
      setHeaders:{
        //access the data from local storge
        "miniproject" : "milind"
      }
    })
    return handler.handle(req1);
  }
}

