<template>
  <div class="main__filter-radio">
    <input
      @click="chooseRender(tab)"
      class="js__filter"
      type="radio"
      :id="tab.id"
      name="item-selector"
    >
    <label :for="tab.id">{{ tab.title }}</label>
  </div>
</template>

<script>

export default {
  name: 'CatalogFilter',
  props: {
    tab: Object,
  },
  methods: {
    chooseRender(tab) {
      if (tab.id === 'item_all') this.renderAll();
      else if (tab.id === 'item_clothes') this.renderClothes();
      else this.renderAccessories();
    },
    renderAll() {
      this.$emit('rAll');
    },
    renderClothes() {
      this.$emit('rClothes');
    },
    renderAccessories() {
      this.$emit('rAccessories');
    },
  },
};
</script>
