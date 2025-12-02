// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}',
  operationId: 'email_security_update_display_name',
};

export const tool: Tool = {
  name: 'edit_settings_email_security_impersonation_registry',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an entry in impersonation registry\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/impersonation_registry_edit_response',\n  $defs: {\n    impersonation_registry_edit_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          title: 'identifier'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string'\n        },\n        is_email_regex: {\n          type: 'boolean'\n        },\n        last_modified: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        comments: {\n          type: 'string'\n        },\n        directory_id: {\n          type: 'integer'\n        },\n        directory_node_id: {\n          type: 'integer'\n        },\n        external_directory_node_id: {\n          type: 'string'\n        },\n        provenance: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'email',\n        'is_email_regex',\n        'last_modified',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      display_name_id: {
        type: 'integer',
        title: 'identifier',
      },
      email: {
        type: 'string',
      },
      is_email_regex: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'display_name_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { display_name_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.emailSecurity.settings.impersonationRegistry.edit(display_name_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
