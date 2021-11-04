<template>
  <aside class="aside">
    <nav class="aside__nav">
      <ul>
        <li v-for="(link,index) in menuLinks" :key="index">
          <router-link
            class="aside__nav-link"
            :exact="link.isExact"
            active-class="aside__nav--active"
            :to="link.link"
            v-html="link.name"
          ></router-link>
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
        {
          name: 'Оргсхема',
          link: '/',
          isExact: true,
        },
        {
          name: 'Kolesa <span class="aside__nav--bold">Team</span>',
          link: '/team',
          isExact: true,
        },
        {
          name: 'Kolesa Shop',
          link: '/shop',
          isExact: false,
        },
        {
          name: 'Картина компании',
          link: '/company',
          isExact: true,
        },
        {
          name: 'Новости',
          link: '/news',
          isExact: true,
        },
        {
          name: 'Education',
          link: '/edu',
          isExact: true,
        },
        {
          name: 'Guidelines',
          link: '/guide',
          isExact: true,
        },
        {
          name: 'Библиотека',
          link: '/library',
          isExact: true,
        },
        {
          name: 'FAQ',
          link: '/faq',
          isExact: true,
        },
      ],
    };
  },
};
</script>
