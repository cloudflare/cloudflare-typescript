// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/leaked-credential-checks/detections',
  operationId: 'waf-product-api-leaked-credentials-create-detection',
};

export const tool: Tool = {
  name: 'create_leaked_credential_checks_detections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate user-defined detection pattern for Leaked Credential Checks.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/detection_create_response',\n  $defs: {\n    detection_create_response: {\n      type: 'object',\n      description: 'Defines a custom set of username/password expressions to match Leaked Credential Checks on.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Defines the unique ID for this custom detection.'\n        },\n        password: {\n          type: 'string',\n          description: 'Defines ehe ruleset expression to use in matching the password in a request.'\n        },\n        username: {\n          type: 'string',\n          description: 'Defines the ruleset expression to use in matching the username in a request.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
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
    required: ['zone_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.leakedCredentialChecks.detections.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
