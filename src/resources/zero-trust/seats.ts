// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SeatsAPI from 'cloudflare/resources/zero-trust/seats';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  edit(
    identifier: string,
    body: SeatEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeatEditResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/access/seats`, { body, ...options }) as Core.APIPromise<{
        result: SeatEditResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessSeats {
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

export type SeatEditResponse = Array<AccessSeats>;

export type SeatEditParams = Array<SeatEditParams.Body>;

export namespace SeatEditParams {
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
  export import AccessSeats = SeatsAPI.AccessSeats;
  export import SeatEditResponse = SeatsAPI.SeatEditResponse;
  export import SeatEditParams = SeatsAPI.SeatEditParams;
}
