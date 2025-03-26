// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * Creates a dataset
   */
  create(params: DatasetCreateParams, options?: RequestOptions): APIPromise<DatasetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all datasets in an account
   */
  list(params: DatasetListParams, options?: RequestOptions): APIPromise<DatasetListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/dataset`, options);
  }

  /**
   * Updates an existing dataset
   */
  edit(
    datasetID: string,
    params: DatasetEditParams,
    options?: RequestOptions,
  ): APIPromise<DatasetEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads a dataset
   */
  get(datasetID: string, params: DatasetGetParams, options?: RequestOptions): APIPromise<DatasetGetResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      options,
    );
  }

  /**
   * Reads data for a raw event
   */
  raw(eventID: string, params: DatasetRawParams, options?: RequestOptions): APIPromise<DatasetRawResponse> {
    const { account_id, dataset_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/raw/${dataset_id}/${eventID}`,
      options,
    );
  }
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
  id: string;

  accountId: number;

  created: string;

  data: unknown;

  source: string;

  tlp: string;
}

export interface DatasetCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param: If true, then anyone can search the dataset. If false, then its
   * limited to the account.
   */
  isPublic: boolean;

  /**
   * Body param: Used to describe the dataset within the account context
   */
  name: string;
}

export interface DatasetListParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface DatasetEditParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param: If true, then anyone can search the dataset. If false, then its
   * limited to the account.
   */
  isPublic: boolean;

  /**
   * Body param: Used to describe the dataset within the account context
   */
  name: string;
}

export interface DatasetGetParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface DatasetRawParams {
  /**
   * Account ID
   */
  account_id: number;

  /**
   * Dataset ID
   */
  dataset_id: string;
}

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
}
