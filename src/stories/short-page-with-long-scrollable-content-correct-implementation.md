### Short page with long content, made in a correct way

contrarary to previous example this one will work properly, and the only difference between them is an additional `<div>` with `position: relative` witch wraps the whole content, this makes it easy to calculate the full height, so slider will be stretched

#### Tempalte for this example looks like code below

```
<div class="container">
  <div class="nibr-header">
    <div class="app-name">App Name</div>
    <button nxSliderToggle class="toggle-button">?</button>
    <div class="user-name">User Name</div>
  </div>

  <div class="wrapper" style="overflow-y: auto">
    <div style="position: relative">
      <nx-slider [maxWidth]="300">
        <div class="content">
          <div class="top"> top </div>
          <div class="middle"> middle </div>
          <div class="bottom"> bottom </div>
        </div>
      </nx-slider>
      long text here
    </div>
  </div>
</div>
```
