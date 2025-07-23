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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatches the current Zero Trust account configuration. This endpoint can update a single subcollection of settings such as `antivirus`, `tls_decrypt`, `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or `certificate`, without updating the entire configuration object. Returns an error if any collection of settings is not properly configured.",
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
        description: 'Account settings',
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
              'Certificate settings for Gateway TLS interception. If not specified, the Cloudflare Root CA will be used.',
            properties: {
              id: {
                type: 'string',
                description:
                  "UUID of certificate to be used for interception. Certificate must be available (previously called 'active') on the edge. A nil UUID will indicate the Cloudflare Root CA should be used.",
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
            description: 'Setting to enable host selector in egress policies.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Enable filtering via hosts for egress policies.',
              },
            },
          },
          protocol_detection: {
            $ref: '#/$defs/protocol_detection',
          },
          sandbox: {
            type: 'object',
            description: 'Sandbox settings.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Enable sandbox.',
              },
              fallback_action: {
                type: 'string',
                description: 'Action to take when the file cannot be scanned.',
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
        description: 'Activity log settings.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Enable activity logging.',
          },
        },
      },
      anti_virus_settings: {
        type: 'object',
        description: 'Anti-virus settings.',
        properties: {
          enabled_download_phase: {
            type: 'boolean',
            description: 'Enable anti-virus scanning on downloads.',
          },
          enabled_upload_phase: {
            type: 'boolean',
            description: 'Enable anti-virus scanning on uploads.',
          },
          fail_closed: {
            type: 'boolean',
            description: 'Block requests for files that cannot be scanned.',
          },
          notification_settings: {
            $ref: '#/$defs/notification_settings',
          },
        },
      },
      notification_settings: {
        type: 'object',
        description:
          "Configure a message to display on the user's device when an antivirus search is performed.",
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Set notification on',
          },
          include_context: {
            type: 'boolean',
            description: 'If true, context information will be passed as query parameters',
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
      },
      block_page_settings: {
        type: 'object',
        description: 'Block page layout settings.',
        properties: {
          background_color: {
            type: 'string',
            description: 'If mode is customized_block_page: block page background color in #rrggbb format.',
          },
          enabled: {
            type: 'boolean',
            description: 'Enable only cipher suites and TLS versions compliant with FIPS 140-2.',
          },
          footer_text: {
            type: 'string',
            description: 'If mode is customized_block_page: block page footer text.',
          },
          header_text: {
            type: 'string',
            description: 'If mode is customized_block_page: block page header text.',
          },
          include_context: {
            type: 'boolean',
            description:
              'If mode is redirect_uri: when enabled, context will be appended to target_uri as query parameters.',
          },
          logo_path: {
            type: 'string',
            description: 'If mode is customized_block_page: full URL to the logo file.',
          },
          mailto_address: {
            type: 'string',
            description: 'If mode is customized_block_page: admin email for users to contact.',
          },
          mailto_subject: {
            type: 'string',
            description: 'If mode is customized_block_page: subject line for emails created from block page.',
          },
          mode: {
            type: 'string',
            description:
              'Controls whether the user is redirected to a Cloudflare-hosted block page or to a customer-provided URI.',
            enum: ['customized_block_page', 'redirect_uri'],
          },
          name: {
            type: 'string',
            description: 'If mode is customized_block_page: block page title.',
          },
          read_only: {
            type: 'boolean',
            description:
              'This setting was shared via the Orgs API and cannot be edited by the current account',
          },
          source_account: {
            type: 'string',
            description: 'Account tag of account that shared this setting',
          },
          suppress_footer: {
            type: 'boolean',
            description:
              'If mode is customized_block_page: suppress detailed info at the bottom of the block page.',
          },
          target_uri: {
            type: 'string',
            description: 'If mode is redirect_uri: URI to which the user should be redirected.',
          },
        },
      },
      body_scanning_settings: {
        type: 'object',
        description: 'DLP body scanning settings.',
        properties: {
          inspection_mode: {
            type: 'string',
            description: 'Set the inspection mode to either `deep` or `shallow`.',
          },
        },
      },
      browser_isolation_settings: {
        type: 'object',
        description: 'Browser isolation settings.',
        properties: {
          non_identity_enabled: {
            type: 'boolean',
            description: 'Enable non-identity onramp support for Browser Isolation.',
          },
          url_browser_isolation_enabled: {
            type: 'boolean',
            description: 'Enable Clientless Browser Isolation.',
          },
        },
      },
      custom_certificate_settings: {
        type: 'object',
        description: 'Custom certificate settings for BYO-PKI. (deprecated and replaced by `certificate`)',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Enable use of custom certificate authority for signing Gateway traffic.',
          },
          id: {
            type: 'string',
            description: 'UUID of certificate (ID from MTLS certificate store).',
          },
          binding_status: {
            type: 'string',
            description: 'Certificate status (internal).',
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
        description: 'Extended e-mail matching settings.',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              'Enable matching all variants of user emails (with + or . modifiers) used as criteria in Firewall policies.',
          },
          read_only: {
            type: 'boolean',
            description:
              'This setting was shared via the Orgs API and cannot be edited by the current account',
          },
          source_account: {
            type: 'string',
            description: 'Account tag of account that shared this setting',
          },
        },
      },
      fips_settings: {
        type: 'object',
        description: 'FIPS settings.',
        properties: {
          tls: {
            type: 'boolean',
            description: 'Enable only cipher suites and TLS versions compliant with FIPS 140-2.',
          },
        },
      },
      protocol_detection: {
        type: 'object',
        description: 'Protocol Detection settings.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Enable detecting protocol on initial bytes of client traffic.',
          },
        },
      },
      tls_settings: {
        type: 'object',
        description: 'TLS interception settings.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Enable inspecting encrypted HTTP traffic.',
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
