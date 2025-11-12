// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.sso',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/sso_connectors/{sso_connector_id}',
  operationId: 'update-sso-connector-state',
};

export const tool: Tool = {
  name: 'update_iam_sso',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate SSO connector state\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sso_update_response',\n  $defs: {\n    sso_update_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'SSO Connector Identifier',\n          description: 'SSO Connector identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'Timestamp for the creation of the SSO connector',\n          format: 'date-time'\n        },\n        email_domain: {\n          type: 'string'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        updated_on: {\n          type: 'string',\n          description: 'Timestamp for the last update of the SSO connector',\n          format: 'date-time'\n        },\n        use_fedramp_language: {\n          type: 'boolean',\n          description: 'Controls the display of FedRAMP language to the user during SSO login'\n        },\n        verification: {\n          type: 'object',\n          properties: {\n            code: {\n              type: 'string',\n              description: 'DNS verification code. Add this entire string to the DNS TXT record of the email domain to validate ownership.'\n            },\n            status: {\n              type: 'string',\n              description: 'The status of the verification code from the verification process.',\n              enum: [                'awaiting',\n                'pending',\n                'failed',\n                'verified'\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      sso_connector_id: {
        type: 'string',
        title: 'SSO Connector Identifier',
        description: 'SSO Connector identifier tag.',
      },
      enabled: {
        type: 'boolean',
        description: 'SSO Connector enabled state',
      },
      use_fedramp_language: {
        type: 'boolean',
        description: 'Controls the display of FedRAMP language to the user during SSO login',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'sso_connector_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sso_connector_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.iam.sso.update(sso_connector_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
