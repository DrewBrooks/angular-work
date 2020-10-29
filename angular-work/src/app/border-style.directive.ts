import {Directive, ElementRef, Host, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective {
  @Input () position: boolean;
  constructor(private elm: ElementRef) {

  }
  @HostListener('mouseenter') onEnter(): void{
    if (this.position){
      this.elm.nativeElement.style.borderStyle = 'dotted';
    }
  }
}
