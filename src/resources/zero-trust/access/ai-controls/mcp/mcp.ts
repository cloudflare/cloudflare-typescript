// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as PortalsAPI from './portals';
import {
  PortalCreateParams,
  PortalCreateResponse,
  PortalDeleteParams,
  PortalDeleteResponse,
  PortalListParams,
  PortalListResponse,
  PortalListResponsesV4PagePaginationArray,
  PortalReadParams,
  PortalReadResponse,
  PortalUpdateParams,
  PortalUpdateResponse,
  Portals,
} from './portals';
import * as ServersAPI from './servers';
import {
  ServerCreateParams,
  ServerCreateResponse,
  ServerDeleteParams,
  ServerDeleteResponse,
  ServerListParams,
  ServerListResponse,
  ServerListResponsesV4PagePaginationArray,
  ServerReadParams,
  ServerReadResponse,
  ServerSyncParams,
  ServerSyncResponse,
  ServerUpdateParams,
  ServerUpdateResponse,
  Servers,
} from './servers';

export class Mcp extends APIResource {
  portals: PortalsAPI.Portals = new PortalsAPI.Portals(this._client);
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
}

Mcp.Portals = Portals;
Mcp.PortalListResponsesV4PagePaginationArray = PortalListResponsesV4PagePaginationArray;
Mcp.Servers = Servers;
Mcp.ServerListResponsesV4PagePaginationArray = ServerListResponsesV4PagePaginationArray;

export declare namespace Mcp {
  export {
    Portals as Portals,
    type PortalCreateResponse as PortalCreateResponse,
    type PortalUpdateResponse as PortalUpdateResponse,
    type PortalListResponse as PortalListResponse,
    type PortalDeleteResponse as PortalDeleteResponse,
    type PortalReadResponse as PortalReadResponse,
    PortalListResponsesV4PagePaginationArray as PortalListResponsesV4PagePaginationArray,
    type PortalCreateParams as PortalCreateParams,
    type PortalUpdateParams as PortalUpdateParams,
    type PortalListParams as PortalListParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalReadParams as PortalReadParams,
  };

  export {
    Servers as Servers,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerReadResponse as ServerReadResponse,
    type ServerSyncResponse as ServerSyncResponse,
    ServerListResponsesV4PagePaginationArray as ServerListResponsesV4PagePaginationArray,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerDeleteParams as ServerDeleteParams,
    type ServerReadParams as ServerReadParams,
    type ServerSyncParams as ServerSyncParams,
  };
}
