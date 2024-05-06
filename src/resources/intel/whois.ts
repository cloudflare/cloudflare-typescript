// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as WhoisAPI from 'cloudflare/resources/intel/whois';

export class Whois extends APIResource {}

export interface Whois {
  created_date?: string;

  domain?: string;

  nameservers?: Array<string>;

  registrant?: string;

  registrant_country?: string;

  registrant_email?: string;

  registrant_org?: string;

  registrar?: string;

  updated_date?: string;
}

export namespace Whois {
  export import Whois = WhoisAPI.Whois;
}
