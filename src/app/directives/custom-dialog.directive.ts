import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[customDialog]'
})
export class CustomDialogDirective {
  @HostBinding('class')
  elementClass = 'custom-dialog';

  constructor() {
  }
}

@Directive({
  selector: '[customDialogHeader]'
})
export class CustomDialogHeaderDirective {
  @HostBinding('class')
  elementClass = 'custom-dialog-header';

  constructor() {
  }
}

@Directive({
  selector: '[customDialogFooter]'
})
export class CustomDialogFooterDirective {
  @HostBinding('class')
  elementClass = 'custom-dialog-footer';

  constructor() {
  }
}
