// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * List Request Assets
   */
  create(
    requestID: string,
    params: AssetCreateParams,
    options?: RequestOptions,
  ): PagePromise<AssetCreateResponsesSinglePage, AssetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/requests/${requestID}/asset`,
      SinglePage<AssetCreateResponse>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a Request Asset
   */
  update(
    assetID: string,
    params: AssetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssetUpdateResponse> {
    const { account_id, request_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: AssetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Asset
   */
  delete(
    assetID: string,
    params: AssetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AssetDeleteResponse> {
    const { account_id, request_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`,
      options,
    );
  }

  /**
   * Get a Request Asset
   */
  get(
    assetID: string,
    params: AssetGetParams,
    options?: RequestOptions,
  ): PagePromise<AssetGetResponsesSinglePage, AssetGetResponse> {
    const { account_id, request_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`,
      SinglePage<AssetGetResponse>,
      options,
    );
  }
}

export type AssetCreateResponsesSinglePage = SinglePage<AssetCreateResponse>;

export type AssetGetResponsesSinglePage = SinglePage<AssetGetResponse>;

export interface AssetCreateResponse {
  /**
   * Asset ID.
   */
  id: number;

  /**
   * Asset name.
   */
  name: string;

  /**
   * Defines the asset creation time.
   */
  created?: string;

  /**
   * Asset description.
   */
  description?: string;

  /**
   * Asset file type.
   */
  file_type?: string;
}

export interface AssetUpdateResponse {
  /**
   * Asset ID.
   */
  id: number;

  /**
   * Asset name.
   */
  name: string;

  /**
   * Defines the asset creation time.
   */
  created?: string;

  /**
   * Asset description.
   */
  description?: string;

  /**
   * Asset file type.
   */
  file_type?: string;
}

export interface AssetDeleteResponse {
  errors: Array<AssetDeleteResponse.Error>;

  messages: Array<AssetDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace AssetDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface AssetGetResponse {
  /**
   * Asset ID.
   */
  id: number;

  /**
   * Asset name.
   */
  name: string;

  /**
   * Defines the asset creation time.
   */
  created?: string;

  /**
   * Asset description.
   */
  description?: string;

  /**
   * Asset file type.
   */
  file_type?: string;
}

export interface AssetCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Page number of results.
   */
  page: number;

  /**
   * Body param: Number of results per page.
   */
  per_page: number;
}

export interface AssetUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: UUID.
   */
  request_id: string;

  /**
   * Body param: Asset file to upload.
   */
  source?: string;
}

export interface AssetDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  request_id: string;
}

export interface AssetGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  request_id: string;
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
