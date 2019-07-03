import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  orderByRating: any = [];
  constructor(private restaurant: RestaurantService) {
    this.restaurant.getData()
      .subscribe( data => {
        // console.log(data);
        this.orderByRating = data;
      });
   }

  ngOnInit() {
  }

}
