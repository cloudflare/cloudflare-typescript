// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from './assets';
import { AssetCreateParams, AssetCreateResponse, Assets, BaseAssets } from './assets';
import * as PublicAPI from './public';
import {
  BasePublic,
  Public,
  PublicListParams,
  PublicListResponse,
  PublicListResponsesSinglePage,
} from './public';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseFinetunes extends APIResource {
  static override readonly _key: readonly ['ai', 'finetunes'] = Object.freeze(['ai', 'finetunes'] as const);

  /**
   * Creates a new fine-tuning job for a Workers AI model using custom training data.
   */
  create(params: FinetuneCreateParams, options?: RequestOptions): APIPromise<FinetuneCreateResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai/finetunes`, { body, ...options }) as APIPromise<{
        result: FinetuneCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all fine-tuning jobs created by the account, including status and metrics.
   */
  list(
    params: FinetuneListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinetuneListResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/ai/finetunes`, options) as APIPromise<{
        result: FinetuneListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Finetunes extends BaseFinetunes {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
}

export interface FinetuneCreateResponse {
  id: string;

  created_at: string;

  model: string;

  modified_at: string;

  name: string;

  public: boolean;

  description?: string;
}

export interface FinetuneListResponse {
  id: string;

  created_at: string;

  model: string;

  modified_at: string;

  name: string;

  description?: string;
}

export interface FinetuneCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  model: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  public?: boolean;
}

export interface FinetuneListParams {
  account_id?: string;
}

Finetunes.Assets = Assets;
Finetunes.BaseAssets = BaseAssets;
Finetunes.Public = Public;
Finetunes.BasePublic = BasePublic;

export declare namespace Finetunes {
  export {
    type FinetuneCreateResponse as FinetuneCreateResponse,
    type FinetuneListResponse as FinetuneListResponse,
    type FinetuneCreateParams as FinetuneCreateParams,
    type FinetuneListParams as FinetuneListParams,
  };

  export {
    Assets as Assets,
    BaseAssets as BaseAssets,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetCreateParams as AssetCreateParams,
  };

  export {
    Public as Public,
    BasePublic as BasePublic,
    type PublicListResponse as PublicListResponse,
    type PublicListResponsesSinglePage as PublicListResponsesSinglePage,
    type PublicListParams as PublicListParams,
  };
}
