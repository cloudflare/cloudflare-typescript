// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RiskScoringAPI from './risk-scoring';
import * as BehavioursAPI from './behaviours';
import * as SummaryAPI from './summary';
import * as IntegrationsAPI from './integrations/integrations';

export class RiskScoring extends APIResource {
  behaviours: BehavioursAPI.Behaviours = new BehavioursAPI.Behaviours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Get risk event/score information for a specific user
   */
  get(
    accountIdentifier: string,
    userId: string,
    query?: RiskScoringGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskScoringGetResponse>;
  get(
    accountIdentifier: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskScoringGetResponse>;
  get(
    accountIdentifier: string,
    userId: string,
    query: RiskScoringGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskScoringGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountIdentifier, userId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/zt_risk_scoring/${userId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RiskScoringGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Clear the risk score for a particular user
   */
  reset(
    accountIdentifier: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskScoringResetResponse> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/zt_risk_scoring/${userId}/reset`,
        options,
      ) as Core.APIPromise<{ result: RiskScoringResetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RiskScoringGetResponse {
  email?: string;

  events?: Array<RiskScoringGetResponse.Event>;

  last_reset_time?: string | null;

  name?: string;

  risk_level?: 'low' | 'medium' | 'high' | null;
}

export namespace RiskScoringGetResponse {
  export interface Event {
    id: string;

    name: string;

    risk_level: 'low' | 'medium' | 'high';

    timestamp: string;

    event_details?: unknown;
  }
}

export type RiskScoringResetResponse = unknown | string | null;

export interface RiskScoringGetParams {
  direction?: 'desc' | 'asc';

  order_by?: 'timestamp' | 'risk_level';

  page?: number;

  per_page?: number;
}

export namespace RiskScoring {
  export import RiskScoringGetResponse = RiskScoringAPI.RiskScoringGetResponse;
  export import RiskScoringResetResponse = RiskScoringAPI.RiskScoringResetResponse;
  export import RiskScoringGetParams = RiskScoringAPI.RiskScoringGetParams;
  export import Behaviours = BehavioursAPI.Behaviours;
  export import BehaviourUpdateResponse = BehavioursAPI.BehaviourUpdateResponse;
  export import BehaviourGetResponse = BehavioursAPI.BehaviourGetResponse;
  export import BehaviourUpdateParams = BehavioursAPI.BehaviourUpdateParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryGetResponse = SummaryAPI.SummaryGetResponse;
  export import SummaryGetParams = SummaryAPI.SummaryGetParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationListResponse = IntegrationsAPI.IntegrationListResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationGetResponse = IntegrationsAPI.IntegrationGetResponse;
  export import IntegrationListResponsesSinglePage = IntegrationsAPI.IntegrationListResponsesSinglePage;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
}
