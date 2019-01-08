### Long content in the slider

sometimes people want a lot of content in the slider, simply put it there it will enable scroll automatically

#### Tempalte for this example looks like code below

```
<style>
.long-content {
  background-color: #EDEDED;
  padding: 1em;
}
</style>
<div>
  <nx-slider [maxWidth]="300">
    <div class="long-content">
      slider's long content
    </div>
  </nx-slider>
  page content
</div>
```
