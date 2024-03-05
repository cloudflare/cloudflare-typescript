// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as FlagAPI from 'cloudflare/resources/logs/control/retention/flag';

export class Retention extends APIResource {
  flag: FlagAPI.Flag = new FlagAPI.Flag(this._client);
}

export namespace Retention {
  export import Flag = FlagAPI.Flag;
  export import FlagCreateResponse = FlagAPI.FlagCreateResponse;
  export import FlagGetResponse = FlagAPI.FlagGetResponse;
  export import FlagCreateParams = FlagAPI.FlagCreateParams;
}
