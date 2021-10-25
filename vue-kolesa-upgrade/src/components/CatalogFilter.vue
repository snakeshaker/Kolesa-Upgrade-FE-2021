<template>
  <div class="main__filter-radio">
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
</template>

<script>

export default {
  name: 'CatalogFilter',
  props: {
    tab: Object,
  },
  methods: {
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
