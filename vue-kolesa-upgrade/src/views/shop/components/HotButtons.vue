<template>
  <div class="points">
    <a class="points__block points__block--green">
      <div class="points__icon">
        <img src="@/assets/svg/points-plus.svg" alt="plus">
      </div>
      <div class="points__info">
        Получить баллы
      </div>
    </a>
    <a
      @click.prevent="goToPage"
      class="points__block points__block--yellow"
    >
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
</template>

<script>

export default {
  name: 'HotButtons',
  methods: {
    goToPage() {
      this.$router.push('/shop/how-to-get-points');
    },
  },
};
</script>
