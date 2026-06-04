// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class CustomCsrs extends APIResource {
  /**
   * Generate a new custom Certificate Signing Request (CSR) for an account or zone.
   * Cloudflare generates and securely stores the private key associated with the
   * CSR.
   *
   * @example
   * ```ts
   * const customCsr = await client.customCsrs.create({
   *   common_name: 'example.com',
   *   country: 'US',
   *   locality: 'San Francisco',
   *   organization: 'Cloudflare, Inc.',
   *   sans: ['example.com', 'www.example.com'],
   *   state: 'California',
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(
    params: CustomCsrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCsrCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/custom_csrs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCsrCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all custom Certificate Signing Requests (CSRs) for an account or zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customCsrListResponse of client.customCsrs.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: CustomCsrListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomCsrListResponsesV4PagePaginationArray, CustomCsrListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomCsrListResponsesV4PagePaginationArray, CustomCsrListResponse>;
  list(
    params: CustomCsrListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomCsrListResponsesV4PagePaginationArray, CustomCsrListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id, ...query } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/custom_csrs`,
      CustomCsrListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a custom Certificate Signing Request (CSR) and its associated private
   * key.
   *
   * @example
   * ```ts
   * const customCsr = await client.customCsrs.delete(
   *   '7b163417-1d2b-4c84-a38a-2fb7a0cd7752',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    customCsrId: string,
    params?: CustomCsrDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCsrDeleteResponse>;
  delete(customCsrId: string, options?: Core.RequestOptions): Core.APIPromise<CustomCsrDeleteResponse>;
  delete(
    customCsrId: string,
    params: CustomCsrDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCsrDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(customCsrId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/custom_csrs/${customCsrId}`,
        options,
      ) as Core.APIPromise<{ result: CustomCsrDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve details for a specific custom Certificate Signing Request (CSR).
   *
   * @example
   * ```ts
   * const customCsr = await client.customCsrs.get(
   *   '7b163417-1d2b-4c84-a38a-2fb7a0cd7752',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    customCsrId: string,
    params?: CustomCsrGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCsrGetResponse>;
  get(customCsrId: string, options?: Core.RequestOptions): Core.APIPromise<CustomCsrGetResponse>;
  get(
    customCsrId: string,
    params: CustomCsrGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCsrGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(customCsrId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/custom_csrs/${customCsrId}`,
        options,
      ) as Core.APIPromise<{ result: CustomCsrGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CustomCsrListResponsesV4PagePaginationArray extends V4PagePaginationArray<CustomCsrListResponse> {}

/**
 * A custom Certificate Signing Request (CSR).
 */
export interface CustomCsr {
  /**
   * Custom CSR identifier tag.
   */
  id: string;

  /**
   * When the CSR was created.
   */
  created_at: string;

  /**
   * The key algorithm used to generate the CSR.
   */
  key_type: 'rsa2048' | 'p256v1';

  /**
   * The common name (domain) for the CSR.
   */
  common_name?: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * The PEM-encoded Certificate Signing Request.
   */
  csr?: string;

  /**
   * City or locality name.
   */
  locality?: string;

  /**
   * Organization name.
   */
  organization?: string;

  /**
   * Organizational unit for the CSR subject.
   */
  organizational_unit?: string;

  /**
   * Subject Alternative Names included in the CSR.
   */
  sans?: Array<string>;

  /**
   * State or province name.
   */
  state?: string;
}

/**
 * A custom Certificate Signing Request (CSR).
 */
export interface CustomCsrCreateResponse {
  /**
   * Custom CSR identifier tag.
   */
  id: string;

  /**
   * When the CSR was created.
   */
  created_at: string;

  /**
   * The key algorithm used to generate the CSR.
   */
  key_type: 'rsa2048' | 'p256v1';

  /**
   * Account identifier associated with this CSR.
   */
  account_tag?: string;

  /**
   * The common name (domain) for the CSR.
   */
  common_name?: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * The PEM-encoded Certificate Signing Request.
   */
  csr?: string;

  /**
   * Optional description for the CSR.
   */
  description?: string;

  /**
   * City or locality name.
   */
  locality?: string;

  /**
   * Human-readable name for the CSR.
   */
  name?: string;

  /**
   * Organization name.
   */
  organization?: string;

  /**
   * Organizational unit name.
   */
  organizational_unit?: string;

