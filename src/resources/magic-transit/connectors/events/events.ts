// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LatestAPI from './latest';
import { BaseLatest, Latest, LatestListParams, LatestListResponse } from './latest';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'events'] = Object.freeze([
    'magicTransit',
    'connectors',
    'events',
  ] as const);

  /**
   * Lists Magic WAN Connector Telemetry Events
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
   * Fetches Magic WAN Connector Telemetry Event
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
export class Events extends BaseEvents {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);
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
  /**
   * Event kind plus event-specific payload fields.
   *
   * Event kinds:
   *
   * - `Init`: Initialized process
   * - `Leave`: Stopped process
   * - `StartAttestation`: Started attestation
   * - `FinishAttestationSuccess`: Finished attestation
   * - `FinishAttestationFailure`: Failed attestation
   * - `StartRotateCryptKey`: Started crypt key rotation
   * - `FinishRotateCryptKeySuccess`: Finished crypt key rotation
   * - `FinishRotateCryptKeyFailure`: Failed crypt key rotation
   * - `StartRotatePki`: Started PKI rotation
   * - `FinishRotatePkiSuccess`: Finished PKI rotation
   * - `FinishRotatePkiFailure`: Failed PKI rotation
   * - `StartUpgrade`: Started upgrade
   * - `FinishUpgradeSuccess`: Finished upgrade
   * - `FinishUpgradeFailure`: Failed upgrade
   * - `Reconcile`: Reconciled
   * - `ConfigureCloudflaredTunnel`: Configured Cloudflared tunnel
   * - `RekeyInstallBoth`: Installed initial inbound and outbound keys
   * - `RekeyStart`: Installed new inbound key, kept old outbound
   * - `RekeyRestart`: Restarted in-progress rekey with newer key material
   * - `RekeyAdvance`: Confirmed traffic on new inbound key, swapped outbound to new
   * - `RekeyComplete`: Deleted old keys
   * - `RekeyReset`: Deleted all keys after receiving an unexpected key
   */
  e: EventGetResponse.E;

  /**
   * Sequence number, used to order events with the same timestamp
   */
  n: number;

  /**
   * Time the Event was recorded (seconds since the Unix epoch)
   */
  t: number;

  /**
   * Version
   */
  v?: string;
}

export namespace EventGetResponse {
  /**
   * Event kind plus event-specific payload fields.
   *
   * Event kinds:
   *
   * - `Init`: Initialized process
   * - `Leave`: Stopped process
   * - `StartAttestation`: Started attestation
   * - `FinishAttestationSuccess`: Finished attestation
   * - `FinishAttestationFailure`: Failed attestation
   * - `StartRotateCryptKey`: Started crypt key rotation
   * - `FinishRotateCryptKeySuccess`: Finished crypt key rotation
   * - `FinishRotateCryptKeyFailure`: Failed crypt key rotation
   * - `StartRotatePki`: Started PKI rotation
   * - `FinishRotatePkiSuccess`: Finished PKI rotation
   * - `FinishRotatePkiFailure`: Failed PKI rotation
   * - `StartUpgrade`: Started upgrade
   * - `FinishUpgradeSuccess`: Finished upgrade
   * - `FinishUpgradeFailure`: Failed upgrade
   * - `Reconcile`: Reconciled
   * - `ConfigureCloudflaredTunnel`: Configured Cloudflared tunnel
   * - `RekeyInstallBoth`: Installed initial inbound and outbound keys
   * - `RekeyStart`: Installed new inbound key, kept old outbound
   * - `RekeyRestart`: Restarted in-progress rekey with newer key material
   * - `RekeyAdvance`: Confirmed traffic on new inbound key, swapped outbound to new
   * - `RekeyComplete`: Deleted old keys
   * - `RekeyReset`: Deleted all keys after receiving an unexpected key
   */
  export interface E {
    /**
     * Event kind
     */
    k:
      | 'Init'
      | 'Leave'
      | 'StartAttestation'
      | 'FinishAttestationSuccess'
      | 'FinishAttestationFailure'
      | 'StartRotateCryptKey'
      | 'FinishRotateCryptKeySuccess'
      | 'FinishRotateCryptKeyFailure'
      | 'StartRotatePki'
      | 'FinishRotatePkiSuccess'
      | 'FinishRotatePkiFailure'
      | 'StartUpgrade'
      | 'FinishUpgradeSuccess'
      | 'FinishUpgradeFailure'
      | 'Reconcile'
      | 'ConfigureCloudflaredTunnel'
      | 'RekeyInstallBoth'
      | 'RekeyStart'
      | 'RekeyRestart'
      | 'RekeyAdvance'
      | 'RekeyComplete'
      | 'RekeyReset';

    [k: string]: unknown;
  }
}

export interface EventListParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param
   */
  from: number;

  /**
   * Query param
   */
  to: number;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param: Filter by event kind
   */
  k?: string;

  /**
   * Query param
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
Events.BaseLatest = BaseLatest;

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventGetResponse as EventGetResponse,
    type EventListParams as EventListParams,
    type EventGetParams as EventGetParams,
  };

  export {
    Latest as Latest,
    BaseLatest as BaseLatest,
    type LatestListResponse as LatestListResponse,
    type LatestListParams as LatestListParams,
  };
}
