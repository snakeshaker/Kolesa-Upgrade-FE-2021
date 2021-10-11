/* eslint-disable no-plusplus */
import '../scss/style.scss';

const clothes = [
    {
        id:        0,
        isNew:     false,
        title:     'Джинсы "Зимой и летом одним цветом"',
        price:     290,
        img:       'src/assets/img/jeans-img.png',
        isClothes: true,
        details:   'Обычные синие джинсы. Материал: Деним 100%',
    },
    {
        id:        1,
        isNew:     false,
        title:     'Свитшот "Простенько и со вкусом"',
        price:     270,
        img:       'src/assets/img/big-img.png',
        isClothes: true,
        details:   'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:        2,
        isNew:     true,
        title:     'Свитер "Чистый код"',
        price:     180,
        img:       'src/assets/img/sweater-img.png',
        isClothes: true,
        details:   'Брендированный свитер от Robert Martin. Материал: Синтетика 100%',
    },
    {
        id:        3,
        isNew:     false,
        title:     'Футболка "Эволюционируй или сдохни"',
        price:     220,
        img:       'src/assets/img/item-img.png',
        isClothes: true,
        details:   'Брендированная футболка от Qazaq Republic. Материал: Хлопок 90%, Вискоза 10%',
    },
    {
        id:        4,
        isNew:     false,
        title:     'Шапка "Просто сделай это"',
        price:     150,
        img:       'src/assets/img/beanie-img.jpg',
        isClothes: true,
        details:   'Брендированная шапка от Qazaq Republic. Материал: Хлопок 50%, Вискоза 50%',
    },
    {
        id:        5,
        isNew:     true,
        title:     'Джоггеры "Стильный программист"',
        price:     300,
        img:       'src/assets/img/trousers-img.png',
        isClothes: true,
        details:   'Брендированные джоггеры от China Republic. Материал: Хлопок 10%, Синтетика 90%',
    },
    {
        id:        6,
        isNew:     false,
        title:     'Кеды "Замшевоё всё"',
        price:     350,
        img:       'src/assets/img/sneakers-img.jpg',
        isClothes: true,
        details:   'Кеды от Levi`s',
    },
];

const accessories = [
    {
        id:        7,
        isNew:     true,
        title:     'Фирменная кружка',
        price:     240,
        img:       'src/assets/img/mug2-img.jpg',
        isClothes: false,
        details:   'Классная кружка',
    },
    {
        id:        8,
        isNew:     false,
        title:     'Белая кружка',
        price:     180,
        img:       'src/assets/img/mug-img.jpg',
        isClothes: false,
        details:   'Классная кружка',
    },
    {
        id:        9,
        isNew:     false,
        title:     'Бутылка для воды',
        price:     160,
        img:       'src/assets/img/bottle-img.png',
        isClothes: false,
        details:   'Классная бутылка',
    },
    {
        id:        10,
        isNew:     true,
        title:     'Бутылка для спорт-пита',
        price:     100,
        img:       'src/assets/img/bottle2-img.jpg',
        isClothes: false,
        details:   'Классная бутылка',
    },
    {
        id:        11,
        isNew:     false,
        title:     'Прозрачная бутылка',
        price:     80,
        img:       'src/assets/img/bottle1-img.png',
        isClothes: false,
        details:   'Классная бутылка',
    },
    {
        id:        12,
        isNew:     false,
        title:     'Кружка с принтом',
        price:     110,
        img:       'src/assets/img/mug1-img.jpg',
        isClothes: false,
        details:   'Классная кружка',
    },
];

function sortNew(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].isNew === true) {
            arr.unshift(arr.splice(i, 1)[0]);
        }
    }
}
sortNew(clothes);
sortNew(accessories);

const allItems = [...clothes, ...accessories];

sortNew(allItems);

function addItem(isNew, title, price, img = 'src/assets/img/no-photo.jpg', isClothes, id) {
    const newDiv = document.createElement('DIV');

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

    return newDiv;
}

function renderCatalog(catalogFilter) {
    catalogFilter.forEach((card) => {
        const {
            isNew, title, price, img, isClothes, id,
        } = card;
        const cardCreate = addItem(isNew, title, price, img, isClothes, id);

        document.querySelector('.js__catalog').append(cardCreate);
    });
}

renderCatalog(allItems);

const filterChange = document.querySelectorAll('.js__filter');

for (let i = 0; i < filterChange.length; i += 1) {
    filterChange[i].addEventListener('change', (e) => {
        const { target } = e;

        switch (target.id) {
            case 'item_clothes':
                document.querySelector('.js__catalog').innerHTML = '';
                renderCatalog(clothes);
                break;
            case 'item_accessories':
                document.querySelector('.js__catalog').innerHTML = '';
                renderCatalog(accessories);
                break;
            case 'item_all':
                document.querySelector('.js__catalog').innerHTML = '';
                renderCatalog(allItems);
                break;
            default: break;
        }
    });
}

// MODAL WINDOW CODE
const modalContainer = document.querySelector('.card-container');

function changeModal(title, price, img = 'src/assets/img/no-photo.jpg', isClothes, details) {
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
