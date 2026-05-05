// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CurrentsAPI from './currents';
import { BaseCurrents, CurrentGetParams, CurrentGetResponse, Currents } from './currents';

export class BaseAggregates extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics', 'aggregates'] = Object.freeze([
    'spectrum',
    'analytics',
    'aggregates',
  ] as const);
}
export class Aggregates extends BaseAggregates {
  currents: CurrentsAPI.Currents = new CurrentsAPI.Currents(this._client);
}

Aggregates.Currents = Currents;
Aggregates.BaseCurrents = BaseCurrents;

export declare namespace Aggregates {
  export {
    Currents as Currents,
    BaseCurrents as BaseCurrents,
    type CurrentGetResponse as CurrentGetResponse,
    type CurrentGetParams as CurrentGetParams,
  };
}
