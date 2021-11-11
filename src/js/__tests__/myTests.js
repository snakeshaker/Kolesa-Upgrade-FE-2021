describe('Проверка', () => {
    const appElement = document.createElement('div');
    const loader = document.createElement('div');
    const btn = document.createElement('button');
    const eventHandler = jest.fn();

    appElement.setAttribute('id', 'app');
    loader.setAttribute('id', 'loader');
    const insert = elem => document.body.appendChild(elem);
    const remove = elem => elem.remove();

    beforeAll(() => {
        insert(appElement);
        insert(loader);
        insert(btn);
        btn.addEventListener('click', eventHandler);
        btn.click();
    });

    afterAll(() => {
        remove(appElement);
    });

    it('Тест на добавление контента на страницу в блок #app', () => {
        appElement.innerHTML += 'Контент добавлен!';
        expect(appElement).toMatchSnapshot();
    });

    it('Тест на отображение и скрытие лоадера', () => {
        expect(document.getElementById('loader')).toBeTruthy();
        remove(loader);
        expect(document.getElementById('loader')).toBeFalsy();
    });

    it('Тест на добавление событий', () => {
        expect(eventHandler).toHaveBeenCalled();
    });
});
