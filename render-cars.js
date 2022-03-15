export function renderCarEl(carObject) {
    const carEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const mpgListEl = document.createElement('ul');
    const cityEl = document.createElement('li');
    const highwayEl = document.createElement('li');
    const msrpEl = document.createElement('p');

    nameEl.textContent = carObject.make + ' ' + carObject.model;
    mpgListEl.textContent = 'MPG:';
    cityEl.textContent = `City: ${carObject.city}`;
    highwayEl.textContent = `Highway: ${carObject.highway}`;
    msrpEl.textContent = `MSRP: ${carObject.msrp}`;

    mpgListEl.append(cityEl, highwayEl);
    carEl.append(nameEl, mpgListEl, msrpEl);

    return carEl;
}