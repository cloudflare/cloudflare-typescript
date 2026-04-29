// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LatestAPI from './latest';
import { BaseLatest, Latest } from './latest';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'events'] = Object.freeze([
    'magicTransit',
    'connectors',
    'events',
  ] as const);
}
export class Events extends BaseEvents {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);
}

Events.Latest = Latest;
Events.BaseLatest = BaseLatest;

export declare namespace Events {
  export { Latest as Latest, BaseLatest as BaseLatest };
}
