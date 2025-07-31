// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.overrides',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/waf/overrides/{overrides_id}',
  operationId: 'waf-overrides-get-a-waf-override',
};

export const tool: Tool = {
  name: 'get_waf_firewall_overrides',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the details of a URI-based WAF override.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/override'\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    override: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the WAF override.'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the current URI-based WAF override.'\n        },\n        groups: {\n          type: 'object',\n          description: 'An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usually `default` or `disable`). When creating a new URI-based WAF override, you must provide a `groups` object or a `rules` object.'\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the rule is currently paused.'\n        },\n        priority: {\n          type: 'number',\n          description: 'The relative priority of the current URI-based WAF override when multiple overrides match a single URL. A lower number indicates higher priority. Higher priority overrides may overwrite values set by lower priority overrides.'\n        },\n        rewrite_action: {\n          $ref: '#/$defs/rewrite_action'\n        },\n        rules: {\n          $ref: '#/$defs/waf_rule'\n        },\n        urls: {\n          type: 'array',\n          description: 'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',\n          items: {\n            $ref: '#/$defs/override_url'\n          }\n        }\n      }\n    },\n    rewrite_action: {\n      type: 'object',\n      description: 'Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object.',\n      properties: {\n        block: {\n          type: 'string',\n          description: 'The WAF rule action to apply.',\n          enum: [            'challenge',\n            'block',\n            'simulate',\n            'disable',\n            'default'\n          ]\n        },\n        challenge: {\n          type: 'string',\n          description: 'The WAF rule action to apply.',\n          enum: [            'challenge',\n            'block',\n            'simulate',\n            'disable',\n            'default'\n          ]\n        },\n        default: {\n          type: 'string',\n          description: 'The WAF rule action to apply.',\n          enum: [            'challenge',\n            'block',\n            'simulate',\n            'disable',\n            'default'\n          ]\n        },\n        disable: {\n          type: 'string',\n          description: 'The WAF rule action to apply.',\n          enum: [            'challenge',\n            'block',\n            'simulate',\n            'disable',\n            'default'\n          ]\n        },\n        simulate: {\n          type: 'string',\n          description: 'The WAF rule action to apply.',\n          enum: [            'challenge',\n            'block',\n            'simulate',\n            'disable',\n            'default'\n          ]\n        }\n      }\n    },\n    waf_rule: {\n      type: 'object',\n      description: 'An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule, ensure that you also enable the rule group that this WAF rule belongs to. When creating a new URI-based WAF override, you must provide a `groups` object or a `rules` object.'\n    },\n    override_url: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      overrides_id: {
        type: 'string',
        description: 'The unique identifier of the WAF override.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'overrides_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { overrides_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.firewall.waf.overrides.get(overrides_id, body)),
  );
};

export default { metadata, tool, handler };
