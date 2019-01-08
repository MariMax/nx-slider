## Project setup

```
npm i nx-slider
```

## Basic usage example

### Add module into your app

```
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxSliderModule,
  ],
})
export class AppModule {
}

```

### Add murkup to the template file

```
<nx-slider>
  content goes here
</nx-slider>
```

### Slider consists of 2 main elements, slider itself and toggler - directive, can be added to any element on the page in this case quetion mark in the header

### Template for this page looks similar to the template bellow, will be explained in next stories.

### The main part here is toggler and slider

```
<style>
  .content {
    background-color: white;
    flex: 1;
  }
</style>
<div class="container">
  <div class="nibr-header">
  <div class="app-name">App Name</div>
  <button nxSliderToggle class="toggle-button">?</button>
  <div class="user-name">User Name</div>
  </div>

  <div class="wrapper">
    <nx-slider [maxWidth]="300">
      <div class="content"></div>
    </nx-slider>
  </div>
</div>

```
