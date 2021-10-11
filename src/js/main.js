/* eslint-disable no-plusplus */
import '../scss/style.scss';
import { clothes, accessories } from './mock-catalog';

const allItems = [...clothes, ...accessories];
const filterChange = document.querySelectorAll('.js__filter');
const modalContainer = document.querySelector('.card-container');
const catalog = document.querySelector('.js__catalog');

function sortNew(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isNew === true) {
            arr.unshift(arr.splice(i, 1)[0]);
        }
    }
}
sortNew(clothes);
sortNew(accessories);
sortNew(allItems);

function addItem(isNew, title, price, img = 'src/assets/img/no-photo.jpg', isClothes, id) {
    const newDiv = document.createElement('DIV');

    if (newDiv) {
        newDiv.classList.add('catalog__item');
        newDiv.classList.add(`${id}`);
        newDiv.innerHTML = `<div class="catalog__img">
        <img class="js__img" src="${img}" alt="item" width="330" height="330">
        ${isNew ? '<div class="catalog__new">New</div>' : ''}
    </div>
    <div class="catalog__info">
        <div class="catalog__price">
            ${price} баллов
        </div>
        <div class="catalog__name">
            ${title}
        </div>
        <div class="catalog__size">
        ${isClothes ? 'Размеры S/M/L' : 'Объемы 0,5/0,7/1,0'}

        </div>
        <button class="catalog__btn" type="button">
            Заказать
        </button>
    </div>`;
    }

    return newDiv;
}

function renderCatalog(catalogFilter) {
    catalogFilter.forEach((card) => {
        const {
            isNew, title, price, img, isClothes, id,
        } = card;
        const cardCreate = addItem(isNew, title, price, img, isClothes, id);

        if (document.body.contains(catalog)) {
            catalog.append(cardCreate);
        }
    });
}

renderCatalog(allItems);

for (let i = 0; i < filterChange.length; i++) {
    filterChange[i].addEventListener('change', (e) => {
        const { target } = e;

        switch (target.id) {
            case 'item_clothes':
                if (document.body.contains(catalog)) {
                    catalog.innerHTML = '';
                }

                renderCatalog(clothes);
                break;
            case 'item_accessories':
                if (document.body.contains(catalog)) {
                    catalog.innerHTML = '';
                }

                renderCatalog(accessories);
                break;
            case 'item_all':
                if (document.body.contains(catalog)) {
                    catalog.innerHTML = '';
                }

                renderCatalog(allItems);
                break;
            default: break;
        }
    });
}

// MODAL WINDOW CODE

function changeModal(title, price, img = 'src/assets/img/no-photo.jpg', isClothes, details) {
    if (modalContainer) {
        modalContainer.innerHTML = `<div class="card">
        <div class="card__wrapper">
            <button class="card__close" type="button"></button>
            <div class="card__images">
                <img src="${img}" alt="main image" class="card__images--big">
                <div class="card__little-images">
                    <div class="card__images--little">
                        <img class="card__images--active" src="${img}" alt="little image" width="50" height="50">
                    </div>
                </div>
            </div>
            <form class="card__info">
                <div class="card__top">
                    <h3 class="card__title">${title}</h3>
                    <p class="card__price">${price} баллов</p>
                    <button class="card__button" type="submit">
                        Заказать
                    </button>
                    <div class="card__balance">
                        <div class="card__balance-info">
                            <p class="card__balance-info--gray">Твой баланс:</p>
                            <p class="card__sum">3 945 баллов</p>
                        </div>
                        <div class="card__logo"></div>
                    </div>
                </div>
                <div class="card__bottom">
                    ${isClothes ? `<p class="card__heading">Цвета:</p>
                    <div class="card__radio-group">
                        <input type="radio" id="color-blue" name="color-selector">
                        <label class="card__radio-group--color" for="color-blue">
                            <div class="card__square card__square--blue"></div>
                            Синий
                        </label>
                        <input type="radio" id="color-beige" name="color-selector">
                        <label class="card__radio-group--color" for="color-beige">
                            <div class="card__square card__square--beige"></div>
                            Бежевый
                        </label>
                        <input type="radio" id="color-gray" name="color-selector">
                        <label class="card__radio-group--color" for="color-gray">
                            <div class="card__square card__square--gray"></div>
                            Серый
                        </label>
                    </div>
                    <p class="card__heading">Размер:</p>
                    <div class="card__radio-group">
                        <input type="radio" id="size-s" name="size-selector">
                        <label class="card__radio-group--size" for="size-s">S</label>
                        <input type="radio" id="size-m" name="size-selector">
                        <label class="card__radio-group--size" for="size-m">M</label>
                        <input type="radio" id="size-l" name="size-selector">
                        <label class="card__radio-group--size" for="size-l">L</label>
                    </div>
                    <p class="card__heading card__heading--bold">Детали:</p>
                    <p>${details}</p>
                    <p class="card__heading card__heading--bold">Как выбрать размер:</p>
                    <p>Написать дяде Рику для уточнения.</p>`
            : `<p class="card__heading">Объем:</p>
                    <div class="card__radio-group">
                        <input type="radio" id="size-s" name="size-selector">
                        <label class="card__radio-group--size" for="size-s">0,5л</label>
                        <input type="radio" id="size-m" name="size-selector">
                        <label class="card__radio-group--size" for="size-m">0,7л</label>
                        <input type="radio" id="size-l" name="size-selector">
                        <label class="card__radio-group--size" for="size-l">1,0л</label>
                    </div>
                    <p class="card__heading card__heading--bold">Детали:</p>
                    <p>${details}</p>`}
                </div>
            </form>
        </div>
    </div>
    <div class="card__overlay"></div>`;
    }
}

function openModal() {
    modalContainer.classList.add('open');
}

function closeModal() {
    modalContainer.classList.remove('open');
}

function hasClass(elem, className) {
    return elem.classList.contains(className);
}

document.addEventListener('click', (e) => {
    if (
        hasClass(e.target, 'js__img')
        || hasClass(e.target, 'catalog__new')
        || hasClass(e.target, 'catalog__info')
        || hasClass(e.target, 'catalog__price')
        || hasClass(e.target, 'catalog__name')
        || hasClass(e.target, 'catalog__size')
        || hasClass(e.target, 'catalog__btn')
    ) {
        for (let i = 0; i < allItems.length; i++) {
            if (e.target.closest('.catalog__item').classList.contains(allItems[i].id)) {
                // eslint-disable-next-line max-len
                changeModal(allItems[i].title, allItems[i].price, allItems[i].img, allItems[i].isClothes, allItems[i].details);
            }
        }
        modalContainer.style.transition = 'all 0.2s ease-in';
        openModal();
    } else if (hasClass(e.target, 'card__overlay') || hasClass(e.target, 'card__close')) {
        closeModal();
    }
}, false);
