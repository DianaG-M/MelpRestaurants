import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-asc-name',
  templateUrl: './asc-name.component.html',
  styleUrls: ['./asc-name.component.css']
})
export class AscNameComponent implements OnInit {
  dataRestaurants: any = [];
  constructor(public restaurant: RestaurantService) {
    this.restaurant.getData()
      .subscribe( data => {
        console.log(data);
        this.dataRestaurants = data;
      });
  }

  ngOnInit() {
  }

}
