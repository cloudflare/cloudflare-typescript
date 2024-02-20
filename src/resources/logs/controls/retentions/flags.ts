// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FlagsAPI from 'cloudflare/resources/logs/controls/retentions/flags';

export class Flags extends APIResource {
  /**
   * Updates log retention flag for Logpull API.
   */
  create(
    zoneIdentifier: string,
    body: FlagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/logs/control/retention/flag`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FlagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets log retention flag for Logpull API.
   */
  logsReceivedGetLogRetentionFlag(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagLogsReceivedGetLogRetentionFlagResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/logs/control/retention/flag`, options) as Core.APIPromise<{
        result: FlagLogsReceivedGetLogRetentionFlagResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FlagCreateResponse {
  flag?: boolean;
}

export interface FlagLogsReceivedGetLogRetentionFlagResponse {
  flag?: boolean;
}

export interface FlagCreateParams {
  /**
   * The log retention flag for Logpull API.
   */
  flag: boolean;
}

export namespace Flags {
  export import FlagCreateResponse = FlagsAPI.FlagCreateResponse;
  export import FlagLogsReceivedGetLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedGetLogRetentionFlagResponse;
  export import FlagCreateParams = FlagsAPI.FlagCreateParams;
}
