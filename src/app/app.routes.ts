import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AscNameComponent } from './components/asc-name/asc-name.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'restaurants', component: MenuComponent },
    { path: 'asc-AZ', component: AscNameComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

