// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['ai', 'finetunes', 'assets'] = Object.freeze([
    'ai',
    'finetunes',
    'assets',
  ] as const);

  /**
   * Uploads training data assets for a Workers AI fine-tuning job.
   */
  create(
    finetuneID: string,
    params: AssetCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      path`/accounts/${account_id}/ai/finetunes/${finetuneID}/finetune-assets`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}
export class Assets extends BaseAssets {}

export interface AssetCreateResponse {
  success: boolean;
}

export interface AssetCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: File to upload
   */
  file: Uploadable;

  /**
   * Body param: Name of the file (adapter_config.json or adapter_model.safetensors)
   */
  file_name: string;
}

export declare namespace Assets {
  export { type AssetCreateResponse as AssetCreateResponse, type AssetCreateParams as AssetCreateParams };
}
