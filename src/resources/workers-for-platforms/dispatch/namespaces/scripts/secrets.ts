// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { APIPromise } from '../../../../../api-promise';
import { PagePromise, SinglePage } from '../../../../../pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Add a secret to a script uploaded to a Workers for Platforms namespace.
   */
  update(
    scriptName: string,
    params: SecretUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SecretUpdateResponse> {
    const { account_id, dispatch_namespace, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/secrets`,
        { body, ...options },
      ) as APIPromise<{ result: SecretUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List secrets bound to a script uploaded to a Workers for Platforms namespace.
   */
  list(
    scriptName: string,
    params: SecretListParams,
    options?: RequestOptions,
  ): PagePromise<SecretListResponsesSinglePage, SecretListResponse> {
    const { account_id, dispatch_namespace } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/secrets`,
      SinglePage<SecretListResponse>,
      options,
    );
  }

  /**
   * Get a given secret binding (value omitted) on a script uploaded to a Workers for
   * Platforms namespace.
   */
  get(secretName: string, params: SecretGetParams, options?: RequestOptions): APIPromise<SecretGetResponse> {
    const { account_id, dispatch_namespace, script_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${script_name}/secrets/${secretName}`,
        options,
      ) as APIPromise<{ result: SecretGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SecretListResponsesSinglePage = SinglePage<SecretListResponse>;

export interface WorkersSecretModel {
  /**
   * The name of this secret, this is what will be used to access it inside the
   * Worker.
   */
  name?: string;

  /**
   * The type of secret to put.
   */
  type?: 'secret_text';
}

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
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

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

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;
}

export interface SecretGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script_name: string;
}

export declare namespace Secrets {
  export {
    type WorkersSecretModel as WorkersSecretModel,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretGetResponse as SecretGetResponse,
    type SecretListResponsesSinglePage as SecretListResponsesSinglePage,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
    type SecretGetParams as SecretGetParams,
  };
}
