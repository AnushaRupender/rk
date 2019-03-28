import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.sass']
})
export class NotificationPageComponent implements OnInit {
  showNotificationPopUp = false;
  constructor() { }

  ngOnInit() {
  }

}
