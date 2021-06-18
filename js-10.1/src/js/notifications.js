import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults, notice, info, success, error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaultModules.set(PNotifyMobile, {});

defaults.styling = 'material';
defaults.icons = 'material';
defaults.width = '250px';

alert({
  text: 'Aloha!',
});

// Manually set the type.
const myAlert = alert({
  text: "I'm an alert.",
  type: 'info',
});

// Automatically set the type.
const myNotice = notice({
  text: "I'm a notice.",
});

const myInfo = info({
  text: "I'm an info message.",
});

const mySuccess = success({
  text: "I'm a success message.",
});

const myError = error({
  text: "I'm an error message.",
});