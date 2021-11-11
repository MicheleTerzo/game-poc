import {Component, OnInit} from '@angular/core';
import {ClassicBoard} from "../../../../../assets/boards/classic_board";

@Component({
  selector: 'app-table-board',
  templateUrl: './table-board.component.html',
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {
  board = ClassicBoard;

  tableRotation: string = '0deg';

  constructor() {
  }

  ngOnInit(): void {
  }


  rotateBoardLeft(): void {
    this.tableRotation = (parseInt(this.tableRotation) - 90) + 'deg';
    console.log(this.tableRotation, 'left')
  }

  rotateBoardRight(): void {
    this.tableRotation = (parseInt(this.tableRotation) + 90) + 'deg';
    console.log(this.tableRotation, 'right')
  }

}
