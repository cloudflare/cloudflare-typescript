// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/spectrum/apps',
  operationId: 'spectrum-applications-list-spectrum-applications',
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
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.spectrum.apps.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
