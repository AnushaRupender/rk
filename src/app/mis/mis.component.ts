import { Component, OnInit, Input } from '@angular/core';
import { faStar, faEdit, faTrash, faBan, faBell, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { CompanyListService } from '../company-list.service';
import { CompanyRecord } from '../company-record';

@Component({
  selector: 'mis',
  templateUrl: './mis.component.html',
  styleUrls: ['./mis.component.sass']
})
export class MisComponent implements OnInit {
  faStar= faStar;
  faEdit= faEdit;
  faTrash= faTrash;
  faBan= faBan;
  faBell= faBell;
  faThumbsDown= faThumbsDown;
  selectedRecord:CompanyListService;
  constructor(private companyList: CompanyListService) { }

  ngOnInit() {
    this.data = this.companyList.getCompanyList();
  }
  removeRecord(company: CompanyRecord){
    this.companyList.removeCompany(company);
  }
  prioritiseRecord(company: CompanyRecord,value) {
    this.companyList.setPriority(company,value);
  }
  editRecord(company: CompanyRecord) {
    this.selectedRecord =  company;
  }
  updateRecord(emitterdObject) {
    if(emitterdObject.update)
      this.companyList.updateCompany(this.selectedRecord,emitterdObject.company);
    this.selectedRecord = {};
  }
}
