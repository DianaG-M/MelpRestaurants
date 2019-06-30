import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
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
