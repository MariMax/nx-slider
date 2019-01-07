import {
  Directive,
  Input,
  OnInit,
  HostListener,
  Renderer2,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import {INxSliderState} from '../../types/nx-slider-state.interface';
import {NxSliderService} from '../../services/nx-slider.service';
import {INxSliderActions} from '../../types/nx-slider-actions.interface';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[nxSliderToggle]',
})
export class NxSliderToggleDirective implements OnInit, OnDestroy {
  @Input() state?: INxSliderState & INxSliderActions | null = null;
  private isOpen: boolean = false; // tslint:disable-line:no-inferrable-types
  private isOpenSubscription: Subscription;

  constructor(
    private defaultState: NxSliderService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  ngOnInit() {
    this.state = this.state || this.defaultState;
    this.isOpenSubscription = this.state.isOpen.subscribe((value: boolean) => {
      this.isOpen = value;
      if (value) {
        this.renderer.setAttribute(
          this.el.nativeElement,
          'nx-slider-open',
          'true',
        );
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'nx-slider-open');
      }
    });
  }
  ngOnDestroy() {
    if (this.isOpenSubscription) {
      this.isOpenSubscription.unsubscribe();
    }
  }

  @HostListener('click')
  private onClick(): void {
    return this.isOpen ? this.state.onClose() : this.state.onOpen();
  }
}
