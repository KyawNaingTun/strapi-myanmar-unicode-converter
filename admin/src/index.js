import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import SUPPORTED_FIELDS from './utils/supportedFields';

const name = 'MM Unicode Converter';

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
    const ctbPlugin = app.getPlugin('content-type-builder');
    if (ctbPlugin) {
      const ctbFormsAPI = ctbPlugin.apis.forms;
      
      ctbFormsAPI.extendContentType({
        validator: () => ({
          
        }),
        form: {
          advanced() {
            return [
              {
                name: 'pluginOptions.unicode_converter.enabled',
                description: {
                  id: 'Allow you to convert unicode',
                  defaultMessage: 'Allow you to convert unicode',
                },
                type: 'checkbox',
                intlLabel: {
                  id: 'Enable unicode converter for this Content-Type',
                  defaultMessage: 'Enable unicode converter for this Content-Type',
                },
              },
            ];
          },
        },
      });

      ctbFormsAPI.extendFields(SUPPORTED_FIELDS, {
        validator: (args) => ({
          
        }),
        form: {
          advanced({ contentTypeSchema, forTarget, type, step }) {
            if (forTarget !== 'contentType') {
              return [];
            }

            if (type === 'component' && step === '1') {
              return [];
            }

            return [
              {
                name: 'pluginOptions.unicode_converter.enabled',
                description: {
                  id: 'This field will convert to unicode automatically',
                  defaultMessage: 'This field will convert to unicode automatically',
                },
                type: 'checkbox',
                intlLabel: {
                  id: 'Enable Unicode Converter  for this field',
                  defaultMessage: 'Enable Unicode Converter  for this field',
                },
              },
            ];
          },
        },
      });
    }
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
