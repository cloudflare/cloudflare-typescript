// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Alerting extends APIResource {
  /**
   * Create or update the Certificate Transparency alerting subscription for a zone.
   * Enables or disables email notifications when certificates are issued for the
   * zone's domains. For Free and Pro zones, the subscription is toggled on or off
   * using the enabled field. Notification emails are sent to all users with SSL
   * permissions on the zone. For Business and Enterprise zones, the emails field is
   * required and controls which addresses receive alerts. Setting emails to an empty
   * list disables the subscription regardless of the enabled field. A maximum of 10
   * email addresses may be configured.
   *
   * @example
   * ```ts
   * const response = await client.zones.ct.alerting.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   enabled: true,
   * });
   * ```
   */
  edit(params: AlertingEditParams, options?: Core.RequestOptions): Core.APIPromise<AlertingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/ct/alerting`, { body, ...options }) as Core.APIPromise<{
        result: AlertingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the Certificate Transparency alerting subscription settings for a zone.
   * Returns whether CT monitoring is enabled and, for Business and Enterprise zones,
   * the list of email addresses that receive alerts.
   *
   * @example
   * ```ts
   * const alerting = await client.zones.ct.alerting.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: AlertingGetParams, options?: Core.RequestOptions): Core.APIPromise<AlertingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/ct/alerting`, options) as Core.APIPromise<{
        result: AlertingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Certificate Transparency alerting subscription settings for a zone.
 */
export interface AlertingEditResponse {
  /**
   * Whether CT alerting is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Email addresses that receive CT alert notifications. Only present and
   * configurable for Business and Enterprise zones. Maximum of 10 addresses. For
   * Free and Pro zones, notifications are sent to all users with SSL permissions on
   * the zone.
   */
  emails?: Array<string>;
}

/**
 * Certificate Transparency alerting subscription settings for a zone.
 */
export interface AlertingGetResponse {
  /**
   * Whether CT alerting is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Email addresses that receive CT alert notifications. Only present and
   * configurable for Business and Enterprise zones. Maximum of 10 addresses. For
   * Free and Pro zones, notifications are sent to all users with SSL permissions on
   * the zone.
   */
  emails?: Array<string>;
}

export interface AlertingEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Whether CT alerting is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Body param: Email addresses that receive CT alert notifications. Only present
   * and configurable for Business and Enterprise zones. Maximum of 10 addresses. For
   * Free and Pro zones, notifications are sent to all users with SSL permissions on
   * the zone.
   */
  emails?: Array<string>;
}

export interface AlertingGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Alerting {
  export {
    type AlertingEditResponse as AlertingEditResponse,
    type AlertingGetResponse as AlertingGetResponse,
    type AlertingEditParams as AlertingEditParams,
    type AlertingGetParams as AlertingGetParams,
  };
}
