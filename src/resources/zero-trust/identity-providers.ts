// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import * as IdentityProvidersAPI from './identity-providers';
import { SinglePage } from '../../pagination';

export class IdentityProviders extends APIResource {
  /**
   * Adds a new identity provider to Access.
   */
  create(
    params: IdentityProviderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProvider> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/identity_providers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IdentityProvider }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured identity provider.
   */
  update(
    identityProviderId: string,
    params: IdentityProviderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProvider> {
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
      this._client.put(
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${identityProviderId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: IdentityProvider }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all configured identity providers.
   */
  list(
    params?: IdentityProviderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IdentityProviderListResponsesSinglePage, IdentityProviderListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<IdentityProviderListResponsesSinglePage, IdentityProviderListResponse>;
  list(
    params: IdentityProviderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IdentityProviderListResponsesSinglePage, IdentityProviderListResponse> {
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
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/identity_providers`,
      IdentityProviderListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes an identity provider from Access.
   */
  delete(
    identityProviderId: string,
    params?: IdentityProviderDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse>;
  delete(
    identityProviderId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse>;
  delete(
    identityProviderId: string,
    params: IdentityProviderDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(identityProviderId, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${identityProviderId}`,
        options,
      ) as Core.APIPromise<{ result: IdentityProviderDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a configured identity provider.
   */
  get(
    identityProviderId: string,
    params?: IdentityProviderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProvider>;
  get(identityProviderId: string, options?: Core.RequestOptions): Core.APIPromise<IdentityProvider>;
  get(
    identityProviderId: string,
    params: IdentityProviderGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProvider> {
    if (isRequestOptions(params)) {
      return this.get(identityProviderId, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${identityProviderId}`,
        options,
      ) as Core.APIPromise<{ result: IdentityProvider }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IdentityProviderListResponsesSinglePage extends SinglePage<IdentityProviderListResponse> {}

export interface AzureAD {
  /**
   * The configuration parameters for the identity provider. To view the required
   * parameters for a specific provider, refer to our
   * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
   */
  config: AzureAD.Config;

  /**
   * The name of the identity provider, shown to users on the login page.
   */
  name: string;

  /**
   * The type of identity provider. To determine the value for a specific provider,
   * refer to our
   * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
   */
  type: IdentityProviderType;

  /**
   * UUID
   */
  id?: string;

  /**
   * The configuration settings for enabling a System for Cross-Domain Identity
   * Management (SCIM) with the identity provider.
   */
  scim_config?: IdentityProviderSCIMConfig;
}

export namespace AzureAD {
  /**
   * The configuration parameters for the identity provider. To view the required
   * parameters for a specific provider, refer to our
   * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
   */
  export interface Config {
    /**
     * Custom claims
     */
    claims?: Array<string>;

    /**
     * Your OAuth Client ID
     */
    client_id?: string;

    /**
     * Your OAuth Client Secret
     */
    client_secret?: string;

    /**
     * Should Cloudflare try to load authentication contexts from your account
     */
    conditional_access_enabled?: boolean;

    /**
     * Your Azure directory uuid
     */
    directory_id?: string;

    /**
     * The claim name for email in the id_token response.
     */
    email_claim_name?: string;

    /**
     * Indicates the type of user interaction that is required. prompt=login forces the
     * user to enter their credentials on that request, negating single-sign on.
     * prompt=none is the opposite. It ensures that the user isn't presented with any
     * interactive prompt. If the request can't be completed silently by using
     * single-sign on, the Microsoft identity platform returns an interaction_required
     * error. prompt=select_account interrupts single sign-on providing account
     * selection experience listing all the accounts either in session or any
     * remembered account or an option to choose to use a different account altogether.
     */
    prompt?: 'login' | 'select_account' | 'none';

    /**
     * Should Cloudflare try to load groups from your account
     */
    support_groups?: boolean;
  }
}

export interface GenericOAuthConfig {
  /**
   * Your OAuth Client ID
   */
  client_id?: string;

  /**
   * Your OAuth Client Secret
   */
  client_secret?: string;
}

export interface GenericOAuthConfigParam {
  /**
   * Your OAuth Client ID
   */
  client_id?: string;

  /**
   * Your OAuth Client Secret
   */
  client_secret?: string;
}

export type IdentityProvider =
  | AzureAD
  | IdentityProvider.AccessCentrify
  | IdentityProvider.AccessFacebook
  | IdentityProvider.AccessGitHub
  | IdentityProvider.AccessGoogle
  | IdentityProvider.AccessGoogleApps
  | IdentityProvider.AccessLinkedin
  | IdentityProvider.AccessOIDC
  | IdentityProvider.AccessOkta
  | IdentityProvider.AccessOnelogin
  | IdentityProvider.AccessPingone
  | IdentityProvider.AccessSAML
  | IdentityProvider.AccessYandex
  | IdentityProvider.AccessOnetimepin;

export namespace IdentityProvider {
  export interface AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOIDC.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }
  }

  export interface AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }
  }

  export interface AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }
  }

  export interface AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }
  }

  export interface AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessSAML.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }
  }

  export interface AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessOnetimepin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }
}

/**
 * The configuration settings for enabling a System for Cross-Domain Identity
 * Management (SCIM) with the identity provider.
 */
export interface IdentityProviderSCIMConfig {
  /**
   * A flag to enable or disable SCIM for the identity provider.
   */
  enabled?: boolean;

  /**
   * A flag to revoke a user's session in Access and force a reauthentication on the
   * user's Gateway session when they have been added or removed from a group in the
   * Identity Provider.
   */
  group_member_deprovision?: boolean;

  /**
   * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
   * in the Identity Provider. This cannot be enabled unless user_deprovision is also
   * enabled.
   */
  seat_deprovision?: boolean;

  /**
   * A read-only token generated when the SCIM integration is enabled for the first
   * time. It is redacted on subsequent requests. If you lose this you will need to
   * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
   */
  secret?: string;

  /**
   * A flag to enable revoking a user's session in Access and Gateway when they have
   * been deprovisioned in the Identity Provider.
   */
  user_deprovision?: boolean;
}

/**
 * The configuration settings for enabling a System for Cross-Domain Identity
 * Management (SCIM) with the identity provider.
 */
export interface IdentityProviderSCIMConfigParam {
  /**
   * A flag to enable or disable SCIM for the identity provider.
   */
  enabled?: boolean;

  /**
   * A flag to revoke a user's session in Access and force a reauthentication on the
   * user's Gateway session when they have been added or removed from a group in the
   * Identity Provider.
   */
  group_member_deprovision?: boolean;

  /**
   * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
   * in the Identity Provider. This cannot be enabled unless user_deprovision is also
   * enabled.
   */
  seat_deprovision?: boolean;

  /**
   * A read-only token generated when the SCIM integration is enabled for the first
   * time. It is redacted on subsequent requests. If you lose this you will need to
   * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
   */
  secret?: string;

  /**
   * A flag to enable revoking a user's session in Access and Gateway when they have
   * been deprovisioned in the Identity Provider.
   */
  user_deprovision?: boolean;
}

/**
 * The type of identity provider. To determine the value for a specific provider,
 * refer to our
 * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
 */
export type IdentityProviderType =
  | 'onetimepin'
  | 'azureAD'
  | 'saml'
  | 'centrify'
  | 'facebook'
  | 'github'
  | 'google-apps'
  | 'google'
  | 'linkedin'
  | 'oidc'
  | 'okta'
  | 'onelogin'
  | 'pingone'
  | 'yandex';

/**
 * The type of identity provider. To determine the value for a specific provider,
 * refer to our
 * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
 */
export type IdentityProviderTypeParam =
  | 'onetimepin'
  | 'azureAD'
  | 'saml'
  | 'centrify'
  | 'facebook'
  | 'github'
  | 'google-apps'
  | 'google'
  | 'linkedin'
  | 'oidc'
  | 'okta'
  | 'onelogin'
  | 'pingone'
  | 'yandex';

export type IdentityProviderListResponse =
  | AzureAD
  | IdentityProviderListResponse.AccessCentrify
  | IdentityProviderListResponse.AccessFacebook
  | IdentityProviderListResponse.AccessGitHub
  | IdentityProviderListResponse.AccessGoogle
  | IdentityProviderListResponse.AccessGoogleApps
  | IdentityProviderListResponse.AccessLinkedin
  | IdentityProviderListResponse.AccessOIDC
  | IdentityProviderListResponse.AccessOkta
  | IdentityProviderListResponse.AccessOnelogin
  | IdentityProviderListResponse.AccessPingone
  | IdentityProviderListResponse.AccessSAML
  | IdentityProviderListResponse.AccessYandex;

export namespace IdentityProviderListResponse {
  export interface AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export interface AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOIDC.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }
  }

  export interface AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }
  }

  export interface AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }
  }

  export interface AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }
  }

  export interface AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessSAML.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }

  export namespace AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }
  }

  export interface AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProvidersAPI.GenericOAuthConfig;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProvidersAPI.IdentityProviderType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProvidersAPI.IdentityProviderSCIMConfig;
  }
}

export interface IdentityProviderDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export type IdentityProviderCreateParams =
  | IdentityProviderCreateParams.AzureAD
  | IdentityProviderCreateParams.AccessCentrify
  | IdentityProviderCreateParams.AccessFacebook
  | IdentityProviderCreateParams.AccessGitHub
  | IdentityProviderCreateParams.AccessGoogle
  | IdentityProviderCreateParams.AccessGoogleApps
  | IdentityProviderCreateParams.AccessLinkedin
  | IdentityProviderCreateParams.AccessOIDC
  | IdentityProviderCreateParams.AccessOkta
  | IdentityProviderCreateParams.AccessOnelogin
  | IdentityProviderCreateParams.AccessPingone
  | IdentityProviderCreateParams.AccessSAML
  | IdentityProviderCreateParams.AccessYandex
  | IdentityProviderCreateParams.AccessOnetimepin;

export namespace IdentityProviderCreateParams {
  export interface AzureAD {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AzureAD.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AzureAD {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Indicates the type of user interaction that is required. prompt=login forces the
       * user to enter their credentials on that request, negating single-sign on.
       * prompt=none is the opposite. It ensures that the user isn't presented with any
       * interactive prompt. If the request can't be completed silently by using
       * single-sign on, the Microsoft identity platform returns an interaction_required
       * error. prompt=select_account interrupts single sign-on providing account
       * selection experience listing all the accounts either in session or any
       * remembered account or an option to choose to use a different account altogether.
       */
      prompt?: 'login' | 'select_account' | 'none';

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }
  }

  export interface AccessCentrify {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessCentrify.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessFacebook {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessGitHub {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessGoogle {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessGoogle.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessGoogleApps {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessGoogleApps.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessLinkedin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessOIDC {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessOIDC.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }
  }

  export interface AccessOkta {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessOkta.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }
  }

  export interface AccessOnelogin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessOnelogin.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }
  }

  export interface AccessPingone {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessPingone.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }
  }

  export interface AccessSAML {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessSAML.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }
  }

  export interface AccessYandex {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessOnetimepin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: unknown;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }
}

export type IdentityProviderUpdateParams =
  | IdentityProviderUpdateParams.AzureAD
  | IdentityProviderUpdateParams.AccessCentrify
  | IdentityProviderUpdateParams.AccessFacebook
  | IdentityProviderUpdateParams.AccessGitHub
  | IdentityProviderUpdateParams.AccessGoogle
  | IdentityProviderUpdateParams.AccessGoogleApps
  | IdentityProviderUpdateParams.AccessLinkedin
  | IdentityProviderUpdateParams.AccessOIDC
  | IdentityProviderUpdateParams.AccessOkta
  | IdentityProviderUpdateParams.AccessOnelogin
  | IdentityProviderUpdateParams.AccessPingone
  | IdentityProviderUpdateParams.AccessSAML
  | IdentityProviderUpdateParams.AccessYandex
  | IdentityProviderUpdateParams.AccessOnetimepin;

export namespace IdentityProviderUpdateParams {
  export interface AzureAD {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AzureAD.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AzureAD {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Indicates the type of user interaction that is required. prompt=login forces the
       * user to enter their credentials on that request, negating single-sign on.
       * prompt=none is the opposite. It ensures that the user isn't presented with any
       * interactive prompt. If the request can't be completed silently by using
       * single-sign on, the Microsoft identity platform returns an interaction_required
       * error. prompt=select_account interrupts single sign-on providing account
       * selection experience listing all the accounts either in session or any
       * remembered account or an option to choose to use a different account altogether.
       */
      prompt?: 'login' | 'select_account' | 'none';

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }
  }

  export interface AccessCentrify {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessCentrify.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessCentrify {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessFacebook {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessGitHub {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessGoogle {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessGoogle.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessGoogle {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessGoogleApps {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessGoogleApps.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessGoogleApps {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }
  }

  export interface AccessLinkedin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessOIDC {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessOIDC.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOIDC {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }
  }

  export interface AccessOkta {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessOkta.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOkta {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }
  }

  export interface AccessOnelogin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessOnelogin.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessOnelogin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }
  }

  export interface AccessPingone {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessPingone.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessPingone {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }
  }

  export interface AccessSAML {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessSAML.Config;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export namespace AccessSAML {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }
  }

  export interface AccessYandex {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: GenericOAuthConfigParam;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }

  export interface AccessOnetimepin {
    /**
     * Body param: The configuration parameters for the identity provider. To view the
     * required parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: unknown;

    /**
     * Body param: The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * Body param: The type of identity provider. To determine the value for a specific
     * provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type: IdentityProviderTypeParam;

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
     * Body param: The configuration settings for enabling a System for Cross-Domain
     * Identity Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderSCIMConfigParam;
  }
}

export interface IdentityProviderListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface IdentityProviderDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface IdentityProviderGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace IdentityProviders {
  export import AzureAD = IdentityProvidersAPI.AzureAD;
  export import GenericOAuthConfig = IdentityProvidersAPI.GenericOAuthConfig;
  export import IdentityProvider = IdentityProvidersAPI.IdentityProvider;
  export import IdentityProviderSCIMConfig = IdentityProvidersAPI.IdentityProviderSCIMConfig;
  export import IdentityProviderType = IdentityProvidersAPI.IdentityProviderType;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderListResponsesSinglePage = IdentityProvidersAPI.IdentityProviderListResponsesSinglePage;
  export import IdentityProviderCreateParams = IdentityProvidersAPI.IdentityProviderCreateParams;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderListParams = IdentityProvidersAPI.IdentityProviderListParams;
  export import IdentityProviderDeleteParams = IdentityProvidersAPI.IdentityProviderDeleteParams;
  export import IdentityProviderGetParams = IdentityProvidersAPI.IdentityProviderGetParams;
}
