// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Assets extends APIResource {
  /**
   * Uploads training data assets for a Workers AI fine-tuning job.
   */
  create(
    finetuneId: string,
    params: AssetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetCreateResponse> {
    const { account_id, ...body } = params;
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
  account_id: string;

  /**
   * Body param: File to upload
   */
  file: Core.Uploadable;

  /**
   * Body param: Name of the file (adapter_config.json or adapter_model.safetensors)
   */
  file_name: string;
}

export declare namespace Assets {
  export { type AssetCreateResponse as AssetCreateResponse, type AssetCreateParams as AssetCreateParams };
}
