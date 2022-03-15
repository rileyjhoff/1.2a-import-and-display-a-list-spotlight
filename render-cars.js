export function renderCarEl(carObject) {
    const carEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const mpgListEl = document.createElement('ul');
    const cityEl = document.createElement('li');
    const highwayEl = document.createElement('li');
    const msrpEl = document.createElement('p');

    carEl.classList.add('car');
    mpgListEl.classList.add('car-mpg-list');

    nameEl.textContent = carObject.make + ' ' + carObject.model;
    mpgListEl.textContent = 'MPG:';
    cityEl.textContent = `City: ${carObject.mpg.city}`;
    highwayEl.textContent = `Highway: ${carObject.mpg.highway}`;
    msrpEl.textContent = `MSRP: ${carObject.msrp}`;

    mpgListEl.append(cityEl, highwayEl);
    carEl.append(nameEl, mpgListEl, msrpEl);

    return carEl;
}