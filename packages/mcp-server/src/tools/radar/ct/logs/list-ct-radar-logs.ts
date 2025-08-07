// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ct.logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ct/logs',
  operationId: 'radar-get-certificate-logs',
};

export const tool: Tool = {
  name: 'list_ct_radar_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of certificate logs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        certificateLogs: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              api: {\n                type: 'string',\n                description: 'The API standard that the certificate log follows.',\n                enum: [                  'RFC6962',\n                  'STATIC'\n                ]\n              },\n              description: {\n                type: 'string',\n                description: 'A brief description of the certificate log.'\n              },\n              endExclusive: {\n                type: 'string',\n                description: 'The end date and time for when the log will stop accepting certificates.',\n                format: 'date-time'\n              },\n              operator: {\n                type: 'string',\n                description: 'The organization responsible for operating the certificate log.'\n              },\n              slug: {\n                type: 'string',\n                description: 'A URL-friendly, kebab-case identifier for the certificate log.'\n              },\n              startInclusive: {\n                type: 'string',\n                description: 'The start date and time for when the log starts accepting certificates.',\n                format: 'date-time'\n              },\n              state: {\n                type: 'string',\n                description: 'The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTransparency/log_states.html',\n                enum: [                  'USABLE',\n                  'PENDING',\n                  'QUALIFIED',\n                  'READ_ONLY',\n                  'RETIRED',\n                  'REJECTED'\n                ]\n              },\n              stateTimestamp: {\n                type: 'string',\n                description: 'Timestamp of when the log state was last updated.',\n                format: 'date-time'\n              },\n              url: {\n                type: 'string',\n                description: 'The URL for the certificate log.'\n              }\n            },\n            required: [              'api',\n              'description',\n              'endExclusive',\n              'operator',\n              'slug',\n              'startInclusive',\n              'state',\n              'stateTimestamp',\n              'url'\n            ]\n          }\n        }\n      },\n      required: [        'certificateLogs'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.ct.logs.list(body)));
};

export default { metadata, tool, handler };
