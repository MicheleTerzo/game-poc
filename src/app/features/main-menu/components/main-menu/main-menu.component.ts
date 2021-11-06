import {Component} from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  startModal: boolean = false;

  constructor() {
  }

  openStartGameModal(): void {
    this.startModal = true;
  }

  closeStartGameModal(): void {
    this.startModal = false;
  }

}
