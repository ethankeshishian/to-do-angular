import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedItems:string[];
  constructor(private service:ItemsService) {
    this.completedItems = this.service.getCompleted();
   }

  ngOnInit(): void {
  }

}
