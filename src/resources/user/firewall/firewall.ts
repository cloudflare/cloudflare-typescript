// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/user/firewall/access-rules/access-rules';

export class Firewall extends APIResource {
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
}

export namespace Firewall {
  export import AccessRules = AccessRulesAPI.AccessRules;
}
