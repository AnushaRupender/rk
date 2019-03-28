import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CompanyRecord } from '../company-record';

@Component({
  selector: 'edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.sass']
})
export class EditDetailsComponent implements OnInit {
  @Input() originalRecord:CompanyRecord;
  @Output() updated = new EventEmitter<object>();
  showEditPopUp = false;
  record = new CompanyRecord({});
  constructor() { }

  ngOnInit() {
  }
  saveData() {
    this.showEditPopUp = false;
  	this.updated.emit({company:this.record,update:true});
  }
  closePopUp() {
    this.showEditPopUp = false;
    this.updated.emit({company:this.record,update:false});
  }
  ngOnChanges() {
    this.record = Object.assign({},this.originalRecord); 
    if(this.originalRecord && this.originalRecord.companyName)   
      this.showEditPopUp = true;
  }
}
