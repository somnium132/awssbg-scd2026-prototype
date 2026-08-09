/***
 * Speakers UI Module
 * Renders the Speakers UI, the marquee cards, grid and modal pop-up.
 */

import { speakers } from '../data/speakers.js';

const colors = ['blue', 'green', 'pink'];

export function openSpeakerModal(speaker) {
    const modal = document.getElementById('speakerModal');

    if (!modal) return;

    document.getElementById('smName').textContent = speaker?.name || "Speaker Name";
    document.getElementById('smRole').textContent = speaker?.role || "Speaker Role | Company";

    const sessionEl = document.getElementById('smSession');
    if (sessionEl) {
        sessionEl.textContent = speaker?.abstract || "Details about the speaker's session and discussion.";
    }

    const modalAvatar = modal.querySelector('.s-modal-head img, .chip-avatar img');
    if (modalAvatar) {
        modalAvatar.src = speaker?.picUrl || 'awssbg-logo.svg';
    }

    modal.classList.add('open');
}

export function closeSpeakerModal() {
    const modal = document.getElementById('speakerModal');
    if (modal) modal.classList.remove('open');
}

function speakerCardHTML(speaker, index, isStatic = false) {
    const color = colors[index % colors.length];
    const name = speaker.name || `Speaker ${index + 1}`;
    const role = speaker.role || 'Cloud Engineer · AWS Partner';
    const title = speaker.sessionTitle || 'Session Title Placeholder';
    const abstract = speaker.abstract || 'A brief intro about what this speaker will cover during their slot at the summit.';
    const status = speaker.status || 'TBA';
    const avatar = speaker.picUrl || 'awssbg-logo.svg';

    return `
    <div class="speaker-card ${color}" data-speaker-index="${index}">
      <div class="stair"><span class="c1"></span><span class="c2"></span></div>
      <div class="sc-top">
        <img class="chip" src="${avatar}" alt="${name}">
        <span class="tbd">${status}</span>
      </div>
      <div class="sc-body">
        <h5>${title}</h5>
        <span class="role">${name} · ${role}</span>
        <p>${abstract}</p>
        ${isStatic ? `
          <div class="sc-linkedin">
            <div class="li-badge">
              <svg width="12" height="12"><use href="#li-icon"></use></svg>
            </div>
            View profile
          </div>` : ''}
      </div>
    </div>
  `;
}

export function initSpeakers() {
    const marqueeTrack = document.getElementById('marqueeTrack');
    const speakerGrid = document.getElementById('speakerGridStatic');
    const modal = document.getElementById('speakerModal');

    //render marquee Track
    if (marqueeTrack) {
        const cards = speakers.map((s, i) => speakerCardHTML(s, i, false)).join('');
        marqueeTrack.innerHTML = cards + cards;
    }

    if (speakerGrid) {
        speakerGrid.innerHTML = speakers.map((s, i) => speakerCardHTML(s, i, true)).join('');
    }

    function handleCardClick(e) {
        const card = e.target.closest('.speaker-card');
        if (!card) return;
        const index = Number(card.dataset.speakerIndex);
        if (!Number.isNaN(index) && speakers[index]) {
            openSpeakerModal(speakers[index]);
        }
    }

    if (marqueeTrack) marqueeTrack.addEventListener('click', handleCardClick);
    if (speakerGrid) speakerGrid.addEventListener('click', handleCardClick);

    //handle close and ESC key
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal || e.target.closest('.modal-close')) {
                closeSpeakerModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSpeakerModal();
    });

    window.openSpeakerModal = openSpeakerModal;
    window.closeSpeakerModal = closeSpeakerModal;

}

