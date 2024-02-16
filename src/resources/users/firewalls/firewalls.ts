// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccessRulesAPI from 'cloudflare/resources/users/firewalls/access-rules/access-rules';

export class Firewalls extends APIResource {
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
}

export namespace Firewalls {
  export import AccessRules = AccessRulesAPI.AccessRules;
}
