import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-player-banner',
  templateUrl: './player-banner.component.html',
  styleUrls: ['./player-banner.component.scss']
})
export class PlayerBannerComponent implements OnInit {

  @Input() playerConfig: any = {};
  @Input() money: string = '';
  @Input() properties: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.playerConfig, 'playerCOnfig');
  }

}
