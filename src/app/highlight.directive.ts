// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor() { }

// }


import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}