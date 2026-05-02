// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  revroSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Revro',
      collapsible: true,
      collapsed: false,
      items: [
        'revro/getting-started',
        'revro/features',
        'revro/pricing',
        'revro/credit-system',
        'revro/roblox-plugin',
        'revro/api-reference',
        'revro/troubleshooting',
      ],
    },
  ],

  mcModPorterSidebar: [
    {
      type: 'category',
      label: 'MC Mod Porter',
      collapsible: true,
      collapsed: false,
      items: [
        'mc-mod-porter/installation',
        'mc-mod-porter/usage',
        'mc-mod-porter/supported-versions',
        'mc-mod-porter/contributing',
        'mc-mod-porter/troubleshooting',
      ],
    },
  ],

  discordBotsSidebar: [
    {
      type: 'category',
      label: 'Discord Bots',
      collapsible: true,
      collapsed: false,
      items: [
        'discord-bots/overview',
        'discord-bots/server-builder',
        'discord-bots/tickets-bot',
        'discord-bots/faq-bot',
      ],
    },
  ],

  communitySidebar: [
    {
      type: 'category',
      label: 'Community',
      collapsible: true,
      collapsed: false,
      items: [
        'community/server-rules',
        'community/roles',
        'community/support',
        'community/contact',
      ],
    },
  ],
};

export default sidebars;
