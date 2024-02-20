// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IdentityProvidersAPI from 'cloudflare/resources/access/identity-providers';

export class IdentityProviders extends APIResource {
  /**
   * Adds a new identity provider to Access.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: IdentityProviderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/identity_providers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IdentityProviderCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured identity provider.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    body: IdentityProviderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderUpdateResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IdentityProviderUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all configured identity providers.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderListResponse | null> {
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
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse> {
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
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/identity_providers/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: IdentityProviderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IdentityProviderCreateResponse =
  | IdentityProviderCreateResponse.AccessAzureAd
  | IdentityProviderCreateResponse.AccessCentrify
  | IdentityProviderCreateResponse.AccessFacebook
  | IdentityProviderCreateResponse.AccessGitHub
  | IdentityProviderCreateResponse.AccessGoogle
  | IdentityProviderCreateResponse.AccessGoogleApps
  | IdentityProviderCreateResponse.AccessLinkedin
  | IdentityProviderCreateResponse.AccessOidc
  | IdentityProviderCreateResponse.AccessOkta
  | IdentityProviderCreateResponse.AccessOnelogin
  | IdentityProviderCreateResponse.AccessPingone
  | IdentityProviderCreateResponse.AccessSaml
  | IdentityProviderCreateResponse.AccessYandex
  | IdentityProviderCreateResponse.AccessOnetimepin;

export namespace IdentityProviderCreateResponse {
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

export type IdentityProviderUpdateResponse =
  | IdentityProviderUpdateResponse.AccessAzureAd
  | IdentityProviderUpdateResponse.AccessCentrify
  | IdentityProviderUpdateResponse.AccessFacebook
  | IdentityProviderUpdateResponse.AccessGitHub
  | IdentityProviderUpdateResponse.AccessGoogle
  | IdentityProviderUpdateResponse.AccessGoogleApps
  | IdentityProviderUpdateResponse.AccessLinkedin
  | IdentityProviderUpdateResponse.AccessOidc
  | IdentityProviderUpdateResponse.AccessOkta
  | IdentityProviderUpdateResponse.AccessOnelogin
  | IdentityProviderUpdateResponse.AccessPingone
  | IdentityProviderUpdateResponse.AccessSaml
  | IdentityProviderUpdateResponse.AccessYandex
  | IdentityProviderUpdateResponse.AccessOnetimepin;

export namespace IdentityProviderUpdateResponse {
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

export type IdentityProviderGetResponse =
  | IdentityProviderGetResponse.AccessAzureAd
  | IdentityProviderGetResponse.AccessCentrify
  | IdentityProviderGetResponse.AccessFacebook
  | IdentityProviderGetResponse.AccessGitHub
  | IdentityProviderGetResponse.AccessGoogle
  | IdentityProviderGetResponse.AccessGoogleApps
  | IdentityProviderGetResponse.AccessLinkedin
  | IdentityProviderGetResponse.AccessOidc
  | IdentityProviderGetResponse.AccessOkta
  | IdentityProviderGetResponse.AccessOnelogin
  | IdentityProviderGetResponse.AccessPingone
  | IdentityProviderGetResponse.AccessSaml
  | IdentityProviderGetResponse.AccessYandex
  | IdentityProviderGetResponse.AccessOnetimepin;

export namespace IdentityProviderGetResponse {
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

export type IdentityProviderCreateParams =
  | IdentityProviderCreateParams.AccessAzureAd
  | IdentityProviderCreateParams.AccessCentrify
  | IdentityProviderCreateParams.AccessFacebook
  | IdentityProviderCreateParams.AccessGitHub
  | IdentityProviderCreateParams.AccessGoogle
  | IdentityProviderCreateParams.AccessGoogleApps
  | IdentityProviderCreateParams.AccessLinkedin
  | IdentityProviderCreateParams.AccessOidc
  | IdentityProviderCreateParams.AccessOkta
  | IdentityProviderCreateParams.AccessOnelogin
  | IdentityProviderCreateParams.AccessPingone
  | IdentityProviderCreateParams.AccessSaml
  | IdentityProviderCreateParams.AccessYandex
  | IdentityProviderCreateParams.AccessOnetimepin;

export namespace IdentityProviderCreateParams {
  export interface AccessAzureAd {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderCreateParams.AccessAzureAd.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessAzureAd.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessCentrify.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessCentrify.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessFacebook.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessFacebook.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessGitHub.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessGitHub.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessGoogle.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessGoogle.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessGoogleApps.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessGoogleApps.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessLinkedin.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessLinkedin.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessOidc.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessOidc.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessOkta.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessOkta.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessOnelogin.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessOnelogin.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessPingone.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessPingone.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessSaml.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessSaml.ScimConfig;
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
    config: IdentityProviderCreateParams.AccessYandex.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessYandex.ScimConfig;
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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderCreateParams.AccessOnetimepin.ScimConfig;
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

export type IdentityProviderUpdateParams =
  | IdentityProviderUpdateParams.AccessAzureAd
  | IdentityProviderUpdateParams.AccessCentrify
  | IdentityProviderUpdateParams.AccessFacebook
  | IdentityProviderUpdateParams.AccessGitHub
  | IdentityProviderUpdateParams.AccessGoogle
  | IdentityProviderUpdateParams.AccessGoogleApps
  | IdentityProviderUpdateParams.AccessLinkedin
  | IdentityProviderUpdateParams.AccessOidc
  | IdentityProviderUpdateParams.AccessOkta
  | IdentityProviderUpdateParams.AccessOnelogin
  | IdentityProviderUpdateParams.AccessPingone
  | IdentityProviderUpdateParams.AccessSaml
  | IdentityProviderUpdateParams.AccessYandex
  | IdentityProviderUpdateParams.AccessOnetimepin;

export namespace IdentityProviderUpdateParams {
  export interface AccessAzureAd {
    /**
     * The configuration parameters for the identity provider. To view the required
     * parameters for a specific provider, refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    config: IdentityProviderUpdateParams.AccessAzureAd.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessAzureAd.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessCentrify.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessCentrify.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessFacebook.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessFacebook.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessGitHub.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessGitHub.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessGoogle.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessGoogle.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessGoogleApps.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessGoogleApps.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessLinkedin.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessLinkedin.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessOidc.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessOidc.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessOkta.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessOkta.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessOnelogin.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessOnelogin.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessPingone.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessPingone.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessSaml.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessSaml.ScimConfig;
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
    config: IdentityProviderUpdateParams.AccessYandex.Config;

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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessYandex.ScimConfig;
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
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.AccessOnetimepin.ScimConfig;
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

export namespace IdentityProviders {
  export import IdentityProviderCreateResponse = IdentityProvidersAPI.IdentityProviderCreateResponse;
  export import IdentityProviderUpdateResponse = IdentityProvidersAPI.IdentityProviderUpdateResponse;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderGetResponse = IdentityProvidersAPI.IdentityProviderGetResponse;
  export import IdentityProviderCreateParams = IdentityProvidersAPI.IdentityProviderCreateParams;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
}
