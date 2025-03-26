// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * Create a new Dataset
   */
  create(
    gatewayID: string,
    params: DatasetCreateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/datasets`, {
        body,
        ...options,
      }) as APIPromise<{ result: DatasetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Dataset
   */
  update(
    id: string,
    params: DatasetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetUpdateResponse> {
    const { account_id, gateway_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DatasetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Datasets
   */
  list(
    gatewayID: string,
    params: DatasetListParams,
    options?: RequestOptions,
  ): PagePromise<DatasetListResponsesV4PagePaginationArray, DatasetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/datasets`,
      V4PagePaginationArray<DatasetListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Dataset
   */
  delete(
    id: string,
    params: DatasetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DatasetDeleteResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`,
        options,
      ) as APIPromise<{ result: DatasetDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Dataset
   */
  get(id: string, params: DatasetGetParams, options?: RequestOptions): APIPromise<DatasetGetResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`,
        options,
      ) as APIPromise<{ result: DatasetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DatasetListResponsesV4PagePaginationArray = V4PagePaginationArray<DatasetListResponse>;

export interface DatasetCreateResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetCreateResponse.Filter>;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DatasetCreateResponse {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetUpdateResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetUpdateResponse.Filter>;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DatasetUpdateResponse {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetListResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetListResponse.Filter>;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DatasetListResponse {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetDeleteResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetDeleteResponse.Filter>;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DatasetDeleteResponse {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetGetResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetGetResponse.Filter>;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  name: string;
}

export namespace DatasetGetResponse {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  enable: boolean;

  /**
   * Body param:
   */
  filters: Array<DatasetCreateParams.Filter>;

  /**
   * Body param:
   */
  name: string;
}

export namespace DatasetCreateParams {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Path param: gateway id
   */
  gateway_id: string;

  /**
   * Body param:
   */
  enable: boolean;

  /**
   * Body param:
   */
  filters: Array<DatasetUpdateParams.Filter>;

  /**
   * Body param:
   */
  name: string;
}

export namespace DatasetUpdateParams {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';

    operator: 'eq' | 'contains' | 'lt' | 'gt';

    value: Array<string | number | boolean>;
  }
}

export interface DatasetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  enable?: boolean;

  /**
   * Query param:
   */
  name?: string;

  /**
   * Query param: Search by id, name, filters
   */
  search?: string;
}

export interface DatasetDeleteParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export interface DatasetGetParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export declare namespace Datasets {
  export {
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetUpdateResponse as DatasetUpdateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetListResponsesV4PagePaginationArray as DatasetListResponsesV4PagePaginationArray,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetGetParams as DatasetGetParams,
  };
}
