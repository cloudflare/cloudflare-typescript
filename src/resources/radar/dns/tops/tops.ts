// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AsesAPI from 'cloudflare/resources/radar/dns/tops/ases';
import * as LocationsAPI from 'cloudflare/resources/radar/dns/tops/locations';

export class Tops extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Tops {
  export import Ases = AsesAPI.Ases;
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
