// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.verification',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/ssl/verification/{certificate_pack_id}',
  operationId: 'ssl-verification-edit-ssl-certificate-pack-validation-method',
};

export const tool: Tool = {
  name: 'edit_ssl_verification',
  description:
    'Edit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Certificate Pack UUID.',
      },
      validation_method: {
        type: 'string',
        description: 'Desired validation method.',
        enum: ['http', 'cname', 'txt', 'email'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, ...body } = args as any;
  return asTextContentResult(await client.ssl.verification.edit(certificate_pack_id, body));
};

export default { metadata, tool, handler };
