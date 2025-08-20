// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}',
};

export const tool: Tool = {
  name: 'update_rulesets',
  description: 'Updates an account or zone ruleset, creating a new version.',
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'Ruleset ID',
        description: 'The unique ID of the ruleset.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      description: {
        type: 'string',
        title: 'Description',
        description: 'An informative description of the ruleset.',
      },
      kind: {
        $ref: '#/$defs/kind',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The human-readable name of the ruleset.',
      },
      phase: {
        $ref: '#/$defs/phase',
      },
      rules: {
        type: 'array',
        title: 'Rules',
        description: 'The list of rules in the ruleset.',
        items: {
          anyOf: [
            {
              $ref: '#/$defs/block_rule',
            },
            {
              type: 'object',
              title: 'Challenge Rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last Updated',
                  description: 'The timestamp of when the rule was last modified.',
                  format: 'date-time',
                },
                version: {
                  type: 'string',
                  title: 'Version',
                  description: 'The version of the rule.',
                },
                id: {
                  type: 'string',
                  title: 'Rule ID',
                  description: 'The unique ID of the rule.',
                },
                action: {
                  type: 'string',
                  title: 'Action',
                  description: 'The action to perform when the rule matches.',
                  enum: ['challenge'],
                },
                action_parameters: {
                  type: 'object',
                  title: 'Action Parameters',
                  description: "The parameters configuring the rule's action.",
                  additionalProperties: true,
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'The category of a rule.',
                  },
                },
                description: {
                  type: 'string',
                  title: 'Description',
                  description: 'An informative description of the rule.',
                },
                enabled: {
                  type: 'boolean',
                  title: 'Enabled',
                  description: 'Whether the rule should be executed.',
                },
                exposed_credential_check: {
                  type: 'object',
                  title: 'Exposed Credential Check',
                  description: 'Configuration for exposed credential checking.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'An expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'An expression that selects the user ID used in the credentials check.',
                    },
                  },
                  required: ['password_expression', 'username_expression'],
                },
                expression: {
                  type: 'string',
                  title: 'Expression',
                  description: 'The expression defining which traffic will match the rule.',
                },
                logging: {
                  $ref: '#/$defs/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Rate Limit',
                  description: "An object configuring the rule's rate limit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the rate limit counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                        description: 'The characteristic of the request.',
                      },
                    },
                    period: {
                      type: 'integer',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
                    },
                    mitigation_timeout: {
                      type: 'integer',
                      title: 'Mitigation Timeout',
                      description:
                        'Period of time in seconds after which the action will be disabled following its first execution.',
                    },
                    requests_per_period: {
                      type: 'integer',
                      title: 'Requests per Period',
                      description:
                        'The threshold of requests per period after which the action will be executed for the first time.',
                    },
                    requests_to_origin: {
                      type: 'boolean',
                      title: 'Requests to Origin',
                      description: 'Whether counting is only performed when an origin is reached.',
                    },
                    score_per_period: {
                      type: 'integer',
                      title: 'Score per Period',
                      description:
                        'The score threshold per period for which the action will be executed the first time.',
                    },
                    score_response_header_name: {
                      type: 'string',
                      title: 'Score Response Header Name',
                      description:
                        'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: "The reference of the rule (the rule's ID by default).",
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              $ref: '#/$defs/compress_response_rule',
            },
            {
              $ref: '#/$defs/ddos_dynamic_rule',
            },
            {
              $ref: '#/$defs/execute_rule',
            },
            {
              $ref: '#/$defs/force_connection_close_rule',
            },
            {
              type: 'object',
              title: 'JavaScript Challenge Rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last Updated',
                  description: 'The timestamp of when the rule was last modified.',
                  format: 'date-time',
                },
                version: {
                  type: 'string',
                  title: 'Version',
                  description: 'The version of the rule.',
                },
                id: {
                  type: 'string',
                  title: 'Rule ID',
                  description: 'The unique ID of the rule.',
                },
                action: {
                  type: 'string',
                  title: 'Action',
                  description: 'The action to perform when the rule matches.',
                  enum: ['js_challenge'],
                },
                action_parameters: {
                  type: 'object',
                  title: 'Action Parameters',
                  description: "The parameters configuring the rule's action.",
                  additionalProperties: true,
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'The category of a rule.',
                  },
                },
                description: {
                  type: 'string',
                  title: 'Description',
                  description: 'An informative description of the rule.',
                },
                enabled: {
                  type: 'boolean',
                  title: 'Enabled',
                  description: 'Whether the rule should be executed.',
                },
                exposed_credential_check: {
                  type: 'object',
                  title: 'Exposed Credential Check',
                  description: 'Configuration for exposed credential checking.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'An expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'An expression that selects the user ID used in the credentials check.',
                    },
                  },
                  required: ['password_expression', 'username_expression'],
                },
                expression: {
                  type: 'string',
                  title: 'Expression',
                  description: 'The expression defining which traffic will match the rule.',
                },
                logging: {
                  $ref: '#/$defs/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Rate Limit',
                  description: "An object configuring the rule's rate limit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the rate limit counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                        description: 'The characteristic of the request.',
                      },
                    },
                    period: {
                      type: 'integer',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
                    },
                    mitigation_timeout: {
                      type: 'integer',
                      title: 'Mitigation Timeout',
                      description:
                        'Period of time in seconds after which the action will be disabled following its first execution.',
                    },
                    requests_per_period: {
                      type: 'integer',
                      title: 'Requests per Period',
                      description:
                        'The threshold of requests per period after which the action will be executed for the first time.',
                    },
                    requests_to_origin: {
                      type: 'boolean',
                      title: 'Requests to Origin',
                      description: 'Whether counting is only performed when an origin is reached.',
                    },
                    score_per_period: {
                      type: 'integer',
                      title: 'Score per Period',
                      description:
                        'The score threshold per period for which the action will be executed the first time.',
                    },
                    score_response_header_name: {
                      type: 'string',
                      title: 'Score Response Header Name',
                      description:
                        'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: "The reference of the rule (the rule's ID by default).",
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              $ref: '#/$defs/log_rule',
            },
            {
              $ref: '#/$defs/log_custom_field_rule',
            },
            {
              $ref: '#/$defs/managed_challenge_rule',
            },
            {
              $ref: '#/$defs/redirect_rule',
            },
            {
              $ref: '#/$defs/rewrite_rule',
            },
            {
              $ref: '#/$defs/route_rule',
            },
            {
              $ref: '#/$defs/score_rule',
            },
            {
              $ref: '#/$defs/serve_error_rule',
            },
            {
              $ref: '#/$defs/set_cache_settings_rule',
            },
            {
              $ref: '#/$defs/set_config_rule',
            },
            {
              $ref: '#/$defs/skip_rule',
            },
          ],
        },
      },
    },
    required: ['ruleset_id'],
    $defs: {
      kind: {
        type: 'string',
        title: 'Kind',
        description: 'The kind of the ruleset.',
        enum: ['managed', 'custom', 'root', 'zone'],
      },
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
      block_rule: {
        type: 'object',
        title: 'Block Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['block'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              response: {
                type: 'object',
                title: 'Response',
                description: 'The response to show when the block is applied.',
                properties: {
                  content: {
                    type: 'string',
                    title: 'Content',
                    description: 'The content to return.',
                  },
                  content_type: {
                    type: 'string',
                    title: 'Content Type',
                    description: 'The type of the content to return.',
                  },
                  status_code: {
                    type: 'integer',
                    title: 'Status Code',
                    description: 'The status code to return.',
                  },
                },
                required: ['content', 'content_type', 'status_code'],
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      logging: {
        type: 'object',
        title: 'Logging',
        description: "An object configuring the rule's logging behavior.",
        properties: {
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether to generate a log when the rule matches.',
          },
        },
        required: ['enabled'],
      },
      compress_response_rule: {
        type: 'object',
        title: 'Response Compression Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['compress_response'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              algorithms: {
                type: 'array',
                title: 'Algorithms',
                description: 'Custom order for compression algorithms.',
                items: {
                  type: 'object',
                  title: 'Algorithm',
                  description: 'Compression algorithm to enable.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Algorithm Name',
                      description: 'Name of the compression algorithm to enable.',
                      enum: ['none', 'auto', 'default', 'gzip', 'brotli', 'zstd'],
                    },
                  },
                },
              },
            },
            required: ['algorithms'],
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      ddos_dynamic_rule: {
        type: 'object',
        title: 'DDoS Dynamic Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['ddos_dynamic'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            additionalProperties: true,
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      execute_rule: {
        type: 'object',
        title: 'Execute Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['execute'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              id: {
                type: 'string',
                title: 'Ruleset ID',
                description: 'The ID of the ruleset to execute.',
              },
              matched_data: {
                type: 'object',
                title: 'Matched Data',
                description: 'The configuration to use for matched data logging.',
                properties: {
                  public_key: {
                    type: 'string',
                    title: 'Public Key',
                    description: 'The public key to encrypt matched data logs with.',
                  },
                },
                required: ['public_key'],
              },
              overrides: {
                type: 'object',
                title: 'Overrides',
                description: 'A set of overrides to apply to the target ruleset.',
                properties: {
                  action: {
                    type: 'string',
                    title: 'Action',
                    description:
                      'An action to override all rules with. This option has lower precedence than rule and category overrides.',
                  },
                  categories: {
                    type: 'array',
                    title: 'Category Overrides',
                    description:
                      'A list of category-level overrides. This option has the second-highest precedence after rule-level overrides.',
                    items: {
                      type: 'object',
                      title: 'Category Override',
                      description: 'A category-level override.',
                      properties: {
                        category: {
                          type: 'string',
                          title: 'Category',
                          description: 'The name of the category to override.',
                        },
                        action: {
                          type: 'string',
                          title: 'Action',
                          description: 'The action to override rules in the category with.',
                        },
                        enabled: {
                          type: 'boolean',
                          title: 'Enabled',
                          description: 'Whether to enable execution of rules in the category.',
                        },
                        sensitivity_level: {
                          type: 'string',
                          title: 'Sensitivity Level',
                          description:
                            'The sensitivity level to use for rules in the category. This option is only applicable for DDoS phases.',
                          enum: ['default', 'medium', 'low', 'eoff'],
                        },
                      },
                      required: ['category'],
                    },
                  },
                  enabled: {
                    type: 'boolean',
                    title: 'Enabled',
                    description:
                      'Whether to enable execution of all rules. This option has lower precedence than rule and category overrides.',
                  },
                  rules: {
                    type: 'array',
                    title: 'Rule Overrides',
                    description: 'A list of rule-level overrides. This option has the highest precedence.',
                    items: {
                      type: 'object',
                      title: 'Rule Override',
                      description: 'A rule-level override.',
                      properties: {
                        id: {
                          type: 'string',
                          title: 'Rule ID',
                          description: 'The ID of the rule to override.',
                        },
                        action: {
                          type: 'string',
                          title: 'Action',
                          description: 'The action to override the rule with.',
                        },
                        enabled: {
                          type: 'boolean',
                          title: 'Enabled',
                          description: 'Whether to enable execution of the rule.',
                        },
                        score_threshold: {
                          type: 'integer',
                          title: 'Score Threshold',
                          description: 'The score threshold to use for the rule.',
                        },
                        sensitivity_level: {
                          type: 'string',
                          title: 'Sensitivity Level',
                          description:
                            'The sensitivity level to use for the rule. This option is only applicable for DDoS phases.',
                          enum: ['default', 'medium', 'low', 'eoff'],
                        },
                      },
                      required: ['id'],
                    },
                  },
                  sensitivity_level: {
                    type: 'string',
                    title: 'Sensitivity Level',
                    description:
                      'A sensitivity level to set for all rules. This option has lower precedence than rule and category overrides and is only applicable for DDoS phases.',
                    enum: ['default', 'medium', 'low', 'eoff'],
                  },
                },
              },
            },
            required: ['id'],
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      force_connection_close_rule: {
        type: 'object',
        title: 'Force Connection Close Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['force_connection_close'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            additionalProperties: true,
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      log_rule: {
        type: 'object',
        title: 'Log Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['log'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            additionalProperties: true,
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      log_custom_field_rule: {
        type: 'object',
        title: 'Log Custom Field Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['log_custom_field'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              cookie_fields: {
                type: 'array',
                title: 'Cookie Fields',
                description: 'The cookie fields to log.',
                items: {
                  type: 'object',
                  title: 'Cookie Field',
                  description: 'The cookie field to log.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Cookie Name',
                      description: 'The name of the cookie.',
                    },
                  },
                  required: ['name'],
                },
              },
              raw_response_fields: {
                type: 'array',
                title: 'Raw Response Fields',
                description: 'The raw response fields to log.',
                items: {
                  type: 'object',
                  title: 'Raw Response Field',
                  description: 'The raw response field to log.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Header Name',
                      description: 'The name of the response header.',
                    },
                    preserve_duplicates: {
                      type: 'boolean',
                      title: 'Preserve Duplicates',
                      description: 'Whether to log duplicate values of the same header.',
                    },
                  },
                  required: ['name'],
                },
              },
              request_fields: {
                type: 'array',
                title: 'Raw Request Fields',
                description: 'The raw request fields to log.',
                items: {
                  type: 'object',
                  title: 'Raw Request Field',
                  description: 'The raw request field to log.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Header Name',
                      description: 'The name of the header.',
                    },
                  },
                  required: ['name'],
                },
              },
              response_fields: {
                type: 'array',
                title: 'Transformed Response Fields',
                description: 'The transformed response fields to log.',
                items: {
                  type: 'object',
                  title: 'Transformed Response Field',
                  description: 'The transformed response field to log.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Header Name',
                      description: 'The name of the response header.',
                    },
                    preserve_duplicates: {
                      type: 'boolean',
                      title: 'Preserve Duplicates',
                      description: 'Whether to log duplicate values of the same header.',
                    },
                  },
                  required: ['name'],
                },
              },
              transformed_request_fields: {
                type: 'array',
                title: 'Transformed Request Fields',
                description: 'The transformed request fields to log.',
                items: {
                  type: 'object',
                  title: 'Transformed Request Field',
                  description: 'The transformed request field to log.',
                  properties: {
                    name: {
                      type: 'string',
                      title: 'Header Name',
                      description: 'The name of the header.',
                    },
                  },
                  required: ['name'],
                },
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      managed_challenge_rule: {
        type: 'object',
        title: 'Managed Challenge Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['managed_challenge'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            additionalProperties: true,
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      redirect_rule: {
        type: 'object',
        title: 'Redirect Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['redirect'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              from_list: {
                type: 'object',
                title: 'Bulk Redirect',
                description: 'A redirect based on a bulk list lookup.',
                properties: {
                  key: {
                    type: 'string',
                    title: 'Lookup Key',
                    description: 'An expression that evaluates to the list lookup key.',
                  },
                  name: {
                    type: 'string',
                    title: 'List Name',
                    description: 'The name of the list to match against.',
                  },
                },
                required: ['key', 'name'],
              },
              from_value: {
                type: 'object',
                title: 'Single Redirect',
                description: 'A redirect based on the request properties.',
                properties: {
                  target_url: {
                    type: 'object',
                    title: 'Target URL',
                    description: 'A URL to redirect the request to.',
                    properties: {
                      expression: {
                        type: 'string',
                        title: 'Redirect Expression',
                        description: 'An expression that evaluates to a URL to redirect the request to.',
                      },
                      value: {
                        type: 'string',
                        title: 'Redirect Value',
                        description: 'A URL to redirect the request to.',
                      },
                    },
                  },
                  preserve_query_string: {
                    type: 'boolean',
                    title: 'Preserve Query String',
                    description: 'Whether to keep the query string of the original request.',
                  },
                  status_code: {
                    type: 'string',
                    title: 'Status Code',
                    description: 'The status code to use for the redirect.',
                    enum: [301, 302, 303, 307, 308],
                  },
                },
                required: ['target_url'],
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      rewrite_rule: {
        type: 'object',
        title: 'Rewrite Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['rewrite'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              headers: {
                type: 'object',
                title: 'Headers',
                description: 'A map of headers to rewrite.',
                additionalProperties: true,
              },
              uri: {
                anyOf: [
                  {
                    type: 'object',
                    title: 'URI Path',
                    description: 'A URI path rewrite.',
                    properties: {
                      path: {
                        type: 'object',
                        title: 'URI Path',
                        description: 'A URI path rewrite.',
                        properties: {
                          expression: {
                            type: 'string',
                            title: 'Path Expression',
                            description:
                              'An expression that evaluates to a value to rewrite the URI path to.',
                          },
                          value: {
                            type: 'string',
                            title: 'Path Value',
                            description: 'A value to rewrite the URI path to.',
                          },
                        },
                      },
                      origin: {
                        type: 'boolean',
                        title: 'Origin',
                        description: 'Whether to propagate the rewritten URI to origin.',
                      },
                    },
                    required: ['path'],
                  },
                  {
                    type: 'object',
                    title: 'URI Query',
                    description: 'A URI query rewrite.',
                    properties: {
                      query: {
                        type: 'object',
                        title: 'URI Query',
                        description: 'A URI query rewrite.',
                        properties: {
                          expression: {
                            type: 'string',
                            title: 'Query Expression',
                            description:
                              'An expression that evaluates to a value to rewrite the URI query to.',
                          },
                          value: {
                            type: 'string',
                            title: 'Query Value',
                            description: 'A value to rewrite the URI query to.',
                          },
                        },
                      },
                      origin: {
                        type: 'boolean',
                        title: 'Origin',
                        description: 'Whether to propagate the rewritten URI to origin.',
                      },
                    },
                    required: ['query'],
                  },
                ],
                description: 'A URI path rewrite.',
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      route_rule: {
        type: 'object',
        title: 'Route Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['route'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              host_header: {
                type: 'string',
                title: 'Host Header',
                description: 'A value to rewrite the HTTP host header to.',
              },
              origin: {
                type: 'object',
                title: 'Origin',
                description: 'An origin to route to.',
                properties: {
                  host: {
                    type: 'string',
                    title: 'Host',
                    description: 'A resolved host to route to.',
                  },
                  port: {
                    type: 'integer',
                    title: 'Port',
                    description: 'A destination port to route to.',
                  },
                },
              },
              sni: {
                type: 'object',
                title: 'Server Name Indication',
                description: 'A Server Name Indication (SNI) override.',
                properties: {
                  value: {
                    type: 'string',
                    title: 'Value',
                    description: 'A value to override the SNI to.',
                  },
                },
                required: ['value'],
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      score_rule: {
        type: 'object',
        title: 'Score Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['score'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              increment: {
                type: 'integer',
                title: 'Increment',
                description: 'A delta to change the score by, which can be either positive or negative.',
              },
            },
            required: ['increment'],
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      serve_error_rule: {
        type: 'object',
        title: 'Serve Error Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['serve_error'],
          },
          action_parameters: {
            anyOf: [
              {
                type: 'object',
                title: 'Action Parameters (Content)',
                properties: {
                  content: {
                    type: 'string',
                    title: 'Content',
                    description: 'The response content.',
                  },
                  content_type: {
                    type: 'string',
                    title: 'Content Type',
                    description: 'The content type header to set with the error response.',
                    enum: ['application/json', 'text/html', 'text/plain', 'text/xml'],
                  },
                  status_code: {
                    type: 'integer',
                    title: 'Status Code',
                    description: 'The status code to use for the error.',
                  },
                },
                required: ['content'],
              },
              {
                type: 'object',
                title: 'Action Parameters (Asset)',
                properties: {
                  asset_name: {
                    type: 'string',
                    title: 'Asset Name',
                    description: 'The name of a custom asset to serve as the error response.',
                  },
                  content_type: {
                    type: 'string',
                    title: 'Content Type',
                    description: 'The content type header to set with the error response.',
                    enum: ['application/json', 'text/html', 'text/plain', 'text/xml'],
                  },
                  status_code: {
                    type: 'integer',
                    title: 'Status Code',
                    description: 'The status code to use for the error.',
                  },
                },
                required: ['asset_name'],
              },
            ],
            description: "The parameters configuring the rule's action.",
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      set_cache_settings_rule: {
        type: 'object',
        title: 'Set Cache Settings Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['set_cache_settings'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              additional_cacheable_ports: {
                type: 'array',
                title: 'Additional Cacheable Ports (Enterprise-Only)',
                description: 'A list of additional ports that caching should be enabled on.',
                items: {
                  type: 'integer',
                  title: 'Additional Cacheable Port',
                  description: 'A port to enable caching on.',
                },
              },
              browser_ttl: {
                type: 'object',
                title: 'Browser TTL',
                description:
                  'How long client browsers should cache the response. Cloudflare cache purge will not purge content cached on client browsers, so high browser TTLs may lead to stale content.',
                properties: {
                  mode: {
                    type: 'string',
                    title: 'TTL Mode',
                    description: 'The browser TTL mode.',
                    enum: ['respect_origin', 'bypass_by_default', 'override_origin', 'bypass'],
                  },
                  default: {
                    type: 'integer',
                    title: 'Default TTL',
                    description: 'The browser TTL (in seconds) if you choose the "override_origin" mode.',
                  },
                },
                required: ['mode'],
              },
              cache: {
                type: 'boolean',
                title: 'Cache',
                description:
                  "Whether the request's response from the origin is eligible for caching. Caching itself will still depend on the cache control header and your other caching configurations.",
              },
              cache_key: {
                type: 'object',
                title: 'Cache Key',
                description:
                  'Which components of the request are included in or excluded from the cache key Cloudflare uses to store the response in cache.',
                properties: {
                  cache_by_device_type: {
                    type: 'boolean',
                    title: 'Cache by Device Type',
                    description: "Whether to separate cached content based on the visitor's device type.",
                  },
                  cache_deception_armor: {
                    type: 'boolean',
                    title: 'Cache Deception Armor',
                    description:
                      'Whether to protect from web cache deception attacks, while allowing static assets to be cached.',
                  },
                  custom_key: {
                    type: 'object',
                    title: 'Custom Cache Key',
                    description:
                      'Which components of the request are included or excluded from the cache key.',
                    properties: {
                      cookie: {
                        type: 'object',
                        title: 'Cookies',
                        description: 'Which cookies to include in the cache key.',
                        properties: {
                          check_presence: {
                            type: 'array',
                            title: 'Check Presence',
                            description:
                              'A list of cookies to check for the presence of. The presence of these cookies is included in the cache key.',
                            items: {
                              type: 'string',
                              title: 'Cookie Name',
                              description: 'The name of the cookie to check for the presence of.',
                            },
                          },
                          include: {
                            type: 'array',
                            title: 'Include',
                            description: 'A list of cookies to include in the cache key.',
                            items: {
                              type: 'string',
                              title: 'Cookie Name',
                              description: 'The name of the cookie to include.',
                            },
                          },
                        },
                      },
                      header: {
                        type: 'object',
                        title: 'Headers',
                        description: 'Which headers to include in the cache key.',
                        properties: {
                          check_presence: {
                            type: 'array',
                            title: 'Check Presence',
                            description:
                              'A list of headers to check for the presence of. The presence of these headers is included in the cache key.',
                            items: {
                              type: 'string',
                              title: 'Header',
                              description: 'The name of the header to check for the presence of.',
                            },
                          },
                          contains: {
                            type: 'object',
                            title: 'Contains',
                            description:
                              'A mapping of header names to a list of values. If a header is present in the request and contains any of the values provided, its value is included in the cache key.',
                            additionalProperties: true,
                          },
                          exclude_origin: {
                            type: 'boolean',
                            title: 'Exclude Origin',
                            description: 'Whether to exclude the origin header in the cache key.',
                          },
                          include: {
                            type: 'array',
                            title: 'Include',
                            description: 'A list of headers to include in the cache key.',
                            items: {
                              type: 'string',
                              title: 'Header',
                              description: 'The name of the header to include.',
                            },
                          },
                        },
                      },
                      host: {
                        type: 'object',
                        title: 'Host',
                        description: 'How to use the host in the cache key.',
                        properties: {
                          resolved: {
                            type: 'boolean',
                            title: 'Use Resolved Host',
                            description: 'Whether to use the resolved host in the cache key.',
                          },
                        },
                      },
                      query_string: {
                        type: 'object',
                        title: 'Query String Parameters',
                        description:
                          'Which query string parameters to include in or exclude from the cache key.',
                        properties: {
                          exclude: {
                            type: 'object',
                            title: 'Exclude',
                            description: 'Which query string parameters to exclude from the cache key.',
                            properties: {
                              all: {
                                type: 'string',
                                title: 'Exclude All',
                                description:
                                  'Whether to exclude all query string parameters from the cache key.',
                                enum: [true],
                              },
                              list: {
                                type: 'array',
                                title: 'Exclude List',
                                description:
                                  'A list of query string parameters to exclude from the cache key.',
                                items: {
                                  type: 'string',
                                  title: 'Parameter Name',
                                  description: 'The name of the query string parameter to exclude.',
                                },
                              },
                            },
                          },
                          include: {
                            type: 'object',
                            title: 'Include',
                            description: 'Which query string parameters to include in the cache key.',
                            properties: {
                              all: {
                                type: 'string',
                                title: 'Include All',
                                description:
                                  'Whether to include all query string parameters in the cache key.',
                                enum: [true],
                              },
                              list: {
                                type: 'array',
                                title: 'Include List',
                                description: 'A list of query string parameters to include in the cache key.',
                                items: {
                                  type: 'string',
                                  title: 'Parameter Name',
                                  description: 'The name of the query string parameter to include.',
                                },
                              },
                            },
                          },
                        },
                      },
                      user: {
                        type: 'object',
                        title: 'User',
                        description: 'How to use characteristics of the request user agent in the cache key.',
                        properties: {
                          device_type: {
                            type: 'boolean',
                            title: 'Device Type',
                            description: "Whether to use the user agent's device type in the cache key.",
                          },
                          geo: {
                            type: 'boolean',
                            title: 'Country',
                            description: "Whether to use the user agents's country in the cache key.",
                          },
                          lang: {
                            type: 'boolean',
                            title: 'Language',
                            description: "Whether to use the user agent's language in the cache key.",
                          },
                        },
                      },
                    },
                  },
                  ignore_query_strings_order: {
                    type: 'boolean',
                    title: 'Ignore Query Strings Order',
                    description:
                      'Whether to treat requests with the same query parameters the same, regardless of the order those query parameters are in.',
                  },
                },
              },
              cache_reserve: {
                type: 'object',
                title: 'Cache Reserve',
                description:
                  "Settings to determine whether the request's response from origin is eligible for Cache Reserve (requires a Cache Reserve add-on plan).",
                properties: {
                  eligible: {
                    type: 'boolean',
                    title: 'Eligible',
                    description:
                      'Whether Cache Reserve is enabled. If this is true and a request meets eligibility criteria, Cloudflare will write the resource to Cache Reserve.',
                  },
                  minimum_file_size: {
                    type: 'integer',
                    title: 'Minimum File Size',
                    description: 'The minimum file size eligible for storage in Cache Reserve.',
                  },
                },
                required: ['eligible'],
              },
              edge_ttl: {
                type: 'object',
                title: 'Edge TTL',
                description: 'How long the Cloudflare edge network should cache the response.',
                properties: {
                  mode: {
                    type: 'string',
                    title: 'TTL Mode',
                    description: 'The edge TTL mode.',
                    enum: ['respect_origin', 'bypass_by_default', 'override_origin'],
                  },
                  default: {
                    type: 'integer',
                    title: 'Default TTL',
                    description: 'The edge TTL (in seconds) if you choose the "override_origin" mode.',
                  },
                  status_code_ttl: {
                    type: 'array',
                    title: 'Status Code TTLs',
                    description: 'A list of TTLs to apply to specific status codes or status code ranges.',
                    items: {
                      type: 'object',
                      properties: {
                        value: {
                          type: 'integer',
                          title: 'TTL Value',
                          description:
                            'The time to cache the response for (in seconds). A value of 0 is equivalent to setting the cache control header with the value "no-cache". A value of -1 is equivalent to setting the cache control header with the value of "no-store".',
                        },
                        status_code: {
                          type: 'integer',
                          title: 'Status Code',
                          description: 'A single status code to apply the TTL to.',
                        },
                        status_code_range: {
                          type: 'object',
                          title: 'Status Code Range',
                          description: 'A range of status codes to apply the TTL to.',
                          properties: {
                            from: {
                              type: 'integer',
                              title: 'From',
                              description: 'The lower bound of the range.',
                            },
                            to: {
                              type: 'integer',
                              title: 'To',
                              description: 'The upper bound of the range.',
                            },
                          },
                        },
                      },
                      required: ['value'],
                    },
                  },
                },
                required: ['mode'],
              },
              origin_cache_control: {
                type: 'boolean',
                title: 'Origin Cache Control (Enterprise-Only)',
                description: 'Whether Cloudflare will aim to strictly adhere to RFC 7234.',
              },
              origin_error_page_passthru: {
                type: 'boolean',
                title: 'Origin Error Page Passthrough',
                description: 'Whether to generate Cloudflare error pages for issues from the origin server.',
              },
              read_timeout: {
                type: 'integer',
                title: 'Read Timeout (Enterprise-Only)',
                description:
                  'A timeout value between two successive read operations to use for your origin server. Historically, the timeout value between two read options from Cloudflare to an origin server is 100 seconds. If you are attempting to reduce HTTP 524 errors because of timeouts from an origin server, try increasing this timeout value.',
              },
              respect_strong_etags: {
                type: 'boolean',
                title: 'Respect Strong ETags',
                description:
                  'Whether Cloudflare should respect strong ETag (entity tag) headers. If false, Cloudflare converts strong ETag headers to weak ETag headers.',
              },
              serve_stale: {
                type: 'object',
                title: 'Serve Stale',
                description: 'When to serve stale content from cache.',
                properties: {
                  disable_stale_while_updating: {
                    type: 'boolean',
                    title: 'Disable Stale While Updating',
                    description:
                      'Whether Cloudflare should disable serving stale content while getting the latest content from the origin.',
                  },
                },
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      set_config_rule: {
        type: 'object',
        title: 'Set Configuration Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['set_config'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              automatic_https_rewrites: {
                type: 'boolean',
                title: 'Automatic HTTPS Rewrites',
                description: 'Whether to enable Automatic HTTPS Rewrites.',
              },
              autominify: {
                type: 'object',
                title: 'Auto-Minify',
                description: 'Which file extensions to minify automatically.',
                properties: {
                  css: {
                    type: 'boolean',
                    title: 'CSS',
                    description: 'Whether to minify CSS files.',
                  },
                  html: {
                    type: 'boolean',
                    title: 'HTML',
                    description: 'Whether to minify HTML files.',
                  },
                  js: {
                    type: 'boolean',
                    title: 'JavaScript',
                    description: 'Whether to minify JavaScript files.',
                  },
                },
              },
              bic: {
                type: 'boolean',
                title: 'Browser Integrity Check',
                description: 'Whether to enable Browser Integrity Check (BIC).',
              },
              disable_apps: {
                type: 'string',
                title: 'Disable Apps',
                description: 'Whether to disable Cloudflare Apps.',
                enum: [true],
              },
              disable_pay_per_crawl: {
                type: 'string',
                title: 'Disable Pay Per Crawl',
                description: 'Whether to disable Pay Per Crawl.',
                enum: [true],
              },
              disable_rum: {
                type: 'string',
                title: 'Disable RUM',
                description: 'Whether to disable Real User Monitoring (RUM).',
                enum: [true],
              },
              disable_zaraz: {
                type: 'string',
                title: 'Disable Zaraz',
                description: 'Whether to disable Zaraz.',
                enum: [true],
              },
              email_obfuscation: {
                type: 'boolean',
                title: 'Email Obfuscation',
                description: 'Whether to enable Email Obfuscation.',
              },
              fonts: {
                type: 'boolean',
                title: 'Cloudflare Fonts',
                description: 'Whether to enable Cloudflare Fonts.',
              },
              hotlink_protection: {
                type: 'boolean',
                title: 'Hotlink Protection',
                description: 'Whether to enable Hotlink Protection.',
              },
              mirage: {
                type: 'boolean',
                title: 'Mirage',
                description: 'Whether to enable Mirage.',
              },
              opportunistic_encryption: {
                type: 'boolean',
                title: 'Opportunistic Encryption',
                description: 'Whether to enable Opportunistic Encryption.',
              },
              polish: {
                type: 'string',
                title: 'Polish',
                description: 'The Polish level to configure.',
                enum: ['off', 'lossless', 'lossy', 'webp'],
              },
              rocket_loader: {
                type: 'boolean',
                title: 'Rocket Loader',
                description: 'Whether to enable Rocket Loader.',
              },
              security_level: {
                type: 'string',
                title: 'Security Level',
                description: 'The Security Level to configure.',
                enum: ['off', 'essentially_off', 'low', 'medium', 'high', 'under_attack'],
              },
              server_side_excludes: {
                type: 'boolean',
                title: 'Server-Side Excludes',
                description: 'Whether to enable Server-Side Excludes.',
              },
              ssl: {
                type: 'string',
                title: 'SSL',
                description: 'The SSL level to configure.',
                enum: ['off', 'flexible', 'full', 'strict', 'origin_pull'],
              },
              sxg: {
                type: 'boolean',
                title: 'Signed Exchanges',
                description: 'Whether to enable Signed Exchanges (SXG).',
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
      skip_rule: {
        type: 'object',
        title: 'Skip Rule',
        properties: {
          last_updated: {
            type: 'string',
            title: 'Last Updated',
            description: 'The timestamp of when the rule was last modified.',
            format: 'date-time',
          },
          version: {
            type: 'string',
            title: 'Version',
            description: 'The version of the rule.',
          },
          id: {
            type: 'string',
            title: 'Rule ID',
            description: 'The unique ID of the rule.',
          },
          action: {
            type: 'string',
            title: 'Action',
            description: 'The action to perform when the rule matches.',
            enum: ['skip'],
          },
          action_parameters: {
            type: 'object',
            title: 'Action Parameters',
            description: "The parameters configuring the rule's action.",
            properties: {
              phase: {
                type: 'string',
                title: 'Phase',
                description:
                  'A phase to skip the execution of. This option is only compatible with the products option.',
                enum: ['current'],
              },
              phases: {
                type: 'array',
                title: 'Phases',
                description:
                  'A list of phases to skip the execution of. This option is incompatible with the rulesets option.',
                items: {
                  $ref: '#/$defs/phase',
                },
              },
              products: {
                type: 'array',
                title: 'Products',
                description: 'A list of legacy security products to skip the execution of.',
                items: {
                  type: 'string',
                  title: 'Product',
                  description: 'The name of a legacy security product to skip the execution of.',
                  enum: ['bic', 'hot', 'rateLimit', 'securityLevel', 'uaBlock', 'waf', 'zoneLockdown'],
                },
              },
              rules: {
                type: 'object',
                title: 'Rules',
                description:
                  'A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the execution of. This option is incompatible with the ruleset option.',
                additionalProperties: true,
              },
              ruleset: {
                type: 'string',
                title: 'Ruleset',
                description:
                  'A ruleset to skip the execution of. This option is incompatible with the rulesets option.',
                enum: ['current'],
              },
              rulesets: {
                type: 'array',
                title: 'Rulesets',
                description:
                  'A list of ruleset IDs to skip the execution of. This option is incompatible with the ruleset and phases options.',
                items: {
                  type: 'string',
                  title: 'Ruleset ID',
                  description: 'The unique ID of the ruleset.',
                },
              },
            },
          },
          categories: {
            type: 'array',
            title: 'Categories',
            description: 'The categories of the rule.',
            items: {
              type: 'string',
              title: 'Category',
              description: 'The category of a rule.',
            },
          },
          description: {
            type: 'string',
            title: 'Description',
            description: 'An informative description of the rule.',
          },
          enabled: {
            type: 'boolean',
            title: 'Enabled',
            description: 'Whether the rule should be executed.',
          },
          exposed_credential_check: {
            type: 'object',
            title: 'Exposed Credential Check',
            description: 'Configuration for exposed credential checking.',
            properties: {
              password_expression: {
                type: 'string',
                title: 'Password Expression',
                description: 'An expression that selects the password used in the credentials check.',
              },
              username_expression: {
                type: 'string',
                title: 'Username Expression',
                description: 'An expression that selects the user ID used in the credentials check.',
              },
            },
            required: ['password_expression', 'username_expression'],
          },
          expression: {
            type: 'string',
            title: 'Expression',
            description: 'The expression defining which traffic will match the rule.',
          },
          logging: {
            $ref: '#/$defs/logging',
          },
          ratelimit: {
            type: 'object',
            title: 'Rate Limit',
            description: "An object configuring the rule's rate limit behavior.",
            properties: {
              characteristics: {
                type: 'array',
                title: 'Characteristics',
                description:
                  'Characteristics of the request on which the rate limit counter will be incremented.',
                items: {
                  type: 'string',
                  title: 'Characteristic',
                  description: 'The characteristic of the request.',
                },
              },
              period: {
                type: 'integer',
                title: 'Period',
                description: 'Period in seconds over which the counter is being incremented.',
              },
              counting_expression: {
                type: 'string',
                title: 'Counting Expression',
                description:
                  "An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression.",
              },
              mitigation_timeout: {
                type: 'integer',
                title: 'Mitigation Timeout',
                description:
                  'Period of time in seconds after which the action will be disabled following its first execution.',
              },
              requests_per_period: {
                type: 'integer',
                title: 'Requests per Period',
                description:
                  'The threshold of requests per period after which the action will be executed for the first time.',
              },
              requests_to_origin: {
                type: 'boolean',
                title: 'Requests to Origin',
                description: 'Whether counting is only performed when an origin is reached.',
              },
              score_per_period: {
                type: 'integer',
                title: 'Score per Period',
                description:
                  'The score threshold per period for which the action will be executed the first time.',
              },
              score_response_header_name: {
                type: 'string',
                title: 'Score Response Header Name',
                description:
                  'A response header name provided by the origin, which contains the score to increment rate limit counter with.',
              },
            },
            required: ['characteristics', 'period'],
          },
          ref: {
            type: 'string',
            title: 'Ref',
            description: "The reference of the rule (the rule's ID by default).",
          },
        },
        required: ['last_updated', 'version'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_id, ...body } = args as any;
  return asTextContentResult(await client.rulesets.update(ruleset_id, body));
};

export default { metadata, tool, handler };
