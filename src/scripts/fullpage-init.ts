// src/scripts/fullpage-init.ts
import $ from 'jquery';

declare global {
  interface Window {
    fullpage: any;
  }
}

$(function () {
  new window.fullpage('#fullpage', {
    sectionsColor: [],
    anchors: ['firstPage', 'secondPage'],
    menu: '#menu',
    slidesNavigation: true,
    navigation: true,
    scrollOverflow: true,
    scrollOverflowReset: true,
  });
});
