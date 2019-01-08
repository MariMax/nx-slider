### Short page with long content, made in a wrong way

this page seems to be fine, but try to scroll with open slider, it will go up, what is not what most of the people expect in most cases
#### Tempalte for this example looks like code below

```
<div class="container">
  <div class="nibr-header">
    <div class="app-name">App Name</div>
    <button nxSliderToggle class="toggle-button">?</button>
    <div class="user-name">User Name</div>
  </div>

  <div class="wrapper" style="overflow-y: auto">
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
```
