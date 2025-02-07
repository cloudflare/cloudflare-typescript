// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * List Request Assets
   */
  create(
    requestIdentifier: string,
    params: AssetCreateParams,
    options?: RequestOptions,
  ): PagePromise<AssetCreateResponsesSinglePage, AssetCreateResponse> {
    const { account_identifier, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}/asset`,
      SinglePage<AssetCreateResponse>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a Request Asset
   */
  update(
    assetIdentifer: string,
    params: AssetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssetUpdateResponse> {
    const { account_identifier, request_identifier, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_identifier}/cloudforce-one/requests/${request_identifier}/asset/${assetIdentifer}`,
        { body, ...options },
      ) as APIPromise<{ result: AssetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Asset
   */
  delete(
    assetIdentifer: string,
    params: AssetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AssetDeleteResponse> {
    const { account_identifier, request_identifier } = params;
    return this._client.delete(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${request_identifier}/asset/${assetIdentifer}`,
      options,
    );
  }

  /**
   * Get a Request Asset
   */
  get(
    assetIdentifer: string,
    params: AssetGetParams,
    options?: RequestOptions,
  ): PagePromise<AssetGetResponsesSinglePage, AssetGetResponse> {
    const { account_identifier, request_identifier } = params;
    return this._client.getAPIList(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${request_identifier}/asset/${assetIdentifer}`,
      SinglePage<AssetGetResponse>,
      options,
    );
  }
}

export type AssetCreateResponsesSinglePage = SinglePage<AssetCreateResponse>;

export type AssetGetResponsesSinglePage = SinglePage<AssetGetResponse>;

export interface AssetCreateResponse {
  /**
   * Asset ID
   */
  id: number;

  /**
   * Asset name
   */
  name: string;

  /**
   * Asset creation time
   */
  created?: string;

  /**
   * Asset description
   */
  description?: string;

  /**
   * Asset file type
   */
  file_type?: string;
}

export interface AssetUpdateResponse {
  /**
   * Asset ID
   */
  id: number;

  /**
   * Asset name
   */
  name: string;

  /**
   * Asset creation time
   */
  created?: string;

  /**
   * Asset description
   */
  description?: string;

  /**
   * Asset file type
   */
  file_type?: string;
}

export interface AssetDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface AssetGetResponse {
  /**
   * Asset ID
   */
  id: number;

  /**
   * Asset name
   */
  name: string;

  /**
   * Asset creation time
   */
  created?: string;

  /**
   * Asset description
   */
  description?: string;

  /**
   * Asset file type
   */
  file_type?: string;
}

export interface AssetCreateParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Body param: Page number of results
   */
  page: number;

  /**
   * Body param: Number of results per page
   */
  per_page: number;
}

export interface AssetUpdateParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Path param: UUID
   */
  request_identifier: string;

  /**
   * Body param: Asset file to upload
   */
  source?: string;
}

export interface AssetDeleteParams {
  /**
   * Identifier
   */
  account_identifier: string;

  /**
   * UUID
   */
  request_identifier: string;
}

export interface AssetGetParams {
  /**
   * Identifier
   */
  account_identifier: string;

  /**
   * UUID
   */
  request_identifier: string;
}

export declare namespace Assets {
  export {
    type AssetCreateResponse as AssetCreateResponse,
    type AssetUpdateResponse as AssetUpdateResponse,
    type AssetDeleteResponse as AssetDeleteResponse,
    type AssetGetResponse as AssetGetResponse,
    type AssetCreateResponsesSinglePage as AssetCreateResponsesSinglePage,
    type AssetGetResponsesSinglePage as AssetGetResponsesSinglePage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetGetParams as AssetGetParams,
  };
}
