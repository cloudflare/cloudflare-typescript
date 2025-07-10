// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.acls',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}',
  operationId: 'magic-site-acls-patch-acl',
};

export const tool: Tool = {
  name: 'edit_sites_magic_transit_acls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch a specific Site ACL.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/acl'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    acl: {\n      type: 'object',\n      description: 'Bidirectional ACL policy for network traffic within a site.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        description: {\n          type: 'string',\n          description: 'Description for the ACL.'\n        },\n        forward_locally: {\n          type: 'boolean',\n          description: 'The desired forwarding action for this ACL policy. If set to \"false\", the policy will forward traffic to Cloudflare. If set to \"true\", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.'\n        },\n        lan_1: {\n          $ref: '#/$defs/acl_configuration'\n        },\n        lan_2: {\n          $ref: '#/$defs/acl_configuration'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the ACL.'\n        },\n        protocols: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/allowed_protocol'\n          }\n        },\n        unidirectional: {\n          type: 'boolean',\n          description: 'The desired traffic direction for this ACL policy. If set to \"false\", the policy will allow bidirectional traffic. If set to \"true\", the policy will only allow traffic in one direction. If not included in request, will default to false.'\n        }\n      },\n      required: []\n    },\n    acl_configuration: {\n      type: 'object',\n      properties: {\n        lan_id: {\n          type: 'string',\n          description: 'The identifier for the LAN you want to create an ACL policy with.'\n        },\n        lan_name: {\n          type: 'string',\n          description: 'The name of the LAN based on the provided lan_id.'\n        },\n        port_ranges: {\n          type: 'array',\n          description: 'Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.',\n          items: {\n            type: 'string',\n            description: 'A valid port range value.'\n          }\n        },\n        ports: {\n          type: 'array',\n          description: 'Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.',\n          items: {\n            type: 'integer'\n          }\n        },\n        subnets: {\n          type: 'array',\n          description: 'Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.',\n          items: {\n            $ref: '#/$defs/subnet'\n          }\n        }\n      },\n      required: [        'lan_id'\n      ]\n    },\n    subnet: {\n      type: 'string',\n      description: 'A valid IPv4 address.'\n    },\n    allowed_protocol: {\n      type: 'string',\n      description: 'Array of allowed communication protocols between configured LANs. If no protocols are provided, all protocols are allowed.',\n      enum: [        'tcp',\n        'udp',\n        'icmp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      acl_id: {
        type: 'string',
        description: 'Identifier',
      },
      description: {
        type: 'string',
        description: 'Description for the ACL.',
      },
      forward_locally: {
        type: 'boolean',
        description:
          'The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.',
      },
      lan_1: {
        $ref: '#/$defs/acl_configuration',
      },
      lan_2: {
        $ref: '#/$defs/acl_configuration',
      },
      name: {
        type: 'string',
        description: 'The name of the ACL.',
      },
      protocols: {
        type: 'array',
        items: {
          $ref: '#/$defs/allowed_protocol',
        },
      },
      unidirectional: {
        type: 'boolean',
        description:
          'The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      acl_configuration: {
        type: 'object',
        properties: {
          lan_id: {
            type: 'string',
            description: 'The identifier for the LAN you want to create an ACL policy with.',
          },
          lan_name: {
            type: 'string',
            description: 'The name of the LAN based on the provided lan_id.',
          },
          port_ranges: {
            type: 'array',
            description:
              'Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.',
            items: {
              type: 'string',
              description: 'A valid port range value.',
            },
          },
          ports: {
            type: 'array',
            description:
              'Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.',
            items: {
              type: 'integer',
            },
          },
          subnets: {
            type: 'array',
            description:
              'Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.',
            items: {
              $ref: '#/$defs/subnet',
            },
          },
        },
        required: ['lan_id'],
      },
      subnet: {
        type: 'string',
        description: 'A valid IPv4 address.',
      },
      allowed_protocol: {
        type: 'string',
        description:
          'Array of allowed communication protocols between configured LANs. If no protocols are provided, all protocols are allowed.',
        enum: ['tcp', 'udp', 'icmp'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { acl_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.magicTransit.sites.acls.edit(acl_id, body)),
  );
};

export default { metadata, tool, handler };
