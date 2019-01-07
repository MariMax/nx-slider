import {Observable} from 'rxjs';

export abstract class INxSliderState {
  public readonly isOpen!: Observable<boolean>;
}
