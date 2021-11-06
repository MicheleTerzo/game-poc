import {Injectable} from '@angular/core';
import {IMatchPreset} from "../interfaces/imatch-preset";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  //Available icons
  private readonly _playerIcons: { name: string, value: string }[] = [
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
  ];
  //Available colors
  private readonly _playerColors: { name: string, value: string }[] = [
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
  //Match Preset Names
  private readonly _matchPreset: IMatchPreset[] = [
    {
      displayName: 'Facile',
      key: 'easy',
      startingMoney: '2500'
    },
    {
      displayName: 'Intermedio',
      key: 'medium',
      startingMoney: '2000'
    },
    {
      displayName: 'Difficile',
      key: 'hard',
      startingMoney: '1500'
    },
    {
      displayName: 'Personalizzato',
      key: 'custom',
      startingMoney: '1500'
    }
  ];
  // Available starting money
  private readonly _startingMoney: string[] = ['1500', '2000', '2500', '3000'];

  constructor() {
  }

  get icons(): { name: string, value: string }[] {
    return this._playerIcons;
  }

  get colors(): { name: string, value: string }[] {
    return this._playerColors;
  }

  get presets(): IMatchPreset[] {
    return this._matchPreset;
  }

  get money(): string[] {
    return this._startingMoney;
  }
}
