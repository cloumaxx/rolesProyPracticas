import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string>('');

  constructor() {}

  get notifications() {
    return this.notificationSubject.asObservable();
  }

  showNotification(message: string) {
    this.notificationSubject.next(message);
  }

  clearNotification() {
    this.notificationSubject.next('');
  }
}
