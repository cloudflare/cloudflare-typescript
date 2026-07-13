// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseLatest extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'events', 'latest'] = Object.freeze([
    'magicTransit',
    'connectors',
    'events',
    'latest',
  ] as const);

  /**
   * Fetches latest Magic WAN Connector Telemetry Events
   *
   * @example
   * ```ts
   * const latests =
   *   await client.magicTransit.connectors.events.latest.list(
   *     'connector_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    connectorID: string,
    params: LatestListParams,
    options?: RequestOptions,
  ): APIPromise<LatestListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/connectors/${connectorID}/telemetry/events/latest`,
        options,
      ) as APIPromise<{ result: LatestListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Latest extends BaseLatest {}

export interface LatestListResponse {
  count: number;

  items: Array<LatestListResponse.Item>;
}

export namespace LatestListResponse {
  /**
   * Recorded Event
   */
  export interface Item {
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
    e: Item.E;

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

  export namespace Item {
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
}

export interface LatestListParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export declare namespace Latest {
  export { type LatestListResponse as LatestListResponse, type LatestListParams as LatestListParams };
}
