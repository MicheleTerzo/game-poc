import { TestBed } from '@angular/core/testing';

import { PlayerActionsService } from './player-actions.service';

describe('PlayerActionService', () => {
  let service: PlayerActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
