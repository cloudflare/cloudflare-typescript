// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Dataset extends APIResource {
  /**
   * Creates a dataset
   */
  create(
    accountId: number,
    body: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetCreateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an existing dataset
   */
  update(
    accountId: number,
    datasetId: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetUpdateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all datasets in an account
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/dataset`, options);
  }

  /**
   * Reads a dataset
   */
  get(
    accountId: number,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetGetResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/dataset/${datasetId}`, options);
  }

  /**
   * Reads data for a raw event
   */
  raw(
    accountId: number,
    datasetId: string,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetRawResponse> {
    return this._client.get(
      `/accounts/${accountId}/cloudforce-one/events/raw/${datasetId}/${eventId}`,
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
   * If true, then anyone can search the dataset. If false, then its limited to the
   * account.
   */
  isPublic: boolean;

  /**
   * Used to describe the dataset within the account context
   */
  name: string;
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
  };
}
