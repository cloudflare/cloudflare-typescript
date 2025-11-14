// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.predefined',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config',
  operationId: 'dlp-profiles-update-predefined-profile-config',
};

export const tool: Tool = {
  name: 'update_profiles_dlp_zero_trust_predefined',
  description:
    'This is similar to `update_predefined` but only returns entries that are enabled.\nThis is needed for our terraform API\nUpdates a DLP predefined profile. Only supports enabling/disabling entries.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      ai_context_enabled: {
        type: 'boolean',
      },
      allowed_match_count: {
        type: 'integer',
      },
      confidence_threshold: {
        type: 'string',
      },
      enabled_entries: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      entries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            enabled: {
              type: 'boolean',
            },
          },
          required: ['id', 'enabled'],
        },
      },
      ocr_enabled: {
        type: 'boolean',
      },
    },
    required: ['account_id', 'profile_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.profiles.predefined.update(profile_id, body));
};

export default { metadata, tool, handler };
