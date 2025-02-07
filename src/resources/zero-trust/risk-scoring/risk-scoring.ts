// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BehavioursAPI from './behaviours';
import {
  BehaviourGetParams,
  BehaviourGetResponse,
  BehaviourUpdateParams,
  BehaviourUpdateResponse,
  Behaviours,
} from './behaviours';
import * as SummaryAPI from './summary';
import { Summary, SummaryGetParams, SummaryGetResponse } from './summary';
import * as IntegrationsAPI from './integrations/integrations';
import {
  IntegrationCreateParams,
  IntegrationCreateResponse,
  IntegrationDeleteParams,
  IntegrationDeleteResponse,
  IntegrationGetParams,
  IntegrationGetResponse,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationListResponsesSinglePage,
  IntegrationUpdateParams,
  IntegrationUpdateResponse,
  Integrations,
} from './integrations/integrations';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RiskScoring extends APIResource {
  behaviours: BehavioursAPI.Behaviours = new BehavioursAPI.Behaviours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Get risk event/score information for a specific user
   */
  get(
    userID: string,
    params: RiskScoringGetParams,
    options?: RequestOptions,
  ): APIPromise<RiskScoringGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/zt_risk_scoring/${userID}`, options) as APIPromise<{
        result: RiskScoringGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Clear the risk score for a particular user
   */
  reset(
    userID: string,
    params: RiskScoringResetParams,
    options?: RequestOptions,
  ): APIPromise<RiskScoringResetResponse | null> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/zt_risk_scoring/${userID}/reset`,
        options,
      ) as APIPromise<{ result: RiskScoringResetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RiskScoringGetResponse {
  email: string;

  events: Array<RiskScoringGetResponse.Event>;

  name: string;

  last_reset_time?: string | null;

  risk_level?: 'low' | 'medium' | 'high';
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

export type RiskScoringResetResponse = unknown;

export interface RiskScoringGetParams {
  account_id: string;
}

export interface RiskScoringResetParams {
  account_id: string;
}

RiskScoring.Behaviours = Behaviours;
RiskScoring.Summary = Summary;
RiskScoring.Integrations = Integrations;

export declare namespace RiskScoring {
  export {
    type RiskScoringGetResponse as RiskScoringGetResponse,
    type RiskScoringResetResponse as RiskScoringResetResponse,
    type RiskScoringGetParams as RiskScoringGetParams,
    type RiskScoringResetParams as RiskScoringResetParams,
  };

  export {
    Behaviours as Behaviours,
    type BehaviourUpdateResponse as BehaviourUpdateResponse,
    type BehaviourGetResponse as BehaviourGetResponse,
    type BehaviourUpdateParams as BehaviourUpdateParams,
    type BehaviourGetParams as BehaviourGetParams,
  };

  export {
    Summary as Summary,
    type SummaryGetResponse as SummaryGetResponse,
    type SummaryGetParams as SummaryGetParams,
  };

  export {
    Integrations as Integrations,
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationGetResponse as IntegrationGetResponse,
    type IntegrationListResponsesSinglePage as IntegrationListResponsesSinglePage,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
  };
}
