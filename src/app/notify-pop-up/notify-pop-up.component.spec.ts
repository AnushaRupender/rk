import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyPopUpComponent } from './notify-pop-up.component';

describe('NotifyPopUpComponent', () => {
  let component: NotifyPopUpComponent;
  let fixture: ComponentFixture<NotifyPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
