// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/magic-network-monitoring/rules/rules';
import * as AdvertisementsAPI from 'cloudflare/resources/magic-network-monitoring/rules/advertisements';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);

  /**
   * Create network monitoring rules for account. Currently only supports creating a
   * single rule per API request.
   */
  create(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRule | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: MagicVisibilityMNMRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update network monitoring rules for account.
   */
  update(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRule | null> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: MagicVisibilityMNMRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists network monitoring rules for account.
   */
  list(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<RuleListResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/rules`, options) as Core.APIPromise<{
        result: RuleListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a network monitoring rule for account.
   */
  delete(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRule | null> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: MagicVisibilityMNMRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a network monitoring rule for account.
   */
  edit(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRule | null> {
    return (
      this._client.patch(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: MagicVisibilityMNMRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a single network monitoring rule for account.
   */
  get(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRule | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: MagicVisibilityMNMRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MagicVisibilityMNMRule {
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

export type RuleListResponse = Array<MagicVisibilityMNMRule | null>;

export namespace Rules {
  export import MagicVisibilityMNMRule = RulesAPI.MagicVisibilityMNMRule;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import Advertisements = AdvertisementsAPI.Advertisements;
  export import MagicVisibilityMNMRuleAdvertisable = AdvertisementsAPI.MagicVisibilityMNMRuleAdvertisable;
}
