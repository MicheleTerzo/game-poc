import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-starting-modal',
  templateUrl: './starting-modal.component.html',
  styleUrls: ['./starting-modal.component.scss']
})
export class StartingModalComponent implements OnInit {
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  playerColors: { name: string, value: string }[] = [
    {
      name: 'Blu',
      value: 'blue'
    },
    {
      name: 'Verde',
      value: 'green'
    },
    {
      name: 'Arancio',
      value: 'orange'
    },
    {
      name: 'Rosso',
      value: 'Red'
    }
  ];
  playerIcons: { name: string, value: string }[] = [
    {
      name: 'Carretto',
      value: 'fas fa-trailer',
    },
    {
      name: 'Jet',
      value: 'fas fa-fighter-jet'
    },
    {
      name: 'Cavallo',
      value: 'fas fa-horse'
    },
    {
      name: 'Auto',
      value: 'fas fa-car-side'
    }
  ]

  playerCount: FormControl = this.fb.control(0);

  playersConfiguration: FormGroup;


  constructor(private fb: FormBuilder) {
    this.playersConfiguration = fb.group({
      players: fb.array([])
    });
    this.playersConfiguration.valueChanges.pipe(debounceTime(800)).forEach((value) => console.log(value));
  }

  get players(): FormArray {
    return this.playersConfiguration.get('players') as FormArray
  }

  ngOnInit(): void {
    this.playerCount.valueChanges.forEach((value) => {
      this.addOrRemovePlayers(value);
    });
    this.playerCount.patchValue(2);
  }

  /**
   * Adds or remove players from playersArray
   * @param count the selected number of players to play with
   */
  addOrRemovePlayers(count: number): void {
    let realCount = 0;
    let deleteCount = 0;
    const arrayLength = this.players.length;
    if (arrayLength === 0) {
      realCount = count;
    }
    if ((arrayLength > 0) && (arrayLength < count)) {
      realCount = count - arrayLength;
    }
    if (arrayLength > count) {
      deleteCount = arrayLength - count;
    }
    for (let a = 0; a < deleteCount; a++) {
      this.players.removeAt(this.players.length - 1);
    }
    for (let amount = 0; amount < realCount; amount++) {
      this.players.push(
        this.fb.group({
          name: this.fb.control(''),
          color: this.fb.control(''),
          icon: this.fb.control('')
        })
      );
    }
  }


  closeModal(): void {
    this.closeModalEmitter.emit();
  }


}
