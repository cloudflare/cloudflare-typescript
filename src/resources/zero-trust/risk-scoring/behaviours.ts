// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BehavioursAPI from './behaviours';

export class Behaviours extends APIResource {
  /**
   * Update configuration for risk behaviors
   */
  update(
    accountIdentifier: string,
    body: BehaviourUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BehaviourUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/zt_risk_scoring/behaviors`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BehaviourUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get all behaviors and associated configuration
   */
  get(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<BehaviourGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/zt_risk_scoring/behaviors`,
        options,
      ) as Core.APIPromise<{ result: BehaviourGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BehaviourUpdateResponse {
  behaviors?: Record<string, BehaviourUpdateResponse.Behaviors>;
}

export namespace BehaviourUpdateResponse {
  export interface Behaviors {
    description?: string;

    enabled?: boolean;

    name?: string;

    risk_level?: 'low' | 'medium' | 'high';
  }
}

export interface BehaviourGetResponse {
  behaviors?: Record<string, BehaviourGetResponse.Behaviors>;
}

export namespace BehaviourGetResponse {
  export interface Behaviors {
    description?: string;

    enabled?: boolean;

    name?: string;

    risk_level?: 'low' | 'medium' | 'high';
  }
}

export interface BehaviourUpdateParams {
  behaviors?: Record<string, BehaviourUpdateParams.Behaviors>;
}

export namespace BehaviourUpdateParams {
  export interface Behaviors {
    enabled: boolean;

    risk_level: 'low' | 'medium' | 'high';
  }
}

export namespace Behaviours {
  export import BehaviourUpdateResponse = BehavioursAPI.BehaviourUpdateResponse;
  export import BehaviourGetResponse = BehavioursAPI.BehaviourGetResponse;
  export import BehaviourUpdateParams = BehavioursAPI.BehaviourUpdateParams;
}
