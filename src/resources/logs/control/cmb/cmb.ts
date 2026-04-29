// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ConfigAPI from './config';
import { Config } from './config';

export class Cmb extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

Cmb.Config = Config;

export declare namespace Cmb {
  export { Config as Config };
}
