// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.keys',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_namespaces_kv_keys',
  description: "Lists a namespace's keys.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      namespace_id: {
        type: 'string',
        description: 'Namespace identifier tag.',
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the `cursors` object in the `result_info` structure.',
      },
      limit: {
        type: 'number',
        description:
          'The number of keys to return. The cursor attribute may be used to iterate over the next batch of keys if there are more than the limit.',
      },
      prefix: {
        type: 'string',
        description:
          'A string prefix used to filter down which keys will be returned. Exact matches and any key names that begin with the prefix will be returned.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { namespace_id, ...body } = args;
  return client.kv.namespaces.keys.list(namespace_id, body);
};

export default { metadata, tool, handler };
