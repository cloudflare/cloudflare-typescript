// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CatchAllsAPI from './catch-alls';
import { BaseCatchAlls, CatchAlls } from './catch-alls';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'rules'] = Object.freeze([
    'emailRouting',
    'rules',
  ] as const);
}
export class Rules extends BaseRules {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);
}

Rules.CatchAlls = CatchAlls;
Rules.BaseCatchAlls = BaseCatchAlls;

export declare namespace Rules {
  export { CatchAlls as CatchAlls, BaseCatchAlls as BaseCatchAlls };
}
