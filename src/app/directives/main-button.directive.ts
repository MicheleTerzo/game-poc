import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mainButton]'
})
export class MainButtonDirective {
  @HostBinding('class')
  elementClass = 'main-button';

  constructor() {

  }

}
