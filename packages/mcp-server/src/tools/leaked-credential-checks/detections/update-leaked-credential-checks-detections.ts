// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/leaked-credential-checks/detections/{detection_id}',
  operationId: 'waf-product-api-leaked-credentials-update-detection',
};

export const tool: Tool = {
  name: 'update_leaked_credential_checks_detections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate user-defined detection pattern for Leaked Credential Checks.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'Defines a custom set of username/password expressions to match Leaked Credential Checks on.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Defines the unique ID for this custom detection.'\n        },\n        password: {\n          type: 'string',\n          description: 'Defines ehe ruleset expression to use in matching the password in a request.'\n        },\n        username: {\n          type: 'string',\n          description: 'Defines the ruleset expression to use in matching the username in a request.'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      detection_id: {
        type: 'string',
        description: 'Defines the unique ID for this custom detection.',
      },
      password: {
        type: 'string',
        description: 'Defines ehe ruleset expression to use in matching the password in a request.',
      },
      username: {
        type: 'string',
        description: 'Defines the ruleset expression to use in matching the username in a request.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'detection_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { detection_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.leakedCredentialChecks.detections.update(detection_id, body)),
  );
};

export default { metadata, tool, handler };
