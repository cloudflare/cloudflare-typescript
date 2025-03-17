// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
import {
  EvaluationTypeListParams,
  EvaluationTypeListResponse,
  EvaluationTypeListResponsesV4PagePaginationArray,
  EvaluationTypes,
} from './evaluation-types';
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
import * as URLsAPI from './urls';
import { URLGetParams, URLGetResponse, URLs } from './urls';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AIGateway extends APIResource {
  evaluationTypes: EvaluationTypesAPI.EvaluationTypes = new EvaluationTypesAPI.EvaluationTypes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  evaluations: EvaluationsAPI.Evaluations = new EvaluationsAPI.Evaluations(this._client);
  urls: URLsAPI.URLs = new URLsAPI.URLs(this._client);

  /**
   * Create a new Gateway
   */
  create(params: AIGatewayCreateParams, options?: RequestOptions): APIPromise<AIGatewayCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/gateways`, {
        body,
        ...options,
      }) as APIPromise<{ result: AIGatewayCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Gateway
   */
  update(
    id: string,
    params: AIGatewayUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/ai-gateway/gateways/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: AIGatewayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Gateways
   */
  list(
    params: AIGatewayListParams,
    options?: RequestOptions,
  ): PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/gateways`,
      V4PagePaginationArray<AIGatewayListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Gateway
   */
  delete(
    id: string,
    params: AIGatewayDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as APIPromise<{
        result: AIGatewayDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Gateway
   */
  get(id: string, params: AIGatewayGetParams, options?: RequestOptions): APIPromise<AIGatewayGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as APIPromise<{
        result: AIGatewayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AIGatewayListResponsesV4PagePaginationArray = V4PagePaginationArray<AIGatewayListResponse>;

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

  authentication?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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

  authentication?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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

  authentication?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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

  authentication?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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

  authentication?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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
  authentication?: boolean;

  /**
   * Body param:
   */
  log_management?: number | null;

  /**
   * Body param:
   */
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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
  authentication?: boolean;

  /**
   * Body param:
   */
  log_management?: number | null;

  /**
   * Body param:
   */
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

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
AIGateway.Datasets = Datasets;
AIGateway.Evaluations = Evaluations;
AIGateway.URLs = URLs;

export declare namespace AIGateway {
  export {
    EvaluationTypes as EvaluationTypes,
    type EvaluationTypeListResponse as EvaluationTypeListResponse,
    type EvaluationTypeListResponsesV4PagePaginationArray as EvaluationTypeListResponsesV4PagePaginationArray,
    type EvaluationTypeListParams as EvaluationTypeListParams,
  };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    type LogDeleteResponse as LogDeleteResponse,
    type LogEditResponse as LogEditResponse,
    type LogGetResponse as LogGetResponse,
    type LogRequestResponse as LogRequestResponse,
    type LogResponseResponse as LogResponseResponse,
    type LogListResponsesV4PagePaginationArray as LogListResponsesV4PagePaginationArray,
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
    type DatasetListResponsesV4PagePaginationArray as DatasetListResponsesV4PagePaginationArray,
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
    type EvaluationListResponsesV4PagePaginationArray as EvaluationListResponsesV4PagePaginationArray,
    type EvaluationCreateParams as EvaluationCreateParams,
    type EvaluationListParams as EvaluationListParams,
    type EvaluationDeleteParams as EvaluationDeleteParams,
    type EvaluationGetParams as EvaluationGetParams,
  };

  export { URLs as URLs, type URLGetResponse as URLGetResponse, type URLGetParams as URLGetParams };
}
