### Many independent sliders on the page

by default slider and toggler keep state in the internal singleton service, so if someone wants to put many sliders on the same page, they all will be in the same state, either open or closed, but there is way to pass external implementation of the state handler

it must implement 2 interfaces `INxSliderActions, INxSliderState`
and may look like class below

```
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
```

then simply pass instance to toggle directive and to the sliter itself via `state` property

#### Tempalte for this example looks like code below

```
<div class="container">
  <style>
    .long-content {
      background-color: #ededed;
      padding: 1em;
      flex: 1;
    }
  </style>
  <div class="nibr-header">
    <div class="app-name">App Name</div>
    <button
      nxSliderToggle
      [state]="sliderOneStateHandler"
      class="toggle-button"
    >?</button>
    <button
      nxSliderToggle
      [state]="sliderTwoStateHandler"
      class="toggle-button"
    >!</button>
    <div class="user-name">User Name</div>
  </div>

  <div class="wrapper" style="display: flex;">
    <div style="flex:1 1 50%;>
      <nx-slider
        [maxWidth]="100"
        [mode]="0"
        [state]="sliderOneStateHandler">

        <div class="long-content">
          slider content
        </div>
      </nx-slider>
      block content
    </div>
    <div style="flex:1 1 50%;">
      <nx-slider
        [maxWidth]="100"
        [mode]="1"
        [state]="sliderTwoStateHandler">

        <div class="long-content">
          slider content
        </div>
      </nx-slider>
      block content
    </div>
  </div>
</div>
```
