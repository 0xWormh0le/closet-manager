import { Component, OnInit } from '@angular/core';
import { ClosetService } from '../services/closet.service';

@Component({
  selector: 'app-closet-widget',
  templateUrl: './closet-widget.component.html',
  styleUrls: ['./closet-widget.component.scss']
})
export class ClosetWidgetComponent implements OnInit {
  closetList: any;
  closetService: ClosetService;

  constructor(private closetservice: ClosetService) {
    this.closetService = closetservice;
    this.closetList = this.closetService.getAllClothes();

    console.log(this.closetList);
  }

  ngOnInit() {
  }

}