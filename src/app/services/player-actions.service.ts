import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerActionsService {

  constructor() { }

  diceRoll(): number{
    return Math.ceil(Math.random()*12);
  }
}
