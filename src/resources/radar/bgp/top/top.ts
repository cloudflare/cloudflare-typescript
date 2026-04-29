// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AsesAPI from './ases';
import { Ases, BaseAses } from './ases';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'top'] = Object.freeze([
    'radar',
    'bgp',
    'top',
  ] as const);
}
export class Top extends BaseTop {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
}

Top.Ases = Ases;
Top.BaseAses = BaseAses;

export declare namespace Top {
  export { Ases as Ases, BaseAses as BaseAses };
}
