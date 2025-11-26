import { Injectable } from "@angular/core"
@Injectable({
  providedIn: 'root',
})
export class CheckService{
    butonClicked(btnNo:number){
     alert('Button'+btnNo+'Clicked');
    }
}