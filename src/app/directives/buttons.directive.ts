import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[main-btn]'
})
export class MainButtonDirective implements OnInit {
  @HostBinding('class')
  elementClass = 'main-button';
  @Input() color: string = '';

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    if (this.color !== '') {
      switch (this.color) {
        case 'primary': {
          this.el.nativeElement.classList.add('main-button-primary');
          break;
        }
        case 'secondary': {
          this.el.nativeElement.classList.add('main-button-secondary');
          break;
        }
        case 'tertiary': {
          this.el.nativeElement.classList.add('main-button-tertiary');
          break;
        }
      }
    }
  }
}


@Directive({
  selector: '[main-icon-btn]'
})
export class MainIconButtonDirective implements OnInit {
  @HostBinding('class')
  elementClass = 'main-icon-button';
  @Input() color: string = '';

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    if (this.color !== '') {
      switch (this.color) {
        case 'primary': {
          this.el.nativeElement.classList.add('main-icon-button-primary');
          break;
        }
        case 'secondary': {
          this.el.nativeElement.classList.add('main-icon-button-secondary');
          break;
        }
        case 'tertiary': {
          this.el.nativeElement.classList.add('main-icon-button-tertiary');
          break;
        }
      }
    }
  }
}

@Directive({
  selector: '[close-icon-btn]'
})
export class CloseIconButtonDirective {
  @HostBinding('class')
  elementClass = 'close-icon-button';

  constructor() {

  }
}
