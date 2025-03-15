// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Datasets extends APIResource {
  /**
   * Creates a dataset
   */
  create(params: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<DatasetCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all datasets in an account
   */
  list(params: DatasetListParams, options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/dataset`, options);
  }

  /**
   * Updates an existing dataset
   */
  edit(
    datasetId: string,
    params: DatasetEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads a dataset
   */
  get(
    datasetId: string,
    params: DatasetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetId}`, options);
  }

  /**
   * Reads data for a raw event
   */
  raw(
    datasetId: string,
    eventId: string,
    params: DatasetRawParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetRawResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/cloudforce-one/events/raw/${datasetId}/${eventId}`,
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
