import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {

  constructor(private messageService: MessageService) { 
    messageService.getTestData().subscribe(data=> {
      console.log("Received at 4 -- " + data);
    });

  }

}
