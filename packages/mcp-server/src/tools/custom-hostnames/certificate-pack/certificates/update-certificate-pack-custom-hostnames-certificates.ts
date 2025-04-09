// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.certificate_pack.certificates',
  operation: 'write',
  tags: [],
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
        description: 'Identifier',
      },
      custom_hostname_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate_id: {
        type: 'string',
        description: 'Identifier',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id, ...body } = args;
  return client.customHostnames.certificatePack.certificates.update(certificate_id, body);
};

export default { metadata, tool, handler };
