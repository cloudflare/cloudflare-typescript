// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CloudflareError } from '../../../../core/error';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class CAs extends APIResource {
  /**
   * Generates a new short-lived certificate CA and public key.
   *
   * @example
   * ```ts
   * const ca =
   *   await client.zeroTrust.access.applications.cas.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  create(
    appID: string,
    params: CACreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CA> {
    const { account_id, zone_id } = params ?? {};
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
      this._client.post(
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/ca`,
        options,
      ) as APIPromise<{ result: CA }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ca of client.zeroTrust.access.applications.cas.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CAListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CAsV4PagePaginationArray, CA> {
    const { account_id, zone_id, ...query } = params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/access/apps/ca`,
      V4PagePaginationArray<CA>,
      { query, ...options },
    );
  }

  /**
   * Deletes a short-lived certificate CA.
   *
   * @example
   * ```ts
   * const ca =
   *   await client.zeroTrust.access.applications.cas.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    appID: string,
    params: CADeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CADeleteResponse> {
    const { account_id, zone_id } = params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/ca`,
        options,
      ) as APIPromise<{ result: CADeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   *
   * @example
   * ```ts
   * const ca =
   *   await client.zeroTrust.access.applications.cas.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(appID: string, params: CAGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<CA> {
    const { account_id, zone_id } = params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/ca`,
        options,
      ) as APIPromise<{ result: CA }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CAsV4PagePaginationArray = V4PagePaginationArray<CA>;

export interface CA {
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

export interface CADeleteResponse {
  /**
   * The ID of the CA.
   */
  id?: string;
}

export interface CACreateParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CAListParams extends V4PagePaginationArrayParams {
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

export interface CADeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface CAGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace CAs {
  export {
    type CA as CA,
    type CADeleteResponse as CADeleteResponse,
    type CAsV4PagePaginationArray as CAsV4PagePaginationArray,
    type CACreateParams as CACreateParams,
    type CAListParams as CAListParams,
    type CADeleteParams as CADeleteParams,
    type CAGetParams as CAGetParams,
  };
}
