// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
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
   * Remove a secret from a script uploaded to a Workers for Platforms namespace.
   */
  delete(
    secretName: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse | null> {
    const { account_id, dispatch_namespace, script_name } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${script_name}/secrets/${secretName}`,
        options,
      ) as APIPromise<{ result: SecretDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
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

/**
 * A secret value accessible through a binding.
 */
export type SecretUpdateResponse =
  | SecretUpdateResponse.WorkersBindingKindSecretText
  | SecretUpdateResponse.WorkersBindingKindSecretKey;

export namespace SecretUpdateResponse {
  export interface WorkersBindingKindSecretText {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_text';
  }

  export interface WorkersBindingKindSecretKey {
    /**
     * Algorithm-specific key parameters
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm)).
     */
    algorithm: unknown;

    /**
     * Data format of the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format)).
     */
    format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_key';

    /**
     * Allowed operations with the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages)).
     */
    usages: Array<
      'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
    >;
  }
}

/**
 * A secret value accessible through a binding.
 */
export type SecretListResponse =
  | SecretListResponse.WorkersBindingKindSecretText
  | SecretListResponse.WorkersBindingKindSecretKey;

export namespace SecretListResponse {
  export interface WorkersBindingKindSecretText {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_text';
  }

  export interface WorkersBindingKindSecretKey {
    /**
     * Algorithm-specific key parameters
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm)).
     */
    algorithm: unknown;

    /**
     * Data format of the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format)).
     */
    format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_key';

    /**
     * Allowed operations with the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages)).
     */
    usages: Array<
      'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
    >;
  }
}

export type SecretDeleteResponse = unknown;

/**
 * A secret value accessible through a binding.
 */
export type SecretGetResponse =
  | SecretGetResponse.WorkersBindingKindSecretText
  | SecretGetResponse.WorkersBindingKindSecretKey;

export namespace SecretGetResponse {
  export interface WorkersBindingKindSecretText {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_text';
  }

  export interface WorkersBindingKindSecretKey {
    /**
     * Algorithm-specific key parameters
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm)).
     */
    algorithm: unknown;

    /**
     * Data format of the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format)).
     */
    format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The kind of resource that the binding provides.
     */
    type: 'secret_key';

    /**
     * Allowed operations with the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages)).
     */
    usages: Array<
      'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
    >;
  }
}

export type SecretUpdateParams =
  | SecretUpdateParams.WorkersBindingKindSecretText
  | SecretUpdateParams.WorkersBindingKindSecretKey;

export declare namespace SecretUpdateParams {
  export interface WorkersBindingKindSecretText {
    /**
     * Path param: Identifier.
     */
    account_id: string;

    /**
     * Path param: Name of the Workers for Platforms dispatch namespace.
     */
    dispatch_namespace: string;

    /**
     * Body param: A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Body param: The secret value to use.
     */
    text: string;

    /**
     * Body param: The kind of resource that the binding provides.
     */
    type: 'secret_text';
  }

  export interface WorkersBindingKindSecretKey {
    /**
     * Path param: Identifier.
     */
    account_id: string;

    /**
     * Path param: Name of the Workers for Platforms dispatch namespace.
     */
    dispatch_namespace: string;

    /**
     * Body param: Algorithm-specific key parameters
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm)).
     */
    algorithm: unknown;

    /**
     * Body param: Data format of the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format)).
     */
    format: 'raw' | 'pkcs8' | 'spki' | 'jwk';

    /**
     * Body param: A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Body param: The kind of resource that the binding provides.
     */
    type: 'secret_key';

    /**
     * Body param: Allowed operations with the key
     * ([learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages)).
     */
    usages: Array<
      'encrypt' | 'decrypt' | 'sign' | 'verify' | 'deriveKey' | 'deriveBits' | 'wrapKey' | 'unwrapKey'
    >;

    /**
     * Body param: Base64-encoded key data. Required if `format` is "raw", "pkcs8", or
     * "spki".
     */
    key_base64?: string;

    /**
     * Body param: Key data in
     * [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key)
     * format. Required if `format` is "jwk".
     */
    key_jwk?: unknown;
  }
}

export interface SecretListParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;
}

export interface SecretDeleteParams {
  /**
   * Identifier.
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

export interface SecretGetParams {
  /**
   * Identifier.
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
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretGetResponse as SecretGetResponse,
    type SecretListResponsesSinglePage as SecretListResponsesSinglePage,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetParams as SecretGetParams,
  };
}
