// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TopAPI from './top/top';
import { BaseTop, Top, TopDomainCategoriesParams, TopDomainCategoriesResponse } from './top/top';

export class BaseRobotsTXT extends APIResource {
  static override readonly _key: readonly ['radar', 'robotsTXT'] = Object.freeze([
    'radar',
    'robotsTXT',
  ] as const);
}
export class RobotsTXT extends BaseRobotsTXT {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

RobotsTXT.Top = Top;
RobotsTXT.BaseTop = BaseTop;

export declare namespace RobotsTXT {
  export {
    Top as Top,
    BaseTop as BaseTop,
    type TopDomainCategoriesResponse as TopDomainCategoriesResponse,
    type TopDomainCategoriesParams as TopDomainCategoriesParams,
  };
}
