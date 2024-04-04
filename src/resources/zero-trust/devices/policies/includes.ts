// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncludesAPI from 'cloudflare/resources/zero-trust/devices/policies/includes';
import { SinglePage } from 'cloudflare/pagination';

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
  list(
    params: IncludeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DevicesSplitTunnelIncludesSinglePage, DevicesSplitTunnelInclude> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policy/include`,
      DevicesSplitTunnelIncludesSinglePage,
      options,
    );
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   */
  get(
    policyId: string,
    params: IncludeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/policy/${policyId}/include`,
        options,
      ) as Core.APIPromise<{ result: IncludeGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DevicesSplitTunnelIncludesSinglePage extends SinglePage<DevicesSplitTunnelInclude> {}

export interface DevicesSplitTunnelInclude {
  /**
   * The address in CIDR format to include in the tunnel. If address is present, host
   * must not be present.
   */
  address: string;

  /**
   * A description of the split tunnel item, displayed in the client UI.
   */
  description: string;

  /**
   * The domain name to include in the tunnel. If host is present, address must not
   * be present.
   */
  host?: string;
}

export type UnnamedSchemaRef5e0c6134a624678286f4a424b001870a = Array<DevicesSplitTunnelInclude>;

export type IncludeUpdateResponse = Array<DevicesSplitTunnelInclude>;

export type IncludeGetResponse = Array<DevicesSplitTunnelInclude>;

export interface IncludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<DevicesSplitTunnelInclude>;
}

export interface IncludeListParams {
  account_id: string;
}

export interface IncludeGetParams {
  account_id: string;
}

export namespace Includes {
  export import DevicesSplitTunnelInclude = IncludesAPI.DevicesSplitTunnelInclude;
  export import UnnamedSchemaRef5e0c6134a624678286f4a424b001870a = IncludesAPI.UnnamedSchemaRef5e0c6134a624678286f4a424b001870a;
  export import IncludeUpdateResponse = IncludesAPI.IncludeUpdateResponse;
  export import IncludeGetResponse = IncludesAPI.IncludeGetResponse;
  export import DevicesSplitTunnelIncludesSinglePage = IncludesAPI.DevicesSplitTunnelIncludesSinglePage;
  export import IncludeUpdateParams = IncludesAPI.IncludeUpdateParams;
  export import IncludeListParams = IncludesAPI.IncludeListParams;
  export import IncludeGetParams = IncludesAPI.IncludeGetParams;
}
