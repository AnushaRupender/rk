import { Injectable } from '@angular/core';
import { CompanyRecord } from './company-record';


@Injectable({
  providedIn: 'root'
})
export class CompanyListService {
  public companyList = [{companyName:'company1',phoneNumber: 9876543210,description: 'desc1',otherInfo: 'Other Information',prior: 1},
  {companyName:'company2',phoneNumber: 9876543211,description: 'desc2',otherInfo: 'Other Information1',prior: 0},
  {companyName:'company2',phoneNumber: 9876543211,description: 'desc2',otherInfo: 'Other Information1',prior: -1}];
  constructor() { }

  getCompanyList () {
  	return this.companyList
  }
  addCompany (company:CompanyRecord) {
  	if(this.companyList.indexOf(company) === -1) {
  		this.companyList.push(company);
  	}
  }
  removeCompany(company: CompanyRecord) {
    this.companyList.splice(this.companyList.indexOf(company),1);
  }
  setPriority(company: CompanyRecord, value: number) {
    if(this.companyList.indexOf(company) != -1) {
      this.companyList[this.companyList.indexOf(company)].prior = value;
    }
  }
  updateCompany(previousValue: CompanyRecord, updatedValue: CompanyRecord) {
    if(this.companyList.indexOf(previousValue) != -1) {
      this.companyList[this.companyList.indexOf(previousValue)] = updatedValue;
    }
  }
}
