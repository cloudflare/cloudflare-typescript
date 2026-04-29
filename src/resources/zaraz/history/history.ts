// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConfigsAPI from './configs';
import { Configs } from './configs';

export class History extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

History.Configs = Configs;

export declare namespace History {
  export { Configs as Configs };
}
