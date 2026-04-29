// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AllowPoliciesAPI from './allow-policies';
import { AllowPolicies, BaseAllowPolicies } from './allow-policies';
import * as BlockSendersAPI from './block-senders';
import { BaseBlockSenders, BlockSenders } from './block-senders';
import * as DomainsAPI from './domains';
import { BaseDomains, Domains } from './domains';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import { BaseImpersonationRegistry, ImpersonationRegistry } from './impersonation-registry';
import * as TrustedDomainsAPI from './trusted-domains';
import { BaseTrustedDomains, TrustedDomains } from './trusted-domains';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings'] = Object.freeze([
    'emailSecurity',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {
  allowPolicies: AllowPoliciesAPI.AllowPolicies = new AllowPoliciesAPI.AllowPolicies(this._client);
  blockSenders: BlockSendersAPI.BlockSenders = new BlockSendersAPI.BlockSenders(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  impersonationRegistry: ImpersonationRegistryAPI.ImpersonationRegistry =
    new ImpersonationRegistryAPI.ImpersonationRegistry(this._client);
  trustedDomains: TrustedDomainsAPI.TrustedDomains = new TrustedDomainsAPI.TrustedDomains(this._client);
}

Settings.AllowPolicies = AllowPolicies;
Settings.BaseAllowPolicies = BaseAllowPolicies;
Settings.BlockSenders = BlockSenders;
Settings.BaseBlockSenders = BaseBlockSenders;
Settings.Domains = Domains;
Settings.BaseDomains = BaseDomains;
Settings.ImpersonationRegistry = ImpersonationRegistry;
Settings.BaseImpersonationRegistry = BaseImpersonationRegistry;
Settings.TrustedDomains = TrustedDomains;
Settings.BaseTrustedDomains = BaseTrustedDomains;

export declare namespace Settings {
  export { AllowPolicies as AllowPolicies, BaseAllowPolicies as BaseAllowPolicies };

  export { BlockSenders as BlockSenders, BaseBlockSenders as BaseBlockSenders };

  export { Domains as Domains, BaseDomains as BaseDomains };

  export {
    ImpersonationRegistry as ImpersonationRegistry,
    BaseImpersonationRegistry as BaseImpersonationRegistry,
  };

  export { TrustedDomains as TrustedDomains, BaseTrustedDomains as BaseTrustedDomains };
}
