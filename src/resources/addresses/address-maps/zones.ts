// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZonesAPI from 'cloudflare/resources/addresses/address-maps/zones';

export class Zones extends APIResource {
  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(
    accountId: string,
    addressMapId: string,
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/zones/${zoneId}`,
        options,
      ) as Core.APIPromise<{ result: ZoneDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Add a zone as a member of a particular address map.
   */
  replace(
    accountId: string,
    addressMapId: string,
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneReplaceResponse | null> {
    return (
      this._client.put(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/zones/${zoneId}`,
        options,
      ) as Core.APIPromise<{ result: ZoneReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ZoneDeleteResponse = unknown | Array<unknown> | string;

export type ZoneReplaceResponse = unknown | Array<unknown> | string;

export namespace Zones {
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZoneReplaceResponse = ZonesAPI.ZoneReplaceResponse;
}
