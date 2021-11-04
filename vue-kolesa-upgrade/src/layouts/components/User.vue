<template>
  <a class="user-block" href="">
    <img
      class="user-block__avatar"
      :src="$store.state.user.avatarUrl || require(`@/assets/img/no-avatar.png`)"
      alt="User avatar"
    >
    <div class="user-block__info">
      <div class="user-block__name">
        {{ $store.state.user.name }}
      </div>
      <div class="user-block__points">
        {{ $store.state.user.score }} баллов
      </div>
    </div>
  </a>
</template>

<script>

export default {
  name: 'User',
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
};
</script>
