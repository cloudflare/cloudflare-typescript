// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/access/policies/{policy_id}',
  operationId: 'access-policies-update-an-access-reusable-policy',
};

export const tool: Tool = {
  name: 'update_access_zero_trust_policies',
  description: 'Updates a Access reusable policy.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      policy_id: {
        type: 'string',
        description: 'The UUID of the policy',
      },
      decision: {
        $ref: '#/$defs/decision',
      },
      include: {
        type: 'array',
        description:
          'Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.',
        items: {
          $ref: '#/$defs/access_rule',
        },
      },
      name: {
        type: 'string',
        description: 'The name of the Access policy.',
      },
      approval_groups: {
        type: 'array',
        description: 'Administrators who can approve a temporary authentication request.',
        items: {
          $ref: '#/$defs/approval_group',
        },
      },
      approval_required: {
        type: 'boolean',
        description:
          'Requires the user to request access from an administrator at the start of each session.',
      },
      exclude: {
        type: 'array',
        description:
          'Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.',
        items: {
          $ref: '#/$defs/access_rule',
        },
      },
      isolation_required: {
        type: 'boolean',
        description:
          "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
      },
      purpose_justification_prompt: {
        type: 'string',
        description: 'A custom message that will appear on the purpose justification screen.',
      },
      purpose_justification_required: {
        type: 'boolean',
        description: 'Require users to enter a justification when they log in to the application.',
      },
      require: {
        type: 'array',
        description:
          'Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.',
        items: {
          $ref: '#/$defs/access_rule',
        },
      },
      session_duration: {
        type: 'string',
        description:
          'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
      },
    },
    $defs: {
      decision: {
        type: 'string',
        description:
          'The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.',
        enum: ['allow', 'deny', 'non_identity', 'bypass'],
      },
      access_rule: {
        anyOf: [
          {
            $ref: '#/$defs/group_rule',
          },
          {
            $ref: '#/$defs/any_valid_service_token_rule',
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
            $ref: '#/$defs/authentication_method_rule',
          },
          {
            $ref: '#/$defs/azure_group_rule',
          },
          {
            $ref: '#/$defs/certificate_rule',
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
            $ref: '#/$defs/country_rule',
          },
          {
            $ref: '#/$defs/access_device_posture_rule',
          },
          {
            $ref: '#/$defs/domain_rule',
          },
          {
            $ref: '#/$defs/email_list_rule',
          },
          {
            $ref: '#/$defs/email_rule',
          },
          {
            $ref: '#/$defs/everyone_rule',
          },
          {
            $ref: '#/$defs/external_evaluation_rule',
          },
          {
            $ref: '#/$defs/github_organization_rule',
          },
          {
            $ref: '#/$defs/gsuite_group_rule',
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
            $ref: '#/$defs/ip_list_rule',
          },
          {
            $ref: '#/$defs/ip_rule',
          },
          {
            $ref: '#/$defs/okta_group_rule',
          },
          {
            $ref: '#/$defs/saml_group_rule',
          },
          {
            type: 'object',
            title: 'OIDC claim',
            description: 'Matches an OIDC claim.\nRequires an OIDC identity provider.',
            properties: {
              oidc: {
                type: 'object',
                properties: {
                  claim_name: {
                    type: 'string',
                    description: 'The name of the OIDC claim.',
                  },
                  claim_value: {
                    type: 'string',
                    description: 'The OIDC claim value to look for.',
                  },
                  identity_provider_id: {
                    type: 'string',
                    description: 'The ID of your OIDC identity provider.',
                  },
                },
                required: ['claim_name', 'claim_value', 'identity_provider_id'],
              },
            },
            required: ['oidc'],
          },
          {
            $ref: '#/$defs/service_token_rule',
          },
        ],
        description: 'Matches an Access group.',
      },
      group_rule: {
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
      any_valid_service_token_rule: {
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
      authentication_method_rule: {
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
      azure_group_rule: {
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
      certificate_rule: {
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
      country_rule: {
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
      access_device_posture_rule: {
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
      domain_rule: {
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
      email_list_rule: {
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
      email_rule: {
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
      everyone_rule: {
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
      external_evaluation_rule: {
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
      github_organization_rule: {
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
      gsuite_group_rule: {
        type: 'object',
        title: 'Google Workspace group',
        description: 'Matches a group in Google Workspace.\nRequires a Google Workspace identity provider.',
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
      ip_list_rule: {
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
      ip_rule: {
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
      okta_group_rule: {
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
      saml_group_rule: {
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
      service_token_rule: {
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
      approval_group: {
        type: 'object',
        description: 'A group of email addresses that can approve a temporary authentication request.',
        properties: {
          approvals_needed: {
            type: 'number',
            description: 'The number of approvals needed to obtain access.',
          },
          email_addresses: {
            type: 'array',
            description: 'A list of emails that can approve the access request.',
            items: {
              type: 'string',
            },
          },
          email_list_uuid: {
            type: 'string',
            description: 'The UUID of an re-usable email list.',
          },
        },
        required: ['approvals_needed'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.policies.update(policy_id, body));
};

export default { metadata, tool, handler };
