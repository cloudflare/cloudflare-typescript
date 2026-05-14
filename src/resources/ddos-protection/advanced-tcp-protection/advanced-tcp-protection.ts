// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as StatusAPI from './status';
import { Status, StatusEditParams, StatusEditResponse, StatusGetParams, StatusGetResponse } from './status';
import * as AllowlistAPI from './allowlist/allowlist';
import {
  Allowlist,
  AllowlistBulkDeleteParams,
  AllowlistBulkDeleteResponse,
  AllowlistCreateParams,
  AllowlistCreateResponse,
  AllowlistListParams,
  AllowlistListResponse,
  AllowlistListResponsesV4PagePaginationArray,
} from './allowlist/allowlist';
import * as PrefixesAPI from './prefixes/prefixes';
import {
  PrefixBulkCreateParams,
  PrefixBulkCreateResponse,
  PrefixBulkCreateResponsesSinglePage,
  PrefixBulkDeleteParams,
  PrefixBulkDeleteResponse,
  PrefixCreateParams,
  PrefixCreateResponse,
  PrefixListParams,
  PrefixListResponse,
  PrefixListResponsesV4PagePaginationArray,
  Prefixes,
} from './prefixes/prefixes';
import * as SynProtectionAPI from './syn-protection/syn-protection';
import { SynProtection } from './syn-protection/syn-protection';
import * as TCPFlowProtectionAPI from './tcp-flow-protection/tcp-flow-protection';
import { TCPFlowProtection } from './tcp-flow-protection/tcp-flow-protection';

export class AdvancedTCPProtection extends APIResource {
  allowlist: AllowlistAPI.Allowlist = new AllowlistAPI.Allowlist(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  synProtection: SynProtectionAPI.SynProtection = new SynProtectionAPI.SynProtection(this._client);
  tcpFlowProtection: TCPFlowProtectionAPI.TCPFlowProtection = new TCPFlowProtectionAPI.TCPFlowProtection(
    this._client,
  );
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

AdvancedTCPProtection.Allowlist = Allowlist;
AdvancedTCPProtection.AllowlistListResponsesV4PagePaginationArray =
  AllowlistListResponsesV4PagePaginationArray;
AdvancedTCPProtection.Prefixes = Prefixes;
AdvancedTCPProtection.PrefixListResponsesV4PagePaginationArray = PrefixListResponsesV4PagePaginationArray;
AdvancedTCPProtection.PrefixBulkCreateResponsesSinglePage = PrefixBulkCreateResponsesSinglePage;
AdvancedTCPProtection.SynProtection = SynProtection;
AdvancedTCPProtection.TCPFlowProtection = TCPFlowProtection;
AdvancedTCPProtection.Status = Status;

export declare namespace AdvancedTCPProtection {
  export {
    Allowlist as Allowlist,
    type AllowlistCreateResponse as AllowlistCreateResponse,
    type AllowlistListResponse as AllowlistListResponse,
    type AllowlistBulkDeleteResponse as AllowlistBulkDeleteResponse,
    AllowlistListResponsesV4PagePaginationArray as AllowlistListResponsesV4PagePaginationArray,
    type AllowlistCreateParams as AllowlistCreateParams,
    type AllowlistListParams as AllowlistListParams,
    type AllowlistBulkDeleteParams as AllowlistBulkDeleteParams,
  };

  export {
    Prefixes as Prefixes,
    type PrefixCreateResponse as PrefixCreateResponse,
    type PrefixListResponse as PrefixListResponse,
    type PrefixBulkCreateResponse as PrefixBulkCreateResponse,
    type PrefixBulkDeleteResponse as PrefixBulkDeleteResponse,
    PrefixListResponsesV4PagePaginationArray as PrefixListResponsesV4PagePaginationArray,
    PrefixBulkCreateResponsesSinglePage as PrefixBulkCreateResponsesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixBulkCreateParams as PrefixBulkCreateParams,
    type PrefixBulkDeleteParams as PrefixBulkDeleteParams,
  };

  export { SynProtection as SynProtection };

  export { TCPFlowProtection as TCPFlowProtection };

  export {
    Status as Status,
    type StatusEditResponse as StatusEditResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusEditParams as StatusEditParams,
    type StatusGetParams as StatusGetParams,
  };
}
