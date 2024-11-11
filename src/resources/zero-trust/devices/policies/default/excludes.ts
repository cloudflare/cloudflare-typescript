// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';

export class Excludes extends APIResource {
  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   */
  update(
    params: ExcludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/policy/exclude`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ExcludeUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   */
  get(params: ExcludeGetParams, options?: Core.RequestOptions): Core.APIPromise<ExcludeGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy/exclude`, options) as Core.APIPromise<{
        result: ExcludeGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ExcludeUpdateResponse = Array<PoliciesAPI.SplitTunnelExclude>;

export type ExcludeGetResponse = Array<PoliciesAPI.SplitTunnelExclude>;

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
  export {
    type ExcludeUpdateResponse as ExcludeUpdateResponse,
    type ExcludeGetResponse as ExcludeGetResponse,
    type ExcludeUpdateParams as ExcludeUpdateParams,
    type ExcludeGetParams as ExcludeGetParams,
  };
}
