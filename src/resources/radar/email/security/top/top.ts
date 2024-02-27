// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AsesAPI from 'cloudflare/resources/radar/email/security/top/ases/ases';
import * as LocationsAPI from 'cloudflare/resources/radar/email/security/top/locations/locations';

export class Top extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Top {
  export import Ases = AsesAPI.Ases;
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
