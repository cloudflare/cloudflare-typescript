// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OriginPostQuantumEncryption extends APIResource {
  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  update(
    params: OriginPostQuantumEncryptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OriginPostQuantumEncryptionUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/cache/origin_post_quantum_encryption`, {
        body,
        ...options,
      }) as APIPromise<{ result: OriginPostQuantumEncryptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  get(
    params: OriginPostQuantumEncryptionGetParams,
    options?: RequestOptions,
  ): APIPromise<OriginPostQuantumEncryptionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/cache/origin_post_quantum_encryption`, options) as APIPromise<{
        result: OriginPostQuantumEncryptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginPostQuantumEncryptionUpdateResponse = unknown;

export type OriginPostQuantumEncryptionGetResponse = unknown;

export interface OriginPostQuantumEncryptionUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the Origin Post Quantum Encryption Setting.
   */
  value: 'preferred' | 'supported' | 'off';
}

export interface OriginPostQuantumEncryptionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace OriginPostQuantumEncryption {
  export {
    type OriginPostQuantumEncryptionUpdateResponse as OriginPostQuantumEncryptionUpdateResponse,
    type OriginPostQuantumEncryptionGetResponse as OriginPostQuantumEncryptionGetResponse,
    type OriginPostQuantumEncryptionUpdateParams as OriginPostQuantumEncryptionUpdateParams,
    type OriginPostQuantumEncryptionGetParams as OriginPostQuantumEncryptionGetParams,
  };
}
