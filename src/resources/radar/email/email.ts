// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SecurityAPI from 'cloudflare/resources/radar/email/security/security';

export class Email extends APIResource {
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export namespace Email {
  export import Security = SecurityAPI.Security;
}
