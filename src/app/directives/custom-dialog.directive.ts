import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[customDialog]'
})
export class CustomDialogDirective {
  @HostListener('class')
  elementClass = 'custom-dialog';

  constructor() {
  }

}
