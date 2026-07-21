// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ByDatasetAPI from './by-dataset';
import { BaseByDataset, ByDataset, ByDatasetListParams, ByDatasetListResponse } from './by-dataset';
import * as CatalogAPI from './catalog';
import { BaseCatalog, Catalog, CatalogListParams, CatalogListResponse } from './catalog';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTargetIndustries extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'targetIndustries'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'targetIndustries'] as const);

  /**
   * List target industries referenced in events across one or more datasets.
   *
   * @example
   * ```ts
   * const targetIndustries =
   *   await client.cloudforceOne.threatEvents.targetIndustries.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: TargetIndustryListParams, options?: RequestOptions): APIPromise<TargetIndustryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/targetIndustries`, {
      query,
      ...options,
    });
  }
}
export class TargetIndustries extends BaseTargetIndustries {
  byDataset: ByDatasetAPI.ByDataset = new ByDatasetAPI.ByDataset(this._client);
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

export interface TargetIndustryListResponse {
  items: TargetIndustryListResponse.Items;

  type: string;
}

export namespace TargetIndustryListResponse {
  export interface Items {
    type: string;
  }
}

export interface TargetIndustryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Array of dataset IDs to query target industries from. If not
   * provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
}

TargetIndustries.ByDataset = ByDataset;
TargetIndustries.BaseByDataset = BaseByDataset;
TargetIndustries.Catalog = Catalog;
TargetIndustries.BaseCatalog = BaseCatalog;

export declare namespace TargetIndustries {
  export {
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };

  export {
    ByDataset as ByDataset,
    BaseByDataset as BaseByDataset,
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetListParams as ByDatasetListParams,
  };

  export {
    Catalog as Catalog,
    BaseCatalog as BaseCatalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogListParams as CatalogListParams,
  };
}
