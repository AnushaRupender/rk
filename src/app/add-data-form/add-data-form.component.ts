import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyRecord } from '../company-record';
import { CompanyListService } from '../company-list.service'


@Component({
  selector: 'add-data-form',
  templateUrl: './add-data-form.component.html',
  styleUrls: ['./add-data-form.component.sass']
})
export class AddDataFormComponent implements OnInit {
  @Output() addData = new EventEmitter();
  company = new CompanyRecord({});
  formSumbit = false;

  constructor(private companyList: CompanyListService) { }

  ngOnInit() {
  }
  addRow() {
    this.formSumbit = true;
    if(this.company.companyName && this.company.phoneNumber){
      this.companyList.addCompany(this.company);
      this.formSumbit = false;
      this.resetData();
    }
  }
  resetData() {
    this.company = new CompanyRecord({});
  }
}
