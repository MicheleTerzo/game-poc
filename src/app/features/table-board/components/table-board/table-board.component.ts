import {Component, OnInit} from '@angular/core';
import {ClassicBoard} from "../../../../../assets/boards/classic_board";

@Component({
  selector: 'app-table-board',
  templateUrl: './table-board.component.html',
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {
  board = ClassicBoard;

  constructor() {
  }

  ngOnInit(): void {

  }

}
