export function renderMarioGolfEl(characterObject) {
    const marioGolfEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const specialEl = document.createElement('p');
    const statListEl = document.createElement('ul');
    const powerEl = document.createElement('li');
    const controlEl = document.createElement('li');
    const spinEl = document.createElement('li');

    nameEl.textContent = characterObject.name;
    specialEl.textContent = `Special Shot: ${characterObject.special}`;
    statListEl.textContent = 'Stats:';
    powerEl.textContent = `Power: ${characterObject.power}`;
    controlEl.textContent = `Control: ${characterObject.control}`;
    spinEl.textContent = `Spin: ${characterObject.spin}`;

    statListEl.append(powerEl, controlEl, spinEl);
    marioGolfEl.append(nameEl, specialEl, statListEl);

    return marioGolfEl;
}