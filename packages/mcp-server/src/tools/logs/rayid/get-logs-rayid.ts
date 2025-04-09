// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.rayid',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_logs_rayid',
  description:
    'The `/rayids` api route allows lookups by specific rayid. The rayids route will return zero, one, or more records (ray ids are not unique).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      ray_id: {
        type: 'string',
        description: 'Ray identifier.',
      },
      fields: {
        type: 'string',
        description:
          'The `/received` route by default returns a limited set of fields, and allows customers to override the default field set by specifying individual fields. The reasons for this are: 1. Most customers require only a small subset of fields, but that subset varies from customer to customer; 2. Flat schema is much easier to work with downstream (importing into BigTable etc); 3. Performance (time to process, file size). If `?fields=` is not specified, default field set is returned. This default field set may change at any time. When `?fields=` is provided, each record is returned with the specified fields. `fields` must be specified as a comma separated list without any whitespaces, and all fields must exist. The order in which fields are specified does not matter, and the order of fields in the response is not specified.',
      },
      timestamps: {
        type: 'string',
        description:
          'By default, timestamps in responses are returned as Unix nanosecond integers. The `?timestamps=` argument can be set to change the format in which response timestamps are returned. Possible values are: `unix`, `unixnano`, `rfc3339`. Note that `unix` and `unixnano` return timestamps as integers; `rfc3339` returns timestamps as strings.',
        enum: ['unix', 'unixnano', 'rfc3339'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ray_id, ...body } = args;
  return client.logs.RayID.get(ray_id, body);
};

export default { metadata, tool, handler };
