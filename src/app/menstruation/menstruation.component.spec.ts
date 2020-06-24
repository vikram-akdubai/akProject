import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstruationComponent } from './menstruation.component';

describe('MenstruationComponent', () => {
  let component: MenstruationComponent;
  let fixture: ComponentFixture<MenstruationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenstruationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenstruationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
