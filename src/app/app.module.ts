import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { AnimationsComponent } from './animations/animations.component';
import { ImagesComponent } from './images/images.component';
import { GridVerticalComponent } from './components/grid-vertical/grid-vertical.component';
import { HeaderComponent } from './components/header/header.component';
import { GridHorizontalComponent } from './components/grid-horizontal/grid-horizontal.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AnimationsComponent,
        ImagesComponent,
        GridVerticalComponent,
        HeaderComponent,
        GridHorizontalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
