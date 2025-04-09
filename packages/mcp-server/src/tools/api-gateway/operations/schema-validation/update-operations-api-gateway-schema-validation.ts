// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations.schema_validation',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_operations_api_gateway_schema_validation',
  description: 'Updates operation-level schema validation settings on the zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      operation_id: {
        type: 'string',
        description: 'UUID.',
      },
      mitigation_action: {
        type: 'string',
        description:
          'When set, this applies a mitigation action to this operation\n\n  - `log` log request when request does not conform to schema for this operation\n  - `block` deny access to the site when request does not conform to schema for this operation\n  - `none` will skip mitigation for this operation\n  - `null` indicates that no operation level mitigation is in place, see Zone Level Schema Validation Settings for mitigation action that will be applied',
        enum: ['log', 'block', 'none'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { operation_id, ...body } = args;
  return client.apiGateway.operations.schemaValidation.update(operation_id, body);
};

export default { metadata, tool, handler };
