// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/email/routing/enable',
  operationId: 'email-routing-settings-enable-email-routing',
};

export const tool: Tool = {
  name: 'enable_email_routing',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnable you Email Routing zone. Add and lock the necessary MX and SPF records.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/settings',\n  $defs: {\n    settings: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Email Routing settings identifier.'\n        },\n        enabled: {\n          type: 'string',\n          description: 'State of the zone settings for Email Routing.',\n          enum: [            true,\n            false\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Domain of your zone.'\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the settings have been created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the settings have been modified.',\n          format: 'date-time'\n        },\n        skip_wizard: {\n          type: 'string',\n          description: 'Flag to check if the user skipped the configuration wizard.',\n          enum: [            true,\n            false\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Show the state of your account, and the type or configuration error.',\n          enum: [            'ready',\n            'unconfigured',\n            'misconfigured',\n            'misconfigured/locked',\n            'unlocked'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'Email Routing settings tag. (Deprecated, replaced by Email Routing settings identifier)'\n        }\n      },\n      required: [        'id',\n        'enabled',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'object',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.emailRouting.enable(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
