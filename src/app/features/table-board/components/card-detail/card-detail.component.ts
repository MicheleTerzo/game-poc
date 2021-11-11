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
  @Input() cardItem: ICompany | IProperty | ITrainStation;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.closeDialogEmitter.emit();
  }

}
