// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.verification',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/ssl/verification/{certificate_pack_id}',
  operationId: 'ssl-verification-edit-ssl-certificate-pack-validation-method',
};

export const tool: Tool = {
  name: 'edit_ssl_verification',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verification_edit_response',\n  $defs: {\n    verification_edit_response: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'Result status.'\n        },\n        validation_method: {\n          type: 'string',\n          description: 'Desired validation method.',\n          enum: [            'http',\n            'cname',\n            'txt',\n            'email'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Certificate Pack UUID.',
      },
      validation_method: {
        type: 'string',
        description: 'Desired validation method.',
        enum: ['http', 'cname', 'txt', 'email'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'certificate_pack_id', 'validation_method'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ssl.verification.edit(certificate_pack_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
