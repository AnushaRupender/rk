import { Component, OnInit, Input } from '@angular/core';
import { NotificationServiceService } from '../notification-service.service'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'notifcations-list',
  templateUrl: './notifcations-list.component.html',
  styleUrls: ['./notifcations-list.component.sass']
})
export class NotifcationsListComponent implements OnInit {
  // @Input('notificationsDummy') notifications;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  lastScrollValue = 0;  
  notificationsToDisplay;
  noOfNotificationsToList = 5;
  notificationPerPage = 5;
  notificationTitle = '';
  originalNotificationData;

  constructor(private notificationListService:NotificationServiceService) { }
  
  ngOnInit() {
    this.notificationListService.NotificationList.subscribe(data => {
      this.originalNotificationData = data.data;
      this.notificationsToDisplay = data.data;
    });
    
  	window.addEventListener('scroll', event => {
      let documentElement = document.documentElement
      let docBody = document.body
      let scrollTop = 'scrollTop'
      let scrollHeight = 'scrollHeight'
      let scrollPercent = (documentElement[scrollTop] || docBody[scrollTop]) / ((documentElement[scrollHeight] || docBody[scrollHeight]) - documentElement.clientHeight) * 100
      if (scrollPercent > 70) {
        if (window.pageYOffset > this.lastScrollValue) {
          if (this.notificationsToDisplay && this.notificationsToDisplay.length > this.noOfNotificationsToList) {
            this.noOfNotificationsToList += this.notificationPerPage
          }
        }
      }
      this.lastScrollValue = window.pageYOffset
    });
  }
  resetDisplayData() {
    this.lastScrollValue = 0;  
    this.notificationsToDisplay = [];
    this.noOfNotificationsToList = 5;
  }
  searchChanged() {
    this.resetDisplayData();
    if(this.notificationTitle != ''){
      var searchString = this.notificationTitle;
      this.notificationsToDisplay = this.originalNotificationData.filter(function(notification){
        if(notification.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) != -1)
          return notification
      });
      if(this.notificationsToDisplay.length < 5)
        this.noOfNotificationsToList = this.notificationsToDisplay.length;
    } else {
      this.notificationsToDisplay = this.originalNotificationData;
    }
  }

}
