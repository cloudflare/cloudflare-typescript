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
  httpPath: '/radar/ct/logs/{log_slug}',
  operationId: 'radar-get-certificate-log-details',
};

export const tool: Tool = {
  name: 'get_ct_radar_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the requested certificate log information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        certificateLog: {\n          type: 'object',\n          properties: {\n            api: {\n              type: 'string',\n              description: 'The API standard that the certificate log follows.',\n              enum: [                'RFC6962',\n                'STATIC'\n              ]\n            },\n            avgThroughput: {\n              type: 'number',\n              description: 'The average throughput of the CT log, measured in certificates per hour (certs/hour).'\n            },\n            description: {\n              type: 'string',\n              description: 'A brief description of the certificate log.'\n            },\n            endExclusive: {\n              type: 'string',\n              description: 'The end date and time for when the log will stop accepting certificates.',\n              format: 'date-time'\n            },\n            lastUpdate: {\n              type: 'string',\n              description: 'Timestamp of the most recent update to the CT log.',\n              format: 'date-time'\n            },\n            operator: {\n              type: 'string',\n              description: 'The organization responsible for operating the certificate log.'\n            },\n            performance: {\n              type: 'object',\n              description: 'Log performance metrics, including averages and per-endpoint details.',\n              properties: {\n                endpoints: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      endpoint: {\n                        type: 'string',\n                        description: 'The certificate log endpoint names used in performance metrics.',\n                        enum: [                          'add-chain (new)',\n                          'add-chain (old)',\n                          'add-pre-chain (new)',\n                          'add-pre-chain (old)',\n                          'get-entries',\n                          'get-roots',\n                          'get-sth'\n                        ]\n                      },\n                      responseTime: {\n                        type: 'number'\n                      },\n                      uptime: {\n                        type: 'number'\n                      }\n                    },\n                    required: [                      'endpoint',\n                      'responseTime',\n                      'uptime'\n                    ]\n                  }\n                },\n                responseTime: {\n                  type: 'number'\n                },\n                uptime: {\n                  type: 'number'\n                }\n              },\n              required: [                'endpoints',\n                'responseTime',\n                'uptime'\n              ]\n            },\n            related: {\n              type: 'array',\n              description: 'Logs from the same operator.',\n              items: {\n                type: 'object',\n                properties: {\n                  description: {\n                    type: 'string',\n                    description: 'A brief description of the certificate log.'\n                  },\n                  endExclusive: {\n                    type: 'string',\n                    description: 'The end date and time for when the log will stop accepting certificates.',\n                    format: 'date-time'\n                  },\n                  slug: {\n                    type: 'string',\n                    description: 'A URL-friendly, kebab-case identifier for the certificate log.'\n                  },\n                  startInclusive: {\n                    type: 'string',\n                    description: 'The start date and time for when the log starts accepting certificates.',\n                    format: 'date-time'\n                  },\n                  state: {\n                    type: 'string',\n                    description: 'The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTransparency/log_states.html',\n                    enum: [                      'USABLE',\n                      'PENDING',\n                      'QUALIFIED',\n                      'READ_ONLY',\n                      'RETIRED',\n                      'REJECTED'\n                    ]\n                  }\n                },\n                required: [                  'description',\n                  'endExclusive',\n                  'slug',\n                  'startInclusive',\n                  'state'\n                ]\n              }\n            },\n            slug: {\n              type: 'string',\n              description: 'A URL-friendly, kebab-case identifier for the certificate log.'\n            },\n            startInclusive: {\n              type: 'string',\n              description: 'The start date and time for when the log starts accepting certificates.',\n              format: 'date-time'\n            },\n            state: {\n              type: 'string',\n              description: 'The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTransparency/log_states.html',\n              enum: [                'USABLE',\n                'PENDING',\n                'QUALIFIED',\n                'READ_ONLY',\n                'RETIRED',\n                'REJECTED'\n              ]\n            },\n            stateTimestamp: {\n              type: 'string',\n              description: 'Timestamp of when the log state was last updated.',\n              format: 'date-time'\n            },\n            submittableCertCount: {\n              type: 'string',\n              description: 'Number of certificates that are eligible for inclusion to this log but have not been included yet. Based on certificates signed by trusted root CAs within the log\\'s accepted date range.'\n            },\n            submittedCertCount: {\n              type: 'string',\n              description: 'Number of certificates already included in this CT log.'\n            },\n            url: {\n              type: 'string',\n              description: 'The URL for the certificate log.'\n            }\n          },\n          required: [            'api',\n            'avgThroughput',\n            'description',\n            'endExclusive',\n            'lastUpdate',\n            'operator',\n            'performance',\n            'related',\n            'slug',\n            'startInclusive',\n            'state',\n            'stateTimestamp',\n            'submittableCertCount',\n            'submittedCertCount',\n            'url'\n          ]\n        }\n      },\n      required: [        'certificateLog'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      log_slug: {
        type: 'string',
        description: 'Certificate log slug.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['log_slug'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { log_slug, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.ct.logs.get(log_slug, body)));
};

export default { metadata, tool, handler };
