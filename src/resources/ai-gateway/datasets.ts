// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DatasetsAPI from './datasets';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Datasets extends APIResource {
  /**
   * Create a new Dataset
   */
  create(
    gatewayId: string,
    params: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/datasets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Dataset
   */
  update(
    gatewayId: string,
    id: string,
    params: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/datasets/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Datasets
   */
  list(
    gatewayId: string,
    params: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetListResponsesV4PagePaginationArray, DatasetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/datasets`,
      DatasetListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a Dataset
   */
  delete(
    gatewayId: string,
    id: string,
    params: DatasetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/datasets/${id}`,
        options,
      ) as Core.APIPromise<{ result: DatasetDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Dataset
   */
  get(
    gatewayId: string,
    id: string,
    params: DatasetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/datasets/${id}`,
        options,
      ) as Core.APIPromise<{ result: DatasetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DatasetListResponsesV4PagePaginationArray extends V4PagePaginationArray<DatasetListResponse> {}

export interface DatasetCreateResponse {
  id: string;

  created_at: string;

  enable: boolean;

  filters: Array<DatasetCreateResponse.Filter>;

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

  created_at: string;

  enable: boolean;

  filters: Array<DatasetUpdateResponse.Filter>;

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

  created_at: string;

  enable: boolean;

  filters: Array<DatasetListResponse.Filter>;

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

  created_at: string;

  enable: boolean;

  filters: Array<DatasetDeleteResponse.Filter>;

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

  created_at: string;

  enable: boolean;

  filters: Array<DatasetGetResponse.Filter>;

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
  id?: string;

  /**
   * Query param:
   */
  enable?: boolean;

  /**
   * Query param:
   */
  filters?: Array<DatasetListParams.Filter>;

  /**
   * Query param:
   */
  name?: string;

  /**
   * Query param: Order By Column Name
   */
  order_by?: string;

  /**
   * Query param: Order By Direction
   */
  order_by_direction?: 'asc' | 'desc';

  /**
   * Query param: Search by id, name, filters
   */
  search?: string;
}

export namespace DatasetListParams {
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

export interface DatasetDeleteParams {
  account_id: string;
}

export interface DatasetGetParams {
  account_id: string;
}

export namespace Datasets {
  export import DatasetCreateResponse = DatasetsAPI.DatasetCreateResponse;
  export import DatasetUpdateResponse = DatasetsAPI.DatasetUpdateResponse;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetDeleteResponse = DatasetsAPI.DatasetDeleteResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListResponsesV4PagePaginationArray = DatasetsAPI.DatasetListResponsesV4PagePaginationArray;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
}
