// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.certificate_pack.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath:
    '/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}',
  operationId: 'custom-hostname-for-a-zone-edit-custom-certificate-custom-hostname',
};

export const tool: Tool = {
  name: 'update_certificate_pack_custom_hostnames_certificates',
  description:
    'Replace a single custom certificate within a certificate pack that contains two bundled certificates. The replacement must adhere to the following constraints. You can only replace an RSA certificate with another RSA certificate or an ECDSA certificate with another ECDSA certificate.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_hostname_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_certificate: {
        type: 'string',
        description: 'If a custom uploaded certificate is used.',
      },
      custom_key: {
        type: 'string',
        description: 'The key for a custom uploaded certificate.',
      },
    },
    required: [
      'zone_id',
      'custom_hostname_id',
      'certificate_pack_id',
      'certificate_id',
      'custom_certificate',
      'custom_key',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return asTextContentResult(
    await client.customHostnames.certificatePack.certificates.update(certificate_id, body),
  );
};

export default { metadata, tool, handler };
