import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchValidateComponent } from './match-validate.component';

describe('MatchValidateComponent', () => {
  let component: MatchValidateComponent;
  let fixture: ComponentFixture<MatchValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
