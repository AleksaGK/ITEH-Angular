import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(private elRef:ElementRef) { 
    elRef.nativeElement.style.color = 'red';
  }

}
