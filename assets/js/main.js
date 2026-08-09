/**
 * AWS Student Community Day: South Summit 2026
 * Main Application Entry Point
 */

import { initTheme } from './modules/theme.js';
import { initRouter } from './modules/routing.js';
import { initCountdown } from './modules/countdown.js';
import { initSpeakers } from './modules/speakersUI.js';
import { initMerch } from './modules/merchUI.js';
import { initChapters } from './modules/chaptersUI.js';
import { initSponsors } from './modules/sponsorsUI.js';
import { initAmazonQ } from './modules/amazonQ.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize core system modules
    initTheme();
    initRouter();
    initCountdown();

    // 2. Initialize UI views & dynamic content
    initSpeakers();
    initMerch();
    initChapters();
    initSponsors();

    // 3. Initialize interactive widgets
    initAmazonQ();
});
