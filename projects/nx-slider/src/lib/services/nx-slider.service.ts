import {Injectable} from '@angular/core';
import {INxSliderState} from '../types/nx-slider-state.interface';
import {INxSliderActions} from '../types/nx-slider-actions.interface';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NxSliderService implements INxSliderState, INxSliderActions {
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
