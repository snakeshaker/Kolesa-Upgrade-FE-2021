<template>
  <main class="main">
    <div class="main__breadcrumbs">
      <router-link
      v-for="(link,index) in links"
      :key="index"
      :to="link.link"
      >
        {{link.name}}
        <span v-if="index !== links.length - 1">/</span>
      </router-link>
    </div>
    <h2 class="main__heading">
      Как получить баллы
    </h2>
    <div class="points-catalog">
      <div
        class="points-catalog__item"
        v-for="(bonus,index) in bonuses"
        :key="index"
      >
        <div class="points-catalog__logo">
          <img
            :src="require(`@/assets/svg/${bonus.image}`)"
            alt="Bonus pic"
          >
        </div>
        <div class="points-catalog__heading">
          {{bonus.heading}}
        </div>
        <div
          v-if="bonus.reward"
          class="points-catalog__price"
        >
          {{bonus.reward}}
        </div>
        <div class="points-catalog__info">
          {{bonus.info}}
        </div>
        <button class="points-catalog__btn" type="button">
          Отправить заявку
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      bonuses: [
        {
          image: 'Conference.svg',
          heading: 'Выступления на конференциях',
          reward: '90 баллов',
          info: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          image: 'Meetup.svg',
          heading: 'Выступление на meetup',
          reward: '60 баллов',
          info: 'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          image: 'Writing.svg',
          heading: 'Статья на habr/vc.ru/rusbase',
          reward: '60 баллов',
          info: 'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          image: 'Training.svg',
          heading: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          reward: '60 баллов',
          info: 'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          image: 'Organisation.svg',
          heading: 'Организация мероприятия',
          reward: '60 баллов',
          info: 'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          image: 'Mentor.svg',
          heading: 'Стань ментором в проекте «Kolesa Academy»',
          reward: '90 баллов ежемесячно',
          info: 'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          image: 'HR_Help.svg',
          heading: 'Помощь HR team',
          reward: '50 баллов',
          info: 'Помоги организовать мероприятие',
        },
        {
          image: 'Meetup.svg',
          heading: 'Выступление на Demoday',
          reward: '30 баллов',
          info: 'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          image: 'Other.svg',
          heading: 'Другое',
          info: 'Получай баллы если уже что-то сделано',
        },
      ],
      links: [
        {
          name: 'Kolesa Shop',
          link: '/shop',
        },
        {
          name: 'Как получить баллы',
          link: '/shop/how-to-get-points',
        },
      ],
    };
  },
};
</script>
