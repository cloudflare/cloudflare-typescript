// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CatchAllsAPI from './catch-alls';
import { CatchAlls } from './catch-alls';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);
}

Rules.CatchAlls = CatchAlls;

export declare namespace Rules {
  export { CatchAlls as CatchAlls };
}
