// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'bot_management',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_bot_management',
  description:
    'Updates the Bot Management configuration for a zone.\n\nThis API is used to update:\n- **Bot Fight Mode**\n- **Super Bot Fight Mode**\n- **Bot Management for Enterprise**\n\nSee [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more information on the different plans \n\\\nIf you recently upgraded or downgraded your plan, refer to the following examples to clean up old configurations. \nCopy and paste the example body to remove old zone configurations based on your current plan.\n#### Clean up configuration for Bot Fight Mode plan\n```json\n{\n  "sbfm_likely_automated": "allow", \n  "sbfm_definitely_automated": "allow", \n  "sbfm_verified_bots": "allow", \n  "sbfm_static_resource_protection": false, \n  "optimize_wordpress": false, \n  "suppress_session_score": false \n}\n```\n#### Clean up configuration for SBFM Pro plan\n```json\n{\n  "sbfm_likely_automated": "allow", \n  "fight_mode": false \n}\n```\n#### Clean up configuration for SBFM Biz plan\n```json\n{\n  "fight_mode": false\n}\n```\n#### Clean up configuration for BM Enterprise Subscription plan\nIt is strongly recommended that you ensure you have [custom rules](https://developers.cloudflare.com/waf/custom-rules/) in place to protect your zone before disabling the SBFM rules. Without these protections, your zone is vulnerable to attacks.\n```json\n{\n  "sbfm_likely_automated": "allow", \n  "sbfm_definitely_automated": "allow", \n  "sbfm_verified_bots": "allow", \n  "sbfm_static_resource_protection": false, \n  "optimize_wordpress": false, \n  "fight_mode": false\n}\n```\n',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          ai_bots_protection: {
            type: 'string',
            description: 'Enable rule to block AI Scrapers and Crawlers.',
            enum: ['block', 'disabled'],
          },
          crawler_protection: {
            type: 'string',
            description: 'Enable rule to punish AI Scrapers and Crawlers via a link maze.',
            enum: ['enabled', 'disabled'],
          },
          enable_js: {
            type: 'boolean',
            description:
              'Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).',
          },
          fight_mode: {
            type: 'boolean',
            description: 'Whether to enable Bot Fight Mode.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          ai_bots_protection: {
            type: 'string',
            description: 'Enable rule to block AI Scrapers and Crawlers.',
            enum: ['block', 'disabled'],
          },
          crawler_protection: {
            type: 'string',
            description: 'Enable rule to punish AI Scrapers and Crawlers via a link maze.',
            enum: ['enabled', 'disabled'],
          },
          enable_js: {
            type: 'boolean',
            description:
              'Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).',
          },
          optimize_wordpress: {
            type: 'boolean',
            description: 'Whether to optimize Super Bot Fight Mode protections for Wordpress.',
          },
          sbfm_definitely_automated: {
            type: 'string',
            description: 'Super Bot Fight Mode (SBFM) action to take on definitely automated requests.',
            enum: ['allow', 'block', 'managed_challenge'],
          },
          sbfm_static_resource_protection: {
            type: 'boolean',
            description:
              'Super Bot Fight Mode (SBFM) to enable static resource protection.\nEnable if static resources on your application need bot protection.\nNote: Static resource protection can also result in legitimate traffic being blocked.\n',
          },
          sbfm_verified_bots: {
            type: 'string',
            description: 'Super Bot Fight Mode (SBFM) action to take on verified bots requests.',
            enum: ['allow', 'block'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          ai_bots_protection: {
            type: 'string',
            description: 'Enable rule to block AI Scrapers and Crawlers.',
            enum: ['block', 'disabled'],
          },
          crawler_protection: {
            type: 'string',
            description: 'Enable rule to punish AI Scrapers and Crawlers via a link maze.',
            enum: ['enabled', 'disabled'],
          },
          enable_js: {
            type: 'boolean',
            description:
              'Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).',
          },
          optimize_wordpress: {
            type: 'boolean',
            description: 'Whether to optimize Super Bot Fight Mode protections for Wordpress.',
          },
          sbfm_definitely_automated: {
            type: 'string',
            description: 'Super Bot Fight Mode (SBFM) action to take on definitely automated requests.',
            enum: ['allow', 'block', 'managed_challenge'],
          },
          sbfm_likely_automated: {
            type: 'string',
            description: 'Super Bot Fight Mode (SBFM) action to take on likely automated requests.',
            enum: ['allow', 'block', 'managed_challenge'],
          },
          sbfm_static_resource_protection: {
            type: 'boolean',
            description:
              'Super Bot Fight Mode (SBFM) to enable static resource protection.\nEnable if static resources on your application need bot protection.\nNote: Static resource protection can also result in legitimate traffic being blocked.\n',
          },
          sbfm_verified_bots: {
            type: 'string',
            description: 'Super Bot Fight Mode (SBFM) action to take on verified bots requests.',
            enum: ['allow', 'block'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          ai_bots_protection: {
            type: 'string',
            description: 'Enable rule to block AI Scrapers and Crawlers.',
            enum: ['block', 'disabled'],
          },
          auto_update_model: {
            type: 'boolean',
            description:
              'Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)',
          },
          crawler_protection: {
            type: 'string',
            description: 'Enable rule to punish AI Scrapers and Crawlers via a link maze.',
            enum: ['enabled', 'disabled'],
          },
          enable_js: {
            type: 'boolean',
            description:
              'Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).',
          },
          suppress_session_score: {
            type: 'boolean',
            description:
              'Whether to disable tracking the highest bot score for a session in the Bot Management cookie.',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.botManagement.update(body);
};

export default { metadata, tool, handler };
