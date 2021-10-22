<template>
  <div id="app">
    <div class="wrap">
      <div class="content-container">
        <header class="header">
            <div class="header__logo">
                <img src="@/assets/svg/kolesa-logo.svg" alt="Logo">
            </div>
            <form action="" class="header__form">
                <label for="search" class="header__search search">
                    <button class="search__icon" type="button">
                        <img src="@/assets/svg/search-big.svg" alt="Search">
                    </button>
                    <input class="search__input" id="search" type="text" placeholder="Поиск">
                </label>
            </form>
            <a class="user-block" href="">
                <img class="user-block__avatar" src="@/assets/img/avatar.png" alt="User avatar">
                <div class="user-block__info">
                    <div class="user-block__name">
                        Мортиджан
                    </div>
                    <div class="user-block__points">
                        300 баллов
                    </div>
                </div>
            </a>
        </header>
        <aside class="aside">
            <nav class="aside__nav">
                <ul>
                    <li v-for="(link,index) in menuLinks" :key="index">
                        <a
                          v-if="link !== 'Kolesa Team'"
                          class="aside__nav-link"
                          :class="{ 'aside__nav--active': activeLink === link }"
                          @click="activeLink = link"
                          href="#"
                        >
                          {{ link }}
                        </a>
                        <a
                          v-else
                          class="aside__nav-link"
                          :class="{ 'aside__nav--active': activeLink === link }"
                          @click="activeLink = link"
                          href="#"
                        >
                          Kolesa <span class="aside__nav--bold">Team</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <main class="main">
            <div class="main__banner"></div>
            <div class="points">
                <a class="points__block points__block--green">
                    <div class="points__icon">
                        <img src="@/assets/svg/points-plus.svg" alt="plus">
                    </div>
                    <div class="points__info">
                        Получить баллы
                    </div>
                </a>
                <a class="points__block points__block--yellow">
                    <div class="points__icon">
                        <img src="@/assets/svg/points-question.svg" alt="question">
                    </div>
                    <div class="points__info">
                        Как получить баллы
                    </div>
                </a>
                <a class="points__block points__block--blue">
                    <div class="points__icon">
                        <img src="@/assets/svg/points-present.svg" alt="present">
                    </div>
                    <div class="points__info">
                        Подарить баллы
                    </div>
                </a>
            </div>
            <div class="main__item-filter">
              <div
                v-for="(tab,index) in filterTabs"
                :key="index"
                class="main__filter-radio"
              >
                <input
                  @click="
                    tab.id == 'item_all' ?
                    renderAll() : tab.id == 'item_clothes' ?
                    renderClothes() : renderAccessories()
                  "
                  class="js__filter"
                  type="radio"
                  :id="tab.id"
                  name="item-selector"
                >
                <label :for="tab.id">{{ tab.title }}</label>
              </div>
            </div>
            <div class="catalog js__catalog">
              <div
                v-for="item in renderCatalog"
                :key="item.id"
                class="catalog__item"
              >
                <div class="catalog__img">
                  <img
                    :src="require(`@/assets/img/${item.img}`)"
                    class="js__img" alt="item"
                    width="330"
                    height="330"
                  >
                  <div v-if="item.isNew" class="catalog__new">New</div>
                </div>
                <div class="catalog__info">
                  <div class="catalog__price">
                    {{item.price}} баллов
                  </div>
                  <div class="catalog__name">
                    {{item.title}}
                  </div>
                  <div v-if="item.isClothes" class="catalog__size">
                    Размеры S/M/L
                  </div>
                  <div v-if="!item.isClothes" class="catalog__size">
                    Объемы 0,5/0,7/1,0
                  </div>
                  <button @click="toggleModal" class="catalog__btn" type="button">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__socials">
                <div class="footer__credit">
                    © Kolesa Group
                </div>
                <ul>
                    <li><a href="https://www.instagram.com/kolesagroup/" target="_blank">
                        <img src="@/assets/svg/social-instagram.svg" alt="Instagram">
                    </a></li>
                    <li><a href="https://www.youtube.com/channel/UC6o6waSdIvmIdvy7qTqxY9A" target="_blank">
                        <img src="@/assets/svg/social-youtube.svg" alt="YouTube">
                    </a></li>
                    <li><a href="https://vk.com/kolesakrishamarket" target="_blank">
                        <img src="@/assets/svg/social-vk.svg" alt="VK">
                    </a></li>
                </ul>
            </div>
            <div class="footer__feedback">
                <div class="footer__info">
                    Есть идеи что улучшить? <br>
                    Не знаешь, с кем решить проблему?
                </div>
                <button class="footer__btn" type="button">
                    Написать
                </button>
            </div>
        </div>
    </footer>
    <div v-if="isShowModal" class="card-container">
        <div class="card">
            <div class="card__wrapper">
                <button class="card__close" type="button" @click="toggleModal"></button>
                <div class="card__images">
                    <img
                    src="@/assets/img/big-img.png"
                    alt="main image"
                    class="card__images--big">
                    <div class="card__little-images">
                        <div class="card__images--little">
                            <img src="@/assets/img/little-image1.png" alt="little image">
                        </div>
                        <div class="card__images--little">
                            <img
                            class="card__images--active"
                            src="@/assets/img/little-image2.png"
                            alt="little image">
                        </div>
                        <div class="card__images--little">
                            <img src="@/assets/img/little-image3.png" alt="little image">
                        </div>
                    </div>
                </div>
                <form class="card__info">
                    <div class="card__top">
                        <h3 class="card__title">Футболка "Эволюционируй или сдохни"</h3>
                        <p class="card__price">100 баллов</p>
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
                        <p class="card__heading">Цвета:</p>
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
                        <p class="card__heading">Info:</p>
                        <div class="card__radio-group">
                            <input type="radio" id="size-s" name="size-selector">
                            <label class="card__radio-group--size" for="size-s">S</label>
                            <input type="radio" id="size-m" name="size-selector">
                            <label class="card__radio-group--size" for="size-m">M</label>
                            <input type="radio" id="size-l" name="size-selector">
                            <label class="card__radio-group--size" for="size-l">L</label>
                        </div>
                        <p class="card__heading card__heading--bold">Details:</p>
                        <p>
                          Text
                           </p>
                        <p class="card__heading card__heading--bold">Info:</p>
                        <p>Info.</p>
                    </div>
                </form>
            </div>
        </div>
        <div class="card__overlay" @click="toggleModal"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
      filterTabs: [
        {
          title: 'Все товары',
          id: 'item_all',
        },
        {
          title: 'Одежда',
          id: 'item_clothes',
        },
        {
          title: 'Аксессуары',
          id: 'item_accessories',
        },
      ],
      menuLinks: [
        'Оргсхема',
        'Kolesa Team',
        'Kolesa Shop',
        'Картина компании',
        'Новости',
        'Education',
        'Guidelines',
        'Библиотека',
        'FAQ',
      ],
      activeLink: 'Kolesa Shop',
      renderCatalog: [],
      clothes: [
        {
          id: 0,
          isNew: false,
          title: 'Джинсы "Зимой и летом одним цветом"',
          price: 290,
          img: 'jeans-img.png',
          isClothes: true,
          details: 'Обычные синие джинсы. Материал: Деним 100%',
        },
        {
          id: 1,
          isNew: false,
          title: 'Свитшот "Простенько и со вкусом"',
          price: 270,
          img: 'big-img.png',
          isClothes: true,
          details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 2,
          isNew: true,
          title: 'Свитер "Чистый код"',
          price: 180,
          img: 'sweater-img.png',
          isClothes: true,
          details: 'Брендированный свитер от Robert Martin. Материал: Синтетика 100%',
        },
        {
          id: 3,
          isNew: false,
          title: 'Футболка "Эволюционируй или сдохни"',
          price: 220,
          img: 'item-img.png',
          isClothes: true,
          details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 90%, Вискоза 10%',
        },
        {
          id: 4,
          isNew: false,
          title: 'Шапка "Просто сделай это"',
          price: 150,
          img: 'beanie-img.jpg',
          isClothes: true,
          details: 'Брендированная шапка от Qazaq Republic. Материал: Хлопок 50%, Вискоза 50%',
        },
        {
          id: 5,
          isNew: true,
          title: 'Джоггеры "Стильный программист"',
          price: 300,
          img: 'trousers-img.png',
          isClothes: true,
          details: 'Брендированные джоггеры от China Republic. Материал: Хлопок 10%, Синтетика 90%',
        },
        {
          id: 6,
          isNew: false,
          title: 'Кеды "Замшевоё всё"',
          price: 350,
          img: 'sneakers-img.jpg',
          isClothes: true,
          details: 'Кеды от Levi`s',
        },
      ],
      accessories: [
        {
          id: 7,
          isNew: true,
          title: 'Фирменная кружка',
          price: 240,
          img: 'mug2-img.jpg',
          isClothes: false,
          details: 'Классная кружка',
        },
        {
          id: 8,
          isNew: false,
          title: 'Белая кружка',
          price: 180,
          img: 'mug-img.jpg',
          isClothes: false,
          details: 'Классная кружка',
        },
        {
          id: 9,
          isNew: false,
          title: 'Бутылка для воды',
          price: 160,
          img: 'bottle-img.png',
          isClothes: false,
          details: 'Классная бутылка',
        },
        {
          id: 10,
          isNew: true,
          title: 'Бутылка для спорт-пита',
          price: 100,
          img: 'bottle2-img.jpg',
          isClothes: false,
          details: 'Классная бутылка',
        },
        {
          id: 11,
          isNew: false,
          title: 'Прозрачная бутылка',
          price: 80,
          img: 'bottle1-img.png',
          isClothes: false,
          details: 'Классная бутылка',
        },
        {
          id: 12,
          isNew: false,
          title: 'Кружка с принтом',
          price: 110,
          img: 'mug1-img.jpg',
          isClothes: false,
          details: 'Классная кружка',
        },
      ],
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories];
    },
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    sortCatalog(arr) {
      return arr.slice().sort((item) => (item.isNew !== true ? 1 : -1));
    },
    renderAll() {
      this.renderCatalog = this.sortCatalog(this.allItems);
    },
    renderClothes() {
      this.renderCatalog = this.sortCatalog(this.clothes);
    },
    renderAccessories() {
      this.renderCatalog = this.sortCatalog(this.accessories);
    },
  },
  beforeMount() {
    this.renderAll();
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
