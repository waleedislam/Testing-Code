import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showCustomerBool:boolean=false;
  @Output() emitvalue=new EventEmitter<boolean>();
  showCustomers(){
   this.emitvalue.emit(!this.showCustomerBool);
  }
}
