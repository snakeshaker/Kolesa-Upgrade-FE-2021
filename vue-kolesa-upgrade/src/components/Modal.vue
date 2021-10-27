<template>
  <div v-if="isModalOpen" class="card-container">
    <div class="card">
        <div class="card__wrapper">
          <button class="card__close" type="button" @click="toggleModal"></button>
          <div class="card__images">
              <img
                :src="activeImage != 'init' ?
                activeImage :
                data.mainImage"
                alt="main image"
                class="card__images--big"
                width="330"
                height="330"
              >
              <div class="card__little-images">
                <div class="card__images--little">
                  <img
                    @click="activeImage = 'init'"
                    :class="{ 'card__images--active' : activeImage === 'init'}"
                    :src="data.mainImage ?
                    data.mainImage :
                    require(`@/assets/img/no-photo.jpg`)"
                    alt="little image"
                  >
                </div>
                <div
                  v-for="(image,index) in uniq"
                  :key="index"
                  class="card__images--little"
                >
                  <img
                    @click="activeImage = image"
                    :class="{ 'card__images--active' : activeImage === image}"
                    :src="image"
                    alt="little image"
                  >
                </div>
              </div>
          </div>
          <form class="card__info">
            <div class="card__top">
              <h3 class="card__title">{{ data.title }}</h3>
              <p class="card__price">{{ data.price }} баллов</p>
              <button
                v-if="balance >= data.price"
                @click="order"
                class="card__button"
                type="submit"
              >
                Заказать
              </button>
              <button
                v-if="balance < data.price"
                @click="order"
                class="card__button card__button--low"
                type="submit"
              >
                Попросить {{ lowBalance }} баллов
              </button>
              <div class="card__balance">
                <div class="card__balance-info">
                    <p class="card__balance-info--gray">Твой баланс:</p>
                    <p class="card__sum">{{ balance }} баллов</p>
                </div>
                <div class="card__logo"></div>
              </div>
            </div>
            <div class="card__bottom">
              <div v-if="data.sizes" class="card__choose">
                <p class="card__heading">Цвета:</p>
                <div class="card__radiobox">
                  <div
                    v-for="(color,index) in data.colors"
                    :key="index"
                    class="card__radio-group"
                  >
                    <input type="radio" :id="color.color" name="color-selector">
                    <label class="card__radio-group--color" :for="color.color">
                      <div class="card__square" :style="{background: color.color}"></div>
                      {{ color.label }}
                    </label>
                  </div>
                </div>
              </div>
              <div v-if="data.sizes && data.sizes.length" class="card__choose">
                <p class="card__heading">Размеры:</p>
                <div class="card__radiobox">
                  <div
                    v-for="(size,index) in data.sizes"
                    :key="index"
                    class="card__radio-group"
                  >
                    <input type="radio" :id="size" name="size-selector">
                    <label class="card__radio-group--size" :for="size">
                      {{ size }}
                    </label>
                  </div>
                </div>
              </div>
              <div v-if="data.volumes && data.volumes.length" class="card__choose">
                <p class="card__heading">Объемы:</p>
                <div class="card__radiobox">
                  <div
                    v-for="(volume,index) in data.volumes"
                    :key="index"
                    class="card__radio-group"
                  >
                    <input type="radio" :id="volume" name="size-selector">
                    <label class="card__radio-group--size" :for="volume">
                      {{ volume }}
                    </label>
                  </div>
                </div>
              </div>
              <p class="card__heading card__heading--bold">Детали:</p>
              <p>
                {{ data.description }}
              </p>
              <p
                v-if="data.sizes"
                class="card__heading card__heading--bold"
              >Как выбрать размер:</p>
              <p v-if="data.sizes">Написать дяде Рику для уточнения</p>
            </div>
          </form>
        </div>
    </div>
    <div class="card__overlay" @click="toggleModal"></div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    isModalOpen: Boolean,
    data: Object,
    balance: Number,
    uniq: Array,
  },
  data() {
    return {
      activeImage: 'init',
    };
  },
  computed: {
    lowBalance() {
      return this.data.price - this.balance;
    },
  },
  methods: {
    toggleModal() {
      this.activeImage = 'init';
      this.$emit('toggle');
    },
    order() {
      this.$emit('order', this.data.price);
    },
  },
};
</script>
