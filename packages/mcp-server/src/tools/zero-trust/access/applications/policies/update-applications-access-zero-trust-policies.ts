// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_applications_access_zero_trust_policies',
  description:
    'Updates an Access policy specific to an application. To update a reusable policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        description: 'UUID.',
      },
      policy_id: {
        type: 'string',
        description: 'UUID.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      approval_groups: {
        type: 'array',
        description: 'Administrators who can approve a temporary authentication request.',
        items: {
          type: 'object',
          description: 'A group of email addresses that can approve a temporary authentication request.',
          properties: {
            approvals_needed: {
              type: 'number',
              description: 'The number of approvals needed to obtain access.',
            },
            email_addresses: {
              type: 'array',
              description: 'A list of emails that can approve the access request.',
              items: {
                type: 'string',
              },
            },
            email_list_uuid: {
              type: 'string',
              description: 'The UUID of an re-usable email list.',
            },
          },
          required: ['approvals_needed'],
        },
      },
      approval_required: {
        type: 'boolean',
        description:
          'Requires the user to request access from an administrator at the start of each session.',
      },
      isolation_required: {
        type: 'boolean',
        description:
          "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
      },
      precedence: {
        type: 'integer',
        description: 'The order of execution for this policy. Must be unique for each policy within an app.',
      },
      purpose_justification_prompt: {
        type: 'string',
        description: 'A custom message that will appear on the purpose justification screen.',
      },
      purpose_justification_required: {
        type: 'boolean',
        description: 'Require users to enter a justification when they log in to the application.',
      },
      session_duration: {
        type: 'string',
        description:
          'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.access.applications.policies.update(policy_id, body);
};

export default { metadata, tool, handler };
