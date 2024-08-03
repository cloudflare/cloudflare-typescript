// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ScansAPI from './scans';
import { type Response as FetchResponse } from '../../_shims/index';

export class Scans extends APIResource {
  /**
   * Submit a URL to scan. You can also set some options, like the visibility level
   * and custom headers. Accounts are limited to 1 new scan every 10 seconds and 8000
   * per month. If you need more, please reach out.
   */
  create(
    accountId: string,
    body: ScanCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScanCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/urlscanner/scan`, { body, ...options }) as Core.APIPromise<{
        result: ScanCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get URL scan by uuid
   */
  get(
    accountId: string,
    scanId: string,
    query?: ScanGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScanGetResponse>;
  get(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<ScanGetResponse>;
  get(
    accountId: string,
    scanId: string,
    query: ScanGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScanGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountId, scanId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/urlscanner/scan/${scanId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ScanGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a URL scan's HAR file. See HAR spec at
   * http://www.softwareishard.com/blog/har-12-spec/.
   */
  har(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<ScanHarResponse> {
    return (
      this._client.get(`/accounts/${accountId}/urlscanner/scan/${scanId}/har`, options) as Core.APIPromise<{
        result: ScanHarResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get scan's screenshot by resolution (desktop/mobile/tablet).
   */
  screenshot(
    accountId: string,
    scanId: string,
    query?: ScanScreenshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FetchResponse>;
  screenshot(
    accountId: string,
    scanId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FetchResponse>;
  screenshot(
    accountId: string,
    scanId: string,
    query: ScanScreenshotParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FetchResponse> {
    if (isRequestOptions(query)) {
      return this.screenshot(accountId, scanId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/urlscanner/scan/${scanId}/screenshot`, {
      query,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface URLScannerDomain {
  id: number;

  name: string;

  super_category_id?: number;
}

export interface URLScannerTask {
  effectiveUrl: string;

  errors: Array<URLScannerTask.Error>;

  location: string;

  region: string;

  status: string;

  success: boolean;

  time: string;

  url: string;

  uuid: string;

  visibility: string;
}

export namespace URLScannerTask {
  export interface Error {
    message: string;
  }
}

export interface ScanCreateResponse {
  /**
   * Time when url was submitted for scanning.
   */
  time: string;

  /**
   * Canonical form of submitted URL. Use this if you want to later search by URL.
   */
  url: string;

  /**
   * Scan ID.
   */
  uuid: string;

  /**
   * Submitted visibility status.
   */
  visibility: string;
}

export interface ScanGetResponse {
  scan: ScanGetResponse.Scan;
}

export namespace ScanGetResponse {
  export interface Scan {
    certificates: Array<Scan.Certificate>;

    geo: Scan.Geo;

    meta: Scan.Meta;

    page: Scan.Page;

    performance: Array<Scan.Performance>;

    task: Scan.Task;

    verdicts: Scan.Verdicts;

    /**
     * Dictionary of Autonomous System Numbers where ASN's are the keys
     */
    asns?: Scan.ASNs;

    domains?: Scan.Domains;

    ips?: Scan.IPs;

    links?: Scan.Links;
  }

  export namespace Scan {
    export interface Certificate {
      issuer: string;

      subjectName: string;

      validFrom: number;

      validTo: number;
    }

    export interface Geo {
      /**
       * GeoIP continent location
       */
      continents: Array<string>;

      /**
       * GeoIP country location
       */
      locations: Array<string>;
    }

    export interface Meta {
      processors: Meta.Processors;
    }

    export namespace Meta {
      export interface Processors {
        categories: Processors.Categories;

        phishing: Array<string>;

        rank: Processors.Rank;

        tech: Array<Processors.Tech>;
      }

      export namespace Processors {
        export interface Categories {
          content: Array<ScansAPI.URLScannerDomain>;

          risks: Array<Categories.Risk>;
        }

        export namespace Categories {
          export interface Risk {
            id: number;

            name: string;

            super_category_id: number;
          }
        }

        export interface Rank {
          bucket: string;

          name: string;

          /**
           * Rank in the Global Radar Rank, if set. See more at
           * https://blog.cloudflare.com/radar-domain-rankings/
           */
          rank?: number;
        }

        export interface Tech {
          categories: Array<Tech.Category>;

          confidence: number;

          evidence: Tech.Evidence;

          icon: string;

          name: string;

          slug: string;

          website: string;

          description?: string;
        }

        export namespace Tech {
          export interface Category {
            id: number;

            groups: Array<number>;

            name: string;

            priority: number;

            slug: string;
          }

          export interface Evidence {
            impliedBy: Array<string>;

            patterns: Array<Evidence.Pattern>;
          }

          export namespace Evidence {
            export interface Pattern {
              confidence: number;

              excludes: Array<string>;

              implies: Array<string>;

              match: string;

              /**
               * Header or Cookie name when set
               */
              name: string;

              regex: string;

              type: string;

              value: string;

              version: string;
            }
          }
        }
      }
    }

    export interface Page {
      asn: string;

      asnLocationAlpha2: string;

      asnname: string;

      console: Array<Page.Console>;

      cookies: Array<Page.Cookie>;

      country: string;

      countryLocationAlpha2: string;

      domain: string;

      headers: Array<Page.Header>;

      ip: string;

      js: Page.JS;

      securityViolations: Array<Page.SecurityViolation>;

      status: number;

      subdivision1Name: string;

      subdivision2name: string;

      url: string;
    }

    export namespace Page {
      export interface Console {
        category: string;

        text: string;

        type: string;

        url?: string;
      }

      export interface Cookie {
        domain: string;

        expires: number;

        httpOnly: boolean;

        name: string;

        path: string;

        sameParty: boolean;

        secure: boolean;

        session: boolean;

        size: number;

        sourcePort: number;

        sourceScheme: string;

        value: string;

        priority?: string;
      }

      export interface Header {
        name: string;

        value: string;
      }

      export interface JS {
        variables: Array<JS.Variable>;
      }

      export namespace JS {
        export interface Variable {
          name: string;

          type: string;
        }
      }

      export interface SecurityViolation {
        category: string;

        text: string;

        url: string;
      }
    }

    export interface Performance {
      connectEnd: number;

      connectStart: number;

      decodedBodySize: number;

      domainLookupEnd: number;

      domainLookupStart: number;

      domComplete: number;

      domContentLoadedEventEnd: number;

      domContentLoadedEventStart: number;

      domInteractive: number;

      duration: number;

      encodedBodySize: number;

      entryType: string;

      fetchStart: number;

      initiatorType: string;

      loadEventEnd: number;

      loadEventStart: number;

      name: string;

      nextHopProtocol: string;

      redirectCount: number;

      redirectEnd: number;

      redirectStart: number;

      requestStart: number;

      responseEnd: number;

      responseStart: number;

      secureConnectionStart: number;

      startTime: number;

      transferSize: number;

      type: string;

      unloadEventEnd: number;

      unloadEventStart: number;

      workerStart: number;
    }

    export interface Task {
      /**
       * Submitter location
       */
      clientLocation: string;

      clientType: 'Site' | 'Automatic' | 'Api';

      /**
       * URL of the primary request, after all HTTP redirects
       */
      effectiveUrl: string;

      errors: Array<Task.Error>;

      scannedFrom: Task.ScannedFrom;

      status: 'Queued' | 'InProgress' | 'InPostProcessing' | 'Finished';

      success: boolean;

      time: string;

      timeEnd: string;

      /**
       * Submitted URL
       */
      url: string;

      /**
       * Scan ID
       */
      uuid: string;

      visibility: 'Public' | 'Unlisted';
    }

    export namespace Task {
      export interface Error {
        message: string;
      }

      export interface ScannedFrom {
        /**
         * IATA code of Cloudflare datacenter
         */
        colo: string;
      }
    }

    export interface Verdicts {
      overall: Verdicts.Overall;
    }

    export namespace Verdicts {
      export interface Overall {
        categories: Array<Overall.Category>;

        /**
         * At least one of our subsystems marked the site as potentially malicious at the
         * time of the scan.
         */
        malicious: boolean;

        phishing: Array<string>;
      }

      export namespace Overall {
        export interface Category {
          id: number;

          name: string;

          super_category_id: number;
        }
      }
    }

    /**
     * Dictionary of Autonomous System Numbers where ASN's are the keys
     */
    export interface ASNs {
      /**
       * ASN's contacted
       */
      asn?: ASNs.ASN;
    }

    export namespace ASNs {
      /**
       * ASN's contacted
       */
      export interface ASN {
        asn: string;

        description: string;

        location_alpha2: string;

        name: string;

        org_name: string;
      }
    }

    export interface Domains {
      'example.com'?: Domains.ExampleCom;
    }

    export namespace Domains {
      export interface ExampleCom {
        categories: ExampleCom.Categories;

        dns: Array<ExampleCom.DNS>;

        name: string;

        rank: ExampleCom.Rank;

        type: string;
      }

      export namespace ExampleCom {
        export interface Categories {
          inherited: Categories.Inherited;

          content?: Array<ScansAPI.URLScannerDomain>;

          risks?: Array<ScansAPI.URLScannerDomain>;
        }

        export namespace Categories {
          export interface Inherited {
            content?: Array<ScansAPI.URLScannerDomain>;

            from?: string;

            risks?: Array<ScansAPI.URLScannerDomain>;
          }
        }

        export interface DNS {
          address: string;

          dnssec_valid: boolean;

          name: string;

          type: string;
        }

        export interface Rank {
          bucket: string;

          name: string;

          /**
           * Rank in the Global Radar Rank, if set. See more at
           * https://blog.cloudflare.com/radar-domain-rankings/
           */
          rank?: number;
        }
      }
    }

    export interface IPs {
      ip?: IPs.IP;
    }

    export namespace IPs {
      export interface IP {
        asn: string;

        asnDescription: string;

        asnLocationAlpha2: string;

        asnName: string;

        asnOrgName: string;

        continent: string;

        geonameId: string;

        ip: string;

        ipVersion: string;

        latitude: string;

        locationAlpha2: string;

        locationName: string;

        longitude: string;

        subdivision1Name: string;

        subdivision2Name: string;
      }
    }

    export interface Links {
      link?: Links.Link;
    }

    export namespace Links {
      export interface Link {
        /**
         * Outgoing link detected in the DOM
         */
        href: string;

        text: string;
      }
    }
  }
}

export interface ScanHarResponse {
  har: ScanHarResponse.Har;
}

export namespace ScanHarResponse {
  export interface Har {
    log: Har.Log;
  }

  export namespace Har {
    export interface Log {
      creator: Log.Creator;

      entries: Array<Log.Entry>;

      pages: Array<Log.Page>;

      version: string;
    }

    export namespace Log {
      export interface Creator {
        comment: string;

        name: string;

        version: string;
      }

      export interface Entry {
        _initialPriority: string;

        _initiator_type: string;

        _priority: string;

        _requestId: string;

        _requestTime: number;

        _resourceType: string;

        cache: unknown;

        connection: string;

        pageref: string;

        request: Entry.Request;

        response: Entry.Response;

        serverIPAddress: string;

        startedDateTime: string;

        time: number;
      }

      export namespace Entry {
        export interface Request {
          bodySize: number;

          headers: Array<Request.Header>;

          headersSize: number;

          httpVersion: string;

          method: string;

          url: string;
        }

        export namespace Request {
          export interface Header {
            name: string;

            value: string;
          }
        }

        export interface Response {
          _transferSize: number;

          bodySize: number;

          content: Response.Content;

          headers: Array<Response.Header>;

          headersSize: number;

          httpVersion: string;

          redirectURL: string;

          status: number;

          statusText: string;
        }

        export namespace Response {
          export interface Content {
            mimeType: string;

            size: number;

            compression?: number;
          }

          export interface Header {
            name: string;

            value: string;
          }
        }
      }

      export interface Page {
        id: string;

        pageTimings: Page.PageTimings;

        startedDateTime: string;

        title: string;
      }

      export namespace Page {
        export interface PageTimings {
          onContentLoad: number;

          onLoad: number;
        }
      }
    }
  }
}

export interface ScanCreateParams {
  url: string;

  /**
   * Set custom headers
   */
  customHeaders?: Record<string, string>;

  /**
   * Take multiple screenshots targeting different device types
   */
  screenshotsResolutions?: Array<'desktop' | 'mobile' | 'tablet'>;

  /**
   * The option `Public` means it will be included in listings like recent scans and
   * search results. `Unlisted` means it will not be included in the aforementioned
   * listings, users will need to have the scan's ID to access it. A a scan will be
   * automatically marked as unlisted if it fails, if it contains potential PII or
   * other sensitive material.
   */
  visibility?: 'Public' | 'Unlisted';
}

export interface ScanGetParams {
  /**
   * Whether to return full report (scan summary and network log).
   */
  full?: boolean;
}

export interface ScanScreenshotParams {
  /**
   * Target device type
   */
  resolution?: 'desktop' | 'mobile' | 'tablet';
}

export namespace Scans {
  export import URLScannerDomain = ScansAPI.URLScannerDomain;
  export import URLScannerTask = ScansAPI.URLScannerTask;
  export import ScanCreateResponse = ScansAPI.ScanCreateResponse;
  export import ScanGetResponse = ScansAPI.ScanGetResponse;
  export import ScanHarResponse = ScansAPI.ScanHarResponse;
  export import ScanCreateParams = ScansAPI.ScanCreateParams;
  export import ScanGetParams = ScansAPI.ScanGetParams;
  export import ScanScreenshotParams = ScansAPI.ScanScreenshotParams;
}
