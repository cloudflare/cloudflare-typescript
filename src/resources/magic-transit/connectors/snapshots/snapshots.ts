// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as LatestAPI from './latest';
import { Latest } from './latest';

export class Snapshots extends APIResource {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);
}

Snapshots.Latest = Latest;

export declare namespace Snapshots {
  export { Latest as Latest };
}
