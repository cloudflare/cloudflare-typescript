// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ApplicationsAPI from 'cloudflare/resources/access/applications/applications';
import * as CasAPI from 'cloudflare/resources/access/applications/cas';
import * as PoliciesAPI from 'cloudflare/resources/access/applications/policies';
import * as UserPolicyChecksAPI from 'cloudflare/resources/access/applications/user-policy-checks';

export class Applications extends APIResource {
  cas: CasAPI.Cas = new CasAPI.Cas(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Adds a new application to Access.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: ApplicationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/apps`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ApplicationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access application.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    body: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationUpdateResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ApplicationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access applications in an account or zone.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationListResponse | null> {
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
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse> {
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
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`,
        options,
      ) as Core.APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes all tokens issued for an application.
   */
  revokeTokens(
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null> {
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/revoke_tokens`,
        options,
      ) as Core.APIPromise<{ result: ApplicationRevokeTokensResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ApplicationCreateResponse =
  | ApplicationCreateResponse.SelfHostedApplication
  | ApplicationCreateResponse.SaaSApplication
  | ApplicationCreateResponse.BrowserSSHApplication
  | ApplicationCreateResponse.BrowserVncApplication
  | ApplicationCreateResponse.AppLauncherApplication
  | ApplicationCreateResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationCreateResponse.BrowserIsolationPermissionsApplication
  | ApplicationCreateResponse.BookmarkApplication;

export namespace ApplicationCreateResponse {
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
    domain?: unknown;

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

export type ApplicationUpdateResponse =
  | ApplicationUpdateResponse.SelfHostedApplication
  | ApplicationUpdateResponse.SaaSApplication
  | ApplicationUpdateResponse.BrowserSSHApplication
  | ApplicationUpdateResponse.BrowserVncApplication
  | ApplicationUpdateResponse.AppLauncherApplication
  | ApplicationUpdateResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationUpdateResponse.BrowserIsolationPermissionsApplication
  | ApplicationUpdateResponse.BookmarkApplication;

export namespace ApplicationUpdateResponse {
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
    domain?: unknown;

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

export type ApplicationListResponse = Array<
  | ApplicationListResponse.SelfHostedApplication
  | ApplicationListResponse.SaaSApplication
  | ApplicationListResponse.BrowserSSHApplication
  | ApplicationListResponse.BrowserVncApplication
  | ApplicationListResponse.AppLauncherApplication
  | ApplicationListResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationListResponse.BrowserIsolationPermissionsApplication
  | ApplicationListResponse.BookmarkApplication
>;

export namespace ApplicationListResponse {
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
    domain?: unknown;

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

export interface ApplicationDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export type ApplicationGetResponse =
  | ApplicationGetResponse.SelfHostedApplication
  | ApplicationGetResponse.SaaSApplication
  | ApplicationGetResponse.BrowserSSHApplication
  | ApplicationGetResponse.BrowserVncApplication
  | ApplicationGetResponse.AppLauncherApplication
  | ApplicationGetResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationGetResponse.BrowserIsolationPermissionsApplication
  | ApplicationGetResponse.BookmarkApplication;

export namespace ApplicationGetResponse {
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
    domain?: unknown;

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

export type ApplicationRevokeTokensResponse = unknown;

export type ApplicationCreateParams =
  | ApplicationCreateParams.Variant0
  | ApplicationCreateParams.Variant1
  | ApplicationCreateParams.Variant2
  | ApplicationCreateParams.Variant3
  | ApplicationCreateParams.Variant4
  | ApplicationCreateParams.Variant5
  | ApplicationCreateParams.Variant6
  | ApplicationCreateParams.Variant7;

export namespace ApplicationCreateParams {
  export interface Variant0 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationCreateParams.Variant0.CorsHeaders;

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
  }

  export namespace Variant0 {
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

  export interface Variant1 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

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

    saas_app?:
      | ApplicationCreateParams.Variant1.AccessSamlSaasApp
      | ApplicationCreateParams.Variant1.AccessOidcSaasApp;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;
  }

  export namespace Variant1 {
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

  export interface Variant2 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationCreateParams.Variant2.CorsHeaders;

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
  }

  export namespace Variant2 {
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

  export interface Variant3 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationCreateParams.Variant3.CorsHeaders;

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
  }

  export namespace Variant3 {
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

  export interface Variant4 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant5 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant6 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant7 {
    app_launcher_visible?: unknown;

    /**
     * The URL or domain of the bookmark.
     */
    domain?: unknown;

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
  }
}

export type ApplicationUpdateParams =
  | ApplicationUpdateParams.Variant0
  | ApplicationUpdateParams.Variant1
  | ApplicationUpdateParams.Variant2
  | ApplicationUpdateParams.Variant3
  | ApplicationUpdateParams.Variant4
  | ApplicationUpdateParams.Variant5
  | ApplicationUpdateParams.Variant6
  | ApplicationUpdateParams.Variant7;

export namespace ApplicationUpdateParams {
  export interface Variant0 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationUpdateParams.Variant0.CorsHeaders;

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
  }

  export namespace Variant0 {
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

  export interface Variant1 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

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

    saas_app?:
      | ApplicationUpdateParams.Variant1.AccessSamlSaasApp
      | ApplicationUpdateParams.Variant1.AccessOidcSaasApp;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;
  }

  export namespace Variant1 {
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

  export interface Variant2 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationUpdateParams.Variant2.CorsHeaders;

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
  }

  export namespace Variant2 {
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

  export interface Variant3 {
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
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationUpdateParams.Variant3.CorsHeaders;

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
  }

  export namespace Variant3 {
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

  export interface Variant4 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant5 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant6 {
    /**
     * The application type.
     */
    type: 'self_hosted' | 'saas' | 'ssh' | 'vnc' | 'app_launcher' | 'warp' | 'biso' | 'bookmark' | 'dash_sso';

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<string>;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;
  }

  export interface Variant7 {
    app_launcher_visible?: unknown;

    /**
     * The URL or domain of the bookmark.
     */
    domain?: unknown;

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
  }
}

export namespace Applications {
  export import ApplicationCreateResponse = ApplicationsAPI.ApplicationCreateResponse;
  export import ApplicationUpdateResponse = ApplicationsAPI.ApplicationUpdateResponse;
  export import ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationGetResponse = ApplicationsAPI.ApplicationGetResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export import ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export import Cas = CasAPI.Cas;
  export import CaCreateResponse = CasAPI.CaCreateResponse;
  export import CaListResponse = CasAPI.CaListResponse;
  export import CaDeleteResponse = CasAPI.CaDeleteResponse;
  export import CaGetResponse = CasAPI.CaGetResponse;
  export import UserPolicyChecks = UserPolicyChecksAPI.UserPolicyChecks;
  export import UserPolicyCheckListResponse = UserPolicyChecksAPI.UserPolicyCheckListResponse;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
