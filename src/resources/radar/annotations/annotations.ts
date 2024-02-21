// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OutagesAPI from 'cloudflare/resources/radar/annotations/outages';

export class Annotations extends APIResource {
  outages: OutagesAPI.Outages = new OutagesAPI.Outages(this._client);
}

export namespace Annotations {
  export import Outages = OutagesAPI.Outages;
  export import OutageLocationsResponse = OutagesAPI.OutageLocationsResponse;
  export import OutageLocationsParams = OutagesAPI.OutageLocationsParams;
}
