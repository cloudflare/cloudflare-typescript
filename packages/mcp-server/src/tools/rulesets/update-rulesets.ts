// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_rulesets',
  description: 'Updates an account or zone ruleset, creating a new version.',
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'ID',
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
        type: 'string',
        title: 'Kind',
        description: 'The kind of the ruleset.',
        enum: ['managed', 'custom', 'root', 'zone'],
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The human-readable name of the ruleset.',
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
      rules: {
        type: 'array',
        title: 'Rules',
        description: 'The list of rules in the ruleset.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Block rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
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
                          title: 'Content type',
                          description: 'The type of the content to return.',
                        },
                        status_code: {
                          type: 'integer',
                          title: 'Status code',
                          description: 'The status code to return.',
                        },
                      },
                      required: ['content', 'content_type', 'status_code'],
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Challenge rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Compression rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    algorithms: {
                      type: 'array',
                      title: 'Algorithm',
                      description: 'Custom order for compression algorithms.',
                      items: {
                        type: 'object',
                        title: 'Compression Algorithm',
                        description: 'Compression algorithm to enable.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'Name of compression algorithm to enable.',
                            enum: ['none', 'auto', 'default', 'gzip', 'brotli'],
                          },
                        },
                        required: [],
                      },
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Execute rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    id: {
                      type: 'string',
                      title: 'ID',
                      description: 'The ID of the ruleset to execute.',
                    },
                    matched_data: {
                      type: 'object',
                      title: 'Matched data',
                      description: 'The configuration to use for matched data logging.',
                      properties: {
                        public_key: {
                          type: 'string',
                          title: 'Public key',
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
                          title: 'Category overrides',
                          description:
                            'A list of category-level overrides. This option has the second-highest precedence after rule-level overrides.',
                          items: {
                            type: 'object',
                            title: 'Category override',
                            description: 'A category-level override',
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
                                title: 'Sensitivity level',
                                description: 'The sensitivity level to use for rules in the category.',
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
                          title: 'Rule overrides',
                          description:
                            'A list of rule-level overrides. This option has the highest precedence.',
                          items: {
                            type: 'object',
                            title: 'Rule override',
                            description: 'A rule-level override',
                            properties: {
                              id: {
                                type: 'string',
                                title: 'ID',
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
                                title: 'Score threshold',
                                description: 'The score threshold to use for the rule.',
                              },
                              sensitivity_level: {
                                type: 'string',
                                title: 'Sensitivity level',
                                description: 'The sensitivity level to use for the rule.',
                                enum: ['default', 'medium', 'low', 'eoff'],
                              },
                            },
                            required: ['id'],
                          },
                        },
                        sensitivity_level: {
                          type: 'string',
                          title: 'Sensitivity level',
                          description:
                            'A sensitivity level to set for all rules. This option has lower precedence than rule and category overrides and is only applicable for DDoS phases.',
                          enum: ['default', 'medium', 'low', 'eoff'],
                        },
                      },
                      required: [],
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
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Javascript Challenge rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Log rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Managed Challenge rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Redirect rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    from_list: {
                      type: 'object',
                      title: 'Bulk Redirect',
                      description: 'Serve a redirect based on a bulk list lookup.',
                      properties: {
                        key: {
                          type: 'string',
                          title: 'Key',
                          description: 'Expression that evaluates to the list lookup key.',
                        },
                        name: {
                          type: 'string',
                          title: 'Name',
                          description: 'The name of the list to match against.',
                        },
                      },
                      required: [],
                    },
                    from_value: {
                      type: 'object',
                      title: 'Single redirect',
                      description: 'Serve a redirect based on the request properties.',
                      properties: {
                        preserve_query_string: {
                          type: 'boolean',
                          title: 'Preserve query string',
                          description: 'Keep the query string of the original request.',
                        },
                        status_code: {
                          type: 'string',
                          title: 'Status Code',
                          description: 'The status code to be used for the redirect.',
                          enum: [301, 302, 303, 307, 308],
                        },
                        target_url: {
                          anyOf: [
                            {
                              type: 'object',
                              title: 'Static URL redirect',
                              properties: {
                                value: {
                                  type: 'string',
                                  description: 'The URL to redirect the request to.',
                                },
                              },
                              required: [],
                            },
                            {
                              type: 'object',
                              title: 'Dynamic URL redirect',
                              properties: {
                                expression: {
                                  type: 'string',
                                  description:
                                    'An expression to evaluate to get the URL to redirect the request to.',
                                },
                              },
                              required: [],
                            },
                          ],
                          description: 'The URL to redirect the request to.',
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Rewrite rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    headers: {
                      type: 'object',
                      title: 'Headers',
                      description: 'Map of request headers to modify.',
                    },
                    uri: {
                      type: 'object',
                      title: 'URI',
                      description: 'URI to rewrite the request to.',
                      properties: {
                        path: {
                          anyOf: [
                            {
                              type: 'object',
                              title: 'Static value',
                              properties: {
                                value: {
                                  type: 'string',
                                  description: 'Predefined replacement value.',
                                },
                              },
                              required: ['value'],
                            },
                            {
                              type: 'object',
                              title: 'Dynamic value',
                              properties: {
                                expression: {
                                  type: 'string',
                                  description: 'Expression to evaluate for the replacement value.',
                                },
                              },
                              required: ['expression'],
                            },
                          ],
                        },
                        query: {
                          $ref: '#/properties/rules/items/anyOf/8/action_parameters/uri/path',
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Origin rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    host_header: {
                      type: 'string',
                      title: 'Host Header',
                      description: 'Rewrite the HTTP Host header.',
                    },
                    origin: {
                      type: 'object',
                      title: 'Origin',
                      description: 'Override the IP/TCP destination.',
                      properties: {
                        host: {
                          type: 'string',
                          title: 'DNS Record',
                          description: 'Override the resolved hostname.',
                        },
                        port: {
                          type: 'number',
                          title: 'Port',
                          description: 'Override the destination port.',
                        },
                      },
                      required: [],
                    },
                    sni: {
                      type: 'object',
                      title: 'SNI',
                      description: 'Override the Server Name Indication (SNI).',
                      properties: {
                        value: {
                          type: 'string',
                          title: 'Value',
                          description: 'The SNI override.',
                        },
                      },
                      required: ['value'],
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Score rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    increment: {
                      type: 'integer',
                      title: 'Increment',
                      description:
                        'Increment contains the delta to change the score and can be either positive or negative.',
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Serve Error rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
                  description: 'The unique ID of the rule.',
                },
                action: {
                  type: 'string',
                  title: 'Action',
                  description: 'The action to perform when the rule matches.',
                  enum: ['serve_error'],
                },
                action_parameters: {
                  type: 'object',
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    content: {
                      type: 'string',
                      title: 'Content',
                      description: 'Error response content.',
                    },
                    content_type: {
                      type: 'string',
                      title: 'Content Type',
                      description: 'Content-type header to set with the response.',
                      enum: ['application/json', 'text/xml', 'text/plain', 'text/html'],
                    },
                    status_code: {
                      type: 'number',
                      title: 'Status Code',
                      description: 'The status code to use for the error.',
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Set Config Rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    automatic_https_rewrites: {
                      type: 'boolean',
                      title: 'Automatic HTTPS rewrites',
                      description: 'Turn on or off Automatic HTTPS Rewrites.',
                    },
                    autominify: {
                      type: 'object',
                      title: 'Auto Minify',
                      description: 'Select which file extensions to minify automatically.',
                      properties: {
                        css: {
                          type: 'boolean',
                          title: 'CSS',
                          description: 'Minify CSS files.',
                        },
                        html: {
                          type: 'boolean',
                          title: 'HTML',
                          description: 'Minify HTML files.',
                        },
                        js: {
                          type: 'boolean',
                          title: 'JS',
                          description: 'Minify JS files.',
                        },
                      },
                      required: [],
                    },
                    bic: {
                      type: 'boolean',
                      title: 'Browser Integrity Check',
                      description: 'Turn on or off Browser Integrity Check.',
                    },
                    disable_apps: {
                      type: 'string',
                      title: 'Disable Apps',
                      description: 'Turn off all active Cloudflare Apps.',
                      enum: [true],
                    },
                    disable_rum: {
                      type: 'string',
                      title: 'Disable RUM',
                      description: 'Turn off Real User Monitoring (RUM).',
                      enum: [true],
                    },
                    disable_zaraz: {
                      type: 'string',
                      title: 'Disable Zaraz',
                      description: 'Turn off Zaraz.',
                      enum: [true],
                    },
                    email_obfuscation: {
                      type: 'boolean',
                      title: 'Email Obfuscation',
                      description: 'Turn on or off Email Obfuscation.',
                    },
                    fonts: {
                      type: 'boolean',
                      title: 'Cloudflare Fonts',
                      description: 'Turn on or off Cloudflare Fonts.',
                    },
                    hotlink_protection: {
                      type: 'boolean',
                      title: 'Hotlink Protection',
                      description: 'Turn on or off the Hotlink Protection.',
                    },
                    mirage: {
                      type: 'boolean',
                      title: 'Mirage',
                      description: 'Turn on or off Mirage.',
                    },
                    opportunistic_encryption: {
                      type: 'boolean',
                      title: 'Opportunistic Encryption',
                      description: 'Turn on or off Opportunistic Encryption.',
                    },
                    polish: {
                      type: 'string',
                      title: 'Polish',
                      description: 'Configure the Polish level.',
                      enum: ['off', 'lossless', 'lossy'],
                    },
                    rocket_loader: {
                      type: 'boolean',
                      title: 'Rocket Loader',
                      description: 'Turn on or off Rocket Loader',
                    },
                    security_level: {
                      type: 'string',
                      title: 'Security Level',
                      description: 'Configure the Security Level.',
                      enum: ['off', 'essentially_off', 'low', 'medium', 'high', 'under_attack'],
                    },
                    server_side_excludes: {
                      type: 'boolean',
                      title: 'Server Side Excludes',
                      description: 'Turn on or off Server Side Excludes.',
                    },
                    ssl: {
                      type: 'string',
                      title: 'SSL',
                      description: 'Configure the SSL level.',
                      enum: ['off', 'flexible', 'full', 'strict', 'origin_pull'],
                    },
                    sxg: {
                      type: 'boolean',
                      title: 'Signed Exchanges (SXG)',
                      description: 'Turn on or off Signed Exchanges (SXG).',
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Skip rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    phases: {
                      type: 'array',
                      title: 'Phases',
                      description:
                        'A list of phases to skip the execution of. This option is incompatible with the ruleset and rulesets options.',
                      items: {
                        $ref: '#/properties/phase',
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
                    },
                    ruleset: {
                      type: 'string',
                      title: 'Ruleset',
                      description:
                        'A ruleset to skip the execution of. This option is incompatible with the rulesets, rules and phases options.',
                      enum: ['current'],
                    },
                    rulesets: {
                      type: 'array',
                      title: 'Rulesets',
                      description:
                        'A list of ruleset IDs to skip the execution of. This option is incompatible with the ruleset and phases options.',
                      items: {
                        type: 'string',
                        title: 'Ruleset',
                        description: 'The ID of a ruleset to skip the execution of.',
                      },
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Set Cache Settings rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    additional_cacheable_ports: {
                      type: 'array',
                      title: 'Additional Cacheable Ports (Enterprise-only)',
                      description: 'List of additional ports that caching can be enabled on.',
                      items: {
                        type: 'integer',
                        title: 'Additional Cacheable Port',
                        description: 'A port to enable caching on',
                      },
                    },
                    browser_ttl: {
                      type: 'object',
                      title: 'Browser TTL',
                      description:
                        'Specify how long client browsers should cache the response. Cloudflare cache purge will not purge content cached on client browsers, so high browser TTLs may lead to stale content.',
                      properties: {
                        mode: {
                          type: 'string',
                          title: 'Mode',
                          description: 'Determines which browser ttl mode to use.',
                          enum: ['respect_origin', 'bypass_by_default', 'override_origin'],
                        },
                        default: {
                          type: 'integer',
                          title: 'Default TTL',
                          description: 'The TTL (in seconds) if you choose override_origin mode.',
                        },
                      },
                      required: ['mode'],
                    },
                    cache: {
                      type: 'boolean',
                      title: 'Cache',
                      description:
                        'Mark whether the request’s response from origin is eligible for caching. Caching itself will still depend on the cache-control header and your other caching configurations.',
                    },
                    cache_key: {
                      type: 'object',
                      title: 'Cache Key',
                      description:
                        'Define which components of the request are included or excluded from the cache key Cloudflare uses to store the response in cache.',
                      properties: {
                        cache_by_device_type: {
                          type: 'boolean',
                          title: 'Cache by Device Type',
                          description: 'Separate cached content based on the visitor’s device type',
                        },
                        cache_deception_armor: {
                          type: 'boolean',
                          title: 'Cache Deception Armor',
                          description:
                            'Protect from web cache deception attacks while allowing static assets to be cached',
                        },
                        custom_key: {
                          type: 'object',
                          title: 'Custom Key',
                          description:
                            'Customize which components of the request are included or excluded from the cache key.',
                          properties: {
                            cookie: {
                              type: 'object',
                              title: 'Cookie',
                              description: 'The cookies to include in building the cache key.',
                              properties: {
                                check_presence: {
                                  type: 'array',
                                  title: 'Check presence of cookies',
                                  description:
                                    'Checks for the presence of these cookie names. The presence of these cookies is used in building the cache key.',
                                  items: {
                                    type: 'string',
                                    title: 'Cookie name',
                                    description: 'A cookie name to check presence of.',
                                  },
                                },
                                include: {
                                  type: 'array',
                                  title: 'Include cookies',
                                  description: "Include these cookies' names and their values.",
                                  items: {
                                    type: 'string',
                                    title: 'Cookie name',
                                    description: 'Cookie name and corresponding value to include.',
                                  },
                                },
                              },
                              required: [],
                            },
                            header: {
                              type: 'object',
                              title: 'Headers',
                              description:
                                'The header names and values to include in building the cache key.',
                              properties: {
                                check_presence: {
                                  type: 'array',
                                  title: 'Check presence of headers',
                                  description:
                                    'Checks for the presence of these header names. The presence of these headers is used in building the cache key.',
                                  items: {
                                    type: 'string',
                                    title: 'Header name',
                                    description: 'A header name to check presence of.',
                                  },
                                },
                                contains: {
                                  type: 'object',
                                  title: 'Header contains',
                                  description:
                                    'For each header name and list of values combination, check if the request header contains any of the values provided. The presence of the request header and whether any of the values provided are contained in the request header value is used in building the cache key.',
                                },
                                exclude_origin: {
                                  type: 'boolean',
                                  title: 'Exclude origin header',
                                  description:
                                    'Whether or not to include the origin header. A value of true will exclude the origin header in the cache key.',
                                },
                                include: {
                                  type: 'array',
                                  title: 'Include headers',
                                  description: "Include these headers' names and their values.",
                                  items: {
                                    type: 'string',
                                    title: 'Header name',
                                    description: 'Header name and corresponding value to include.',
                                  },
                                },
                              },
                              required: [],
                            },
                            host: {
                              type: 'object',
                              title: 'Host',
                              description:
                                'Whether to use the original host or the resolved host in the cache key.',
                              properties: {
                                resolved: {
                                  type: 'boolean',
                                  title: 'Use Resolved host',
                                  description:
                                    'Use the resolved host in the cache key. A value of true will use the resolved host, while a value or false will use the original host.',
                                },
                              },
                              required: [],
                            },
                            query_string: {
                              anyOf: [
                                {
                                  type: 'object',
                                  title: 'Included Query String Parameters',
                                  description:
                                    'Use the presence of parameters in the query string to build the cache key.',
                                  properties: {
                                    include: {
                                      anyOf: [
                                        {
                                          type: 'object',
                                          title: 'Some Query String Parameters',
                                          description:
                                            'A list of query string parameters used to build the cache key.',
                                          properties: {
                                            list: {
                                              type: 'array',
                                              items: {
                                                type: 'string',
                                                title: 'parameter',
                                                description:
                                                  'Parameter to include in the list of query string parameters used to build a cache key.',
                                              },
                                            },
                                          },
                                          required: [],
                                        },
                                        {
                                          type: 'object',
                                          title: 'ALL Query String Parameters',
                                          description:
                                            'Build the cache key using ALL query string parameters that are in the request.',
                                          properties: {
                                            all: {
                                              type: 'boolean',
                                              description:
                                                'Determines whether to include all query string parameters in the cache key.',
                                            },
                                          },
                                          required: [],
                                        },
                                      ],
                                      description:
                                        'A list of query string parameters used to build the cache key.',
                                    },
                                  },
                                  required: [],
                                },
                                {
                                  type: 'object',
                                  title: 'Excluded Query String Parameters',
                                  description:
                                    'Use the absence of parameters in the query string to build the cache key.',
                                  properties: {
                                    exclude: {
                                      anyOf: [
                                        {
                                          type: 'object',
                                          title: 'Some Query String Parameters',
                                          description:
                                            'A list of query string parameters NOT used to build the cache key. All parameters present in the request but missing in this list will be used to build the cache key.',
                                          properties: {
                                            list: {
                                              type: 'array',
                                              items: {
                                                type: 'string',
                                                title: 'parameter',
                                                description:
                                                  'A parameter in the list of query string parameters excluded from use in building a cache key.',
                                              },
                                            },
                                          },
                                          required: [],
                                        },
                                        {
                                          type: 'object',
                                          title: 'ALL Query String Parameters',
                                          description:
                                            'Build the cache key excluding ALL query string parameters that are in the request.',
                                          properties: {
                                            all: {
                                              type: 'boolean',
                                              description:
                                                'Determines whether to exclude all query string parameters from the cache key.',
                                            },
                                          },
                                          required: [],
                                        },
                                      ],
                                      description:
                                        'A list of query string parameters NOT used to build the cache key. All parameters present in the request but missing in this list will be used to build the cache key.',
                                    },
                                  },
                                  required: [],
                                },
                              ],
                              description:
                                'Use the presence of parameters in the query string to build the cache key.',
                            },
                            user: {
                              type: 'object',
                              title: 'User',
                              description:
                                'Characteristics of the request user agent used in building the cache key.',
                              properties: {
                                device_type: {
                                  type: 'boolean',
                                  title: 'Device Type',
                                  description: "Use the user agent's device type in the cache key.",
                                },
                                geo: {
                                  type: 'boolean',
                                  title: 'Country',
                                  description: "Use the user agents's country in the cache key.",
                                },
                                lang: {
                                  type: 'boolean',
                                  title: 'Language',
                                  description: "Use the user agent's language in the cache key.",
                                },
                              },
                              required: [],
                            },
                          },
                          required: [],
                        },
                        ignore_query_strings_order: {
                          type: 'boolean',
                          title: 'Ignore Query Strings Order',
                          description:
                            "Treat requests with the same query parameters the same, regardless of the order those query parameters are in. A value of true ignores the query strings' order.",
                        },
                      },
                      required: [],
                    },
                    cache_reserve: {
                      type: 'object',
                      title: 'CacheReserve',
                      description:
                        "Mark whether the request's response from origin is eligible for Cache Reserve (requires a Cache Reserve add-on plan).",
                      properties: {
                        eligible: {
                          type: 'boolean',
                          title: 'Eligible',
                          description:
                            'Determines whether cache reserve is enabled. If this is true and a request meets eligibility criteria, Cloudflare will write the resource to cache reserve.',
                        },
                        minimum_file_size: {
                          type: 'integer',
                          title: 'Minimum File Size',
                          description: 'The minimum file size eligible for store in cache reserve.',
                        },
                      },
                      required: ['eligible', 'minimum_file_size'],
                    },
                    edge_ttl: {
                      type: 'object',
                      title: 'Edge TTL',
                      description:
                        'TTL (Time to Live) specifies the maximum time to cache a resource in the Cloudflare edge network.',
                      properties: {
                        default: {
                          type: 'integer',
                          title: 'Default',
                          description: 'The TTL (in seconds) if you choose override_origin mode.',
                        },
                        mode: {
                          type: 'string',
                          title: 'Mode',
                          description: 'edge ttl options',
                          enum: ['respect_origin', 'bypass_by_default', 'override_origin'],
                        },
                        status_code_ttl: {
                          type: 'array',
                          title: 'Status Code TTLs',
                          description:
                            'List of single status codes, or status code ranges to apply the selected mode',
                          items: {
                            type: 'object',
                            title: 'Status Code TTL',
                            description:
                              'Specify how long Cloudflare should cache the response based on the status code from the origin. Can be a single status code or a range or status codes',
                            properties: {
                              value: {
                                type: 'integer',
                                title: 'TTL value',
                                description:
                                  'Time to cache a response (in seconds). A value of 0 is equivalent to setting the Cache-Control header with the value "no-cache". A value of -1 is equivalent to setting Cache-Control header with the value of "no-store".',
                              },
                              status_code_range: {
                                type: 'object',
                                title: 'Status Code Range',
                                description: 'The range of status codes used to apply the selected mode.',
                                properties: {
                                  from: {
                                    type: 'integer',
                                    title: 'Status Code lower bound',
                                    description: 'response status code lower bound',
                                  },
                                  to: {
                                    type: 'integer',
                                    title: 'Status Code upper bound',
                                    description: 'response status code upper bound',
                                  },
                                },
                                required: ['from', 'to'],
                              },
                              status_code_value: {
                                type: 'integer',
                                title: 'Status Code Value',
                                description: 'Set the ttl for responses with this specific status code',
                              },
                            },
                            required: ['value'],
                          },
                        },
                      },
                      required: ['default', 'mode', 'status_code_ttl'],
                    },
                    origin_cache_control: {
                      type: 'boolean',
                      title: 'Origin Cache Control (Enterprise-only)',
                      description: 'When enabled, Cloudflare will aim to strictly adhere to RFC 7234.',
                    },
                    origin_error_page_passthru: {
                      type: 'boolean',
                      title: 'Origin Error Page Passthru',
                      description:
                        'Generate Cloudflare error pages from issues sent from the origin server. When on, error pages will trigger for issues from the origin',
                    },
                    read_timeout: {
                      type: 'integer',
                      title: 'Read Timeout (Enterprise-only)',
                      description:
                        'Define a timeout value between two successive read operations to your origin server. Historically, the timeout value between two read options from Cloudflare to an origin server is 100 seconds. If you are attempting to reduce HTTP 524 errors because of timeouts from an origin server, try increasing this timeout value.',
                    },
                    respect_strong_etags: {
                      type: 'boolean',
                      title: 'Respect Strong Etags',
                      description:
                        'Specify whether or not Cloudflare should respect strong ETag (entity tag) headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.',
                    },
                    serve_stale: {
                      type: 'object',
                      title: 'Serve Stale',
                      description:
                        'Define if Cloudflare should serve stale content while getting the latest content from the origin. If on, Cloudflare will not serve stale content while getting the latest content from the origin.',
                      properties: {
                        disable_stale_while_updating: {
                          type: 'boolean',
                          title: 'Disable Stale While Updating',
                          description:
                            'Defines whether Cloudflare should serve stale content while updating. If true, Cloudflare will not serve stale content while getting the latest content from the origin.',
                        },
                      },
                      required: ['disable_stale_while_updating'],
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Log Custom Field rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                  properties: {
                    cookie_fields: {
                      type: 'array',
                      title: 'Cookie fields',
                      description: 'The cookie fields to log.',
                      items: {
                        type: 'object',
                        title: 'Cookie field',
                        description: 'The cookie field to log.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'The name of the field.',
                          },
                        },
                        required: ['name'],
                      },
                    },
                    raw_response_fields: {
                      type: 'array',
                      title: 'Raw response fields',
                      description: 'The raw response fields to log.',
                      items: {
                        type: 'object',
                        title: 'Raw response field',
                        description: 'The raw response field to log.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'The name of the field.',
                          },
                          preserve_duplicates: {
                            type: 'boolean',
                            title: 'Preserve duplicates',
                            description: 'Whether to log duplicate values of the same header.',
                          },
                        },
                        required: ['name'],
                      },
                    },
                    request_fields: {
                      type: 'array',
                      title: 'Raw request fields',
                      description: 'The raw request fields to log.',
                      items: {
                        type: 'object',
                        title: 'Raw request field',
                        description: 'The raw request field to log.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'The name of the field.',
                          },
                        },
                        required: ['name'],
                      },
                    },
                    response_fields: {
                      type: 'array',
                      title: 'Transformed response fields',
                      description: 'The transformed response fields to log.',
                      items: {
                        type: 'object',
                        title: 'Transformed response field',
                        description: 'The transformed response field to log.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'The name of the field.',
                          },
                          preserve_duplicates: {
                            type: 'boolean',
                            title: 'Preserve duplicates',
                            description: 'Whether to log duplicate values of the same header.',
                          },
                        },
                        required: ['name'],
                      },
                    },
                    transformed_request_fields: {
                      type: 'array',
                      title: 'Transformed request fields',
                      description: 'The transformed request fields to log.',
                      items: {
                        type: 'object',
                        title: 'Transformed request field',
                        description: 'The transformed request field to log.',
                        properties: {
                          name: {
                            type: 'string',
                            title: 'Name',
                            description: 'The name of the field.',
                          },
                        },
                        required: ['name'],
                      },
                    },
                  },
                  required: [],
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'DDoS Dynamic rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
            {
              type: 'object',
              title: 'Force Connection Close rule',
              properties: {
                last_updated: {
                  type: 'string',
                  title: 'Last updated',
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
                  title: 'ID',
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
                  title: 'Action parameters',
                  description: "The parameters configuring the rule's action.",
                },
                categories: {
                  type: 'array',
                  title: 'Categories',
                  description: 'The categories of the rule.',
                  items: {
                    type: 'string',
                    title: 'Category',
                    description: 'A category of the rule.',
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
                  description: 'Configure checks for exposed credentials.',
                  properties: {
                    password_expression: {
                      type: 'string',
                      title: 'Password Expression',
                      description: 'Expression that selects the password used in the credentials check.',
                    },
                    username_expression: {
                      type: 'string',
                      title: 'Username Expression',
                      description: 'Expression that selects the user ID used in the credentials check.',
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
                  $ref: '#/properties/rules/items/anyOf/0/logging',
                },
                ratelimit: {
                  type: 'object',
                  title: 'Ratelimit',
                  description: "An object configuring the rule's ratelimit behavior.",
                  properties: {
                    characteristics: {
                      type: 'array',
                      title: 'Characteristics',
                      description:
                        'Characteristics of the request on which the ratelimiter counter will be incremented.',
                      items: {
                        type: 'string',
                        title: 'Characteristic',
                      },
                    },
                    period: {
                      type: 'string',
                      title: 'Period',
                      description: 'Period in seconds over which the counter is being incremented.',
                      enum: [10, 60, 600, 3600],
                    },
                    counting_expression: {
                      type: 'string',
                      title: 'Counting Expression',
                      description:
                        "Defines when the ratelimit counter should be incremented. It is optional and defaults to the same as the rule's expression.",
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
                      description: 'Defines if ratelimit counting is only done when an origin is reached.',
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
                        'The response header name provided by the origin which should contain the score to increment ratelimit counter on.',
                    },
                  },
                  required: ['characteristics', 'period'],
                },
                ref: {
                  type: 'string',
                  title: 'Ref',
                  description: 'The reference of the rule (the rule ID by default).',
                },
              },
              required: ['last_updated', 'version'],
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ruleset_id, ...body } = args;
  return client.rulesets.update(ruleset_id, body);
};

export default { metadata, tool, handler };
