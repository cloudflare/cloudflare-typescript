// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights.severity',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/security-center/insights/severity',
};

export const tool: Tool = {
  name: 'get_insights_security_center_severity',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Security Center Insight Counts by Severity\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          count: {\n            type: 'integer'\n          },\n          value: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      dismissed: {
        type: 'boolean',
      },
      issue_class: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'issue_class~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      issue_type: {
        type: 'array',
        items: {
          $ref: '#/$defs/issue_type',
        },
      },
      'issue_type~neq': {
        type: 'array',
        items: {
          $ref: '#/$defs/issue_type',
        },
      },
      product: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'product~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      severity: {
        type: 'array',
        items: {
          $ref: '#/$defs/severity_query_param',
        },
      },
      'severity~neq': {
        type: 'array',
        items: {
          $ref: '#/$defs/severity_query_param',
        },
      },
      subject: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'subject~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      issue_type: {
        type: 'string',
        enum: [
          'compliance_violation',
          'email_security',
          'exposed_infrastructure',
          'insecure_configuration',
          'weak_authentication',
        ],
      },
      severity_query_param: {
        type: 'string',
        enum: ['low', 'moderate', 'critical'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.securityCenter.insights.severity.get(body)),
  );
};

export default { metadata, tool, handler };
