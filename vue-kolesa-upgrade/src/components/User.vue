<template>
  <a class="user-block" href="">
    <img
      class="user-block__avatar"
      :src="user.avatarUrl || require(`@/assets/img/no-avatar.png`)"
      alt="User avatar"
    >
    <div class="user-block__info">
      <div class="user-block__name">
        {{ user.name || 'Аноним'}}
      </div>
      <div class="user-block__points">
        {{ user.score || '0'}} баллов
      </div>
    </div>
  </a>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'User',
  props: {
    appUser: Object,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    axios.get('7ZW3y5GAuIge/data')
      .then((response) => {
        this.user = response.data;
        this.$emit('updateUser', this.user);
      });
  },
};
</script>
