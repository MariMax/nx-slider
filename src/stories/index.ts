import {storiesOf} from '@storybook/angular';
import {NxSliderComponent} from 'nx-slider';
import {withNotes} from '@storybook/addon-notes';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import * as marked from 'marked';

storiesOf('Nx-Split-Page', module)
  .addDecorator(withKnobs)
  .add('Install', () => ({
    moduleMetadata: {
      declarations: [NxSliderComponent],
    },
    template: `
        <div>
          <nx-slider>
          </nx-slider>
        </div>
      `,
  }));
//   .add(
//     'Long, short',
//     withNotes({text: marked(longMainShortSide)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//         <div>
//           <style>
//             .long-content \{
//               background-color: #D13A32;
//               min-height: 500px;
//               width: 100%;
//             \}
//             .short-content \{
//               background-color: #0460a9;
//               height: 100px;
//               width: 100%;
//             \}
//           </style>
//         <nx-split-page [mainMinSize]="100" [sideMinSize]="50">
//           <div main-area class="long-content">
//           </div>
//           <div side-area class="short-content">
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     'Short, long',
//     withNotes({text: marked(shortMainLongSide)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//         <div>
//           <style>
//             .long-content \{
//               background-color: #D13A32;
//               min-height: 500px;
//               width: 100%;
//             \}
//             .short-content \{
//               background-color: #0460a9;
//               height: 100px;
//               width: 100%;
//             \}
//           </style>
//           <nx-split-page [mainMinSize]="100" [sideMinSize]="50">
//             <div main-area class="short-content">
//             </div>
//             <div side-area class="long-content">
//             </div>
//           </nx-split-page>
//         </div>
//     `,
//     })),
//   )
//   .add(
//     `Persistent position, Local storage`,
//     withNotes({text: marked(persistentPosition)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//           \}
//         </style>
//         <nx-split-page storageSettingsKey="localStorageKey" [mainMinSize]="100" [sideMinSize]="50">
//           <div main-area class="blue">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//           <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     `Persistent position, any storage`,
//     withNotes({text: marked(persistentPositionAny)})(() => ({
//       moduleMetadata: {
//         providers: [
//           {
//             provide: NxSplitPageLocalStorageService,
//             useFactory: () => sessionStorage,
//           },
//         ],
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//           \}
//         </style>
//         <nx-split-page storageSettingsKey="sessionStorageKey" [mainMinSize]="100" [sideMinSize]="50">
//           <div main-area class="blue">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//           <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     `Min/Max settings`,
//     withNotes({text: marked(minMax)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//           \}
//         </style>
//         <nx-split-page [mainMinSize]="10" sideSize="25%" [sideMinSize]="20">
//           <div main-area class="blue">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//           <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     `Hide side`,
//     withNotes({text: marked(hide)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//           \}
//         </style>
//         <nx-split-page [hideSidebar]="${boolean(
//           'Hidden side',
//           true,
//         )}" [mainMinSize]="10">
//           <div main-area class="blue">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//           <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     `Auto hide side pane`,
//     withNotes({text: marked(autoHide)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//           \}
//         </style>
//         <nx-split-page [mainMinSize]="10000">
//           <div main-area class="blue">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//           <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//           </div>
//         </nx-split-page>
//       </div>
//     `,
//     })),
//   )
//   .add(
//     `Full height/scroll`,
//     withNotes({text: marked(full)})(() => ({
//       moduleMetadata: {
//         declarations: [NxSplitPageComponent],
//       },
//       template: `
//       <div>
//         <style>
//           .root \{
//             height: 100vh;
//           \}
//           .red \{
//             background-color: #D13A32;
//             color: white;
//             padding: 1em;
//             border-left: 1px solid gray;
//             overflow-y: auto;
//           \}
//           .blue \{
//             background-color: #0460a9;
//             color: white;
//             padding: 1em;
//             border-right: 1px solid gray;
//             overflow-y: auto;
//           \}
//         </style>
//         <div >
//           <nx-split-page class="root" [mainMinSize]="50" sideSize="30%" [sideMinSize]="20">
//             <div main-area class="blue">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//               dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//               perferendis rem temporibus ut voluptates, voluptatum?

//             </div>
//             <div side-area class="red">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?

//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa deserunt
//             dicta earum, et explicabo impedit inventore necessitatibus nesciunt nihil non nulla officiis
//             perferendis rem temporibus ut voluptates, voluptatum?
//             </div>
//           </nx-split-page>
//         </div>
//       </div>
//     `,
//     })),
//   );
