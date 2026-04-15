// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BehavioursAPI from './behaviours';
import {
  BaseBehaviours,
  BehaviourGetParams,
  BehaviourGetResponse,
  BehaviourUpdateParams,
  BehaviourUpdateResponse,
  Behaviours,
} from './behaviours';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary, SummaryGetParams, SummaryGetResponse } from './summary';
import * as IntegrationsAPI from './integrations/integrations';
import {
  BaseIntegrations,
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
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRiskScoring extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
  ] as const);

  /**
   * Retrieves the detailed risk score breakdown for a specific user, including
   * contributing factors.
   *
   * @example
   * ```ts
   * const riskScoring = await client.zeroTrust.riskScoring.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    userID: string,
    params: RiskScoringGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RiskScoringGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/zt_risk_scoring/${userID}`, options) as APIPromise<{
        result: RiskScoringGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Resets risk scores for specified users, clearing their accumulated risk history.
   *
   * @example
   * ```ts
   * const response = await client.zeroTrust.riskScoring.reset(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  reset(
    userID: string,
    params: RiskScoringResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RiskScoringResetResponse | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.post(
        path`/accounts/${account_id}/zt_risk_scoring/${userID}/reset`,
        options,
      ) as APIPromise<{ result: RiskScoringResetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class RiskScoring extends BaseRiskScoring {
  behaviours: BehavioursAPI.Behaviours = new BehavioursAPI.Behaviours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
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
  account_id?: string;
}

export interface RiskScoringResetParams {
  account_id?: string;
}

RiskScoring.Behaviours = Behaviours;
RiskScoring.BaseBehaviours = BaseBehaviours;
RiskScoring.Summary = Summary;
RiskScoring.BaseSummary = BaseSummary;
RiskScoring.Integrations = Integrations;
RiskScoring.BaseIntegrations = BaseIntegrations;

export declare namespace RiskScoring {
  export {
    type RiskScoringGetResponse as RiskScoringGetResponse,
    type RiskScoringResetResponse as RiskScoringResetResponse,
    type RiskScoringGetParams as RiskScoringGetParams,
    type RiskScoringResetParams as RiskScoringResetParams,
  };

  export {
    Behaviours as Behaviours,
    BaseBehaviours as BaseBehaviours,
    type BehaviourUpdateResponse as BehaviourUpdateResponse,
    type BehaviourGetResponse as BehaviourGetResponse,
    type BehaviourUpdateParams as BehaviourUpdateParams,
    type BehaviourGetParams as BehaviourGetParams,
  };

  export {
    Summary as Summary,
    BaseSummary as BaseSummary,
    type SummaryGetResponse as SummaryGetResponse,
    type SummaryGetParams as SummaryGetParams,
  };

  export {
    Integrations as Integrations,
    BaseIntegrations as BaseIntegrations,
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
