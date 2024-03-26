// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as ApplicationsAPI from 'cloudflare/resources/zero-trust/access/applications/applications';
import * as CAsAPI from 'cloudflare/resources/zero-trust/access/applications/cas';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/access/applications/policies';
import * as UserPolicyChecksAPI from 'cloudflare/resources/zero-trust/access/applications/user-policy-checks';

export class Applications extends APIResource {
  cas: CAsAPI.CAs = new CAsAPI.CAs(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Adds a new application to Access.
   */
  create(params: ApplicationCreateParams, options?: Core.RequestOptions): Core.APIPromise<AccessApps> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/apps`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessApps }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access application.
   */
  update(
    appId: string | string,
    params: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessApps> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessApps }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access applications in an account or zone.
   */
  list(
    params?: ApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<ApplicationListResponse | null>;
  list(
    params: ApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationListResponse | null> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/apps`, options) as Core.APIPromise<{
        result: ApplicationListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an application from Access.
   */
  delete(
    appId: string | string,
    params?: ApplicationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse>;
  delete(appId: string | string, options?: Core.RequestOptions): Core.APIPromise<ApplicationDeleteResponse>;
  delete(
    appId: string | string,
    params: ApplicationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`,
        options,
      ) as Core.APIPromise<{ result: ApplicationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches information about an Access application.
   */
  get(
    appId: string | string,
    params?: ApplicationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessApps>;
  get(appId: string | string, options?: Core.RequestOptions): Core.APIPromise<AccessApps>;
  get(
    appId: string | string,
    params: ApplicationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessApps> {
    if (isRequestOptions(params)) {
      return this.get(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`,
        options,
      ) as Core.APIPromise<{ result: AccessApps }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes all tokens issued for an application.
   */
  revokeTokens(
    appId: string | string,
    params?: ApplicationRevokeTokensParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: string | string,
    params: ApplicationRevokeTokensParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null> {
    if (isRequestOptions(params)) {
      return this.revokeTokens(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/revoke_tokens`,
        options,
      ) as Core.APIPromise<{ result: ApplicationRevokeTokensResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccessApps =
  | AccessApps.SelfHostedApplication
  | AccessApps.SaaSApplication
  | AccessApps.BrowserSSHApplication
  | AccessApps.BrowserVncApplication
  | AccessApps.AppLauncherApplication
  | AccessApps.DeviceEnrollmentPermissionsApplication
  | AccessApps.BrowserIsolationPermissionsApplication
  | AccessApps.BookmarkApplication;

export namespace AccessApps {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: SelfHostedApplication.CorsHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export namespace SelfHostedApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface SaaSApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    saas_app?: SaaSApplication.AccessSamlSaasApp | SaaSApplication.AccessOidcSaasApp;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;

    updated_at?: string;
  }

  export namespace SaaSApplication {
    export interface AccessSamlSaasApp {
      /**
       * Optional identifier indicating the authentication protocol used for the saas
       * app. Required for OIDC. Default if unset is "saml"
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The service provider's endpoint that is responsible for receiving and parsing a
       * SAML assertion.
       */
      consumer_service_url?: string;

      created_at?: string;

      custom_attributes?: AccessSamlSaasApp.CustomAttributes;

      /**
       * The URL that the user will be redirected to after a successful login for IDP
       * initiated logins.
       */
      default_relay_state?: string;

      /**
       * The unique identifier for your SaaS application.
       */
      idp_entity_id?: string;

      /**
       * The format of the name identifier sent to the SaaS application.
       */
      name_id_format?: 'id' | 'email';

      /**
       * A [JSONata](https://jsonata.org/) expression that transforms an application's
       * user identities into a NameID value for its SAML assertion. This expression
       * should evaluate to a singular string. The output of this expression can override
       * the `name_id_format` setting.
       */
      name_id_transform_jsonata?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * A [JSONata] (https://jsonata.org/) expression that transforms an application's
       * user identities into attribute assertions in the SAML response. The expression
       * can transform id, email, name, and groups values. It can also transform fields
       * listed in the saml_attributes or oidc_fields of the identity provider used to
       * authenticate. The output of this expression must be a JSON object.
       */
      saml_attribute_transform_jsonata?: string;

      /**
       * A globally unique name for an identity or service provider.
       */
      sp_entity_id?: string;

      /**
       * The endpoint where your SaaS application will send login requests.
       */
      sso_endpoint?: string;

      updated_at?: string;
    }

    export namespace AccessSamlSaasApp {
      export interface CustomAttributes {
        /**
         * The name of the attribute.
         */
        name?: string;

        /**
         * A globally unique name for an identity or service provider.
         */
        name_format?:
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';

        source?: CustomAttributes.Source;
      }

      export namespace CustomAttributes {
        export interface Source {
          /**
           * The name of the IdP attribute.
           */
          name?: string;
        }
      }
    }

    export interface AccessOidcSaasApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      created_at?: string;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;

      updated_at?: string;
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: BrowserSSHApplication.CorsHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export namespace BrowserSSHApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface BrowserVncApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: BrowserVncApplication.CorsHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export namespace BrowserVncApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    app_launcher_visible?: unknown;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;

    updated_at?: string;
  }
}

export type ApplicationListResponse = Array<AccessApps>;

export interface ApplicationDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export type ApplicationRevokeTokensResponse = unknown;

export type ApplicationCreateParams =
  | ApplicationCreateParams.SelfHostedApplication
  | ApplicationCreateParams.SaaSApplication
  | ApplicationCreateParams.BrowserSSHApplication
  | ApplicationCreateParams.BrowserVncApplication
  | ApplicationCreateParams.AppLauncherApplication
  | ApplicationCreateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationCreateParams.BrowserIsolationPermissionsApplication
  | ApplicationCreateParams.BookmarkApplication;

export namespace ApplicationCreateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationCreateParams.SelfHostedApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace SelfHostedApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface SaaSApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param:
     */
    saas_app?:
      | ApplicationCreateParams.SaaSApplication.AccessSamlSaasApp
      | ApplicationCreateParams.SaaSApplication.AccessOidcSaasApp;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }

  export namespace SaaSApplication {
    export interface AccessSamlSaasApp {
      /**
       * Optional identifier indicating the authentication protocol used for the saas
       * app. Required for OIDC. Default if unset is "saml"
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The service provider's endpoint that is responsible for receiving and parsing a
       * SAML assertion.
       */
      consumer_service_url?: string;

      custom_attributes?: AccessSamlSaasApp.CustomAttributes;

      /**
       * The URL that the user will be redirected to after a successful login for IDP
       * initiated logins.
       */
      default_relay_state?: string;

      /**
       * The unique identifier for your SaaS application.
       */
      idp_entity_id?: string;

      /**
       * The format of the name identifier sent to the SaaS application.
       */
      name_id_format?: 'id' | 'email';

      /**
       * A [JSONata](https://jsonata.org/) expression that transforms an application's
       * user identities into a NameID value for its SAML assertion. This expression
       * should evaluate to a singular string. The output of this expression can override
       * the `name_id_format` setting.
       */
      name_id_transform_jsonata?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * A [JSONata] (https://jsonata.org/) expression that transforms an application's
       * user identities into attribute assertions in the SAML response. The expression
       * can transform id, email, name, and groups values. It can also transform fields
       * listed in the saml_attributes or oidc_fields of the identity provider used to
       * authenticate. The output of this expression must be a JSON object.
       */
      saml_attribute_transform_jsonata?: string;

      /**
       * A globally unique name for an identity or service provider.
       */
      sp_entity_id?: string;

      /**
       * The endpoint where your SaaS application will send login requests.
       */
      sso_endpoint?: string;
    }

    export namespace AccessSamlSaasApp {
      export interface CustomAttributes {
        /**
         * The name of the attribute.
         */
        name?: string;

        /**
         * A globally unique name for an identity or service provider.
         */
        name_format?:
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';

        source?: CustomAttributes.Source;
      }

      export namespace CustomAttributes {
        export interface Source {
          /**
           * The name of the IdP attribute.
           */
          name?: string;
        }
      }
    }

    export interface AccessOidcSaasApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationCreateParams.BrowserSSHApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace BrowserSSHApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface BrowserVncApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationCreateParams.BrowserVncApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace BrowserVncApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BookmarkApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param:
     */
    app_launcher_visible?: unknown;

    /**
     * Body param: The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }
}

export type ApplicationUpdateParams =
  | ApplicationUpdateParams.SelfHostedApplication
  | ApplicationUpdateParams.SaaSApplication
  | ApplicationUpdateParams.BrowserSSHApplication
  | ApplicationUpdateParams.BrowserVncApplication
  | ApplicationUpdateParams.AppLauncherApplication
  | ApplicationUpdateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationUpdateParams.BrowserIsolationPermissionsApplication
  | ApplicationUpdateParams.BookmarkApplication;

export namespace ApplicationUpdateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationUpdateParams.SelfHostedApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace SelfHostedApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface SaaSApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param:
     */
    saas_app?:
      | ApplicationUpdateParams.SaaSApplication.AccessSamlSaasApp
      | ApplicationUpdateParams.SaaSApplication.AccessOidcSaasApp;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }

  export namespace SaaSApplication {
    export interface AccessSamlSaasApp {
      /**
       * Optional identifier indicating the authentication protocol used for the saas
       * app. Required for OIDC. Default if unset is "saml"
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The service provider's endpoint that is responsible for receiving and parsing a
       * SAML assertion.
       */
      consumer_service_url?: string;

      custom_attributes?: AccessSamlSaasApp.CustomAttributes;

      /**
       * The URL that the user will be redirected to after a successful login for IDP
       * initiated logins.
       */
      default_relay_state?: string;

      /**
       * The unique identifier for your SaaS application.
       */
      idp_entity_id?: string;

      /**
       * The format of the name identifier sent to the SaaS application.
       */
      name_id_format?: 'id' | 'email';

      /**
       * A [JSONata](https://jsonata.org/) expression that transforms an application's
       * user identities into a NameID value for its SAML assertion. This expression
       * should evaluate to a singular string. The output of this expression can override
       * the `name_id_format` setting.
       */
      name_id_transform_jsonata?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * A [JSONata] (https://jsonata.org/) expression that transforms an application's
       * user identities into attribute assertions in the SAML response. The expression
       * can transform id, email, name, and groups values. It can also transform fields
       * listed in the saml_attributes or oidc_fields of the identity provider used to
       * authenticate. The output of this expression must be a JSON object.
       */
      saml_attribute_transform_jsonata?: string;

      /**
       * A globally unique name for an identity or service provider.
       */
      sp_entity_id?: string;

      /**
       * The endpoint where your SaaS application will send login requests.
       */
      sso_endpoint?: string;
    }

    export namespace AccessSamlSaasApp {
      export interface CustomAttributes {
        /**
         * The name of the attribute.
         */
        name?: string;

        /**
         * A globally unique name for an identity or service provider.
         */
        name_format?:
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic'
          | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';

        source?: CustomAttributes.Source;
      }

      export namespace CustomAttributes {
        export interface Source {
          /**
           * The name of the IdP attribute.
           */
          name?: string;
        }
      }
    }

    export interface AccessOidcSaasApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationUpdateParams.BrowserSSHApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace BrowserSSHApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface BrowserVncApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: ApplicationUpdateParams.BrowserVncApplication.CorsHeaders;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<string>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export namespace BrowserVncApplication {
    export interface CorsHeaders {
      /**
       * Allows all HTTP request headers.
       */
      allow_all_headers?: boolean;

      /**
       * Allows all HTTP request methods.
       */
      allow_all_methods?: boolean;

      /**
       * Allows all origins.
       */
      allow_all_origins?: boolean;

      /**
       * When set to `true`, includes credentials (cookies, authorization headers, or TLS
       * client certificates) with requests.
       */
      allow_credentials?: boolean;

      /**
       * Allowed HTTP request headers.
       */
      allowed_headers?: Array<unknown>;

      /**
       * Allowed HTTP request methods.
       */
      allowed_methods?: Array<
        'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
      >;

      /**
       * Allowed origins.
       */
      allowed_origins?: Array<unknown>;

      /**
       * The maximum number of seconds the results of a preflight request can be cached.
       */
      max_age?: number;
    }
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BookmarkApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param:
     */
    app_launcher_visible?: unknown;

    /**
     * Body param: The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }
}

export interface ApplicationListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationRevokeTokensParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Applications {
  export import AccessApps = ApplicationsAPI.AccessApps;
  export import ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export import ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export import ApplicationListParams = ApplicationsAPI.ApplicationListParams;
  export import ApplicationDeleteParams = ApplicationsAPI.ApplicationDeleteParams;
  export import ApplicationGetParams = ApplicationsAPI.ApplicationGetParams;
  export import ApplicationRevokeTokensParams = ApplicationsAPI.ApplicationRevokeTokensParams;
  export import CAs = CAsAPI.CAs;
  export import AccessCA = CAsAPI.AccessCA;
  export import CACreateResponse = CAsAPI.CACreateResponse;
  export import CAListResponse = CAsAPI.CAListResponse;
  export import CADeleteResponse = CAsAPI.CADeleteResponse;
  export import CAGetResponse = CAsAPI.CAGetResponse;
  export import CACreateParams = CAsAPI.CACreateParams;
  export import CAListParams = CAsAPI.CAListParams;
  export import CADeleteParams = CAsAPI.CADeleteParams;
  export import CAGetParams = CAsAPI.CAGetParams;
  export import UserPolicyChecks = UserPolicyChecksAPI.UserPolicyChecks;
  export import UserPolicyCheckListResponse = UserPolicyChecksAPI.UserPolicyCheckListResponse;
  export import UserPolicyCheckListParams = UserPolicyChecksAPI.UserPolicyCheckListParams;
  export import Policies = PoliciesAPI.Policies;
  export import AccessPolicies = PoliciesAPI.AccessPolicies;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
