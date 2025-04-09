// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_access_zero_trust_applications',
  description: 'Updates an Access application.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          app_id: {
            type: 'string',
            description: 'Identifier.',
          },
          domain: {
            type: 'string',
            description:
              'The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.',
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allow_authenticate_via_warp: {
            type: 'boolean',
            description:
              'When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              type: 'string',
              description: 'The identity providers selected for application.',
            },
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          cors_headers: {
            type: 'object',
            properties: {
              allow_all_headers: {
                type: 'boolean',
                description: 'Allows all HTTP request headers.',
              },
              allow_all_methods: {
                type: 'boolean',
                description: 'Allows all HTTP request methods.',
              },
              allow_all_origins: {
                type: 'boolean',
                description: 'Allows all origins.',
              },
              allow_credentials: {
                type: 'boolean',
                description:
                  'When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.',
              },
              allowed_headers: {
                type: 'array',
                description: 'Allowed HTTP request headers.',
                items: {
                  type: 'string',
                },
              },
              allowed_methods: {
                type: 'array',
                description: 'Allowed HTTP request methods.',
                items: {
                  type: 'string',
                  enum: ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'],
                },
              },
              allowed_origins: {
                type: 'array',
                description: 'Allowed origins.',
                items: {
                  type: 'string',
                },
              },
              max_age: {
                type: 'number',
                description:
                  'The maximum number of seconds the results of a preflight request can be cached.',
              },
            },
            required: [],
          },
          custom_deny_message: {
            type: 'string',
            description:
              'The custom error message shown to a user when they are denied access to the application.',
          },
          custom_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.',
          },
          custom_non_identity_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.',
          },
          custom_pages: {
            type: 'array',
            description: 'The custom pages that will be displayed when applicable for this application',
            items: {
              type: 'string',
              description: 'The custom pages selected for application.',
            },
          },
          destinations: {
            type: 'array',
            description:
              'List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'Public destination',
                  description:
                    "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['public'],
                    },
                    uri: {
                      type: 'string',
                      description:
                        "The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).\n",
                    },
                  },
                  required: [],
                },
                {
                  type: 'object',
                  title: 'Private destination',
                  description:
                    'Private destinations are an early access feature and gated behind a feature flag.',
                  properties: {
                    cidr: {
                      type: 'string',
                      description: 'The CIDR range of the destination. Single IPs will be computed as /32.',
                    },
                    hostname: {
                      type: 'string',
                      description:
                        'The hostname of the destination. Matches a valid SNI served by an HTTPS origin.',
                    },
                    l4_protocol: {
                      type: 'string',
                      description:
                        'The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.',
                      enum: ['tcp', 'udp'],
                    },
                    port_range: {
                      type: 'string',
                      description:
                        'The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.\n',
                    },
                    type: {
                      type: 'string',
                      enum: ['private'],
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'The VNET ID to match the destination. When omitted, all VNETs will match.',
                    },
                  },
                  required: [],
                },
              ],
              description:
                "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
            },
          },
          enable_binding_cookie: {
            type: 'boolean',
            description:
              'Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.',
          },
          http_only_cookie_attribute: {
            type: 'boolean',
            description:
              'Enables the HttpOnly cookie attribute, which increases security against XSS attacks.',
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          options_preflight_bypass: {
            type: 'boolean',
            description:
              'Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.',
          },
          path_cookie_attribute: {
            type: 'boolean',
            description:
              "Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default",
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        type: 'object',
                        description:
                          'A group of email addresses that can approve a temporary authentication request.',
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
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          read_service_tokens_from_header: {
            type: 'string',
            description:
              'Allows matching Access Service Tokens passed HTTP in a single header with this name.\nThis works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.\nThe header value will be interpreted as a json object similar to: \n  {\n    "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",\n    "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"\n  }\n',
          },
          same_site_cookie_attribute: {
            type: 'string',
            description:
              'Sets the SameSite cookie setting, which provides increased security against CSRF attacks.',
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    type: 'object',
                    title: 'HTTP Basic',
                    description:
                      'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      password: {
                        type: 'string',
                        description: 'Password used to authenticate with the remote SCIM service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['httpbasic'],
                      },
                      user: {
                        type: 'string',
                        description: 'User name used to authenticate with the remote SCIM service.',
                      },
                    },
                    required: ['password', 'scheme', 'user'],
                  },
                  {
                    type: 'object',
                    title: 'OAuth Bearer Token',
                    description:
                      'Attributes for configuring OAuth Bearer Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      token: {
                        type: 'string',
                        description: 'Token used to authenticate with the remote SCIM service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['oauthbearertoken'],
                      },
                    },
                    required: ['token', 'scheme'],
                  },
                  {
                    type: 'object',
                    title: 'OAuth 2',
                    description:
                      'Attributes for configuring OAuth 2 authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      authorization_url: {
                        type: 'string',
                        description: 'URL used to generate the auth code used during token generation.',
                      },
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Secret used to authenticate when generating a token for authenticating with the remove SCIM service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['oauth2'],
                      },
                      token_url: {
                        type: 'string',
                        description:
                          'URL used to generate the token used to authenticate with the remote SCIM service.',
                      },
                      scopes: {
                        type: 'array',
                        description:
                          'The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.',
                        items: {
                          type: 'string',
                        },
                      },
                    },
                    required: ['authorization_url', 'client_id', 'client_secret', 'scheme', 'token_url'],
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  type: 'object',
                  description:
                    'Transformations and filters applied to resources before they are provisioned in the remote SCIM service.',
                  properties: {
                    schema: {
                      type: 'string',
                      description: 'Which SCIM resource type this mapping applies to.',
                    },
                    enabled: {
                      type: 'boolean',
                      description: 'Whether or not this mapping is enabled.',
                    },
                    filter: {
                      type: 'string',
                      description:
                        'A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.',
                    },
                    operations: {
                      type: 'object',
                      description: 'Whether or not this mapping applies to creates, updates, or deletes.',
                      properties: {
                        create: {
                          type: 'boolean',
                          description: 'Whether or not this mapping applies to create (POST) operations.',
                        },
                        delete: {
                          type: 'boolean',
                          description: 'Whether or not this mapping applies to DELETE operations.',
                        },
                        update: {
                          type: 'boolean',
                          description:
                            'Whether or not this mapping applies to update (PATCH/PUT) operations.',
                        },
                      },
                      required: [],
                    },
                    strictness: {
                      type: 'string',
                      description:
                        'The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ passes unknown values to the target.',
                      enum: ['strict', 'passthrough'],
                    },
                    transform_jsonata: {
                      type: 'string',
                      description:
                        'A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.',
                    },
                  },
                  required: ['schema'],
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          self_hosted_domains: {
            type: 'array',
            description:
              'List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              type: 'string',
              description: 'A domain that Access will secure.',
            },
          },
          service_auth_401_redirect: {
            type: 'boolean',
            description: 'Returns a 401 status code when the request is blocked by a Service Auth policy.',
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_interstitial: {
            type: 'boolean',
            description: 'Enables automatic authentication through cloudflared.',
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          custom_pages: {
            type: 'array',
            description: 'The custom pages that will be displayed when applicable for this application',
            items: {
              type: 'string',
              description: 'The custom pages selected for application.',
            },
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          saas_app: {
            anyOf: [
              {
                type: 'object',
                title: 'SAML SaaS App',
                properties: {
                  auth_type: {
                    type: 'string',
                    description:
                      'Optional identifier indicating the authentication protocol used for the saas app. Required for OIDC. Default if unset is "saml"',
                    enum: ['saml', 'oidc'],
                  },
                  consumer_service_url: {
                    type: 'string',
                    description:
                      "The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.",
                  },
                  created_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                  custom_attributes: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        friendly_name: {
                          type: 'string',
                          description: 'The SAML FriendlyName of the attribute.',
                        },
                        name: {
                          type: 'string',
                          description: 'The name of the attribute.',
                        },
                        name_format: {
                          type: 'string',
                          description: 'A globally unique name for an identity or service provider.',
                          enum: [
                            'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified',
                            'urn:oasis:names:tc:SAML:2.0:attrname-format:basic',
                            'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
                          ],
                        },
                        required: {
                          type: 'boolean',
                          description: 'If the attribute is required when building a SAML assertion.',
                        },
                        source: {
                          type: 'object',
                          properties: {
                            name: {
                              type: 'string',
                              description: 'The name of the IdP attribute.',
                            },
                            name_by_idp: {
                              type: 'array',
                              description: 'A mapping from IdP ID to attribute name.',
                              items: {
                                type: 'object',
                                properties: {
                                  idp_id: {
                                    type: 'string',
                                    description: 'The UID of the IdP.',
                                  },
                                  source_name: {
                                    type: 'string',
                                    description: 'The name of the IdP provided attribute.',
                                  },
                                },
                                required: [],
                              },
                            },
                          },
                          required: [],
                        },
                      },
                      required: [],
                    },
                  },
                  default_relay_state: {
                    type: 'string',
                    description:
                      'The URL that the user will be redirected to after a successful login for IDP initiated logins.',
                  },
                  idp_entity_id: {
                    type: 'string',
                    description: 'The unique identifier for your SaaS application.',
                  },
                  name_id_format: {
                    type: 'string',
                    description: 'The format of the name identifier sent to the SaaS application.',
                    enum: ['id', 'email'],
                  },
                  name_id_transform_jsonata: {
                    type: 'string',
                    description:
                      "A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.\n",
                  },
                  public_key: {
                    type: 'string',
                    description: 'The Access public certificate that will be used to verify your identity.',
                  },
                  saml_attribute_transform_jsonata: {
                    type: 'string',
                    description:
                      "A [JSONata] (https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.\n",
                  },
                  sp_entity_id: {
                    type: 'string',
                    description: 'A globally unique name for an identity or service provider.',
                  },
                  sso_endpoint: {
                    type: 'string',
                    description: 'The endpoint where your SaaS application will send login requests.',
                  },
                  updated_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                },
                required: [],
              },
              {
                type: 'object',
                title: 'OIDC SaaS App',
                properties: {
                  access_token_lifetime: {
                    type: 'string',
                    description:
                      'The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must be greater than or equal to 1m and less than or equal to 24h.',
                  },
                  allow_pkce_without_client_secret: {
                    type: 'boolean',
                    description:
                      'If client secret should be required on the token endpoint when authorization_code_with_pkce grant is used.',
                  },
                  app_launcher_url: {
                    type: 'string',
                    description: 'The URL where this applications tile redirects users',
                  },
                  auth_type: {
                    type: 'string',
                    description:
                      'Identifier of the authentication protocol used for the saas app. Required for OIDC.',
                    enum: ['saml', 'oidc'],
                  },
                  client_id: {
                    type: 'string',
                    description: 'The application client id',
                  },
                  client_secret: {
                    type: 'string',
                    description: 'The application client secret, only returned on POST request.',
                  },
                  created_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                  custom_claims: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'The name of the claim.',
                        },
                        required: {
                          type: 'boolean',
                          description: 'If the claim is required when building an OIDC token.',
                        },
                        scope: {
                          type: 'string',
                          description: 'The scope of the claim.',
                          enum: ['groups', 'profile', 'email', 'openid'],
                        },
                        source: {
                          type: 'object',
                          properties: {
                            name: {
                              type: 'string',
                              description: 'The name of the IdP claim.',
                            },
                            name_by_idp: {
                              type: 'object',
                              description: 'A mapping from IdP ID to claim name.',
                            },
                          },
                          required: [],
                        },
                      },
                      required: [],
                    },
                  },
                  grant_types: {
                    type: 'array',
                    description: 'The OIDC flows supported by this application',
                    items: {
                      type: 'string',
                      enum: [
                        'authorization_code',
                        'authorization_code_with_pkce',
                        'refresh_tokens',
                        'hybrid',
                        'implicit',
                      ],
                    },
                  },
                  group_filter_regex: {
                    type: 'string',
                    description:
                      'A regex to filter Cloudflare groups returned in ID token and userinfo endpoint',
                  },
                  hybrid_and_implicit_options: {
                    type: 'object',
                    properties: {
                      return_access_token_from_authorization_endpoint: {
                        type: 'boolean',
                        description:
                          'If an Access Token should be returned from the OIDC Authorization endpoint',
                      },
                      return_id_token_from_authorization_endpoint: {
                        type: 'boolean',
                        description: 'If an ID Token should be returned from the OIDC Authorization endpoint',
                      },
                    },
                    required: [],
                  },
                  public_key: {
                    type: 'string',
                    description: 'The Access public certificate that will be used to verify your identity.',
                  },
                  redirect_uris: {
                    type: 'array',
                    description:
                      "The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens",
                    items: {
                      type: 'string',
                    },
                  },
                  refresh_token_options: {
                    type: 'object',
                    properties: {
                      lifetime: {
                        type: 'string',
                        description:
                          'How long a refresh token will be valid for after creation. Valid units are m,h,d. Must be longer than 1m.',
                      },
                    },
                    required: [],
                  },
                  scopes: {
                    type: 'array',
                    description:
                      'Define the user information shared with access, "offline_access" scope will be automatically enabled if refresh tokens are enabled',
                    items: {
                      type: 'string',
                      enum: ['openid', 'groups', 'email', 'profile'],
                    },
                  },
                  updated_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                },
                required: [],
              },
            ],
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          domain: {
            type: 'string',
            description:
              'The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.',
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allow_authenticate_via_warp: {
            type: 'boolean',
            description:
              'When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          cors_headers: {
            $ref: '#/anyOf/0/properties/cors_headers',
          },
          custom_deny_message: {
            type: 'string',
            description:
              'The custom error message shown to a user when they are denied access to the application.',
          },
          custom_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.',
          },
          custom_non_identity_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.',
          },
          custom_pages: {
            type: 'array',
            description: 'The custom pages that will be displayed when applicable for this application',
            items: {
              type: 'string',
              description: 'The custom pages selected for application.',
            },
          },
          destinations: {
            type: 'array',
            description:
              'List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'Public destination',
                  description:
                    "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['public'],
                    },
                    uri: {
                      type: 'string',
                      description:
                        "The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).\n",
                    },
                  },
                  required: [],
                },
                {
                  type: 'object',
                  title: 'Private destination',
                  description:
                    'Private destinations are an early access feature and gated behind a feature flag.',
                  properties: {
                    cidr: {
                      type: 'string',
                      description: 'The CIDR range of the destination. Single IPs will be computed as /32.',
                    },
                    hostname: {
                      type: 'string',
                      description:
                        'The hostname of the destination. Matches a valid SNI served by an HTTPS origin.',
                    },
                    l4_protocol: {
                      type: 'string',
                      description:
                        'The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.',
                      enum: ['tcp', 'udp'],
                    },
                    port_range: {
                      type: 'string',
                      description:
                        'The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.\n',
                    },
                    type: {
                      type: 'string',
                      enum: ['private'],
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'The VNET ID to match the destination. When omitted, all VNETs will match.',
                    },
                  },
                  required: [],
                },
              ],
              description:
                "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
            },
          },
          enable_binding_cookie: {
            type: 'boolean',
            description:
              'Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.',
          },
          http_only_cookie_attribute: {
            type: 'boolean',
            description:
              'Enables the HttpOnly cookie attribute, which increases security against XSS attacks.',
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          options_preflight_bypass: {
            type: 'boolean',
            description:
              'Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.',
          },
          path_cookie_attribute: {
            type: 'boolean',
            description:
              "Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default",
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          read_service_tokens_from_header: {
            type: 'string',
            description:
              'Allows matching Access Service Tokens passed HTTP in a single header with this name.\nThis works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.\nThe header value will be interpreted as a json object similar to: \n  {\n    "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",\n    "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"\n  }\n',
          },
          same_site_cookie_attribute: {
            type: 'string',
            description:
              'Sets the SameSite cookie setting, which provides increased security against CSRF attacks.',
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          self_hosted_domains: {
            type: 'array',
            description:
              'List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              $ref: '#/anyOf/0/properties/self_hosted_domains/items',
            },
          },
          service_auth_401_redirect: {
            type: 'boolean',
            description: 'Returns a 401 status code when the request is blocked by a Service Auth policy.',
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_interstitial: {
            type: 'boolean',
            description: 'Enables automatic authentication through cloudflared.',
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          domain: {
            type: 'string',
            description:
              'The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.',
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allow_authenticate_via_warp: {
            type: 'boolean',
            description:
              'When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          cors_headers: {
            $ref: '#/anyOf/0/properties/cors_headers',
          },
          custom_deny_message: {
            type: 'string',
            description:
              'The custom error message shown to a user when they are denied access to the application.',
          },
          custom_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.',
          },
          custom_non_identity_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.',
          },
          custom_pages: {
            type: 'array',
            description: 'The custom pages that will be displayed when applicable for this application',
            items: {
              type: 'string',
              description: 'The custom pages selected for application.',
            },
          },
          destinations: {
            type: 'array',
            description:
              'List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'Public destination',
                  description:
                    "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['public'],
                    },
                    uri: {
                      type: 'string',
                      description:
                        "The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).\n",
                    },
                  },
                  required: [],
                },
                {
                  type: 'object',
                  title: 'Private destination',
                  description:
                    'Private destinations are an early access feature and gated behind a feature flag.',
                  properties: {
                    cidr: {
                      type: 'string',
                      description: 'The CIDR range of the destination. Single IPs will be computed as /32.',
                    },
                    hostname: {
                      type: 'string',
                      description:
                        'The hostname of the destination. Matches a valid SNI served by an HTTPS origin.',
                    },
                    l4_protocol: {
                      type: 'string',
                      description:
                        'The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.',
                      enum: ['tcp', 'udp'],
                    },
                    port_range: {
                      type: 'string',
                      description:
                        'The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.\n',
                    },
                    type: {
                      type: 'string',
                      enum: ['private'],
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'The VNET ID to match the destination. When omitted, all VNETs will match.',
                    },
                  },
                  required: [],
                },
              ],
              description:
                "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
            },
          },
          enable_binding_cookie: {
            type: 'boolean',
            description:
              'Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.',
          },
          http_only_cookie_attribute: {
            type: 'boolean',
            description:
              'Enables the HttpOnly cookie attribute, which increases security against XSS attacks.',
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          options_preflight_bypass: {
            type: 'boolean',
            description:
              'Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.',
          },
          path_cookie_attribute: {
            type: 'boolean',
            description:
              "Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default",
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          read_service_tokens_from_header: {
            type: 'string',
            description:
              'Allows matching Access Service Tokens passed HTTP in a single header with this name.\nThis works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.\nThe header value will be interpreted as a json object similar to: \n  {\n    "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",\n    "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"\n  }\n',
          },
          same_site_cookie_attribute: {
            type: 'string',
            description:
              'Sets the SameSite cookie setting, which provides increased security against CSRF attacks.',
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          self_hosted_domains: {
            type: 'array',
            description:
              'List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              $ref: '#/anyOf/0/properties/self_hosted_domains/items',
            },
          },
          service_auth_401_redirect: {
            type: 'boolean',
            description: 'Returns a 401 status code when the request is blocked by a Service Auth policy.',
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_interstitial: {
            type: 'boolean',
            description: 'Enables automatic authentication through cloudflared.',
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          type: {
            type: 'string',
            description: 'The application type.',
            enum: [
              'self_hosted',
              'saas',
              'ssh',
              'vnc',
              'app_launcher',
              'warp',
              'biso',
              'bookmark',
              'dash_sso',
              'infrastructure',
              'rdp',
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
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_logo_url: {
            type: 'string',
            description: 'The image URL of the logo shown in the App Launcher header.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher page.',
          },
          footer_links: {
            type: 'array',
            description: 'The links in the App Launcher footer.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The hypertext in the footer link.',
                },
                url: {
                  type: 'string',
                  description: 'the hyperlink in the footer link.',
                },
              },
              required: ['name', 'url'],
            },
          },
          header_bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher header.',
          },
          landing_page_design: {
            type: 'object',
            description: 'The design of the App Launcher landing page shown to users when they log in.',
            properties: {
              button_color: {
                type: 'string',
                description: 'The background color of the log in button on the landing page.',
              },
              button_text_color: {
                type: 'string',
                description: 'The color of the text in the log in button on the landing page.',
              },
              image_url: {
                type: 'string',
                description: 'The URL of the image shown on the landing page.',
              },
              message: {
                type: 'string',
                description: 'The message shown on the landing page.',
              },
              title: {
                type: 'string',
                description: 'The title shown on the landing page.',
              },
            },
            required: [],
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_app_launcher_login_page: {
            type: 'boolean',
            description: 'Determines when to skip the App Launcher landing page.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          type: {
            $ref: '#/anyOf/4/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_logo_url: {
            type: 'string',
            description: 'The image URL of the logo shown in the App Launcher header.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher page.',
          },
          footer_links: {
            type: 'array',
            description: 'The links in the App Launcher footer.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The hypertext in the footer link.',
                },
                url: {
                  type: 'string',
                  description: 'the hyperlink in the footer link.',
                },
              },
              required: ['name', 'url'],
            },
          },
          header_bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher header.',
          },
          landing_page_design: {
            type: 'object',
            description: 'The design of the App Launcher landing page shown to users when they log in.',
            properties: {
              button_color: {
                type: 'string',
                description: 'The background color of the log in button on the landing page.',
              },
              button_text_color: {
                type: 'string',
                description: 'The color of the text in the log in button on the landing page.',
              },
              image_url: {
                type: 'string',
                description: 'The URL of the image shown on the landing page.',
              },
              message: {
                type: 'string',
                description: 'The message shown on the landing page.',
              },
              title: {
                type: 'string',
                description: 'The title shown on the landing page.',
              },
            },
            required: [],
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_app_launcher_login_page: {
            type: 'boolean',
            description: 'Determines when to skip the App Launcher landing page.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          type: {
            $ref: '#/anyOf/4/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_logo_url: {
            type: 'string',
            description: 'The image URL of the logo shown in the App Launcher header.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher page.',
          },
          footer_links: {
            type: 'array',
            description: 'The links in the App Launcher footer.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The hypertext in the footer link.',
                },
                url: {
                  type: 'string',
                  description: 'the hyperlink in the footer link.',
                },
              },
              required: ['name', 'url'],
            },
          },
          header_bg_color: {
            type: 'string',
            description: 'The background color of the App Launcher header.',
          },
          landing_page_design: {
            type: 'object',
            description: 'The design of the App Launcher landing page shown to users when they log in.',
            properties: {
              button_color: {
                type: 'string',
                description: 'The background color of the log in button on the landing page.',
              },
              button_text_color: {
                type: 'string',
                description: 'The color of the text in the log in button on the landing page.',
              },
              image_url: {
                type: 'string',
                description: 'The URL of the image shown on the landing page.',
              },
              message: {
                type: 'string',
                description: 'The message shown on the landing page.',
              },
              title: {
                type: 'string',
                description: 'The title shown on the landing page.',
              },
            },
            required: [],
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_app_launcher_login_page: {
            type: 'boolean',
            description: 'Determines when to skip the App Launcher landing page.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          domain: {
            type: 'string',
            description: 'The URL or domain of the bookmark.',
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          target_criteria: {
            type: 'array',
            items: {
              type: 'object',
              title: 'Target Criteria',
              properties: {
                port: {
                  type: 'integer',
                  description:
                    'The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.',
                },
                protocol: {
                  type: 'string',
                  description: 'The communication protocol your application secures.',
                  enum: ['ssh'],
                },
                target_attributes: {
                  type: 'object',
                  description: 'Contains a map of target attribute keys to target attribute values.',
                },
              },
              required: ['port', 'protocol', 'target_attributes'],
            },
          },
          type: {
            $ref: '#/anyOf/4/properties/type',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          policies: {
            type: 'array',
            description: 'The policies that Access applies to the application.',
            items: {
              type: 'object',
              properties: {
                decision: {
                  type: 'string',
                  description:
                    'The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.',
                  enum: ['allow', 'deny', 'non_identity', 'bypass'],
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
                        description:
                          'Matches an Azure Authentication Context.\nRequires an Azure identity provider.',
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
                        description:
                          'Create Allow or Block policies which evaluate the user based on custom criteria.',
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
                  description: 'The name of the Access policy.',
                },
                connection_rules: {
                  type: 'object',
                  title: 'Connection Rules',
                  description:
                    'The rules that define how users may connect to the targets secured by your application.',
                  properties: {
                    ssh: {
                      type: 'object',
                      title: 'SSH Connection Rules',
                      description:
                        'The SSH-specific rules that define how users may connect to the targets secured by your application.',
                      properties: {
                        usernames: {
                          type: 'array',
                          description:
                            'Contains the Unix usernames that may be used when connecting over SSH.',
                          items: {
                            type: 'string',
                          },
                        },
                        allow_email_alias: {
                          type: 'boolean',
                          description: 'Enables using Identity Provider email alias as SSH username.',
                        },
                      },
                      required: ['usernames'],
                    },
                  },
                  required: [],
                },
                exclude: {
                  type: 'array',
                  description:
                    'Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.',
                  items: {
                    $ref: '#/anyOf/8/properties/policies/items/include/items',
                  },
                },
                require: {
                  type: 'array',
                  description:
                    'Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.',
                  items: {
                    $ref: '#/anyOf/8/properties/policies/items/include/items',
                  },
                },
              },
              required: ['decision', 'include', 'name'],
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          app_id: {
            $ref: '#/anyOf/0/properties/app_id',
          },
          domain: {
            type: 'string',
            description:
              'The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.',
          },
          target_criteria: {
            type: 'array',
            items: {
              type: 'object',
              title: 'Target Criteria',
              properties: {
                port: {
                  type: 'integer',
                  description:
                    'The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.',
                },
                protocol: {
                  type: 'string',
                  description: 'The communication protocol your application secures.',
                  enum: ['ssh'],
                },
                target_attributes: {
                  type: 'object',
                  description: 'Contains a map of target attribute keys to target attribute values.',
                },
              },
              required: ['port', 'protocol', 'target_attributes'],
            },
          },
          type: {
            type: 'string',
            description: 'The application type.',
          },
          account_id: {
            type: 'string',
            description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
          },
          zone_id: {
            type: 'string',
            description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
          },
          allow_authenticate_via_warp: {
            type: 'boolean',
            description:
              'When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.',
          },
          allowed_idps: {
            type: 'array',
            description:
              'The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.',
            items: {
              $ref: '#/anyOf/0/properties/allowed_idps/items',
            },
          },
          app_launcher_visible: {
            type: 'boolean',
            description: 'Displays the application in the App Launcher.',
          },
          auto_redirect_to_identity: {
            type: 'boolean',
            description:
              'When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.',
          },
          cors_headers: {
            $ref: '#/anyOf/0/properties/cors_headers',
          },
          custom_deny_message: {
            type: 'string',
            description:
              'The custom error message shown to a user when they are denied access to the application.',
          },
          custom_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.',
          },
          custom_non_identity_deny_url: {
            type: 'string',
            description:
              'The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.',
          },
          custom_pages: {
            type: 'array',
            description: 'The custom pages that will be displayed when applicable for this application',
            items: {
              type: 'string',
              description: 'The custom pages selected for application.',
            },
          },
          destinations: {
            type: 'array',
            description:
              'List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'Public destination',
                  description:
                    "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['public'],
                    },
                    uri: {
                      type: 'string',
                      description:
                        "The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).\n",
                    },
                  },
                  required: [],
                },
                {
                  type: 'object',
                  title: 'Private destination',
                  description:
                    'Private destinations are an early access feature and gated behind a feature flag.',
                  properties: {
                    cidr: {
                      type: 'string',
                      description: 'The CIDR range of the destination. Single IPs will be computed as /32.',
                    },
                    hostname: {
                      type: 'string',
                      description:
                        'The hostname of the destination. Matches a valid SNI served by an HTTPS origin.',
                    },
                    l4_protocol: {
                      type: 'string',
                      description:
                        'The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.',
                      enum: ['tcp', 'udp'],
                    },
                    port_range: {
                      type: 'string',
                      description:
                        'The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.\n',
                    },
                    type: {
                      type: 'string',
                      enum: ['private'],
                    },
                    vnet_id: {
                      type: 'string',
                      description:
                        'The VNET ID to match the destination. When omitted, all VNETs will match.',
                    },
                  },
                  required: [],
                },
              ],
              description:
                "A public hostname that Access will secure. Public destinations support sub-domain and path. Wildcard '*' can be used in the definition.\n",
            },
          },
          enable_binding_cookie: {
            type: 'boolean',
            description:
              'Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.',
          },
          http_only_cookie_attribute: {
            type: 'boolean',
            description:
              'Enables the HttpOnly cookie attribute, which increases security against XSS attacks.',
          },
          logo_url: {
            type: 'string',
            description: 'The image URL for the logo shown in the App Launcher dashboard.',
          },
          name: {
            type: 'string',
            description: 'The name of the application.',
          },
          options_preflight_bypass: {
            type: 'boolean',
            description:
              'Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.',
          },
          path_cookie_attribute: {
            type: 'boolean',
            description:
              "Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default",
          },
          policies: {
            type: 'array',
            description:
              'The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'A JSON that links a reusable policy to an application.',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                  },
                  required: [],
                },
                {
                  type: 'string',
                  description: 'The UUID of the policy',
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'The UUID of the policy',
                    },
                    approval_groups: {
                      type: 'array',
                      description: 'Administrators who can approve a temporary authentication request.',
                      items: {
                        $ref: '#/anyOf/0/properties/policies/items/anyOf/2/approval_groups/items',
                      },
                    },
                    approval_required: {
                      type: 'boolean',
                      description:
                        'Requires the user to request access from an administrator at the start of each session.',
                    },
                    isolation_required: {
                      type: 'boolean',
                      description:
                        "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
                    },
                    precedence: {
                      type: 'integer',
                      description:
                        'The order of execution for this policy. Must be unique for each policy within an app.',
                    },
                    purpose_justification_prompt: {
                      type: 'string',
                      description: 'A custom message that will appear on the purpose justification screen.',
                    },
                    purpose_justification_required: {
                      type: 'boolean',
                      description:
                        'Require users to enter a justification when they log in to the application.',
                    },
                    session_duration: {
                      type: 'string',
                      description:
                        'The amount of time that tokens issued for the application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
                    },
                  },
                  required: [],
                },
              ],
              description: 'A JSON that links a reusable policy to an application.',
            },
          },
          read_service_tokens_from_header: {
            type: 'string',
            description:
              'Allows matching Access Service Tokens passed HTTP in a single header with this name.\nThis works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.\nThe header value will be interpreted as a json object similar to: \n  {\n    "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",\n    "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"\n  }\n',
          },
          same_site_cookie_attribute: {
            type: 'string',
            description:
              'Sets the SameSite cookie setting, which provides increased security against CSRF attacks.',
          },
          scim_config: {
            type: 'object',
            description:
              'Configuration for provisioning to this application via SCIM. This is currently in closed beta.',
            properties: {
              idp_uid: {
                type: 'string',
                description:
                  'The UID of the IdP to use as the source for SCIM resources to provision to this application.',
              },
              remote_uri: {
                type: 'string',
                description: "The base URI for the application's SCIM-compatible API.",
              },
              authentication: {
                anyOf: [
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                  },
                  {
                    $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                  },
                  {
                    type: 'object',
                    title: 'Access Service Token',
                    description:
                      'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                    properties: {
                      client_id: {
                        type: 'string',
                        description:
                          'Client ID of the Access service token used to authenticate with the remote service.',
                      },
                      client_secret: {
                        type: 'string',
                        description:
                          'Client secret of the Access service token used to authenticate with the remote service.',
                      },
                      scheme: {
                        type: 'string',
                        description:
                          'The authentication scheme to use when making SCIM requests to this application.',
                        enum: ['access_service_token'],
                      },
                    },
                    required: ['client_id', 'client_secret', 'scheme'],
                  },
                  {
                    type: 'array',
                    description: 'Multiple authentication schemes',
                    items: {
                      anyOf: [
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/0',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/1',
                        },
                        {
                          $ref: '#/anyOf/0/properties/scim_config/authentication/anyOf/2',
                        },
                        {
                          type: 'object',
                          title: 'Access Service Token',
                          description:
                            'Attributes for configuring Access Service Token authentication scheme for SCIM provisioning to an application.',
                          properties: {
                            client_id: {
                              type: 'string',
                              description:
                                'Client ID of the Access service token used to authenticate with the remote service.',
                            },
                            client_secret: {
                              type: 'string',
                              description:
                                'Client secret of the Access service token used to authenticate with the remote service.',
                            },
                            scheme: {
                              type: 'string',
                              description:
                                'The authentication scheme to use when making SCIM requests to this application.',
                              enum: ['access_service_token'],
                            },
                          },
                          required: ['client_id', 'client_secret', 'scheme'],
                        },
                      ],
                      description:
                        'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
                    },
                  },
                ],
                description:
                  'Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.',
              },
              deactivate_on_delete: {
                type: 'boolean',
                description:
                  "If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.",
              },
              enabled: {
                type: 'boolean',
                description: 'Whether SCIM provisioning is turned on for this application.',
              },
              mappings: {
                type: 'array',
                description:
                  'A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.',
                items: {
                  $ref: '#/anyOf/0/properties/scim_config/mappings/items',
                },
              },
            },
            required: ['idp_uid', 'remote_uri'],
          },
          self_hosted_domains: {
            type: 'array',
            description:
              'List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.\n',
            items: {
              $ref: '#/anyOf/0/properties/self_hosted_domains/items',
            },
          },
          service_auth_401_redirect: {
            type: 'boolean',
            description: 'Returns a 401 status code when the request is blocked by a Service Auth policy.',
          },
          session_duration: {
            type: 'string',
            description:
              'The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
          },
          skip_interstitial: {
            type: 'boolean',
            description: 'Enables automatic authentication through cloudflared.',
          },
          tags: {
            type: 'array',
            description:
              'The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.',
            items: {
              type: 'string',
              description: 'The tag associated with an application.',
            },
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { app_id, ...body } = args;
  return client.zeroTrust.access.applications.update(app_id, body);
};

export default { metadata, tool, handler };
