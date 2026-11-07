// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SecretsAPI from './secrets';
import {
  BaseSecrets,
  BasicAuthSecret,
  BasicAuthSecretsCursorPagination,
  SecretCreateParams,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretGetParams,
  SecretListParams,
  Secrets,
} from './secrets';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseBasicAuthCredentials extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'basicAuthCredentials'] = Object.freeze([
    'zeroTrust',
    'cws',
    'basicAuthCredentials',
  ] as const);

  /**
   * Creates a basic-auth credential with the specified username.
   *
   * @example
   * ```ts
   * const basicAuthCredential =
   *   await client.zeroTrust.cws.basicAuthCredentials.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     username: 'x',
   *   });
   * ```
   */
  create(params: BasicAuthCredentialCreateParams, options?: RequestOptions): APIPromise<BasicAuthCredential> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/basic-auth-credentials`, {
        body,
        ...options,
      }) as APIPromise<{ result: BasicAuthCredential }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of basic-auth credentials in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const basicAuthCredential of client.zeroTrust.cws.basicAuthCredentials.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BasicAuthCredentialListParams,
    options?: RequestOptions,
  ): PagePromise<BasicAuthCredentialsCursorPagination, BasicAuthCredential> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/basic-auth-credentials`,
      CursorPagination<BasicAuthCredential>,
      { query, ...options },
    );
  }

  /**
   * Deletes the credential and its secrets if it is not attached to a deployment.
   *
   * @example
   * ```ts
   * const basicAuthCredential =
   *   await client.zeroTrust.cws.basicAuthCredentials.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    credentialID: string,
    params: BasicAuthCredentialDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BasicAuthCredentialDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/basic-auth-credentials/${credentialID}`,
        options,
      ) as APIPromise<{ result: BasicAuthCredentialDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the basic-auth credential with the specified ID.
   *
   * @example
   * ```ts
   * const basicAuthCredential =
   *   await client.zeroTrust.cws.basicAuthCredentials.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  get(
    credentialID: string,
    params: BasicAuthCredentialGetParams,
    options?: RequestOptions,
  ): APIPromise<BasicAuthCredential> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/basic-auth-credentials/${credentialID}`,
        options,
      ) as APIPromise<{ result: BasicAuthCredential }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BasicAuthCredentials extends BaseBasicAuthCredentials {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
}

export type BasicAuthCredentialsCursorPagination = CursorPagination<BasicAuthCredential>;

export interface BasicAuthCredential {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  updated_at: string;

  /**
   * Login presented by the client. Printable ASCII only, excluding space and colon
   * (RFC 7617 forbids a colon in the user-id).
   */
  username: string;
}

export interface BasicAuthCredentialDeleteResponse {
  id: string;
}

export interface BasicAuthCredentialCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Login presented by the client. Printable ASCII only, excluding space
   * and colon.
   */
  username: string;
}

export interface BasicAuthCredentialListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Filter to credentials attached to this deployment
   */
  deployment_id?: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'username' | 'created_at' | 'updated_at';

  /**
   * Query param: Filter by username (case-insensitive substring match)
   */
  username?: string;
}

export interface BasicAuthCredentialDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface BasicAuthCredentialGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

BasicAuthCredentials.Secrets = Secrets;
BasicAuthCredentials.BaseSecrets = BaseSecrets;

export declare namespace BasicAuthCredentials {
  export {
    type BasicAuthCredential as BasicAuthCredential,
    type BasicAuthCredentialDeleteResponse as BasicAuthCredentialDeleteResponse,
    type BasicAuthCredentialsCursorPagination as BasicAuthCredentialsCursorPagination,
    type BasicAuthCredentialCreateParams as BasicAuthCredentialCreateParams,
    type BasicAuthCredentialListParams as BasicAuthCredentialListParams,
    type BasicAuthCredentialDeleteParams as BasicAuthCredentialDeleteParams,
    type BasicAuthCredentialGetParams as BasicAuthCredentialGetParams,
  };

  export {
    Secrets as Secrets,
    BaseSecrets as BaseSecrets,
    type BasicAuthSecret as BasicAuthSecret,
    type SecretDeleteResponse as SecretDeleteResponse,
    type BasicAuthSecretsCursorPagination as BasicAuthSecretsCursorPagination,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetParams as SecretGetParams,
  };
}
