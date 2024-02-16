// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CustomCertificatesAPI from 'cloudflare/resources/custom-certificates/custom-certificates';
import * as PrioritizesAPI from 'cloudflare/resources/custom-certificates/prioritizes';

export class CustomCertificates extends APIResource {
  prioritizes: PrioritizesAPI.Prioritizes = new PrioritizesAPI.Prioritizes(this._client);

  /**
   * Upload a new SSL certificate for a zone.
   */
  create(
    zoneId: string,
    body: CustomCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/custom_certificates`, { body, ...options }) as Core.APIPromise<{
        result: CustomCertificateCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing
   * a configuration for sni_custom certificates will result in a new resource id
   * being returned, and the previous one being deleted.
   */
  update(
    zoneId: string,
    customCertificateId: string,
    body: CustomCertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/custom_certificates/${customCertificateId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCertificateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, and filter all of your custom SSL certificates. The higher
   * priority will break ties across overlapping 'legacy_custom' certificates, but
   * 'legacy_custom' certificates will always supercede 'sni_custom' certificates.
   */
  list(
    zoneId: string,
    query?: CustomCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateListResponse | null>;
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CustomCertificateListResponse | null>;
  list(
    zoneId: string,
    query: CustomCertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/custom_certificates`, { query, ...options }) as Core.APIPromise<{
        result: CustomCertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a SSL certificate from a zone.
   */
  delete(
    zoneId: string,
    customCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/custom_certificates/${customCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: CustomCertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * SSL Configuration Details
   */
  get(
    zoneId: string,
    customCertificateId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/custom_certificates/${customCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: CustomCertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomCertificateCreateResponse = unknown | string;

export type CustomCertificateUpdateResponse = unknown | string;

export type CustomCertificateListResponse =
  Array<CustomCertificateListResponse.CustomCertificateListResponseItem>;

export namespace CustomCertificateListResponse {
  export interface CustomCertificateListResponseItem {
    /**
     * Identifier
     */
    id: string;

    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method: 'ubiquitous' | 'optimal' | 'force';

    /**
     * When the certificate from the authority expires.
     */
    expires_on: string;

    hosts: Array<string>;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer: string;

    /**
     * When the certificate was last modified.
     */
    modified_on: string;

    /**
     * The order/priority in which the certificate will be used in a request. The
     * higher priority will break ties across overlapping 'legacy_custom' certificates,
     * but 'legacy_custom' certificates will always supercede 'sni_custom'
     * certificates.
     */
    priority: number;

    /**
     * The type of hash used for the certificate.
     */
    signature: string;

    /**
     * Status of the zone's custom SSL.
     */
    status: 'active' | 'expired' | 'deleted' | 'pending' | 'initializing';

    /**
     * When the certificate was uploaded to Cloudflare.
     */
    uploaded_on: string;

    /**
     * Identifier
     */
    zone_id: string;

    /**
     * Specify the region where your private key can be held locally for optimal TLS
     * performance. HTTPS connections to any excluded data center will still be fully
     * encrypted, but will incur some latency while Keyless SSL is used to complete the
     * handshake with the nearest allowed data center. Options allow distribution to
     * only to U.S. data centers, only to E.U. data centers, or only to highest
     * security data centers. Default distribution is to all Cloudflare datacenters,
     * for optimal performance.
     */
    geo_restrictions?: CustomCertificateListResponseItem.GeoRestrictions;

    keyless_server?: CustomCertificateListResponseItem.KeylessServer;

    /**
     * Specify the policy that determines the region where your private key will be
     * held locally. HTTPS connections to any excluded data center will still be fully
     * encrypted, but will incur some latency while Keyless SSL is used to complete the
     * handshake with the nearest allowed data center. Any combination of countries,
     * specified by their two letter country code
     * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
     * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
     * the EU region. If there are too few data centers satisfying the policy, it will
     * be rejected.
     */
    policy?: string;
  }

  export namespace CustomCertificateListResponseItem {
    /**
     * Specify the region where your private key can be held locally for optimal TLS
     * performance. HTTPS connections to any excluded data center will still be fully
     * encrypted, but will incur some latency while Keyless SSL is used to complete the
     * handshake with the nearest allowed data center. Options allow distribution to
     * only to U.S. data centers, only to E.U. data centers, or only to highest
     * security data centers. Default distribution is to all Cloudflare datacenters,
     * for optimal performance.
     */
    export interface GeoRestrictions {
      label?: 'us' | 'eu' | 'highest_security';
    }

    export interface KeylessServer {
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
      tunnel?: KeylessServer.Tunnel;
    }

    export namespace KeylessServer {
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
}

export interface CustomCertificateDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type CustomCertificateGetResponse = unknown | string;

export interface CustomCertificateCreateParams {
  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate: string;

  /**
   * The zone's private key.
   */
  private_key: string;

  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  geo_restrictions?: CustomCertificateCreateParams.GeoRestrictions;

  /**
   * Specify the policy that determines the region where your private key will be
   * held locally. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Any combination of countries,
   * specified by their two letter country code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
   * the EU region. If there are too few data centers satisfying the policy, it will
   * be rejected.
   */
  policy?: string;

  /**
   * The type 'legacy_custom' enables support for legacy clients which do not include
   * SNI in the TLS handshake.
   */
  type?: 'legacy_custom' | 'sni_custom';
}

export namespace CustomCertificateCreateParams {
  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  export interface GeoRestrictions {
    label?: 'us' | 'eu' | 'highest_security';
  }
}

export interface CustomCertificateUpdateParams {
  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate?: string;

  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  geo_restrictions?: CustomCertificateUpdateParams.GeoRestrictions;

  /**
   * Specify the policy that determines the region where your private key will be
   * held locally. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Any combination of countries,
   * specified by their two letter country code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
   * the EU region. If there are too few data centers satisfying the policy, it will
   * be rejected.
   */
  policy?: string;

  /**
   * The zone's private key.
   */
  private_key?: string;
}

export namespace CustomCertificateUpdateParams {
  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  export interface GeoRestrictions {
    label?: 'us' | 'eu' | 'highest_security';
  }
}

export interface CustomCertificateListParams {
  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of zones per page.
   */
  per_page?: number;
}

export namespace CustomCertificates {
  export import CustomCertificateCreateResponse = CustomCertificatesAPI.CustomCertificateCreateResponse;
  export import CustomCertificateUpdateResponse = CustomCertificatesAPI.CustomCertificateUpdateResponse;
  export import CustomCertificateListResponse = CustomCertificatesAPI.CustomCertificateListResponse;
  export import CustomCertificateDeleteResponse = CustomCertificatesAPI.CustomCertificateDeleteResponse;
  export import CustomCertificateGetResponse = CustomCertificatesAPI.CustomCertificateGetResponse;
  export import CustomCertificateCreateParams = CustomCertificatesAPI.CustomCertificateCreateParams;
  export import CustomCertificateUpdateParams = CustomCertificatesAPI.CustomCertificateUpdateParams;
  export import CustomCertificateListParams = CustomCertificatesAPI.CustomCertificateListParams;
  export import Prioritizes = PrioritizesAPI.Prioritizes;
  export import PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesResponse = PrioritizesAPI.PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesResponse;
  export import PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesParams = PrioritizesAPI.PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesParams;
}
