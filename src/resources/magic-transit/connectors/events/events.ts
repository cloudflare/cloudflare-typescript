// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LatestAPI from './latest';
import { Latest, LatestListParams, LatestListResponse } from './latest';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);

  /**
   * List Events
   *
   * @example
   * ```ts
   * const events =
   *   await client.magicTransit.connectors.events.list(
   *     'connector_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       from: 0,
   *       to: 0,
   *     },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const event =
   *   await client.magicTransit.connectors.events.get(0, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     connector_id: 'connector_id',
   *     event_t: 0,
   *   });
   * ```
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
    | EventGetResponse.StartRotatePki
    | EventGetResponse.FinishRotatePkiSuccess
    | EventGetResponse.FinishRotatePkiFailure
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

  export interface StartRotatePki {
    /**
     * Started PKI rotation
     */
    k: 'StartRotatePki';
  }

  export interface FinishRotatePkiSuccess {
    /**
     * Finished PKI rotation
     */
    k: 'FinishRotatePkiSuccess';
  }

  export interface FinishRotatePkiFailure {
    /**
     * Failed PKI rotation
     */
    k: 'FinishRotatePkiFailure';
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
   * Path param: Account identifier
   */
  account_id: string;

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
   * Query param: Filter by event kind
   */
  k?: string;

  /**
   * Query param:
   */
  limit?: number;
}

export interface EventGetParams {
  /**
   * Account identifier
   */
  account_id: string;

  connector_id: string;

  event_t: number;
}

Events.Latest = Latest;

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventGetResponse as EventGetResponse,
    type EventListParams as EventListParams,
    type EventGetParams as EventGetParams,
  };

  export {
    Latest as Latest,
    type LatestListResponse as LatestListResponse,
    type LatestListParams as LatestListParams,
  };
}
