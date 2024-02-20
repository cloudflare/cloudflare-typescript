// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as FlagsAPI from 'cloudflare/resources/logs/controls/retentions/flags';

export class Retentions extends APIResource {
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
}

export namespace Retentions {
  export import Flags = FlagsAPI.Flags;
  export import FlagCreateResponse = FlagsAPI.FlagCreateResponse;
  export import FlagLogsReceivedGetLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedGetLogRetentionFlagResponse;
  export import FlagCreateParams = FlagsAPI.FlagCreateParams;
}
