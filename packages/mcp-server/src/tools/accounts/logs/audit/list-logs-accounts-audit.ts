// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.logs.audit',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/logs/audit',
  operationId: 'audit-logs-v2-get-account-audit-logs',
};

export const tool: Tool = {
  name: 'list_logs_accounts_audit',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a list of audit logs for an account. <br />  <br /> This is the beta release of Audit Logs Version 2. Since this is a beta version, there may be gaps or missing entries in the available audit logs. Be aware of the following limitations.  <br /> <ul> <li>Audit logs are available only for the past 30 days. <br /></li> <li>Error handling is not yet implemented.  <br /> </li> </ul>",
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
          'Limits the returned results to logs older than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.',
        format: 'date',
      },
      since: {
        type: 'string',
        description:
          'Limits the returned results to logs newer than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.',
        format: 'date',
      },
      account_name: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the account name.',
            items: {
              type: 'string',
            },
          },
        },
      },
      action_result: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by whether the action was successful or not.',
            items: {
              type: 'string',
              enum: ['success', 'failure'],
            },
          },
        },
      },
      action_type: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the action type.',
            items: {
              type: 'string',
              enum: ['create', 'delete', 'view', 'update'],
            },
          },
        },
      },
      actor_context: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the actor context.',
            items: {
              type: 'string',
              enum: ['api_key', 'api_token', 'dash', 'oauth', 'origin_ca_key'],
            },
          },
        },
      },
      actor_email: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: "Filters out audit logs by the actor's email address.",
            items: {
              type: 'string',
            },
          },
        },
      },
      actor_id: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description:
              'Filters out audit logs by the actor ID. This can be either the Account ID or User ID.',
            items: {
              type: 'string',
            },
          },
        },
      },
      actor_ip_address: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs IP address where the action was initiated.',
            items: {
              type: 'string',
            },
          },
        },
      },
      actor_token_id: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description:
              'Filters out audit logs by the API token ID when the actor context is an api_token or oauth.',
            items: {
              type: 'string',
            },
          },
        },
      },
      actor_token_name: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description:
              'Filters out audit logs by the API token name when the actor context is an api_token or oauth.',
            items: {
              type: 'string',
            },
          },
        },
      },
      actor_type: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the actor type.',
            items: {
              type: 'string',
              enum: ['account', 'cloudflare_admin', 'system', 'user'],
            },
          },
        },
      },
      audit_log_id: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by their IDs.',
            items: {
              type: 'string',
            },
          },
        },
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
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the response CF Ray ID.',
            items: {
              type: 'string',
            },
          },
        },
      },
      raw_method: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the HTTP method for the API call.',
            items: {
              type: 'string',
            },
          },
        },
      },
      raw_status_code: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the response status code that was returned.',
            items: {
              type: 'integer',
            },
          },
        },
      },
      raw_uri: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the request URI.',
            items: {
              type: 'string',
            },
          },
        },
      },
      resource_id: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the resource ID.',
            items: {
              type: 'string',
            },
          },
        },
      },
      resource_product: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description:
              'Filters out audit logs by the Cloudflare product associated with the changed resource.',
            items: {
              type: 'string',
            },
          },
        },
      },
      resource_scope: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description:
              'Filters out audit logs by the resource scope, specifying whether the resource is associated with an user, an account, or a zone.',
            items: {
              type: 'string',
              enum: ['accounts', 'user', 'zones'],
            },
          },
        },
      },
      resource_type: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs based on the unique type of resource changed by the action.',
            items: {
              type: 'string',
            },
          },
        },
      },
      zone_id: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the zone ID.',
            items: {
              type: 'string',
            },
          },
        },
      },
      zone_name: {
        type: 'object',
        properties: {
          not: {
            type: 'array',
            description: 'Filters out audit logs by the zone name associated with the change.',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
    required: ['account_id', 'before', 'since'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.accounts.logs.audit.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
