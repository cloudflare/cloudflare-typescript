// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AdvertisementsAPI from './advertisements';
import { Advertisement, AdvertisementEditParams, Advertisements } from './advertisements';
import { SinglePage } from '../../../pagination';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);

  /**
   * Create network monitoring rules for account. Currently only supports creating a
   * single rule per API request.
   */
  create(
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/mnm/rules`, { body, ...options }) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update network monitoring rules for account.
   */
  update(
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/mnm/rules`, { body, ...options }) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists network monitoring rules for account.
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MagicNetworkMonitoringRulesSinglePage, MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/mnm/rules`,
      MagicNetworkMonitoringRulesSinglePage,
      options,
    );
  }

  /**
   * Delete a network monitoring rule for account.
   */
  delete(
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/mnm/rules/${ruleId}`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a network monitoring rule for account.
   */
  edit(
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/mnm/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MagicNetworkMonitoringRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a single network monitoring rule for account.
   */
  get(
    ruleId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicNetworkMonitoringRule | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/rules/${ruleId}`, options) as Core.APIPromise<{
        result: MagicNetworkMonitoringRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MagicNetworkMonitoringRulesSinglePage extends SinglePage<MagicNetworkMonitoringRule | null> {}

export interface MagicNetworkMonitoringRule {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  /**
   * MNM rule type.
   */
  type: 'threshold' | 'zscore' | 'advanced_ddos';

  /**
   * The id of the rule. Must be unique.
   */
  id?: string;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"].
   */
  duration?: '1m' | '5m' | '10m' | '15m' | '20m' | '30m' | '45m' | '60m';

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;

  /**
   * Prefix match type to be applied for a prefix auto advertisement when using an
   * advanced_ddos rule.
   */
  prefix_match?: 'exact' | 'subnet' | 'supernet' | null;

  /**
   * Level of sensitivity set for zscore rules.
   */
  zscore_sensitivity?: 'low' | 'medium' | 'high' | null;

  /**
   * Target of the zscore rule analysis.
   */
  zscore_target?: 'bits' | 'packets' | null;
}

export interface RuleCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The amount of time that the rule threshold must be exceeded to send
   * an alert notification. The final value must be equivalent to one of the
   * following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
   */
  duration: '1m' | '5m' | '10m' | '15m' | '20m' | '30m' | '45m' | '60m';

  /**
   * Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z,
   * 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a
   * space in the rule name. Max 256 characters.
   */
  name: string;

  /**
   * Body param: Toggle on if you would like Cloudflare to automatically advertise
   * the IP Prefixes within the rule via Magic Transit when the rule is triggered.
   * Only available for users of Magic Transit.
   */
  automatic_advertisement?: boolean | null;

  /**
   * Body param: The number of bits per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  bandwidth?: number;

  /**
   * Body param: The number of packets per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  packet_threshold?: number;

  /**
   * Body param:
   */
  prefixes?: Array<string>;
}

export interface RuleUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The amount of time that the rule threshold must be exceeded to send
   * an alert notification. The final value must be equivalent to one of the
   * following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
   */
  duration: '1m' | '5m' | '10m' | '15m' | '20m' | '30m' | '45m' | '60m';

  /**
   * Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z,
   * 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a
   * space in the rule name. Max 256 characters.
   */
  name: string;

  /**
   * Body param: The id of the rule. Must be unique.
   */
  id?: string;

  /**
   * Body param: Toggle on if you would like Cloudflare to automatically advertise
   * the IP Prefixes within the rule via Magic Transit when the rule is triggered.
   * Only available for users of Magic Transit.
   */
  automatic_advertisement?: boolean | null;

  /**
   * Body param: The number of bits per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  bandwidth?: number;

  /**
   * Body param: The number of packets per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  packet_threshold?: number;

  /**
   * Body param:
   */
  prefixes?: Array<string>;
}

export interface RuleListParams {
  account_id: string;
}

export interface RuleDeleteParams {
  account_id: string;
}

export interface RuleEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Toggle on if you would like Cloudflare to automatically advertise
   * the IP Prefixes within the rule via Magic Transit when the rule is triggered.
   * Only available for users of Magic Transit.
   */
  automatic_advertisement?: boolean | null;

  /**
   * Body param: The number of bits per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  bandwidth?: number;

  /**
   * Body param: The amount of time that the rule threshold must be exceeded to send
   * an alert notification. The final value must be equivalent to one of the
   * following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
   */
  duration?: '1m' | '5m' | '10m' | '15m' | '20m' | '30m' | '45m' | '60m';

  /**
   * Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z,
   * 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a
   * space in the rule name. Max 256 characters.
   */
  name?: string;

  /**
   * Body param: The number of packets per second for the rule. When this value is
   * exceeded for the set duration, an alert notification is sent. Minimum of 1 and
   * no maximum.
   */
  packet_threshold?: number;

  /**
   * Body param:
   */
  prefixes?: Array<string>;
}

export interface RuleGetParams {
  account_id: string;
}

Rules.MagicNetworkMonitoringRulesSinglePage = MagicNetworkMonitoringRulesSinglePage;
Rules.Advertisements = Advertisements;

export declare namespace Rules {
  export {
    type MagicNetworkMonitoringRule as MagicNetworkMonitoringRule,
    MagicNetworkMonitoringRulesSinglePage as MagicNetworkMonitoringRulesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };

  export {
    Advertisements as Advertisements,
    type Advertisement as Advertisement,
    type AdvertisementEditParams as AdvertisementEditParams,
  };
}
