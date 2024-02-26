// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZonesAPI from 'cloudflare/resources/addresses/address-maps/zones';

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
    return (
      this._client.put(
        `/accounts/${zone_id}/addressing/address_maps/${account_id}/zones/${addressMapId}`,
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
    return (
      this._client.delete(
        `/accounts/${zone_id}/addressing/address_maps/${account_id}/zones/${addressMapId}`,
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
