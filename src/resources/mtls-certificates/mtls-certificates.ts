// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AssociationsAPI from './associations';
import {
  AssociationGetParams,
  Associations,
  CertificateAsssociation,
  CertificateAsssociationsSinglePage,
} from './associations';
import { SinglePage } from '../../pagination';

export class MTLSCertificates extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * Upload a certificate that you want to use with mTLS-enabled Cloudflare services,
   * such as Bring Your Own CA (BYO-CA) for mTLS. To create certificates issued by
   * the Cloudflare managed CA, use the
   * [Create Client Certificate endpoint](/api/resources/client_certificates/methods/create/).
   *
   * @example
   * ```ts
   * const mtlsCertificate =
   *   await client.mtlsCertificates.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     ca: true,
   *     certificates:
   *       '-----BEGIN CERTIFICATE-----\nMIIDmDCCAoCgAwIBAgIUKTOAZNjcXVZRj4oQt0SHsl1c1vMwDQYJKoZIhvcNAQEL\nBQAwUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgMDVNhbiBGcmFuY2lzY28xEzARBgNV\nBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4YW1wbGUgSW5jLjAgFw0yMjExMjIx\nNjU5NDdaGA8yMTIyMTAyOTE2NTk0N1owUTELMAkGA1UEBhMCVVMxFjAUBgNVBAgM\nDVNhbiBGcmFuY2lzY28xEzARBgNVBAcMCkNhbGlmb3JuaWExFTATBgNVBAoMDEV4\nYW1wbGUgSW5jLjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMRcORwg\nJFTdcG/2GKI+cFYiOBNDKjCZUXEOvXWY42BkH9wxiMT869CO+enA1w5pIrXow6kC\nM1sQspHHaVmJUlotEMJxyoLFfA/8Kt1EKFyobOjuZs2SwyVyJ2sStvQuUQEosULZ\nCNGZEqoH5g6zhMPxaxm7ZLrrsDZ9maNGVqo7EWLWHrZ57Q/5MtTrbxQL+eXjUmJ9\nK3kS+3uEwMdqR6Z3BluU1ivanpPc1CN2GNhdO0/hSY4YkGEnuLsqJyDd3cIiB1Mx\nuCBJ4ZaqOd2viV1WcP3oU3dxVPm4MWyfYIldMWB14FahScxLhWdRnM9YZ/i9IFcL\nypXsuz7DjrJPtPUCAwEAAaNmMGQwHQYDVR0OBBYEFP5JzLUawNF+c3AXsYTEWHh7\nz2czMB8GA1UdIwQYMBaAFP5JzLUawNF+c3AXsYTEWHh7z2czMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMA0GCSqGSIb3DQEBCwUAA4IBAQBc+Be7\nNDhpE09y7hLPZGRPl1cSKBw4RI0XIv6rlbSTFs5EebpTGjhx/whNxwEZhB9HZ711\n1Oa1YlT8xkI9DshB78mjAHCKBAJ76moK8tkG0aqdYpJ4ZcJTVBB7l98Rvgc7zfTi\ni7WemTy72deBbSeiEtXavm4EF0mWjHhQ5Nxpnp00Bqn5g1x8CyTDypgmugnep+xG\n+iFzNmTdsz7WI9T/7kDMXqB7M/FPWBORyS98OJqNDswCLF8bIZYwUBEe+bRHFomo\nShMzaC3tvim7WCb16noDkSTMlfKO4pnvKhpcVdSgwcruATV7y+W+Lvmz2OT/Gui4\nJhqeoTewsxndhDDE\n-----END CERTIFICATE-----',
   *   });
   * ```
   */
  create(
    params: MTLSCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificateCreateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/mtls_certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MTLSCertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS certificates uploaded to your account, such as Bring Your Own CA
   * (BYO-CA) for mTLS. To list certificates issued by the Cloudflare managed CA, use
   * the
   * [List Client Certificates endpoint](/api/resources/client_certificates/methods/list/).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mtlsCertificate of client.mtlsCertificates.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: MTLSCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MTLSCertificatesSinglePage, MTLSCertificate>;
  list(options?: Core.RequestOptions): Core.PagePromise<MTLSCertificatesSinglePage, MTLSCertificate>;
  list(
    params: MTLSCertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MTLSCertificatesSinglePage, MTLSCertificate> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/mtls_certificates`, MTLSCertificatesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes the mTLS certificate unless the certificate is in use by one or more
   * Cloudflare services.
   *
   * @example
   * ```ts
   * const mtlsCertificate =
   *   await client.mtlsCertificates.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    mtlsCertificateId: string,
    params?: MTLSCertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate>;
  delete(mtlsCertificateId: string, options?: Core.RequestOptions): Core.APIPromise<MTLSCertificate>;
  delete(
    mtlsCertificateId: string,
    params: MTLSCertificateDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate> {
    if (isRequestOptions(params)) {
      return this.delete(mtlsCertificateId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate uploaded to your account. To get a certificate
   * issued by the Cloudflare managed CA, use the
   * [Client Certificate Details endpoint](/api/resources/client_certificates/methods/get/).
   *
   * @example
   * ```ts
   * const mtlsCertificate = await client.mtlsCertificates.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    mtlsCertificateId: string,
    params?: MTLSCertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate>;
  get(mtlsCertificateId: string, options?: Core.RequestOptions): Core.APIPromise<MTLSCertificate>;
  get(
    mtlsCertificateId: string,
    params: MTLSCertificateGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MTLSCertificate> {
    if (isRequestOptions(params)) {
      return this.get(mtlsCertificateId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: MTLSCertificate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MTLSCertificatesSinglePage extends SinglePage<MTLSCertificate> {}

export interface MTLSCertificate {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca?: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates?: string;

  /**
   * When the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The certificate serial number.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * The type of the certificate, indicating how it was created and who manages it.
   */
  type?: 'custom' | 'gateway_managed' | 'access_managed';

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface MTLSCertificateCreateResponse {
  /**
   * Identifier.
   */
  id?: string;

  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca?: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates?: string;

  /**
   * When the certificate expires.
   */
  expires_on?: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer?: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The certificate serial number.
   */
  serial_number?: string;

  /**
   * The type of hash used for the certificate.
   */
  signature?: string;

  /**
   * The type of the certificate, indicating how it was created and who manages it.
   */
  type?: 'custom' | 'gateway_managed' | 'access_managed';

  /**
   * This is the time the certificate was updated.
   */
  updated_at?: string;

  /**
   * This is the time the certificate was uploaded.
   */
  uploaded_on?: string;
}

export interface MTLSCertificateCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Body param: Indicates whether the certificate is a CA or leaf certificate.
   */
  ca: boolean;

  /**
   * Body param: The uploaded root CA certificate.
   */
  certificates: string;

  /**
   * Body param: Optional unique name for the certificate. Only used for human
   * readability.
   */
  name?: string;

  /**
   * Body param: The private key for the certificate. This field is only needed for
   * specific use cases such as using a custom certificate with Zero Trust's block
   * page.
   */
  private_key?: string;
}

export interface MTLSCertificateListParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Query param: Filters results by certificate type. Multiple types can be
   * comma-separated.
   */
  type?: Array<'custom' | 'gateway_managed' | 'access_managed'>;
}

export interface MTLSCertificateDeleteParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface MTLSCertificateGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

MTLSCertificates.MTLSCertificatesSinglePage = MTLSCertificatesSinglePage;
MTLSCertificates.Associations = Associations;
MTLSCertificates.CertificateAsssociationsSinglePage = CertificateAsssociationsSinglePage;

export declare namespace MTLSCertificates {
  export {
    type MTLSCertificate as MTLSCertificate,
    type MTLSCertificateCreateResponse as MTLSCertificateCreateResponse,
    MTLSCertificatesSinglePage as MTLSCertificatesSinglePage,
    type MTLSCertificateCreateParams as MTLSCertificateCreateParams,
    type MTLSCertificateListParams as MTLSCertificateListParams,
    type MTLSCertificateDeleteParams as MTLSCertificateDeleteParams,
    type MTLSCertificateGetParams as MTLSCertificateGetParams,
  };

  export {
    Associations as Associations,
    type CertificateAsssociation as CertificateAsssociation,
    CertificateAsssociationsSinglePage as CertificateAsssociationsSinglePage,
    type AssociationGetParams as AssociationGetParams,
  };
}
