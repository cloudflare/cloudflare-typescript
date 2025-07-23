// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.configurations.custom_certificate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/configuration/custom_certificate',
  operationId: 'zero-trust-accounts-get-zero-trust-certificate-configuration',
};

export const tool: Tool = {
  name: 'get_configurations_gateway_zero_trust_custom_certificate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the current Zero Trust certificate configuration.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_certificate_settings',\n  $defs: {\n    custom_certificate_settings: {\n      type: 'object',\n      description: 'Custom certificate settings for BYO-PKI. (deprecated and replaced by `certificate`)',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'Enable use of custom certificate authority for signing Gateway traffic.'\n        },\n        id: {\n          type: 'string',\n          description: 'UUID of certificate (ID from MTLS certificate store).'\n        },\n        binding_status: {\n          type: 'string',\n          description: 'Certificate status (internal).'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'enabled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.gateway.configurations.customCertificate.get(body)),
  );
};

export default { metadata, tool, handler };
