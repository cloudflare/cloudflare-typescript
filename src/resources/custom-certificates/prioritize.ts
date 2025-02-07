// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CustomCertificatesAPI from './custom-certificates';
import { CustomCertificatesSinglePage } from './custom-certificates';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Prioritize extends APIResource {
  /**
   * If a zone has multiple SSL certificates, you can set the order in which they
   * should be used during a request. The higher priority will break ties across
   * overlapping 'legacy_custom' certificates.
   */
  update(
    params: PrioritizeUpdateParams,
    options?: RequestOptions,
  ): PagePromise<CustomCertificatesSinglePage, CustomCertificatesAPI.CustomCertificate> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/custom_certificates/prioritize`,
      SinglePage<CustomCertificatesAPI.CustomCertificate>,
      { body, method: 'put', ...options },
    );
  }
}

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

export declare namespace Prioritize {
  export { type PrioritizeUpdateParams as PrioritizeUpdateParams };
}

export { type CustomCertificatesSinglePage };
