import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public dataSubject = new BehaviorSubject<string>("Test");

  getTestData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  pustTestData(dataToPush: string): void {
    this.dataSubject.next(dataToPush);
  }
}
