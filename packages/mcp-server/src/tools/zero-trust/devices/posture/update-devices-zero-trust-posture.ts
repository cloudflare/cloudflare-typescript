// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_devices_zero_trust_posture',
  description: 'Updates a device posture rule.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'API UUID.',
      },
      name: {
        type: 'string',
        description: 'The name of the device posture rule.',
      },
      type: {
        type: 'string',
        description: 'The type of device posture rule.',
        enum: [
          'file',
          'application',
          'tanium',
          'gateway',
          'warp',
          'disk_encryption',
          'sentinelone',
          'carbonblack',
          'firewall',
          'os_version',
          'domain_joined',
          'client_certificate',
          'client_certificate_v2',
          'unique_client_id',
          'kolide',
          'tanium_s2s',
          'crowdstrike_s2s',
          'intune',
          'workspace_one',
          'sentinelone_s2s',
          'custom_s2s',
        ],
      },
      description: {
        type: 'string',
        description: 'The description of the device posture rule.',
      },
      expiration: {
        type: 'string',
        description:
          'Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.',
      },
      input: {
        anyOf: [
          {
            type: 'object',
            title: 'File Check',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating system',
                enum: ['windows', 'linux', 'mac'],
              },
              path: {
                type: 'string',
                description: 'File path.',
              },
              exists: {
                type: 'boolean',
                description: 'Whether or not file exists',
              },
              sha256: {
                type: 'string',
                description: 'SHA-256.',
              },
              thumbprint: {
                type: 'string',
                description: 'Signing certificate thumbprint.',
              },
            },
            required: ['operating_system', 'path'],
          },
          {
            type: 'object',
            title: 'Unique Client ID',
            properties: {
              id: {
                type: 'string',
                description: 'List ID.',
              },
              operating_system: {
                type: 'string',
                description: 'Operating System',
                enum: ['android', 'ios', 'chromeos'],
              },
            },
            required: ['id', 'operating_system'],
          },
          {
            type: 'object',
            title: 'Domain Joined',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating System',
                enum: ['windows'],
              },
              domain: {
                type: 'string',
                description: 'Domain',
              },
            },
            required: ['operating_system'],
          },
          {
            type: 'object',
            title: 'OS Version',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating System',
                enum: ['windows'],
              },
              operator: {
                type: 'string',
                description: 'operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              version: {
                type: 'string',
                description: 'Version of OS',
              },
              os_distro_name: {
                type: 'string',
                description: 'Operating System Distribution Name (linux only)',
              },
              os_distro_revision: {
                type: 'string',
                description: 'Version of OS Distribution (linux only)',
              },
              os_version_extra: {
                type: 'string',
                description:
                  'Additional version data. For Mac or iOS, the Product Version Extra. For Linux, the kernel release version. (Mac, iOS, and Linux only)',
              },
            },
            required: ['operating_system', 'operator', 'version'],
          },
          {
            type: 'object',
            title: 'Firewall',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Enabled',
              },
              operating_system: {
                type: 'string',
                description: 'Operating System',
                enum: ['windows', 'mac'],
              },
            },
            required: ['enabled', 'operating_system'],
          },
          {
            type: 'object',
            title: 'Sentinelone',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating system',
                enum: ['windows', 'linux', 'mac'],
              },
              path: {
                type: 'string',
                description: 'File path.',
              },
              sha256: {
                type: 'string',
                description: 'SHA-256.',
              },
              thumbprint: {
                type: 'string',
                description: 'Signing certificate thumbprint.',
              },
            },
            required: ['operating_system', 'path'],
          },
          {
            type: 'object',
            title: 'Carbonblack',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating system',
                enum: ['windows', 'linux', 'mac'],
              },
              path: {
                type: 'string',
                description: 'File path.',
              },
              sha256: {
                type: 'string',
                description: 'SHA-256.',
              },
              thumbprint: {
                type: 'string',
                description: 'Signing certificate thumbprint.',
              },
            },
            required: ['operating_system', 'path'],
          },
          {
            type: 'object',
            title: 'Disk Encryption',
            properties: {
              checkDisks: {
                type: 'array',
                description: 'List of volume names to be checked for encryption.',
                items: {
                  type: 'string',
                },
              },
              requireAll: {
                type: 'boolean',
                description: 'Whether to check all disks for encryption.',
              },
            },
            required: [],
          },
          {
            type: 'object',
            title: 'Application',
            properties: {
              operating_system: {
                type: 'string',
                description: 'Operating system',
                enum: ['windows', 'linux', 'mac'],
              },
              path: {
                type: 'string',
                description: 'Path for the application.',
              },
              sha256: {
                type: 'string',
                description: 'SHA-256.',
              },
              thumbprint: {
                type: 'string',
                description: 'Signing certificate thumbprint.',
              },
            },
            required: ['operating_system', 'path'],
          },
          {
            type: 'object',
            title: 'Client Certificate',
            properties: {
              certificate_id: {
                type: 'string',
                description: 'UUID of Cloudflare managed certificate.',
              },
              cn: {
                type: 'string',
                description: 'Common Name that is protected by the certificate',
              },
            },
            required: ['certificate_id', 'cn'],
          },
          {
            type: 'object',
            title: 'Client Certificate V2',
            properties: {
              certificate_id: {
                type: 'string',
                description: 'UUID of Cloudflare managed certificate.',
              },
              check_private_key: {
                type: 'boolean',
                description:
                  'Confirm the certificate was not imported from another device. We recommend keeping this enabled unless the certificate was deployed without a private key.',
              },
              operating_system: {
                type: 'string',
                description: 'Operating system',
                enum: ['windows', 'linux', 'mac'],
              },
              cn: {
                type: 'string',
                description:
                  'Common Name that is protected by the client certificate. This may include one or more variables in the ${ } notation. Only ${serial_number} and ${hostname} are valid variables.',
              },
              extended_key_usage: {
                type: 'array',
                description:
                  'List of values indicating purposes for which the certificate public key can be used',
                items: {
                  type: 'string',
                  enum: ['clientAuth', 'emailProtection'],
                },
              },
              locations: {
                type: 'object',
                properties: {
                  paths: {
                    type: 'array',
                    description: 'List of paths to check for client certificate on linux.',
                    items: {
                      type: 'string',
                    },
                  },
                  trust_stores: {
                    type: 'array',
                    description: 'List of trust stores to check for client certificate.',
                    items: {
                      type: 'string',
                      enum: ['system', 'user'],
                    },
                  },
                },
                required: [],
              },
            },
            required: ['certificate_id', 'check_private_key', 'operating_system'],
          },
          {
            type: 'object',
            title: 'Workspace One S2S Input',
            properties: {
              compliance_status: {
                type: 'string',
                description: 'Compliance Status',
                enum: ['compliant', 'noncompliant', 'unknown'],
              },
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
            },
            required: ['compliance_status', 'connection_id'],
          },
          {
            type: 'object',
            title: 'Crowdstrike S2S Input',
            properties: {
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
              last_seen: {
                type: 'string',
                description: 'For more details on last seen, please refer to the Crowdstrike documentation.',
              },
              operator: {
                type: 'string',
                description: 'operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              os: {
                type: 'string',
                description: 'Os Version',
              },
              overall: {
                type: 'string',
                description: 'overall',
              },
              sensor_config: {
                type: 'string',
                description: 'SensorConfig',
              },
              state: {
                type: 'string',
                description: 'For more details on state, please refer to the Crowdstrike documentation.',
                enum: ['online', 'offline', 'unknown'],
              },
              version: {
                type: 'string',
                description: 'Version',
              },
              versionOperator: {
                type: 'string',
                description: 'Version Operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
            },
            required: ['connection_id'],
          },
          {
            type: 'object',
            title: 'Intune S2S Input',
            properties: {
              compliance_status: {
                type: 'string',
                description: 'Compliance Status',
                enum: ['compliant', 'noncompliant', 'unknown', 'notapplicable', 'ingraceperiod', 'error'],
              },
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
            },
            required: ['compliance_status', 'connection_id'],
          },
          {
            type: 'object',
            title: 'Kolide S2S Input',
            properties: {
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
              countOperator: {
                type: 'string',
                description: 'Count Operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              issue_count: {
                type: 'string',
                description: 'The Number of Issues.',
              },
            },
            required: ['connection_id', 'countOperator', 'issue_count'],
          },
          {
            type: 'object',
            title: 'Tanium S2S Input',
            properties: {
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
              eid_last_seen: {
                type: 'string',
                description: 'For more details on eid last seen, refer to the Tanium documentation.',
              },
              operator: {
                type: 'string',
                description: 'Operator to evaluate risk_level or eid_last_seen.',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              risk_level: {
                type: 'string',
                description: 'For more details on risk level, refer to the Tanium documentation.',
                enum: ['low', 'medium', 'high', 'critical'],
              },
              scoreOperator: {
                type: 'string',
                description: 'Score Operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              total_score: {
                type: 'number',
                description: 'For more details on total score, refer to the Tanium documentation.',
              },
            },
            required: ['connection_id'],
          },
          {
            type: 'object',
            title: 'SentinelOne S2S Input',
            properties: {
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
              active_threats: {
                type: 'number',
                description: 'The Number of active threats.',
              },
              infected: {
                type: 'boolean',
                description: 'Whether device is infected.',
              },
              is_active: {
                type: 'boolean',
                description: 'Whether device is active.',
              },
              network_status: {
                type: 'string',
                description: 'Network status of device.',
                enum: ['connected', 'disconnected', 'disconnecting', 'connecting'],
              },
              operational_state: {
                type: 'string',
                description: 'Agent operational state.',
                enum: [
                  'na',
                  'partially_disabled',
                  'auto_fully_disabled',
                  'fully_disabled',
                  'auto_partially_disabled',
                  'disabled_error',
                  'db_corruption',
                ],
              },
              operator: {
                type: 'string',
                description: 'operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
            },
            required: ['connection_id'],
          },
          {
            type: 'object',
            title: 'Custom Device Posture Integration Input',
            properties: {
              connection_id: {
                type: 'string',
                description: 'Posture Integration ID.',
              },
              operator: {
                type: 'string',
                description: 'operator',
                enum: ['<', '<=', '>', '>=', '=='],
              },
              score: {
                type: 'number',
                description:
                  'A value between 0-100 assigned to devices set by the 3rd party posture provider.',
              },
            },
            required: ['connection_id', 'operator', 'score'],
          },
        ],
        description: 'The value to be checked against.',
      },
      match: {
        type: 'array',
        description: 'The conditions that the client must match to run the rule.',
        items: {
          type: 'object',
          properties: {
            platform: {
              type: 'string',
              enum: ['windows', 'mac', 'linux', 'android', 'ios'],
            },
          },
          required: [],
        },
      },
      schedule: {
        type: 'string',
        description:
          'Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.zeroTrust.devices.posture.update(rule_id, body);
};

export default { metadata, tool, handler };
