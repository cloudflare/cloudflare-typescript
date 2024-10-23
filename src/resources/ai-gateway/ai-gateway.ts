// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DatasetsAPI from './datasets';
import * as EvaluationTypesAPI from './evaluation-types';
import * as EvaluationsAPI from './evaluations';
import * as LogsAPI from './logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class AIGateway extends APIResource {
  evaluationTypes: EvaluationTypesAPI.EvaluationTypes = new EvaluationTypesAPI.EvaluationTypes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  evaluations: EvaluationsAPI.Evaluations = new EvaluationsAPI.Evaluations(this._client);

  /**
   * Create a new Gateway
   */
  create(
    params: AIGatewayCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Gateway
   */
  update(
    id: string,
    params: AIGatewayUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-gateway/gateways/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Gateways
   */
  list(
    params: AIGatewayListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways`,
      AIGatewayListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a Gateway
   */
  delete(
    id: string,
    params: AIGatewayDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Gateway
   */
  get(
    id: string,
    params: AIGatewayGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AIGatewayListResponsesV4PagePaginationArray extends V4PagePaginationArray<AIGatewayListResponse> {}

export interface AIGatewayCreateResponse {
  /**
   * gateway id
   */
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  rate_limiting_interval: number | null;

  rate_limiting_limit: number | null;

  rate_limiting_technique: 'fixed' | 'sliding';

  logpush?: boolean;

  logpush_public_key?: string | null;
}

export interface AIGatewayUpdateResponse {
  /**
   * gateway id
   */
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  rate_limiting_interval: number | null;

  rate_limiting_limit: number | null;

  rate_limiting_technique: 'fixed' | 'sliding';

  logpush?: boolean;

  logpush_public_key?: string | null;
}

export interface AIGatewayListResponse {
  /**
   * gateway id
   */
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  rate_limiting_interval: number | null;

  rate_limiting_limit: number | null;

  rate_limiting_technique: 'fixed' | 'sliding';

  logpush?: boolean;

  logpush_public_key?: string | null;
}

export interface AIGatewayDeleteResponse {
  /**
   * gateway id
   */
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  rate_limiting_interval: number | null;

  rate_limiting_limit: number | null;

  rate_limiting_technique: 'fixed' | 'sliding';

  logpush?: boolean;

  logpush_public_key?: string | null;
}

export interface AIGatewayGetResponse {
  /**
   * gateway id
   */
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  rate_limiting_interval: number | null;

  rate_limiting_limit: number | null;

  rate_limiting_technique: 'fixed' | 'sliding';

  logpush?: boolean;

  logpush_public_key?: string | null;
}

export interface AIGatewayCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: gateway id
   */
  id: string;

  /**
   * Body param:
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param:
   */
  cache_ttl: number | null;

  /**
   * Body param:
   */
  collect_logs: boolean;

  /**
   * Body param:
   */
  rate_limiting_interval: number | null;

  /**
   * Body param:
   */
  rate_limiting_limit: number | null;

  /**
   * Body param:
   */
  rate_limiting_technique: 'fixed' | 'sliding';

  /**
   * Body param:
   */
  logpush?: boolean;

  /**
   * Body param:
   */
  logpush_public_key?: string | null;
}

export interface AIGatewayUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param:
   */
  cache_ttl: number | null;

  /**
   * Body param:
   */
  collect_logs: boolean;

  /**
   * Body param:
   */
  rate_limiting_interval: number | null;

  /**
   * Body param:
   */
  rate_limiting_limit: number | null;

  /**
   * Body param:
   */
  rate_limiting_technique: 'fixed' | 'sliding';

  /**
   * Body param:
   */
  logpush?: boolean;

  /**
   * Body param:
   */
  logpush_public_key?: string | null;
}

export interface AIGatewayListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: gateway id
   */
  id?: string;

  /**
   * Query param: Order By Column Name
   */
  order_by?: string;

  /**
   * Query param: Order By Direction
   */
  order_by_direction?: 'asc' | 'desc';
}

export interface AIGatewayDeleteParams {
  account_id: string;
}

export interface AIGatewayGetParams {
  account_id: string;
}

export namespace AIGateway {
  export import EvaluationTypes = EvaluationTypesAPI.EvaluationTypes;
  export import EvaluationTypeGetResponse = EvaluationTypesAPI.EvaluationTypeGetResponse;
  export import EvaluationTypeGetParams = EvaluationTypesAPI.EvaluationTypeGetParams;
  export import Logs = LogsAPI.Logs;
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogDeleteResponse = LogsAPI.LogDeleteResponse;
  export import LogEditResponse = LogsAPI.LogEditResponse;
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogRequestResponse = LogsAPI.LogRequestResponse;
  export import LogResponseResponse = LogsAPI.LogResponseResponse;
  export import LogListResponsesV4PagePaginationArray = LogsAPI.LogListResponsesV4PagePaginationArray;
  export import LogListParams = LogsAPI.LogListParams;
  export import LogDeleteParams = LogsAPI.LogDeleteParams;
  export import LogEditParams = LogsAPI.LogEditParams;
  export import LogGetParams = LogsAPI.LogGetParams;
  export import LogRequestParams = LogsAPI.LogRequestParams;
  export import LogResponseParams = LogsAPI.LogResponseParams;
  export import Datasets = DatasetsAPI.Datasets;
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
  export import Evaluations = EvaluationsAPI.Evaluations;
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
