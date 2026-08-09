/**
 * Amazon Q Assistant Widget Module
 * Manages the floating Q bubble prompt and active interaction states.
 */

export function initAmazonQ() {
    const aqBubble = document.getElementById('amazonQBubble');
    const aqBot = document.getElementById('amazonQBot');
    const aqBubbleCta = document.getElementById('amazonQBubbleCta');

    if (!aqBubble || !aqBot) return;

    // Clear any older persistent dismiss state
    try {
        localStorage.removeItem('scd-aq-bubble');
    } catch (e) { }

    function hideAqBubble() {
        aqBubble.hidden = true;
    }

    function openAmazonQ(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        hideAqBubble();
        // Hook for real Amazon Q / Bedrock chatbot widget when ready
        aqBot.classList.add('is-active');
        aqBot.setAttribute('aria-pressed', 'true');
    }

    // Always show on fresh page load
    aqBubble.hidden = false;

    aqBot.addEventListener('click', openAmazonQ);

    if (aqBubbleCta) {
        aqBubbleCta.addEventListener('click', openAmazonQ);
    }

    aqBubble.addEventListener('click', (e) => {
        if (e.target === aqBubbleCta) return;
        openAmazonQ(e);
    });
}
