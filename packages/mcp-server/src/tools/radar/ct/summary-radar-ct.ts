// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ct',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ct/summary/{dimension}',
  operationId: 'radar-get-ct-summary',
};

export const tool: Tool = {
  name: 'summary_radar_ct',
  description: 'Retrieves an aggregated summary of certificates grouped by the specified dimension.',
  inputSchema: {
    type: 'object',
    properties: {
      dimension: {
        type: 'string',
        description: 'Specifies the certificate attribute by which to group the results.',
        enum: [
          'CA',
          'CA_OWNER',
          'DURATION',
          'ENTRY_TYPE',
          'EXPIRATION_STATUS',
          'HAS_IPS',
          'HAS_WILDCARDS',
          'LOG',
          'LOG_API',
          'LOG_OPERATOR',
          'PUBLIC_KEY_ALGORITHM',
          'SIGNATURE_ALGORITHM',
          'TLD',
          'VALIDATION_LEVEL',
        ],
      },
      ca: {
        type: 'array',
        description: 'Filters results by certificate authority.',
        items: {
          type: 'string',
        },
      },
      caOwner: {
        type: 'array',
        description: 'Filters results by certificate authority owner.',
        items: {
          type: 'string',
        },
      },
      dateEnd: {
        type: 'array',
        description: 'End of the date range (inclusive).',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      dateRange: {
        type: 'array',
        description:
          'Filters results by date range. For example, use `7d` and `7dcontrol` to compare this week with the previous week. Use this parameter or set specific start and end dates (`dateStart` and `dateEnd` parameters).',
        items: {
          type: 'string',
        },
      },
      dateStart: {
        type: 'array',
        description: 'Start of the date range.',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      duration: {
        type: 'array',
        description: 'Filters results by certificate duration.',
        items: {
          type: 'string',
          enum: [
            'LTE_3D',
            'GT_3D_LTE_7D',
            'GT_7D_LTE_10D',
            'GT_10D_LTE_47D',
            'GT_47D_LTE_100D',
            'GT_100D_LTE_200D',
            'GT_200D',
          ],
        },
      },
      entryType: {
        type: 'array',
        description: 'Filters results by entry type (certificate vs. pre-certificate).',
        items: {
          type: 'string',
          enum: ['PRECERTIFICATE', 'CERTIFICATE'],
        },
      },
      expirationStatus: {
        type: 'array',
        description: 'Filters results by expiration status (expired vs. valid).',
        items: {
          type: 'string',
          enum: ['EXPIRED', 'VALID'],
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      hasIps: {
        type: 'array',
        description: 'Filters results based on whether the certificates are bound to specific IP addresses.',
        items: {
          type: 'boolean',
        },
      },
      hasWildcards: {
        type: 'array',
        description: 'Filters results based on whether the certificates contain wildcard domains.',
        items: {
          type: 'boolean',
        },
      },
      limitPerGroup: {
        type: 'integer',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
      },
      log: {
        type: 'array',
        description: 'Filters results by certificate log.',
        items: {
          type: 'string',
        },
      },
      logApi: {
        type: 'array',
        description: 'Filters results by certificate log API (RFC6962 vs. static).',
        items: {
          type: 'string',
          enum: ['RFC6962', 'STATIC'],
        },
      },
      logOperator: {
        type: 'array',
        description: 'Filters results by certificate log operator.',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'array',
        description: 'Array of names used to label the series in the response.',
        items: {
          type: 'string',
        },
      },
      normalization: {
        type: 'string',
        description:
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        enum: ['RAW_VALUES', 'PERCENTAGE'],
      },
      publicKeyAlgorithm: {
        type: 'array',
        description: 'Filters results by public key algorithm.',
        items: {
          type: 'string',
          enum: ['DSA', 'ECDSA', 'RSA'],
        },
      },
      signatureAlgorithm: {
        type: 'array',
        description: 'Filters results by signature algorithm.',
        items: {
          type: 'string',
          enum: [
            'DSA_SHA_1',
            'DSA_SHA_256',
            'ECDSA_SHA_1',
            'ECDSA_SHA_256',
            'ECDSA_SHA_384',
            'ECDSA_SHA_512',
            'PSS_SHA_256',
            'PSS_SHA_384',
            'PSS_SHA_512',
            'RSA_MD2',
            'RSA_MD5',
            'RSA_SHA_1',
            'RSA_SHA_256',
            'RSA_SHA_384',
            'RSA_SHA_512',
          ],
        },
      },
      tld: {
        type: 'array',
        description: 'Filters results by top-level domain.',
        items: {
          type: 'string',
        },
      },
      uniqueEntries: {
        type: 'array',
        description:
          'Specifies whether to filter out duplicate certificates and pre-certificates. Set to true for unique entries only.',
        items: {
          type: 'string',
          enum: ['true', 'false'],
        },
      },
      validationLevel: {
        type: 'array',
        description: 'Filters results by validation level.',
        items: {
          type: 'string',
          enum: ['DOMAIN', 'ORGANIZATION', 'EXTENDED'],
        },
      },
    },
    required: ['dimension'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dimension, ...body } = args as any;
  return asTextContentResult(await client.radar.ct.summary(dimension, body));
};

export default { metadata, tool, handler };
