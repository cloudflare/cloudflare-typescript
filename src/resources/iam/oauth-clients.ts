// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class OAuthClients extends APIResource {
  /**
   * Create a new OAuth client for an account.
   *
   * @example
   * ```ts
   * const oauthClient = await client.iam.oauthClients.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   client_name: 'My OAuth App',
   *   grant_types: ['authorization_code', 'refresh_token'],
   *   redirect_uris: ['https://example.com/callback'],
   *   response_types: ['code'],
   *   scopes: ['account.read'],
   *   token_endpoint_auth_method: 'client_secret_post',
   * });
   * ```
   */
  create(
    params: OAuthClientCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/oauth_clients`, { body, ...options }) as Core.APIPromise<{
        result: OAuthClientCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing OAuth client. Only include fields you want to update.
   *
   * @example
   * ```ts
   * const oauthClient = await client.iam.oauthClients.update(
   *   'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    oauthClientId: string,
    params: OAuthClientUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/oauth_clients/${oauthClientId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OAuthClientUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all OAuth clients for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const oauthClientListResponse of client.iam.oauthClients.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: OAuthClientListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthClientListResponsesSinglePage, OAuthClientListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/oauth_clients`,
      OAuthClientListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete an OAuth client.
   *
   * @example
   * ```ts
   * const oauthClient = await client.iam.oauthClients.delete(
   *   'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    oauthClientId: string,
    params: OAuthClientDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/oauth_clients/${oauthClientId}`,
        options,
      ) as Core.APIPromise<{ result: OAuthClientDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the old client secret after a rotation, keeping only the new one. Use
   * this after you have updated your client configuration to use the new secret. The
   * `has_rotated_secret` field on the client indicates whether there is an old
   * secret to delete.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iam.oauthClients.deleteRotatedSecret(
   *     'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  deleteRotatedSecret(
    oauthClientId: string,
    params: OAuthClientDeleteRotatedSecretParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientDeleteRotatedSecretResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/oauth_clients/${oauthClientId}/rotate_secret`,
        options,
      ) as Core.APIPromise<{ result: OAuthClientDeleteRotatedSecretResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details of a specific OAuth client.
   *
   * @example
   * ```ts
   * const oauthClient = await client.iam.oauthClients.get(
   *   'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    oauthClientId: string,
    params: OAuthClientGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/oauth_clients/${oauthClientId}`, options) as Core.APIPromise<{
        result: OAuthClientGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a second client secret so you can update your client configuration
   * before deleting the old one. The `has_rotated_secret` field on the client will
   * be set to `true`.
   *
   * @example
   * ```ts
   * const response = await client.iam.oauthClients.rotateSecret(
   *   'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  rotateSecret(
    oauthClientId: string,
    params: OAuthClientRotateSecretParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthClientRotateSecretResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/oauth_clients/${oauthClientId}/rotate_secret`,
        options,
      ) as Core.APIPromise<{ result: OAuthClientRotateSecretResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OAuthClientListResponsesSinglePage extends SinglePage<OAuthClientListResponse> {}

/**
 * Fields shared by OAuth client responses and create/update requests.
 */
export interface OAuthClientCreateResponse {
  /**
   * The unique identifier for an OAuth client.
   */
  client_id: string;

  /**
   * Visibility of the OAuth client.
   */
  visibility: 'public' | 'private';

  /**
   * Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Human-readable name of the OAuth client.
   */
  client_name?: string;

  /**
   * The client secret. This is the only time the secret is returned in a response.
   */
  client_secret?: string;

  /**
   * URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Client URI domain control verification state.
   */
  client_uri_verification?: OAuthClientCreateResponse.ClientURIVerification;

  /**
   * Timestamp when the OAuth client was created.
   */
  created_at?: string;

  /**
   * Array of OAuth grant types the client is allowed to use. `authorization_code` is
   * required; `refresh_token` may be included optionally.
   */
  grant_types?: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Indicates whether the client has a rotated secret that has not yet been deleted.
   */
  has_rotated_secret?: boolean;

  /**
   * URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Timestamp when the OAuth client was promoted to public visibility.
   */
  promoted_at?: string;

  /**
   * Array of allowed redirect URIs for the client.
   */
  redirect_uris?: Array<string>;

  /**
   * Array of OAuth response types the client is allowed to use.
   */
  response_types?: Array<'token' | 'id_token' | 'code'>;

  /**
   * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes
   * are not accepted. Dot-delimited scopes are validated against available OAuth API
   * scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and
   * `openid` are added or removed automatically based on `grant_types` and
   * `response_types`.
   */
  scopes?: Array<string>;

  /**
   * The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * URL that points to a terms of service document.
   */
  tos_uri?: string;

  /**
   * Timestamp when the OAuth client was last updated.
   */
  updated_at?: string;
}

export namespace OAuthClientCreateResponse {
  /**
   * Client URI domain control verification state.
   */
  export interface ClientURIVerification {
    /**
     * Current verification status for the client URI host.
     */
    status?: 'pending' | 'in_progress' | 'verified' | 'failed';

    /**
     * Exact TXT record value that must be added to DNS to prove ownership of the
     * client URI host.
     */
    text?: string;
  }
}

/**
 * Fields shared by OAuth client responses and create/update requests.
 */
export interface OAuthClientUpdateResponse {
  /**
   * The unique identifier for an OAuth client.
   */
  client_id: string;

  /**
   * Visibility of the OAuth client.
   */
  visibility: 'public' | 'private';

  /**
   * Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Human-readable name of the OAuth client.
   */
  client_name?: string;

  /**
   * URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Client URI domain control verification state.
   */
  client_uri_verification?: OAuthClientUpdateResponse.ClientURIVerification;

  /**
   * Timestamp when the OAuth client was created.
   */
  created_at?: string;

  /**
   * Array of OAuth grant types the client is allowed to use. `authorization_code` is
   * required; `refresh_token` may be included optionally.
   */
  grant_types?: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Indicates whether the client has a rotated secret that has not yet been deleted.
   */
  has_rotated_secret?: boolean;

  /**
   * URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Timestamp when the OAuth client was promoted to public visibility.
   */
  promoted_at?: string;

  /**
   * Array of allowed redirect URIs for the client.
   */
  redirect_uris?: Array<string>;

  /**
   * Array of OAuth response types the client is allowed to use.
   */
  response_types?: Array<'token' | 'id_token' | 'code'>;

  /**
   * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes
   * are not accepted. Dot-delimited scopes are validated against available OAuth API
   * scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and
   * `openid` are added or removed automatically based on `grant_types` and
   * `response_types`.
   */
  scopes?: Array<string>;

  /**
   * The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * URL that points to a terms of service document.
   */
  tos_uri?: string;

  /**
   * Timestamp when the OAuth client was last updated.
   */
  updated_at?: string;
}

export namespace OAuthClientUpdateResponse {
  /**
   * Client URI domain control verification state.
   */
  export interface ClientURIVerification {
    /**
     * Current verification status for the client URI host.
     */
    status?: 'pending' | 'in_progress' | 'verified' | 'failed';

    /**
     * Exact TXT record value that must be added to DNS to prove ownership of the
     * client URI host.
     */
    text?: string;
  }
}

/**
 * Fields shared by OAuth client responses and create/update requests.
 */
export interface OAuthClientListResponse {
  /**
   * The unique identifier for an OAuth client.
   */
  client_id: string;

  /**
   * Visibility of the OAuth client.
   */
  visibility: 'public' | 'private';

  /**
   * Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Human-readable name of the OAuth client.
   */
  client_name?: string;

  /**
   * URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Client URI domain control verification state.
   */
  client_uri_verification?: OAuthClientListResponse.ClientURIVerification;

  /**
   * Timestamp when the OAuth client was created.
   */
  created_at?: string;

  /**
   * Array of OAuth grant types the client is allowed to use. `authorization_code` is
   * required; `refresh_token` may be included optionally.
   */
  grant_types?: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Indicates whether the client has a rotated secret that has not yet been deleted.
   */
  has_rotated_secret?: boolean;

  /**
   * URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Timestamp when the OAuth client was promoted to public visibility.
   */
  promoted_at?: string;

  /**
   * Array of allowed redirect URIs for the client.
   */
  redirect_uris?: Array<string>;

  /**
   * Array of OAuth response types the client is allowed to use.
   */
  response_types?: Array<'token' | 'id_token' | 'code'>;

  /**
   * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes
   * are not accepted. Dot-delimited scopes are validated against available OAuth API
   * scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and
   * `openid` are added or removed automatically based on `grant_types` and
   * `response_types`.
   */
  scopes?: Array<string>;

  /**
   * The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * URL that points to a terms of service document.
   */
  tos_uri?: string;

  /**
   * Timestamp when the OAuth client was last updated.
   */
  updated_at?: string;
}

export namespace OAuthClientListResponse {
  /**
   * Client URI domain control verification state.
   */
  export interface ClientURIVerification {
    /**
     * Current verification status for the client URI host.
     */
    status?: 'pending' | 'in_progress' | 'verified' | 'failed';

    /**
     * Exact TXT record value that must be added to DNS to prove ownership of the
     * client URI host.
     */
    text?: string;
  }
}

export interface OAuthClientDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface OAuthClientDeleteRotatedSecretResponse {
  /**
   * Identifier
   */
  id: string;
}

/**
 * Fields shared by OAuth client responses and create/update requests.
 */
export interface OAuthClientGetResponse {
  /**
   * The unique identifier for an OAuth client.
   */
  client_id: string;

  /**
   * Visibility of the OAuth client.
   */
  visibility: 'public' | 'private';

  /**
   * Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Human-readable name of the OAuth client.
   */
  client_name?: string;

  /**
   * URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Client URI domain control verification state.
   */
  client_uri_verification?: OAuthClientGetResponse.ClientURIVerification;

  /**
   * Timestamp when the OAuth client was created.
   */
  created_at?: string;

  /**
   * Array of OAuth grant types the client is allowed to use. `authorization_code` is
   * required; `refresh_token` may be included optionally.
   */
  grant_types?: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Indicates whether the client has a rotated secret that has not yet been deleted.
   */
  has_rotated_secret?: boolean;

  /**
   * URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Timestamp when the OAuth client was promoted to public visibility.
   */
  promoted_at?: string;

  /**
   * Array of allowed redirect URIs for the client.
   */
  redirect_uris?: Array<string>;

  /**
   * Array of OAuth response types the client is allowed to use.
   */
  response_types?: Array<'token' | 'id_token' | 'code'>;

  /**
   * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes
   * are not accepted. Dot-delimited scopes are validated against available OAuth API
   * scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and
   * `openid` are added or removed automatically based on `grant_types` and
   * `response_types`.
   */
  scopes?: Array<string>;

  /**
   * The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * URL that points to a terms of service document.
   */
  tos_uri?: string;

  /**
   * Timestamp when the OAuth client was last updated.
   */
  updated_at?: string;
}

export namespace OAuthClientGetResponse {
  /**
   * Client URI domain control verification state.
   */
  export interface ClientURIVerification {
    /**
     * Current verification status for the client URI host.
     */
    status?: 'pending' | 'in_progress' | 'verified' | 'failed';

    /**
     * Exact TXT record value that must be added to DNS to prove ownership of the
     * client URI host.
     */
    text?: string;
  }
}

export interface OAuthClientRotateSecretResponse {
  /**
   * The new client secret.
   */
  client_secret?: string;
}

export interface OAuthClientCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Human-readable name of the OAuth client.
   */
  client_name: string;

  /**
   * Body param: Array of OAuth grant types the client is allowed to use.
   * `authorization_code` is required; `refresh_token` may be included optionally.
   */
  grant_types: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Body param: Array of allowed redirect URIs for the client.
   */
  redirect_uris: Array<string>;

  /**
   * Body param: Array of OAuth response types the client is allowed to use.
   */
  response_types: Array<'token' | 'id_token' | 'code'>;

  /**
   * Body param: Array of OAuth scopes the client is allowed to request.
   * Colon-delimited scopes are not accepted. Dot-delimited scopes are validated
   * against available OAuth API scopes; simple identity scopes are allowed. Protocol
   * scopes `offline_access` and `openid` are added or removed automatically based on
   * `grant_types` and `response_types`.
   */
  scopes: Array<string>;

  /**
   * Body param: The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * Body param: Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Body param: URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Body param: URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * Body param: URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Body param: Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Body param: URL that points to a terms of service document.
   */
  tos_uri?: string;
}

export interface OAuthClientUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Array of allowed CORS origins.
   */
  allowed_cors_origins?: Array<string>;

  /**
   * Body param: Human-readable name of the OAuth client.
   */
  client_name?: string;

  /**
   * Body param: URL of the home page of the client.
   */
  client_uri?: string;

  /**
   * Body param: Array of OAuth grant types the client is allowed to use.
   * `authorization_code` is required; `refresh_token` may be included optionally.
   */
  grant_types?: Array<'authorization_code' | 'refresh_token'>;

  /**
   * Body param: URL of the client's logo.
   */
  logo_uri?: string;

  /**
   * Body param: URL that points to a privacy policy document.
   */
  policy_uri?: string;

  /**
   * Body param: Array of allowed post-logout redirect URIs.
   */
  post_logout_redirect_uris?: Array<string>;

  /**
   * Body param: Array of allowed redirect URIs for the client.
   */
  redirect_uris?: Array<string>;

  /**
   * Body param: Array of OAuth response types the client is allowed to use.
   */
  response_types?: Array<'token' | 'id_token' | 'code'>;

  /**
   * Body param: Array of OAuth scopes the client is allowed to request.
   * Colon-delimited scopes are not accepted. Dot-delimited scopes are validated
   * against available OAuth API scopes; simple identity scopes are allowed. Protocol
   * scopes `offline_access` and `openid` are added or removed automatically based on
   * `grant_types` and `response_types`.
   */
  scopes?: Array<string>;

  /**
   * Body param: The authentication method the client uses at the token endpoint.
   */
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post';

  /**
   * Body param: URL that points to a terms of service document.
   */
  tos_uri?: string;

  /**
   * Body param: Promote the OAuth client from private to public visibility. Only
   * `public` is accepted; demotion to `private` is not supported. Promotion requires
   * a non-empty client name, logo URI, verified client URI host, and at least one
   * non-identity scope.
   */
  visibility?: 'public';
}

export interface OAuthClientListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface OAuthClientDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface OAuthClientDeleteRotatedSecretParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface OAuthClientGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface OAuthClientRotateSecretParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

OAuthClients.OAuthClientListResponsesSinglePage = OAuthClientListResponsesSinglePage;

export declare namespace OAuthClients {
  export {
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientListResponse as OAuthClientListResponse,
    type OAuthClientDeleteResponse as OAuthClientDeleteResponse,
    type OAuthClientDeleteRotatedSecretResponse as OAuthClientDeleteRotatedSecretResponse,
    type OAuthClientGetResponse as OAuthClientGetResponse,
    type OAuthClientRotateSecretResponse as OAuthClientRotateSecretResponse,
    OAuthClientListResponsesSinglePage as OAuthClientListResponsesSinglePage,
    type OAuthClientCreateParams as OAuthClientCreateParams,
    type OAuthClientUpdateParams as OAuthClientUpdateParams,
    type OAuthClientListParams as OAuthClientListParams,
    type OAuthClientDeleteParams as OAuthClientDeleteParams,
    type OAuthClientDeleteRotatedSecretParams as OAuthClientDeleteRotatedSecretParams,
    type OAuthClientGetParams as OAuthClientGetParams,
    type OAuthClientRotateSecretParams as OAuthClientRotateSecretParams,
  };
}
