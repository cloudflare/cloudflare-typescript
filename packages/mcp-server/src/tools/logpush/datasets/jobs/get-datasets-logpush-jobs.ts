// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.datasets.jobs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_datasets_logpush_jobs',
  description: 'Lists Logpush jobs for an account or zone for a dataset.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dataset_id, ...body } = args as any;
  return client.logpush.datasets.jobs.get(dataset_id, body);
};

export default { metadata, tool, handler };
