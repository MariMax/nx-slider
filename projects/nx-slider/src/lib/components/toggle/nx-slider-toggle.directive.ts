import {Directive, Input, OnInit, HostListener} from '@angular/core';
import {INxSliderState} from '../../types/nx-slider-state.interface';
import {NxSliderService} from '../../services/nx-slider.service';
import {INxSliderActions} from '../../types/nx-slider-actions.interface';
import {take} from 'rxjs/operators';

@Directive({
  selector: '[nxSliderToggle]',
})
export class NxSliderToggleDirective implements OnInit {
  @Input() state?: INxSliderState & INxSliderActions | null = null;

  constructor(private defaultState: NxSliderService) {}

  ngOnInit() {
    this.state = this.state || this.defaultState;
  }

  @HostListener('click')
  private onClick(): void {
    this.state.isOpen.pipe(take(1)).subscribe((value: boolean) => {
      return value ? this.state.onClose() : this.state.onOpen();
    });
  }
}
