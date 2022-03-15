import { states } from './data-states.js';
import { renderStateEl } from './render-states.js';
const stateListEl = document.querySelector('.state-section');

for (let state of states) {
    const stateEl = renderStateEl(state);

    stateListEl.append(stateEl);
}

import { marioGolf } from './data-mario-golf.js';
import { renderMarioGolfEl } from './render-mario-golf.js';
const marioListEl = document.querySelector('.mario-section');

for (let character of marioGolf) {
    const marioGolfEl = renderMarioGolfEl(character);

    marioListEl.append(marioGolfEl);
}