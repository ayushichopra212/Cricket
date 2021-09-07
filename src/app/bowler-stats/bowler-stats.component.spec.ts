import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlerStatsComponent } from './bowler-stats.component';

describe('BowlerStatsComponent', () => {
  let component: BowlerStatsComponent;
  let fixture: ComponentFixture<BowlerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
