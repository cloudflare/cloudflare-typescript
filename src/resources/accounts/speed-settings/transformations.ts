// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTransformations extends APIResource {
  static override readonly _key: readonly ['accounts', 'speedSettings', 'transformations'] = Object.freeze([
    'accounts',
    'speedSettings',
    'transformations',
  ] as const);

  /**
   * Returns a list of Image Resizing configurations across all zones for the
   * account. This endpoint is useful for retrieving the transformations
   * (image_resizing) state for all zones belonging to an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transformationsConfig of client.accounts.speedSettings.transformations.get(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params: TransformationGetParams,
    options?: RequestOptions,
  ): PagePromise<TransformationsConfigsSinglePage, TransformationsConfig> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/settings/transformations`,
      SinglePage<TransformationsConfig>,
      options,
    );
  }
}
export class Transformations extends BaseTransformations {}

export type TransformationsConfigsSinglePage = SinglePage<TransformationsConfig>;

/**
 * A configuration item for a specific zone and feature.
 */
export interface TransformationsConfig {
  /**
   * Feature identifier.
   */
  id?: string;

  /**
   * Zone tag identifier.
   */
  cf_zone_tag?: string;

  /**
   * Whether this setting can be modified.
   */
  editable?: boolean;

  /**
   * When this setting was last modified.
   */
  modified_on?: string | null;

  /**
   * Current value of the feature setting.
   */
  value?: string;
}

export interface TransformationGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Transformations {
  export {
    type TransformationsConfig as TransformationsConfig,
    type TransformationsConfigsSinglePage as TransformationsConfigsSinglePage,
    type TransformationGetParams as TransformationGetParams,
  };
}
