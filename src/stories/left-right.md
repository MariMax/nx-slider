### Slider can be placed on the left side of the page

By default slider will be on the right, but it's possible to change default position
just add additional param `mode` with one of the enum values

```
enum NxSliderModeEnum {
  LEFT,
  RIGHT,
}
```

### interractive example can change side with knobs

#### Tempalte for this example looks like code below

```
<style>
.long-content {
  background-color: #EDEDED;
  padding: 1em;
}
</style>
<div>
  <nx-slider [maxWidth]="300" [mode]="NxSliderModeEnum.LEFT">
    <div class="long-content">
      slider's content
    </div>
  </nx-slider>
  page content
</div>
```
