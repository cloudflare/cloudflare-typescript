// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DetailsAPI from './details';
import { BaseDetails, Details } from './details';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['waitingRooms', 'events'] = Object.freeze([
    'waitingRooms',
    'events',
  ] as const);
}
export class Events extends BaseEvents {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);
}

Events.Details = Details;
Events.BaseDetails = BaseDetails;

export declare namespace Events {
  export { Details as Details, BaseDetails as BaseDetails };
}
