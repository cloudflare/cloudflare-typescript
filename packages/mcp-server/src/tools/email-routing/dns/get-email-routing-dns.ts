// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.dns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/email/routing/dns',
  operationId: 'email-routing-settings-email-routing-dns-settings',
};

export const tool: Tool = {
  name: 'get_email_routing_dns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShow the DNS records needed to configure your Email Routing zone.\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'integer'\n              },\n              message: {\n                type: 'string'\n              },\n              documentation_url: {\n                type: 'string'\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  pointer: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              }\n            },\n            required: [              'code',\n              'message'\n            ]\n          }\n        },\n        messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'integer'\n              },\n              message: {\n                type: 'string'\n              },\n              documentation_url: {\n                type: 'string'\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  pointer: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              }\n            },\n            required: [              'code',\n              'message'\n            ]\n          }\n        },\n        success: {\n          type: 'string',\n          description: 'Whether the API call was successful.',\n          enum: [            true\n          ]\n        },\n        result: {\n          type: 'object',\n          properties: {\n            errors: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  code: {\n                    type: 'string'\n                  },\n                  missing: {\n                    $ref: '#/$defs/dns_record'\n                  }\n                },\n                required: []\n              }\n            },\n            record: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/dns_record'\n              }\n            }\n          },\n          required: []\n        },\n        result_info: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'number',\n              description: 'Total number of results for the requested service.'\n            },\n            page: {\n              type: 'number',\n              description: 'Current page within paginated list of results.'\n            },\n            per_page: {\n              type: 'number',\n              description: 'Number of results per page of results.'\n            },\n            total_count: {\n              type: 'number',\n              description: 'Total results available without any search parameters.'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'errors',\n        'messages',\n        'success'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'integer'\n              },\n              message: {\n                type: 'string'\n              },\n              documentation_url: {\n                type: 'string'\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  pointer: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              }\n            },\n            required: [              'code',\n              'message'\n            ]\n          }\n        },\n        messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'integer'\n              },\n              message: {\n                type: 'string'\n              },\n              documentation_url: {\n                type: 'string'\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  pointer: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              }\n            },\n            required: [              'code',\n              'message'\n            ]\n          }\n        },\n        success: {\n          type: 'string',\n          description: 'Whether the API call was successful.',\n          enum: [            true\n          ]\n        },\n        result: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/dns_record'\n          }\n        },\n        result_info: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'number',\n              description: 'Total number of results for the requested service.'\n            },\n            page: {\n              type: 'number',\n              description: 'Current page within paginated list of results.'\n            },\n            per_page: {\n              type: 'number',\n              description: 'Number of results per page of results.'\n            },\n            total_count: {\n              type: 'number',\n              description: 'Total results available without any search parameters.'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'errors',\n        'messages',\n        'success'\n      ]\n    }\n  ],\n  $defs: {\n    dns_record: {\n      type: 'object',\n      description: 'List of records needed to enable an Email Routing zone.',\n      properties: {\n        content: {\n          type: 'string',\n          description: 'DNS record content.'\n        },\n        name: {\n          type: 'string',\n          description: 'DNS record name (or @ for the zone apex).'\n        },\n        priority: {\n          type: 'number',\n          description: 'Required for MX, SRV and URI records. Unused by other record types. Records with lower priorities are preferred.'\n        },\n        ttl: {\n          anyOf: [            {\n              type: 'number'\n            },\n            {\n              type: 'string',\n              description: 'Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1 for \\'automatic\\'.',\n              enum: [                1\n              ]\n            }\n          ],\n          description: 'Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1 for \\'automatic\\'.'\n        },\n        type: {\n          type: 'string',\n          description: 'DNS record type.',\n          enum: [            'A',\n            'AAAA',\n            'CNAME',\n            'HTTPS',\n            'TXT',\n            'SRV',\n            'LOC',\n            'MX',\n            'NS',\n            'CERT',\n            'DNSKEY',\n            'DS',\n            'NAPTR',\n            'SMIMEA',\n            'SSHFP',\n            'SVCB',\n            'TLSA',\n            'URI'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      subdomain: {
        type: 'string',
        description: 'Domain of your zone.',
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
  return asTextContentResult(await maybeFilter(args, await client.emailRouting.dns.get(body)));
};

export default { metadata, tool, handler };
