// import { createOvermind } from 'overmind';
// import { Provider } from 'overmind-react';
// import * as React from 'react';
// import { render } from 'react-dom';
// import { app as overmind } from './app';
import App from "./js/App";
// import 'todomvc-common/base.css';
// import 'todomvc-app-css/index.css';

//MW CurrentModule handles the rendering and imports that stule information
import { CurrentModule } from "./js/CurrentModule";
// import './css/index.css';
// import './css/tailwind.css';

// const rootElement = document.getElementById('root');

// export const overmind = createOvermind(config, {
//   // devtools: "penguin.linux.test:3031" //
//   // devtools: false,
// });

// render(
//   <Provider value={overmind}>
//     <App />
//   </Provider>,
//   rootElement
// );
// console.log('index called');
CurrentModule(App);
