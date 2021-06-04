import VueDiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
  Vue.use(VueDiscordMessage, {
    avatars: {
      discordbuttons: require('../.vuepress/assets/angelo.gif'),
    },
    profiles: {
      user: {
        author: 'Angelo',
        avatar: 'discordbuttons',
      },
      bot: {
        author: 'discord-buttons',
        avatar: 'green',
        bot: true,
      },
    },
  });
};
