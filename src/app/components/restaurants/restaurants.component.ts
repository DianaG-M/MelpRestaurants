import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  @Input() dataRestaurants: any = [];

  constructor() {
    }

  ngOnInit() {
  }

}
