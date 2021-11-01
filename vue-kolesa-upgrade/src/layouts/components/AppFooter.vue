<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__socials">
        <div class="footer__credit">
          © Kolesa Group
        </div>
        <ul>
          <li><a href="https://www.instagram.com/kolesagroup/" target="_blank">
            <img src="@/assets/svg/social-instagram.svg" alt="Instagram">
          </a></li>
          <li><a href="https://www.youtube.com/channel/UC6o6waSdIvmIdvy7qTqxY9A" target="_blank">
            <img src="@/assets/svg/social-youtube.svg" alt="YouTube">
          </a></li>
          <li><a href="https://vk.com/kolesakrishamarket" target="_blank">
            <img src="@/assets/svg/social-vk.svg" alt="VK">
          </a></li>
        </ul>
      </div>
      <div class="footer__feedback">
        <div class="footer__info">
          Есть идеи что улучшить? <br>
          Не знаешь, с кем решить проблему?
        </div>
        <button class="footer__btn" type="button">
          Написать
        </button>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
};
</script>
