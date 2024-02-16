// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/logpush/validates/origins';
import * as DestinationsAPI from 'cloudflare/resources/logpush/validates/destinations/destinations';

export class Validates extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
}

export namespace Validates {
  export import Destinations = DestinationsAPI.Destinations;
  export import Origins = OriginsAPI.Origins;
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse;
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginParams = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginParams;
}
