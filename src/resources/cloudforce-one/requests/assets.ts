// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AssetsAPI from './assets';
import * as Shared from '../../shared';

export class Assets extends APIResource {
  /**
   * List Request Assets
   */
  create(
    accountIdentifier: string,
    requestIdentifier: string,
    body: AssetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AssetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
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
  ): Core.APIPromise<AssetGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/asset/${assetIdentifer}`,
        options,
      ) as Core.APIPromise<{ result: AssetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AssetCreateResponse = Array<AssetCreateResponse.AssetCreateResponseItem>;

export namespace AssetCreateResponse {
  export interface AssetCreateResponseItem {
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

export type AssetGetResponse = Array<AssetGetResponse.AssetGetResponseItem>;

export namespace AssetGetResponse {
  export interface AssetGetResponseItem {
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

export namespace Assets {
  export import AssetCreateResponse = AssetsAPI.AssetCreateResponse;
  export import AssetUpdateResponse = AssetsAPI.AssetUpdateResponse;
  export import AssetDeleteResponse = AssetsAPI.AssetDeleteResponse;
  export import AssetGetResponse = AssetsAPI.AssetGetResponse;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetUpdateParams = AssetsAPI.AssetUpdateParams;
}
