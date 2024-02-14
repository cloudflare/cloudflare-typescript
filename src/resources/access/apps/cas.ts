// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CasAPI from 'cloudflare/resources/access/apps/cas';

export class Cas extends APIResource {
  /**
   * Deletes a short-lived certificate CA.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaDeleteResponse> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CaDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a new short-lived certificate CA and public key.
   */
  accessShortLivedCertificateCAsCreateAShortLivedCertificateCa(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse> {
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   */
  accessShortLivedCertificateCAsGetAShortLivedCertificateCa(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  accessShortLivedCertificateCAsListShortLivedCertificateCAs(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse | null> {
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/apps/ca`, options) as Core.APIPromise<{
        result: CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CaDeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export type CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse = unknown | string;

export type CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse = unknown | string;

export type CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse =
  Array<CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse.CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponseItem>;

export namespace CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse {
  export interface CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponseItem {
    /**
     * The ID of the CA.
     */
    id?: string;

    /**
     * The Application Audience (AUD) tag. Identifies the application associated with
     * the CA.
     */
    aud?: string;

    /**
     * The public key to add to your SSH server configuration.
     */
    public_key?: string;
  }
}

export namespace Cas {
  export import CaDeleteResponse = CasAPI.CaDeleteResponse;
  export import CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse = CasAPI.CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse;
  export import CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse = CasAPI.CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse;
  export import CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse = CasAPI.CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse;
}
