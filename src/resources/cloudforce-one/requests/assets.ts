// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Assets extends APIResource {
  /**
   * List Request Assets
   */
  create(
    requestId: string,
    params: AssetCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetCreateResponsesSinglePage, AssetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/cloudforce-one/requests/${requestId}/asset`,
      AssetCreateResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a Request Asset
   */
  update(
    requestId: string,
    assetId: string,
    params: AssetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/cloudforce-one/requests/${requestId}/asset/${assetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AssetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Asset
   */
  delete(
    requestId: string,
    assetId: string,
    params: AssetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/cloudforce-one/requests/${requestId}/asset/${assetId}`,
      options,
    );
  }

  /**
   * Get a Request Asset
   */
  get(
    requestId: string,
    assetId: string,
    params: AssetGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetGetResponsesSinglePage, AssetGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/cloudforce-one/requests/${requestId}/asset/${assetId}`,
      AssetGetResponsesSinglePage,
      options,
    );
  }
}

export class AssetCreateResponsesSinglePage extends SinglePage<AssetCreateResponse> {}

export class AssetGetResponsesSinglePage extends SinglePage<AssetGetResponse> {}

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
   * Body param: Asset file to upload.
   */
  source?: string;
}

export interface AssetDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface AssetGetParams {
  /**
   * Identifier.
   */
  account_id: string;
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
    type AssetDeleteParams as AssetDeleteParams,
    type AssetGetParams as AssetGetParams,
  };
}
