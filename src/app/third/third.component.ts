import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {

  constructor(private messageService: MessageService) { 
    messageService.getTestData().subscribe(data=> {
      console.log("Received at 3 -- " + data);
    });

  }

}
