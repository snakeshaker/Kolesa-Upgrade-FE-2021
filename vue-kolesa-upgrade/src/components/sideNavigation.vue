<template>
  <aside class="aside">
    <nav class="aside__nav">
      <ul>
        <li v-for="(link,index) in menuLinks" :key="index">
          <a
            v-if="link !== 'Kolesa Team'"
            class="aside__nav-link"
            :class="{ 'aside__nav--active': activeLink === link }"
            @click="activeLink = link"
            href="#"
            v-html="link"
          ></a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>

export default {
  name: 'sideNavigation',
  data() {
    return {
      menuLinks: [
        'Оргсхема',
        'Kolesa <span class="aside__nav--bold">Team</span>',
        'Kolesa Shop',
        'Картина компании',
        'Новости',
        'Education',
        'Guidelines',
        'Библиотека',
        'FAQ',
      ],
      activeLink: 'Kolesa Shop',
    };
  },
};
</script>
