// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HealthAPI from './health';
import { BaseHealth, Health } from './health';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'datasets'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'datasets',
  ] as const);

  /**
   * Creates a dataset
   *
   * @example
   * ```ts
   * const dataset =
   *   await client.cloudforceOne.threatEvents.datasets.create({
   *     account_id: 'account_id',
   *     isPublic: true,
   *     name: 'x',
   *   });
   * ```
   */
  create(params: DatasetCreateParams, options?: RequestOptions): APIPromise<DatasetCreateResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all datasets in an account
   *
   * @example
   * ```ts
   * const datasets =
   *   await client.cloudforceOne.threatEvents.datasets.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(
    params: DatasetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DatasetListResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/dataset`, options);
  }

  /**
   * Updates an existing dataset
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.datasets.edit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       isPublic: true,
   *       name: 'x',
   *     },
   *   );
   * ```
   */
  edit(
    datasetID: string,
    params: DatasetEditParams,
    options?: RequestOptions,
  ): APIPromise<DatasetEditResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads a dataset
   *
   * @example
   * ```ts
   * const dataset =
   *   await client.cloudforceOne.threatEvents.datasets.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    datasetID: string,
    params: DatasetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DatasetGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      options,
    );
  }

  /**
   * Retrieves the raw data associated with an event. Searches across all shards in
   * the dataset.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.datasets.raw(
   *     'event_id',
   *     { account_id: 'account_id', dataset_id: 'dataset_id' },
   *   );
   * ```
   */
  raw(eventID: string, params: DatasetRawParams, options?: RequestOptions): APIPromise<DatasetRawResponse> {
    const { account_id = this._client.accountID, dataset_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/raw/${dataset_id}/${eventID}`,
      options,
    );
  }
}
export class Datasets extends BaseDatasets {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
}

export interface DatasetCreateResponse {
  isPublic: boolean;

  name: string;

  uuid: string;
}

export type DatasetListResponse = Array<DatasetListResponse.DatasetListResponseItem>;

export namespace DatasetListResponse {
  export interface DatasetListResponseItem {
    isPublic: boolean;

    name: string;

    uuid: string;
  }
}

export interface DatasetEditResponse {
  isPublic: boolean;

  name: string;

  uuid: string;
}

export interface DatasetGetResponse {
  isPublic: boolean;

  name: string;

  uuid: string;
}

export interface DatasetRawResponse {
  id: number;

  accountId: number;

  created: string;

  data: string;

  source: string;

  tlp: string;
}

export interface DatasetCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Body param: If true, then anyone can search the dataset. If false, then its
   * limited to the account.
   */
  isPublic: boolean;

  /**
   * Body param: Used to describe the dataset within the account context.
   */
  name: string;
}

export interface DatasetListParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface DatasetEditParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Body param: If true, then anyone can search the dataset. If false, then its
   * limited to the account.
   */
  isPublic: boolean;

  /**
   * Body param: Used to describe the dataset within the account context.
   */
  name: string;
}

export interface DatasetGetParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export interface DatasetRawParams {
  /**
   * Account ID.
   */
  account_id?: string;

  /**
   * Dataset ID.
   */
  dataset_id: string;
}

Datasets.Health = Health;
Datasets.BaseHealth = BaseHealth;

export declare namespace Datasets {
  export {
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetEditResponse as DatasetEditResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetRawResponse as DatasetRawResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetEditParams as DatasetEditParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetRawParams as DatasetRawParams,
  };

  export { Health as Health, BaseHealth as BaseHealth };
}
