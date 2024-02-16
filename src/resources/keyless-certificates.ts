// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeylessCertificatesAPI from 'cloudflare/resources/keyless-certificates';

export class KeylessCertificates extends APIResource {
  /**
   * Create Keyless SSL Configuration
   */
  create(
    zoneId: string,
    body: KeylessCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/keyless_certificates`, { body, ...options }) as Core.APIPromise<{
        result: KeylessCertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This will update attributes of a Keyless SSL. Consists of one or more of the
   * following: host,name,port.
   */
  update(
    zoneId: string,
    keylessCertificateId: string,
    body: KeylessCertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: KeylessCertificateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Keyless SSL configurations for a given zone.
   */
  list(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateListResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/keyless_certificates`, options) as Core.APIPromise<{
        result: KeylessCertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Keyless SSL Configuration
   */
  delete(
    zoneId: string,
    keylessCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: KeylessCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for one Keyless SSL configuration.
   */
  get(
    zoneId: string,
    keylessCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/keyless_certificates/${keylessCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: KeylessCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface KeylessCertificateCreateResponse {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateCreateResponse.Tunnel;
}

export namespace KeylessCertificateCreateResponse {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateUpdateResponse {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateUpdateResponse.Tunnel;
}

export namespace KeylessCertificateUpdateResponse {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export type KeylessCertificateListResponse =
  Array<KeylessCertificateListResponse.KeylessCertificateListResponseItem>;

export namespace KeylessCertificateListResponse {
  export interface KeylessCertificateListResponseItem {
    /**
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: KeylessCertificateListResponseItem.Tunnel;
  }

  export namespace KeylessCertificateListResponseItem {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
    }
  }
}

export interface KeylessCertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface KeylessCertificateGetResponse {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateGetResponse.Tunnel;
}

export namespace KeylessCertificateGetResponse {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateCreateParams {
  /**
   * The zone's SSL certificate or SSL certificate and intermediate(s).
   */
  certificate: string;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * The keyless SSL name.
   */
  name?: string;

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateCreateParams.Tunnel;
}

export namespace KeylessCertificateCreateParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateUpdateParams {
  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled?: boolean;

  /**
   * The keyless SSL name.
   */
  host?: string;

  /**
   * The keyless SSL name.
   */
  name?: string;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port?: number;

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateUpdateParams.Tunnel;
}

export namespace KeylessCertificateUpdateParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export namespace KeylessCertificates {
  export import KeylessCertificateCreateResponse = KeylessCertificatesAPI.KeylessCertificateCreateResponse;
  export import KeylessCertificateUpdateResponse = KeylessCertificatesAPI.KeylessCertificateUpdateResponse;
  export import KeylessCertificateListResponse = KeylessCertificatesAPI.KeylessCertificateListResponse;
  export import KeylessCertificateDeleteResponse = KeylessCertificatesAPI.KeylessCertificateDeleteResponse;
  export import KeylessCertificateGetResponse = KeylessCertificatesAPI.KeylessCertificateGetResponse;
  export import KeylessCertificateCreateParams = KeylessCertificatesAPI.KeylessCertificateCreateParams;
  export import KeylessCertificateUpdateParams = KeylessCertificatesAPI.KeylessCertificateUpdateParams;
}
