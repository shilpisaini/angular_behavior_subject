import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(private messageService: MessageService) { 
    messageService.getTestData().subscribe(data=> {
      console.log("Received at 2 -- " + data);
    });

  }
}
