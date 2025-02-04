// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DatasetsAPI from './datasets';
import {
  DatasetCreateParams,
  DatasetCreateResponse,
  DatasetDeleteParams,
  DatasetDeleteResponse,
  DatasetGetParams,
  DatasetGetResponse,
  DatasetListParams,
  DatasetListResponse,
  DatasetListResponsesV4PagePaginationArray,
  DatasetUpdateParams,
  DatasetUpdateResponse,
  Datasets,
} from './datasets';
import * as EvaluationTypesAPI from './evaluation-types';
import { EvaluationTypeGetParams, EvaluationTypeGetResponse, EvaluationTypes } from './evaluation-types';
import * as EvaluationsAPI from './evaluations';
import {
  EvaluationCreateParams,
  EvaluationCreateResponse,
  EvaluationDeleteParams,
  EvaluationDeleteResponse,
  EvaluationGetParams,
  EvaluationGetResponse,
  EvaluationListParams,
  EvaluationListResponse,
  EvaluationListResponsesV4PagePaginationArray,
  Evaluations,
} from './evaluations';
import * as LogsAPI from './logs';
import {
  LogDeleteParams,
  LogDeleteResponse,
  LogEditParams,
  LogEditResponse,
  LogGetParams,
  LogGetResponse,
  LogListParams,
  LogListResponse,
  LogListResponsesV4PagePaginationArray,
  LogRequestParams,
  LogRequestResponse,
  LogResponseParams,
  LogResponseResponse,
  Logs,
} from './logs';
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

  account_id: string;

  account_tag: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  internal_id: string;

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

  account_id: string;

  account_tag: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  internal_id: string;

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

  account_id: string;

  account_tag: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  internal_id: string;

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

  account_id: string;

  account_tag: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  internal_id: string;

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

  account_id: string;

  account_tag: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number | null;

  collect_logs: boolean;

  created_at: string;

  internal_id: string;

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
   * Query param: Search by id
   */
  search?: string;
}

export interface AIGatewayDeleteParams {
  account_id: string;
}

export interface AIGatewayGetParams {
  account_id: string;
}

AIGateway.EvaluationTypes = EvaluationTypes;
AIGateway.Logs = Logs;
AIGateway.LogListResponsesV4PagePaginationArray = LogListResponsesV4PagePaginationArray;
AIGateway.Datasets = Datasets;
AIGateway.DatasetListResponsesV4PagePaginationArray = DatasetListResponsesV4PagePaginationArray;
AIGateway.Evaluations = Evaluations;
AIGateway.EvaluationListResponsesV4PagePaginationArray = EvaluationListResponsesV4PagePaginationArray;

export declare namespace AIGateway {
  export {
    EvaluationTypes as EvaluationTypes,
    type EvaluationTypeGetResponse as EvaluationTypeGetResponse,
    type EvaluationTypeGetParams as EvaluationTypeGetParams,
  };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    type LogDeleteResponse as LogDeleteResponse,
    type LogEditResponse as LogEditResponse,
    type LogGetResponse as LogGetResponse,
    type LogRequestResponse as LogRequestResponse,
    type LogResponseResponse as LogResponseResponse,
    LogListResponsesV4PagePaginationArray as LogListResponsesV4PagePaginationArray,
    type LogListParams as LogListParams,
    type LogDeleteParams as LogDeleteParams,
    type LogEditParams as LogEditParams,
    type LogGetParams as LogGetParams,
    type LogRequestParams as LogRequestParams,
    type LogResponseParams as LogResponseParams,
  };

  export {
    Datasets as Datasets,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetUpdateResponse as DatasetUpdateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetGetResponse as DatasetGetResponse,
    DatasetListResponsesV4PagePaginationArray as DatasetListResponsesV4PagePaginationArray,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetGetParams as DatasetGetParams,
  };

  export {
    Evaluations as Evaluations,
    type EvaluationCreateResponse as EvaluationCreateResponse,
    type EvaluationListResponse as EvaluationListResponse,
    type EvaluationDeleteResponse as EvaluationDeleteResponse,
    type EvaluationGetResponse as EvaluationGetResponse,
    EvaluationListResponsesV4PagePaginationArray as EvaluationListResponsesV4PagePaginationArray,
    type EvaluationCreateParams as EvaluationCreateParams,
    type EvaluationListParams as EvaluationListParams,
    type EvaluationDeleteParams as EvaluationDeleteParams,
    type EvaluationGetParams as EvaluationGetParams,
  };
}
