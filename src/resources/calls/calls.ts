// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SFUAPI from './sfu';
import { BaseSFU, SFU } from './sfu';
import * as TURNAPI from './turn';
import { BaseTURN, TURN } from './turn';

export class BaseCalls extends APIResource {
  static override readonly _key: readonly ['calls'] = Object.freeze(['calls'] as const);
}
export class Calls extends BaseCalls {
  sfu: SFUAPI.SFU = new SFUAPI.SFU(this._client);
  turn: TURNAPI.TURN = new TURNAPI.TURN(this._client);
}

Calls.SFU = SFU;
Calls.BaseSFU = BaseSFU;
Calls.TURN = TURN;
Calls.BaseTURN = BaseTURN;

export declare namespace Calls {
  export { SFU as SFU, BaseSFU as BaseSFU };

  export { TURN as TURN, BaseTURN as BaseTURN };
}
