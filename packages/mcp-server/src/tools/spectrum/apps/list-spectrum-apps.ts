// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.apps',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_spectrum_apps',
  description: 'Retrieves a list of currently existing Spectrum applications inside a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Zone identifier.',
      },
      direction: {
        type: 'string',
        description: 'Sets the direction by which results are ordered.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Application field by which results are ordered.',
        enum: ['protocol', 'app_id', 'created_on', 'modified_on', 'dns'],
      },
      page: {
        type: 'number',
        description:
          'Page number of paginated results. This parameter is required in order to use other pagination parameters. If included in the query, `result_info` will be present in the response.',
      },
      per_page: {
        type: 'number',
        description: 'Sets the maximum number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.spectrum.apps.list(body);
};

export default { metadata, tool, handler };
