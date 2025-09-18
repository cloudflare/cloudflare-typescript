// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/gateway/rules/{rule_id}',
  operationId: 'zero-trust-gateway-rules-update-zero-trust-gateway-rule',
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_rules',
  description: 'Update a configured Zero Trust Gateway rule.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'Identify the API resource with a UUID.',
      },
      action: {
        type: 'string',
        description:
          'Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`.',
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
        description: 'Specify the rule name.',
      },
      description: {
        type: 'string',
        description: 'Specify the rule description.',
      },
      device_posture: {
        type: 'string',
        description:
          'Specify the wirefilter expression used for device posture check. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
      },
      enabled: {
        type: 'boolean',
        description: 'Specify whether the rule is enabled.',
      },
      expiration: {
        type: 'object',
        description:
          "Defines the expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any. This  does not apply to HTTP or network policies. Settable only for `dns` rules.",
        properties: {
          expires_at: {
            type: 'string',
            description:
              'Show the timestamp when the policy expires and stops applying.  The value must follow RFC 3339 and include a UTC offset.  The system accepts non-zero offsets but converts them to the equivalent UTC+00:00  value and returns timestamps with a trailing Z. Expiration policies ignore client  timezones and expire globally at the specified expires_at time.',
            format: 'date-time',
          },
          duration: {
            type: 'integer',
            description:
              'Defines the default duration a policy active in minutes. Must set in order to use the `reset_expiration` endpoint on this rule.',
          },
          expired: {
            type: 'boolean',
            description: 'Indicates whether the policy is expired.',
          },
        },
        required: ['expires_at'],
      },
      filters: {
        type: 'array',
        description:
          'Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions.',
        items: {
          $ref: '#/$defs/gateway_filter',
        },
      },
      identity: {
        type: 'string',
        description:
          'Specify the wirefilter expression used for identity matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
      },
      precedence: {
        type: 'integer',
        description:
          'Set the order of your rules. Lower values indicate higher precedence. At each processing phase, evaluate applicable rules in ascending order of this value. Refer to [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform) to manage precedence via Terraform.',
      },
      rule_settings: {
        $ref: '#/$defs/rule_setting',
      },
      schedule: {
        $ref: '#/$defs/schedule',
      },
      traffic: {
        type: 'string',
        description:
          'Specify the wirefilter expression used for traffic matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
      },
    },
    required: ['account_id', 'rule_id', 'action', 'name'],
    $defs: {
      gateway_filter: {
        type: 'string',
        description: 'Specify the protocol or layer to use.',
        enum: ['http', 'dns', 'l4', 'egress', 'dns_resolver'],
      },
      rule_setting: {
        type: 'object',
        description:
          'Set settings related to this rule. Each setting is only valid for specific rule types and can only be used with the appropriate selectors. If Terraform drift is observed in these setting values, verify that the setting is supported for the given rule type and that the API response reflects the requested value. If the API response returns sanitized or modified values that differ from the request, use the API-provided values in Terraform to ensure consistency.',
        properties: {
          add_headers: {
            type: 'object',
            description:
              'Add custom headers to allowed requests as key-value pairs. Use header names as keys that map to arrays of header values. Settable only for `http` rules with the action set to `allow`.',
            additionalProperties: true,
          },
          allow_child_bypass: {
            type: 'boolean',
            description:
              'Set to enable MSP children to bypass this rule. Only parent MSP accounts can set this. this rule. Settable for all types of rules.',
          },
          audit_ssh: {
            type: 'object',
            description:
              'Define the settings for the Audit SSH action. Settable only for `l4` rules with `audit_ssh` action.',
            properties: {
              command_logging: {
                type: 'boolean',
                description: 'Enable SSH command logging.',
              },
            },
          },
          biso_admin_controls: {
            type: 'object',
            description:
              'Configure browser isolation behavior. Settable only for `http` rules with the action set to `isolate`.',
            properties: {
              copy: {
                type: 'string',
                description:
                  'Configure copy behavior. If set to remote_only, users cannot copy isolated content from the remote browser to the local clipboard. If this field is absent, copying remains enabled. Applies only when version == "v2".',
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
                  'Configure download behavior. When set to remote_only, users can view downloads but cannot save them. Applies only when version == "v2".',
                enum: ['enabled', 'disabled', 'remote_only'],
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
                  'Configure keyboard usage behavior. If this field is absent, keyboard usage remains enabled. Applies only when version == "v2".',
                enum: ['enabled', 'disabled'],
              },
              paste: {
                type: 'string',
                description:
                  'Configure paste behavior. If set to remote_only, users cannot paste content from the local clipboard into isolated pages. If this field is absent, pasting remains enabled. Applies only when version == "v2".',
                enum: ['enabled', 'disabled', 'remote_only'],
              },
              printing: {
                type: 'string',
                description:
                  'Configure print behavior. Default, Printing is enabled. Applies only when version == "v2".',
                enum: ['enabled', 'disabled'],
              },
              upload: {
                type: 'string',
                description:
                  'Configure upload behavior. If this field is absent, uploading remains enabled. Applies only when version == "v2".',
                enum: ['enabled', 'disabled'],
              },
              version: {
                type: 'string',
                description: 'Indicate which version of the browser isolation controls should apply.',
                enum: ['v1', 'v2'],
              },
            },
          },
          block_page: {
            type: 'object',
            description:
              'Configure custom block page settings. If missing or null, use the account settings. Settable only for `http` rules with the action set to `block`.',
            properties: {
              target_uri: {
                type: 'string',
                description: 'Specify the URI to which the user is redirected.',
              },
              include_context: {
                type: 'boolean',
                description: 'Specify whether to pass the context information as query parameters.',
              },
            },
            required: ['target_uri'],
          },
          block_page_enabled: {
            type: 'boolean',
            description: 'Enable the custom block page. Settable only for `dns` rules with action `block`.',
          },
          block_reason: {
            type: 'string',
            description:
              'Explain why the rule blocks the request. The custom block page shows this text (if enabled). Settable only for `dns`, `l4`, and `http` rules when the action set to `block`.',
          },
          bypass_parent_rule: {
            type: 'boolean',
            description:
              "Set to enable MSP accounts to bypass their parent's rules. Only MSP child accounts can set this. Settable for all types of rules.",
          },
          check_session: {
            type: 'object',
            description:
              'Configure session check behavior. Settable only for `l4` and `http` rules with the action set to `allow`.',
            properties: {
              duration: {
                type: 'string',
                description:
                  'Sets the required session freshness threshold. The API returns a normalized version of this value.',
              },
              enforce: {
                type: 'boolean',
                description: 'Enable session enforcement.',
              },
            },
          },
          dns_resolvers: {
            type: 'object',
            description:
              "Configure custom resolvers to route queries that match the resolver policy. Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally' settings. DNS queries get routed to the address closest to their origin. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.",
            properties: {
              ipv4: {
                type: 'array',
                items: {
                  $ref: '#/$defs/dns_resolver_settings_v4',
                },
              },
              ipv6: {
                type: 'array',
                items: {
                  $ref: '#/$defs/dns_resolver_settings_v6',
                },
              },
            },
          },
          egress: {
            type: 'object',
            description:
              'Configure how Gateway Proxy traffic egresses. You can enable this setting for rules with Egress actions and filters, or omit it to indicate local egress via WARP IPs. Settable only for `egress` rules.',
            properties: {
              ipv4: {
                type: 'string',
                description: 'Specify the IPv4 address to use for egress.',
              },
              ipv4_fallback: {
                type: 'string',
                description:
                  "Specify the fallback IPv4 address to use for egress when the primary IPv4 fails. Set '0.0.0.0' to indicate local egress via WARP IPs.",
              },
              ipv6: {
                type: 'string',
                description: 'Specify the IPv6 range to use for egress.',
              },
            },
          },
          ignore_cname_category_matches: {
            type: 'boolean',
            description:
              'Ignore category matches at CNAME domains in a response. When off, evaluate categories in this rule against all CNAME domain categories in the response. Settable only for `dns` and `dns_resolver` rules.',
          },
          insecure_disable_dnssec_validation: {
            type: 'boolean',
            description:
              'Specify whether to disable DNSSEC validation (for Allow actions) [INSECURE]. Settable only for `dns` rules.',
          },
          ip_categories: {
            type: 'boolean',
            description:
              'Enable IPs in DNS resolver category blocks. The system blocks only domain name categories unless you enable this setting. Settable only for `dns` and `dns_resolver` rules.',
          },
          ip_indicator_feeds: {
            type: 'boolean',
            description:
              'Indicates whether to include IPs in DNS resolver indicator feed blocks. Default, indicator feeds block only domain names. Settable only for `dns` and `dns_resolver` rules.',
          },
          l4override: {
            type: 'object',
            description:
              'Send matching traffic to the supplied destination IP address and port. Settable only for `l4` rules with the action set to `l4_override`.',
            properties: {
              ip: {
                type: 'string',
                description: 'Defines the IPv4 or IPv6 address.',
              },
              port: {
                type: 'integer',
                description: 'Defines a port number to use for TCP/UDP overrides.',
              },
            },
          },
          notification_settings: {
            type: 'object',
            description:
              "Configure a notification to display on the user's device when this rule matched. Settable for all types of rules with the action set to `block`.",
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Enable notification.',
              },
              include_context: {
                type: 'boolean',
                description: 'Indicates whether to pass the context information as query parameters.',
              },
              msg: {
                type: 'string',
                description: 'Customize the message shown in the notification.',
              },
              support_url: {
                type: 'string',
                description:
                  'Defines an optional URL to direct users to additional information. If unset, the notification opens a block page.',
              },
            },
          },
          override_host: {
            type: 'string',
            description:
              'Defines a hostname for override, for the matching DNS queries. Settable only for `dns` rules with the action set to `override`.',
          },
          override_ips: {
            type: 'array',
            description:
              'Defines a an IP or set of IPs for overriding matched DNS queries. Settable only for `dns` rules with the action set to `override`.',
            items: {
              type: 'string',
              description: 'Defines the IPv4 or IPv6 address.',
            },
          },
          payload_log: {
            type: 'object',
            description: 'Configure DLP payload logging. Settable only for `http` rules.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Enable DLP payload logging for this rule.',
              },
            },
          },
          quarantine: {
            type: 'object',
            description: 'Configure settings that apply to quarantine rules. Settable only for `http` rules.',
            properties: {
              file_types: {
                type: 'array',
                description: 'Specify the types of files to sandbox.',
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
          },
          redirect: {
            type: 'object',
            description:
              'Apply settings to redirect rules. Settable only for `http` rules with the action set to `redirect`.',
            properties: {
              target_uri: {
                type: 'string',
                description: 'Specify the URI to which the user is redirected.',
              },
              include_context: {
                type: 'boolean',
                description: 'Specify whether to pass the context information as query parameters.',
              },
              preserve_path_and_query: {
                type: 'boolean',
                description:
                  'Specify whether to append the path and query parameters from the original request to target_uri.',
              },
            },
            required: ['target_uri'],
          },
          resolve_dns_internally: {
            type: 'object',
            description:
              "Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input. Not used when 'dns_resolvers' is specified or 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.",
            properties: {
              fallback: {
                type: 'string',
                description:
                  "Specify the fallback behavior to apply when the internal DNS response code differs from 'NOERROR' or when the response data contains only CNAME records for 'A' or 'AAAA' queries.",
                enum: ['none', 'public_dns'],
              },
              view_id: {
                type: 'string',
                description: 'Specify the internal DNS view identifier to pass to the internal DNS service.',
              },
            },
          },
          resolve_dns_through_cloudflare: {
            type: 'boolean',
            description:
              "Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot set when 'dns_resolvers' specified or 'resolve_dns_internally' is set. Only valid when a rule's action set to 'resolve'. Settable only for `dns_resolver` rules.",
          },
          untrusted_cert: {
            type: 'object',
            description:
              'Configure behavior when an upstream certificate is invalid or an SSL error occurs. Settable only for `http` rules with the action set to `allow`.',
            properties: {
              action: {
                type: 'string',
                description:
                  'Defines the action performed when an untrusted certificate seen. The default action an error with HTTP code 526.',
                enum: ['pass_through', 'block', 'error'],
              },
            },
          },
        },
      },
      dns_resolver_settings_v4: {
        type: 'object',
        properties: {
          ip: {
            type: 'string',
            description: 'Specify the IPv4 address of the upstream resolver.',
          },
          port: {
            type: 'integer',
            description:
              'Specify a port number to use for the upstream resolver. Defaults to 53 if unspecified.',
          },
          route_through_private_network: {
            type: 'boolean',
            description:
              'Indicate whether to connect to this resolver over a private network. Must set when vnet_id set.',
          },
          vnet_id: {
            type: 'string',
            description:
              'Specify an optional virtual network for this resolver. Uses default virtual network id if omitted.',
          },
        },
        required: ['ip'],
      },
      dns_resolver_settings_v6: {
        type: 'object',
        properties: {
          ip: {
            type: 'string',
            description: 'Specify the IPv6 address of the upstream resolver.',
          },
          port: {
            type: 'integer',
            description:
              'Specify a port number to use for the upstream resolver. Defaults to 53 if unspecified.',
          },
          route_through_private_network: {
            type: 'boolean',
            description:
              'Indicate whether to connect to this resolver over a private network. Must set when vnet_id set.',
          },
          vnet_id: {
            type: 'string',
            description:
              'Specify an optional virtual network for this resolver. Uses default virtual network id if omitted.',
          },
        },
        required: ['ip'],
      },
      schedule: {
        type: 'object',
        description:
          'Defines the schedule for activating DNS policies. Settable only for `dns` and `dns_resolver` rules.',
        properties: {
          fri: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Fridays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Fridays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          mon: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Mondays, in the increasing order from 00:00-24:00(capped at maximum of 6 time splits). If this parameter omitted, the rule is deactivated on Mondays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          sat: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Saturdays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Saturdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          sun: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Sundays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Sundays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          thu: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Thursdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Thursdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          time_zone: {
            type: 'string',
            description:
              "Specify the time zone for rule evaluation. When a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway always uses the current time for that time zone. When this parameter is omitted, Gateway uses the time zone determined from the user's IP address. Colo time zone is used when the user's IP address does not resolve to a location.",
          },
          tue: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Tuesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Tuesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
          wed: {
            type: 'string',
            description:
              'Specify the time intervals when the rule is active on Wednesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Wednesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.rules.update(rule_id, body));
};

export default { metadata, tool, handler };
