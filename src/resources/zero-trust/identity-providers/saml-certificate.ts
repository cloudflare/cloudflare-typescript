// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class SAMLCertificate extends APIResource {
  /**
   * Creates a new SAML encryption certificate set and assigns it to the specified
   * SAML Identity Provider. This endpoint is idempotent - if the IdP already has a
   * certificate set assigned, the existing certificate set is returned with a 200
   * status.
   *
   * **Workflow for enabling SAML encryption:**
   *
   * 1. Call this endpoint to create and assign a certificate set to the IdP
   * 2. Update the IdP configuration (PUT `/identity_providers/{id}`) with:
   *    - `config.enable_encryption: true`
   *    - `saml_certificate_set_id: <uid from step 1>`
   * 3. Configure the certificate's public key in your external SAML Identity
   *    Provider
   *
   * @example
   * ```ts
   * const samlCertificate =
   *   await client.zeroTrust.identityProviders.samlCertificate.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    identityProviderId: string,
    params: SAMLCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SAMLCertificateCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/access/identity_providers/${identityProviderId}/saml_certificate`,
        options,
      ) as Core.APIPromise<{ result: SAMLCertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A SAML encryption certificate set containing current and optionally previous
 * certificates for encryption key rotation.
 */
export interface SAMLCertificateCreateResponse {
  /**
   * Timestamp when the certificate set was created
   */
  created_at: string;

  /**
   * Unique identifier for the certificate set
   */
  uid: string;

  /**
   * Timestamp when the certificate set was last updated (e.g., during rotation)
   */
  updated_at: string;

  /**
   * The currently active certificate used for encrypting SAML assertions
   */
  current_certificate?: SAMLCertificateCreateResponse.CurrentCertificate;

  /**
   * The previous certificate, maintained during rotation to ensure continuity. Null
   * if no rotation has occurred. Mirrors the structure of `saml_certificate`.
   */
  previous_certificate?: unknown | null;
}

export namespace SAMLCertificateCreateResponse {
  /**
   * The currently active certificate used for encrypting SAML assertions
   */
  export interface CurrentCertificate {
    /**
     * Indicates whether this is the currently active certificate
     */
    is_current: boolean;

    /**
     * Certificate expiration date. Certificates are automatically rotated 30 days
     * before expiration.
     */
    not_after: string;

    /**
     * PEM-encoded X.509 certificate containing the public key. Configure this
     * certificate in your external SAML Identity Provider to enable encryption.
     */
    public_certificate: string;

    /**
     * Unique identifier for the certificate
     */
    uid: string;
  }
}

export interface SAMLCertificateCreateParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace SAMLCertificate {
  export {
    type SAMLCertificateCreateResponse as SAMLCertificateCreateResponse,
    type SAMLCertificateCreateParams as SAMLCertificateCreateParams,
  };
}
