// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class CustomTrustStore extends APIResource {
  /**
   * Add Custom Origin Trust Store for a Zone.
   *
   * @example
   * ```ts
   * const customTrustStore =
   *   await client.acm.customTrustStore.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     certificate:
   *       '-----BEGIN CERTIFICATE-----\nMIIDdjCCAl6gAwIBAgIJAPnMg0Fs+/B0MA0GCSqGSIb3DQEBCwUAMFsx...\n-----END CERTIFICATE-----\n',
   *   });
   * ```
   */
  create(
    params: CustomTrustStoreCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomTrustStore> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/acm/custom_trust_store`, { body, ...options }) as Core.APIPromise<{
        result: CustomTrustStore;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Custom Origin Trust Store for a Zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customTrustStore of client.acm.customTrustStore.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomTrustStoreListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomTrustStoresV4PagePaginationArray, CustomTrustStore> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/acm/custom_trust_store`,
      CustomTrustStoresV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Removes a CA certificate from the custom origin trust store. Origins using
   * certificates signed by this CA will no longer be trusted.
   *
   * @example
   * ```ts
   * const customTrustStore =
   *   await client.acm.customTrustStore.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    customOriginTrustStoreId: string,
    params: CustomTrustStoreDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomTrustStoreDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/acm/custom_trust_store/${customOriginTrustStoreId}`,
        options,
      ) as Core.APIPromise<{ result: CustomTrustStoreDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details about a specific certificate in the custom origin trust store,
   * including expiration and subject information.
   *
   * @example
   * ```ts
   * const customTrustStore =
   *   await client.acm.customTrustStore.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    customOriginTrustStoreId: string,
    params: CustomTrustStoreGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomTrustStore> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/acm/custom_trust_store/${customOriginTrustStoreId}`,
        options,
      ) as Core.APIPromise<{ result: CustomTrustStore }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CustomTrustStoresV4PagePaginationArray extends V4PagePaginationArray<CustomTrustStore> {}

export interface CustomTrustStore {
  /**
   * Identifier.
   */
  id: string;

  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate: string;

  /**
   * When the certificate expires.
   */
  expires_on: string;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer: string;

  /**
   * The type of hash used for the certificate.
   */
  signature: string;

  /**
   * Status of the zone's custom SSL.
   */
  status: 'initializing' | 'pending_deployment' | 'active' | 'pending_deletion' | 'deleted' | 'expired';

  /**
   * When the certificate was last modified.
   */
  updated_at: string;

  /**
   * When the certificate was uploaded to Cloudflare.
   */
  uploaded_on: string;
}

export interface CustomTrustStoreDeleteResponse {
  /**
   * Identifier.
   */
  id?: string;
}

export interface CustomTrustStoreCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate: string;
}

export interface CustomTrustStoreListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Query param: Offset the results
   */
  offset?: number;
}

export interface CustomTrustStoreDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface CustomTrustStoreGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

CustomTrustStore.CustomTrustStoresV4PagePaginationArray = CustomTrustStoresV4PagePaginationArray;

export declare namespace CustomTrustStore {
  export {
    type CustomTrustStore as CustomTrustStore,
    type CustomTrustStoreDeleteResponse as CustomTrustStoreDeleteResponse,
    CustomTrustStoresV4PagePaginationArray as CustomTrustStoresV4PagePaginationArray,
    type CustomTrustStoreCreateParams as CustomTrustStoreCreateParams,
    type CustomTrustStoreListParams as CustomTrustStoreListParams,
    type CustomTrustStoreDeleteParams as CustomTrustStoreDeleteParams,
    type CustomTrustStoreGetParams as CustomTrustStoreGetParams,
  };
}
