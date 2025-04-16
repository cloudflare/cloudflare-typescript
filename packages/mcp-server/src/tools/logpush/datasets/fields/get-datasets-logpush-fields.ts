// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.datasets.fields',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_datasets_logpush_fields',
  description:
    'Lists all fields available for a dataset. The response result is an object with key-value pairs, where keys are field names, and values are descriptions.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_id: {
        type: 'string',
        description:
          'Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).',
        enum: [
          'access_requests',
          'audit_logs',
          'biso_user_actions',
          'casb_findings',
          'device_posture_results',
          'dlp_forensic_copies',
          'dns_firewall_logs',
          'dns_logs',
          'email_security_alerts',
          'firewall_events',
          'gateway_dns',
          'gateway_http',
          'gateway_network',
          'http_requests',
          'magic_ids_detections',
          'nel_reports',
          'network_analytics_logs',
          'page_shield_events',
          'sinkhole_http_logs',
          'spectrum_events',
          'ssh_logs',
          'workers_trace_events',
          'zaraz_events',
          'zero_trust_network_sessions',
        ],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dataset_id, ...body } = args;
  return client.logpush.datasets.fields.get(dataset_id, body);
};

export default { metadata, tool, handler };
