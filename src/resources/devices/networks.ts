// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworksAPI from 'cloudflare/resources/devices/networks';

export class Networks extends APIResource {
  /**
   * Updates a configured device managed network.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: NetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/networks/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NetworkUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a device managed network and fetches a list of the remaining device
   * managed networks for an account.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${identifier}/devices/networks/${uuid}`, options) as Core.APIPromise<{
        result: NetworkDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new device managed network.
   */
  deviceManagedNetworksCreateDeviceManagedNetwork(
    identifier: unknown,
    body: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/networks`, { body, ...options }) as Core.APIPromise<{
        result: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of managed networks for an account.
   */
  deviceManagedNetworksListDeviceManagedNetworks(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/networks`, options) as Core.APIPromise<{
        result: NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single managed network.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkGetResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/networks/${uuid}`, options) as Core.APIPromise<{
        result: NetworkGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetworkUpdateResponse {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkUpdateResponse.Config;

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

export namespace NetworkUpdateResponse {
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

export type NetworkDeleteResponse = Array<NetworkDeleteResponse.NetworkDeleteResponseItem>;

export namespace NetworkDeleteResponse {
  export interface NetworkDeleteResponseItem {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: NetworkDeleteResponseItem.Config;

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

  export namespace NetworkDeleteResponseItem {
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
}

export interface NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse.Config;

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

export namespace NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse {
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

export type NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse =
  Array<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse.NetworkDeviceManagedNetworksListDeviceManagedNetworksResponseItem>;

export namespace NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse {
  export interface NetworkDeviceManagedNetworksListDeviceManagedNetworksResponseItem {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: NetworkDeviceManagedNetworksListDeviceManagedNetworksResponseItem.Config;

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

  export namespace NetworkDeviceManagedNetworksListDeviceManagedNetworksResponseItem {
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
}

export interface NetworkGetResponse {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkGetResponse.Config;

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

export namespace NetworkGetResponse {
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
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkUpdateParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name?: string;

  /**
   * The type of device managed network.
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

export interface NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name: string;

  /**
   * The type of device managed network.
   */
  type: 'tls';
}

export namespace NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams {
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

export namespace Networks {
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse;
  export import NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse = NetworksAPI.NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse;
  export import NetworkGetResponse = NetworksAPI.NetworkGetResponse;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams;
}
