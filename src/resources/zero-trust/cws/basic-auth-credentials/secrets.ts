// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSecrets extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'basicAuthCredentials', 'secrets'] =
    Object.freeze(['zeroTrust', 'cws', 'basicAuthCredentials', 'secrets'] as const);

  /**
   * Adds a password secret to the credential.
   *
   * @example
   * ```ts
   * const basicAuthSecret =
   *   await client.zeroTrust.cws.basicAuthCredentials.secrets.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       password: 'x',
   *     },
   *   );
   * ```
   */
  create(
    credentialID: string,
    params: SecretCreateParams,
    options?: RequestOptions,
  ): APIPromise<BasicAuthSecret> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/basic-auth-credentials/${credentialID}/secrets`, {
        body,
        ...options,
      }) as APIPromise<{ result: BasicAuthSecret }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of secrets belonging to the credential.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const basicAuthSecret of client.zeroTrust.cws.basicAuthCredentials.secrets.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    credentialID: string,
    params: SecretListParams,
    options?: RequestOptions,
  ): PagePromise<BasicAuthSecretsCursorPagination, BasicAuthSecret> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/basic-auth-credentials/${credentialID}/secrets`,
      CursorPagination<BasicAuthSecret>,
      { query, ...options },
    );
  }

  /**
   * Deletes the specified secret from the credential.
   *
   * @example
   * ```ts
   * const secret =
   *   await client.zeroTrust.cws.basicAuthCredentials.secrets.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(
    secretID: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { account_id, credential_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/basic-auth-credentials/${credential_id}/secrets/${secretID}`,
        options,
      ) as APIPromise<{ result: SecretDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified secret's metadata without exposing its password or hash.
   *
   * @example
   * ```ts
   * const basicAuthSecret =
   *   await client.zeroTrust.cws.basicAuthCredentials.secrets.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       credential_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(secretID: string, params: SecretGetParams, options?: RequestOptions): APIPromise<BasicAuthSecret> {
    const { account_id, credential_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/basic-auth-credentials/${credential_id}/secrets/${secretID}`,
        options,
      ) as APIPromise<{ result: BasicAuthSecret }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Secrets extends BaseSecrets {}

export type BasicAuthSecretsCursorPagination = CursorPagination<BasicAuthSecret>;

export interface BasicAuthSecret {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Optional RFC 3339 expiration time. Omit for no expiration.
   */
  expires_at?: string;
}

export interface SecretDeleteResponse {
  id: string;
}

export interface SecretCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Password stored only as a one-way hash and never returned. Maximum
   * 72 UTF-8 bytes.
   */
  password: string;

  /**
   * Body param: Optional deactivation deadline (RFC 3339). Omit or null for no
   * expiry.
   */
  expires_at?: string | null;
}

export interface SecretListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'created_at';
}

export interface SecretDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * ID of the parent credential
   */
  credential_id: string;
}

export interface SecretGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * ID of the parent credential
   */
  credential_id: string;
}

export declare namespace Secrets {
  export {
    type BasicAuthSecret as BasicAuthSecret,
    type SecretDeleteResponse as SecretDeleteResponse,
    type BasicAuthSecretsCursorPagination as BasicAuthSecretsCursorPagination,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetParams as SecretGetParams,
  };
}
