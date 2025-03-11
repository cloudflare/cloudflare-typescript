// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dataset extends APIResource {
  /**
   * Creates a dataset
   */
  create(
    accountID: number,
    body: DatasetCreateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an existing dataset
   */
  update(
    datasetID: string,
    params: DatasetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetUpdateResponse> {
    const { accountId, ...body } = params;
    return this._client.post(path`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all datasets in an account
   */
  list(accountID: number, options?: RequestOptions): APIPromise<DatasetListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/dataset`, options);
  }

  /**
   * Reads a dataset
   */
  get(datasetID: string, params: DatasetGetParams, options?: RequestOptions): APIPromise<DatasetGetResponse> {
    const { accountId } = params;
    return this._client.get(path`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetID}`, options);
  }

  /**
   * Reads data for a raw event
   */
  raw(eventID: string, params: DatasetRawParams, options?: RequestOptions): APIPromise<DatasetRawResponse> {
    const { accountId, datasetId } = params;
    return this._client.get(
      path`/accounts/${accountId}/cloudforce-one/events/raw/${datasetId}/${eventID}`,
      options,
    );
  }
}

export interface DatasetCreateResponse {
  isPublic: boolean;

  name: string;

  uuid: string;
}

export interface DatasetUpdateResponse {
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
   * If true, then anyone can search the dataset. If false, then its limited to the
   * account.
   */
  isPublic: boolean;

  /**
   * Used to describe the dataset within the account context
   */
  name: string;
}

export interface DatasetUpdateParams {
  /**
   * Path param: Account ID
   */
  accountId: number;

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
  accountId: number;
}

export interface DatasetRawParams {
  /**
   * Account ID
   */
  accountId: number;

  /**
   * Dataset name
   */
  datasetId: string;
}

export declare namespace Dataset {
  export {
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetUpdateResponse as DatasetUpdateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetRawResponse as DatasetRawResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetRawParams as DatasetRawParams,
  };
}
