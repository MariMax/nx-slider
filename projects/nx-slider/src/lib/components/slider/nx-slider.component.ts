import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {INxSliderState} from '../../types/nx-slider-state.interface';
import {NxSliderService} from '../../services/nx-slider.service';
import {NxSliderModeEnum} from '../../types/nx-slider-mode.enum';
import {INxSliderActions} from '../../types/nx-slider-actions.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'nx-slider',
  template: `
    <aside
      class="side-nav"
      [class.side-nav--visible]="isOpen"
      (click)="onClose()"
    >
      <div
        class="side-nav__container"
        [style.max-width]="maxAllowedWidth"
        [style.transition-duration]="transtionDuration"
        [class.right-mode]="isSliderInRightMode"
        (click)="stopEvent($event)"
        (transitionend)="onTransitionEnd()"
        #container
      >
        <section class="content" [class.inactive]="!isActive">
          <ng-content></ng-content>
        </section>
      </div>
    </aside>
  `,
  styleUrls: ['./nx-slider.component.css'],
})
export class NxSliderComponent implements OnInit, OnDestroy {
  @Input() state?: INxSliderState & INxSliderActions | null = null;
  @Input() maxWidth?: number | string = '';
  @Input() mode?: NxSliderModeEnum = NxSliderModeEnum.RIGHT;
  @Input() slideDurationMS?: number | null = null;
  private isSliderOpen: boolean = false; // tslint:disable-line:no-inferrable-types
  private openSubscription: Subscription;
  public isActive: boolean = false; // tslint:disable-line:no-inferrable-types

  public get isSliderInRightMode(): boolean {
    return NxSliderModeEnum.RIGHT === this.mode;
  }

  public get maxAllowedWidth(): string | null {
    if (typeof this.maxWidth === 'string' && this.maxWidth) {
      return this.maxWidth;
    }
    if (this.maxWidth === 0 || this.maxWidth) {
      return `${this.maxWidth}px`;
    }
    return null;
  }

  public get transtionDuration(): string {
    if (this.slideDurationMS !== null) {
      return `${this.slideDurationMS}ms`;
    }
    return 'auto';
  }

  public get isOpen(): boolean {
    return this.isSliderOpen;
  }

  constructor(private defaultState: NxSliderService) {
    this.onTransitionStart = this.onTransitionStart.bind(this);
  }

  ngOnInit() {
    this.state = this.state || this.defaultState;
    this.openSubscription = this.state.isOpen.subscribe(this.onTransitionStart);
  }

  ngOnDestroy() {
    if (this.openSubscription) {
      this.openSubscription.unsubscribe();
    }
  }

  public onClose(): void {
    this.state.onClose();
  }

  public stopEvent(event: Event) {
    event.stopPropagation();
  }

  public onTransitionEnd(): void {
    this.isActive = this.isSliderOpen;
  }

  public onTransitionStart(value: boolean): void {
    this.isActive = true;
    this.isSliderOpen = value;
  }
}
