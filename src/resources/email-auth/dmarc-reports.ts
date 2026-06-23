// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DMARCReports extends APIResource {
  /**
   * Updates the DMARC report configuration for a zone. At least one of `enabled` or
   * `skip_wizard` must be provided. When enabling, the handler will ensure the DMARC
   * RUA record exists in DNS.
   *
   * @example
   * ```ts
   * const response = await client.emailAuth.dmarcReports.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  edit(
    params: DMARCReportEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DMARCReportEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/email/auth/dmarc-reports`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DMARCReportEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the current DMARC report configuration and status for a zone. Returns
   * the RUA prefix, enabled status, approved sources, and DNS records.
   *
   * @example
   * ```ts
   * const dmarcReport = await client.emailAuth.dmarcReports.get(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(params: DMARCReportGetParams, options?: Core.RequestOptions): Core.APIPromise<DMARCReportGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/auth/dmarc-reports`, options) as Core.APIPromise<{
        result: DMARCReportGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Response for GET/PATCH /dmarc-reports
 */
export interface DMARCReportEditResponse {
  /**
   * List of approved sending sources (omitted when empty)
   */
  approved_sources?: Array<DMARCReportEditResponse.ApprovedSource>;

  /**
   * @deprecated Deprecated, use created_at
   */
  created?: string;

  /**
   * Creation timestamp
   */
  created_at?: string;

  /**
   * Whether DMARC reports are enabled
   */
  enabled?: boolean;

  /**
   * @deprecated Deprecated, use modified_at
   */
  modified?: string;

  /**
   * Last modification timestamp
   */
  modified_at?: string;

  /**
   * Live DNS records for the zone, grouped by type
   */
  records?: DMARCReportEditResponse.Records;

  /**
   * Prefix for DMARC RUA addresses (32-char hex string)
   */
  rua_prefix?: string;

  /**
   * Whether to skip the setup wizard
   */
  skip_wizard?: boolean;

  /**
   * DMARC configuration status
   */
  status?: 'missing-dmarc-report' | 'multiple-dmarc-reports' | 'missing-dmarc-rua' | 'cname-on-dmarc-record';

  /**
   * @deprecated Use `zone_id` instead
   */
  tag?: string;

  /**
   * Zone identifier
   */
  zone_id?: string;
}

export namespace DMARCReportEditResponse {
  /**
   * A single approved sending source
   */
  export interface ApprovedSource {
    /**
     * @deprecated Deprecated, use created_at
     */
    created?: string;

    /**
     * Creation timestamp
     */
    created_at?: string;

    /**
     * The source domain
     */
    domain?: string;

    /**
     * Resolved IP addresses from SPF
     */
    ips?: Array<string>;

    /**
     * @deprecated Deprecated, use modified_at
     */
    modified?: string;

    /**
     * Last modification timestamp
     */
    modified_at?: string;

    /**
     * Source name (typically same as domain)
     */
    name?: string;

    /**
     * URL-friendly identifier
     */
    slug?: string;

    /**
     * Source UUID
     */
    tag?: string;
  }

  /**
   * Live DNS records for the zone, grouped by type
   */
  export interface Records {
    /**
     * BIMI TXT records
     */
    bimi_records?: Array<Records.BimiRecord>;

    /**
     * CNAME records for DKIM
     */
    cname_dkim_records?: Array<Records.CnamedkimRecord>;

    /**
     * CNAME records at \_dmarc (problematic)
     */
    cname_dmarc_records?: Array<Records.CnamedmarcRecord>;

    /**
     * CNAME records for SPF
     */
    cname_spf_records?: Array<Records.CnamespfRecord>;

    /**
     * DKIM TXT records
     */
    dkim_records?: Array<Records.DKIMRecord>;

    /**
     * DMARC TXT records
     */
    dmarc_records?: Array<Records.DMARCRecord>;

    /**
     * SPF TXT records
     */
    spf_records?: Array<Records.SPFRecord>;
  }

  export namespace Records {
    /**
     * Summary of a single DNS record
     */
    export interface BimiRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamedkimRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamedmarcRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamespfRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface DKIMRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface DMARCRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface SPFRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }
  }
}

