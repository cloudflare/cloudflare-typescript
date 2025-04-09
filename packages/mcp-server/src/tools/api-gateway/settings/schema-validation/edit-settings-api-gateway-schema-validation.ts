// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.settings.schema_validation',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_settings_api_gateway_schema_validation',
  description: 'Updates zone level schema validation settings on the zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      validation_default_mitigation_action: {
        type: 'string',
        description:
          'The default mitigation action used when there is no mitigation action defined on the operation\nMitigation actions are as follows:\n\n  * `log` - log request when request does not conform to schema\n  * `block` - deny access to the site when request does not conform to schema\n\nA special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation\n\n`null` will have no effect.',
        enum: ['none', 'log', 'block'],
      },
      validation_override_mitigation_action: {
        type: 'string',
        description:
          'When set, this overrides both zone level and operation level mitigation actions.\n\n  - `none` will skip running schema validation entirely for the request\n\nTo clear any override, use the special value `disable_override`\n\n`null` will have no effect.',
        enum: ['none', 'disable_override'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.settings.schemaValidation.edit(body);
};

export default { metadata, tool, handler };
