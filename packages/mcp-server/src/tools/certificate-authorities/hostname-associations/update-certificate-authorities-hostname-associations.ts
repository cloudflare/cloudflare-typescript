// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'certificate_authorities.hostname_associations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_certificate_authorities_hostname_associations',
  description: 'Replace Hostname Associations',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostnames: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      mtls_certificate_id: {
        type: 'string',
        description:
          'The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.certificateAuthorities.hostnameAssociations.update(body);
};

export default { metadata, tool, handler };
