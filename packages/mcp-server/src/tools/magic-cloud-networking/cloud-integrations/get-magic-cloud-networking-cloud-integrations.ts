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
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}',
  operationId: 'providers-read',
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_cloud_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead a Cloud Integration (Closed Beta).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cloud_integration_get_response',\n  $defs: {\n    cloud_integration_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        cloud_type: {\n          type: 'string',\n          enum: [            'AWS',\n            'AZURE',\n            'GOOGLE',\n            'CLOUDFLARE'\n          ]\n        },\n        friendly_name: {\n          type: 'string'\n        },\n        last_updated: {\n          type: 'string'\n        },\n        lifecycle_state: {\n          type: 'string',\n          enum: [            'ACTIVE',\n            'PENDING_SETUP',\n            'RETIRED'\n          ]\n        },\n        state: {\n          type: 'string',\n          enum: [            'UNSPECIFIED',\n            'PENDING',\n            'DISCOVERING',\n            'FAILED',\n            'SUCCEEDED'\n          ]\n        },\n        state_v2: {\n          type: 'string',\n          enum: [            'UNSPECIFIED',\n            'PENDING',\n            'DISCOVERING',\n            'FAILED',\n            'SUCCEEDED'\n          ]\n        },\n        aws_arn: {\n          type: 'string'\n        },\n        azure_subscription_id: {\n          type: 'string'\n        },\n        azure_tenant_id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        gcp_project_id: {\n          type: 'string'\n        },\n        gcp_service_account_email: {\n          type: 'string'\n        },\n        status: {\n          type: 'object',\n          properties: {\n            discovery_progress: {\n              type: 'object',\n              properties: {\n                done: {\n                  type: 'integer'\n                },\n                total: {\n                  type: 'integer'\n                },\n                unit: {\n                  type: 'string'\n                }\n              },\n              required: [                'done',\n                'total',\n                'unit'\n              ]\n            },\n            discovery_progress_v2: {\n              type: 'object',\n              properties: {\n                done: {\n                  type: 'integer'\n                },\n                total: {\n                  type: 'integer'\n                },\n                unit: {\n                  type: 'string'\n                }\n              },\n              required: [                'done',\n                'total',\n                'unit'\n              ]\n            },\n            last_discovery_status: {\n              type: 'string',\n              enum: [                'UNSPECIFIED',\n                'PENDING',\n                'DISCOVERING',\n                'FAILED',\n                'SUCCEEDED'\n              ]\n            },\n            last_discovery_status_v2: {\n              type: 'string',\n              enum: [                'UNSPECIFIED',\n                'PENDING',\n                'DISCOVERING',\n                'FAILED',\n                'SUCCEEDED'\n              ]\n            },\n            regions: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            credentials_good_since: {\n              type: 'string'\n            },\n            credentials_missing_since: {\n              type: 'string'\n            },\n            credentials_rejected_since: {\n              type: 'string'\n            },\n            discovery_message: {\n              type: 'string'\n            },\n            discovery_message_v2: {\n              type: 'string'\n            },\n            in_use_by: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  client_type: {\n                    type: 'string',\n                    enum: [                      'MAGIC_WAN_CLOUD_ONRAMP'\n                    ]\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'client_type',\n                  'name'\n                ]\n              }\n            },\n            last_discovery_completed_at: {\n              type: 'string'\n            },\n            last_discovery_completed_at_v2: {\n              type: 'string'\n            },\n            last_discovery_started_at: {\n              type: 'string'\n            },\n            last_discovery_started_at_v2: {\n              type: 'string'\n            },\n            last_updated: {\n              type: 'string'\n            }\n          },\n          required: [            'discovery_progress',\n            'discovery_progress_v2',\n            'last_discovery_status',\n            'last_discovery_status_v2',\n            'regions'\n          ]\n        }\n      },\n      required: [        'id',\n        'cloud_type',\n        'friendly_name',\n        'last_updated',\n        'lifecycle_state',\n        'state',\n        'state_v2'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      status: {
        type: 'boolean',
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
        await client.magicCloudNetworking.cloudIntegrations.get(provider_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
