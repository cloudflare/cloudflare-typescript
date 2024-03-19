// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { CloudflareError } from 'cloudflare/error';
import * as ZonesAPI from 'cloudflare/resources/addressing/address-maps/zones';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: ZoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneUpdateResponse | null> {
    const { zone_id, account_id } = params;
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
      this._client.put(
        `/accounts/${accountOrZone}/addressing/address_maps/${addressMapId}/zones/${accountOrZoneId}`,
        options,
      ) as Core.APIPromise<{ result: ZoneUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(
    addressMapId: string,
    params: ZoneDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneDeleteResponse | null> {
    const { zone_id, account_id } = params;
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
        `/accounts/${accountOrZone}/addressing/address_maps/${addressMapId}/zones/${accountOrZoneId}`,
        options,
      ) as Core.APIPromise<{ result: ZoneDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ZoneUpdateResponse = unknown | Array<unknown> | string;

export type ZoneDeleteResponse = unknown | Array<unknown> | string;

export interface ZoneUpdateParams {
  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Identifier
   */
  account_id: string;
}

export interface ZoneDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Identifier
   */
  account_id: string;
}

export namespace Zones {
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZoneUpdateParams = ZonesAPI.ZoneUpdateParams;
  export import ZoneDeleteParams = ZonesAPI.ZoneDeleteParams;
}
