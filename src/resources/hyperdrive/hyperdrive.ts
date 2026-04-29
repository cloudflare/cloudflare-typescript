// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs';
import { Configs } from './configs';

export class Hyperdrive extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

Hyperdrive.Configs = Configs;

export declare namespace Hyperdrive {
  export { Configs as Configs };
}
