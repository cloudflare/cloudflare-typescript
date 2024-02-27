// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ARCAPI from 'cloudflare/resources/radar/email/security/top/locations/arc';
import * as DKIMAPI from 'cloudflare/resources/radar/email/security/top/locations/dkim';
import * as DMARCAPI from 'cloudflare/resources/radar/email/security/top/locations/dmarc';
import * as MaliciousAPI from 'cloudflare/resources/radar/email/security/top/locations/malicious';
import * as SpamAPI from 'cloudflare/resources/radar/email/security/top/locations/spam';
import * as SPFAPI from 'cloudflare/resources/radar/email/security/top/locations/spf';

export class Locations extends APIResource {
  arc: ARCAPI.ARC = new ARCAPI.ARC(this._client);
  dkim: DKIMAPI.DKIM = new DKIMAPI.DKIM(this._client);
  dmarc: DMARCAPI.DMARC = new DMARCAPI.DMARC(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);
}

export namespace Locations {
  export import ARC = ARCAPI.ARC;
  export import DKIM = DKIMAPI.DKIM;
  export import DMARC = DMARCAPI.DMARC;
  export import Malicious = MaliciousAPI.Malicious;
  export import Spam = SpamAPI.Spam;
  export import SPF = SPFAPI.SPF;
}
