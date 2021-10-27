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
            <user @updateUser="updateUser" :appUser="user"></user>
        </header>
        <side-navigation></side-navigation>
        <main class="main">
            <div class="main__banner"></div>
            <hot-buttons></hot-buttons>
            <div class="main__item-filter">
              <catalog-filter
                :is="responseDone"
                v-for="(tab,index) in filterTabs"
                :key="index"
                :tab="tab"
                @rAll="renderAll"
                @rClothes="renderClothes"
                @rAccessories="renderAccessories"
              ></catalog-filter>
            </div>
            <div class="catalog js__catalog">
              <catalog-item
                v-for="item in renderCatalog"
                :key="item.id"
                :item="item"
                :data="modalData"
                @openCard="openCard(item)"
              ></catalog-item>
            </div>
        </main>
      </div>
    </div>
    <app-footer></app-footer>
    <modal
      :data="modalData"
      :balance="user.score"
      :isModalOpen="isShowModal"
      @toggle="toggleModal"
      @order="setBalance"
      :uniq="uniqImages"
    ></modal>
    <order-modal
      :data="modalData"
      :balance="user.score"
      :isComplete="isComplete"
      :isOrderPlaced="isShowOrder"
      @toggle-order="toggleOrderModal"
    ></order-modal>
  </div>
</template>

<script>
import axios from '@/axios';
import HotButtons from './components/HotButtons.vue';
import Modal from './components/Modal.vue';
import OrderModal from './components/OrderModal.vue';
import Search from './components/Search.vue';
import SideNavigation from './components/sideNavigation.vue';
import User from './components/User.vue';
import AppFooter from './components/AppFooter.vue';
import CatalogItem from './components/CatalogItem.vue';
import CatalogFilter from './components/CatalogFilter.vue';

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
    CatalogItem,
    CatalogFilter,
  },
  data() {
    return {
      isShowModal: false,
      isShowOrder: false,
      isComplete: false,
      user: {},
      modalData: {},
      uniqImages: [],
      clothes: [],
      accessories: [],
      initialTime: performance.now(),
      responseTime: 5000,
      responseDone: '',
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
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories];
    },
  },
  created() {
    this.fetchInfo();
  },
  methods: {
    openCard(data) {
      this.toggleModal();
      this.uniqImages = [...new Set(data.images)];
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
    async fetchInfo() {
      await axios.get('q3OPxRyEcPvP/data')
        .then((response) => {
          this.accessories = this.sortCatalog(response.data);
        });
      axios.get('-_RLsEGjof6i/data')
        .then((response) => {
          this.clothes = this.sortCatalog(response.data);
          this.responseTime = performance.now() - this.initialTime / 1000;
          this.responseDone = 'CatalogFilter';
        });
    },
    renderAll() {
      this.renderCatalog = this.sortCatalog(this.allItems);
    },
    renderClothes() {
      this.renderCatalog = this.clothes;
    },
    renderAccessories() {
      this.renderCatalog = this.accessories;
    },
    setBalance(price) {
      this.toggleModal();
      if (this.user.score < price) {
        this.isShowOrder = true;
        this.isComplete = false;
      } else {
        this.isShowOrder = true;
        this.isComplete = true;
        this.user.score -= price;
      }
    },
    updateUser(info) {
      this.user = info;
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
