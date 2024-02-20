// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SeatsAPI from 'cloudflare/resources/access/seats';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  update(
    identifier: string,
    body: SeatUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeatUpdateResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/access/seats`, { body, ...options }) as Core.APIPromise<{
        result: SeatUpdateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SeatUpdateResponse = Array<SeatUpdateResponse.SeatUpdateResponseItem>;

export namespace SeatUpdateResponse {
  export interface SeatUpdateResponseItem {
    /**
     * True if the seat is part of Access.
     */
    access_seat?: boolean;

    created_at?: string;

    /**
     * True if the seat is part of Gateway.
     */
    gateway_seat?: boolean;

    /**
     * Identifier
     */
    seat_uid?: string;

    updated_at?: string;
  }
}

export type SeatUpdateParams = Array<SeatUpdateParams.Body>;

export namespace SeatUpdateParams {
  export interface Body {
    /**
     * True if the seat is part of Access.
     */
    access_seat: boolean;

    /**
     * True if the seat is part of Gateway.
     */
    gateway_seat: boolean;
  }
}

export namespace Seats {
  export import SeatUpdateResponse = SeatsAPI.SeatUpdateResponse;
  export import SeatUpdateParams = SeatsAPI.SeatUpdateParams;
}
