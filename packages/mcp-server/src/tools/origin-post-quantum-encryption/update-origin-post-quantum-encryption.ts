// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_post_quantum_encryption',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_origin_post_quantum_encryption',
  description:
    'Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      value: {
        type: 'string',
        description: 'Value of the Origin Post Quantum Encryption Setting.',
        enum: ['preferred', 'supported', 'off'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originPostQuantumEncryption.update(body);
};

export default { metadata, tool, handler };
