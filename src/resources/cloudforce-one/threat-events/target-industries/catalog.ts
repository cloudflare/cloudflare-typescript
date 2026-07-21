// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCatalog extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'targetIndustries', 'catalog'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'targetIndustries', 'catalog'] as const);

  /**
   * List all predefined target industries from the industry map catalog.
   *
   * @example
   * ```ts
   * const catalogs =
   *   await client.cloudforceOne.threatEvents.targetIndustries.catalog.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: CatalogListParams, options?: RequestOptions): APIPromise<CatalogListResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/targetIndustries/catalog`,
      options,
    );
  }
}
export class Catalog extends BaseCatalog {}

export interface CatalogListResponse {
  items: CatalogListResponse.Items;

  type: string;
}

export namespace CatalogListResponse {
  export interface Items {
    type: string;
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
