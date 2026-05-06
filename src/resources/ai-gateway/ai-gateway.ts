// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DatasetsAPI from './datasets';
import {
  BaseDatasets,
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
import * as DynamicRoutingAPI from './dynamic-routing';
import {
  BaseDynamicRouting,
  DynamicRouting,
  DynamicRoutingCreateDeploymentParams,
  DynamicRoutingCreateDeploymentResponse,
  DynamicRoutingCreateParams,
  DynamicRoutingCreateResponse,
  DynamicRoutingCreateVersionParams,
  DynamicRoutingCreateVersionResponse,
  DynamicRoutingDeleteParams,
  DynamicRoutingDeleteResponse,
  DynamicRoutingGetParams,
  DynamicRoutingGetResponse,
  DynamicRoutingGetVersionParams,
  DynamicRoutingGetVersionResponse,
  DynamicRoutingListDeploymentsParams,
  DynamicRoutingListDeploymentsResponse,
  DynamicRoutingListParams,
  DynamicRoutingListResponse,
  DynamicRoutingListVersionsParams,
  DynamicRoutingListVersionsResponse,
  DynamicRoutingUpdateParams,
  DynamicRoutingUpdateResponse,
} from './dynamic-routing';
import * as EvaluationTypesAPI from './evaluation-types';
import {
  BaseEvaluationTypes,
  EvaluationTypeListParams,
  EvaluationTypeListResponse,
  EvaluationTypeListResponsesV4PagePaginationArray,
  EvaluationTypes,
} from './evaluation-types';
import * as EvaluationsAPI from './evaluations';
import {
  BaseEvaluations,
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
  BaseLogs,
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
import * as ProviderConfigsAPI from './provider-configs';
import {
  BaseProviderConfigs,
  ProviderConfigCreateParams,
  ProviderConfigCreateResponse,
  ProviderConfigListParams,
  ProviderConfigListResponse,
  ProviderConfigListResponsesV4PagePaginationArray,
  ProviderConfigs,
} from './provider-configs';
import * as URLsAPI from './urls';
import { BaseURLs, URLGetParams, URLGetResponse, URLs } from './urls';
import * as BillingAPI from './billing/billing';
import {
  BaseBilling,
  Billing,
  BillingCreditBalanceParams,
  BillingCreditBalanceResponse,
  BillingInvoiceHistoryParams,
  BillingInvoiceHistoryResponse,
  BillingInvoicePreviewParams,
  BillingInvoicePreviewResponse,
  BillingUsageHistoryParams,
  BillingUsageHistoryResponse,
} from './billing/billing';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAIGateway extends APIResource {
  static override readonly _key: readonly ['aiGateway'] = Object.freeze(['aiGateway'] as const);

  /**
   * Creates a new AI Gateway.
   *
   * @example
   * ```ts
   * const aiGateway = await client.aiGateway.create({
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   id: 'my-gateway',
   *   cache_invalidate_on_update: true,
   *   cache_ttl: 0,
   *   collect_logs: true,
   *   rate_limiting_interval: 0,
   *   rate_limiting_limit: 0,
   * });
   * ```
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
   * Updates an existing AI Gateway dataset.
   *
   * @example
   * ```ts
   * const aiGateway = await client.aiGateway.update(
   *   'my-gateway',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *     cache_invalidate_on_update: true,
   *     cache_ttl: 0,
   *     collect_logs: true,
   *     rate_limiting_interval: 0,
   *     rate_limiting_limit: 0,
   *   },
   * );
   * ```
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
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const aiGatewayListResponse of client.aiGateway.list(
   *   { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   * )) {
   *   // ...
   * }
   * ```
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
   * Deletes an AI Gateway dataset.
   *
   * @example
   * ```ts
   * const aiGateway = await client.aiGateway.delete(
   *   'my-gateway',
   *   { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   * );
   * ```
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
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @example
   * ```ts
   * const aiGateway = await client.aiGateway.get('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   * });
   * ```
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
export class AIGateway extends BaseAIGateway {
  evaluationTypes: EvaluationTypesAPI.EvaluationTypes = new EvaluationTypesAPI.EvaluationTypes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  evaluations: EvaluationsAPI.Evaluations = new EvaluationsAPI.Evaluations(this._client);
  dynamicRouting: DynamicRoutingAPI.DynamicRouting = new DynamicRoutingAPI.DynamicRouting(this._client);
  providerConfigs: ProviderConfigsAPI.ProviderConfigs = new ProviderConfigsAPI.ProviderConfigs(this._client);
  urls: URLsAPI.URLs = new URLsAPI.URLs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
}

export type AIGatewayListResponsesV4PagePaginationArray = V4PagePaginationArray<AIGatewayListResponse>;

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

  authentication?: boolean;

  dlp?: AIGatewayCreateResponse.UnionMember0 | AIGatewayCreateResponse.UnionMember1;

  is_default?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  logpush?: boolean;

  logpush_public_key?: string | null;

  otel?: Array<AIGatewayCreateResponse.Otel> | null;

  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  store_id?: string | null;

  stripe?: AIGatewayCreateResponse.Stripe | null;

  /**
   * Controls how Workers AI inference calls routed through this gateway are billed.
   * Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  zdr?: boolean;
}

export namespace AIGatewayCreateResponse {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
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

  authentication?: boolean;

  dlp?: AIGatewayUpdateResponse.UnionMember0 | AIGatewayUpdateResponse.UnionMember1;

  is_default?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  logpush?: boolean;

  logpush_public_key?: string | null;

  otel?: Array<AIGatewayUpdateResponse.Otel> | null;

  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  store_id?: string | null;

  stripe?: AIGatewayUpdateResponse.Stripe | null;

  /**
   * Controls how Workers AI inference calls routed through this gateway are billed.
   * Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  zdr?: boolean;
}

export namespace AIGatewayUpdateResponse {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
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

  authentication?: boolean;

  dlp?: AIGatewayListResponse.UnionMember0 | AIGatewayListResponse.UnionMember1;

  is_default?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  logpush?: boolean;

  logpush_public_key?: string | null;

  otel?: Array<AIGatewayListResponse.Otel> | null;

  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  store_id?: string | null;

  stripe?: AIGatewayListResponse.Stripe | null;

  /**
   * Controls how Workers AI inference calls routed through this gateway are billed.
   * Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  zdr?: boolean;
}

export namespace AIGatewayListResponse {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
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

  authentication?: boolean;

  dlp?: AIGatewayDeleteResponse.UnionMember0 | AIGatewayDeleteResponse.UnionMember1;

  is_default?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  logpush?: boolean;

  logpush_public_key?: string | null;

  otel?: Array<AIGatewayDeleteResponse.Otel> | null;

  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  store_id?: string | null;

  stripe?: AIGatewayDeleteResponse.Stripe | null;

  /**
   * Controls how Workers AI inference calls routed through this gateway are billed.
   * Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  zdr?: boolean;
}

export namespace AIGatewayDeleteResponse {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
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

  authentication?: boolean;

  dlp?: AIGatewayGetResponse.UnionMember0 | AIGatewayGetResponse.UnionMember1;

  is_default?: boolean;

  log_management?: number | null;

  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  logpush?: boolean;

  logpush_public_key?: string | null;

  otel?: Array<AIGatewayGetResponse.Otel> | null;

  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  store_id?: string | null;

  stripe?: AIGatewayGetResponse.Stripe | null;

  /**
   * Controls how Workers AI inference calls routed through this gateway are billed.
   * Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  zdr?: boolean;
}

export namespace AIGatewayGetResponse {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
}

export interface AIGatewayCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: gateway id
   */
  id: string;

  /**
   * Body param
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param
   */
  cache_ttl: number | null;

  /**
   * Body param
   */
  collect_logs: boolean;

  /**
   * Body param
   */
  rate_limiting_interval: number | null;

  /**
   * Body param
   */
  rate_limiting_limit: number | null;

  /**
   * Body param
   */
  authentication?: boolean;

  /**
   * Body param
   */
  log_management?: number | null;

  /**
   * Body param
   */
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  /**
   * Body param
   */
  logpush?: boolean;

  /**
   * Body param
   */
  logpush_public_key?: string | null;

  /**
   * Body param
   */
  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Body param: Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Body param: Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Body param: Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  /**
   * Body param: Controls how Workers AI inference calls routed through this gateway
   * are billed. Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  /**
   * Body param
   */
  zdr?: boolean;
}

export interface AIGatewayUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param
   */
  cache_ttl: number | null;

  /**
   * Body param
   */
  collect_logs: boolean;

  /**
   * Body param
   */
  rate_limiting_interval: number | null;

  /**
   * Body param
   */
  rate_limiting_limit: number | null;

  /**
   * Body param
   */
  authentication?: boolean;

  /**
   * Body param
   */
  dlp?: AIGatewayUpdateParams.UnionMember0 | AIGatewayUpdateParams.UnionMember1;

  /**
   * Body param
   */
  log_management?: number | null;

  /**
   * Body param
   */
  log_management_strategy?: 'STOP_INSERTING' | 'DELETE_OLDEST' | null;

  /**
   * Body param
   */
  logpush?: boolean;

  /**
   * Body param
   */
  logpush_public_key?: string | null;

  /**
   * Body param
   */
  otel?: Array<AIGatewayUpdateParams.Otel> | null;

  /**
   * Body param
   */
  rate_limiting_technique?: 'fixed' | 'sliding' | null;

  /**
   * Body param: Backoff strategy for retry delays
   */
  retry_backoff?: 'constant' | 'linear' | 'exponential' | null;

  /**
   * Body param: Delay between retry attempts in milliseconds (0-5000)
   */
  retry_delay?: number | null;

  /**
   * Body param: Maximum number of retry attempts for failed requests (1-5)
   */
  retry_max_attempts?: number | null;

  /**
   * Body param
   */
  store_id?: string | null;

  /**
   * Body param
   */
  stripe?: AIGatewayUpdateParams.Stripe | null;

  /**
   * Body param: Controls how Workers AI inference calls routed through this gateway
   * are billed. Only 'postpaid' is currently supported.
   */
  workers_ai_billing_mode?: 'postpaid';

  /**
   * Body param
   */
  zdr?: boolean;
}

export namespace AIGatewayUpdateParams {
  export interface UnionMember0 {
    action: 'BLOCK' | 'FLAG';

    enabled: boolean;

    profiles: Array<string>;
  }

  export interface UnionMember1 {
    enabled: boolean;

    policies: Array<UnionMember1.Policy>;
  }

  export namespace UnionMember1 {
    export interface Policy {
      id: string;

      action: 'FLAG' | 'BLOCK';

      check: Array<'REQUEST' | 'RESPONSE'>;

      enabled: boolean;

      profiles: Array<string>;
    }
  }

  export interface Otel {
    authorization: string;

    headers: { [key: string]: string };

    url: string;

    content_type?: 'json' | 'protobuf';
  }

  export interface Stripe {
    authorization: string;

    usage_events: Array<Stripe.UsageEvent>;
  }

  export namespace Stripe {
    export interface UsageEvent {
      payload: string;
    }
  }
}

export interface AIGatewayListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
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
AIGateway.BaseEvaluationTypes = BaseEvaluationTypes;
AIGateway.Logs = Logs;
AIGateway.BaseLogs = BaseLogs;
AIGateway.Datasets = Datasets;
AIGateway.BaseDatasets = BaseDatasets;
AIGateway.Evaluations = Evaluations;
AIGateway.BaseEvaluations = BaseEvaluations;
AIGateway.DynamicRouting = DynamicRouting;
AIGateway.BaseDynamicRouting = BaseDynamicRouting;
AIGateway.ProviderConfigs = ProviderConfigs;
AIGateway.BaseProviderConfigs = BaseProviderConfigs;
AIGateway.URLs = URLs;
AIGateway.BaseURLs = BaseURLs;
AIGateway.Billing = Billing;
AIGateway.BaseBilling = BaseBilling;

export declare namespace AIGateway {
  export {
    type AIGatewayCreateResponse as AIGatewayCreateResponse,
    type AIGatewayUpdateResponse as AIGatewayUpdateResponse,
    type AIGatewayListResponse as AIGatewayListResponse,
    type AIGatewayDeleteResponse as AIGatewayDeleteResponse,
    type AIGatewayGetResponse as AIGatewayGetResponse,
    type AIGatewayListResponsesV4PagePaginationArray as AIGatewayListResponsesV4PagePaginationArray,
    type AIGatewayCreateParams as AIGatewayCreateParams,
    type AIGatewayUpdateParams as AIGatewayUpdateParams,
    type AIGatewayListParams as AIGatewayListParams,
    type AIGatewayDeleteParams as AIGatewayDeleteParams,
    type AIGatewayGetParams as AIGatewayGetParams,
  };

  export {
    EvaluationTypes as EvaluationTypes,
    BaseEvaluationTypes as BaseEvaluationTypes,
    type EvaluationTypeListResponse as EvaluationTypeListResponse,
    type EvaluationTypeListResponsesV4PagePaginationArray as EvaluationTypeListResponsesV4PagePaginationArray,
    type EvaluationTypeListParams as EvaluationTypeListParams,
  };

  export {
    Logs as Logs,
    BaseLogs as BaseLogs,
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
    BaseDatasets as BaseDatasets,
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
    BaseEvaluations as BaseEvaluations,
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

  export {
    DynamicRouting as DynamicRouting,
    BaseDynamicRouting as BaseDynamicRouting,
    type DynamicRoutingCreateResponse as DynamicRoutingCreateResponse,
    type DynamicRoutingUpdateResponse as DynamicRoutingUpdateResponse,
    type DynamicRoutingListResponse as DynamicRoutingListResponse,
    type DynamicRoutingDeleteResponse as DynamicRoutingDeleteResponse,
    type DynamicRoutingCreateDeploymentResponse as DynamicRoutingCreateDeploymentResponse,
    type DynamicRoutingCreateVersionResponse as DynamicRoutingCreateVersionResponse,
    type DynamicRoutingGetResponse as DynamicRoutingGetResponse,
    type DynamicRoutingGetVersionResponse as DynamicRoutingGetVersionResponse,
    type DynamicRoutingListDeploymentsResponse as DynamicRoutingListDeploymentsResponse,
    type DynamicRoutingListVersionsResponse as DynamicRoutingListVersionsResponse,
    type DynamicRoutingCreateParams as DynamicRoutingCreateParams,
    type DynamicRoutingUpdateParams as DynamicRoutingUpdateParams,
    type DynamicRoutingListParams as DynamicRoutingListParams,
    type DynamicRoutingDeleteParams as DynamicRoutingDeleteParams,
    type DynamicRoutingCreateDeploymentParams as DynamicRoutingCreateDeploymentParams,
    type DynamicRoutingCreateVersionParams as DynamicRoutingCreateVersionParams,
    type DynamicRoutingGetParams as DynamicRoutingGetParams,
    type DynamicRoutingGetVersionParams as DynamicRoutingGetVersionParams,
    type DynamicRoutingListDeploymentsParams as DynamicRoutingListDeploymentsParams,
    type DynamicRoutingListVersionsParams as DynamicRoutingListVersionsParams,
  };

  export {
    ProviderConfigs as ProviderConfigs,
    BaseProviderConfigs as BaseProviderConfigs,
    type ProviderConfigCreateResponse as ProviderConfigCreateResponse,
    type ProviderConfigListResponse as ProviderConfigListResponse,
    type ProviderConfigListResponsesV4PagePaginationArray as ProviderConfigListResponsesV4PagePaginationArray,
    type ProviderConfigCreateParams as ProviderConfigCreateParams,
    type ProviderConfigListParams as ProviderConfigListParams,
  };

  export {
    URLs as URLs,
    BaseURLs as BaseURLs,
    type URLGetResponse as URLGetResponse,
    type URLGetParams as URLGetParams,
  };

  export {
    Billing as Billing,
    BaseBilling as BaseBilling,
    type BillingCreditBalanceResponse as BillingCreditBalanceResponse,
    type BillingInvoiceHistoryResponse as BillingInvoiceHistoryResponse,
    type BillingInvoicePreviewResponse as BillingInvoicePreviewResponse,
    type BillingUsageHistoryResponse as BillingUsageHistoryResponse,
    type BillingCreditBalanceParams as BillingCreditBalanceParams,
    type BillingInvoiceHistoryParams as BillingInvoiceHistoryParams,
    type BillingInvoicePreviewParams as BillingInvoicePreviewParams,
    type BillingUsageHistoryParams as BillingUsageHistoryParams,
  };
}
