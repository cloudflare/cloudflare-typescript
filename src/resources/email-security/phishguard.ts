// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PhishguardAPI from './phishguard';
import { SinglePage } from '../../pagination';

export class Phishguard extends APIResource {
  /**
   * Get PhishGuard reports
   */
  list(params: PhishguardListParams, options?: Core.RequestOptions): Core.PagePromise<PhishguardListResponsesSinglePage, PhishguardListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/email-security/phishguard/reports`, PhishguardListResponsesSinglePage, { query, ...options });
  }
}

export class PhishguardListResponsesSinglePage extends SinglePage<PhishguardListResponse> {
}

export interface PhishguardListResponse {
  id: number;

  content: string;

  disposition: 'MALICIOUS' | 'MALICIOUS-BEC' | 'SUSPICIOUS' | 'SPOOF' | 'SPAM' | 'BULK' | 'ENCRYPTED' | 'EXTERNAL' | 'UNKNOWN' | 'NONE';

  fields: PhishguardListResponse.Fields;

  priority: string;

  title: string;

  ts: string;

  tags?: Array<PhishguardListResponse.Tag> | null;
}

export namespace PhishguardListResponse {
  export interface Fields {
    postfix_id: string;

    to: Array<string>;

    ts: string;

    from?: string | null;
  }

  export interface Tag {
    category: string;

    value: string;
  }
}

export interface PhishguardListParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  from_date: string;

  /**
   * Query param:
   */
  to_date: string;
}

export namespace Phishguard {
  export import PhishguardListResponse = PhishguardAPI.PhishguardListResponse;
  export import PhishguardListResponsesSinglePage = PhishguardAPI.PhishguardListResponsesSinglePage;
  export import PhishguardListParams = PhishguardAPI.PhishguardListParams;
}
