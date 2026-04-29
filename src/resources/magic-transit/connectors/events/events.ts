// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as LatestAPI from './latest';
import { Latest } from './latest';

export class Events extends APIResource {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);
}

Events.Latest = Latest;

export declare namespace Events {
  export { Latest as Latest };
}
