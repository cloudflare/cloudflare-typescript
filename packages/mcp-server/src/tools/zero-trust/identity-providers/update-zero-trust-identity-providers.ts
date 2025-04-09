// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.identity_providers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_zero_trust_identity_providers',
  description: 'Updates a configured identity provider.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              conditional_access_enabled: {
                type: 'boolean',
                description: 'Should Cloudflare try to load authentication contexts from your account',
              },
              directory_id: {
                type: 'string',
                description: 'Your Azure directory uuid',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
              prompt: {
                type: 'string',
                description:
                  "Indicates the type of user interaction that is required. prompt=login forces the user to enter their credentials on that request, negating single-sign on. prompt=none is the opposite. It ensures that the user isn't presented with any interactive prompt. If the request can't be completed silently by using single-sign on, the Microsoft identity platform returns an interaction_required error. prompt=select_account interrupts single sign-on providing account selection experience listing all the accounts either in session or any remembered account or an option to choose to use a different account altogether.",
                enum: ['login', 'select_account', 'none'],
              },
              support_groups: {
                type: 'boolean',
                description: 'Should Cloudflare try to load groups from your account',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            type: 'string',
            description:
              'The type of identity provider. To determine the value for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            enum: [
              'onetimepin',
              'azureAD',
              'saml',
              'centrify',
              'facebook',
              'github',
              'google-apps',
              'google',
              'linkedin',
              'oidc',
              'okta',
              'onelogin',
              'pingone',
              'yandex',
            ],
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            type: 'object',
            description:
              'The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'A flag to enable or disable SCIM for the identity provider.',
              },
              identity_update_behavior: {
                type: 'string',
                description:
                  'Indicates how a SCIM event updates a user identity used for policy evaluation. Use "automatic" to automatically update a user\'s identity and augment it with fields from the SCIM user resource. Use "reauth" to force re-authentication on group membership updates, user identity update will only occur after successful re-authentication. With "reauth" identities will not contain fields from the SCIM user resource. With "no_action" identities will not be changed by SCIM updates in any way and users will not be prompted to reauthenticate.',
                enum: ['automatic', 'reauth', 'no_action'],
              },
              scim_base_url: {
                type: 'string',
                description: "The base URL of Cloudflare's SCIM V2.0 API endpoint.",
              },
              seat_deprovision: {
                type: 'boolean',
                description:
                  "A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider.  This cannot be enabled unless user_deprovision is also enabled.",
              },
              secret: {
                type: 'string',
                description:
                  'A read-only token generated when the SCIM integration is enabled for the first time.  It is redacted on subsequent requests.  If you lose this you will need to refresh it at /access/identity_providers/:idpID/refresh_scim_secret.',
              },
              user_deprovision: {
                type: 'boolean',
                description:
                  "A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider.",
              },
            },
            required: [],
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              centrify_account: {
                type: 'string',
                description: 'Your centrify account url',
              },
              centrify_app_id: {
                type: 'string',
                description: 'Your centrify app id',
              },
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            properties: {
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            $ref: '#/anyOf/2/properties/config',
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              apps_domain: {
                type: 'string',
                description: 'Your companies TLD',
              },
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            $ref: '#/anyOf/2/properties/config',
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              auth_url: {
                type: 'string',
                description: 'The authorization_endpoint URL of your IdP',
              },
              certs_url: {
                type: 'string',
                description: 'The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens',
              },
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
              pkce_enabled: {
                type: 'boolean',
                description: 'Enable Proof Key for Code Exchange (PKCE)',
              },
              scopes: {
                type: 'array',
                description: 'OAuth scopes',
                items: {
                  type: 'string',
                },
              },
              token_url: {
                type: 'string',
                description: 'The token_endpoint URL of your IdP',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              authorization_server_id: {
                type: 'string',
                description: 'Your okta authorization server id',
              },
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
              okta_account: {
                type: 'string',
                description: 'Your okta account url',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
              onelogin_account: {
                type: 'string',
                description: 'Your OneLogin account url',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              claims: {
                type: 'array',
                description: 'Custom claims',
                items: {
                  type: 'string',
                },
              },
              client_id: {
                type: 'string',
                description: 'Your OAuth Client ID',
              },
              client_secret: {
                type: 'string',
                description: 'Your OAuth Client Secret',
              },
              email_claim_name: {
                type: 'string',
                description: 'The claim name for email in the id_token response.',
              },
              ping_env_id: {
                type: 'string',
                description: 'Your PingOne environment identifier',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              attributes: {
                type: 'array',
                description:
                  'A list of SAML attribute names that will be added to your signed JWT token and can be used in SAML policy rules.',
                items: {
                  type: 'string',
                },
              },
              email_attribute_name: {
                type: 'string',
                description: 'The attribute name for email in the SAML response.',
              },
              header_attributes: {
                type: 'array',
                description:
                  'Add a list of attribute names that will be returned in the response header from the Access callback.',
                items: {
                  type: 'object',
                  properties: {
                    attribute_name: {
                      type: 'string',
                      description: 'attribute name from the IDP',
                    },
                    header_name: {
                      type: 'string',
                      description: 'header that will be added on the request to the origin',
                    },
                  },
                  required: [],
                },
              },
              idp_public_certs: {
                type: 'array',
                description: 'X509 certificate to verify the signature in the SAML authentication response',
                items: {
                  type: 'string',
                },
              },
              issuer_url: {
                type: 'string',
                description: 'IdP Entity ID or Issuer URL',
              },
              sign_request: {
                type: 'boolean',
                description:
                  'Sign the SAML authentication request with Access credentials. To verify the signature, use the public key from the Access certs endpoints.',
              },
              sso_target_url: {
                type: 'string',
                description: 'URL to send the SAML authentication requests to',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            $ref: '#/anyOf/2/properties/config',
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
      {
        type: 'object',
        properties: {
          identity_provider_id: {
            type: 'string',
            description: 'UUID.',
          },
          config: {
            type: 'object',
            description:
              'The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).',
            properties: {
              redirect_url: {
                type: 'string',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'The name of the identity provider, shown to users on the login page.',
          },
          type: {
            $ref: '#/anyOf/0/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          scim_config: {
            $ref: '#/anyOf/0/properties/scim_config',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identity_provider_id, ...body } = args;
  return client.zeroTrust.identityProviders.update(identity_provider_id, body);
};

export default { metadata, tool, handler };
