// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseTags extends APIResource {
  static override readonly _key: readonly [
    'cloudforceOne',
    'threatEvents',
    'indicators',
    'byDataset',
    'tags',
  ] = Object.freeze(['cloudforceOne', 'threatEvents', 'indicators', 'byDataset', 'tags'] as const);

  /**
   * Returns all mirrored tags from the indicator dataset (DO mirror table). No
   * pagination.
   *
   * @example
   * ```ts
   * const tags =
   *   await client.cloudforceOne.threatEvents.indicators.byDataset.tags.list(
   *     'dataset_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(datasetID: string, params: TagListParams, options?: RequestOptions): APIPromise<TagListResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicators/tags`,
      options,
    );
  }
}
export class Tags extends BaseTags {}

/**
 * Array of mirror tag rows
 */
export type TagListResponse = Array<unknown>;

export interface TagListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Tags {
  export { type TagListResponse as TagListResponse, type TagListParams as TagListParams };
}
