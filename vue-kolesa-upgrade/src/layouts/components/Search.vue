<template>
  <label for="search" class="header__search search">
    <button class="search__icon" type="button">
      <img src="@/assets/svg/search-big.svg" alt="Search">
    </button>
    <input
      class="search__input"
      v-model="search"
      id="search"
      type="text"
      placeholder="Поиск"
    >
  </label>
</template>

<script>

export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    setSearch(e) {
      this.search = e.target.value;
    },
  },
};
</script>
