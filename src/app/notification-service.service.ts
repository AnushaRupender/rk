import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  public notificationList = [{name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'123', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'124', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'125', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'126', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'127', status: 'active', number: 9876543210},
  {name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'128', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'129', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'121', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'122', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'130', status: 'active', number: 9876543210},{name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'123', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'131', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'132', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'133', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'134', status: 'active', number: 9876543210},
  {name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'1123', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'1224', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'1125', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'1126', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'1127', status: 'active', number: 9876543210},
  {name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'1128', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'1129', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'1121', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'1122', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'1130', status: 'active', number: 9876543210},{name: "Notification 1", summary: "He wants the loan in year ending, Name:Raj",custId:'123', status: 'active', number: 9876543210},
  {name: "Notification 2", summary: "He wants the loan in year ending, Name:Raj",custId:'1131', status: 'disabled', number: 9876543210},
  {name: "Notification 3", summary: "He wants the loan in year ending, Name:Raj",custId:'1132', status: 'active', number: 9876543210},
  {name: "Notification 4", summary: "He wants the loan in year ending, Name:Raj",custId:'1133', status: 'active', number: 9876543210},
  {name: "Notification 5", summary: "He wants the loan in year ending, Name:Raj",custId:'1134', status: 'active', number: 9876543210}]
  constructor() { }

  get NotificationList(){
  	return this.notificationList;
  }
}
