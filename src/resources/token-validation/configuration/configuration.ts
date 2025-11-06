// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CredentialsAPI from './credentials';
import { Credentials } from './credentials';

export class Configuration extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
}

Configuration.Credentials = Credentials;

export declare namespace Configuration {
  export { Credentials as Credentials };
}
