// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas.operations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_user_schemas_api_gateway_operations',
  description:
    'Retrieves all operations from the schema. Operations that already exist in API Shield Endpoint Management will be returned as full operations.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      schema_id: {
        type: 'string',
      },
      endpoint: {
        type: 'string',
        description: 'Filter results to only include endpoints containing this pattern.',
      },
      feature: {
        type: 'array',
        description:
          'Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.',
        items: {
          type: 'string',
          enum: ['thresholds', 'parameter_schemas', 'schema_info'],
        },
      },
      host: {
        type: 'array',
        description: 'Filter results to only include the specified hosts.',
        items: {
          type: 'string',
        },
      },
      method: {
        type: 'array',
        description: 'Filter results to only include the specified HTTP methods.',
        items: {
          type: 'string',
        },
      },
      operation_status: {
        type: 'string',
        description:
          'Filter results by whether operations exist in API Shield Endpoint Management or not. `new` will just return operations from the schema that do not exist in API Shield Endpoint Management. `existing` will just return operations from the schema that already exist in API Shield Endpoint Management.',
        enum: ['new', 'existing'],
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { schema_id, ...body } = args;
  return client.apiGateway.userSchemas.operations.list(schema_id, body);
};

export default { metadata, tool, handler };
