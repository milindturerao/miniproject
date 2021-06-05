import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
})

export default class authService{
  
  canActivate():boolean{
    return confirm('do you want to enter into Shirts route ??');
  }
  canDeactivate():boolean{
    return confirm('do you want to enter Leave Pants route ??');
  }
  canActivateChild():boolean{
    return confirm('do you want to enter into Summer route ??');
  }
}
