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
            <user :balance="balance"></user>
        </header>
        <side-navigation></side-navigation>
        <main class="main">
            <div class="main__banner"></div>
            <hot-buttons></hot-buttons>
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
                  <button @click="openCard(item)" class="catalog__btn" type="button">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
    <app-footer></app-footer>
    <modal
      :data="modalData"
      :balance="balance"
      :isModalOpen="isShowModal"
      @toggle="toggleModal"
      @order="setBalance"
    ></modal>
    <order-modal
      :data="modalData"
      :balance="balance"
      :isComplete="isComplete"
      :isOrderPlaced="isShowOrder"
      @toggle-order="toggleOrderModal"
    ></order-modal>
  </div>
</template>

<script>
import HotButtons from './components/HotButtons.vue';
import Modal from './components/Modal.vue';
import OrderModal from './components/OrderModal.vue';
import Search from './components/Search.vue';
import SideNavigation from './components/sideNavigation.vue';
import User from './components/User.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Search,
    User,
    SideNavigation,
    HotButtons,
    OrderModal,
    AppFooter,
  },
  data() {
    return {
      isShowModal: false,
      isShowOrder: false,
      isComplete: false,
      balance: 900,
      modalData: {},
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
    openCard(data) {
      this.toggleModal();
      this.modalData = data;
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    toggleOrderModal() {
      this.isShowOrder = !this.isShowOrder;
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
    setBalance(price) {
      this.toggleModal();
      if (this.balance < price) {
        this.isShowOrder = true;
        this.isComplete = false;
      } else {
        this.isShowOrder = true;
        this.isComplete = true;
        this.balance -= price;
      }
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
