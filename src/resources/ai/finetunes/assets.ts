// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Assets extends APIResource {
  /**
   * Uploads training data assets for a Workers AI fine-tuning job.
   */
  create(
    finetuneId: string,
    params?: AssetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetCreateResponse>;
  create(finetuneId: string, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse>;
  create(
    finetuneId: string,
    params: AssetCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(finetuneId, {}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(
      `/accounts/${account_id}/ai/finetunes/${finetuneId}/finetune-assets`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface AssetCreateResponse {
  success: boolean;
}

export interface AssetCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  file?: Core.Uploadable;

  /**
   * Body param
   */
  file_name?: string;
}

export declare namespace Assets {
  export { type AssetCreateResponse as AssetCreateResponse, type AssetCreateParams as AssetCreateParams };
}
