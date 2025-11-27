import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,BodyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  value!:boolean;
 gettingvalue(receivedvalue:boolean){
  this.value=receivedvalue;
 }
 clicked(){
  console.log(this.value);
 }
@Output() gotoMain=new EventEmitter<boolean>();
sendtoApp(){
  this.gotoMain.emit(this.value);
}
}
