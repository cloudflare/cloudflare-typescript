// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ct.authorities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ct/authorities',
  operationId: 'radar-get-certificate-authorities',
};

export const tool: Tool = {
  name: 'list_ct_radar_authorities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of certificate authorities.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        certificateAuthorities: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              certificateRecordType: {\n                type: 'string',\n                description: 'Specifies the type of certificate in the trust chain.',\n                enum: [                  'ROOT_CERTIFICATE',\n                  'INTERMEDIATE_CERTIFICATE'\n                ]\n              },\n              country: {\n                type: 'string',\n                description: 'The two-letter ISO country code where the CA organization is based.'\n              },\n              countryName: {\n                type: 'string',\n                description: 'The full country name corresponding to the country code.'\n              },\n              name: {\n                type: 'string',\n                description: 'The full name of the certificate authority (CA).'\n              },\n              owner: {\n                type: 'string',\n                description: 'The organization that owns and operates the CA.'\n              },\n              parentName: {\n                type: 'string',\n                description: 'The name of the parent/root certificate authority that issued this intermediate certificate.'\n              },\n              parentSha256Fingerprint: {\n                type: 'string',\n                description: 'The SHA-256 fingerprint of the parent certificate.'\n              },\n              revocationStatus: {\n                type: 'string',\n                description: 'The current revocation status of a Certificate Authority (CA) certificate.',\n                enum: [                  'NOT_REVOKED',\n                  'REVOKED',\n                  'PARENT_CERT_REVOKED'\n                ]\n              },\n              sha256Fingerprint: {\n                type: 'string',\n                description: 'The SHA-256 fingerprint of the intermediate certificate.'\n              }\n            },\n            required: [              'certificateRecordType',\n              'country',\n              'countryName',\n              'name',\n              'owner',\n              'parentName',\n              'parentSha256Fingerprint',\n              'revocationStatus',\n              'sha256Fingerprint'\n            ]\n          }\n        }\n      },\n      required: [        'certificateAuthorities'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.ct.authorities.list(body)));
};

export default { metadata, tool, handler };
