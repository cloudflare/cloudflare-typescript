// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { SinglePage } from '../../../pagination';

export class Assets extends APIResource {
  /**
   * List Request Assets
   */
  create(
    accountIdentifier: string,
    requestIdentifier: string,
    body: AssetCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetCreateResponsesSinglePage, AssetCreateResponse> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset`,
      AssetCreateResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a Request Asset
   */
  update(
    accountIdentifier: string,
    requestIdentifier: string,
    assetIdentifer: string,
    body: AssetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetUpdateResponse> {
    return (
      this._client.put(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset/${assetIdentifer}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: AssetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Asset
   */
  delete(
    accountIdentifier: string,
    requestIdentifier: string,
    assetIdentifer: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset/${assetIdentifer}`,
      options,
    );
  }

  /**
   * Get a Request Asset
   */
  get(
    accountIdentifier: string,
    requestIdentifier: string,
    assetIdentifer: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetGetResponsesSinglePage, AssetGetResponse> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset/${assetIdentifer}`,
      AssetGetResponsesSinglePage,
      options,
    );
  }
}

export class AssetCreateResponsesSinglePage extends SinglePage<AssetCreateResponse> {}

export class AssetGetResponsesSinglePage extends SinglePage<AssetGetResponse> {}

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
   * Page number of results
   */
  page: number;

  /**
   * Number of results per page
   */
  per_page: number;
}

export interface AssetUpdateParams {
  /**
   * Asset file to upload
   */
  source?: string;
}

Assets.AssetCreateResponsesSinglePage = AssetCreateResponsesSinglePage;
Assets.AssetGetResponsesSinglePage = AssetGetResponsesSinglePage;

export declare namespace Assets {
  export {
    type AssetCreateResponse as AssetCreateResponse,
    type AssetUpdateResponse as AssetUpdateResponse,
    type AssetDeleteResponse as AssetDeleteResponse,
    type AssetGetResponse as AssetGetResponse,
    AssetCreateResponsesSinglePage as AssetCreateResponsesSinglePage,
    AssetGetResponsesSinglePage as AssetGetResponsesSinglePage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
  };
}
