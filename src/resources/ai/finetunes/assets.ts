// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Upload a Finetune Asset
   */
  create(
    finetuneID: string,
    params: AssetCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssetCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/ai/finetunes/${finetuneID}/finetune-assets`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: AssetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AssetCreateResponse {
  id: string;

  bucket_name: string;

  created_at: string;

  file_name: string;

  finetune_id: string;

  modified_at: string;
}

export interface AssetCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  file?: Uploadable;

  /**
   * Body param:
   */
  file_name?: string;
}

export declare namespace Assets {
  export { type AssetCreateResponse as AssetCreateResponse, type AssetCreateParams as AssetCreateParams };
}
