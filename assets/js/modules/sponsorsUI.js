/**
 * Sponsors UI Module
 * Renders sponsor tiers (Platinum, Gold, Community) from sponsors data.
 */
import { sponsors } from '../data/sponsors.js';

function sponsorSlotHTML(s) {
    if (s.imgUrl) {
        return `
      <div class="sponsor-slot" title="${s.name}">
        <img src="${s.imgUrl}" alt="${s.name}" style="max-width:100%; max-height:40px; object-fit:contain;" onerror="this.parentElement.textContent='${s.name}'">
      </div>
    `;
    }
    return `<div class="sponsor-slot">${s.name || 'Partner'}</div>`;
}

export function initSponsors() {
    const platinumGrid = document.querySelector('.tier-grid.platinum');
    const goldGrid = document.querySelector('.tier-grid.gold');
    const communityGrid = document.querySelector('.tier-grid.community');

    const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
    const goldSponsors = sponsors.filter(s => s.tier === 'gold');
    const communitySponsors = sponsors.filter(s => s.tier === 'community' || s.tier === 'partner');

    // Only override if data is provided for that tier
    if (platinumGrid && platinumSponsors.length > 0) {
        platinumGrid.innerHTML = platinumSponsors.map(sponsorSlotHTML).join('');
    }

    if (goldGrid && goldSponsors.length > 0) {
        goldGrid.innerHTML = goldSponsors.map(sponsorSlotHTML).join('');
    }

    if (communityGrid && communitySponsors.length > 0) {
        communityGrid.innerHTML = communitySponsors.map(sponsorSlotHTML).join('');
    }
}
