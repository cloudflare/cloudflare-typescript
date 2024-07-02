// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ExcludesAPI from './excludes';
import { SinglePage } from '../../../../pagination';

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
  list(
    params: ExcludeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SplitTunnelExcludesSinglePage, SplitTunnelExclude> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/exclude`,
      SplitTunnelExcludesSinglePage,
      options,
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
  ): Core.APIPromise<ExcludeGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/policy/${policyId}/exclude`,
        options,
      ) as Core.APIPromise<{ result: ExcludeGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SplitTunnelExcludesSinglePage extends SinglePage<SplitTunnelExclude> {}

export interface SplitTunnelExclude {
  /**
   * The address in CIDR format to exclude from the tunnel. If `address` is present,
   * `host` must not be present.
   */
  address: string;

  /**
   * A description of the Split Tunnel item, displayed in the client UI.
   */
  description: string;

  /**
   * The domain name to exclude from the tunnel. If `host` is present, `address` must
   * not be present.
   */
  host?: string;
}

export interface SplitTunnelExcludeParam {
  /**
   * The address in CIDR format to exclude from the tunnel. If `address` is present,
   * `host` must not be present.
   */
  address: string;

  /**
   * A description of the Split Tunnel item, displayed in the client UI.
   */
  description: string;

  /**
   * The domain name to exclude from the tunnel. If `host` is present, `address` must
   * not be present.
   */
  host?: string;
}

export type ExcludeUpdateResponse = Array<SplitTunnelExclude>;

export type ExcludeGetResponse = Array<SplitTunnelExclude>;

export interface ExcludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<SplitTunnelExcludeParam>;
}

export interface ExcludeListParams {
  account_id: string;
}

export interface ExcludeGetParams {
  account_id: string;
}

export namespace Excludes {
  export import SplitTunnelExclude = ExcludesAPI.SplitTunnelExclude;
  export import ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export import ExcludeGetResponse = ExcludesAPI.ExcludeGetResponse;
  export import SplitTunnelExcludesSinglePage = ExcludesAPI.SplitTunnelExcludesSinglePage;
  export import ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
  export import ExcludeListParams = ExcludesAPI.ExcludeListParams;
  export import ExcludeGetParams = ExcludesAPI.ExcludeGetParams;
}
