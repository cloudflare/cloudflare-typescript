// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZonesAPI from 'cloudflare/resources/addressing/address-maps/zones';
import * as Shared from 'cloudflare/resources/shared';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(
    addressMapId: string,
    params: ZoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { zone_id, account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(
    addressMapId: string,
    params: ZoneDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { zone_id, account_id, body } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export namespace Zones {
  export import ZoneUpdateParams = ZonesAPI.ZoneUpdateParams;
  export import ZoneDeleteParams = ZonesAPI.ZoneDeleteParams;
}
