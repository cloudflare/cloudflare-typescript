// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AllowPatternsAPI from './allow-patterns';
import * as BlockSendersAPI from './block-senders';
import * as DomainsAPI from './domains';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import * as TrustedDomainsAPI from './trusted-domains';

export class Settings extends APIResource {
  allowPatterns: AllowPatternsAPI.AllowPatterns = new AllowPatternsAPI.AllowPatterns(this._client);
  blockSenders: BlockSendersAPI.BlockSenders = new BlockSendersAPI.BlockSenders(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  impersonationRegistry: ImpersonationRegistryAPI.ImpersonationRegistry =
    new ImpersonationRegistryAPI.ImpersonationRegistry(this._client);
  trustedDomains: TrustedDomainsAPI.TrustedDomains = new TrustedDomainsAPI.TrustedDomains(this._client);
}

export namespace Settings {
  export import AllowPatterns = AllowPatternsAPI.AllowPatterns;
  export import AllowPatternCreateResponse = AllowPatternsAPI.AllowPatternCreateResponse;
  export import AllowPatternListResponse = AllowPatternsAPI.AllowPatternListResponse;
  export import AllowPatternDeleteResponse = AllowPatternsAPI.AllowPatternDeleteResponse;
  export import AllowPatternEditResponse = AllowPatternsAPI.AllowPatternEditResponse;
  export import AllowPatternGetResponse = AllowPatternsAPI.AllowPatternGetResponse;
  export import AllowPatternListResponsesV4PagePaginationArray = AllowPatternsAPI.AllowPatternListResponsesV4PagePaginationArray;
  export import AllowPatternCreateParams = AllowPatternsAPI.AllowPatternCreateParams;
  export import AllowPatternListParams = AllowPatternsAPI.AllowPatternListParams;
  export import AllowPatternDeleteParams = AllowPatternsAPI.AllowPatternDeleteParams;
  export import AllowPatternEditParams = AllowPatternsAPI.AllowPatternEditParams;
  export import AllowPatternGetParams = AllowPatternsAPI.AllowPatternGetParams;
  export import BlockSenders = BlockSendersAPI.BlockSenders;
  export import BlockSenderCreateResponse = BlockSendersAPI.BlockSenderCreateResponse;
  export import BlockSenderListResponse = BlockSendersAPI.BlockSenderListResponse;
  export import BlockSenderDeleteResponse = BlockSendersAPI.BlockSenderDeleteResponse;
  export import BlockSenderEditResponse = BlockSendersAPI.BlockSenderEditResponse;
  export import BlockSenderGetResponse = BlockSendersAPI.BlockSenderGetResponse;
  export import BlockSenderListResponsesV4PagePaginationArray = BlockSendersAPI.BlockSenderListResponsesV4PagePaginationArray;
  export import BlockSenderCreateParams = BlockSendersAPI.BlockSenderCreateParams;
  export import BlockSenderListParams = BlockSendersAPI.BlockSenderListParams;
  export import BlockSenderDeleteParams = BlockSendersAPI.BlockSenderDeleteParams;
  export import BlockSenderEditParams = BlockSendersAPI.BlockSenderEditParams;
  export import BlockSenderGetParams = BlockSendersAPI.BlockSenderGetParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainListResponsesV4PagePaginationArray = DomainsAPI.DomainListResponsesV4PagePaginationArray;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
  export import ImpersonationRegistry = ImpersonationRegistryAPI.ImpersonationRegistry;
  export import ImpersonationRegistryCreateResponse = ImpersonationRegistryAPI.ImpersonationRegistryCreateResponse;
  export import ImpersonationRegistryListResponse = ImpersonationRegistryAPI.ImpersonationRegistryListResponse;
  export import ImpersonationRegistryDeleteResponse = ImpersonationRegistryAPI.ImpersonationRegistryDeleteResponse;
  export import ImpersonationRegistryEditResponse = ImpersonationRegistryAPI.ImpersonationRegistryEditResponse;
  export import ImpersonationRegistryGetResponse = ImpersonationRegistryAPI.ImpersonationRegistryGetResponse;
  export import ImpersonationRegistryListResponsesV4PagePaginationArray = ImpersonationRegistryAPI.ImpersonationRegistryListResponsesV4PagePaginationArray;
  export import ImpersonationRegistryCreateParams = ImpersonationRegistryAPI.ImpersonationRegistryCreateParams;
  export import ImpersonationRegistryListParams = ImpersonationRegistryAPI.ImpersonationRegistryListParams;
  export import ImpersonationRegistryDeleteParams = ImpersonationRegistryAPI.ImpersonationRegistryDeleteParams;
  export import ImpersonationRegistryEditParams = ImpersonationRegistryAPI.ImpersonationRegistryEditParams;
  export import ImpersonationRegistryGetParams = ImpersonationRegistryAPI.ImpersonationRegistryGetParams;
  export import TrustedDomains = TrustedDomainsAPI.TrustedDomains;
  export import TrustedDomainCreateResponse = TrustedDomainsAPI.TrustedDomainCreateResponse;
  export import TrustedDomainListResponse = TrustedDomainsAPI.TrustedDomainListResponse;
  export import TrustedDomainDeleteResponse = TrustedDomainsAPI.TrustedDomainDeleteResponse;
  export import TrustedDomainEditResponse = TrustedDomainsAPI.TrustedDomainEditResponse;
  export import TrustedDomainGetResponse = TrustedDomainsAPI.TrustedDomainGetResponse;
  export import TrustedDomainListResponsesV4PagePaginationArray = TrustedDomainsAPI.TrustedDomainListResponsesV4PagePaginationArray;
  export import TrustedDomainCreateParams = TrustedDomainsAPI.TrustedDomainCreateParams;
  export import TrustedDomainListParams = TrustedDomainsAPI.TrustedDomainListParams;
  export import TrustedDomainDeleteParams = TrustedDomainsAPI.TrustedDomainDeleteParams;
  export import TrustedDomainEditParams = TrustedDomainsAPI.TrustedDomainEditParams;
  export import TrustedDomainGetParams = TrustedDomainsAPI.TrustedDomainGetParams;
}
