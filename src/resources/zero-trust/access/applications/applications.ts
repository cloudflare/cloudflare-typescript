// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import { CloudflareError } from 'cloudflare/error';
import * as ApplicationsAPI from './applications';
import * as PoliciesAPI from '../policies';
import * as CAsAPI from './cas';
import {
  CA,
  CACreateParams,
  CADeleteParams,
  CADeleteResponse,
  CAGetParams,
  CAListParams,
  CAs,
  CAsSinglePage,
} from './cas';
import * as ApplicationsPoliciesAPI from './policies';
import {
  AccessDevicePostureRule,
  AccessRule,
  AnyValidServiceTokenRule,
  AuthenticationMethodRule,
  AzureGroupRule,
  CertificateRule,
  CountryRule,
  DomainRule,
  EmailListRule,
  EmailRule,
  EveryoneRule,
  ExternalEvaluationRule,
  GSuiteGroupRule,
  GitHubOrganizationRule,
  GroupRule,
  IPListRule,
  IPRule,
  OktaGroupRule,
  Policies,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyGetParams,
  PolicyGetResponse,
  PolicyListParams,
  PolicyListResponse,
  PolicyListResponsesSinglePage,
  PolicyUpdateParams,
  PolicyUpdateResponse,
  SAMLGroupRule,
  ServiceTokenRule,
} from './policies';
import * as UserPolicyChecksAPI from './user-policy-checks';
import {
  UserPolicyCheckGeo,
  UserPolicyCheckListParams,
  UserPolicyCheckListResponse,
  UserPolicyChecks,
} from './user-policy-checks';
import * as PolicyTestsAPI from './policy-tests/policy-tests';
import {
  PolicyTestCreateParams,
  PolicyTestCreateResponse,
  PolicyTestGetParams,
  PolicyTestGetResponse,
  PolicyTests,
} from './policy-tests/policy-tests';
import { SinglePage } from '../../../../pagination';

