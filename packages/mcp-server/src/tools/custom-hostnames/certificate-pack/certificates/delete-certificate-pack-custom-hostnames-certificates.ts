// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.certificate_pack.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}',
  operationId: 'custom-hostname-for-a-zone-delete_single_certificate_and_key_in_a_custom_hostname',
};

export const tool: Tool = {
  name: 'delete_certificate_pack_custom_hostnames_certificates',
  description:
    'Delete a single custom certificate from a certificate pack that contains two bundled certificates. Deletion is subject to the following constraints. You cannot delete a certificate if it is the only remaining certificate in the pack. At least one certificate must remain in the pack.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return client.customHostnames.certificatePack.certificates.delete(certificate_id, body);
};

export default { metadata, tool, handler };
