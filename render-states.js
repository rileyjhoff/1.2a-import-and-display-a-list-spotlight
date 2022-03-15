// <div class="states">
// <h2>Oregon</h2>
// <p>Capital: Salem</p>
// <p>Population: 4,237,256</p>
// <p>Admitted to the Union in 1859</p>
// </div>

export function renderStateEl(stateObject) {
    const stateEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const capitalEl = document.createElement('p');
    const populationEl = document.createElement('p');
    const admittedEl = document.createElement('p');

    stateEl.classList.add('state');

    nameEl.textContent = stateObject.name;
    capitalEl.textContent = `Capital: ${stateObject.capital}`;
    populationEl.textContent = `Populatoin: ${stateObject.population}`;
    admittedEl.textContent = `Admitted to the Union in ${stateObject.admitted}`;

    stateEl.append(nameEl, capitalEl, populationEl, admittedEl);

    return stateEl;
}