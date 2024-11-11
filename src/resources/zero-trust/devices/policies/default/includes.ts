// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';

export class Includes extends APIResource {
  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  update(
    params: IncludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/policy/include`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: IncludeUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  get(params: IncludeGetParams, options?: Core.RequestOptions): Core.APIPromise<IncludeGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy/include`, options) as Core.APIPromise<{
        result: IncludeGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IncludeUpdateResponse = Array<PoliciesAPI.SplitTunnelInclude>;

export type IncludeGetResponse = Array<PoliciesAPI.SplitTunnelInclude>;

export interface IncludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<PoliciesAPI.SplitTunnelIncludeParam>;
}

export interface IncludeGetParams {
  account_id: string;
}

export declare namespace Includes {
  export {
    type IncludeUpdateResponse as IncludeUpdateResponse,
    type IncludeGetResponse as IncludeGetResponse,
    type IncludeUpdateParams as IncludeUpdateParams,
    type IncludeGetParams as IncludeGetParams,
  };
}
