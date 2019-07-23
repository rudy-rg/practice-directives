import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]'
})
export class CustomDirective {

  constructor(private element: ElementRef) { }


  @HostListener('mouseenter')
  public onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
