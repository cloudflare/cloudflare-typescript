// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}/initial_setup',
  operationId: 'providers-initial-setup',
};

export const tool: Tool = {
  name: 'initial_setup_magic_cloud_networking_cloud_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet initial configuration to complete Cloud Integration setup (Closed Beta).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cloud_integration_initial_setup_response',\n  $defs: {\n    cloud_integration_initial_setup_response: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            aws_trust_policy: {\n              type: 'string'\n            },\n            item_type: {\n              type: 'string'\n            }\n          },\n          required: [            'aws_trust_policy',\n            'item_type'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            azure_consent_url: {\n              type: 'string'\n            },\n            integration_identity_tag: {\n              type: 'string'\n            },\n            item_type: {\n              type: 'string'\n            },\n            tag_cli_command: {\n              type: 'string'\n            }\n          },\n          required: [            'azure_consent_url',\n            'integration_identity_tag',\n            'item_type',\n            'tag_cli_command'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            integration_identity_tag: {\n              type: 'string'\n            },\n            item_type: {\n              type: 'string'\n            },\n            tag_cli_command: {\n              type: 'string'\n            }\n          },\n          required: [            'integration_identity_tag',\n            'item_type',\n            'tag_cli_command'\n          ]\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'provider_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { provider_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.magicCloudNetworking.cloudIntegrations.initialSetup(provider_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
