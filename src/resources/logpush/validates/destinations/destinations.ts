// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ExistsAPI from 'cloudflare/resources/logpush/validates/destinations/exists';

export class Destinations extends APIResource {
  exists: ExistsAPI.Exists = new ExistsAPI.Exists(this._client);
}

export namespace Destinations {
  export import Exists = ExistsAPI.Exists;
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse;
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams;
}
