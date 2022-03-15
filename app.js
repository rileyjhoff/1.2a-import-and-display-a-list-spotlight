import { states } from './data-states.js';
import { renderStateEl } from './render-states.js';
const stateListEl = document.querySelector('.state-section');

for (let state of states) {
    const stateEl = renderStateEl(state);

    stateListEl.append(stateEl);
}

