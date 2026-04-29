// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CredentialsAPI from './credentials';
import { BaseCredentials, Credentials } from './credentials';

export class BaseConfiguration extends APIResource {
  static override readonly _key: readonly ['tokenValidation', 'configuration'] = Object.freeze([
    'tokenValidation',
    'configuration',
  ] as const);
}
export class Configuration extends BaseConfiguration {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
}

Configuration.Credentials = Credentials;
Configuration.BaseCredentials = BaseCredentials;

export declare namespace Configuration {
  export { Credentials as Credentials, BaseCredentials as BaseCredentials };
}
