/*
 * Copyright (C) 2025 Aideé Casillas
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */


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
    anchors: [],
    menu: '#menu',
    slidesNavigation: true,
    navigation: true,
    navigationPosition: 'left',
    scrollOverflow: true,
    scrollOverflowReset: true,
    autoScrolling: true,
    responsiveSlides: true,
    TouchSensitivity: 10,
    continuousVertical: true,
    continuousHorizontal: true,
    fixedElements: '#header, #footer',
  });
});
