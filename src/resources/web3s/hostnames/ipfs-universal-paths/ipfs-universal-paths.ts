// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentListsAPI from 'cloudflare/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists';

export class IpfsUniversalPaths extends APIResource {
  contentLists: ContentListsAPI.ContentLists = new ContentListsAPI.ContentLists(this._client);
}

export namespace IpfsUniversalPaths {
  export import ContentLists = ContentListsAPI.ContentLists;
  export import ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse = ContentListsAPI.ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse;
  export import ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse = ContentListsAPI.ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse;
  export import ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams = ContentListsAPI.ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListParams;
}
