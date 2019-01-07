import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { NxSliderModule } from 'nx-slider';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
