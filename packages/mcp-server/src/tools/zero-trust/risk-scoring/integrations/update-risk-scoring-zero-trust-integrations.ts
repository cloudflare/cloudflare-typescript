// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}',
  operationId: 'dlp-zt-risk-score-integration-update',
};

export const tool: Tool = {
  name: 'update_risk_scoring_zero_trust_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOverwrite the reference_id, tenant_url, and active values with the ones provided.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The id of the integration, a UUIDv4.'\n        },\n        account_tag: {\n          type: 'string',\n          description: 'The Cloudflare account tag.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Whether this integration is enabled and should export changes in risk score.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the integration was created in RFC3339 format.',\n          format: 'date-time'\n        },\n        integration_type: {\n          type: 'string',\n          enum: [            'Okta'\n          ]\n        },\n        reference_id: {\n          type: 'string',\n          description: 'A reference ID defined by the client.\\nShould be set to the Access-Okta IDP integration ID.\\nUseful when the risk-score integration needs to be associated with a secondary asset and recalled using that ID.'\n        },\n        tenant_url: {\n          type: 'string',\n          description: 'The base URL for the tenant. E.g. \"https://tenant.okta.com\".'\n        },\n        well_known_url: {\n          type: 'string',\n          description: 'The URL for the Shared Signals Framework configuration, e.g. \"/.well-known/sse-configuration/{integration_uuid}/\". https://openid.net/specs/openid-sse-framework-1_0.html#rfc.section.6.2.1.'\n        }\n      },\n      required: [        'id',\n        'account_tag',\n        'active',\n        'created_at',\n        'integration_type',\n        'reference_id',\n        'tenant_url',\n        'well_known_url'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
      },
      active: {
        type: 'boolean',
        description:
          'Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.',
      },
      tenant_url: {
        type: 'string',
        description: 'The base url of the tenant, e.g. "https://tenant.okta.com".',
      },
      reference_id: {
        type: 'string',
        description:
          'A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).\nhttps://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'integration_id', 'active', 'tenant_url'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { integration_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.riskScoring.integrations.update(integration_id, body)),
  );
};

export default { metadata, tool, handler };
