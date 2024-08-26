// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as VerificationAPI from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';

export class VerificationResource extends APIResource {
  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request
   * an immediate validation check on any certificate, and return the updated status.
   * If a validation method is provided, the validation will be immediately attempted
   * using that method.
   */
  edit(certificatePackId: string, params: VerificationEditParams, options?: Core.RequestOptions): Core.APIPromise<VerificationEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/ssl/verification/${certificatePackId}`, { body, ...options }) as Core.APIPromise<{ result: VerificationEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get SSL Verification Info for a Zone.
   */
  get(params: VerificationGetParams, options?: Core.RequestOptions): Core.APIPromise<VerificationGetResponse> {
    const { zone_id, ...query } = params;
    return (this._client.get(`/zones/${zone_id}/ssl/verification`, { query, ...options }) as Core.APIPromise<{ result: VerificationGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Verification {
  /**
   * Current status of certificate.
   */
  certificate_status: 'initializing' | 'authorizing' | 'active' | 'expired' | 'issuing' | 'timing_out' | 'pending_deployment';

  /**
   * Certificate Authority is manually reviewing the order.
   */
  brand_check?: boolean;

  /**
   * Certificate Pack UUID.
   */
  cert_pack_uuid?: string;

  /**
   * Certificate's signature algorithm.
   */
  signature?: 'ECDSAWithSHA256' | 'SHA1WithRSA' | 'SHA256WithRSA';

  /**
   * Validation method in use for a certificate pack order.
   */
  validation_method?: CertificatePacksAPI.ValidationMethod;

  /**
   * Certificate's required verification information.
   */
  verification_info?: Verification.VerificationInfo;

  /**
   * Status of the required verification information, omitted if verification status
   * is unknown.
   */
  verification_status?: boolean;

  /**
   * Method of verification.
   */
  verification_type?: 'cname' | 'meta tag';
}

export namespace Verification {
  /**
   * Certificate's required verification information.
   */
  export interface VerificationInfo {
    /**
     * Name of CNAME record.
     */
    record_name?: 'record_name' | 'http_url' | 'cname' | 'txt_name';

    /**
     * Target of CNAME record.
     */
    record_target?: 'record_value' | 'http_body' | 'cname_target' | 'txt_value';
  }
}

export interface VerificationEditResponse {
  /**
   * Result status.
   */
  status?: string;

  /**
   * Desired validation method.
   */
  validation_method?: 'http' | 'cname' | 'txt' | 'email';
}

export type VerificationGetResponse = Array<Verification>

export interface VerificationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Desired validation method.
   */
  validation_method: 'http' | 'cname' | 'txt' | 'email';
}

export interface VerificationGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Immediately retry SSL Verification.
   */
  retry?: true;
}

export namespace VerificationResource {
  export import Verification = VerificationAPI.Verification;
  export import VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export import VerificationGetResponse = VerificationAPI.VerificationGetResponse;
  export import VerificationEditParams = VerificationAPI.VerificationEditParams;
  export import VerificationGetParams = VerificationAPI.VerificationGetParams;
}
