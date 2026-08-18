// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AvailableAPI from './available';
import {
  Available,
  AvailableDataset,
  AvailableDatasetsSinglePage,
  AvailableList,
  AvailableListParams,
  BaseAvailable,
} from './available';
import { APIPromise } from '../../../../core/api-promise';
import { CloudflareError } from '../../../../core/error';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['logs', 'logExplorer', 'datasets'] = Object.freeze([
    'logs',
    'logExplorer',
    'datasets',
  ] as const);

  /**
   * Create a new Log Explorer dataset for the account or zone.
   *
   * Use the
   * `/account or zones/{account or zone_id}/logs/explorer/datasets/available`
   * endpoint to list dataset types you can create along with their available fields.
   *
   * The `fields` property is optional. If not specified, all available fields will
   * be enabled.
   *
   * For zone-level datasets use the zone-scoped endpoint: POST
   * /zones/{zone_id}/logs/explorer/datasets
   *
   * For dataset field definitions, see:
   * https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/
   *
   * @example
   * ```ts
   * const dataset =
   *   await client.logs.logExplorer.datasets.create({
   *     dataset: 'dataset',
   *     account_id: 'account_id',
   *   });
   * ```
   */
  create(params: DatasetCreateParams, options?: RequestOptions): APIPromise<Dataset> {
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
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/logs/explorer/datasets`, {
        body,
        ...options,
      }) as APIPromise<{ result: Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the enabled state and/or field configuration of an account or zone
   * dataset.
   *
   * @example
   * ```ts
   * const dataset =
   *   await client.logs.logExplorer.datasets.update(
   *     'dataset_id',
   *     { enabled: true, account_id: 'account_id' },
   *   );
   * ```
   */
  update(datasetID: string, params: DatasetUpdateParams, options?: RequestOptions): APIPromise<Dataset> {
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
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/logs/explorer/datasets/${datasetID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns all Log Explorer datasets configured for the account or zone.
   *
   * Pass `include_zones=true` to also include zone-level datasets that belong to
   * this account or zone. List responses omit the `fields` property; use the
   * single-dataset endpoint to retrieve field configuration.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const datasetSummary of client.logs.logExplorer.datasets.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DatasetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DatasetSummariesSinglePage, DatasetSummary> {
    const { account_id, zone_id, ...query } = params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/logs/explorer/datasets`,
      SinglePage<DatasetSummary>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a single Log Explorer dataset by ID for the account or zone.
   *
   * @example
   * ```ts
   * const dataset = await client.logs.logExplorer.datasets.get(
   *   'dataset_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    datasetID: string,
    params: DatasetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Dataset> {
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
        path`/${accountOrZone}/${accountOrZoneId}/logs/explorer/datasets/${datasetID}`,
        options,
      ) as APIPromise<{ result: Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Datasets extends BaseDatasets {
  available: AvailableAPI.Available = new AvailableAPI.Available(this._client);
}

export type DatasetSummariesSinglePage = SinglePage<DatasetSummary>;

export interface CreateRequest {
  /**
   * Dataset type name to create (e.g. `http_requests`).
   */
  dataset: string;

  /**
   * Controls which fields the API ingests. Defaults to all available fields when
   * absent.
   */
  fields?: Array<CreateRequest.Field>;
}

export namespace CreateRequest {
  export interface Field {
    /**
     * Whether the API includes this field in log ingest.
     */
    enabled: boolean;

    /**
     * Field name in lowercase.
     */
    name: string;
  }
}

/**
 * A Log Explorer dataset summary. List endpoints return this type and omit field
 * configuration; use the single-dataset endpoint to retrieve it.
 */
export interface Dataset {
  /**
   * RFC3339 timestamp recording when the API created this dataset.
   */
  created_at: string;

  /**
   * Dataset type name (e.g. `http_requests`).
   */
  dataset: string;

  /**
   * Unique dataset ID.
   */
  dataset_id: string;

  /**
   * Whether log ingest is currently active for this dataset.
   */
  enabled: boolean;

  /**
   * Public ID of the account or zone that owns this dataset.
   */
  object_id: string;

  /**
   * Whether this dataset belongs to an account or a zone.
   */
  object_type: 'account' | 'zone';

  /**
   * RFC3339 timestamp recording when the API last updated this dataset.
   */
  updated_at: string;

  /**
   * The field configuration for this dataset.
   */
  fields?: Array<Dataset.Field>;
}

export namespace Dataset {
  export interface Field {
    /**
     * Whether the API includes this field in log ingest.
     */
    enabled: boolean;

    /**
     * Field name in lowercase.
     */
    name: string;
  }
}

/**
 * A Log Explorer dataset summary. List endpoints return this type and omit field
 * configuration; use the single-dataset endpoint to retrieve it.
 */
export interface DatasetSummary {
  /**
   * RFC3339 timestamp recording when the API created this dataset.
   */
  created_at: string;

  /**
   * Dataset type name (e.g. `http_requests`).
   */
  dataset: string;

  /**
   * Unique dataset ID.
   */
  dataset_id: string;

  /**
   * Whether log ingest is currently active for this dataset.
   */
  enabled: boolean;

  /**
   * Public ID of the account or zone that owns this dataset.
   */
  object_id: string;

  /**
   * Whether this dataset belongs to an account or a zone.
   */
  object_type: 'account' | 'zone';

  /**
   * RFC3339 timestamp recording when the API last updated this dataset.
   */
  updated_at: string;
}

export interface UpdateRequest {
  /**
   * Whether to enable or disable log ingest for this dataset.
   */
  enabled: boolean;

  /**
   * Controls which fields the API ingests after the update. Defaults to all
   * available fields when absent.
   */
  fields?: Array<UpdateRequest.Field>;
}

export namespace UpdateRequest {
  export interface Field {
    /**
     * Whether the API includes this field in log ingest.
     */
    enabled: boolean;

    /**
     * Field name in lowercase.
     */
    name: string;
  }
}

export interface DatasetCreateParams {
  /**
   * Body param: Dataset type name to create (e.g. `http_requests`).
   */
  dataset: string;

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

  /**
   * Body param: Controls which fields the API ingests. Defaults to all available
   * fields when absent.
   */
  fields?: Array<DatasetCreateParams.Field>;
}

export namespace DatasetCreateParams {
  export interface Field {
    /**
     * Whether the API includes this field in log ingest.
     */
    enabled: boolean;

    /**
     * Field name in lowercase.
     */
    name: string;
  }
}

export interface DatasetUpdateParams {
  /**
   * Body param: Whether to enable or disable log ingest for this dataset.
   */
  enabled: boolean;

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

  /**
   * Body param: Controls which fields the API ingests after the update. Defaults to
   * all available fields when absent.
   */
  fields?: Array<DatasetUpdateParams.Field>;
}

export namespace DatasetUpdateParams {
  export interface Field {
    /**
     * Whether the API includes this field in log ingest.
     */
    enabled: boolean;

    /**
     * Field name in lowercase.
     */
    name: string;
  }
}

export interface DatasetListParams {
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

  /**
   * Query param: Set to true to include zone-scoped datasets belonging to this
   * account.
   */
  include_zones?: boolean;
}

export interface DatasetGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Datasets.Available = Available;
Datasets.BaseAvailable = BaseAvailable;

export declare namespace Datasets {
  export {
    type CreateRequest as CreateRequest,
    type Dataset as Dataset,
    type DatasetSummary as DatasetSummary,
    type UpdateRequest as UpdateRequest,
    type DatasetSummariesSinglePage as DatasetSummariesSinglePage,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetGetParams as DatasetGetParams,
  };

  export {
    Available as Available,
    BaseAvailable as BaseAvailable,
    type AvailableDataset as AvailableDataset,
    type AvailableList as AvailableList,
    type AvailableDatasetsSinglePage as AvailableDatasetsSinglePage,
    type AvailableListParams as AvailableListParams,
  };
}
