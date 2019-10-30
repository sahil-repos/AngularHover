import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  isHighlighted = false;

  constructor() { }


  @HostBinding('class.highlight')
  get highlightedClassName() {
    return this.isHighlighted;
  }


  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.isHighlighted = true;
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    this.isHighlighted = false;
  }

}
