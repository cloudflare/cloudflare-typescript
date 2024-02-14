// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SeatsAPI from 'cloudflare/resources/access/seats';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  zeroTrustSeatsUpdateAUserSeat(
    identifier: string,
    body: SeatZeroTrustSeatsUpdateAUserSeatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeatZeroTrustSeatsUpdateAUserSeatResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/access/seats`, { body, ...options }) as Core.APIPromise<{
        result: SeatZeroTrustSeatsUpdateAUserSeatResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SeatZeroTrustSeatsUpdateAUserSeatResponse =
  Array<SeatZeroTrustSeatsUpdateAUserSeatResponse.SeatZeroTrustSeatsUpdateAUserSeatResponseItem>;

export namespace SeatZeroTrustSeatsUpdateAUserSeatResponse {
  export interface SeatZeroTrustSeatsUpdateAUserSeatResponseItem {
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

export type SeatZeroTrustSeatsUpdateAUserSeatParams = Array<SeatZeroTrustSeatsUpdateAUserSeatParams.Body>;

export namespace SeatZeroTrustSeatsUpdateAUserSeatParams {
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
  export import SeatZeroTrustSeatsUpdateAUserSeatResponse = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatResponse;
  export import SeatZeroTrustSeatsUpdateAUserSeatParams = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatParams;
}
