// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TopAPI from './top';
import { BaseTop, Top } from './top';

export class BaseNetFlows extends APIResource {
  static override readonly _key: readonly ['radar', 'netFlows'] = Object.freeze([
    'radar',
    'netFlows',
  ] as const);
}
export class NetFlows extends BaseNetFlows {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

NetFlows.Top = Top;
NetFlows.BaseTop = BaseTop;

export declare namespace NetFlows {
  export { Top as Top, BaseTop as BaseTop };
}
