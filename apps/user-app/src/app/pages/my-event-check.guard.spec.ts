import { TestBed } from '@angular/core/testing';

import { MyEventCheckGuard } from './my-event-check.guard';

describe('MyEventGuardGuard', () => {
  let guard: MyEventCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyEventCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
