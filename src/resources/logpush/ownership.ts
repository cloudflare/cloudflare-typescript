// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { CloudflareError } from 'cloudflare/error';
import * as OwnershipAPI from 'cloudflare/resources/logpush/ownership';

export class Ownership extends APIResource {
  /**
   * Gets a new ownership challenge sent to your destination.
   */
  create(
    params: OwnershipCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipCreateResponse | null> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/ownership`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Validates ownership challenge of the destination.
   */
  validate(
    params: OwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipValidateResponse | null> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/ownership/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipValidateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OwnershipCreateResponse {
  filename?: string;

  message?: string;

  valid?: boolean;
}

export interface OwnershipValidateResponse {
  valid?: boolean;
}

export interface OwnershipCreateParams {
  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf: string;

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

export interface OwnershipValidateParams {
  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf: string;

  /**
   * Body param: Ownership challenge token to prove destination ownership.
   */
  ownership_challenge: string;

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

export namespace Ownership {
  export import OwnershipCreateResponse = OwnershipAPI.OwnershipCreateResponse;
  export import OwnershipValidateResponse = OwnershipAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
}
