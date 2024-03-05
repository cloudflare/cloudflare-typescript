// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as IdentityProvidersAPI from 'cloudflare/resources/zero-trust/identity-providers';

export class IdentityProviders extends APIResource {
  /**
   * Adds a new identity provider to Access.
   */
  create(
    params: IdentityProviderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessIdentityProviders> {
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
      }) as Core.APIPromise<{ result: AccessIdentityProviders }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured identity provider.
   */
  update(
    uuid: string,
    params: IdentityProviderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessIdentityProviders> {
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
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessIdentityProviders }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all configured identity providers.
   */
  list(
    params?: IdentityProviderListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<IdentityProviderListResponse | null>;
  list(
    params: IdentityProviderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderListResponse | null> {
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
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers`,
        options,
      ) as Core.APIPromise<{ result: IdentityProviderListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an identity provider from Access.
   */
  delete(
    uuid: string,
    params?: IdentityProviderDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse>;
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<IdentityProviderDeleteResponse>;
  delete(
    uuid: string,
    params: IdentityProviderDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(uuid, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: IdentityProviderDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a configured identity provider.
   */
  get(
    uuid: string,
    params?: IdentityProviderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessIdentityProviders>;
  get(uuid: string, options?: Core.RequestOptions): Core.APIPromise<AccessIdentityProviders>;
  get(
    uuid: string,
    params: IdentityProviderGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessIdentityProviders> {
    if (isRequestOptions(params)) {
      return this.get(uuid, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: AccessIdentityProviders }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccessIdentityProviders =
  | AccessIdentityProviders.AccessAzureAd
  | AccessIdentityProviders.AccessCentrify
  | AccessIdentityProviders.AccessFacebook
  | AccessIdentityProviders.AccessGitHub
  | AccessIdentityProviders.AccessGoogle
  | AccessIdentityProviders.AccessGoogleApps
  | AccessIdentityProviders.AccessLinkedin
  | AccessIdentityProviders.AccessOidc
  | AccessIdentityProviders.AccessOkta
  | AccessIdentityProviders.AccessOnelogin
  | AccessIdentityProviders.AccessPingone
  | AccessIdentityProviders.AccessSaml
  | AccessIdentityProviders.AccessYandex
  | AccessIdentityProviders.AccessOnetimepin;

export namespace AccessIdentityProviders {
  export interface AccessAzureAd {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessAzureAd.ScimConfig;
  }

  export namespace AccessAzureAd {
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
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessCentrify.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessFacebook.ScimConfig;
  }

  export namespace AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGitHub.ScimConfig;
  }

  export namespace AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGoogle.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGoogleApps.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessLinkedin.ScimConfig;
  }

  export namespace AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessOidc {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOidc.ScimConfig;
  }

  export namespace AccessOidc {
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOkta.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOnelogin.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessPingone.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessSaml {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessSaml.ScimConfig;
  }

  export namespace AccessSaml {
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessYandex.ScimConfig;
  }

  export namespace AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOnetimepin.ScimConfig;
  }

  export namespace AccessOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }
}

export type IdentityProviderListResponse = Array<
  | IdentityProviderListResponse.AccessAzureAd
  | IdentityProviderListResponse.AccessCentrify
  | IdentityProviderListResponse.AccessFacebook
  | IdentityProviderListResponse.AccessGitHub
  | IdentityProviderListResponse.AccessGoogle
  | IdentityProviderListResponse.AccessGoogleApps
  | IdentityProviderListResponse.AccessLinkedin
  | IdentityProviderListResponse.AccessOidc
  | IdentityProviderListResponse.AccessOkta
  | IdentityProviderListResponse.AccessOnelogin
  | IdentityProviderListResponse.AccessPingone
  | IdentityProviderListResponse.AccessSaml
  | IdentityProviderListResponse.AccessYandex
>;

export namespace IdentityProviderListResponse {
  export interface AccessAzureAd {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessAzureAd.ScimConfig;
  }

  export namespace AccessAzureAd {
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
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessCentrify.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessFacebook.ScimConfig;
  }

  export namespace AccessFacebook {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGitHub.ScimConfig;
  }

  export namespace AccessGitHub {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGoogle.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessGoogleApps.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessLinkedin.ScimConfig;
  }

  export namespace AccessLinkedin {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessOidc {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOidc.ScimConfig;
  }

  export namespace AccessOidc {
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOkta.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessOnelogin.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessPingone.ScimConfig;
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessSaml {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessSaml.ScimConfig;
  }

  export namespace AccessSaml {
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

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }

  export interface AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: AccessYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name: string;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type:
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
     * UUID
     */
    id?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: AccessYandex.ScimConfig;
  }

  export namespace AccessYandex {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
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
  }
}

export interface IdentityProviderDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface IdentityProviderCreateParams {
  /**
   * Body param:
   */
  config: IdentityProviderCreateParams.Config;

  /**
   * Body param: The name of the identity provider, shown to users on the login page.
   */
  name: string;

  /**
   * Body param: The type of identity provider. To determine the value for a specific
   * provider, refer to our
   * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
   */
  type:
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
  scim_config?: IdentityProviderCreateParams.ScimConfig;
}

export namespace IdentityProviderCreateParams {
  export interface Config {
    /**
     * Your companies TLD
     */
    apps_domain?: string;

    /**
     * A list of SAML attribute names that will be added to your signed JWT token and
     * can be used in SAML policy rules.
     */
    attributes?: Array<string>;

    /**
     * The authorization_endpoint URL of your IdP
     */
    auth_url?: string;

    /**
     * Your okta authorization server id
     */
    authorization_server_id?: string;

    /**
     * Your centrify account url
     */
    centrify_account?: string;

    /**
     * Your centrify app id
     */
    centrify_app_id?: string;

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
     * Should Cloudflare try to load authentication contexts from your account
     */
    conditional_access_enabled?: boolean;

    /**
     * Your Azure directory uuid
     */
    directory_id?: string;

    /**
     * The attribute name for email in the SAML response.
     */
    email_attribute_name?: string;

    /**
     * The claim name for email in the id_token response.
     */
    email_claim_name?: string;

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
     * Your okta account url
     */
    okta_account?: string;

    /**
     * Your OneLogin account url
     */
    onelogin_account?: string;

    /**
     * Your PingOne environment identifier
     */
    ping_env_id?: string;

    /**
     * OAuth scopes
     */
    scopes?: Array<string>;

    /**
     * Sign the SAML authentication request with Access credentials. To verify the
     * signature, use the public key from the Access certs endpoints.
     */
    sign_request?: boolean;

    /**
     * URL to send the SAML authentication requests to
     */
    sso_target_url?: string;

    /**
     * Should Cloudflare try to load groups from your account
     */
    support_groups?: boolean;

    /**
     * The token_endpoint URL of your IdP
     */
    token_url?: string;
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

  export interface ScimConfig {
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
}

export interface IdentityProviderUpdateParams {
  /**
   * Body param:
   */
  config: IdentityProviderUpdateParams.Config;

  /**
   * Body param: The name of the identity provider, shown to users on the login page.
   */
  name: string;

  /**
   * Body param: The type of identity provider. To determine the value for a specific
   * provider, refer to our
   * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
   */
  type:
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
  scim_config?: IdentityProviderUpdateParams.ScimConfig;
}

export namespace IdentityProviderUpdateParams {
  export interface Config {
    /**
     * Your companies TLD
     */
    apps_domain?: string;

    /**
     * A list of SAML attribute names that will be added to your signed JWT token and
     * can be used in SAML policy rules.
     */
    attributes?: Array<string>;

    /**
     * The authorization_endpoint URL of your IdP
     */
    auth_url?: string;

    /**
     * Your okta authorization server id
     */
    authorization_server_id?: string;

    /**
     * Your centrify account url
     */
    centrify_account?: string;

    /**
     * Your centrify app id
     */
    centrify_app_id?: string;

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
     * Should Cloudflare try to load authentication contexts from your account
     */
    conditional_access_enabled?: boolean;

    /**
     * Your Azure directory uuid
     */
    directory_id?: string;

    /**
     * The attribute name for email in the SAML response.
     */
    email_attribute_name?: string;

    /**
     * The claim name for email in the id_token response.
     */
    email_claim_name?: string;

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
     * Your okta account url
     */
    okta_account?: string;

    /**
     * Your OneLogin account url
     */
    onelogin_account?: string;

    /**
     * Your PingOne environment identifier
     */
    ping_env_id?: string;

    /**
     * OAuth scopes
     */
    scopes?: Array<string>;

    /**
     * Sign the SAML authentication request with Access credentials. To verify the
     * signature, use the public key from the Access certs endpoints.
     */
    sign_request?: boolean;

    /**
     * URL to send the SAML authentication requests to
     */
    sso_target_url?: string;

    /**
     * Should Cloudflare try to load groups from your account
     */
    support_groups?: boolean;

    /**
     * The token_endpoint URL of your IdP
     */
    token_url?: string;
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

  export interface ScimConfig {
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
  export import AccessIdentityProviders = IdentityProvidersAPI.AccessIdentityProviders;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderCreateParams = IdentityProvidersAPI.IdentityProviderCreateParams;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderListParams = IdentityProvidersAPI.IdentityProviderListParams;
  export import IdentityProviderDeleteParams = IdentityProvidersAPI.IdentityProviderDeleteParams;
  export import IdentityProviderGetParams = IdentityProvidersAPI.IdentityProviderGetParams;
}
