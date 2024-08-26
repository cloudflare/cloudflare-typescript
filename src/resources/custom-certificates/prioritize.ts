// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PrioritizeAPI from './prioritize';
import * as CustomCertificatesAPI from './custom-certificates';

export class Prioritize extends APIResource {
  /**
   * If a zone has multiple SSL certificates, you can set the order in which they
   * should be used during a request. The higher priority will break ties across
   * overlapping 'legacy_custom' certificates.
   */
  update(params: PrioritizeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<PrioritizeUpdateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/custom_certificates/prioritize`, { body, ...options }) as Core.APIPromise<{ result: PrioritizeUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type PrioritizeUpdateResponse = Array<CustomCertificatesAPI.CustomCertificate>

export interface PrioritizeUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Array of ordered certificates.
   */
  certificates: Array<PrioritizeUpdateParams.Certificate>;
}

export namespace PrioritizeUpdateParams {
  export interface Certificate {
    /**
     * Identifier
     */
    id?: string;

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
  export import PrioritizeUpdateResponse = PrioritizeAPI.PrioritizeUpdateResponse;
  export import PrioritizeUpdateParams = PrioritizeAPI.PrioritizeUpdateParams;
}
