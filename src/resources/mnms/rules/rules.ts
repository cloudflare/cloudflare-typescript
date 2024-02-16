// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/mnms/rules/rules';
import * as AdvertisementsAPI from 'cloudflare/resources/mnms/rules/advertisements';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);

  /**
   * Update a network monitoring rule for account.
   */
  update(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse | null> {
    return (
      this._client.patch(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a network monitoring rule for account.
   */
  delete(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a single network monitoring rule for account.
   */
  get(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create network monitoring rules for account. Currently only supports creating a
   * single rule per API request.
   */
  magicNetworkMonitoringRulesCreateRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesCreateRulesResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: RuleMagicNetworkMonitoringRulesCreateRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists network monitoring rules for account.
   */
  magicNetworkMonitoringRulesListRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesListRulesResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: RuleMagicNetworkMonitoringRulesListRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update network monitoring rules for account.
   */
  magicNetworkMonitoringRulesUpdateRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesUpdateRulesResponse | null> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: RuleMagicNetworkMonitoringRulesUpdateRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RuleUpdateResponse {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: unknown;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export interface RuleDeleteResponse {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: unknown;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export interface RuleGetResponse {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: unknown;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export interface RuleMagicNetworkMonitoringRulesCreateRulesResponse {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: unknown;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export type RuleMagicNetworkMonitoringRulesListRulesResponse =
  Array<RuleMagicNetworkMonitoringRulesListRulesResponse.RuleMagicNetworkMonitoringRulesListRulesResponseItem | null>;

export namespace RuleMagicNetworkMonitoringRulesListRulesResponse {
  export interface RuleMagicNetworkMonitoringRulesListRulesResponseItem {
    /**
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
  }
}

export interface RuleMagicNetworkMonitoringRulesUpdateRulesResponse {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;

  /**
   * The amount of time that the rule threshold must be exceeded to send an alert
   * notification. The final value must be equivalent to one of the following 8
   * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
   * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
   * least one unit must be provided.
   */
  duration: string;

  /**
   * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
   * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
   * the rule name. Max 256 characters.
   */
  name: string;

  prefixes: Array<string>;

  id?: unknown;

  /**
   * The number of bits per second for the rule. When this value is exceeded for the
   * set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  bandwidth_threshold?: number;

  /**
   * The number of packets per second for the rule. When this value is exceeded for
   * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
   */
  packet_threshold?: number;
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleMagicNetworkMonitoringRulesCreateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesCreateRulesResponse;
  export import RuleMagicNetworkMonitoringRulesListRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesListRulesResponse;
  export import RuleMagicNetworkMonitoringRulesUpdateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesUpdateRulesResponse;
  export import Advertisements = AdvertisementsAPI.Advertisements;
  export import AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse = AdvertisementsAPI.AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse;
}
