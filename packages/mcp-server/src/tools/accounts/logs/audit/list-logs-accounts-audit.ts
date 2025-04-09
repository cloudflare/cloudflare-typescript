// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.logs.audit',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_logs_accounts_audit',
  description:
    'Gets a list of audit logs for an account. <br />  <br /> This is the beta release of Audit Logs Version 2. Since this is a beta version, there may be gaps or missing entries in the available audit logs. Be aware of the following limitations.  <br /> <ul> <li>Audit logs are available only for the past 30 days. <br /></li> <li>Error handling is not yet implemented.  <br /> </li> </ul>',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique id that identifies the account.',
      },
      before: {
        type: 'string',
        description:
          'Filters actions based on a given timestamp in the format yyyy-mm-dd, returning only logs that occurred on and before the specified date.',
        format: 'date',
      },
      since: {
        type: 'string',
        description:
          'Filters actions based on a given timestamp in the format yyyy-mm-dd, returning only logs that occurred on and after the specified date.',
        format: 'date',
      },
      account_name: {
        type: 'string',
        description: 'Filters by the account name.',
      },
      action_result: {
        type: 'string',
        description: 'Whether the action was successful or not.',
        enum: ['success', 'failure'],
      },
      action_type: {
        type: 'string',
        description: 'Filters by the action type.',
        enum: ['create', 'delete', 'view', 'update'],
      },
      actor_context: {
        type: 'string',
        description: 'Filters by the actor context.',
        enum: ['api_key', 'api_token', 'dash', 'oauth', 'origin_ca_key'],
      },
      actor_email: {
        type: 'string',
        description: "Filters by the actor's email address.",
      },
      actor_id: {
        type: 'string',
        description: 'Filters by the actor ID. This can be either the Account ID or User ID.',
      },
      actor_ip_address: {
        type: 'string',
        description: 'The IP address where the action was initiated.',
      },
      actor_token_id: {
        type: 'string',
        description: 'Filters by the API token ID when the actor context is an api_token or oauth.',
      },
      actor_token_name: {
        type: 'string',
        description: 'Filters by the API token name when the actor context is an api_token or oauth.',
      },
      actor_type: {
        type: 'string',
        description: 'Filters by the actor type.',
        enum: ['cloudflare_admin', 'account', 'user'],
      },
      audit_log_id: {
        type: 'string',
        description: 'Finds a specific log by its ID.',
      },
      cursor: {
        type: 'string',
        description:
          'The cursor is an opaque token used to paginate through large sets of records. It indicates the position from which to continue when requesting the next set of records. A valid cursor value can be obtained from the cursor object in the result_info structure of a previous response.',
      },
      direction: {
        type: 'string',
        description: 'Sets sorting order.',
        enum: ['desc', 'asc'],
      },
      limit: {
        type: 'number',
        description:
          'The number limits the objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.',
      },
      raw_cf_ray_id: {
        type: 'string',
        description: 'Filters by the response CF Ray ID.',
      },
      raw_method: {
        type: 'string',
        description: 'The HTTP method for the API call.',
      },
      raw_status_code: {
        type: 'integer',
        description: 'The response status code that was returned.',
      },
      raw_uri: {
        type: 'string',
        description: 'Filters by the request URI.',
      },
      resource_id: {
        type: 'string',
        description: 'Filters by the resource ID.',
      },
      resource_product: {
        type: 'string',
        description: 'Filters audit logs by the Cloudflare product associated with the changed resource.',
      },
      resource_scope: {
        type: 'string',
        description:
          'Filters by the resource scope, specifying whether the resource is associated with an user, an account, or a zone.',
        enum: ['accounts', 'user', 'zones'],
      },
      resource_type: {
        type: 'string',
        description: 'Filters audit logs based on the unique type of resource changed by the action.',
      },
      zone_id: {
        type: 'string',
        description: 'Filters by the zone ID.',
      },
      zone_name: {
        type: 'string',
        description: 'Filters by the zone name associated with the change.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.logs.audit.list(body);
};

export default { metadata, tool, handler };
