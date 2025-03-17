// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Secrets extends APIResource {
  /**
   * Add a secret to a script.
   */
  update(
    scriptName: string,
    params: SecretUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/scripts/${scriptName}/secrets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecretUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List secrets bound to a script.
   */
  list(
    scriptName: string,
    params: SecretListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecretListResponsesSinglePage, SecretListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/scripts/${scriptName}/secrets`,
      SecretListResponsesSinglePage,
      options,
    );
  }

  /**
   * Remove a secret from a script.
   */
  delete(
    scriptName: string,
    secretName: string,
    params: SecretDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/workers/scripts/${scriptName}/secrets/${secretName}`,
        options,
      ) as Core.APIPromise<{ result: SecretDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a given secret binding (value omitted) on a script.
   */
  get(
    scriptName: string,
    secretName: string,
    params: SecretGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/secrets/${secretName}`,
        options,
      ) as Core.APIPromise<{ result: SecretGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SecretListResponsesSinglePage extends SinglePage<SecretListResponse> {}

export interface SecretUpdateResponse {
  /**
   * The name of this secret, this is what will be used to access it inside the
   * Worker.
   */
  name?: string;

  /**
   * The type of secret.
   */
  type?: 'secret_text';
}

export interface SecretListResponse {
  /**
   * The name of this secret, this is what will be used to access it inside the
   * Worker.
   */
  name?: string;

  /**
   * The type of secret.
   */
  type?: 'secret_text';
}

export type SecretDeleteResponse = unknown;

export interface SecretGetResponse {
  /**
   * The name of this secret, this is what will be used to access it inside the
   * Worker.
   */
  name?: string;

  /**
   * The type of secret.
   */
  type?: 'secret_text';
}

export interface SecretUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of this secret, this is what will be used to access it
   * inside the Worker.
   */
  name?: string;

  /**
   * Body param: The value of the secret.
   */
  text?: string;

  /**
   * Body param: The type of secret to put.
   */
  type?: 'secret_text';
}

export interface SecretListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface SecretDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface SecretGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Secrets.SecretListResponsesSinglePage = SecretListResponsesSinglePage;

export declare namespace Secrets {
  export {
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretGetResponse as SecretGetResponse,
    SecretListResponsesSinglePage as SecretListResponsesSinglePage,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetParams as SecretGetParams,
  };
}
