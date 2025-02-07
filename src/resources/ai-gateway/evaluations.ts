// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Evaluations extends APIResource {
  /**
   * Create a new Evaluation
   */
  create(
    gatewayID: string,
    params: EvaluationCreateParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/evaluations`, {
        body,
        ...options,
      }) as APIPromise<{ result: EvaluationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Evaluations
   */
  list(
    gatewayID: string,
    params: EvaluationListParams,
    options?: RequestOptions,
  ): PagePromise<EvaluationListResponsesV4PagePaginationArray, EvaluationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/evaluations`,
      V4PagePaginationArray<EvaluationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Evaluation
   */
  delete(
    id: string,
    params: EvaluationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationDeleteResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/evaluations/${id}`,
        options,
      ) as APIPromise<{ result: EvaluationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Evaluation
   */
  get(id: string, params: EvaluationGetParams, options?: RequestOptions): APIPromise<EvaluationGetResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/evaluations/${id}`,
        options,
      ) as APIPromise<{ result: EvaluationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EvaluationListResponsesV4PagePaginationArray = V4PagePaginationArray<EvaluationListResponse>;

export interface EvaluationCreateResponse {
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  datasets: Array<EvaluationCreateResponse.Dataset>;

  /**
   * gateway id
   */
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

    account_id: string;

    account_tag: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    /**
     * gateway id
     */
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

  account_id: string;

  account_tag: string;

  created_at: string;

  datasets: Array<EvaluationListResponse.Dataset>;

  /**
   * gateway id
   */
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

    account_id: string;

    account_tag: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    /**
     * gateway id
     */
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

  account_id: string;

  account_tag: string;

  created_at: string;

  datasets: Array<EvaluationDeleteResponse.Dataset>;

  /**
   * gateway id
   */
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

    account_id: string;

    account_tag: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    /**
     * gateway id
     */
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

  account_id: string;

  account_tag: string;

  created_at: string;

  datasets: Array<EvaluationGetResponse.Dataset>;

  /**
   * gateway id
   */
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

    account_id: string;

    account_tag: string;

    created_at: string;

    enable: boolean;

    filters: Array<Dataset.Filter>;

    /**
     * gateway id
     */
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
  name?: string;

  /**
   * Query param:
   */
  processed?: boolean;

  /**
   * Query param: Search by id, name
   */
  search?: string;
}

export interface EvaluationDeleteParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export interface EvaluationGetParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export declare namespace Evaluations {
  export {
    type EvaluationCreateResponse as EvaluationCreateResponse,
    type EvaluationListResponse as EvaluationListResponse,
    type EvaluationDeleteResponse as EvaluationDeleteResponse,
    type EvaluationGetResponse as EvaluationGetResponse,
    type EvaluationListResponsesV4PagePaginationArray as EvaluationListResponsesV4PagePaginationArray,
    type EvaluationCreateParams as EvaluationCreateParams,
    type EvaluationListParams as EvaluationListParams,
    type EvaluationDeleteParams as EvaluationDeleteParams,
    type EvaluationGetParams as EvaluationGetParams,
  };
}
