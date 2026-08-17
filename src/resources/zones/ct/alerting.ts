// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAlerting extends APIResource {
  static override readonly _key: readonly ['zones', 'ct', 'alerting'] = Object.freeze([
    'zones',
    'ct',
    'alerting',
  ] as const);

  /**
   * Create or update the Certificate Transparency alerting subscription for a zone.
   * Enables or disables email notifications when certificates are issued for the
   * zone's domains. The `enabled` field is required on every request and controls
   * whether the subscription is active. The `emails` field is optional and, when
   * provided, replaces the stored recipient list for the zone. When `emails` is
   * omitted, the stored recipient list is preserved and only the enabled state is
   * toggled. A maximum of 100 email addresses may be configured per zone. Requests
   * that omit `enabled` are rejected with error code 1008. Subscribe and unsubscribe
   * notification emails are only sent for recipients whose effective subscription
   * state changes. Idempotent requests (no state change) send no notification email.
   *
   * @example
   * ```ts
   * const ctAlertingSubscription =
   *   await client.zones.ct.alerting.edit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     enabled: true,
   *   });
   * ```
   */
  edit(params: AlertingEditParams, options?: RequestOptions): APIPromise<CTAlertingSubscription> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/ct/alerting`, { body, ...options }) as APIPromise<{
        result: CTAlertingSubscription;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the Certificate Transparency alerting subscription settings for a zone.
   * Returns whether CT monitoring is enabled and the list of email addresses that
   * receive alerts, if any have been configured.
   *
   * @example
   * ```ts
   * const ctAlertingSubscription =
   *   await client.zones.ct.alerting.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: AlertingGetParams, options?: RequestOptions): APIPromise<CTAlertingSubscription> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/ct/alerting`, options) as APIPromise<{
        result: CTAlertingSubscription;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Alerting extends BaseAlerting {}

/**
 * Certificate Transparency alerting subscription settings for a zone.
 */
export interface CTAlertingSubscription {
  /**
   * Whether CT alerting is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Email addresses that receive CT alert notifications for the zone. A maximum of
   * 100 addresses may be configured. Each address must be a valid RFC 5322 email
   * address and must not contain a comma.
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
   * Body param: Email addresses that receive CT alert notifications for the zone. A
   * maximum of 100 addresses may be configured. Each address must be a valid RFC
   * 5322 email address and must not contain a comma.
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
    type CTAlertingSubscription as CTAlertingSubscription,
    type AlertingEditParams as AlertingEditParams,
    type AlertingGetParams as AlertingGetParams,
  };
}
