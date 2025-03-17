// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * List Events
   */
  list(
    connectorID: string,
    params: EventListParams,
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/magic/connectors/${connectorID}/telemetry/events`, {
        query,
        ...options,
      }) as APIPromise<{ result: EventListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Event
   */
  get(eventN: number, params: EventGetParams, options?: RequestOptions): APIPromise<EventGetResponse> {
    const { account_id, connector_id, event_t } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/connectors/${connector_id}/telemetry/events/${event_t}.${eventN}`,
        options,
      ) as APIPromise<{ result: EventGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EventListResponse {
  count: number;

  items: Array<EventListResponse.Item>;

  cursor?: string;
}

export namespace EventListResponse {
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
export interface EventGetResponse {
  e:
    | EventGetResponse.Init
    | EventGetResponse.Leave
    | EventGetResponse.StartAttestation
    | EventGetResponse.FinishAttestationSuccess
    | EventGetResponse.FinishAttestationFailure
    | EventGetResponse.StartRotateCryptKey
    | EventGetResponse.FinishRotateCryptKeySuccess
    | EventGetResponse.FinishRotateCryptKeyFailure
    | EventGetResponse.StartUpgrade
    | EventGetResponse.FinishUpgradeSuccess
    | EventGetResponse.FinishUpgradeFailure
    | EventGetResponse.Reconcile
    | EventGetResponse.ConfigureCloudflaredTunnel;

  /**
   * Sequence number, used to order events with the same timestamp
   */
  n: number;

  /**
   * Time the Event was recorded (seconds since the Unix epoch)
   */
  t: number;
}

export namespace EventGetResponse {
  export interface Init {
    /**
     * Initialized process
     */
    k: 'Init';
  }

  export interface Leave {
    /**
     * Stopped process
     */
    k: 'Leave';
  }

  export interface StartAttestation {
    /**
     * Started attestation
     */
    k: 'StartAttestation';
  }

  export interface FinishAttestationSuccess {
    /**
     * Finished attestation
     */
    k: 'FinishAttestationSuccess';
  }

  export interface FinishAttestationFailure {
    /**
     * Failed attestation
     */
    k: 'FinishAttestationFailure';
  }

  export interface StartRotateCryptKey {
    /**
     * Started crypt key rotation
     */
    k: 'StartRotateCryptKey';
  }

  export interface FinishRotateCryptKeySuccess {
    /**
     * Finished crypt key rotation
     */
    k: 'FinishRotateCryptKeySuccess';
  }

  export interface FinishRotateCryptKeyFailure {
    /**
     * Failed crypt key rotation
     */
    k: 'FinishRotateCryptKeyFailure';
  }

  export interface StartUpgrade {
    /**
     * Started upgrade
     */
    k: 'StartUpgrade';

    /**
     * Location of upgrade bundle
     */
    url: string;
  }

  export interface FinishUpgradeSuccess {
    /**
     * Finished upgrade
     */
    k: 'FinishUpgradeSuccess';
  }

  export interface FinishUpgradeFailure {
    /**
     * Failed upgrade
     */
    k: 'FinishUpgradeFailure';
  }

  export interface Reconcile {
    /**
     * Reconciled
     */
    k: 'Reconcile';
  }

  export interface ConfigureCloudflaredTunnel {
    /**
     * Configured Cloudflared tunnel
     */
    k: 'ConfigureCloudflaredTunnel';
  }
}

export interface EventListParams {
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

export interface EventGetParams {
  account_id: number;

  connector_id: string;

  event_t: number;
}

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventGetResponse as EventGetResponse,
    type EventListParams as EventListParams,
    type EventGetParams as EventGetParams,
  };
}
