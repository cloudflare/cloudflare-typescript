// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';
import { SplitTunnelExcludesSinglePage } from '../policies';

export class Excludes extends APIResource {
  /**
   * Sets the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  update(
    policyId: string,
    params: ExcludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/${policyId}/exclude`,
      SplitTunnelExcludesSinglePage,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  get(
    policyId: string,
    params: ExcludeGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/${policyId}/exclude`,
      SplitTunnelExcludesSinglePage,
      options,
    );
  }
}

export interface ExcludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<PoliciesAPI.SplitTunnelExcludeParam>;
}

export interface ExcludeGetParams {
  account_id: string;
}

export declare namespace Excludes {
  export { type ExcludeUpdateParams as ExcludeUpdateParams, type ExcludeGetParams as ExcludeGetParams };
}

export { SplitTunnelExcludesSinglePage };
