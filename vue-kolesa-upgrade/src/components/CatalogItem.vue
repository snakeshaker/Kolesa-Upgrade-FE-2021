<template>
  <div class="catalog__item">
    <div class="catalog__img">
      <img
        :src="item.mainImage ?
        item.mainImage :
        require(`@/assets/img/no-photo.jpg`)"
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
      <div v-if="item.sizes" class="catalog__size">
        {{ formatSizes(item.sizes) }}
      </div>
      <div v-if="!item.sizes" class="catalog__size">
        Объемы 0,5/0,7/1,0
      </div>
      <button @click="openCard" class="catalog__btn" type="button">
        Заказать
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CatalogItem',
  props: {
    item: Object,
  },
  methods: {
    openCard() {
      this.$emit('openCard');
    },
    formatSizes(sizes) {
      return sizes && sizes.length ? `Размеры ${sizes.join('/')}` : 'Размеры неизвестны';
    },
  },
};
</script>
