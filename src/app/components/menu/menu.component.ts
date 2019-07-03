import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
restaurantOne: any = [];
  constructor(public restaurant: RestaurantService) {
    this.restaurant.getData()
      .subscribe( data => {
        // console.log(data);
        this.restaurantOne = data;
      });
  }

  ngOnInit() {
  }

}
