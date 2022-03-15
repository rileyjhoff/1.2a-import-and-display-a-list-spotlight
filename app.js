import { states } from './data-states.js';
import { renderStateEl } from './render-states.js';
const stateSectionEl = document.querySelector('.state-section');

for (let state of states) {
    const stateEl = renderStateEl(state);

    stateSectionEl.append(stateEl);
}

import { marioGolf } from './data-mario-golf.js';
import { renderMarioGolfEl } from './render-mario-golf.js';
const marioGolfSectionEl = document.querySelector('.mario-section');

for (let character of marioGolf) {
    const marioGolfEl = renderMarioGolfEl(character);

    marioGolfSectionEl.append(marioGolfEl);
}

import { cars } from './data-cars.js';
import { renderCarEl } from './render-cars.js';
const carSectionEl = document.querySelector('.car-section');

for (let car of cars) {
    const carEl = renderCarEl(car);

    carSectionEl.append(carEl);
}

import { NBA } from './data-nba.js';
import { renderNbaEl } from './render-nba.js';
const nbaSectionEl = document.querySelector('.nba-section');

for (let team of NBA) {
    const nbaEl = renderNbaEl(team);

    nbaSectionEl.append(nbaEl);
}