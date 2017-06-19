import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentTestComponent } from './instrument-test.component';

describe('InstrumentTestComponent', () => {
  let component: InstrumentTestComponent;
  let fixture: ComponentFixture<InstrumentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