  /**
   * Subject Alternative Names included in the CSR.
   */
  sans?: Array<string>;

  /**
   * State or province name.
   */
  state?: string;
}

/**
 * A custom Certificate Signing Request (CSR).
 */
export interface CustomCsrListResponse {
  /**
   * Custom CSR identifier tag.
   */
  id: string;

  /**
   * When the CSR was created.
   */
  created_at: string;

  /**
   * The key algorithm used to generate the CSR.
   */
  key_type: 'rsa2048' | 'p256v1';

  /**
   * Account identifier associated with this CSR.
   */
  account_tag?: string;

  /**
   * The common name (domain) for the CSR.
   */
  common_name?: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * The PEM-encoded Certificate Signing Request.
   */
  csr?: string;

  /**
   * Optional description for the CSR.
   */
  description?: string;

  /**
   * City or locality name.
   */
  locality?: string;

  /**
   * Human-readable name for the CSR.
   */
  name?: string;

  /**
   * Organization name.
   */
  organization?: string;

  /**
   * Organizational unit name.
   */
  organizational_unit?: string;

  /**
   * Subject Alternative Names included in the CSR.
   */
  sans?: Array<string>;

  /**
   * State or province name.
   */
  state?: string;
}

export interface CustomCsrDeleteResponse {
  /**
   * Custom CSR identifier tag.
   */
  id?: string;
}

/**
 * A custom Certificate Signing Request (CSR).
 */
export interface CustomCsrGetResponse {
  /**
   * Custom CSR identifier tag.
   */
  id: string;

  /**
   * When the CSR was created.
   */
  created_at: string;

  /**
   * The key algorithm used to generate the CSR.
   */
  key_type: 'rsa2048' | 'p256v1';

  /**
   * Account identifier associated with this CSR.
   */
  account_tag?: string;

  /**
   * The common name (domain) for the CSR.
   */
  common_name?: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * The PEM-encoded Certificate Signing Request.
   */
  csr?: string;

  /**
   * Optional description for the CSR.
   */
  description?: string;

  /**
   * City or locality name.
   */
  locality?: string;

  /**
   * Human-readable name for the CSR.
   */
  name?: string;

  /**
   * Organization name.
   */
  organization?: string;

  /**
   * Organizational unit name.
   */
  organizational_unit?: string;

  /**
   * Subject Alternative Names included in the CSR.
   */
  sans?: Array<string>;

  /**
   * State or province name.
   */
  state?: string;
}

export interface CustomCsrCreateParams {
  /**
   * Body param: The common name (domain) for the CSR. Must be at most 64 characters.
   */
  common_name: string;

  /**
   * Body param: Two-letter ISO 3166-1 alpha-2 country code.
   */
  country: string;

  /**
   * Body param: City or locality name.
   */
  locality: string;

  /**
   * Body param: Organization name.
   */
  organization: string;

  /**
   * Body param: Subject Alternative Names for the CSR. At least one SAN is required.
   */
  sans: Array<string>;

  /**
   * Body param: State or province name.
   */
  state: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Optional description for the CSR.
   */
  description?: string;

  /**
   * Body param: Key algorithm to use for the CSR. Defaults to rsa2048 if not
   * specified.
   */
  key_type?: 'rsa2048' | 'p256v1';

  /**
   * Body param: Human-readable name for the CSR.
   */
  name?: string;

  /**
   * Body param: Organizational unit name.
   */
  organizational_unit?: string;
}

export interface CustomCsrListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export interface CustomCsrDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CustomCsrGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

CustomCsrs.CustomCsrListResponsesV4PagePaginationArray = CustomCsrListResponsesV4PagePaginationArray;

export declare namespace CustomCsrs {
  export {
    type CustomCsr as CustomCsr,
    type CustomCsrCreateResponse as CustomCsrCreateResponse,
    type CustomCsrListResponse as CustomCsrListResponse,
    type CustomCsrDeleteResponse as CustomCsrDeleteResponse,
    type CustomCsrGetResponse as CustomCsrGetResponse,
    CustomCsrListResponsesV4PagePaginationArray as CustomCsrListResponsesV4PagePaginationArray,
    type CustomCsrCreateParams as CustomCsrCreateParams,
    type CustomCsrListParams as CustomCsrListParams,
    type CustomCsrDeleteParams as CustomCsrDeleteParams,
    type CustomCsrGetParams as CustomCsrGetParams,
  };
}
