// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.scripts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield/scripts/{script_id}',
  operationId: 'page-shield-get-script',
};

export const tool: Tool = {
  name: 'get_page_shield_scripts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a script detected by Page Shield by script ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        added_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        first_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string'\n        },\n        last_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string'\n        },\n        url_contains_cdn_cgi_path: {\n          type: 'boolean'\n        },\n        cryptomining_score: {\n          type: 'integer',\n          description: 'The cryptomining score of the JavaScript content.'\n        },\n        dataflow_score: {\n          type: 'integer',\n          description: 'The dataflow score of the JavaScript content.'\n        },\n        domain_reported_malicious: {\n          type: 'boolean'\n        },\n        fetched_at: {\n          type: 'string',\n          description: 'The timestamp of when the script was last fetched.'\n        },\n        first_page_url: {\n          type: 'string'\n        },\n        hash: {\n          type: 'string',\n          description: 'The computed hash of the analyzed script.'\n        },\n        js_integrity_score: {\n          type: 'integer',\n          description: 'The integrity score of the JavaScript content.'\n        },\n        magecart_score: {\n          type: 'integer',\n          description: 'The magecart score of the JavaScript content.'\n        },\n        malicious_domain_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        malicious_url_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        malware_score: {\n          type: 'integer',\n          description: 'The malware score of the JavaScript content.'\n        },\n        obfuscation_score: {\n          type: 'integer',\n          description: 'The obfuscation score of the JavaScript content.'\n        },\n        page_urls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        url_reported_malicious: {\n          type: 'boolean'\n        },\n        versions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'The version of the analyzed script.',\n            properties: {\n              cryptomining_score: {\n                type: 'integer',\n                description: 'The cryptomining score of the JavaScript content.'\n              },\n              dataflow_score: {\n                type: 'integer',\n                description: 'The dataflow score of the JavaScript content.'\n              },\n              fetched_at: {\n                type: 'string',\n                description: 'The timestamp of when the script was last fetched.'\n              },\n              hash: {\n                type: 'string',\n                description: 'The computed hash of the analyzed script.'\n              },\n              js_integrity_score: {\n                type: 'integer',\n                description: 'The integrity score of the JavaScript content.'\n              },\n              magecart_score: {\n                type: 'integer',\n                description: 'The magecart score of the JavaScript content.'\n              },\n              malware_score: {\n                type: 'integer',\n                description: 'The malware score of the JavaScript content.'\n              },\n              obfuscation_score: {\n                type: 'integer',\n                description: 'The obfuscation score of the JavaScript content.'\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'added_at',\n        'first_seen_at',\n        'host',\n        'last_seen_at',\n        'url',\n        'url_contains_cdn_cgi_path'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      script_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'script_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pageShield.scripts.get(script_id, body)));
};

export default { metadata, tool, handler };
