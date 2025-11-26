import { Component } from '@angular/core';
import { SampleDirective } from '../Directives/sample.directive';
import { CommonModule } from '@angular/common';
import { CheckService } from '../Services/checkService.service';
@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [SampleDirective, CommonModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css',
  providers:[CheckService],
})
export class Demo1Component {
  text:string='';
  constructor(private object:CheckService){

  }
  btn2clicked(){
    this.object.butonClicked(2);
  }
  showpara3(){
    this.text='para3';
  }
  showpara2(){
    this.text='para2';
  }
  showpara1(){
    this.text='para1';
  }
}
