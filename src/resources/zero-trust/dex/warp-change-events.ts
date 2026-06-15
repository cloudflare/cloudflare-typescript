// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class WARPChangeEvents extends APIResource {
  /**
   * List WARP configuration and enablement toggle change events by device.
   *
   * @example
   * ```ts
   * const warpChangeEvents =
   *   await client.zeroTrust.dex.warpChangeEvents.get({
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     from: '2023-09-20T17:00:00Z',
   *     page: 1,
   *     per_page: 10,
   *     to: '2023-09-20T17:00:00Z',
   *   });
   * ```
   */
  get(
    params: WARPChangeEventGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPChangeEventGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/warp-change-events`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: WARPChangeEventGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WARPChangeEventGetResponse = Array<
  | WARPChangeEventGetResponse.DigitalExperienceMonitoringWARPToggleChangeEvent
  | WARPChangeEventGetResponse.DigitalExperienceMonitoringWARPConfigChangeEvent
>;

export namespace WARPChangeEventGetResponse {
  export interface DigitalExperienceMonitoringWARPToggleChangeEvent {
    /**
     * The account name.
     */
    account_name?: string;

    /**
     * The public account identifier.
     */
    account_tag?: string;

    /**
     * The device ID.
     */
    device_id?: string;

    /**
     * @deprecated Use `registration_id` instead.
     */
    device_registration?: string;

    /**
     * The hostname of the machine the event is from.
     */
    hostname?: string;

    /**
     * The device registration ID.
     */
    registration_id?: string;

    /**
     * The serial number of the machine the event is from.
     */
    serial_number?: string;

    /**
     * The event time.
     */
    timestamp?: string;

    /**
     * The state of the WARP toggle.
     */
    toggle?: 'on' | 'off';

    /**
     * Email tied to the device.
     */
    user_email?: string;
  }

  export interface DigitalExperienceMonitoringWARPConfigChangeEvent {
    /**
     * The device ID.
     */
    device_id?: string;

    /**
     * @deprecated Use `registration_id` instead.
     */
    device_registration?: string;

    /**
     * The details for the WARP configuration that was switched from.
     */
    from?: DigitalExperienceMonitoringWARPConfigChangeEvent.From;

    /**
     * The hostname of the machine the event is from.
     */
    hostname?: string;

    /**
     * The device registration ID.
     */
    registration_id?: string;

    /**
     * The serial number of the machine the event is from.
     */
    serial_number?: string;

    /**
     * The event time.
     */
    timestamp?: string;

    /**
     * The details for the WARP configuration that was switched to.
     */
    to?: DigitalExperienceMonitoringWARPConfigChangeEvent.To;

    /**
     * Email tied to the device.
     */
    user_email?: string;
  }

  export namespace DigitalExperienceMonitoringWARPConfigChangeEvent {
    /**
     * The details for the WARP configuration that was switched from.
     */
    export interface From {
      /**
       * The account name.
       */
      account_name?: string;

      /**
       * The public account identifier.
       */
      account_tag?: string;

      /**
       * The name of the WARP configuration.
       */
      config_name?: string;
    }

    /**
     * The details for the WARP configuration that was switched to.
     */
    export interface To {
      /**
       * The account name.
       */
      account_name?: string;

      /**
       * The public account identifier.
       */
      account_tag?: string;

      /**
       * The name of the WARP configuration.
       */
      config_name?: string;
    }
  }
}

export interface WARPChangeEventGetParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Start time for the query in ISO (RFC3339 - ISO 8601) format.
   */
  from: string;

  /**
   * Query param: Page number of paginated results.
   */
  page: number;

  /**
   * Query param: Number of results per page.
   */
  per_page: number;

  /**
   * Query param: End time for the query in ISO (RFC3339 - ISO 8601) format.
   */
  to: string;

  /**
   * Query param: Filter events by account name.
   */
  account_name?: string;

  /**
   * Query param: Filter events by WARP configuration name changed from or to.
   * Applicable to type='config' events only.
   */
  config_name?: string;

  /**
   * Query param: Sort response by event timestamp.
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: Filter events by type toggle value. Applicable to type='toggle'
   * events only.
   */
  toggle?: 'on' | 'off';

  /**
   * Query param: Filter events by type 'config' or 'toggle'.
   */
  type?: 'config' | 'toggle';
}

export declare namespace WARPChangeEvents {
  export {
    type WARPChangeEventGetResponse as WARPChangeEventGetResponse,
    type WARPChangeEventGetParams as WARPChangeEventGetParams,
  };
}
