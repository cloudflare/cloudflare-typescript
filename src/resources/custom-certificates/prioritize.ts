// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrioritizeAPI from 'cloudflare/resources/custom-certificates/prioritize';

export class Prioritize extends APIResource {
  /**
   * If a zone has multiple SSL certificates, you can set the order in which they
   * should be used during a request. The higher priority will break ties across
   * overlapping 'legacy_custom' certificates.
   */
  replace(
    zoneId: string,
    body: PrioritizeReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrioritizeReplaceResponse | null> {
    return (
      this._client.put(`/zones/${zoneId}/custom_certificates/prioritize`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrioritizeReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PrioritizeReplaceResponse = Array<PrioritizeReplaceResponse.PrioritizeReplaceResponseItem>;

export namespace PrioritizeReplaceResponse {
  export interface PrioritizeReplaceResponseItem {
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
    geo_restrictions?: PrioritizeReplaceResponseItem.GeoRestrictions;

    keyless_server?: PrioritizeReplaceResponseItem.KeylessServer;

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

  export namespace PrioritizeReplaceResponseItem {
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

export interface PrioritizeReplaceParams {
  /**
   * Array of ordered certificates.
   */
  certificates: Array<PrioritizeReplaceParams.Certificate>;
}

export namespace PrioritizeReplaceParams {
  export interface Certificate {
    /**
     * The order/priority in which the certificate will be used in a request. The
     * higher priority will break ties across overlapping 'legacy_custom' certificates,
     * but 'legacy_custom' certificates will always supercede 'sni_custom'
     * certificates.
     */
    priority?: number;
  }
}

export namespace Prioritize {
  export import PrioritizeReplaceResponse = PrioritizeAPI.PrioritizeReplaceResponse;
  export import PrioritizeReplaceParams = PrioritizeAPI.PrioritizeReplaceParams;
}
