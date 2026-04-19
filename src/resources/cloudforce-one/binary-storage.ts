// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class BinaryStorage extends APIResource {
  /**
   * Posts a file to Binary Storage
   *
   * @example
   * ```ts
   * const binaryStorage =
   *   await client.cloudforceOne.binaryStorage.create({
   *     account_id: 'account_id',
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  create(
    params: BinaryStorageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BinaryStorageCreateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/cloudforce-one/binary`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Retrieves a file from Binary Storage
   *
   * @example
   * ```ts
   * await client.cloudforceOne.binaryStorage.get('hash', {
   *   account_id: 'account_id',
   * });
   * ```
   */
  get(hash: string, params?: BinaryStorageGetParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  get(hash: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  get(
    hash: string,
    params: BinaryStorageGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.get(hash, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/binary/${hash}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface BinaryStorageCreateResponse {
  content_type: string;

  md5: string;

  sha1: string;

  sha256: string;
}

export interface BinaryStorageCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Body param: The binary file content to upload.
   */
  file: Core.Uploadable;
}

export interface BinaryStorageGetParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace BinaryStorage {
  export {
    type BinaryStorageCreateResponse as BinaryStorageCreateResponse,
    type BinaryStorageCreateParams as BinaryStorageCreateParams,
    type BinaryStorageGetParams as BinaryStorageGetParams,
  };
}
