// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as FlagAPI from './flag';

export class Retention extends APIResource {
  flag: FlagAPI.Flag = new FlagAPI.Flag(this._client);
}

export namespace Retention {
  export import Flag = FlagAPI.Flag;
  export import FlagCreateResponse = FlagAPI.FlagCreateResponse;
  export import FlagGetResponse = FlagAPI.FlagGetResponse;
  export import FlagCreateParams = FlagAPI.FlagCreateParams;
}
