import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiintelComponent } from './artiintel.component';

describe('ArtiintelComponent', () => {
  let component: ArtiintelComponent;
  let fixture: ComponentFixture<ArtiintelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtiintelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiintelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
