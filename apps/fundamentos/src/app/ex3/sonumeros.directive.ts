import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSonumeros]'
})
export class SonumerosDirective {

  @HostListener('keydown', ['$event']) 
  onKeyDown(e: KeyboardEvent) {
    if ('0123456789'.indexOf(e.key) === -1) {
      e.preventDefault();
    }
  }
}
