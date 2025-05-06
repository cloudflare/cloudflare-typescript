// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CloudflareError } from '../core/error';
import { PagePromise, SinglePage } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CustomPages extends APIResource {
  /**
   * Updates the configuration of an existing custom page.
   *
   * @example
   * ```ts
   * const customPage = await client.customPages.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     state: 'default',
   *     url: 'http://www.example.com',
   *     account_id: 'account_id',
   *   },
   * );
   * ```
   */
  update(
    identifier: string,
    params: CustomPageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageUpdateResponse | null> {
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
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/custom_pages/${identifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPageUpdateResponse | null }>
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
    const { account_id, zone_id } = params ?? {};
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
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    identifier: string,
    params: CustomPageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomPageGetResponse | null> {
    const { account_id, zone_id } = params ?? {};
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
      ) as APIPromise<{ result: CustomPageGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomPageListResponsesSinglePage = SinglePage<CustomPageListResponse>;

export type CustomPageUpdateResponse = unknown | string;

export type CustomPageListResponse = unknown;

export type CustomPageGetResponse = unknown | string;

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
}
