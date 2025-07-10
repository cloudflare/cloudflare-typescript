// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets.phases.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}',
};

export const tool: Tool = {
  name: 'get_phases_rulesets_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a specific version of an account or zone entry point ruleset.",
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_phase: {
        $ref: '#/$defs/phase',
      },
      ruleset_version: {
        type: 'string',
        title: 'Version',
        description: 'The version of the ruleset.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
    $defs: {
      phase: {
        type: 'string',
        title: 'Phase',
        description: 'The phase of the ruleset.',
        enum: [
          'ddos_l4',
          'ddos_l7',
          'http_config_settings',
          'http_custom_errors',
          'http_log_custom_fields',
          'http_ratelimit',
          'http_request_cache_settings',
          'http_request_dynamic_redirect',
          'http_request_firewall_custom',
          'http_request_firewall_managed',
          'http_request_late_transform',
          'http_request_origin',
          'http_request_redirect',
          'http_request_sanitize',
          'http_request_sbfm',
          'http_request_transform',
          'http_response_compression',
          'http_response_firewall_managed',
          'http_response_headers_transform',
          'magic_transit',
          'magic_transit_ids_managed',
          'magic_transit_managed',
          'magic_transit_ratelimit',
        ],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_version, ...body } = args as any;
  return asTextContentResult(await client.rulesets.phases.versions.get(ruleset_version, body));
};

export default { metadata, tool, handler };
