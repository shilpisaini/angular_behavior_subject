import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  constructor(private messageService: MessageService) { 
    messageService.getTestData().subscribe(data=> {
      console.log("Received at 1 -- " + data);
    });
  }

  sendTestData(): void {
    this.messageService.pustTestData("sending data from 1");
  }

}
