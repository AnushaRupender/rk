import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataFormComponent } from './add-data-form.component';
import { CompanyRecord } from '../company-record';
import { CompanyListService } from '../company-list.service'

describe('AddDataFormComponent', () => {
  let component: AddDataFormComponent;
  let fixture: ComponentFixture<AddDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataFormComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component)
    expect(component).toBeTruthy();
  });
});
