import { Component, OnInit, Input } from '@angular/core';
import { faPhone, faTrash, faCommentDots } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  @Input('notification') notification;
  faPhone = faPhone;
  faTrash = faTrash;
  faCommentDots = faCommentDots;
  constructor() { }

  ngOnInit() {
  }

}
