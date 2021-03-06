import { Framework } from "../entities";

const frameworkHomepage = 'https://quasar.dev';

export const quasar: Framework = {
  frameworkHomepage,
  frameworkId: 'quasar',
  repoURL: 'https://github.com/quasarframework/quasar',
  frameworkName: 'Quasar',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: true,
    themer: 'https://quasar.dev/style/theme-builder',
    typeScript: true,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'banner',
      componentURL: `${frameworkHomepage}/vue-components/banner`,
      options: {
        closable: false,
        types: [],
      },
    },
    {
      componentId: 'button',
      componentName: 'btn',
      componentURL: `${frameworkHomepage}/vue-components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['xs', 'sm', 'md', 'lg', 'custom'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'checkbox',
      componentURL: `${frameworkHomepage}/vue-components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['left', 'right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'toggle',
      componentURL: `${frameworkHomepage}/vue-components/toggle`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: true,
        internalText: false,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'custom'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'tabs',
      componentURL: `${frameworkHomepage}/vue-components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
};
