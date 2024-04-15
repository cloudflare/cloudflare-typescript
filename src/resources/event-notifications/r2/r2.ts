// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigurationAPI from 'cloudflare/resources/event-notifications/r2/configuration/configuration';

export class R2 extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
}

export namespace R2 {
  export import Configuration = ConfigurationAPI.Configuration;
  export import ConfigurationGetResponse = ConfigurationAPI.ConfigurationGetResponse;
  export import ConfigurationGetParams = ConfigurationAPI.ConfigurationGetParams;
}
