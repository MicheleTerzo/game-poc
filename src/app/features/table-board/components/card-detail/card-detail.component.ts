import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICompany} from "../../../../models/ICompany";
import {IProperty} from "../../../../models/IProperty";
import {ITrainStation} from "../../../../models/ITrainStation";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Output() closeDialogEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Input() cardItemInput: ICompany | IProperty | ITrainStation;
  item;

  constructor() {
  }

  ngOnInit(): void {
    if (this.cardItemInput) {
      switch (this.cardItemInput.tag) {
        case 'property': {
          this.item = this.cardItemInput as IProperty;
          break;
        }
        case 'company': {
          this.item = this.cardItemInput as ICompany;
          break;
        }
        case 'station': {
          this.item = this.cardItemInput as ITrainStation;
          break;
        }
      }
    }
  }


  // listenToClick(): void {
  //   document.addEventListener('click', (e) => {
  //     if (!document.getElementById('cardBox').contains(e.target as Node)) {
  //       this.closeDialog();
  //     }
  //   })
  // }

  closeDialog(): void {
    this.closeDialogEmitter.emit();
  }

}
