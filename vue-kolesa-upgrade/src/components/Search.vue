<template>
  <form action="" class="header__form">
    <label for="search" class="header__search search">
      <button class="search__icon" type="button">
        <img src="@/assets/svg/search-big.svg" alt="Search">
      </button>
      <input class="search__input" id="search" type="text" placeholder="Поиск">
    </label>
  </form>
</template>

<script>

export default {
  name: 'Search',
};
</script>
