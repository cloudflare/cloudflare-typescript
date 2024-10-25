// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SeatsAPI from './seats';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  edit(params: SeatEditParams, options?: Core.RequestOptions): Core.APIPromise<SeatEditResponse> {
    const { account_id, body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/access/seats`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SeatEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Seat {
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
   * The unique API identifier for the Zero Trust seat.
   */
  seat_uid?: string;

  updated_at?: string;
}

export type SeatEditResponse = Array<Seat>;

export interface SeatEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<SeatEditParams.Body>;
}

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

    /**
     * The unique API identifier for the Zero Trust seat.
     */
    seat_uid: string;
  }
}

export namespace Seats {
  export import Seat = SeatsAPI.Seat;
  export import SeatEditResponse = SeatsAPI.SeatEditResponse;
  export import SeatEditParams = SeatsAPI.SeatEditParams;
}
