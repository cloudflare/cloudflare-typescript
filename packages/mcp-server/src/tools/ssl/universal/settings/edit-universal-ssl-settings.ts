// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.universal.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/ssl/universal/settings',
  operationId: 'universal-ssl-settings-for-a-zone-edit-universal-ssl-settings',
};

export const tool: Tool = {
  name: 'edit_universal_ssl_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch Universal SSL Settings for a Zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/universal_ssl_settings'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    universal_ssl_settings: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no advanced certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS.\\n\\nBy disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased an advanced certificate.\\n\\n* HSTS\\n* Always Use HTTPS\\n* Opportunistic Encryption\\n* Onion Routing\\n* Any Page Rules redirecting traffic to HTTPS\\n\\nSimilarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare\\'s edge.\\n\\nIf you do not have a valid custom or advanced certificate at Cloudflare\\'s edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'boolean',
        description:
          "Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no advanced certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS.\n\nBy disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased an advanced certificate.\n\n* HSTS\n* Always Use HTTPS\n* Opportunistic Encryption\n* Onion Routing\n* Any Page Rules redirecting traffic to HTTPS\n\nSimilarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare's edge.\n\nIf you do not have a valid custom or advanced certificate at Cloudflare's edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.ssl.universal.settings.edit(body)));
};

export default { metadata, tool, handler };
