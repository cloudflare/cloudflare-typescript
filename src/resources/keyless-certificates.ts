// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomHostnamesAPI from 'cloudflare/resources/custom-hostnames/custom-hostnames';
import { SinglePage } from 'cloudflare/pagination';

export class KeylessCertificates extends APIResource {
  /**
   * Create Keyless SSL Configuration
   */
  create(
    params: KeylessCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificate> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/keyless_certificates`, { body, ...options }) as Core.APIPromise<{
        result: KeylessCertificate;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Keyless SSL configurations for a given zone.
   */
  list(
    params: KeylessCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<KeylessCertificatesSinglePage, KeylessCertificate> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/keyless_certificates`,
      KeylessCertificatesSinglePage,
      options,
    );
  }

  /**
   * Delete Keyless SSL Configuration
   */
  delete(
    keylessCertificateId: string,
    params: KeylessCertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateDeleteResponse> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: KeylessCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This will update attributes of a Keyless SSL. Consists of one or more of the
   * following: host,name,port.
   */
  edit(
    keylessCertificateId: string,
    params: KeylessCertificateEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificate> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: KeylessCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for one Keyless SSL configuration.
   */
  get(
    keylessCertificateId: string,
    params: KeylessCertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificate> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: KeylessCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class KeylessCertificatesSinglePage extends SinglePage<KeylessCertificate> {}

export interface Hostname {
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
  tunnel?: Tunnel;
}

export interface KeylessCertificate {
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
  tunnel?: Tunnel;
}

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

export interface KeylessCertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface KeylessCertificateCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The zone's SSL certificate or SSL certificate and intermediate(s).
   */
  certificate: string;

  /**
   * Body param: The keyless SSL name.
   */
  host: string;

  /**
   * Body param: The keyless SSL port used to communicate between Cloudflare and the
   * client's Keyless SSL server.
   */
  port: number;

  /**
   * Body param: A ubiquitous bundle has the highest probability of being verified
   * everywhere, even by clients using outdated or unusual trust stores. An optimal
   * bundle uses the shortest chain and newest intermediates. And the force bundle
   * verifies the chain, but does not otherwise modify it.
   */
  bundle_method?: CustomHostnamesAPI.BundleMethod;

  /**
   * Body param: The keyless SSL name.
   */
  name?: string;

  /**
   * Body param: Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: Tunnel;
}

export interface KeylessCertificateListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface KeylessCertificateDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface KeylessCertificateEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether or not the Keyless SSL is on or off.
   */
  enabled?: boolean;

  /**
   * Body param: The keyless SSL name.
   */
  host?: string;

  /**
   * Body param: The keyless SSL name.
   */
  name?: string;

  /**
   * Body param: The keyless SSL port used to communicate between Cloudflare and the
   * client's Keyless SSL server.
   */
  port?: number;

  /**
   * Body param: Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: Tunnel;
}

export interface KeylessCertificateGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
