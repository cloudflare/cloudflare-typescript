// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworksAPI from 'cloudflare/resources/devices/networks';

export class Networks extends APIResource {
  /**
   * Creates a new device managed network.
   */
  create(
    identifier: unknown,
    body: NetworkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkCreateResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/networks`, { body, ...options }) as Core.APIPromise<{
        result: NetworkCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of managed networks for an account.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<NetworkListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/networks`, options) as Core.APIPromise<{
        result: NetworkListResponse | null;
      }>
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

  /**
   * Updates a configured device managed network.
   */
  replace(
    identifier: unknown,
    uuid: string,
    body: NetworkReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/networks/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NetworkReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetworkCreateResponse {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkCreateResponse.Config;

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

export namespace NetworkCreateResponse {
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

export type NetworkListResponse = Array<NetworkListResponse.NetworkListResponseItem>;

export namespace NetworkListResponse {
  export interface NetworkListResponseItem {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: NetworkListResponseItem.Config;

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

  export namespace NetworkListResponseItem {
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

export interface NetworkReplaceResponse {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkReplaceResponse.Config;

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

export namespace NetworkReplaceResponse {
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

export interface NetworkCreateParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config: NetworkCreateParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name: string;

  /**
   * The type of device managed network.
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

export interface NetworkReplaceParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkReplaceParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name?: string;

  /**
   * The type of device managed network.
   */
  type?: 'tls';
}

export namespace NetworkReplaceParams {
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
  export import NetworkCreateResponse = NetworksAPI.NetworkCreateResponse;
  export import NetworkListResponse = NetworksAPI.NetworkListResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkGetResponse = NetworksAPI.NetworkGetResponse;
  export import NetworkReplaceResponse = NetworksAPI.NetworkReplaceResponse;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkReplaceParams = NetworksAPI.NetworkReplaceParams;
}
