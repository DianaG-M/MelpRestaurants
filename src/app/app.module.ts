import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { AppRoutingModule } from './app.routes';
import { HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AscNameComponent } from './components/asc-name/asc-name.component';
import { NamePipe } from './pipe/name.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingPipe } from './pipe/rating.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RestaurantsComponent,
    AscNameComponent,
    NamePipe,
    MenuComponent,
    RatingComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
