<template>
  <a class="user-block" href="">
    <img class="user-block__avatar" src="@/assets/img/avatar.png" alt="User avatar">
    <div class="user-block__info">
      <div class="user-block__name">
        Мортиджан
      </div>
      <div class="user-block__points">
        {{ balance }} баллов
      </div>
    </div>
  </a>
</template>

<script>

export default {
  name: 'User',
  props: {
    balance: Number,
  },
};
</script>
