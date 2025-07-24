// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class BinaryStorage extends APIResource {
  /**
   * Posts a file to BinDB
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
    options?: RequestOptions,
  ): APIPromise<BinaryStorageCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      path`/accounts/${account_id}/cloudforce-one/binary`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Posts a file to BinDB
   *
   * @example
   * ```ts
   * await client.cloudforceOne.binaryStorage.get('hash', {
   *   account_id: 'account_id',
   * });
   * ```
   */
  get(hash: string, params: BinaryStorageGetParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/binary/${hash}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  account_id: string;

  /**
   * Body param: The binary file content to upload.
   */
  file: Uploadable;
}

export interface BinaryStorageGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace BinaryStorage {
  export {
    type BinaryStorageCreateResponse as BinaryStorageCreateResponse,
    type BinaryStorageCreateParams as BinaryStorageCreateParams,
    type BinaryStorageGetParams as BinaryStorageGetParams,
  };
}
