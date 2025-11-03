// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/gateway/configuration',
  operationId: 'zero-trust-accounts-patch-zero-trust-account-configuration',
};

export const tool: Tool = {
  name: 'edit_gateway_zero_trust_configurations',
  description:
    'Update (PATCH) a single subcollection of settings such as `antivirus`, `tls_decrypt`, `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or `certificate` without updating the entire configuration object. This endpoint returns an error if any settings collection lacks proper configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      settings: {
        $ref: '#/$defs/gateway_configuration_settings',
      },
    },
    required: ['account_id'],
    $defs: {
      gateway_configuration_settings: {
        type: 'object',
        description: 'Specify account settings.',
        properties: {
          activity_log: {
            $ref: '#/$defs/activity_log_settings',
          },
          antivirus: {
            $ref: '#/$defs/anti_virus_settings',
          },
          block_page: {
            $ref: '#/$defs/block_page_settings',
          },
          body_scanning: {
            $ref: '#/$defs/body_scanning_settings',
          },
          browser_isolation: {
            $ref: '#/$defs/browser_isolation_settings',
          },
          certificate: {
            type: 'object',
            description:
              'Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception.',
            properties: {
              id: {
                type: 'string',
                description:
                  "Specify the UUID of the certificate used for interception. Ensure the certificate is available at the edge(previously called 'active'). A nil UUID directs Cloudflare to use the Root CA.",
              },
            },
            required: ['id'],
          },
          custom_certificate: {
            $ref: '#/$defs/custom_certificate_settings',
          },
          extended_email_matching: {
            $ref: '#/$defs/extended_email_matching',
          },
          fips: {
            $ref: '#/$defs/fips_settings',
          },
          host_selector: {
            type: 'object',
            description: 'Enable host selection in egress policies.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Specify whether to enable filtering via hosts for egress policies.',
              },
            },
          },
          inspection: {
            type: 'object',
            description: 'Define the proxy inspection mode.',
            properties: {
              mode: {
                type: 'string',
                description:
                  'Define the proxy inspection mode.   1. static: Gateway applies static inspection to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on TCP(443) and UDP(443).   2. dynamic: Gateway applies protocol detection to inspect HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect HTTPS traffic.',
                enum: ['static', 'dynamic'],
              },
            },
          },
          protocol_detection: {
            $ref: '#/$defs/protocol_detection',
          },
          sandbox: {
            type: 'object',
            description: 'Specify whether to enable the sandbox.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Specify whether to enable the sandbox.',
              },
              fallback_action: {
                type: 'string',
                description: 'Specify the action to take when the system cannot scan the file.',
                enum: ['allow', 'block'],
              },
            },
          },
          tls_decrypt: {
            $ref: '#/$defs/tls_settings',
          },
        },
      },
      activity_log_settings: {
        type: 'object',
        description: 'Specify activity log settings.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Specify whether to log activity.',
          },
        },
      },
      anti_virus_settings: {
        type: 'object',
        description: 'Specify anti-virus settings.',
        properties: {
          enabled_download_phase: {
            type: 'boolean',
            description: 'Specify whether to enable anti-virus scanning on downloads.',
          },
          enabled_upload_phase: {
            type: 'boolean',
            description: 'Specify whether to enable anti-virus scanning on uploads.',
          },
          fail_closed: {
            type: 'boolean',
            description: 'Specify whether to block requests for unscannable files.',
          },
          notification_settings: {
            $ref: '#/$defs/notification_settings',
          },
        },
      },
      notification_settings: {
        type: 'object',
        description: "Configure the message the user's device shows during an antivirus scan.",
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Specify whether to enable notifications.',
          },
          include_context: {
            type: 'boolean',
            description: 'Specify whether to include context information as query parameters.',
          },
          msg: {
            type: 'string',
            description: 'Specify the message to show in the notification.',
          },
          support_url: {
            type: 'string',
            description:
              'Specify a URL that directs users to more information. If unset, the notification opens a block page.',
          },
        },
      },
      block_page_settings: {
        type: 'object',
        description: 'Specify block page layout settings.',
        properties: {
          background_color: {
            type: 'string',
            description:
              'Specify the block page background color in `#rrggbb` format when the mode is customized_block_page.',
          },
          enabled: {
            type: 'boolean',
            description: 'Specify whether to enable the custom block page.',
          },
          footer_text: {
            type: 'string',
            description: 'Specify the block page footer text when the mode is customized_block_page.',
          },
          header_text: {
            type: 'string',
            description: 'Specify the block page header text when the mode is customized_block_page.',
          },
          include_context: {
            type: 'boolean',
            description:
              'Specify whether to append context to target_uri as query parameters. This applies only when the mode is redirect_uri.',
          },
          logo_path: {
            type: 'string',
            description: 'Specify the full URL to the logo file when the mode is customized_block_page.',
          },
          mailto_address: {
            type: 'string',
            description:
              'Specify the admin email for users to contact when the mode is customized_block_page.',
          },
          mailto_subject: {
            type: 'string',
            description:
              'Specify the subject line for emails created from the block page when the mode is customized_block_page.',
          },
          mode: {
            type: 'string',
            description:
              'Specify whether to redirect users to a Cloudflare-hosted block page or a customer-provided URI.',
            enum: ['', 'customized_block_page', 'redirect_uri'],
          },
          name: {
            type: 'string',
            description: 'Specify the block page title when the mode is customized_block_page.',
          },
          read_only: {
            type: 'boolean',
            description:
              'Indicate that this setting was shared via the Orgs API and read only for the current account.',
          },
          source_account: {
            type: 'string',
            description: 'Indicate the account tag of the account that shared this setting.',
          },
          suppress_footer: {
            type: 'boolean',
            description:
              'Specify whether to suppress detailed information at the bottom of the block page when the mode is customized_block_page.',
          },
          target_uri: {
            type: 'string',
            description: 'Specify the URI to redirect users to when the mode is redirect_uri.',
          },
          version: {
            type: 'integer',
            description: 'Indicate the version number of the setting.',
          },
        },
      },
      body_scanning_settings: {
        type: 'object',
        description: 'Specify the DLP inspection mode.',
        properties: {
          inspection_mode: {
            type: 'string',
            description: 'Specify the inspection mode as either `deep` or `shallow`.',
            enum: ['deep', 'shallow'],
          },
        },
      },
      browser_isolation_settings: {
        type: 'object',
        description: 'Specify Clientless Browser Isolation settings.',
        properties: {
          non_identity_enabled: {
            type: 'boolean',
            description: 'Specify whether to enable non-identity onramp support for Browser Isolation.',
          },
          url_browser_isolation_enabled: {
            type: 'boolean',
            description: 'Specify whether to enable Clientless Browser Isolation.',
          },
        },
      },
      custom_certificate_settings: {
        type: 'object',
        description:
          'Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead.',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              'Specify whether to enable a custom certificate authority for signing Gateway traffic.',
          },
          id: {
            type: 'string',
            description: 'Specify the UUID of the certificate (ID from MTLS certificate store).',
          },
          binding_status: {
            type: 'string',
            description: 'Indicate the internal certificate status.',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['enabled'],
      },
      extended_email_matching: {
        type: 'object',
        description:
          'Configures user email settings for firewall policies. When you enable this, the system standardizes email addresses in the identity portion of the rule to match extended email variants in firewall policies. When you disable this setting, the system matches email addresses exactly as you provide them. Enable this setting if your email uses `.` or `+` modifiers.',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              'Specify whether to match all variants of user emails (with + or . modifiers) used as criteria in Firewall policies.',
          },
          read_only: {
            type: 'boolean',
            description:
              'Indicate that this setting was shared via the Orgs API and read only for the current account.',
          },
          source_account: {
            type: 'string',
            description: 'Indicate the account tag of the account that shared this setting.',
          },
          version: {
            type: 'integer',
            description: 'Indicate the version number of the setting.',
          },
        },
      },
      fips_settings: {
        type: 'object',
        description: 'Specify FIPS settings.',
        properties: {
          tls: {
            type: 'boolean',
            description: 'Enforce cipher suites and TLS versions compliant with FIPS 140-2.',
          },
        },
      },
      protocol_detection: {
        type: 'object',
        description: 'Specify whether to detect protocols from the initial bytes of client traffic.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Specify whether to detect protocols from the initial bytes of client traffic.',
          },
        },
      },
      tls_settings: {
        type: 'object',
        description: 'Specify whether to inspect encrypted HTTP traffic.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Specify whether to inspect encrypted HTTP traffic.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.configurations.edit(body));
};

export default { metadata, tool, handler };
