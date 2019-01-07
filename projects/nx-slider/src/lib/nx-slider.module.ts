import {NgModule} from '@angular/core';
import {NxSliderComponent} from './components/slider/nx-slider.component';
import {NxSliderToggleDirective} from './components/toggle/nx-slider-toggle.directive';

@NgModule({
  declarations: [NxSliderComponent, NxSliderToggleDirective],
  exports: [NxSliderComponent, NxSliderToggleDirective],
})
export class NxSliderModule {}
