<template>
  <div v-if="isOrderPlaced" class="card-container">
    <div class="card">
      <div v-if="isComplete" class="card__order_content">
        <div class="card__order_icon"></div>
        <div class="card__order_info">
          <h2>Заказ успешно оформлен!</h2>
          <p>Для получения заказа подойди в HR отдел к Дяде Рику</p>
        </div>
        <button
          @click="toggleOrderModal"
          class="card__button card__button--order"
        >
        Круто, вернуться в Kolesa Shop
        </button>
      </div>
      <div v-else class="card__order_content">
        <div class="card__order_icon--low"></div>
        <div class="card__order_info">
          <h2>Как попросить баллы</h2>
          <p>Напиши коллеге в Telegram и попроси подарить тебе баллы через Kolesa Shop</p>
        </div>
        <button
          @click="toggleOrderModal"
          class="card__button card__button--order"
        >
        Хорошо, спасибо
        </button>
      </div>
    </div>
    <div class="card__overlay" @click="toggleOrderModal"></div>
  </div>
</template>

<script>

export default {
  name: 'OrderModal',
  props: {
    data: Object,
    isOrderPlaced: Boolean,
    isComplete: Boolean,
  },
  methods: {
    toggleOrderModal() {
      this.$emit('toggle-order');
    },
  },
};
</script>
