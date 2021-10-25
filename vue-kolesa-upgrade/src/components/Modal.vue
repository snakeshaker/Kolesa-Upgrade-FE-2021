<template>
  <div v-if="isModalOpen" class="card-container">
    <div class="card">
        <div class="card__wrapper">
          <button class="card__close" type="button" @click="toggleModal"></button>
          <div class="card__images">
              <img
                :src="data.img ?
                require(`@/assets/img/${data.img}`) :
                require(`@/assets/img/no-photo.jpg`)"
                alt="main image"
                class="card__images--big">
              <div class="card__little-images">
                <div class="card__images--little">
                  <img
                    class="card__images--active"
                    :src="data.img ?
                    require(`@/assets/img/${data.img}`) :
                    require(`@/assets/img/no-photo.jpg`)"
                    alt="little image">
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
                Попросить {{ lowBalance() }} баллов
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
              <p v-if="data.isClothes" class="card__heading">Цвета:</p>
              <div v-if="data.isClothes" class="card__radio-group">
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
              <p v-if="data.isClothes" class="card__heading">Размеры:</p>
              <div v-if="data.isClothes" class="card__radio-group">
                <input type="radio" id="size-s" name="size-selector">
                <label class="card__radio-group--size" for="size-s">S</label>
                <input type="radio" id="size-m" name="size-selector">
                <label class="card__radio-group--size" for="size-m">M</label>
                <input type="radio" id="size-l" name="size-selector">
                <label class="card__radio-group--size" for="size-l">L</label>
              </div>
              <p v-if="!data.isClothes" class="card__heading">Объемы:</p>
              <div v-if="!data.isClothes" class="card__radio-group">
                <input type="radio" id="size-s" name="size-selector">
                <label class="card__radio-group--size" for="size-s">0,5л</label>
                <input type="radio" id="size-m" name="size-selector">
                <label class="card__radio-group--size" for="size-m">0,7л</label>
                <input type="radio" id="size-l" name="size-selector">
                <label class="card__radio-group--size" for="size-l">1,0л</label>
              </div>
              <p class="card__heading card__heading--bold">Детали:</p>
              <p>
                {{ data.details }}
              </p>
              <p
                v-if="data.isClothes"
                class="card__heading card__heading--bold"
              >Как выбрать размер:</p>
              <p v-if="data.isClothes">Написать дяде Рику для уточнения</p>
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
  },
  methods: {
    toggleModal() {
      this.$emit('toggle');
    },
    order() {
      this.$emit('order', this.data.price);
    },
    lowBalance() {
      return this.data.price - this.balance;
    },
  },
};
</script>
