// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  edit(params: SeatEditParams, options?: RequestOptions): PagePromise<SeatsSinglePage, Seat> {
    const { account_id, body } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/access/seats`, SinglePage<Seat>, {
      body: body,
      method: 'patch',
      ...options,
    });
  }
}

export type SeatsSinglePage = SinglePage<Seat>;

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

export declare namespace Seats {
  export {
    type Seat as Seat,
    type SeatsSinglePage as SeatsSinglePage,
    type SeatEditParams as SeatEditParams,
  };
}
