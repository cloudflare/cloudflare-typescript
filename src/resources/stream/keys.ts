// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed
   * once after creation. Keys are created, used, and deleted independently of
   * videos, and every key can sign any video.
   */
  create(params: KeyCreateParams, options?: RequestOptions): APIPromise<Keys> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/stream/keys`, { body: body, ...options }) as APIPromise<{
        result: Keys;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   */
  delete(
    identifier: string,
    params: KeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<KeyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/stream/keys/${identifier}`, options) as APIPromise<{
        result: KeyDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  get(
    params: KeyGetParams,
    options?: RequestOptions,
  ): PagePromise<KeyGetResponsesSinglePage, KeyGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/stream/keys`,
      SinglePage<KeyGetResponse>,
      options,
    );
  }
}

export type KeyGetResponsesSinglePage = SinglePage<KeyGetResponse>;

export interface Keys {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The date and time a signing key was created.
   */
  created?: string;

  /**
   * The signing key in JWK format.
   */
  jwk?: string;

  /**
   * The signing key in PEM format.
   */
  pem?: string;
}

export type KeyDeleteResponse = string;

export interface KeyGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The date and time a signing key was created.
   */
  created?: string;
}

export interface KeyCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface KeyDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface KeyGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Keys {
  export {
    type Keys as Keys,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyGetResponse as KeyGetResponse,
    type KeyGetResponsesSinglePage as KeyGetResponsesSinglePage,
    type KeyCreateParams as KeyCreateParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyGetParams as KeyGetParams,
  };
}
