// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountRulesAPI from './account-rules';
import {
  AccountRule,
  AccountRuleListParams,
  AccountRules,
  AccountRulesV4PagePaginationArray,
  BaseAccountRules,
} from './account-rules';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteParams,
  AddressEditParams,
  AddressGetParams,
  AddressListParams,
  Addresses,
  AddressesV4PagePaginationArray,
  BaseAddresses,
} from './addresses';
import * as DNSAPI from './dns';
import {
  BaseDNS,
  DNS,
  DNSCreateParams,
  DNSDeleteParams,
  DNSEditParams,
  DNSGetParams,
  DNSGetResponse,
  DNSRecord,
  DNSRecordsSinglePage,
} from './dns';
import * as RulesAPI from './rules/rules';
import {
  Action,
  BaseRules,
  EmailRoutingRule,
  Matcher,
  RuleCreateParams,
  RuleDeleteParams,
  RuleGetParams,
  RuleListParams,
  RuleUpdateParams,
  Rules,
} from './rules/rules';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseEmailRouting extends APIResource {
  static override readonly _key: readonly ['emailRouting'] = Object.freeze(['emailRouting'] as const);

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   *
   * @deprecated
   */
  disable(params: EmailRoutingDisableParams, options?: RequestOptions): APIPromise<Settings> {
    const { zone_id, body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/disable`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   *
   * @deprecated
   */
  enable(params: EmailRoutingEnableParams, options?: RequestOptions): APIPromise<Settings> {
    const { zone_id, body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/enable`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   *
   * @example
   * ```ts
   * const settings = await client.emailRouting.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: EmailRoutingGetParams, options?: RequestOptions): APIPromise<Settings> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/email/routing`, options) as APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unlock MX records previously locked by Email Routing. Deprecated - use PATCH
   * /zones/{zone_id}/email/routing/dns instead.
   *
   * @deprecated This endpoint is deprecated. Use PATCH /zones/{zone_id}/email/routing/dns instead.
   */
  unlock(params: EmailRoutingUnlockParams, options?: RequestOptions): APIPromise<Settings> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/unlock`, { body, ...options }) as APIPromise<{
        result: Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class EmailRouting extends BaseEmailRouting {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accountRules: AccountRulesAPI.AccountRules = new AccountRulesAPI.AccountRules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
}

export interface Settings {
  /**
   * Email Routing settings identifier.
   */
  id: string;

  /**
   * State of the zone settings for Email Routing.
   */
  enabled: true | false;

  /**
   * Domain of your zone.
   */
  name: string;

  /**
   * The date and time the settings have been created.
   */
  created?: string;

  /**
   * The date and time the settings have been modified.
   */
  modified?: string;

  /**
   * Flag to check if the user skipped the configuration wizard.
   */
  skip_wizard?: true | false;

  /**
   * Show the state of your account, and the type or configuration error.
   */
  status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

  /**
   * Whether subaddressing (plus-addressing) is honored when matching incoming mail
   * against routing rules.
   */
  support_subaddress?: true | false;

  /**
   * @deprecated Email Routing settings tag. (Deprecated, replaced by Email Routing
   * settings identifier)
   */
  tag?: string;
}

export interface EmailRoutingDisableParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: unknown;
}

export interface EmailRoutingEnableParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: unknown;
}

export interface EmailRoutingGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface EmailRoutingUnlockParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Domain of your zone.
   */
  name?: string;
}

EmailRouting.DNS = DNS;
EmailRouting.BaseDNS = BaseDNS;
EmailRouting.Rules = Rules;
EmailRouting.BaseRules = BaseRules;
EmailRouting.AccountRules = AccountRules;
EmailRouting.BaseAccountRules = BaseAccountRules;
EmailRouting.Addresses = Addresses;
EmailRouting.BaseAddresses = BaseAddresses;

export declare namespace EmailRouting {
  export {
    type Settings as Settings,
    type EmailRoutingDisableParams as EmailRoutingDisableParams,
    type EmailRoutingEnableParams as EmailRoutingEnableParams,
    type EmailRoutingGetParams as EmailRoutingGetParams,
    type EmailRoutingUnlockParams as EmailRoutingUnlockParams,
  };

  export {
    DNS as DNS,
    BaseDNS as BaseDNS,
    type DNSRecord as DNSRecord,
    type DNSGetResponse as DNSGetResponse,
    type DNSRecordsSinglePage as DNSRecordsSinglePage,
    type DNSCreateParams as DNSCreateParams,
    type DNSDeleteParams as DNSDeleteParams,
    type DNSEditParams as DNSEditParams,
    type DNSGetParams as DNSGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type Action as Action,
    type EmailRoutingRule as EmailRoutingRule,
    type Matcher as Matcher,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };

  export {
    AccountRules as AccountRules,
    BaseAccountRules as BaseAccountRules,
    type AccountRule as AccountRule,
    type AccountRulesV4PagePaginationArray as AccountRulesV4PagePaginationArray,
    type AccountRuleListParams as AccountRuleListParams,
  };

  export {
    Addresses as Addresses,
    BaseAddresses as BaseAddresses,
    type Address as Address,
    type AddressesV4PagePaginationArray as AddressesV4PagePaginationArray,
    type AddressCreateParams as AddressCreateParams,
    type AddressListParams as AddressListParams,
    type AddressDeleteParams as AddressDeleteParams,
    type AddressEditParams as AddressEditParams,
    type AddressGetParams as AddressGetParams,
  };
}
