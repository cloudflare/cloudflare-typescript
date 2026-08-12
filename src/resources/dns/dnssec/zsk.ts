// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseZsk extends APIResource {
  static override readonly _key: readonly ['dns', 'dnssec', 'zsk'] = Object.freeze([
    'dns',
    'dnssec',
    'zsk',
  ] as const);

  /**
   * List the Zone Signing Keys (ZSKs) that DNSSEC uses for the zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const zskListResponse of client.dns.dnssec.zsk.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ZskListParams,
    options?: RequestOptions,
  ): PagePromise<ZskListResponsesSinglePage, ZskListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/dnssec/zsk`, SinglePage<ZskListResponse>, options);
  }
}
export class Zsk extends BaseZsk {}

export type ZskListResponsesSinglePage = SinglePage<ZskListResponse>;

export interface ZskListResponse {
  DNSKEY?: ZskListResponse.DNSKEY;

  /**
   * Storage backend where the DNSSEC key material is stored.
   */
  Location?: 'database' | 'vault';

  /**
   * Internal key name for the ZSK.
   */
  Name?: string;

  SigningKey?: ZskListResponse.SigningKey;

  /**
   * Lifecycle state tag attached to the DNSSEC key.
   */
  Tag?: 'active' | 'publish' | 'external' | 'retired' | 'revoked' | 'removed';
}

export namespace ZskListResponse {
  export interface DNSKEY {
    Algorithm?: number | null;

    Flags?: number | null;

    Hdr?: DNSKEY.Hdr;

    Protocol?: number | null;

    PublicKey?: string | null;
  }

  export namespace DNSKEY {
    export interface Hdr {
      Class?: number | null;

      Name?: string | null;

      Rdlength?: number | null;

      Rrtype?: number | null;

      Ttl?: number | null;
    }
  }

  export interface SigningKey {
    /**
     * Key encryption key name used to encrypt the private key.
     */
    kek?: string | null;

    /**
     * Encrypted private key material for the signing key.
     */
    privkey?: string | null;

    /**
     * Public key content associated with the signing key.
     */
    pubkey?: string | null;
  }
}

export interface ZskListParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Zsk {
  export {
    type ZskListResponse as ZskListResponse,
    type ZskListResponsesSinglePage as ZskListResponsesSinglePage,
    type ZskListParams as ZskListParams,
  };
}
