import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnimationsComponent} from "./animations/animations.component";
import {ImagesComponent} from './images/images.component';
import {SoundsComponent} from "./components/sounds/sounds.component";
import {MockupsComponent} from "./mockups/mockups.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {VideosComponent} from "./videos/videos.component";
import {StyleguideComponent} from "./components/styleguide/styleguide.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'mockups', component: MockupsComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'sounds', component: SoundsComponent },
  { path: 'styleguide', component: StyleguideComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
