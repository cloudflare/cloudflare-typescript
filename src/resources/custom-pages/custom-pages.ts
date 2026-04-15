// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  AssetCreateParams,
  AssetCreateResponse,
  AssetDeleteParams,
  AssetGetParams,
  AssetGetResponse,
  AssetListParams,
  AssetListResponse,
  AssetListResponsesV4PagePaginationArray,
  AssetUpdateParams,
  AssetUpdateResponse,
  Assets,
  BaseAssets,
} from './assets';
import { APIPromise } from '../../core/api-promise';
import { CloudflareError } from '../../core/error';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCustomPages extends APIResource {
  static override readonly _key: readonly ['customPages'] = Object.freeze(['customPages'] as const);

  /**
   * Updates the configuration of an existing custom page.
   *
   * @example
   * ```ts
   * const customPage = await client.customPages.update(
   *   'ratelimit_block',
   *   {
   *     state: 'default',
   *     url: 'http://www.example.com',
   *     account_id: 'account_id',
   *   },
   * );
   * ```
   */
  update(
    identifier:
      | '1000_errors'
      | '500_errors'
      | 'basic_challenge'
      | 'country_challenge'
      | 'ip_block'
      | 'managed_challenge'
      | 'ratelimit_block'
      | 'under_attack'
      | 'waf_block'
      | 'waf_challenge',
    params: CustomPageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageUpdateResponse> {
    const {
      account_id = this._client.accountID ?? undefined,
      zone_id = this._client.zoneID ?? undefined,
      ...body
    } = params;
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
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/custom_pages/${identifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPageUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the custom pages.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customPageListResponse of client.customPages.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomPageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomPageListResponsesSinglePage, CustomPageListResponse> {
    const { account_id = this._client.accountID ?? undefined, zone_id = this._client.zoneID ?? undefined } =
      params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/custom_pages`,
      SinglePage<CustomPageListResponse>,
      options,
    );
  }

  /**
   * Fetches the details of a custom page.
   *
   * @example
   * ```ts
   * const customPage = await client.customPages.get(
   *   'ratelimit_block',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    identifier:
      | '1000_errors'
      | '500_errors'
      | 'basic_challenge'
      | 'country_challenge'
      | 'ip_block'
      | 'managed_challenge'
      | 'ratelimit_block'
      | 'under_attack'
      | 'waf_block'
      | 'waf_challenge',
    params: CustomPageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomPageGetResponse> {
    const { account_id = this._client.accountID ?? undefined, zone_id = this._client.zoneID ?? undefined } =
      params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/custom_pages/${identifier}`,
        options,
      ) as APIPromise<{ result: CustomPageGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CustomPages extends BaseCustomPages {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export type CustomPageListResponsesSinglePage = SinglePage<CustomPageListResponse>;

export interface CustomPageUpdateResponse {
  id?: string;

  created_on?: string;

  description?: string;

  modified_on?: string;

  preview_target?: string;

  required_tokens?: Array<string>;

  /**
   * The custom page state.
   */
  state?: 'default' | 'customized';

  /**
   * The URL associated with the custom page.
   */
  url?: string;
}

export interface CustomPageListResponse {
  id?: string;

  created_on?: string;

  description?: string;

  modified_on?: string;

  preview_target?: string;

  required_tokens?: Array<string>;

  /**
   * The custom page state.
   */
  state?: 'default' | 'customized';

  /**
   * The URL associated with the custom page.
   */
  url?: string;
}

export interface CustomPageGetResponse {
  id?: string;

  created_on?: string;

  description?: string;

  modified_on?: string;

  preview_target?: string;

  required_tokens?: Array<string>;

  /**
   * The custom page state.
   */
  state?: 'default' | 'customized';

  /**
   * The URL associated with the custom page.
   */
  url?: string;
}

export interface CustomPageUpdateParams {
  /**
   * Body param: The custom page state.
   */
  state: 'default' | 'customized';

  /**
   * Body param: The URL associated with the custom page.
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

export interface CustomPageListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CustomPageGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

CustomPages.Assets = Assets;
CustomPages.BaseAssets = BaseAssets;

export declare namespace CustomPages {
  export {
    type CustomPageUpdateResponse as CustomPageUpdateResponse,
    type CustomPageListResponse as CustomPageListResponse,
    type CustomPageGetResponse as CustomPageGetResponse,
    type CustomPageListResponsesSinglePage as CustomPageListResponsesSinglePage,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageListParams as CustomPageListParams,
    type CustomPageGetParams as CustomPageGetParams,
  };

  export {
    Assets as Assets,
    BaseAssets as BaseAssets,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetUpdateResponse as AssetUpdateResponse,
    type AssetListResponse as AssetListResponse,
    type AssetGetResponse as AssetGetResponse,
    type AssetListResponsesV4PagePaginationArray as AssetListResponsesV4PagePaginationArray,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetListParams as AssetListParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetGetParams as AssetGetParams,
  };
}
