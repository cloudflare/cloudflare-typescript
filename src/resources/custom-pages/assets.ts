// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Assets extends APIResource {
  /**
   * Creates a new custom asset.
   *
   * @example
   * ```ts
   * const asset = await client.customPages.assets.create({
   *   description: 'Custom 500 error page',
   *   name: 'my_custom_error_page',
   *   url: 'https://example.com/error.html',
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(params: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/custom_pages/assets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AssetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the configuration of an existing custom asset.
   *
   * @example
   * ```ts
   * const asset = await client.customPages.assets.update(
   *   'my_custom_error_page',
   *   {
   *     description: 'Custom 500 error page',
   *     url: 'https://example.com/error.html',
   *     account_id: 'account_id',
   *   },
   * );
   * ```
   */
  update(
    assetName: string,
    params: AssetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/custom_pages/assets/${assetName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AssetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the custom assets.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const assetListResponse of client.customPages.assets.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: AssetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetListResponsesV4PagePaginationArray, AssetListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetListResponsesV4PagePaginationArray, AssetListResponse>;
  list(
    params: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AssetListResponsesV4PagePaginationArray, AssetListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id, ...query } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/custom_pages/assets`,
      AssetListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing custom asset.
   *
   * @example
   * ```ts
   * await client.customPages.assets.delete(
   *   'my_custom_error_page',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(assetName: string, params?: AssetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(assetName: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    assetName: string,
    params: AssetDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(assetName, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.delete(`/${accountOrZone}/${accountOrZoneId}/custom_pages/assets/${assetName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches the details of a custom asset.
   *
   * @example
   * ```ts
   * const asset = await client.customPages.assets.get(
   *   'my_custom_error_page',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    assetName: string,
    params?: AssetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetGetResponse>;
  get(assetName: string, options?: Core.RequestOptions): Core.APIPromise<AssetGetResponse>;
  get(
    assetName: string,
    params: AssetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(assetName, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/custom_pages/assets/${assetName}`,
        options,
      ) as Core.APIPromise<{ result: AssetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AssetListResponsesV4PagePaginationArray extends V4PagePaginationArray<AssetListResponse> {}

export interface AssetCreateResponse {
  /**
   * A short description of the custom asset.
   */
  description?: string;

  last_updated?: string;

  /**
   * The unique name of the custom asset. Can only contain letters (A-Z, a-z),
   * numbers (0-9), and underscores (\_).
   */
  name?: string;

  /**
   * The size of the asset content in bytes.
   */
  size_bytes?: number;

  /**
   * The URL where the asset content is fetched from.
   */
  url?: string;
}

export interface AssetUpdateResponse {
  /**
   * A short description of the custom asset.
   */
  description?: string;

  last_updated?: string;

  /**
   * The unique name of the custom asset. Can only contain letters (A-Z, a-z),
   * numbers (0-9), and underscores (\_).
   */
  name?: string;

  /**
   * The size of the asset content in bytes.
   */
  size_bytes?: number;

  /**
   * The URL where the asset content is fetched from.
   */
  url?: string;
}

export interface AssetListResponse {
  /**
   * A short description of the custom asset.
   */
  description?: string;

  last_updated?: string;

  /**
   * The unique name of the custom asset. Can only contain letters (A-Z, a-z),
   * numbers (0-9), and underscores (\_).
   */
  name?: string;

  /**
   * The size of the asset content in bytes.
   */
  size_bytes?: number;

  /**
   * The URL where the asset content is fetched from.
   */
  url?: string;
}

export interface AssetGetResponse {
  /**
   * A short description of the custom asset.
   */
  description?: string;

  last_updated?: string;

  /**
   * The unique name of the custom asset. Can only contain letters (A-Z, a-z),
   * numbers (0-9), and underscores (\_).
   */
  name?: string;

  /**
   * The size of the asset content in bytes.
   */
  size_bytes?: number;

  /**
   * The URL where the asset content is fetched from.
   */
  url?: string;
}

export interface AssetCreateParams {
  /**
   * Body param: A short description of the custom asset.
   */
  description: string;

  /**
   * Body param: The unique name of the custom asset. Can only contain letters (A-Z,
   * a-z), numbers (0-9), and underscores (\_).
   */
  name: string;

  /**
   * Body param: The URL where the asset content is fetched from.
   */
  url: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export interface AssetUpdateParams {
  /**
   * Body param: A short description of the custom asset.
   */
  description: string;

  /**
   * Body param: The URL where the asset content is fetched from.
   */
  url: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export interface AssetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export interface AssetDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface AssetGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Assets.AssetListResponsesV4PagePaginationArray = AssetListResponsesV4PagePaginationArray;

export declare namespace Assets {
  export {
    type AssetCreateResponse as AssetCreateResponse,
    type AssetUpdateResponse as AssetUpdateResponse,
    type AssetListResponse as AssetListResponse,
    type AssetGetResponse as AssetGetResponse,
    AssetListResponsesV4PagePaginationArray as AssetListResponsesV4PagePaginationArray,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetGetParams as AssetGetParams,
  };
}
