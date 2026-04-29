// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';

export class BaseSpeed extends APIResource {
  static override readonly _key: readonly ['radar', 'quality', 'speed'] = Object.freeze([
    'radar',
    'quality',
    'speed',
  ] as const);
}
export class Speed extends BaseSpeed {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

Speed.Top = Top;
Speed.BaseTop = BaseTop;

export declare namespace Speed {
  export { Top as Top, BaseTop as BaseTop };
}
