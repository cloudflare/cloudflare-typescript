// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SecurityAPI from 'cloudflare/resources/radar/emails/security/security';

export class Emails extends APIResource {
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export namespace Emails {
  export import Security = SecurityAPI.Security;
}
