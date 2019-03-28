import { Injectable } from '@angular/core';
import { NotificationRecord } from './notification-record'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  public notificationList = [];

  constructor(private http: HttpClient) { }

  get NotificationList(){    
  	return this.http.get('http://localhost:8181/getAllNotifications');
  }

  deleteNotification(notification: NotificationRecord){
    
  }
}
