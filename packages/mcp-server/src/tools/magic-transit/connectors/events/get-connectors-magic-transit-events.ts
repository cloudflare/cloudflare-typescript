// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/{event_t}.{event_n}',
  operationId: 'mconn-connector-telemetry-events-get',
};

export const tool: Tool = {
  name: 'get_connectors_magic_transit_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Event\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      description: 'Recorded Event',\n      properties: {\n        e: {\n          anyOf: [            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Initialized process',\n                  enum: [                    'Init'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Stopped process',\n                  enum: [                    'Leave'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Started attestation',\n                  enum: [                    'StartAttestation'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Finished attestation',\n                  enum: [                    'FinishAttestationSuccess'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Failed attestation',\n                  enum: [                    'FinishAttestationFailure'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Started crypt key rotation',\n                  enum: [                    'StartRotateCryptKey'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Finished crypt key rotation',\n                  enum: [                    'FinishRotateCryptKeySuccess'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Failed crypt key rotation',\n                  enum: [                    'FinishRotateCryptKeyFailure'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Started PKI rotation',\n                  enum: [                    'StartRotatePki'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Finished PKI rotation',\n                  enum: [                    'FinishRotatePkiSuccess'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Failed PKI rotation',\n                  enum: [                    'FinishRotatePkiFailure'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Started upgrade',\n                  enum: [                    'StartUpgrade'\n                  ]\n                },\n                url: {\n                  type: 'string',\n                  description: 'Location of upgrade bundle'\n                }\n              },\n              required: [                'k',\n                'url'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Finished upgrade',\n                  enum: [                    'FinishUpgradeSuccess'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Failed upgrade',\n                  enum: [                    'FinishUpgradeFailure'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Reconciled',\n                  enum: [                    'Reconcile'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                k: {\n                  type: 'string',\n                  description: 'Configured Cloudflared tunnel',\n                  enum: [                    'ConfigureCloudflaredTunnel'\n                  ]\n                }\n              },\n              required: [                'k'\n              ]\n            }\n          ]\n        },\n        n: {\n          type: 'number',\n          description: 'Sequence number, used to order events with the same timestamp'\n        },\n        t: {\n          type: 'number',\n          description: 'Time the Event was recorded (seconds since the Unix epoch)'\n        }\n      },\n      required: [        'e',\n        'n',\n        't'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    },\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier',
      },
      connector_id: {
        type: 'string',
      },
      event_t: {
        type: 'number',
      },
      event_n: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'connector_id', 'event_t', 'event_n'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_n, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.magicTransit.connectors.events.get(event_n, body)),
  );
};

export default { metadata, tool, handler };
