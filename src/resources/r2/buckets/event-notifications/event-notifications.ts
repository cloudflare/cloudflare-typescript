// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ConfigurationAPI from './configuration/configuration';
import {
  Configuration,
  ConfigurationGetParams,
  ConfigurationGetResponse,
} from './configuration/configuration';

export class EventNotifications extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
}

EventNotifications.Configuration = Configuration;

export declare namespace EventNotifications {
  export {
    Configuration as Configuration,
    type ConfigurationGetResponse as ConfigurationGetResponse,
    type ConfigurationGetParams as ConfigurationGetParams,
  };
}
