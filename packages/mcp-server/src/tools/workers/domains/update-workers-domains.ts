// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/domains',
  operationId: 'worker-domain-attach-to-domain',
};

export const tool: Tool = {
  name: 'update_workers_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAttaches a Worker to a zone and hostname.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/domain',\n  $defs: {\n    domain: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifer of the Worker Domain.'\n        },\n        environment: {\n          type: 'string',\n          description: 'Worker environment associated with the zone and hostname.'\n        },\n        hostname: {\n          type: 'string',\n          description: 'Hostname of the Worker Domain.'\n        },\n        service: {\n          type: 'string',\n          description: 'Worker service associated with the zone and hostname.'\n        },\n        zone_id: {\n          type: 'string',\n          description: 'Identifier of the zone.'\n        },\n        zone_name: {\n          type: 'string',\n          description: 'Name of the zone.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifer of the account.',
      },
      hostname: {
        type: 'string',
        description: 'Hostname of the Worker Domain.',
      },
      service: {
        type: 'string',
        description: 'Worker service associated with the zone and hostname.',
      },
      zone_id: {
        type: 'string',
        description: 'Identifier of the zone.',
      },
      environment: {
        type: 'string',
        description: 'Worker environment associated with the zone and hostname.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'hostname', 'service', 'zone_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.workers.domains.update(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
