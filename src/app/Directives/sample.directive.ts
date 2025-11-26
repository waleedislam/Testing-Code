import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSample]',
  standalone: true
})
export class SampleDirective {
  constructor(private view:TemplateRef<any>,private  template:ViewContainerRef ){}
  @Input() set appSample(condition:boolean){
   if(condition===true){
    this.template.createEmbeddedView(this.view);
   }
   else{
    this.template.clear();
  }
  }
}
