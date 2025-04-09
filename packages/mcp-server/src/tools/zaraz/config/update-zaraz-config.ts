// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.config',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_zaraz_config',
  description: 'Updates Zaraz configuration for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      dataLayer: {
        type: 'boolean',
        description: 'Data layer compatibility mode enabled.',
      },
      debugKey: {
        type: 'string',
        description: 'The key for Zaraz debug mode.',
      },
      settings: {
        type: 'object',
        description: 'General Zaraz settings.',
        properties: {
          autoInjectScript: {
            type: 'boolean',
            description: 'Automatic injection of Zaraz scripts enabled.',
          },
          contextEnricher: {
            type: 'object',
            description: 'Details of the worker that receives and edits Zaraz Context object.',
            properties: {
              escapedWorkerName: {
                type: 'string',
              },
              workerTag: {
                type: 'string',
              },
            },
            required: ['escapedWorkerName', 'workerTag'],
          },
          cookieDomain: {
            type: 'string',
            description: 'The domain Zaraz will use for writing and reading its cookies.',
          },
          ecommerce: {
            type: 'boolean',
            description: 'Ecommerce API enabled.',
          },
          eventsApiPath: {
            type: 'string',
            description: 'Custom endpoint for server-side track events.',
          },
          hideExternalReferer: {
            type: 'boolean',
            description: 'Hiding external referrer URL enabled.',
          },
          hideIPAddress: {
            type: 'boolean',
            description: 'Trimming IP address enabled.',
          },
          hideQueryParams: {
            type: 'boolean',
            description: 'Removing URL query params enabled.',
          },
          hideUserAgent: {
            type: 'boolean',
            description: 'Removing sensitive data from User Aagent string enabled.',
          },
          initPath: {
            type: 'string',
            description: 'Custom endpoint for Zaraz init script.',
          },
          injectIframes: {
            type: 'boolean',
            description: 'Injection of Zaraz scripts into iframes enabled.',
          },
          mcRootPath: {
            type: 'string',
            description: 'Custom path for Managed Components server functionalities.',
          },
          scriptPath: {
            type: 'string',
            description: 'Custom endpoint for Zaraz main script.',
          },
          trackPath: {
            type: 'string',
            description: 'Custom endpoint for Zaraz tracking requests.',
          },
        },
        required: ['autoInjectScript'],
      },
      tools: {
        type: 'object',
        description:
          'Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object.',
      },
      triggers: {
        type: 'object',
        description:
          'Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration.',
      },
      variables: {
        type: 'object',
        description:
          'Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included.',
      },
      zarazVersion: {
        type: 'integer',
        description: 'Zaraz internal version of the config.',
      },
      analytics: {
        type: 'object',
        description: 'Cloudflare Monitoring settings.',
        properties: {
          defaultPurpose: {
            type: 'string',
            description: 'Consent purpose assigned to Monitoring.',
          },
          enabled: {
            type: 'boolean',
            description: 'Whether Advanced Monitoring reports are enabled.',
          },
          sessionExpTime: {
            type: 'integer',
            description: 'Session expiration time (seconds).',
          },
        },
        required: [],
      },
      consent: {
        type: 'object',
        description: 'Consent management configuration.',
        properties: {
          enabled: {
            type: 'boolean',
          },
          buttonTextTranslations: {
            type: 'object',
            properties: {
              accept_all: {
                type: 'object',
                description: 'Object where keys are language codes',
              },
              confirm_my_choices: {
                type: 'object',
                description: 'Object where keys are language codes',
              },
              reject_all: {
                type: 'object',
                description: 'Object where keys are language codes',
              },
            },
            required: ['accept_all', 'confirm_my_choices', 'reject_all'],
          },
          companyEmail: {
            type: 'string',
          },
          companyName: {
            type: 'string',
          },
          companyStreetAddress: {
            type: 'string',
          },
          consentModalIntroHTML: {
            type: 'string',
          },
          consentModalIntroHTMLWithTranslations: {
            type: 'object',
            description: 'Object where keys are language codes',
          },
          cookieName: {
            type: 'string',
          },
          customCSS: {
            type: 'string',
          },
          customIntroDisclaimerDismissed: {
            type: 'boolean',
          },
          defaultLanguage: {
            type: 'string',
          },
          hideModal: {
            type: 'boolean',
          },
          purposes: {
            type: 'object',
            description: 'Object where keys are purpose alpha-numeric IDs',
          },
          purposesWithTranslations: {
            type: 'object',
            description: 'Object where keys are purpose alpha-numeric IDs',
          },
          tcfCompliant: {
            type: 'boolean',
          },
        },
        required: ['enabled'],
      },
      historyChange: {
        type: 'boolean',
        description: 'Single Page Application support enabled.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.config.update(body);
};

export default { metadata, tool, handler };
