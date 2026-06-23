// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';
import { CloudflareError } from '../../../../error';
import { SinglePage } from '../../../../pagination';

export class Available extends APIResource {
  /**
   * Returns all dataset types that this account or zone can create. Each entry
   * includes the dataset schema and timestamp field.
   *
   * The schema shows all possible fields for a dataset. However, not all fields may
   * be available for your account or zone. When creating or updating a dataset, only
   * fields available to your account or zone can be enabled. If you request a field
   * that is not available, you will receive an error.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const availableDataset of client.logs.logExplorer.datasets.available.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: AvailableListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AvailableDatasetsSinglePage, AvailableDataset>;
  list(options?: Core.RequestOptions): Core.PagePromise<AvailableDatasetsSinglePage, AvailableDataset>;
  list(
    params: AvailableListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AvailableDatasetsSinglePage, AvailableDataset> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
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
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/logs/explorer/datasets/available`,
      AvailableDatasetsSinglePage,
      options,
    );
  }
}

export class AvailableDatasetsSinglePage extends SinglePage<AvailableDataset> {}

/**
 * A dataset type that the account or zone can create.
 */
export interface AvailableDataset {
  /**
   * Dataset type name (e.g. `http_requests`).
   */
  dataset: string;

  /**
   * Whether this dataset type is account-scoped or zone-scoped.
   */
  object_type: 'account' | 'zone';

  /**
   * JSON Schema that describes the fields this dataset exposes.
   */
  schema: AvailableDataset.Schema;

  /**
   * The primary timestamp field name for this dataset.
   */
  timestamp_field: string;
}

export namespace AvailableDataset {
  /**
   * JSON Schema that describes the fields this dataset exposes.
   */
  export interface Schema {
    properties?: { [key: string]: unknown };

    required?: Array<string>;

    type?: 'object';
  }
}

export interface AvailableList {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<string>;

  success: boolean;

  result?: Array<AvailableDataset> | null;
}

export interface AvailableListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Available.AvailableDatasetsSinglePage = AvailableDatasetsSinglePage;

export declare namespace Available {
  export {
    type AvailableDataset as AvailableDataset,
    type AvailableList as AvailableList,
    AvailableDatasetsSinglePage as AvailableDatasetsSinglePage,
    type AvailableListParams as AvailableListParams,
  };
}
