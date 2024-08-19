// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BehavioursAPI from './behaviours';

export class Behaviours extends APIResource {
  /**
   * Update configuration for risk behaviors
   */
  update(
    params: BehaviourUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BehaviourUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/zt_risk_scoring/behaviors`, { body, ...options });
  }

  /**
   * Get all behaviors and associated configuration
   */
  get(params: BehaviourGetParams, options?: Core.RequestOptions): Core.APIPromise<BehaviourGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/zt_risk_scoring/behaviors`, options);
  }
}

export interface BehaviourUpdateResponse {
  behaviors: Record<string, BehaviourUpdateResponse.Behaviors>;
}

export namespace BehaviourUpdateResponse {
  export interface Behaviors {
    enabled: boolean;

    risk_level: 'low' | 'medium' | 'high';
  }
}

export interface BehaviourGetResponse {
  behaviors: Record<string, BehaviourGetResponse.Behaviors>;
}

export namespace BehaviourGetResponse {
  export interface Behaviors {
    description: string;

    enabled: boolean;

    name: string;

    risk_level: 'low' | 'medium' | 'high';
  }
}

export interface BehaviourUpdateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  behaviors: Record<string, BehaviourUpdateParams.Behaviors>;
}

export namespace BehaviourUpdateParams {
  export interface Behaviors {
    enabled: boolean;

    risk_level: 'low' | 'medium' | 'high';
  }
}

export interface BehaviourGetParams {
  account_id: string;
}

export namespace Behaviours {
  export import BehaviourUpdateResponse = BehavioursAPI.BehaviourUpdateResponse;
  export import BehaviourGetResponse = BehavioursAPI.BehaviourGetResponse;
  export import BehaviourUpdateParams = BehavioursAPI.BehaviourUpdateParams;
  export import BehaviourGetParams = BehavioursAPI.BehaviourGetParams;
}
