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
  export type AllowPatternCreateResponse = AllowPatternsAPI.AllowPatternCreateResponse;
  export type AllowPatternListResponse = AllowPatternsAPI.AllowPatternListResponse;
  export type AllowPatternDeleteResponse = AllowPatternsAPI.AllowPatternDeleteResponse;
  export type AllowPatternEditResponse = AllowPatternsAPI.AllowPatternEditResponse;
  export type AllowPatternGetResponse = AllowPatternsAPI.AllowPatternGetResponse;
  export import AllowPatternListResponsesV4PagePaginationArray = AllowPatternsAPI.AllowPatternListResponsesV4PagePaginationArray;
  export type AllowPatternCreateParams = AllowPatternsAPI.AllowPatternCreateParams;
  export type AllowPatternListParams = AllowPatternsAPI.AllowPatternListParams;
  export type AllowPatternDeleteParams = AllowPatternsAPI.AllowPatternDeleteParams;
  export type AllowPatternEditParams = AllowPatternsAPI.AllowPatternEditParams;
  export type AllowPatternGetParams = AllowPatternsAPI.AllowPatternGetParams;
  export import BlockSenders = BlockSendersAPI.BlockSenders;
  export type BlockSenderCreateResponse = BlockSendersAPI.BlockSenderCreateResponse;
  export type BlockSenderListResponse = BlockSendersAPI.BlockSenderListResponse;
  export type BlockSenderDeleteResponse = BlockSendersAPI.BlockSenderDeleteResponse;
  export type BlockSenderEditResponse = BlockSendersAPI.BlockSenderEditResponse;
  export type BlockSenderGetResponse = BlockSendersAPI.BlockSenderGetResponse;
  export import BlockSenderListResponsesV4PagePaginationArray = BlockSendersAPI.BlockSenderListResponsesV4PagePaginationArray;
  export type BlockSenderCreateParams = BlockSendersAPI.BlockSenderCreateParams;
  export type BlockSenderListParams = BlockSendersAPI.BlockSenderListParams;
  export type BlockSenderDeleteParams = BlockSendersAPI.BlockSenderDeleteParams;
  export type BlockSenderEditParams = BlockSendersAPI.BlockSenderEditParams;
  export type BlockSenderGetParams = BlockSendersAPI.BlockSenderGetParams;
  export import Domains = DomainsAPI.Domains;
  export type DomainListResponse = DomainsAPI.DomainListResponse;
  export type DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export type DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainListResponsesV4PagePaginationArray = DomainsAPI.DomainListResponsesV4PagePaginationArray;
  export type DomainListParams = DomainsAPI.DomainListParams;
  export type DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export type DomainEditParams = DomainsAPI.DomainEditParams;
  export import ImpersonationRegistry = ImpersonationRegistryAPI.ImpersonationRegistry;
  export type ImpersonationRegistryCreateResponse =
    ImpersonationRegistryAPI.ImpersonationRegistryCreateResponse;
  export type ImpersonationRegistryListResponse = ImpersonationRegistryAPI.ImpersonationRegistryListResponse;
  export type ImpersonationRegistryDeleteResponse =
    ImpersonationRegistryAPI.ImpersonationRegistryDeleteResponse;
  export type ImpersonationRegistryEditResponse = ImpersonationRegistryAPI.ImpersonationRegistryEditResponse;
  export type ImpersonationRegistryGetResponse = ImpersonationRegistryAPI.ImpersonationRegistryGetResponse;
  export import ImpersonationRegistryListResponsesV4PagePaginationArray = ImpersonationRegistryAPI.ImpersonationRegistryListResponsesV4PagePaginationArray;
  export type ImpersonationRegistryCreateParams = ImpersonationRegistryAPI.ImpersonationRegistryCreateParams;
  export type ImpersonationRegistryListParams = ImpersonationRegistryAPI.ImpersonationRegistryListParams;
  export type ImpersonationRegistryDeleteParams = ImpersonationRegistryAPI.ImpersonationRegistryDeleteParams;
  export type ImpersonationRegistryEditParams = ImpersonationRegistryAPI.ImpersonationRegistryEditParams;
  export type ImpersonationRegistryGetParams = ImpersonationRegistryAPI.ImpersonationRegistryGetParams;
  export import TrustedDomains = TrustedDomainsAPI.TrustedDomains;
  export type TrustedDomainCreateResponse = TrustedDomainsAPI.TrustedDomainCreateResponse;
  export type TrustedDomainListResponse = TrustedDomainsAPI.TrustedDomainListResponse;
  export type TrustedDomainDeleteResponse = TrustedDomainsAPI.TrustedDomainDeleteResponse;
  export type TrustedDomainEditResponse = TrustedDomainsAPI.TrustedDomainEditResponse;
  export type TrustedDomainGetResponse = TrustedDomainsAPI.TrustedDomainGetResponse;
  export import TrustedDomainListResponsesV4PagePaginationArray = TrustedDomainsAPI.TrustedDomainListResponsesV4PagePaginationArray;
  export type TrustedDomainCreateParams = TrustedDomainsAPI.TrustedDomainCreateParams;
  export type TrustedDomainListParams = TrustedDomainsAPI.TrustedDomainListParams;
  export type TrustedDomainDeleteParams = TrustedDomainsAPI.TrustedDomainDeleteParams;
  export type TrustedDomainEditParams = TrustedDomainsAPI.TrustedDomainEditParams;
  export type TrustedDomainGetParams = TrustedDomainsAPI.TrustedDomainGetParams;
}
