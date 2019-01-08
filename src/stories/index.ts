import {storiesOf} from '@storybook/angular';
import {NxSliderComponent, NxSliderToggleDirective} from 'nx-slider';
import {withNotes} from '@storybook/addon-notes';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import * as marked from 'marked';
import * as defaultText from './default.md';
import * as longScrollablePage from './long-scrollable-page.md';
import * as longText from './long-text.md';
import * as longTextInSlider from './slider-with-long-text.md';
import * as wrongWay from './short-page-with-long-scrollable-content.md';
import * as correctWay from './short-page-with-long-scrollable-content-correct-implementation.md';
import * as manySliders from './many-sliders.md';
import {AppComponent} from 'src/app/app.component';

//#region styles
const styles = `
<style>
.container \{
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
\}
.nibr-header \{
  height: 36px;
  background-color: #0460A9;
  display: flex;
  justify-content: flex-end;
\}
.app-name \{
  margin-right: auto;
  color: white;
  align-self: flex-end;
  padding: 10px 10px 5px 10px;
\}
.user-name \{
  margin-right: 10px;
  color: white;
  align-self: flex-end;
  padding: 10px 10px 9px 5px;
\}
.toggle-button \{
  border: none;
  background: none;
  color: white;
  font-weight: 500;
  font-size: 1em;
  position: relative;
  width: 36px;
  cursor: pointer;
\}
.toggle-button[nx-slider-open], .toggle-button:hover, .toggle-button:active \{
  color: #0460A9;
  background-color: white;
\}
.wrapper \{
  flex: 1;
  position: relative;
\}
.content \{
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
\}
.top, .bottom, .middle \{
  background-color: #D13A32;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
\}
.middle \{
  background-color: #EDEDED;
  color: black;
  flex: 1;
\}
</style>
`;
//#endregion

storiesOf('Nx-Slider', module)
  .addDecorator(withKnobs)
  //#region install
  .add(
    'Install',
    withNotes({text: marked(defaultText)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
        ${styles}
        <div class="container">
          <div class="nibr-header">
            <div class="app-name">App Name</div>
            <button nxSliderToggle class="toggle-button">?</button>
            <div class="user-name">User Name</div>
          </div>

          <div class="wrapper">
            <nx-slider [maxWidth]="300">
              <div class="content">
                <div class="top"> top </div>
                <div class="middle"> middle </div>
                <div class="bottom"> bottom </div>
              </div>
            </nx-slider>
          </div>
        </div>
      `,
    })),
  )
  //#endregion
  //#region long page with scroll
  .add(
    'Long page with scroll',
    withNotes({text: marked(longScrollablePage)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
      ${styles}
        <style>
        .long-page \{
          position: relative
        \}
        </style>
        <div class="nibr-header">
          <div class="app-name">App Name</div>
          <button nxSliderToggle class="toggle-button">?</button>
          <div class="user-name">User Name</div>
        </div>

        <div class="long-page">
          <nx-slider [maxWidth]="300">
            <div class="content">
              <div class="top"> top </div>
              <div class="middle"> middle </div>
              <div class="bottom"> bottom </div>
            </div>
          </nx-slider>
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
        </div>
    `,
    })),
  )
  //#endregion
  //#region long page with scroll wrong way
  .add(
    'short page with long scroll, the wrong way',
    withNotes({text: marked(wrongWay)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
      ${styles}
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
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />

        </div>
      </div>

    `,
    })),
  )
  //#endregion
  //#region same, correct way
  .add(
    'short page with long scroll, the right way',
    withNotes({text: marked(correctWay)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
      ${styles}
      <style>
      .long-container \{
        position: relative;
      \}
      </style>
      <div class="container">
        <div class="nibr-header">
          <div class="app-name">App Name</div>
          <button nxSliderToggle class="toggle-button">?</button>
          <div class="user-name">User Name</div>
        </div>

        <div class="wrapper" style="overflow-y: auto">
          <div class="long-container">
            <nx-slider [maxWidth]="300">
              <div class="content">
                <div class="top"> top </div>
                <div class="middle"> middle </div>
                <div class="bottom"> bottom </div>
              </div>
            </nx-slider>
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />
          ${longText}
          <br />

        </div>
        </div>
      </div>

    `,
    })),
  )
  //#endregion
  //#region slider with long content
  .add(
    'slider with long content',
    withNotes({text: marked(longTextInSlider)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
    ${styles}
    <style>
    .long-content \{
      background-color: #EDEDED;
      padding: 1em;
    \}
    </style>
    <div class="container">
      <div class="nibr-header">
        <div class="app-name">App Name</div>
        <button nxSliderToggle class="toggle-button">?</button>
        <div class="user-name">User Name</div>
      </div>

      <div class="wrapper">
          <nx-slider [maxWidth]="300">
            <div class="long-content">
                ${longText}
                <br />
                ${longText}
                <br />
                ${longText}
                <br />
                ${longText}
                <br />
                ${longText}
                <br />
            </div>
          </nx-slider>
        ${longText}
      </div>
    </div>
  `,
    })),
  )
  //#endregion
  //#region left-right
  .add(
    'left-right',
    withNotes({text: marked(longTextInSlider)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      template: `
    ${styles}
    <style>
    .long-content \{
      background-color: #EDEDED;
      padding: 1em;
      flex: 1;
    \}
    </style>
    <div class="container">
      <div class="nibr-header">
        <div class="app-name">App Name</div>
        <button nxSliderToggle class="toggle-button">?</button>
        <div class="user-name">User Name</div>
      </div>

      <div class="wrapper">
          <nx-slider [maxWidth]="300" [mode]="${
            boolean('Right', true) ? 1 : 0
          }">
          <div class="long-content">
              ${longText}
          </div>
        </nx-slider>

        ${longText}
      </div>
    </div>
  `,
    })),
  )
  //#endregion
  //#region many sliders
  .add(
    'many independent sliders',
    withNotes({text: marked(manySliders)})(() => ({
      moduleMetadata: {
        declarations: [NxSliderComponent, NxSliderToggleDirective],
      },
      component: AppComponent,
    })),
  );
//#endregion
