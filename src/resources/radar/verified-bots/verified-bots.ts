// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';

export class BaseVerifiedBots extends APIResource {
  static override readonly _key: readonly ['radar', 'verifiedBots'] = Object.freeze([
    'radar',
    'verifiedBots',
  ] as const);
}
export class VerifiedBots extends BaseVerifiedBots {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

VerifiedBots.Top = Top;
VerifiedBots.BaseTop = BaseTop;

export declare namespace VerifiedBots {
  export { Top as Top, BaseTop as BaseTop };
}
