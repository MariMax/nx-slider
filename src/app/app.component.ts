import { Component } from '@angular/core';
import { INxSliderActions } from 'projects/nx-slider/src/public_api';
import { INxSliderState } from 'nx-slider/nx-slider';
import { Observable, BehaviorSubject } from 'rxjs';

class SliderStateHandler implements INxSliderActions, INxSliderState {
  private isSliderOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private $isSliderOpen = this.isSliderOpen.asObservable();

  constructor() {}

  public get isOpen(): Observable<boolean> {
    return this.$isSliderOpen;
  }

  public onClose(): void {
    this.isSliderOpen.next(false);
  }

  public onOpen(): void {
    this.isSliderOpen.next(true);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sliderOne = new SliderStateHandler();
  public sliderTwo = new SliderStateHandler();
}
