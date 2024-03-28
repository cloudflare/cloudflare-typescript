// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworksAPI from 'cloudflare/resources/zero-trust/devices/networks';
import { SinglePage } from 'cloudflare/pagination';

export class Networks extends APIResource {
  /**
   * Creates a new device managed network.
   */
  create(
    params: NetworkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceManagedNetworks | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/networks`, { body, ...options }) as Core.APIPromise<{
        result: DeviceManagedNetworks | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device managed network.
   */
  update(
    networkId: string,
    params: NetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceManagedNetworks | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/networks/${networkId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DeviceManagedNetworks | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of managed networks for an account.
   */
  list(
    params: NetworkListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeviceManagedNetworksSinglePage, DeviceManagedNetworks> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/networks`,
      DeviceManagedNetworksSinglePage,
      options,
    );
  }

  /**
   * Deletes a device managed network and fetches a list of the remaining device
   * managed networks for an account.
   */
  delete(
    networkId: string,
    params: NetworkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/devices/networks/${networkId}`,
        options,
      ) as Core.APIPromise<{ result: NetworkDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single managed network.
   */
  get(
    networkId: string,
    params: NetworkGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceManagedNetworks | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/networks/${networkId}`, options) as Core.APIPromise<{
        result: DeviceManagedNetworks | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DeviceManagedNetworksSinglePage extends SinglePage<DeviceManagedNetworks> {}

export interface DeviceManagedNetworks {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: DeviceManagedNetworks.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name?: string;

  /**
   * API UUID.
   */
  network_id?: string;

  /**
   * The type of device managed network.
   */
  type?: 'tls';
}

export namespace DeviceManagedNetworks {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  export interface Config {
    /**
     * A network address of the form "host:port" that the WARP client will use to
     * detect the presence of a TLS host.
     */
    tls_sockaddr: string;

    /**
     * The SHA-256 hash of the TLS certificate presented by the host found at
     * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
     * timestamp, etc) will be used to validate the certificate.
     */
    sha256?: string;
  }
}

export type NetworkDeleteResponse = Array<DeviceManagedNetworks>;

export interface NetworkCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object containing information for the WARP client
   * to detect the managed network.
   */
  config: NetworkCreateParams.Config;

  /**
   * Body param: The name of the device managed network. This name must be unique.
   */
  name: string;

  /**
   * Body param: The type of device managed network.
   */
  type: 'tls';
}

export namespace NetworkCreateParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  export interface Config {
    /**
     * A network address of the form "host:port" that the WARP client will use to
     * detect the presence of a TLS host.
     */
    tls_sockaddr: string;

    /**
     * The SHA-256 hash of the TLS certificate presented by the host found at
     * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
     * timestamp, etc) will be used to validate the certificate.
     */
    sha256?: string;
  }
}

export interface NetworkUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object containing information for the WARP client
   * to detect the managed network.
   */
  config?: NetworkUpdateParams.Config;

  /**
   * Body param: The name of the device managed network. This name must be unique.
   */
  name?: string;

  /**
   * Body param: The type of device managed network.
   */
  type?: 'tls';
}

export namespace NetworkUpdateParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  export interface Config {
    /**
     * A network address of the form "host:port" that the WARP client will use to
     * detect the presence of a TLS host.
     */
    tls_sockaddr: string;

    /**
     * The SHA-256 hash of the TLS certificate presented by the host found at
     * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
     * timestamp, etc) will be used to validate the certificate.
     */
    sha256?: string;
  }
}

export interface NetworkListParams {
  account_id: string;
}

export interface NetworkDeleteParams {
  account_id: string;
}

export interface NetworkGetParams {
  account_id: string;
}

export namespace Networks {
  export import DeviceManagedNetworks = NetworksAPI.DeviceManagedNetworks;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import DeviceManagedNetworksSinglePage = NetworksAPI.DeviceManagedNetworksSinglePage;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkListParams = NetworksAPI.NetworkListParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkGetParams = NetworksAPI.NetworkGetParams;
}
