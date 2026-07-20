// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCatalog extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'categories', 'catalog'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'categories', 'catalog'] as const);

  /**
   * List all categories stored in the account catalog.
   *
   * @example
   * ```ts
   * const catalogs =
   *   await client.cloudforceOne.threatEvents.categories.catalog.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: CatalogListParams, options?: RequestOptions): APIPromise<CatalogListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/categories/catalog`, options);
  }
}
export class Catalog extends BaseCatalog {}

export type CatalogListResponse = Array<CatalogListResponse.CatalogListResponseItem>;

export namespace CatalogListResponse {
  export interface CatalogListResponseItem {
    killChain: number;

    name: string;

    uuid: string;

    mitreAttack?: Array<string>;

    mitreCapec?: Array<string>;

    shortname?: string;
  }
}

export interface CatalogListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Catalog {
  export { type CatalogListResponse as CatalogListResponse, type CatalogListParams as CatalogListParams };
}
