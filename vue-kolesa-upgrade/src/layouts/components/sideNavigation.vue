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
          >
            {{ link }}
          </a>
          <a
            v-else
            class="aside__nav-link"
            :class="{ 'aside__nav--active': activeLink === link }"
            @click="activeLink = link"
            href="#"
          >
            Kolesa <span class="aside__nav--bold">Team</span>
          </a>
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
        'Kolesa Team',
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
