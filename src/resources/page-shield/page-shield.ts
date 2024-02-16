// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/page-shield/connections';
import * as PoliciesAPI from 'cloudflare/resources/page-shield/policies';

export class PageShield extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

export namespace PageShield {
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
