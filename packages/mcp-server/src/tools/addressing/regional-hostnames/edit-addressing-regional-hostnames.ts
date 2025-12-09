// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.regional_hostnames',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/addressing/regional_hostnames/{hostname}',
  operationId: 'dls-account-regional-hostnames-account-patch-hostname',
};

export const tool: Tool = {
  name: 'edit_addressing_regional_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the configuration for a specific Regional Hostname. Only the region_key of a hostname is mutable.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/regional_hostname_edit_response',\n  $defs: {\n    regional_hostname_edit_response: {\n      type: 'object',\n      properties: {\n        created_on: {\n          type: 'string',\n          description: 'When the regional hostname was created',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`'\n        },\n        region_key: {\n          type: 'string',\n          description: 'Identifying key for the region'\n        },\n        routing: {\n          type: 'string',\n          description: 'Configure which routing method to use for the regional hostname'\n        }\n      },\n      required: [        'created_on',\n        'hostname',\n        'region_key'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      hostname: {
        type: 'string',
        description:
          'DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`',
      },
      region_key: {
        type: 'string',
        description: 'Identifying key for the region',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'hostname', 'region_key'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hostname, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.addressing.regionalHostnames.edit(hostname, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