export class Applications extends APIResource {
  cas: CAsAPI.CAs = new CAsAPI.CAs(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: ApplicationsPoliciesAPI.Policies = new ApplicationsPoliciesAPI.Policies(this._client);
  policyTests: PolicyTestsAPI.PolicyTests = new PolicyTestsAPI.PolicyTests(this._client);

  /**
   * Adds a new application to Access.
   */
  create(
    params: ApplicationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationCreateResponse> {
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
      }) as Core.APIPromise<{ result: ApplicationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access application.
   */
  update(
    appId: AppIDParam,
    params: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationUpdateResponse> {
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
      }) as Core.APIPromise<{ result: ApplicationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access applications in an account or zone.
   */
  list(
    params?: ApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationListResponsesSinglePage, ApplicationListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationListResponsesSinglePage, ApplicationListResponse>;
  list(
    params: ApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationListResponsesSinglePage, ApplicationListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id, ...query } = params;
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
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/apps`,
      ApplicationListResponsesSinglePage,
      { query, ...options },
    );
  }

  /**
   * Deletes an application from Access.
   */
  delete(
    appId: AppIDParam,
    params?: ApplicationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse>;
  delete(appId: AppIDParam, options?: Core.RequestOptions): Core.APIPromise<ApplicationDeleteResponse>;
  delete(
    appId: AppIDParam,
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
    appId: AppIDParam,
    params?: ApplicationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationGetResponse>;
  get(appId: AppIDParam, options?: Core.RequestOptions): Core.APIPromise<ApplicationGetResponse>;
  get(
    appId: AppIDParam,
    params: ApplicationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationGetResponse> {
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
      ) as Core.APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes all tokens issued for an application.
   */
  revokeTokens(
    appId: AppIDParam,
    params?: ApplicationRevokeTokensParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: AppIDParam,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: AppIDParam,
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

export class ApplicationListResponsesSinglePage extends SinglePage<ApplicationListResponse> {}

export type AllowedHeaders = string;

export type AllowedHeadersParam = string;

/**
 * The identity providers selected for application.
 */
export type AllowedIdPs = string;

/**
 * The identity providers selected for application.
 */
export type AllowedIdPsParam = string;

export type AllowedMethods =
  | 'GET'
  | 'POST'
  | 'HEAD'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type AllowedMethodsParam =
  | 'GET'
  | 'POST'
  | 'HEAD'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type AllowedOrigins = string;

export type AllowedOriginsParam = string;

/**
 * Identifier
 */
export type AppID = string;

/**
 * Identifier
 */
export type AppIDParam = string;

export type Application =
  | Application.SelfHostedApplication
  | Application.SaaSApplication
  | Application.BrowserSSHApplication
  | Application.BrowserVNCApplication
  | Application.AppLauncherApplication
  | Application.DeviceEnrollmentPermissionsApplication
  | Application.BrowserIsolationPermissionsApplication
  | Application.BookmarkApplication;

export namespace Application {
  export interface SelfHostedApplication {
    /**
     * The domain and path that Access will secure.
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
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: SelfHostedApplication.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application.
     */
    custom_deny_url?: string;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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

    updated_at?: string;
  }

  export namespace SelfHostedApplication {
    export interface CORSHeaders {
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
      allowed_methods?: Array<ApplicationsAPI.AllowedMethods>;

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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    saas_app?: SaaSApplication.AccessSchemasSAMLSaaSApp | SaaSApplication.AccessSchemasOIDCSaaSApp;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

    /**
     * The application type.
     */
    type?: string;

    updated_at?: string;
  }

  export namespace SaaSApplication {
    export interface AccessSchemasSAMLSaaSApp {
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

      custom_attributes?: Array<AccessSchemasSAMLSaaSApp.CustomAttribute>;

      /**
       * The unique identifier for your SaaS application.
       */
      idp_entity_id?: string;

      /**
       * The format of the name identifier sent to the SaaS application.
       */
      name_id_format?: ApplicationsAPI.SaaSAppNameIDFormat;

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

    export namespace AccessSchemasSAMLSaaSApp {
      export interface CustomAttribute {
        /**
         * The SAML FriendlyName of the attribute.
         */
        friendly_name?: string;

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

        /**
         * If the attribute is required when building a SAML assertion.
         */
        required?: boolean;

        source?: CustomAttribute.Source;
      }

      export namespace CustomAttribute {
        export interface Source {
          /**
           * The name of the IdP attribute.
           */
          name?: string;

          /**
           * A mapping from IdP ID to attribute name.
           */
          name_by_idp?: Record<string, string>;
        }
      }
    }

    export interface AccessSchemasOIDCSaaSApp {
      /**
       * The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must
       * be greater than or equal to 1m and less than or equal to 24h.
       */
      access_token_lifetime?: string;

      /**
       * If client secret should be required on the token endpoint when
       * authorization_code_with_pkce grant is used.
       */
      allow_pkce_without_client_secret?: boolean;

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

      custom_claims?: Array<AccessSchemasOIDCSaaSApp.CustomClaim>;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<
        'authorization_code' | 'authorization_code_with_pkce' | 'refresh_tokens' | 'hybrid' | 'implicit'
      >;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.
       */
      group_filter_regex?: string;

      hybrid_and_implicit_options?: AccessSchemasOIDCSaaSApp.HybridAndImplicitOptions;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      refresh_token_options?: AccessSchemasOIDCSaaSApp.RefreshTokenOptions;

      /**
       * Define the user information shared with access, "offline_access" scope will be
       * automatically enabled if refresh tokens are enabled
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;

      updated_at?: string;
    }

    export namespace AccessSchemasOIDCSaaSApp {
      export interface CustomClaim {
        /**
         * The name of the claim.
         */
        name?: string;

        /**
         * If the claim is required when building an OIDC token.
         */
        required?: boolean;

        /**
         * The scope of the claim.
         */
        scope?: 'groups' | 'profile' | 'email' | 'openid';

        source?: CustomClaim.Source;
      }

      export namespace CustomClaim {
        export interface Source {
          /**
           * The name of the IdP claim.
           */
          name?: string;

          /**
           * A mapping from IdP ID to claim name.
           */
          name_by_idp?: Record<string, string>;
        }
      }

      export interface HybridAndImplicitOptions {
        /**
         * If an Access Token should be returned from the OIDC Authorization endpoint
         */
        return_access_token_from_authorization_endpoint?: boolean;

        /**
         * If an ID Token should be returned from the OIDC Authorization endpoint
         */
        return_id_token_from_authorization_endpoint?: boolean;
      }

      export interface RefreshTokenOptions {
        /**
         * How long a refresh token will be valid for after creation. Valid units are
         * m,h,d. Must be longer than 1m.
         */
        lifetime?: string;
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The domain and path that Access will secure.
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
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: BrowserSSHApplication.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application.
     */
    custom_deny_url?: string;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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

    updated_at?: string;
  }

  export namespace BrowserSSHApplication {
    export interface CORSHeaders {
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
      allowed_methods?: Array<ApplicationsAPI.AllowedMethods>;

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

  export interface BrowserVNCApplication {
    /**
     * The domain and path that Access will secure.
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
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: BrowserVNCApplication.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application.
     */
    custom_deny_url?: string;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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

    updated_at?: string;
  }

  export namespace BrowserVNCApplication {
    export interface CORSHeaders {
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
      allowed_methods?: Array<ApplicationsAPI.AllowedMethods>;

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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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
     * The domain and path that Access will secure.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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
     * The domain and path that Access will secure.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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
     * The domain and path that Access will secure.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

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
     * The URL or domain of the bookmark.
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

    app_launcher_visible?: unknown;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: ApplicationsAPI.ApplicationSCIMConfig;

    updated_at?: string;
  }
}

export interface ApplicationPolicy {
  /**
   * The UUID of the policy
   */
  id?: string;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<PoliciesAPI.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy. Infrastructure
   * application policies can only use the Allow action.
   */
  decision?: Decision;

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<ApplicationsPoliciesAPI.AccessRule>;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<ApplicationsPoliciesAPI.AccessRule>;

  /**
   * Require this application to be served in an isolated browser for users matching
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * A custom message that will appear on the purpose justification screen.
   */
  purpose_justification_prompt?: string;

  /**
   * Require users to enter a justification when they log in to the application.
   */
  purpose_justification_required?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<ApplicationsPoliciesAPI.AccessRule>;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

/**
 * Configuration for provisioning to this application via SCIM. This is currently
 * in closed beta.
 */
export interface ApplicationSCIMConfig {
  /**
   * The UID of the IdP to use as the source for SCIM resources to provision to this
   * application.
   */
  idp_uid: string;

  /**
   * The base URI for the application's SCIM-compatible API.
   */
  remote_uri: string;

  /**
   * Attributes for configuring HTTP Basic authentication scheme for SCIM
   * provisioning to an application.
   */
  authentication?:
    | SCIMConfigAuthenticationHTTPBasic
    | SCIMConfigAuthenticationOAuthBearerToken
    | SCIMConfigAuthenticationOauth2
    | ApplicationSCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
    | Array<
        | SCIMConfigAuthenticationHTTPBasic
        | SCIMConfigAuthenticationOAuthBearerToken
        | SCIMConfigAuthenticationOauth2
        | ApplicationSCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
      >;

  /**
   * If false, we propagate DELETE requests to the target application for SCIM
   * resources. If true, we only set `active` to false on the SCIM resource. This is
   * useful because some targets do not support DELETE operations.
   */
  deactivate_on_delete?: boolean;

  /**
   * Whether SCIM provisioning is turned on for this application.
   */
  enabled?: boolean;

  /**
   * A list of mappings to apply to SCIM resources before provisioning them in this
   * application. These can transform or filter the resources to be provisioned.
   */
  mappings?: Array<SCIMConfigMapping>;
}

export namespace ApplicationSCIMConfig {
  /**
   * Attributes for configuring Access Service Token authentication scheme for SCIM
   * provisioning to an application.
   */
  export interface AccessSCIMConfigAuthenticationAccessServiceToken {
    /**
     * Client ID of the Access service token used to authenticate with the remote
     * service.
     */
    client_id: string;

    /**
     * Client secret of the Access service token used to authenticate with the remote
     * service.
     */
    client_secret: string;

    /**
     * The authentication scheme to use when making SCIM requests to this application.
     */
    scheme: 'access_service_token';
  }

  /**
   * Attributes for configuring Access Service Token authentication scheme for SCIM
   * provisioning to an application.
   */
  export interface AccessSCIMConfigAuthenticationAccessServiceToken {
    /**
     * Client ID of the Access service token used to authenticate with the remote
     * service.
     */
    client_id: string;

    /**
     * Client secret of the Access service token used to authenticate with the remote
     * service.
     */
    client_secret: string;

    /**
     * The authentication scheme to use when making SCIM requests to this application.
     */
    scheme: 'access_service_token';
  }
}

/**
 * The application type.
 */
export type ApplicationType =
  | 'self_hosted'
  | 'saas'
  | 'ssh'
  | 'vnc'
  | 'app_launcher'
  | 'warp'
  | 'biso'
  | 'bookmark'
  | 'dash_sso'
  | 'infrastructure';

/**
 * The application type.
 */
export type ApplicationTypeParam =
  | 'self_hosted'
  | 'saas'
  | 'ssh'
  | 'vnc'
  | 'app_launcher'
  | 'warp'
  | 'biso'
  | 'bookmark'
  | 'dash_sso'
  | 'infrastructure';

export interface CORSHeaders {
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
  allowed_headers?: Array<AllowedHeaders>;

  /**
   * Allowed HTTP request methods.
   */
  allowed_methods?: Array<AllowedMethods>;

  /**
   * Allowed origins.
   */
  allowed_origins?: Array<AllowedOrigins>;

  /**
   * The maximum number of seconds the results of a preflight request can be cached.
   */
  max_age?: number;
}

export interface CORSHeadersParam {
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
  allowed_headers?: Array<AllowedHeadersParam>;

  /**
   * Allowed HTTP request methods.
   */
  allowed_methods?: Array<AllowedMethodsParam>;

  /**
   * Allowed origins.
   */
  allowed_origins?: Array<AllowedOriginsParam>;

  /**
   * The maximum number of seconds the results of a preflight request can be cached.
   */
  max_age?: number;
}

/**
 * The action Access will take if a user matches this policy. Infrastructure
 * application policies can only use the Allow action.
 */
export type Decision = 'allow' | 'deny' | 'non_identity' | 'bypass';

/**
 * The action Access will take if a user matches this policy. Infrastructure
 * application policies can only use the Allow action.
 */
export type DecisionParam = 'allow' | 'deny' | 'non_identity' | 'bypass';

export interface OIDCSaaSApp {
  /**
   * The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must
   * be greater than or equal to 1m and less than or equal to 24h.
   */
  access_token_lifetime?: string;

  /**
   * If client secret should be required on the token endpoint when
   * authorization_code_with_pkce grant is used.
   */
  allow_pkce_without_client_secret?: boolean;

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

  custom_claims?: Array<OIDCSaaSApp.CustomClaim>;

  /**
   * The OIDC flows supported by this application
   */
  grant_types?: Array<
    'authorization_code' | 'authorization_code_with_pkce' | 'refresh_tokens' | 'hybrid' | 'implicit'
  >;

  /**
   * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
   */
  group_filter_regex?: string;

  hybrid_and_implicit_options?: OIDCSaaSApp.HybridAndImplicitOptions;

  /**
   * The Access public certificate that will be used to verify your identity.
   */
  public_key?: string;

  /**
   * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
   * tokens
   */
  redirect_uris?: Array<string>;

  refresh_token_options?: OIDCSaaSApp.RefreshTokenOptions;

  /**
   * Define the user information shared with access, "offline_access" scope will be
   * automatically enabled if refresh tokens are enabled
   */
  scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;

  updated_at?: string;
}

export namespace OIDCSaaSApp {
  export interface CustomClaim {
    /**
     * The name of the claim.
     */
    name?: string;

    /**
     * If the claim is required when building an OIDC token.
     */
    required?: boolean;

    /**
     * The scope of the claim.
     */
    scope?: 'groups' | 'profile' | 'email' | 'openid';

    source?: CustomClaim.Source;
  }

  export namespace CustomClaim {
    export interface Source {
      /**
       * The name of the IdP claim.
       */
      name?: string;

      /**
       * A mapping from IdP ID to claim name.
       */
      name_by_idp?: Record<string, string>;
    }
  }

  export interface HybridAndImplicitOptions {
    /**
     * If an Access Token should be returned from the OIDC Authorization endpoint
     */
    return_access_token_from_authorization_endpoint?: boolean;

    /**
     * If an ID Token should be returned from the OIDC Authorization endpoint
     */
    return_id_token_from_authorization_endpoint?: boolean;
  }

  export interface RefreshTokenOptions {
    /**
     * How long a refresh token will be valid for after creation. Valid units are
     * m,h,d. Must be longer than 1m.
     */
    lifetime?: string;
  }
}

export interface OIDCSaaSAppParam {
  /**
   * The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must
   * be greater than or equal to 1m and less than or equal to 24h.
   */
  access_token_lifetime?: string;

  /**
   * If client secret should be required on the token endpoint when
   * authorization_code_with_pkce grant is used.
   */
  allow_pkce_without_client_secret?: boolean;

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

  custom_claims?: Array<OIDCSaaSAppParam.CustomClaim>;

  /**
   * The OIDC flows supported by this application
   */
  grant_types?: Array<
    'authorization_code' | 'authorization_code_with_pkce' | 'refresh_tokens' | 'hybrid' | 'implicit'
  >;

  /**
   * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
   */
  group_filter_regex?: string;

  hybrid_and_implicit_options?: OIDCSaaSAppParam.HybridAndImplicitOptions;

  /**
   * The Access public certificate that will be used to verify your identity.
   */
  public_key?: string;

  /**
   * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
   * tokens
   */
  redirect_uris?: Array<string>;

  refresh_token_options?: OIDCSaaSAppParam.RefreshTokenOptions;

  /**
   * Define the user information shared with access, "offline_access" scope will be
   * automatically enabled if refresh tokens are enabled
   */
  scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;
}

export namespace OIDCSaaSAppParam {
  export interface CustomClaim {
    /**
     * The name of the claim.
     */
    name?: string;

    /**
     * If the claim is required when building an OIDC token.
     */
    required?: boolean;

    /**
     * The scope of the claim.
     */
    scope?: 'groups' | 'profile' | 'email' | 'openid';

    source?: CustomClaim.Source;
  }

  export namespace CustomClaim {
    export interface Source {
      /**
       * The name of the IdP claim.
       */
      name?: string;

      /**
       * A mapping from IdP ID to claim name.
       */
      name_by_idp?: Record<string, string>;
    }
  }

  export interface HybridAndImplicitOptions {
    /**
     * If an Access Token should be returned from the OIDC Authorization endpoint
     */
    return_access_token_from_authorization_endpoint?: boolean;

    /**
     * If an ID Token should be returned from the OIDC Authorization endpoint
     */
    return_id_token_from_authorization_endpoint?: boolean;
  }

  export interface RefreshTokenOptions {
    /**
     * How long a refresh token will be valid for after creation. Valid units are
     * m,h,d. Must be longer than 1m.
     */
    lifetime?: string;
  }
}

/**
 * The format of the name identifier sent to the SaaS application.
 */
export type SaaSAppNameIDFormat = 'id' | 'email';

/**
 * The format of the name identifier sent to the SaaS application.
 */
export type SaaSAppNameIDFormatParam = 'id' | 'email';

export interface SAMLSaaSApp {
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

  custom_attributes?: Array<SAMLSaaSApp.CustomAttribute>;

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
  name_id_format?: SaaSAppNameIDFormat;

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

export namespace SAMLSaaSApp {
  export interface CustomAttribute {
    /**
     * The SAML FriendlyName of the attribute.
     */
    friendly_name?: string;

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

    /**
     * If the attribute is required when building a SAML assertion.
     */
    required?: boolean;

    source?: CustomAttribute.Source;
  }

  export namespace CustomAttribute {
    export interface Source {
      /**
       * The name of the IdP attribute.
       */
      name?: string;

      /**
       * A mapping from IdP ID to attribute name.
       */
      name_by_idp?: Record<string, string>;
    }
  }
}

export interface SAMLSaaSAppParam {
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

  custom_attributes?: Array<SAMLSaaSAppParam.CustomAttribute>;

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
  name_id_format?: SaaSAppNameIDFormatParam;

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

export namespace SAMLSaaSAppParam {
  export interface CustomAttribute {
    /**
     * The SAML FriendlyName of the attribute.
     */
    friendly_name?: string;

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

    /**
     * If the attribute is required when building a SAML assertion.
     */
    required?: boolean;

    source?: CustomAttribute.Source;
  }

  export namespace CustomAttribute {
    export interface Source {
      /**
       * The name of the IdP attribute.
       */
      name?: string;

      /**
       * A mapping from IdP ID to attribute name.
       */
      name_by_idp?: Record<string, string>;
    }
  }
}

/**
 * Attributes for configuring HTTP Basic authentication scheme for SCIM
 * provisioning to an application.
 */
export interface SCIMConfigAuthenticationHTTPBasic {
  /**
   * Password used to authenticate with the remote SCIM service.
   */
  password: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'httpbasic';

  /**
   * User name used to authenticate with the remote SCIM service.
   */
  user: string;
}

/**
 * Attributes for configuring HTTP Basic authentication scheme for SCIM
 * provisioning to an application.
 */
export interface SCIMConfigAuthenticationHTTPBasicParam {
  /**
   * Password used to authenticate with the remote SCIM service.
   */
  password: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'httpbasic';

  /**
   * User name used to authenticate with the remote SCIM service.
   */
  user: string;
}

/**
 * Attributes for configuring OAuth Bearer Token authentication scheme for SCIM
 * provisioning to an application.
 */
export interface SCIMConfigAuthenticationOAuthBearerToken {
  /**
   * Token used to authenticate with the remote SCIM service.
   */
  token: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'oauthbearertoken';
}

/**
 * Attributes for configuring OAuth Bearer Token authentication scheme for SCIM
 * provisioning to an application.
 */
export interface SCIMConfigAuthenticationOAuthBearerTokenParam {
  /**
   * Token used to authenticate with the remote SCIM service.
   */
  token: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'oauthbearertoken';
}

/**
 * Attributes for configuring OAuth 2 authentication scheme for SCIM provisioning
 * to an application.
 */
export interface SCIMConfigAuthenticationOauth2 {
  /**
   * URL used to generate the auth code used during token generation.
   */
  authorization_url: string;

  /**
   * Client ID used to authenticate when generating a token for authenticating with
   * the remote SCIM service.
   */
  client_id: string;

  /**
   * Secret used to authenticate when generating a token for authenticating with the
   * remove SCIM service.
   */
  client_secret: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'oauth2';

  /**
   * URL used to generate the token used to authenticate with the remote SCIM
   * service.
   */
  token_url: string;

  /**
   * The authorization scopes to request when generating the token used to
   * authenticate with the remove SCIM service.
   */
  scopes?: Array<string>;
}

/**
 * Attributes for configuring OAuth 2 authentication scheme for SCIM provisioning
 * to an application.
 */
export interface SCIMConfigAuthenticationOauth2Param {
  /**
   * URL used to generate the auth code used during token generation.
   */
  authorization_url: string;

  /**
   * Client ID used to authenticate when generating a token for authenticating with
   * the remote SCIM service.
   */
  client_id: string;

  /**
   * Secret used to authenticate when generating a token for authenticating with the
   * remove SCIM service.
   */
  client_secret: string;

  /**
   * The authentication scheme to use when making SCIM requests to this application.
   */
  scheme: 'oauth2';

  /**
   * URL used to generate the token used to authenticate with the remote SCIM
   * service.
   */
  token_url: string;

  /**
   * The authorization scopes to request when generating the token used to
   * authenticate with the remove SCIM service.
   */
  scopes?: Array<string>;
}

/**
 * Transformations and filters applied to resources before they are provisioned in
 * the remote SCIM service.
 */
export interface SCIMConfigMapping {
  /**
   * Which SCIM resource type this mapping applies to.
   */
  schema: string;

  /**
   * Whether or not this mapping is enabled.
   */
  enabled?: boolean;

  /**
   * A
   * [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2)
   * that matches resources that should be provisioned to this application.
   */
  filter?: string;

  /**
   * Whether or not this mapping applies to creates, updates, or deletes.
   */
  operations?: SCIMConfigMapping.Operations;

  /**
   * The level of adherence to outbound resource schemas when provisioning to this
   * mapping. ‘Strict’ removes unknown values, while ‘passthrough’ passes unknown
   * values to the target.
   */
  strictness?: 'strict' | 'passthrough';

  /**
   * A [JSONata](https://jsonata.org/) expression that transforms the resource before
   * provisioning it in the application.
   */
  transform_jsonata?: string;
}

export namespace SCIMConfigMapping {
  /**
   * Whether or not this mapping applies to creates, updates, or deletes.
   */
  export interface Operations {
    /**
     * Whether or not this mapping applies to create (POST) operations.
     */
    create?: boolean;

    /**
     * Whether or not this mapping applies to DELETE operations.
     */
    delete?: boolean;

    /**
     * Whether or not this mapping applies to update (PATCH/PUT) operations.
     */
    update?: boolean;
  }
}

/**
 * Transformations and filters applied to resources before they are provisioned in
 * the remote SCIM service.
 */
export interface SCIMConfigMappingParam {
  /**
   * Which SCIM resource type this mapping applies to.
   */
  schema: string;

  /**
   * Whether or not this mapping is enabled.
   */
  enabled?: boolean;

  /**
   * A
   * [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2)
   * that matches resources that should be provisioned to this application.
   */
  filter?: string;

  /**
   * Whether or not this mapping applies to creates, updates, or deletes.
   */
  operations?: SCIMConfigMappingParam.Operations;

  /**
   * The level of adherence to outbound resource schemas when provisioning to this
   * mapping. ‘Strict’ removes unknown values, while ‘passthrough’ passes unknown
   * values to the target.
   */
  strictness?: 'strict' | 'passthrough';

  /**
   * A [JSONata](https://jsonata.org/) expression that transforms the resource before
   * provisioning it in the application.
   */
  transform_jsonata?: string;
}

export namespace SCIMConfigMappingParam {
  /**
   * Whether or not this mapping applies to creates, updates, or deletes.
   */
  export interface Operations {
    /**
     * Whether or not this mapping applies to create (POST) operations.
     */
    create?: boolean;

    /**
     * Whether or not this mapping applies to DELETE operations.
     */
    delete?: boolean;

    /**
     * Whether or not this mapping applies to update (PATCH/PUT) operations.
     */
    update?: boolean;
  }
}

/**
 * A domain that Access will secure.
 */
export type SelfHostedDomains = string;

/**
 * A domain that Access will secure.
 */
export type SelfHostedDomainsParam = string;

export type ApplicationCreateResponse =
  | ApplicationCreateResponse.SelfHostedApplication
  | ApplicationCreateResponse.SaaSApplication
  | ApplicationCreateResponse.BrowserSSHApplication
  | ApplicationCreateResponse.BrowserVNCApplication
  | ApplicationCreateResponse.AppLauncherApplication
  | ApplicationCreateResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationCreateResponse.BrowserIsolationPermissionsApplication
  | ApplicationCreateResponse.BookmarkApplication
  | ApplicationCreateResponse.InfrastructureApplication;

export namespace ApplicationCreateResponse {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<SelfHostedApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    policies?: Array<SaaSApplication.Policy>;

    saas_app?: ApplicationsAPI.SAMLSaaSApp | ApplicationsAPI.OIDCSaaSApp;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserSSHApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserVNCApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<AppLauncherApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<DeviceEnrollmentPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<BrowserIsolationPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<InfrastructureApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: InfrastructureApplication.SCIMConfig;

    updated_at?: string;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      created_at?: string;

      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision?: ApplicationsAPI.Decision;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * The name of the Access policy.
       */
      name?: string;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRule>;

      updated_at?: string;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }
}

export type ApplicationUpdateResponse =
  | ApplicationUpdateResponse.SelfHostedApplication
  | ApplicationUpdateResponse.SaaSApplication
  | ApplicationUpdateResponse.BrowserSSHApplication
  | ApplicationUpdateResponse.BrowserVNCApplication
  | ApplicationUpdateResponse.AppLauncherApplication
  | ApplicationUpdateResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationUpdateResponse.BrowserIsolationPermissionsApplication
  | ApplicationUpdateResponse.BookmarkApplication
  | ApplicationUpdateResponse.InfrastructureApplication;

export namespace ApplicationUpdateResponse {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<SelfHostedApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    policies?: Array<SaaSApplication.Policy>;

    saas_app?: ApplicationsAPI.SAMLSaaSApp | ApplicationsAPI.OIDCSaaSApp;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserSSHApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserVNCApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<AppLauncherApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<DeviceEnrollmentPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<BrowserIsolationPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<InfrastructureApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: InfrastructureApplication.SCIMConfig;

    updated_at?: string;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      created_at?: string;

      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision?: ApplicationsAPI.Decision;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * The name of the Access policy.
       */
      name?: string;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRule>;

      updated_at?: string;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }
}

export type ApplicationListResponse =
  | ApplicationListResponse.SelfHostedApplication
  | ApplicationListResponse.SaaSApplication
  | ApplicationListResponse.BrowserSSHApplication
  | ApplicationListResponse.BrowserVNCApplication
  | ApplicationListResponse.AppLauncherApplication
  | ApplicationListResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationListResponse.BrowserIsolationPermissionsApplication
  | ApplicationListResponse.BookmarkApplication
  | ApplicationListResponse.InfrastructureApplication;

export namespace ApplicationListResponse {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<SelfHostedApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    policies?: Array<SaaSApplication.Policy>;

    saas_app?: ApplicationsAPI.SAMLSaaSApp | ApplicationsAPI.OIDCSaaSApp;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserSSHApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserVNCApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<AppLauncherApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<DeviceEnrollmentPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<BrowserIsolationPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<InfrastructureApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: InfrastructureApplication.SCIMConfig;

    updated_at?: string;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      created_at?: string;

      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision?: ApplicationsAPI.Decision;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * The name of the Access policy.
       */
      name?: string;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRule>;

      updated_at?: string;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
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
  | ApplicationGetResponse.BrowserVNCApplication
  | ApplicationGetResponse.AppLauncherApplication
  | ApplicationGetResponse.DeviceEnrollmentPermissionsApplication
  | ApplicationGetResponse.BrowserIsolationPermissionsApplication
  | ApplicationGetResponse.BookmarkApplication
  | ApplicationGetResponse.InfrastructureApplication;

export namespace ApplicationGetResponse {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<SelfHostedApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    policies?: Array<SaaSApplication.Policy>;

    saas_app?: ApplicationsAPI.SAMLSaaSApp | ApplicationsAPI.OIDCSaaSApp;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserSSHApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
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
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

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

    cors_headers?: ApplicationsAPI.CORSHeaders;

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
     * List of destinations secured by Access. This supersedes `self_hosted_domains` to
     * allow for more flexibility in defining different types of domains. If
     * `destinations` are provided, then `self_hosted_domains` will be ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    policies?: Array<BrowserVNCApplication.Policy>;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * @deprecated List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<AppLauncherApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<DeviceEnrollmentPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * The background color of the App Launcher page.
     */
    bg_color?: string;

    created_at?: string;

    /**
     * The primary hostname and path secured by Access. This domain will be displayed
     * if the app is visible in the App Launcher.
     */
    domain?: string;

    /**
     * The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<BrowserIsolationPermissionsApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;

    updated_at?: string;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    export interface Policy extends ApplicationsAPI.ApplicationPolicy {
      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The name of the application.
     */
    name?: string;

    policies?: Array<InfrastructureApplication.Policy>;

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    scim_config?: InfrastructureApplication.SCIMConfig;

    updated_at?: string;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      created_at?: string;

      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision?: ApplicationsAPI.Decision;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include?: Array<ApplicationsPoliciesAPI.AccessRule>;

      /**
       * The name of the Access policy.
       */
      name?: string;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRule>;

      updated_at?: string;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMapping>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }
}

export type ApplicationRevokeTokensResponse = unknown;

export type ApplicationCreateParams =
  | ApplicationCreateParams.SelfHostedApplication
  | ApplicationCreateParams.SaaSApplication
  | ApplicationCreateParams.BrowserSSHApplication
  | ApplicationCreateParams.BrowserVNCApplication
  | ApplicationCreateParams.AppLauncherApplication
  | ApplicationCreateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationCreateParams.BrowserIsolationPermissionsApplication
  | ApplicationCreateParams.BookmarkApplication
  | ApplicationCreateParams.InfrastructureApplication;

export declare namespace ApplicationCreateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<SelfHostedApplication.AccessAppPolicyLink | string | SelfHostedApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<SaaSApplication.AccessAppPolicyLink | string | SaaSApplication.UnionMember2>;

    /**
     * Body param:
     */
    saas_app?: SAMLSaaSAppParam | OIDCSaaSAppParam;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<BrowserSSHApplication.AccessAppPolicyLink | string | BrowserSSHApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<BrowserVNCApplication.AccessAppPolicyLink | string | BrowserVNCApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      AppLauncherApplication.AccessAppPolicyLink | string | AppLauncherApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      | DeviceEnrollmentPermissionsApplication.AccessAppPolicyLink
      | string
      | DeviceEnrollmentPermissionsApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      | BrowserIsolationPermissionsApplication.AccessAppPolicyLink
      | string
      | BrowserIsolationPermissionsApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
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
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    /**
     * Body param:
     */
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The policies that Access applies to the application.
     */
    policies?: Array<InfrastructureApplication.Policy>;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision: ApplicationsAPI.DecisionParam;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

      /**
       * The name of the Access policy.
       */
      name: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }
  }
}

export type ApplicationUpdateParams =
  | ApplicationUpdateParams.SelfHostedApplication
  | ApplicationUpdateParams.SaaSApplication
  | ApplicationUpdateParams.BrowserSSHApplication
  | ApplicationUpdateParams.BrowserVNCApplication
  | ApplicationUpdateParams.AppLauncherApplication
  | ApplicationUpdateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationUpdateParams.BrowserIsolationPermissionsApplication
  | ApplicationUpdateParams.BookmarkApplication
  | ApplicationUpdateParams.InfrastructureApplication;

export declare namespace ApplicationUpdateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<SelfHostedApplication.PublicDestination | SelfHostedApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<SelfHostedApplication.AccessAppPolicyLink | string | SelfHostedApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: SelfHostedApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<SaaSApplication.AccessAppPolicyLink | string | SaaSApplication.UnionMember2>;

    /**
     * Body param:
     */
    saas_app?: SAMLSaaSAppParam | OIDCSaaSAppParam;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: SaaSApplication.SCIMConfig;

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
    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<BrowserSSHApplication.PublicDestination | BrowserSSHApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<BrowserSSHApplication.AccessAppPolicyLink | string | BrowserSSHApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserSSHApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserVNCApplication {
    /**
     * Body param: The primary hostname and path secured by Access. This domain will be
     * displayed if the app is visible in the App Launcher.
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
    allowed_idps?: Array<AllowedIdPsParam>;

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
    cors_headers?: CORSHeadersParam;

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
     * Body param: List of destinations secured by Access. This supersedes
     * `self_hosted_domains` to allow for more flexibility in defining different types
     * of domains. If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    destinations?: Array<BrowserVNCApplication.PublicDestination | BrowserVNCApplication.PrivateDestination>;

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
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<BrowserVNCApplication.AccessAppPolicyLink | string | BrowserVNCApplication.UnionMember2>;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserVNCApplication.SCIMConfig;

    /**
     * Body param: List of public domains that Access will secure. This field is
     * deprecated in favor of `destinations` and will be supported until **November
     * 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be
     * ignored.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

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

  export namespace BrowserVNCApplication {
    /**
     * A public hostname that Access will secure. Public destinations support
     * sub-domain and path. Wildcard '\*' can be used in the definition.
     */
    export interface PublicDestination {
      type?: 'public';

      /**
       * The URI of the destination. Public destinations' URIs can include a domain and
       * path with
       * [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
       */
      uri?: string;
    }

    /**
     * Private destinations are an early access feature and gated behind a feature
     * flag.
     */
    export interface PrivateDestination {
      /**
       * The CIDR range of the destination. Single IPs will be computed as /32.
       */
      cidr?: string;

      /**
       * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
       */
      hostname?: string;

      /**
       * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will
       * match.
       */
      l4_protocol?: 'tcp' | 'udp';

      /**
       * The port range of the destination. Can be a single port or a range of ports.
       * When omitted, all ports will match.
       */
      port_range?: string;

      type?: 'private';

      /**
       * The VNET ID to match the destination. When omitted, all VNETs will match.
       */
      vnet_id?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<AppLauncherApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: AppLauncherApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      AppLauncherApplication.AccessAppPolicyLink | string | AppLauncherApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: AppLauncherApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace AppLauncherApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<DeviceEnrollmentPermissionsApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: DeviceEnrollmentPermissionsApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      | DeviceEnrollmentPermissionsApplication.AccessAppPolicyLink
      | string
      | DeviceEnrollmentPermissionsApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: DeviceEnrollmentPermissionsApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace DeviceEnrollmentPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: The image URL of the logo shown in the App Launcher header.
     */
    app_launcher_logo_url?: string;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The background color of the App Launcher page.
     */
    bg_color?: string;

    /**
     * Body param: The links in the App Launcher footer.
     */
    footer_links?: Array<BrowserIsolationPermissionsApplication.FooterLink>;

    /**
     * Body param: The background color of the App Launcher header.
     */
    header_bg_color?: string;

    /**
     * Body param: The design of the App Launcher landing page shown to users when they
     * log in.
     */
    landing_page_design?: BrowserIsolationPermissionsApplication.LandingPageDesign;

    /**
     * Body param: The policies that Access applies to the application, in ascending
     * order of precedence. Items can reference existing policies or create new
     * policies exclusive to the application.
     */
    policies?: Array<
      | BrowserIsolationPermissionsApplication.AccessAppPolicyLink
      | string
      | BrowserIsolationPermissionsApplication.UnionMember2
    >;

    /**
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BrowserIsolationPermissionsApplication.SCIMConfig;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Determines when to skip the App Launcher landing page.
     */
    skip_app_launcher_login_page?: boolean;
  }

  export namespace BrowserIsolationPermissionsApplication {
    export interface FooterLink {
      /**
       * The hypertext in the footer link.
       */
      name: string;

      /**
       * the hyperlink in the footer link.
       */
      url: string;
    }

    /**
     * The design of the App Launcher landing page shown to users when they log in.
     */
    export interface LandingPageDesign {
      /**
       * The background color of the log in button on the landing page.
       */
      button_color?: string;

      /**
       * The color of the text in the log in button on the landing page.
       */
      button_text_color?: string;

      /**
       * The URL of the image shown on the landing page.
       */
      image_url?: string;

      /**
       * The message shown on the landing page.
       */
      message?: string;

      /**
       * The title shown on the landing page.
       */
      title?: string;
    }

    /**
     * A JSON that links a reusable policy to an application.
     */
    export interface AccessAppPolicyLink {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;
    }

    export interface UnionMember2 {
      /**
       * The UUID of the policy
       */
      id?: string;

      /**
       * Administrators who can approve a temporary authentication request.
       */
      approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

      /**
       * Requires the user to request access from an administrator at the start of each
       * session.
       */
      approval_required?: boolean;

      /**
       * Require this application to be served in an isolated browser for users matching
       * this policy. 'Client Web Isolation' must be on for the account in order to use
       * this feature.
       */
      isolation_required?: boolean;

      /**
       * The order of execution for this policy. Must be unique for each policy within an
       * app.
       */
      precedence?: number;

      /**
       * A custom message that will appear on the purpose justification screen.
       */
      purpose_justification_prompt?: string;

      /**
       * Require users to enter a justification when they log in to the application.
       */
      purpose_justification_required?: boolean;

      /**
       * The amount of time that tokens issued for the application will be valid. Must be
       * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
       * m, h.
       */
      session_duration?: string;
    }

    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
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
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

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
     * Body param: Configuration for provisioning to this application via SCIM. This is
     * currently in closed beta.
     */
    scim_config?: BookmarkApplication.SCIMConfig;

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

  export namespace BookmarkApplication {
    /**
     * Configuration for provisioning to this application via SCIM. This is currently
     * in closed beta.
     */
    export interface SCIMConfig {
      /**
       * The UID of the IdP to use as the source for SCIM resources to provision to this
       * application.
       */
      idp_uid: string;

      /**
       * The base URI for the application's SCIM-compatible API.
       */
      remote_uri: string;

      /**
       * Attributes for configuring HTTP Basic authentication scheme for SCIM
       * provisioning to an application.
       */
      authentication?:
        | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
        | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
        | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
        | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
        | Array<
            | ApplicationsAPI.SCIMConfigAuthenticationHTTPBasicParam
            | ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerTokenParam
            | ApplicationsAPI.SCIMConfigAuthenticationOauth2Param
            | SCIMConfig.AccessSCIMConfigAuthenticationAccessServiceToken
          >;

      /**
       * If false, propagates DELETE requests to the target application for SCIM
       * resources. If true, sets 'active' to false on the SCIM resource. Note: Some
       * targets do not support DELETE operations.
       */
      deactivate_on_delete?: boolean;

      /**
       * Whether SCIM provisioning is turned on for this application.
       */
      enabled?: boolean;

      /**
       * A list of mappings to apply to SCIM resources before provisioning them in this
       * application. These can transform or filter the resources to be provisioned.
       */
      mappings?: Array<ApplicationsAPI.SCIMConfigMappingParam>;
    }

    export namespace SCIMConfig {
      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }

      /**
       * Attributes for configuring Access Service Token authentication scheme for SCIM
       * provisioning to an application.
       */
      export interface AccessSCIMConfigAuthenticationAccessServiceToken {
        /**
         * Client ID of the Access service token used to authenticate with the remote
         * service.
         */
        client_id: string;

        /**
         * Client secret of the Access service token used to authenticate with the remote
         * service.
         */
        client_secret: string;

        /**
         * The authentication scheme to use when making SCIM requests to this application.
         */
        scheme: 'access_service_token';
      }
    }
  }

  export interface InfrastructureApplication {
    /**
     * Body param:
     */
    target_criteria: Array<InfrastructureApplication.TargetCriterion>;

    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

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
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The policies that Access applies to the application.
     */
    policies?: Array<InfrastructureApplication.Policy>;
  }

  export namespace InfrastructureApplication {
    export interface TargetCriterion {
      /**
       * The port that the targets use for the chosen communication protocol. A port
       * cannot be assigned to multiple protocols.
       */
      port: number;

      /**
       * The communication protocol your application secures.
       */
      protocol: 'ssh';

      /**
       * Contains a map of target attribute keys to target attribute values.
       */
      target_attributes: Record<string, Array<string>>;
    }

    export interface Policy {
      /**
       * The action Access will take if a user matches this policy. Infrastructure
       * application policies can only use the Allow action.
       */
      decision: ApplicationsAPI.DecisionParam;

      /**
       * Rules evaluated with an OR logical operator. A user needs to meet only one of
       * the Include rules.
       */
      include: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

      /**
       * The name of the Access policy.
       */
      name: string;

      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      connection_rules?: Policy.ConnectionRules;

      /**
       * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
       * meet any of the Exclude rules.
       */
      exclude?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;

      /**
       * Rules evaluated with an AND logical operator. To match the policy, a user must
       * meet all of the Require rules.
       */
      require?: Array<ApplicationsPoliciesAPI.AccessRuleParam>;
    }

    export namespace Policy {
      /**
       * The rules that define how users may connect to the targets secured by your
       * application.
       */
      export interface ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        ssh?: ConnectionRules.SSH;
      }

      export namespace ConnectionRules {
        /**
         * The SSH-specific rules that define how users may connect to the targets secured
         * by your application.
         */
        export interface SSH {
          /**
           * Contains the Unix usernames that may be used when connecting over SSH.
           */
          usernames: Array<string>;

          /**
           * Enables using Identity Provider email alias as SSH username.
           */
          allow_email_alias?: boolean;
        }
      }
    }
  }
}

export interface ApplicationListParams {
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
   * Query param: The aud of the app.
   */
  aud?: string;

  /**
   * Query param: The domain of the app.
   */
  domain?: string;

  /**
   * Query param: The name of the app.
   */
  name?: string;

  /**
   * Query param: Search for apps by other listed query parameters.
   */
  search?: string;
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

Applications.ApplicationListResponsesSinglePage = ApplicationListResponsesSinglePage;
Applications.CAs = CAs;
Applications.CAsSinglePage = CAsSinglePage;
Applications.UserPolicyChecks = UserPolicyChecks;
Applications.Policies = Policies;
Applications.PolicyListResponsesSinglePage = PolicyListResponsesSinglePage;
Applications.PolicyTests = PolicyTests;

export declare namespace Applications {
  export {
    type AllowedHeaders as AllowedHeaders,
    type AllowedIdPs as AllowedIdPs,
    type AllowedMethods as AllowedMethods,
    type AllowedOrigins as AllowedOrigins,
    type AppID as AppID,
    type Application as Application,
    type ApplicationPolicy as ApplicationPolicy,
    type ApplicationSCIMConfig as ApplicationSCIMConfig,
    type ApplicationType as ApplicationType,
    type CORSHeaders as CORSHeaders,
    type Decision as Decision,
    type OIDCSaaSApp as OIDCSaaSApp,
    type SaaSAppNameIDFormat as SaaSAppNameIDFormat,
    type SAMLSaaSApp as SAMLSaaSApp,
    type SCIMConfigAuthenticationHTTPBasic as SCIMConfigAuthenticationHTTPBasic,
    type SCIMConfigAuthenticationOAuthBearerToken as SCIMConfigAuthenticationOAuthBearerToken,
    type SCIMConfigAuthenticationOauth2 as SCIMConfigAuthenticationOauth2,
    type SCIMConfigMapping as SCIMConfigMapping,
    type SelfHostedDomains as SelfHostedDomains,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationRevokeTokensResponse as ApplicationRevokeTokensResponse,
    ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationGetParams as ApplicationGetParams,
    type ApplicationRevokeTokensParams as ApplicationRevokeTokensParams,
  };

  export {
    CAs as CAs,
    type CA as CA,
    type CADeleteResponse as CADeleteResponse,
    CAsSinglePage as CAsSinglePage,
    type CACreateParams as CACreateParams,
    type CAListParams as CAListParams,
    type CADeleteParams as CADeleteParams,
    type CAGetParams as CAGetParams,
  };

  export {
    UserPolicyChecks as UserPolicyChecks,
    type UserPolicyCheckGeo as UserPolicyCheckGeo,
    type UserPolicyCheckListResponse as UserPolicyCheckListResponse,
    type UserPolicyCheckListParams as UserPolicyCheckListParams,
  };

  export {
    Policies as Policies,
    type AccessDevicePostureRule as AccessDevicePostureRule,
    type AccessRule as AccessRule,
    type AnyValidServiceTokenRule as AnyValidServiceTokenRule,
    type AuthenticationMethodRule as AuthenticationMethodRule,
    type AzureGroupRule as AzureGroupRule,
    type CertificateRule as CertificateRule,
    type CountryRule as CountryRule,
    type DomainRule as DomainRule,
    type EmailListRule as EmailListRule,
    type EmailRule as EmailRule,
    type EveryoneRule as EveryoneRule,
    type ExternalEvaluationRule as ExternalEvaluationRule,
    type GitHubOrganizationRule as GitHubOrganizationRule,
    type GroupRule as GroupRule,
    type GSuiteGroupRule as GSuiteGroupRule,
    type IPListRule as IPListRule,
    type IPRule as IPRule,
    type OktaGroupRule as OktaGroupRule,
    type SAMLGroupRule as SAMLGroupRule,
    type ServiceTokenRule as ServiceTokenRule,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    PolicyTests as PolicyTests,
    type PolicyTestCreateResponse as PolicyTestCreateResponse,
    type PolicyTestGetResponse as PolicyTestGetResponse,
    type PolicyTestCreateParams as PolicyTestCreateParams,
    type PolicyTestGetParams as PolicyTestGetParams,
  };
}
