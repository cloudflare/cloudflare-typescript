// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvaluationsAPI from './evaluations';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Evaluations extends APIResource {
  /**
   * Create a new Evaluations
   */
  create(
    gatewayId: string,
    params: EvaluationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/evaluations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EvaluationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Evaluationss
   */
  list(
    gatewayId: string,
    params: EvaluationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluationListResponsesV4PagePaginationArray, EvaluationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/evaluations`,
      EvaluationListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a Evaluations
   */
  delete(
    gatewayId: string,
    id: string,
    params: EvaluationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/evaluations/${id}`,
        options,
      ) as Core.APIPromise<{ result: EvaluationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Evaluations
   */
  get(
    gatewayId: string,
    id: string,
    params: EvaluationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/evaluations/${id}`,
        options,
      ) as Core.APIPromise<{ result: EvaluationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class EvaluationListResponsesV4PagePaginationArray extends V4PagePaginationArray<EvaluationListResponse> {}

export interface EvaluationCreateResponse {
  id: string;

  created_at: string;

  datasets: Array<EvaluationCreateResponse.Dataset>;

  gateway_id: string;

  modified_at: string;

  name: string;

  processed: boolean;

  results: Array<EvaluationCreateResponse.Result>;

  total_logs: number;
}

export namespace EvaluationCreateResponse {
  export interface Dataset {
    id: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    gateway_id: string;

    modified_at: string;

    name: string;
  }

  export namespace Dataset {
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

  export interface Result {
    id: string;

    created_at: string;

    evaluation_id: string;

    evaluation_type_id: string;

    modified_at: string;

    result: string;

    status: number;

    status_description: string;

    total_logs: number;
  }
}

export interface EvaluationListResponse {
  id: string;

  created_at: string;

  datasets: Array<EvaluationListResponse.Dataset>;

  gateway_id: string;

  modified_at: string;

  name: string;

  processed: boolean;

  results: Array<EvaluationListResponse.Result>;

  total_logs: number;
}

export namespace EvaluationListResponse {
  export interface Dataset {
    id: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    gateway_id: string;

    modified_at: string;

    name: string;
  }

  export namespace Dataset {
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

  export interface Result {
    id: string;

    created_at: string;

    evaluation_id: string;

    evaluation_type_id: string;

    modified_at: string;

    result: string;

    status: number;

    status_description: string;

    total_logs: number;
  }
}

export interface EvaluationDeleteResponse {
  id: string;

  created_at: string;

  datasets: Array<EvaluationDeleteResponse.Dataset>;

  gateway_id: string;

  modified_at: string;

  name: string;

  processed: boolean;

  results: Array<EvaluationDeleteResponse.Result>;

  total_logs: number;
}

export namespace EvaluationDeleteResponse {
  export interface Dataset {
    id: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    gateway_id: string;

    modified_at: string;

    name: string;
  }

  export namespace Dataset {
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

  export interface Result {
    id: string;

    created_at: string;

    evaluation_id: string;

    evaluation_type_id: string;

    modified_at: string;

    result: string;

    status: number;

    status_description: string;

    total_logs: number;
  }
}

export interface EvaluationGetResponse {
  id: string;

  created_at: string;

  datasets: Array<EvaluationGetResponse.Dataset>;

  gateway_id: string;

  modified_at: string;

  name: string;

  processed: boolean;

  results: Array<EvaluationGetResponse.Result>;

  total_logs: number;
}

export namespace EvaluationGetResponse {
  export interface Dataset {
    id: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    gateway_id: string;

    modified_at: string;

    name: string;
  }

  export namespace Dataset {
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

  export interface Result {
    id: string;

    created_at: string;

    evaluation_id: string;

    evaluation_type_id: string;

    modified_at: string;

    result: string;

    status: number;

    status_description: string;

    total_logs: number;
  }
}

export interface EvaluationCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  dataset_ids: Array<string>;

  /**
   * Body param:
   */
  evaluation_type_ids: Array<string>;

  /**
   * Body param:
   */
  name: string;
}

export interface EvaluationListParams extends V4PagePaginationArrayParams {
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
   * Query param:
   */
  processed?: boolean;

  /**
   * Query param: Search by id, name
   */
  search?: string;

  /**
   * Query param:
   */
  total_logs?: number;
}

export interface EvaluationDeleteParams {
  account_id: string;
}

export interface EvaluationGetParams {
  account_id: string;
}

export namespace Evaluations {
  export import EvaluationCreateResponse = EvaluationsAPI.EvaluationCreateResponse;
  export import EvaluationListResponse = EvaluationsAPI.EvaluationListResponse;
  export import EvaluationDeleteResponse = EvaluationsAPI.EvaluationDeleteResponse;
  export import EvaluationGetResponse = EvaluationsAPI.EvaluationGetResponse;
  export import EvaluationListResponsesV4PagePaginationArray = EvaluationsAPI.EvaluationListResponsesV4PagePaginationArray;
  export import EvaluationCreateParams = EvaluationsAPI.EvaluationCreateParams;
  export import EvaluationListParams = EvaluationsAPI.EvaluationListParams;
  export import EvaluationDeleteParams = EvaluationsAPI.EvaluationDeleteParams;
  export import EvaluationGetParams = EvaluationsAPI.EvaluationGetParams;
}
