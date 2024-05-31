// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SeatsAPI from './seats';

export class Seats extends APIResource {}

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
   * Identifier
   */
  seat_uid?: string;

  updated_at?: string;
}

export namespace Seats {
  export import Seat = SeatsAPI.Seat;
}
