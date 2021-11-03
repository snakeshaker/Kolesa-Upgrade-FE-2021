<template>
  <main class="main">
    <div class="main__banner"></div>
    <hot-buttons></hot-buttons>
    <div class="main__item-filter">
      <catalog-filter
        v-for="(tab,index) in filterTabs"
        :key="index"
        :tab="tab"
        @rAll="renderAll"
        @rClothes="renderClothes"
        @rAccessories="renderAccessories"
      ></catalog-filter>
    </div>
    <div class="catalog">
      <catalog-item
        v-for="item in renderCatalog"
        :key="item.id"
        :item="item"
        :data="modalData"
        @openCard="openCard(item)"
      ></catalog-item>
    </div>
    <modal
      :data="modalData"
      :balance="userData.score"
      :isModalOpen="isShowModal"
      @toggle="toggleModal"
      @order="setBalance"
      :uniq="uniqImages"
    ></modal>
    <order-modal
      :data="modalData"
      :balance="userData.score"
      :isComplete="isComplete"
      :isOrderPlaced="isShowOrder"
      @toggle-order="toggleOrderModal"
    ></order-modal>
  </main>
</template>

<script>
import HotButtons from './components/HotButtons.vue';
import Modal from './components/Modal.vue';
import OrderModal from './components/OrderModal.vue';
import CatalogItem from './components/CatalogItem.vue';
import CatalogFilter from './components/CatalogFilter.vue';

export default {
  name: 'Shop',
  props: {
    userData: Object,
  },
  components: {
    Modal,
    HotButtons,
    OrderModal,
    CatalogItem,
    CatalogFilter,
  },
  data() {
    return {
      isShowModal: false,
      isShowOrder: false,
      isComplete: false,
      modalData: {},
      uniqImages: [],
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
      return [...this.$store.state.clothes, ...this.$store.state.accessories];
    },
  },
  created() {
    this.$store.dispatch('fetchClothes');
    this.$store.dispatch('fetchAccessories');
  },
  mounted() {
    document.querySelector('.catalog').classList.add('catalog--loading');
    setTimeout(() => {
      document.querySelector('.catalog').classList.remove('catalog--loading');
      this.renderAll();
    }, 500);
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
    renderAll() {
      this.renderCatalog = this.sortCatalog(this.allItems);
    },
    renderClothes() {
      this.renderCatalog = this.sortCatalog(this.$store.state.clothes);
    },
    renderAccessories() {
      this.renderCatalog = this.sortCatalog(this.$store.state.accessories);
    },
    setBalance(price) {
      this.toggleModal();
      if (this.userData.score < price) {
        this.isShowOrder = true;
        this.isComplete = false;
      } else {
        this.isShowOrder = true;
        this.isComplete = true;
        this.userData.score -= price;
      }
    },
  },
};
</script>
