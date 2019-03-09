import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent {

  constructor(private messageService: MessageService) { 
    messageService.getTestData().subscribe(data=> {
      console.log("Received at 5 -- " + data);
    });

  }

}
