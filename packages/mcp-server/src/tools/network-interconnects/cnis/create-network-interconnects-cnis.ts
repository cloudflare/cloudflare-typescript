// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_network_interconnects_cnis',
  description: 'Create a new CNI object',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      account: {
        type: 'string',
        description: 'Customer account tag',
      },
      interconnect: {
        type: 'string',
      },
      magic: {
        type: 'object',
        properties: {
          conduit_name: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          mtu: {
            type: 'integer',
          },
        },
        required: ['conduit_name', 'description', 'mtu'],
      },
      bgp: {
        type: 'object',
        properties: {
          customer_asn: {
            type: 'integer',
            description: 'ASN used on the customer end of the BGP session',
          },
          extra_prefixes: {
            type: 'array',
            description: "Extra set of static prefixes to advertise to the customer's end of the session",
            items: {
              type: 'string',
            },
          },
          md5_key: {
            type: 'string',
            description:
              'MD5 key to use for session authentication.\n\nNote that *this is not a security measure*. MD5 is not a valid security mechanism, and the\nkey is not treated as a secret value. This is *only* supported for preventing\nmisconfiguration, not for defending against malicious attacks.\n\nThe MD5 key, if set, must be of non-zero length and consist only of the following types of\ncharacter:\n\n* ASCII alphanumerics: `[a-zA-Z0-9]`\n* Special characters in the set `\'!@#$%^&*()+[]{}<>/.,;:_-~`= \\|`\n\nIn other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),\nquotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed\n(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of\nthese disallowed characters will be rejected.',
          },
        },
        required: ['customer_asn', 'extra_prefixes'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.cnis.create(body);
};

export default { metadata, tool, handler };
