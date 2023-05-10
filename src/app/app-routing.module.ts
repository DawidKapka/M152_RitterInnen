import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnimationsComponent} from "./animations/animations.component";
import {ImagesComponent} from './images/images.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'images', component: ImagesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
