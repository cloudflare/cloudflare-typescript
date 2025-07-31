// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/custom_certificates',
  operationId: 'custom-ssl-for-a-zone-list-ssl-configurations',
};

export const tool: Tool = {
  name: 'list_custom_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList, search, and filter all of your custom SSL certificates. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/custom_certificate'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    custom_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        bundle_method: {\n          $ref: '#/$defs/bundle_method'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the certificate from the authority expires.',\n          format: 'date-time'\n        },\n        hosts: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'The valid hosts for the certificates.'\n          }\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the certificate was last modified.',\n          format: 'date-time'\n        },\n        priority: {\n          type: 'number',\n          description: 'The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping \\'legacy_custom\\' certificates, but \\'legacy_custom\\' certificates will always supercede \\'sni_custom\\' certificates.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the zone\\'s custom SSL.',\n          enum: [            'active',\n            'expired',\n            'deleted',\n            'pending',\n            'initializing'\n          ]\n        },\n        uploaded_on: {\n          type: 'string',\n          description: 'When the certificate was uploaded to Cloudflare.',\n          format: 'date-time'\n        },\n        zone_id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        geo_restrictions: {\n          $ref: '#/$defs/geo_restrictions'\n        },\n        keyless_server: {\n          $ref: '#/$defs/keyless_certificate'\n        },\n        policy: {\n          type: 'string',\n          description: 'Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as \\'country: IN\\', as well as \\'region: EU\\' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.'\n        }\n      },\n      required: [        'id',\n        'bundle_method',\n        'expires_on',\n        'hosts',\n        'issuer',\n        'modified_on',\n        'priority',\n        'signature',\n        'status',\n        'uploaded_on',\n        'zone_id'\n      ]\n    },\n    bundle_method: {\n      type: 'string',\n      description: 'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',\n      enum: [        'ubiquitous',\n        'optimal',\n        'force'\n      ]\n    },\n    geo_restrictions: {\n      type: 'object',\n      description: 'Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.',\n      properties: {\n        label: {\n          type: 'string',\n          enum: [            'us',\n            'eu',\n            'highest_security'\n          ]\n        }\n      }\n    },\n    keyless_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Keyless certificate identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether or not the Keyless SSL is on or off.'\n        },\n        host: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Available permissions for the Keyless SSL for the current user requesting the item.',\n          items: {\n            type: 'string'\n          }\n        },\n        port: {\n          type: 'number',\n          description: 'The keyless SSL port used to communicate between Cloudflare and the client\\'s Keyless SSL server.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the Keyless SSL.',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        tunnel: {\n          $ref: '#/$defs/tunnel'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'enabled',\n        'host',\n        'modified_on',\n        'name',\n        'permissions',\n        'port',\n        'status'\n      ]\n    },\n    tunnel: {\n      type: 'object',\n      description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',\n      properties: {\n        private_ip: {\n          type: 'string',\n          description: 'Private IP of the Key Server Host'\n        },\n        vnet_id: {\n          type: 'string',\n          description: 'Cloudflare Tunnel Virtual Network ID'\n        }\n      },\n      required: [        'private_ip',\n        'vnet_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      match: {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        enum: ['any', 'all'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of zones per page.',
      },
      status: {
        type: 'string',
        description: "Status of the zone's custom SSL.",
        enum: ['active', 'expired', 'deleted', 'pending', 'initializing'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.customCertificates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
