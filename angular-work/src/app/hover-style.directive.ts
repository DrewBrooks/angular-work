import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective{
  @Input () style: string;
  constructor(private elm: ElementRef) {
  }
  @HostListener('mouseenter') onEnter(): void{
    switch (this.style){
      case 'textDecoration': {
        this.elm.nativeElement.style.textDecoration = 'underline';
        break;
      }
      case 'fontWeight': {
        this.elm.nativeElement.style.fontWeight = 'bold';
        break;
      }
    }
  }
  @HostListener('mouseleave') onLeave(): void{
    switch (this.style){
      case 'textDecoration': {
        this.elm.nativeElement.style.textDecoration = 'none';
        break;
      }
      case 'fontWeight': {
        this.elm.nativeElement.style.fontWeight = 'normal';
        break;
      }
    }
  }
}
