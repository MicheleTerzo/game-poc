import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {ConfigurationService} from "../../services/configuration.service";

@Component({
  selector: 'app-starting-modal',
  templateUrl: './starting-modal.component.html',
  styleUrls: ['./starting-modal.component.scss']
})
export class StartingModalComponent implements OnInit {
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  //sliderConfiuration
  maxSlide: number = 3;
  minSlide: number = 1;
  slideCounter: number = 1;


  playerIcons = this.configService.icons;
  playerColors = this.configService.colors;
  matchPresetArray = this.configService.presets;
  startingMoney = this.configService.money;


  //playerCount Selector && match preset
  playerCount: FormControl = this.fb.control(0);

  //Player configuration form
  gameConfiguration: FormGroup;


  constructor(private fb: FormBuilder, private configService: ConfigurationService) {
    this.gameConfiguration = fb.group({
      players: fb.array([]),
      matchConfig: fb.group({
        preset: fb.control('easy', Validators.required),
        startingMoney: fb.control('2500', Validators.required)
      })
    });
    this.gameConfiguration.valueChanges.pipe(debounceTime(400)).forEach((value) => console.log(value));
  }

  get players(): FormArray {
    return this.gameConfiguration.get('players') as FormArray
  }

  get matchConfig(): FormGroup {
    return this.gameConfiguration.get('matchConfig') as FormGroup
  }

  ngOnInit(): void {
    this.playerCount.valueChanges.forEach((value) => {
      this.addOrRemovePlayers(value);
    });
    (this.matchConfig.get('preset') as FormControl).valueChanges.forEach((value) => {
      this.populateMatchConfig(value);
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
          name: this.fb.control('', Validators.required),
          color: this.fb.control('', Validators.required),
          icon: this.fb.control('', Validators.required)
        })
      );
    }
  }

  populateMatchConfig(key: string): void {
    console.log(key, 'key');
    const index = this.matchPresetArray.findIndex((preset) => preset.key === key);
    (this.matchConfig.get('startingMoney') as FormControl).patchValue(this.matchPresetArray[index].startingMoney);
  }


  /**
   * Emit the event to close the starting game modal
   */
  closeModal(): void {
    this.closeModalEmitter.emit();
  }

  sliderForward(): void {
    if ((this.slideCounter < this.maxSlide)) {
      this.slideCounter++;
    }
  }

  sliderBack(): void {
    if (this.slideCounter > this.minSlide) {
      this.slideCounter--;
    }
  }


}
