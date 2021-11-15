import getItemsRequest from './requests';
import { showLoader, hideLoader } from './loader';
import { hideError, showError } from './error';
import { addAppListeners, createApp } from './app';

export default () => {
    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError('Произошла ошибка, попробуйте ещё раз.');
            } else {
                Array.from(createApp(data)).forEach((button) => {
                    addAppListeners(button);
                });
            }
        })
        .catch((e) => {
            showError(e.message);
        })
        .finally(() => {
            hideLoader();
        });
};
