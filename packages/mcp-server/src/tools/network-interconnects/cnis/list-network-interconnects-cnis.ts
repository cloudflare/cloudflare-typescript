// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/cnis',
  operationId: 'list_cnis',
};

export const tool: Tool = {
  name: 'list_network_interconnects_cnis',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList existing CNI objects\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          account: {\n            type: 'string',\n            description: 'Customer account tag'\n          },\n          cust_ip: {\n            type: 'string',\n            description: 'Customer end of the point-to-point link\\n\\nThis should always be inside the same prefix as `p2p_ip`.'\n          },\n          interconnect: {\n            type: 'string',\n            description: 'Interconnect identifier hosting this CNI'\n          },\n          magic: {\n            type: 'object',\n            properties: {\n              conduit_name: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              mtu: {\n                type: 'integer'\n              }\n            },\n            required: [              'conduit_name',\n              'description',\n              'mtu'\n            ]\n          },\n          p2p_ip: {\n            type: 'string',\n            description: 'Cloudflare end of the point-to-point link'\n          },\n          bgp: {\n            type: 'object',\n            properties: {\n              customer_asn: {\n                type: 'integer',\n                description: 'ASN used on the customer end of the BGP session'\n              },\n              extra_prefixes: {\n                type: 'array',\n                description: 'Extra set of static prefixes to advertise to the customer\\'s end of the session',\n                items: {\n                  type: 'string'\n                }\n              },\n              md5_key: {\n                type: 'string',\n                description: 'MD5 key to use for session authentication.\\n\\nNote that *this is not a security measure*. MD5 is not a valid security mechanism, and the\\nkey is not treated as a secret value. This is *only* supported for preventing\\nmisconfiguration, not for defending against malicious attacks.\\n\\nThe MD5 key, if set, must be of non-zero length and consist only of the following types of\\ncharacter:\\n\\n* ASCII alphanumerics: `[a-zA-Z0-9]`\\n* Special characters in the set `\\'!@#$%^&*()+[]{}<>/.,;:_-~`= \\\\|`\\n\\nIn other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),\\nquotation mark (`\"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed\\n(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of\\nthese disallowed characters will be rejected.'\n              }\n            },\n            required: [              'customer_asn',\n              'extra_prefixes'\n            ]\n          }\n        },\n        required: [          'id',\n          'account',\n          'cust_ip',\n          'interconnect',\n          'magic',\n          'p2p_ip'\n        ]\n      }\n    },\n    next: {\n      type: 'integer'\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      cursor: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
      },
      slot: {
        type: 'string',
        description: 'If specified, only show CNIs associated with the specified slot',
      },
      tunnel_id: {
        type: 'string',
        description: 'If specified, only show cnis associated with the specified tunnel id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.networkInterconnects.cnis.list(body)));
};

export default { metadata, tool, handler };
