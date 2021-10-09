/* eslint-disable no-plusplus */
import '../scss/style.scss';

const clothes = [
    {
        id:    0,
        isNew: false,
        title: 'Джинсы "Зимой и летом одним цветом"',
        price: 290,
        img:   'src/assets/img/jeans-img.png',
    },
    {
        id:    1,
        isNew: false,
        title: 'Свитшот "Простенько и со вкусом"',
        price: 270,
        img:   'src/assets/img/big-img.png',
    },
    {
        id:    2,
        isNew: true,
        title: 'Свитер "Чистый код"',
        price: 180,
        img:   'src/assets/img/sweater-img.png',
    },
    {
        id:    3,
        isNew: false,
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 220,
        img:   'src/assets/img/item-img.png',
    },
    {
        id:    4,
        isNew: false,
        title: 'Шапка "Просто сделай это"',
        price: 150,
        img:   'src/assets/img/beanie-img.jpg',
    },
    {
        id:    5,
        isNew: true,
        title: 'Джоггеры "Стильный программист"',
        price: 300,
        img:   'src/assets/img/trousers-img.png',
    },
    {
        id:    6,
        isNew: false,
        title: 'Кеды "Замшевоё всё"',
        price: 350,
        img:   'src/assets/img/sneakers-img.jpg',
    },
];

for (let i = 0; i < clothes.length; i += 1) {
    if (clothes[i].isNew === true) {
        clothes.unshift(clothes.splice(i, 1)[0]);
    }
}

const accessories = [
    {
        id:    7,
        isNew: true,
        title: 'Фирменный рюкзак',
        price: 290,
        img:   'src/assets/img/backpack-img.png',
    },
    {
        id:    8,
        isNew: false,
        title: 'Синяя кружка',
        price: 270,
        img:   'src/assets/img/mug-img.jpg',
    },
    {
        id:    9,
        isNew: false,
        title: 'Бутылка для воды',
        price: 180,
        img:   'src/assets/img/bottle-img.png',
    },
    {
        id:    10,
        isNew: true,
        title: 'Подставка под клавиатуру',
        price: 220,
        img:   'src/assets/img/keyrest-img.jpg',
    },
    {
        id:    11,
        isNew: false,
        title: 'Нож-брелок',
        price: 150,
        img:   'src/assets/img/knife-img.jpeg',
    },
    {
        id:    12,
        isNew: false,
        title: 'Коврик для мышки',
        price: 300,
        img:   'src/assets/img/mousepad-img.jpg',
    },
];

for (let i = 0; i < accessories.length; i += 1) {
    if (accessories[i].isNew === true) {
        accessories.unshift(accessories.splice(i, 1)[0]);
    }
}

const makeProductCard = (isNew, title, price, img) => `<div class="catalog__item">
    <div class="catalog__img">
        <img src="${img}" alt="item">
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
            Размеры S/M/L
        </div>
        <button class="catalog__btn" type="button">
            Заказать
        </button>
    </div>
</div>`;

clothes.forEach((card) => {
    const {
        isNew, title, price, img,
    } = card;
    const cardHtml = makeProductCard(isNew, title, price, img);

    document.querySelector('.js__catalog').innerHTML += cardHtml;
});
