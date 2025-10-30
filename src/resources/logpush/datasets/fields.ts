// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is. an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   *
   * @example
   * ```ts
   * const field = await client.logpush.datasets.fields.get(
   *   'gateway_dns',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    datasetID:
      | 'access_requests'
      | 'audit_logs'
      | 'audit_logs_v2'
      | 'biso_user_actions'
      | 'casb_findings'
      | 'device_posture_results'
      | 'dex_application_tests'
      | 'dex_device_state_events'
      | 'dlp_forensic_copies'
      | 'dns_firewall_logs'
      | 'dns_logs'
      | 'email_security_alerts'
      | 'firewall_events'
      | 'gateway_dns'
      | 'gateway_http'
      | 'gateway_network'
      | 'http_requests'
      | 'ipsec_logs'
      | 'magic_ids_detections'
      | 'nel_reports'
      | 'network_analytics_logs'
      | 'page_shield_events'
      | 'sinkhole_http_logs'
      | 'spectrum_events'
      | 'ssh_logs'
      | 'warp_config_changes'
      | 'warp_toggle_changes'
      | 'workers_trace_events'
      | 'zaraz_events'
      | 'zero_trust_network_sessions'
      | null,
    params: FieldGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FieldGetResponse> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        path`/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetID}/fields`,
        options,
      ) as APIPromise<{ result: FieldGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FieldGetResponse = unknown;

export interface FieldGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Fields {
  export { type FieldGetResponse as FieldGetResponse, type FieldGetParams as FieldGetParams };
}
