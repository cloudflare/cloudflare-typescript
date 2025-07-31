// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.token',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/{identifier}/token',
  operationId: 'stream-videos-create-signed-url-tokens-for-videos',
};

export const tool: Tool = {
  name: 'create_stream_token',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a signed URL token for a video. If a body is not provided in the request, a token is created with default values.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'string',\n          description: 'The signed token used with the signed URLs feature.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      identifier: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
      },
      id: {
        type: 'string',
        description: 'The optional ID of a Stream signing key. If present, the `pem` field is also required.',
      },
      accessRules: {
        type: 'array',
        description:
          'The optional list of access rule constraints on the token. Access can be blocked or allowed based on an IP, IP range, or by country. Access rules are evaluated from first to last. If a rule matches, the associated action is applied and no further rules are evaluated.',
        items: {
          type: 'object',
          description:
            'Defines rules for fine-grained control over content than signed URL tokens alone. Access rules primarily make tokens conditionally valid based on user information. Access Rules are specified on token payloads as the `accessRules` property containing an array of Rule objects.',
          properties: {
            action: {
              type: 'string',
              description:
                'The action to take when a request matches a rule. If the action is `block`, the signed token blocks views for viewers matching the rule.',
              enum: ['allow', 'block'],
            },
            country: {
              type: 'array',
              description:
                'An array of 2-letter country codes in ISO 3166-1 Alpha-2 format used to match requests.',
              items: {
                type: 'string',
              },
            },
            ip: {
              type: 'array',
              description: 'An array of IPv4 or IPV6 addresses or CIDRs used to match requests.',
              items: {
                type: 'string',
              },
            },
            type: {
              type: 'string',
              description:
                'Lists available rule types to match for requests. An `any` type matches all requests and can be used as a wildcard to apply default actions after other rules.',
              enum: ['any', 'ip.src', 'ip.geoip.country'],
            },
          },
        },
      },
      downloadable: {
        type: 'boolean',
        description:
          'The optional boolean value that enables using signed tokens to access MP4 download links for a video.',
      },
      exp: {
        type: 'integer',
        description:
          'The optional unix epoch timestamp that specficies the time after a token is not accepted. The maximum time specification is 24 hours from issuing time. If this field is not set, the default is one hour after issuing.',
      },
      nbf: {
        type: 'integer',
        description:
          'The optional unix epoch timestamp that specifies the time before a the token is not accepted. If this field is not set, the default is one hour before issuing.',
      },
      pem: {
        type: 'string',
        description:
          'The optional base64 encoded private key in PEM format associated with a Stream signing key. If present, the `id` field is also required.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identifier'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stream.token.create(identifier, body)),
  );
};

export default { metadata, tool, handler };
