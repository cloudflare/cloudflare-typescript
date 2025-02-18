// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Telemetry extends APIResource {
  /**
   * List Events
   */
  list(
    connectorId: string,
    params: TelemetryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/connectors/${connectorId}/telemetry/events`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TelemetryListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Event
   */
  get(
    connectorId: string,
    eventT: number,
    eventN: number,
    params: TelemetryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/connectors/${connectorId}/telemetry/events/${eventT}.${eventN}`,
        options,
      ) as Core.APIPromise<{ result: TelemetryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TelemetryListResponse {
  count: number;

  items: Array<TelemetryListResponse.Item>;

  cursor?: string;
}

export namespace TelemetryListResponse {
  export interface Item {
    /**
     * Time the Event was collected (seconds since the Unix epoch)
     */
    a: number;

    /**
     * Kind
     */
    k: string;

    /**
     * Sequence number, used to order events with the same timestamp
     */
    n: number;

    /**
     * Time the Event was recorded (seconds since the Unix epoch)
     */
    t: number;
  }
}

/**
 * Recorded Event
 */
export interface TelemetryGetResponse {
  e:
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.UnionMember8
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K
    | TelemetryGetResponse.K;

  /**
   * Sequence number, used to order events with the same timestamp
   */
  n: number;

  /**
   * Time the Event was recorded (seconds since the Unix epoch)
   */
  t: number;
}

export namespace TelemetryGetResponse {
  export interface K {
    /**
     * Initialized process
     */
    k: 'Init';
  }

  export interface K {
    /**
     * Stopped process
     */
    k: 'Leave';
  }

  export interface K {
    /**
     * Started attestation
     */
    k: 'StartAttestation';
  }

  export interface K {
    /**
     * Finished attestation
     */
    k: 'FinishAttestationSuccess';
  }

  export interface K {
    /**
     * Failed attestation
     */
    k: 'FinishAttestationFailure';
  }

  export interface K {
    /**
     * Started crypt key rotation
     */
    k: 'StartRotateCryptKey';
  }

  export interface K {
    /**
     * Finished crypt key rotation
     */
    k: 'FinishRotateCryptKeySuccess';
  }

  export interface K {
    /**
     * Failed crypt key rotation
     */
    k: 'FinishRotateCryptKeyFailure';
  }

  export interface UnionMember8 {
    /**
     * Started upgrade
     */
    k: 'StartUpgrade';

    /**
     * Location of upgrade bundle
     */
    url: string;
  }

  export interface K {
    /**
     * Finished upgrade
     */
    k: 'FinishUpgradeSuccess';
  }

  export interface K {
    /**
     * Failed upgrade
     */
    k: 'FinishUpgradeFailure';
  }

  export interface K {
    /**
     * Reconciled
     */
    k: 'Reconcile';
  }

  export interface K {
    /**
     * Configured Cloudflared tunnel
     */
    k: 'ConfigureCloudflaredTunnel';
  }
}

export interface TelemetryListParams {
  /**
   * Path param:
   */
  account_id: number;

  /**
   * Query param:
   */
  from: number;

  /**
   * Query param:
   */
  to: number;

  /**
   * Query param:
   */
  cursor?: string;

  /**
   * Query param:
   */
  limit?: number;
}

export interface TelemetryGetParams {
  account_id: number;
}

export declare namespace Telemetry {
  export {
    type TelemetryListResponse as TelemetryListResponse,
    type TelemetryGetResponse as TelemetryGetResponse,
    type TelemetryListParams as TelemetryListParams,
    type TelemetryGetParams as TelemetryGetParams,
  };
}
