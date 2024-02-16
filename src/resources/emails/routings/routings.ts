// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutingsAPI from 'cloudflare/resources/emails/routings/routings';
import * as AddressesAPI from 'cloudflare/resources/emails/routings/addresses';
import * as DisablesAPI from 'cloudflare/resources/emails/routings/disables';
import * as DNSAPI from 'cloudflare/resources/emails/routings/dns';
import * as EnablesAPI from 'cloudflare/resources/emails/routings/enables';
import * as RulesAPI from 'cloudflare/resources/emails/routings/rules/rules';

export class Routings extends APIResource {
  disables: DisablesAPI.Disables = new DisablesAPI.Disables(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  enables: EnablesAPI.Enables = new EnablesAPI.Enables(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * Get information about the settings for your Email Routing zone.
   */
  emailRoutingSettingsGetEmailRoutingSettings(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing`, options) as Core.APIPromise<{
        result: RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse {
  /**
   * Email Routing settings identifier.
   */
  id?: string;

  /**
   * The date and time the settings have been created.
   */
  created?: string;

  /**
   * State of the zone settings for Email Routing.
   */
  enabled?: true | false;

  /**
   * The date and time the settings have been modified.
   */
  modified?: string;

  /**
   * Domain of your zone.
   */
  name?: string;

  /**
   * Flag to check if the user skipped the configuration wizard.
   */
  skip_wizard?: true | false;

  /**
   * Show the state of your account, and the type or configuration error.
   */
  status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

  /**
   * Email Routing settings tag. (Deprecated, replaced by Email Routing settings
   * identifier)
   */
  tag?: string;
}

export namespace Routings {
  export import RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse = RoutingsAPI.RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse;
  export import Disables = DisablesAPI.Disables;
  export import DisableEmailRoutingSettingsDisableEmailRoutingResponse = DisablesAPI.DisableEmailRoutingSettingsDisableEmailRoutingResponse;
  export import DNS = DNSAPI.DNS;
  export import DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse = DNSAPI.DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse;
  export import Enables = EnablesAPI.Enables;
  export import EnableEmailRoutingSettingsEnableEmailRoutingResponse = EnablesAPI.EnableEmailRoutingSettingsEnableEmailRoutingResponse;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesResponse = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleParams = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleParams;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesParams = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesParams;
  export import Addresses = AddressesAPI.Addresses;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse;
  export import AddressGetResponse = AddressesAPI.AddressGetResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesParams = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesParams;
}
