// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExcludesAPI from 'cloudflare/resources/zero-trust/devices/policies/excludes';
import { SinglePage } from 'cloudflare/pagination';

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
  ): Core.PagePromise<DevicesSplitTunnelsSinglePage, DevicesSplitTunnel> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/exclude`,
      DevicesSplitTunnelsSinglePage,
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

export class DevicesSplitTunnelsSinglePage extends SinglePage<DevicesSplitTunnel> {}

export interface DevicesSplitTunnel {
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

export type UnnamedSchemaRef0462afe1a32ee90b1999d4277af59fa8 = Array<DevicesSplitTunnel>;

export type ExcludeUpdateResponse = Array<DevicesSplitTunnel>;

export type ExcludeGetResponse = Array<DevicesSplitTunnel>;

export interface ExcludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<DevicesSplitTunnel>;
}

export interface ExcludeListParams {
  account_id: string;
}

export interface ExcludeGetParams {
  account_id: string;
}

export namespace Excludes {
  export import DevicesSplitTunnel = ExcludesAPI.DevicesSplitTunnel;
  export import UnnamedSchemaRef0462afe1a32ee90b1999d4277af59fa8 = ExcludesAPI.UnnamedSchemaRef0462afe1a32ee90b1999d4277af59fa8;
  export import ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export import ExcludeGetResponse = ExcludesAPI.ExcludeGetResponse;
  export import DevicesSplitTunnelsSinglePage = ExcludesAPI.DevicesSplitTunnelsSinglePage;
  export import ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
  export import ExcludeListParams = ExcludesAPI.ExcludeListParams;
  export import ExcludeGetParams = ExcludesAPI.ExcludeGetParams;
}
