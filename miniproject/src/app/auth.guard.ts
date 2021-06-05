import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export default class authGuard{
  canload():boolean{
    return  confirm('do you want to enter into Lazi loaded module')
  }
}
