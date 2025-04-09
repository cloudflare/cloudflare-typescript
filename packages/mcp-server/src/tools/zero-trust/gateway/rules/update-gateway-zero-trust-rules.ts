// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_rules',
  description: 'Updates a configured Zero Trust Gateway rule.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'The API resource UUID.',
      },
      action: {
        type: 'string',
        description:
          'The action to preform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`.',
        enum: [
          'on',
          'off',
          'allow',
          'block',
          'scan',
          'noscan',
          'safesearch',
          'ytrestricted',
          'isolate',
          'noisolate',
          'override',
          'l4_override',
          'egress',
          'resolve',
          'quarantine',
          'redirect',
        ],
      },
      name: {
        type: 'string',
        description: 'The name of the rule.',
      },
      description: {
        type: 'string',
        description: 'The description of the rule.',
      },
      device_posture: {
        type: 'string',
        description: 'The wirefilter expression used for device posture check matching.',
      },
      enabled: {
        type: 'boolean',
        description: 'True if the rule is enabled.',
      },
      expiration: {
        type: 'object',
        description:
          "The expiration time stamp and default duration of a DNS policy. Takes\nprecedence over the policy's `schedule` configuration, if any.\n\nThis does not apply to HTTP or network policies.\n",
        properties: {
          expires_at: {
            type: 'string',
            description:
              'The time stamp at which the policy will expire and cease to be\napplied.\n\nMust adhere to RFC 3339 and include a UTC offset. Non-zero\noffsets are accepted but will be converted to the equivalent\nvalue with offset zero (UTC+00:00) and will be returned as time\nstamps with offset zero denoted by a trailing \'Z\'.\n\nPolicies with an expiration do not consider the timezone of\nclients they are applied to, and expire "globally" at the point\ngiven by their `expires_at` value.\n',
            format: 'date-time',
          },
          duration: {
            type: 'integer',
            description:
              'The default duration a policy will be active in minutes. Must be set in order to use the `reset_expiration` endpoint on this rule.',
          },
          expired: {
            type: 'boolean',
            description: 'Whether the policy has expired.',
          },
        },
        required: ['expires_at'],
      },
      filters: {
        type: 'array',
        description:
          'The protocol or layer to evaluate the traffic, identity, and device posture expressions.',
        items: {
          type: 'string',
          description: 'The protocol or layer to use.',
          enum: ['http', 'dns', 'l4', 'egress', 'dns_resolver'],
        },
      },
      identity: {
        type: 'string',
        description: 'The wirefilter expression used for identity matching.',
      },
      precedence: {
        type: 'integer',
        description:
          'Precedence sets the order of your rules. Lower values indicate higher precedence. At each processing phase, applicable rules are evaluated in ascending order of this value.',
      },
      rule_settings: {
        type: 'object',
        description: "Additional settings that modify the rule's action.",
        properties: {
          add_headers: {
            type: 'object',
            description:
              'Add custom headers to allowed requests, in the form of key-value pairs. Keys are header names, pointing to an array with its header value(s).',
          },
          allow_child_bypass: {
            type: 'boolean',
            description: 'Set by parent MSP accounts to enable their children to bypass this rule.',
          },
          audit_ssh: {
            type: 'object',
            description: 'Settings for the Audit SSH action.',
            properties: {
              command_logging: {
                type: 'boolean',
                description: 'Enable to turn on SSH command logging.',
              },
            },
            required: [],
          },
          biso_admin_controls: {
            type: 'object',
            description: 'Configure how browser isolation behaves.',
            properties: {
              copy: {
                type: 'string',
                description:
                  'Configure whether copy is enabled or not. When set with "remote_only", copying isolated content from the remote browser to the user\'s local clipboard is disabled. When absent, copy is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled', 'remote_only'],
              },
              dcp: {
                type: 'boolean',
                description: 'Set to false to enable copy-pasting. Only applies when `version == "v1"`.',
              },
              dd: {
                type: 'boolean',
                description: 'Set to false to enable downloading. Only applies when `version == "v1"`.',
              },
              dk: {
                type: 'boolean',
                description: 'Set to false to enable keyboard usage. Only applies when `version == "v1"`.',
              },
              download: {
                type: 'string',
                description:
                  'Configure whether downloading enabled or not. When absent, downloading is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled'],
              },
              dp: {
                type: 'boolean',
                description: 'Set to false to enable printing. Only applies when `version == "v1"`.',
              },
              du: {
                type: 'boolean',
                description: 'Set to false to enable uploading. Only applies when `version == "v1"`.',
              },
              keyboard: {
                type: 'string',
                description:
                  'Configure whether keyboard usage is enabled or not. When absent, keyboard usage is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled'],
              },
              paste: {
                type: 'string',
                description:
                  'Configure whether pasting is enabled or not. When set with "remote_only", pasting content from the user\'s local clipboard into isolated pages is disabled. When absent, paste is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled', 'remote_only'],
              },
              printing: {
                type: 'string',
                description:
                  'Configure whether printing is enabled or not. When absent, printing is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled'],
              },
              upload: {
                type: 'string',
                description:
                  'Configure whether uploading is enabled or not. When absent, uploading is enabled. Only applies when `version == "v2"`.',
                enum: ['enabled', 'disabled'],
              },
              version: {
                type: 'string',
                description: 'Indicates which version of the browser isolation controls should apply.',
                enum: ['v1', 'v2'],
              },
            },
            required: [],
          },
          block_page_enabled: {
            type: 'boolean',
            description: 'Enable the custom block page.',
          },
          block_reason: {
            type: 'string',
            description:
              'The text describing why this block occurred, displayed on the custom block page (if enabled).',
          },
          bypass_parent_rule: {
            type: 'boolean',
            description: "Set by children MSP accounts to bypass their parent's rules.",
          },
          check_session: {
            type: 'object',
            description: 'Configure how session check behaves.',
            properties: {
              duration: {
                type: 'string',
                description: 'Configure how fresh the session needs to be to be considered valid.',
              },
              enforce: {
                type: 'boolean',
                description: 'Set to true to enable session enforcement.',
              },
            },
            required: [],
          },
          dns_resolvers: {
            type: 'object',
            description:
              "Add your own custom resolvers to route queries that match the resolver policy. Cannot be used when 'resolve_dns_through_cloudflare' or 'resolve_dns_internally' are set. DNS queries will route to the address closest to their origin. Only valid when a rule's action is set to 'resolve'.",
            properties: {
              ipv4: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ip: {
                      type: 'string',
                      description: 'IPv4 address of upstream resolver.',
                    },
                    port: {
                      type: 'integer',
                      description:
                        'A port number to use for upstream resolver. Defaults to 53 if unspecified.',
                    },
                    route_through_private_network: {
                      type: 'boolean',
                      description:
                        'Whether to connect to this resolver over a private network. Must be set when vnet_id is set.',
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.',
                    },
                  },
                  required: ['ip'],
                },
              },
              ipv6: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ip: {
                      type: 'string',
                      description: 'IPv6 address of upstream resolver.',
                    },
                    port: {
                      type: 'integer',
                      description:
                        'A port number to use for upstream resolver. Defaults to 53 if unspecified.',
                    },
                    route_through_private_network: {
                      type: 'boolean',
                      description:
                        'Whether to connect to this resolver over a private network. Must be set when vnet_id is set.',
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.',
                    },
                  },
                  required: ['ip'],
                },
              },
            },
            required: [],
          },
          egress: {
            type: 'object',
            description:
              'Configure how Gateway Proxy traffic egresses. You can enable this setting for rules with Egress actions and filters, or omit it to indicate local egress via WARP IPs.',
            properties: {
              ipv4: {
                type: 'string',
                description: 'The IPv4 address to be used for egress.',
              },
              ipv4_fallback: {
                type: 'string',
                description:
                  "The fallback IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. Can be '0.0.0.0' to indicate local egress via WARP IPs.",
              },
              ipv6: {
                type: 'string',
                description: 'The IPv6 range to be used for egress.',
              },
            },
            required: [],
          },
          ignore_cname_category_matches: {
            type: 'boolean',
            description:
              'Set to true, to ignore the category matches at CNAME domains in a response. If unchecked, the categories in this rule will be checked against all the CNAME domain categories in a response.',
          },
          insecure_disable_dnssec_validation: {
            type: 'boolean',
            description: 'INSECURE - disable DNSSEC validation (for Allow actions).',
          },
          ip_categories: {
            type: 'boolean',
            description:
              'Set to true to enable IPs in DNS resolver category blocks. By default categories only block based on domain names.',
          },
          ip_indicator_feeds: {
            type: 'boolean',
            description:
              'Set to true to include IPs in DNS resolver indicator feed blocks. By default indicator feeds only block based on domain names.',
          },
          l4override: {
            type: 'object',
            description: 'Send matching traffic to the supplied destination IP address and port.',
            properties: {
              ip: {
                type: 'string',
                description: 'IPv4 or IPv6 address.',
              },
              port: {
                type: 'integer',
                description: 'A port number to use for TCP/UDP overrides.',
              },
            },
            required: [],
          },
          notification_settings: {
            type: 'object',
            description:
              "Configure a notification to display on the user's device when this rule is matched.",
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Set notification on',
              },
              msg: {
                type: 'string',
                description: 'Customize the message shown in the notification.',
              },
              support_url: {
                type: 'string',
                description:
                  'Optional URL to direct users to additional information. If not set, the notification will open a block page.',
              },
            },
            required: [],
          },
          override_host: {
            type: 'string',
            description: 'Override matching DNS queries with a hostname.',
          },
          override_ips: {
            type: 'array',
            description: 'Override matching DNS queries with an IP or set of IPs.',
            items: {
              type: 'string',
              description: 'IPv4 or IPv6 address.',
            },
          },
          payload_log: {
            type: 'object',
            description: 'Configure DLP payload logging.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Set to true to enable DLP payload logging for this rule.',
              },
            },
            required: [],
          },
          quarantine: {
            type: 'object',
            description: 'Settings that apply to quarantine rules',
            properties: {
              file_types: {
                type: 'array',
                description: 'Types of files to sandbox.',
                items: {
                  type: 'string',
                  enum: [
                    'exe',
                    'pdf',
                    'doc',
                    'docm',
                    'docx',
                    'rtf',
                    'ppt',
                    'pptx',
                    'xls',
                    'xlsm',
                    'xlsx',
                    'zip',
                    'rar',
                  ],
                },
              },
            },
            required: [],
          },
          redirect: {
            type: 'object',
            description: 'Settings that apply to redirect rules',
            properties: {
              target_uri: {
                type: 'string',
                description: 'URI to which the user will be redirected',
              },
              include_context: {
                type: 'boolean',
                description: 'If true, context information will be passed as query parameters',
              },
              preserve_path_and_query: {
                type: 'boolean',
                description:
                  'If true, the path and query parameters from the original request will be appended to target_uri',
              },
            },
            required: ['target_uri'],
          },
          resolve_dns_internally: {
            type: 'object',
            description:
              "Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action is set to 'resolve'.",
            properties: {
              fallback: {
                type: 'string',
                description:
                  "The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries.",
                enum: ['none', 'public_dns'],
              },
              view_id: {
                type: 'string',
                description: "The internal DNS view identifier that's passed to the internal DNS service.",
              },
            },
            required: [],
          },
          resolve_dns_through_cloudflare: {
            type: 'boolean',
            description:
              "Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_internally' is set. Only valid when a rule's action is set to 'resolve'.",
          },
          untrusted_cert: {
            type: 'object',
            description: 'Configure behavior when an upstream cert is invalid or an SSL error occurs.',
            properties: {
              action: {
                type: 'string',
                description:
                  'The action performed when an untrusted certificate is seen. The default action is an error with HTTP code 526.',
                enum: ['pass_through', 'block', 'error'],
              },
            },
            required: [],
          },
        },
        required: [],
      },
      schedule: {
        type: 'object',
        description:
          'The schedule for activating DNS policies. This does not apply to HTTP or network policies.',
        properties: {
          fri: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Fridays, in increasing order from 00:00-24:00.  If this parameter is omitted, the rule will be deactivated on Fridays.',
          },
          mon: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Mondays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Mondays.',
          },
          sat: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Saturdays, in increasing order from 00:00-24:00.  If this parameter is omitted, the rule will be deactivated on Saturdays.',
          },
          sun: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Sundays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Sundays.',
          },
          thu: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Thursdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Thursdays.',
          },
          time_zone: {
            type: 'string',
            description:
              "The time zone the rule will be evaluated against. If a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway will always use the current time at that time zone. If this parameter is omitted, then Gateway will use the time zone inferred from the user's source IP to evaluate the rule. If Gateway cannot determine the time zone from the IP, we will fall back to the time zone of the user's connected data center.",
          },
          tue: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Tuesdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Tuesdays.',
          },
          wed: {
            type: 'string',
            description:
              'The time intervals when the rule will be active on Wednesdays, in increasing order from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on Wednesdays.',
          },
        },
        required: [],
      },
      traffic: {
        type: 'string',
        description: 'The wirefilter expression used for traffic matching.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.zeroTrust.gateway.rules.update(rule_id, body);
};

export default { metadata, tool, handler };
