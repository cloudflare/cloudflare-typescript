// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from './assets';
import { AssetCreateParams, AssetCreateResponse, Assets } from './assets';
import * as PublicAPI from './public';
import { Public, PublicListParams, PublicListResponse, PublicListResponsesSinglePage } from './public';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Finetunes extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);

  /**
   * Create a new Finetune
   */
  create(params: FinetuneCreateParams, options?: RequestOptions): APIPromise<FinetuneCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai/finetunes`, { body, ...options }) as APIPromise<{
        result: FinetuneCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Finetunes
   */
  list(params: FinetuneListParams, options?: RequestOptions): APIPromise<FinetuneListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai/finetunes`, options) as APIPromise<{
        result: FinetuneListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  public?: boolean;
}

export interface FinetuneListParams {
  account_id: string;
}

Finetunes.Assets = Assets;
Finetunes.Public = Public;

export declare namespace Finetunes {
  export {
    type FinetuneCreateResponse as FinetuneCreateResponse,
    type FinetuneListResponse as FinetuneListResponse,
    type FinetuneCreateParams as FinetuneCreateParams,
    type FinetuneListParams as FinetuneListParams,
  };

  export {
    Assets as Assets,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetCreateParams as AssetCreateParams,
  };

  export {
    Public as Public,
    type PublicListResponse as PublicListResponse,
    type PublicListResponsesSinglePage as PublicListResponsesSinglePage,
    type PublicListParams as PublicListParams,
  };
}
