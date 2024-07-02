// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ZonesAPI from './zones';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: ZoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneUpdateResponse | null> {
    const { zone_id, account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneUpdateResponse | null }>
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
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`,
        options,
      ) as Core.APIPromise<{ result: ZoneDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ZoneUpdateResponse = Array<unknown>;

export type ZoneDeleteResponse = Array<unknown>;

export interface ZoneUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
