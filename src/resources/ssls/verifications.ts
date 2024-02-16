// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VerificationsAPI from 'cloudflare/resources/ssls/verifications';

export class Verifications extends APIResource {
  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request
   * an immediate validation check on any certificate, and return the updated status.
   * If a validation method is provided, the validation will be immediately attempted
   * using that method.
   */
  update(
    zoneId: string,
    certificatePackId: string,
    body: VerificationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/ssl/verification/${certificatePackId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VerificationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get SSL Verification Info for a Zone.
   */
  sslVerificationSSLVerificationDetails(
    zoneId: string,
    query?: VerificationSSLVerificationSSLVerificationDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSSLVerificationSSLVerificationDetailsResponse>;
  sslVerificationSSLVerificationDetails(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSSLVerificationSSLVerificationDetailsResponse>;
  sslVerificationSSLVerificationDetails(
    zoneId: string,
    query: VerificationSSLVerificationSSLVerificationDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSSLVerificationSSLVerificationDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.sslVerificationSSLVerificationDetails(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/ssl/verification`, { query, ...options }) as Core.APIPromise<{
        result: VerificationSSLVerificationSSLVerificationDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VerificationUpdateResponse {
  /**
   * Result status.
   */
  status?: string;

  /**
   * Desired validation method.
   */
  validation_method?: 'http' | 'cname' | 'txt' | 'email';
}

export type VerificationSSLVerificationSSLVerificationDetailsResponse =
  Array<VerificationSSLVerificationSSLVerificationDetailsResponse.VerificationSSLVerificationSSLVerificationDetailsResponseItem>;

export namespace VerificationSSLVerificationSSLVerificationDetailsResponse {
  export interface VerificationSSLVerificationSSLVerificationDetailsResponseItem {
    /**
     * Current status of certificate.
     */
    certificate_status:
      | 'initializing'
      | 'authorizing'
      | 'active'
      | 'expired'
      | 'issuing'
      | 'timing_out'
      | 'pending_deployment';

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
    validation_method?: 'http' | 'cname' | 'txt';

    /**
     * Certificate's required verification information.
     */
    verification_info?: VerificationSSLVerificationSSLVerificationDetailsResponseItem.VerificationInfo;

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

  export namespace VerificationSSLVerificationSSLVerificationDetailsResponseItem {
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
}

export interface VerificationUpdateParams {
  /**
   * Desired validation method.
   */
  validation_method: 'http' | 'cname' | 'txt' | 'email';
}

export interface VerificationSSLVerificationSSLVerificationDetailsParams {
  /**
   * Immediately retry SSL Verification.
   */
  retry?: true;
}

export namespace Verifications {
  export import VerificationUpdateResponse = VerificationsAPI.VerificationUpdateResponse;
  export import VerificationSSLVerificationSSLVerificationDetailsResponse = VerificationsAPI.VerificationSSLVerificationSSLVerificationDetailsResponse;
  export import VerificationUpdateParams = VerificationsAPI.VerificationUpdateParams;
  export import VerificationSSLVerificationSSLVerificationDetailsParams = VerificationsAPI.VerificationSSLVerificationSSLVerificationDetailsParams;
}
