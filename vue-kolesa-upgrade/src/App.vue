<template>
  <div id="app">
    <div class="wrap">
      <div class="content-container">
        <header class="header">
            <div class="header__logo">
                <img src="@/assets/svg/kolesa-logo.svg" alt="Logo">
            </div>
            <form action="" class="header__form">
              <search></search>
            </form>
            <user></user>
        </header>
        <side-navigation></side-navigation>
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
    <modal :isModalOpen="isShowModal" @toggle="toggleModal"></modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Search from './components/Search.vue';
import SideNavigation from './components/sideNavigation.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Search,
    User,
    SideNavigation,
  },
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
