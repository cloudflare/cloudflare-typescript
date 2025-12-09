// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.trusted_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/email-security/settings/trusted_domains',
  operationId: 'email_security_create_trusted_domain',
};

export const tool: Tool = {
  name: 'create_settings_email_security_trusted_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a trusted email domain\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/trusted_domain_create_response',\n  $defs: {\n    trusted_domain_create_response: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer',\n              title: 'identifier',\n              description: 'The unique identifier for the trusted domain.'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            is_recent: {\n              type: 'boolean',\n              description: 'Select to prevent recently registered domains from triggering a\\nSuspicious or Malicious disposition.'\n            },\n            is_regex: {\n              type: 'boolean'\n            },\n            is_similarity: {\n              type: 'boolean',\n              description: 'Select for partner or other approved domains that have similar\\nspelling to your connected domains. Prevents listed domains from\\ntriggering a Spoof disposition.'\n            },\n            last_modified: {\n              type: 'string',\n              format: 'date-time'\n            },\n            pattern: {\n              type: 'string'\n            },\n            comments: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'is_recent',\n            'is_regex',\n            'is_similarity',\n            'last_modified',\n            'pattern'\n          ]\n        },\n        {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer',\n                title: 'identifier',\n                description: 'The unique identifier for the trusted domain.'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              is_recent: {\n                type: 'boolean',\n                description: 'Select to prevent recently registered domains from triggering a\\nSuspicious or Malicious disposition.'\n              },\n              is_regex: {\n                type: 'boolean'\n              },\n              is_similarity: {\n                type: 'boolean',\n                description: 'Select for partner or other approved domains that have similar\\nspelling to your connected domains. Prevents listed domains from\\ntriggering a Spoof disposition.'\n              },\n              last_modified: {\n                type: 'string',\n                format: 'date-time'\n              },\n              pattern: {\n                type: 'string'\n              },\n              comments: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'is_recent',\n              'is_regex',\n              'is_similarity',\n              'last_modified',\n              'pattern'\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'account_id',
            description: 'Account Identifier',
          },
          is_recent: {
            type: 'boolean',
            description:
              'Select to prevent recently registered domains from triggering a\nSuspicious or Malicious disposition.',
          },
          is_regex: {
            type: 'boolean',
          },
          is_similarity: {
            type: 'boolean',
            description:
              'Select for partner or other approved domains that have similar\nspelling to your connected domains. Prevents listed domains from\ntriggering a Spoof disposition.',
          },
          pattern: {
            type: 'string',
          },
          comments: {
            type: 'string',
          },
        },
        required: ['account_id', 'is_recent', 'is_regex', 'is_similarity', 'pattern'],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'account_id',
            description: 'Account Identifier',
          },
          body: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                is_recent: {
                  type: 'boolean',
                  description:
                    'Select to prevent recently registered domains from triggering a\nSuspicious or Malicious disposition.',
                },
                is_regex: {
                  type: 'boolean',
                },
                is_similarity: {
                  type: 'boolean',
                  description:
                    'Select for partner or other approved domains that have similar\nspelling to your connected domains. Prevents listed domains from\ntriggering a Spoof disposition.',
                },
                pattern: {
                  type: 'string',
                },
                comments: {
                  type: 'string',
                },
              },
              required: ['is_recent', 'is_regex', 'is_similarity', 'pattern'],
            },
          },
        },
        required: ['account_id', 'body'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.emailSecurity.settings.trustedDomains.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
