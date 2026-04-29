// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SFUAPI from './sfu';
import { SFU } from './sfu';
import * as TURNAPI from './turn';
import { TURN } from './turn';

export class Calls extends APIResource {
  sfu: SFUAPI.SFU = new SFUAPI.SFU(this._client);
  turn: TURNAPI.TURN = new TURNAPI.TURN(this._client);
}

Calls.SFU = SFU;
Calls.TURN = TURN;

export declare namespace Calls {
  export { SFU as SFU };

  export { TURN as TURN };
}
