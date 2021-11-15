import toggleFavoriteRequest from './requests';

export const createApp = (data) => {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = data.html;
    appElement.style.display = 'block';

    return appElement.querySelector('button');
};

export const toggleAppContent = (targetElem) => {
    toggleFavoriteRequest(targetElem.dataset.id)
        .then(({ data: buttonData }) => {
            if (buttonData.result === 'set') {
                targetElem.textContent = '🌝';
            } else {
                targetElem.textContent = '🌚';
            }
        });
};

export const addAppListeners = (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        e.currentTarget.textContent = 'Загрузка...';

        toggleAppContent(e.currentTarget);
    });
};