/**
 * Response for GET/PATCH /dmarc-reports
 */
export interface DMARCReportGetResponse {
  /**
   * List of approved sending sources (omitted when empty)
   */
  approved_sources?: Array<DMARCReportGetResponse.ApprovedSource>;

  /**
   * @deprecated Deprecated, use created_at
   */
  created?: string;

  /**
   * Creation timestamp
   */
  created_at?: string;

  /**
   * Whether DMARC reports are enabled
   */
  enabled?: boolean;

  /**
   * @deprecated Deprecated, use modified_at
   */
  modified?: string;

  /**
   * Last modification timestamp
   */
  modified_at?: string;

  /**
   * Live DNS records for the zone, grouped by type
   */
  records?: DMARCReportGetResponse.Records;

  /**
   * Prefix for DMARC RUA addresses (32-char hex string)
   */
  rua_prefix?: string;

  /**
   * Whether to skip the setup wizard
   */
  skip_wizard?: boolean;

  /**
   * DMARC configuration status
   */
  status?: 'missing-dmarc-report' | 'multiple-dmarc-reports' | 'missing-dmarc-rua' | 'cname-on-dmarc-record';

  /**
   * @deprecated Use `zone_id` instead
   */
  tag?: string;

  /**
   * Zone identifier
   */
  zone_id?: string;
}

export namespace DMARCReportGetResponse {
  /**
   * A single approved sending source
   */
  export interface ApprovedSource {
    /**
     * @deprecated Deprecated, use created_at
     */
    created?: string;

    /**
     * Creation timestamp
     */
    created_at?: string;

    /**
     * The source domain
     */
    domain?: string;

    /**
     * Resolved IP addresses from SPF
     */
    ips?: Array<string>;

    /**
     * @deprecated Deprecated, use modified_at
     */
    modified?: string;

    /**
     * Last modification timestamp
     */
    modified_at?: string;

    /**
     * Source name (typically same as domain)
     */
    name?: string;

    /**
     * URL-friendly identifier
     */
    slug?: string;

    /**
     * Source UUID
     */
    tag?: string;
  }

  /**
   * Live DNS records for the zone, grouped by type
   */
  export interface Records {
    /**
     * BIMI TXT records
     */
    bimi_records?: Array<Records.BimiRecord>;

    /**
     * CNAME records for DKIM
     */
    cname_dkim_records?: Array<Records.CnamedkimRecord>;

    /**
     * CNAME records at \_dmarc (problematic)
     */
    cname_dmarc_records?: Array<Records.CnamedmarcRecord>;

    /**
     * CNAME records for SPF
     */
    cname_spf_records?: Array<Records.CnamespfRecord>;

    /**
     * DKIM TXT records
     */
    dkim_records?: Array<Records.DKIMRecord>;

    /**
     * DMARC TXT records
     */
    dmarc_records?: Array<Records.DMARCRecord>;

    /**
     * SPF TXT records
     */
    spf_records?: Array<Records.SPFRecord>;
  }

  export namespace Records {
    /**
     * Summary of a single DNS record
     */
    export interface BimiRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamedkimRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamedmarcRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface CnamespfRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface DKIMRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface DMARCRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }

    /**
     * Summary of a single DNS record
     */
    export interface SPFRecord {
      /**
       * DNS record ID
       */
      id?: string;

      /**
       * Record content
       */
      content?: string;

      /**
       * DNS record name
       */
      name?: string;

      /**
       * Time to live in seconds
       */
      ttl?: number;

      /**
       * Record type
       */
      type?: string;
    }
  }
}

export interface DMARCReportEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Enable or disable DMARC reports for this zone
   */
  enabled?: boolean | null;

  /**
   * Body param: Skip the DMARC setup wizard
   */
  skip_wizard?: boolean | null;
}

export interface DMARCReportGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace DMARCReports {
  export {
    type DMARCReportEditResponse as DMARCReportEditResponse,
    type DMARCReportGetResponse as DMARCReportGetResponse,
    type DMARCReportEditParams as DMARCReportEditParams,
    type DMARCReportGetParams as DMARCReportGetParams,
  };
}
