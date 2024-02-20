// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CasAPI from 'cloudflare/resources/access/applications/cas';

export class Cas extends APIResource {
  /**
   * Generates a new short-lived certificate CA and public key.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaCreateResponse> {
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CaCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaListResponse | null> {
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/apps/ca`, options) as Core.APIPromise<{
        result: CaListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
   * Fetches a short-lived certificate CA and its public key.
   */
  get(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/ca`,
        options,
      ) as Core.APIPromise<{ result: CaGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CaCreateResponse = unknown | string;

export type CaListResponse = Array<CaListResponse.CaListResponseItem>;

export namespace CaListResponse {
  export interface CaListResponseItem {
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

export interface CaDeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export type CaGetResponse = unknown | string;

export namespace Cas {
  export import CaCreateResponse = CasAPI.CaCreateResponse;
  export import CaListResponse = CasAPI.CaListResponse;
  export import CaDeleteResponse = CasAPI.CaDeleteResponse;
  export import CaGetResponse = CasAPI.CaGetResponse;
}
