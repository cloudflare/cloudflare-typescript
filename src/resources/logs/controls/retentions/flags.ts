// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FlagsAPI from 'cloudflare/resources/logs/controls/retentions/flags';

export class Flags extends APIResource {
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

  /**
   * Updates log retention flag for Logpull API.
   */
  logsReceivedUpdateLogRetentionFlag(
    zoneIdentifier: string,
    body: FlagLogsReceivedUpdateLogRetentionFlagParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagLogsReceivedUpdateLogRetentionFlagResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/logs/control/retention/flag`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FlagLogsReceivedUpdateLogRetentionFlagResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FlagLogsReceivedGetLogRetentionFlagResponse {
  flag?: boolean;
}

export interface FlagLogsReceivedUpdateLogRetentionFlagResponse {
  flag?: boolean;
}

export interface FlagLogsReceivedUpdateLogRetentionFlagParams {
  /**
   * The log retention flag for Logpull API.
   */
  flag: boolean;
}

export namespace Flags {
  export import FlagLogsReceivedGetLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedGetLogRetentionFlagResponse;
  export import FlagLogsReceivedUpdateLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedUpdateLogRetentionFlagResponse;
  export import FlagLogsReceivedUpdateLogRetentionFlagParams = FlagsAPI.FlagLogsReceivedUpdateLogRetentionFlagParams;
}
