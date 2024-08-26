// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as SecretsAPI from './secrets';
import { SinglePage } from '../../../../../pagination';

export class Secrets extends APIResource {
  /**
   * Put secrets to a script uploaded to a Workers for Platforms namespace.
   */
  update(dispatchNamespace: string, scriptName: string, params: SecretUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SecretUpdateResponse> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets`, { body, ...options }) as Core.APIPromise<{ result: SecretUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List secrets from a script uploaded to a Workers for Platforms namespace.
   */
  list(dispatchNamespace: string, scriptName: string, params: SecretListParams, options?: Core.RequestOptions): Core.PagePromise<SecretListResponsesSinglePage, SecretListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets`, SecretListResponsesSinglePage, options);
  }

  /**
   * Get secret from a script uploaded to a Workers for Platforms namespace.
   */
  get(dispatchNamespace: string, scriptName: string, secretName: string, params: SecretGetParams, options?: Core.RequestOptions): Core.APIPromise<SecretGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets/${secretName}`, options) as Core.APIPromise<{ result: SecretGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class SecretListResponsesSinglePage extends SinglePage<SecretListResponse> {
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

export interface SecretGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Secrets {
  export import SecretUpdateResponse = SecretsAPI.SecretUpdateResponse;
  export import SecretListResponse = SecretsAPI.SecretListResponse;
  export import SecretGetResponse = SecretsAPI.SecretGetResponse;
  export import SecretListResponsesSinglePage = SecretsAPI.SecretListResponsesSinglePage;
  export import SecretUpdateParams = SecretsAPI.SecretUpdateParams;
  export import SecretListParams = SecretsAPI.SecretListParams;
  export import SecretGetParams = SecretsAPI.SecretGetParams;
}
