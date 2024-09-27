// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConfigurationAPI from './configuration/configuration';

export class EventNotifications extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
}

export namespace EventNotifications {
  export import Configuration = ConfigurationAPI.Configuration;
  export import ConfigurationGetResponse = ConfigurationAPI.ConfigurationGetResponse;
  export import ConfigurationGetParams = ConfigurationAPI.ConfigurationGetParams;
}
