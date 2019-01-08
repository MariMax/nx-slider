### Long page with a lot of content and scroll

for any page it's good to set position to relative, as slider should have an origin for it's absolute position, it will try to take the full height of the parent element

#### Tempalte for this example looks like code below

```
<style>
  .long-page {
    position: relative
  }
</style>
<div class="long-page">
  <nx-slider [maxWidth]="300">
    <div class="content">
      <div class="top"> top </div>
      <div class="middle"> middle </div>
      <div class="bottom"> bottom </div>
    </div>
  </nx-slider>
  long long text here
</div>
```
