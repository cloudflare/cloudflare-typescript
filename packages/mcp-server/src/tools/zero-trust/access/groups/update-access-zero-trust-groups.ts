// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.groups',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_access_zero_trust_groups',
  description: 'Updates a configured Access group.',
  inputSchema: {
    type: 'object',
    properties: {
      group_id: {
        type: 'string',
        description: 'UUID.',
      },
      include: {
        type: 'array',
        description:
          'Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Access groups',
              description: 'Matches an Access group.',
              properties: {
                group: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of a previously created Access group.',
                    },
                  },
                  required: ['id'],
                },
              },
              required: ['group'],
            },
            {
              type: 'object',
              title: 'Any Valid Service Token',
              description: 'Matches any valid Access Service Token',
              properties: {
                any_valid_service_token: {
                  type: 'object',
                  description: 'An empty object which matches on all service tokens.',
                  properties: {},
                  required: [],
                },
              },
              required: ['any_valid_service_token'],
            },
            {
              type: 'object',
              title: 'Authentication Context',
              description: 'Matches an Azure Authentication Context.\nRequires an Azure identity provider.',
              properties: {
                auth_context: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of an Authentication context.',
                    },
                    ac_id: {
                      type: 'string',
                      description: 'The ACID of an Authentication context.',
                    },
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your Azure identity provider.',
                    },
                  },
                  required: ['id', 'ac_id', 'identity_provider_id'],
                },
              },
              required: ['auth_context'],
            },
            {
              type: 'object',
              title: 'Authentication method',
              description: 'Enforce different MFA options',
              properties: {
                auth_method: {
                  type: 'object',
                  properties: {
                    auth_method: {
                      type: 'string',
                      description:
                        'The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.',
                    },
                  },
                  required: ['auth_method'],
                },
              },
              required: ['auth_method'],
            },
            {
              type: 'object',
              title: 'Azure group',
              description: 'Matches an Azure group.\nRequires an Azure identity provider.',
              properties: {
                azureAD: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of an Azure group.',
                    },
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your Azure identity provider.',
                    },
                  },
                  required: ['id', 'identity_provider_id'],
                },
              },
              required: ['azureAD'],
            },
            {
              type: 'object',
              title: 'Valid certificate',
              description: 'Matches any valid client certificate.',
              properties: {
                certificate: {
                  type: 'object',
                  properties: {},
                  required: [],
                },
              },
              required: ['certificate'],
            },
            {
              type: 'object',
              title: 'Common Name',
              description: 'Matches a specific common name.',
              properties: {
                common_name: {
                  type: 'object',
                  properties: {
                    common_name: {
                      type: 'string',
                      description: 'The common name to match.',
                    },
                  },
                  required: ['common_name'],
                },
              },
              required: ['common_name'],
            },
            {
              type: 'object',
              title: 'Country',
              description: 'Matches a specific country',
              properties: {
                geo: {
                  type: 'object',
                  properties: {
                    country_code: {
                      type: 'string',
                      description: 'The country code that should be matched.',
                    },
                  },
                  required: ['country_code'],
                },
              },
              required: ['geo'],
            },
            {
              type: 'object',
              title: 'Device Posture',
              description: 'Enforces a device posture rule has run successfully',
              properties: {
                device_posture: {
                  type: 'object',
                  properties: {
                    integration_uid: {
                      type: 'string',
                      description: 'The ID of a device posture integration.',
                    },
                  },
                  required: ['integration_uid'],
                },
              },
              required: ['device_posture'],
            },
            {
              type: 'object',
              title: 'Email domain',
              description: 'Match an entire email domain.',
              properties: {
                email_domain: {
                  type: 'object',
                  properties: {
                    domain: {
                      type: 'string',
                      description: 'The email domain to match.',
                    },
                  },
                  required: ['domain'],
                },
              },
              required: ['email_domain'],
            },
            {
              type: 'object',
              title: 'Email list',
              description: 'Matches an email address from a list.',
              properties: {
                email_list: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of a previously created email list.',
                    },
                  },
                  required: ['id'],
                },
              },
              required: ['email_list'],
            },
            {
              type: 'object',
              title: 'Email',
              description: 'Matches a specific email.',
              properties: {
                email: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      description: 'The email of the user.',
                    },
                  },
                  required: ['email'],
                },
              },
              required: ['email'],
            },
            {
              type: 'object',
              title: 'Everyone',
              description: 'Matches everyone.',
              properties: {
                everyone: {
                  type: 'object',
                  description: 'An empty object which matches on all users.',
                  properties: {},
                  required: [],
                },
              },
              required: ['everyone'],
            },
            {
              type: 'object',
              title: 'External Evaluation',
              description: 'Create Allow or Block policies which evaluate the user based on custom criteria.',
              properties: {
                external_evaluation: {
                  type: 'object',
                  properties: {
                    evaluate_url: {
                      type: 'string',
                      description: 'The API endpoint containing your business logic.',
                    },
                    keys_url: {
                      type: 'string',
                      description:
                        'The API endpoint containing the key that Access uses to verify that the response came from your API.',
                    },
                  },
                  required: ['evaluate_url', 'keys_url'],
                },
              },
              required: ['external_evaluation'],
            },
            {
              type: 'object',
              title: 'Github organization',
              description: 'Matches a Github organization.\nRequires a Github identity provider.',
              properties: {
                'github-organization': {
                  type: 'object',
                  properties: {
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your Github identity provider.',
                    },
                    name: {
                      type: 'string',
                      description: 'The name of the organization.',
                    },
                    team: {
                      type: 'string',
                      description: 'The name of the team',
                    },
                  },
                  required: ['identity_provider_id', 'name'],
                },
              },
              required: ['github-organization'],
            },
            {
              type: 'object',
              title: 'Google Workspace group',
              description:
                'Matches a group in Google Workspace.\nRequires a Google Workspace identity provider.',
              properties: {
                gsuite: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      description: 'The email of the Google Workspace group.',
                    },
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your Google Workspace identity provider.',
                    },
                  },
                  required: ['email', 'identity_provider_id'],
                },
              },
              required: ['gsuite'],
            },
            {
              type: 'object',
              title: 'Login Method',
              description: 'Matches a specific identity provider id.',
              properties: {
                login_method: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of an identity provider.',
                    },
                  },
                  required: ['id'],
                },
              },
              required: ['login_method'],
            },
            {
              type: 'object',
              title: 'IP list',
              description: 'Matches an IP address from a list.',
              properties: {
                ip_list: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The ID of a previously created IP list.',
                    },
                  },
                  required: ['id'],
                },
              },
              required: ['ip_list'],
            },
            {
              type: 'object',
              title: 'IP ranges',
              description: 'Matches an IP address block.',
              properties: {
                ip: {
                  type: 'object',
                  properties: {
                    ip: {
                      type: 'string',
                      description: 'An IPv4 or IPv6 CIDR block.',
                    },
                  },
                  required: ['ip'],
                },
              },
              required: ['ip'],
            },
            {
              type: 'object',
              title: 'Okta group',
              description: 'Matches an Okta group.\nRequires an Okta identity provider.',
              properties: {
                okta: {
                  type: 'object',
                  properties: {
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your Okta identity provider.',
                    },
                    name: {
                      type: 'string',
                      description: 'The name of the Okta group.',
                    },
                  },
                  required: ['identity_provider_id', 'name'],
                },
              },
              required: ['okta'],
            },
            {
              type: 'object',
              title: 'SAML group',
              description: 'Matches a SAML group.\nRequires a SAML identity provider.',
              properties: {
                saml: {
                  type: 'object',
                  properties: {
                    attribute_name: {
                      type: 'string',
                      description: 'The name of the SAML attribute.',
                    },
                    attribute_value: {
                      type: 'string',
                      description: 'The SAML attribute value to look for.',
                    },
                    identity_provider_id: {
                      type: 'string',
                      description: 'The ID of your SAML identity provider.',
                    },
                  },
                  required: ['attribute_name', 'attribute_value', 'identity_provider_id'],
                },
              },
              required: ['saml'],
            },
            {
              type: 'object',
              title: 'Service Token',
              description: 'Matches a specific Access Service Token',
              properties: {
                service_token: {
                  type: 'object',
                  properties: {
                    token_id: {
                      type: 'string',
                      description: 'The ID of a Service Token.',
                    },
                  },
                  required: ['token_id'],
                },
              },
              required: ['service_token'],
            },
          ],
          description: 'Matches an Access group.',
        },
      },
      name: {
        type: 'string',
        description: 'The name of the Access group.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      exclude: {
        type: 'array',
        description:
          'Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.',
        items: {
          $ref: '#/properties/include/items',
        },
      },
      is_default: {
        type: 'boolean',
        description: 'Whether this is the default group',
      },
      require: {
        type: 'array',
        description:
          'Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.',
        items: {
          $ref: '#/properties/include/items',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { group_id, ...body } = args;
  return client.zeroTrust.access.groups.update(group_id, body);
};

export default { metadata, tool, handler };
