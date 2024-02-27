// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ARCAPI from 'cloudflare/resources/radar/email/security/top/ases/arc';
import * as DKIMAPI from 'cloudflare/resources/radar/email/security/top/ases/dkim';
import * as DMARCAPI from 'cloudflare/resources/radar/email/security/top/ases/dmarc';
import * as MaliciousAPI from 'cloudflare/resources/radar/email/security/top/ases/malicious';
import * as SpamAPI from 'cloudflare/resources/radar/email/security/top/ases/spam';
import * as SPFAPI from 'cloudflare/resources/radar/email/security/top/ases/spf';

export class Ases extends APIResource {
  arc: ARCAPI.ARC = new ARCAPI.ARC(this._client);
  dkim: DKIMAPI.DKIM = new DKIMAPI.DKIM(this._client);
  dmarc: DMARCAPI.DMARC = new DMARCAPI.DMARC(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);
}

export namespace Ases {
  export import ARC = ARCAPI.ARC;
  export import DKIM = DKIMAPI.DKIM;
  export import DMARC = DMARCAPI.DMARC;
  export import Malicious = MaliciousAPI.Malicious;
  export import Spam = SpamAPI.Spam;
  export import SPF = SPFAPI.SPF;
}
