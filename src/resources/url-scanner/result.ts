// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResultAPI from './result';

export class Result extends APIResource {
  /**
   * Get URL scan by uuid
   */
  get(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<ResultGetResponse> {
    return this._client.get(`/accounts/${accountId}/urlscanner/v2/result/${scanId}`, options);
  }
}

export interface ResultGetResponse {
  data: ResultGetResponse.Data;

  lists: ResultGetResponse.Lists;

  meta: ResultGetResponse.Meta;

  page: ResultGetResponse.Page;

  scanner: ResultGetResponse.Scanner;

  stats: ResultGetResponse.Stats;

  task: ResultGetResponse.Task;

  verdicts: ResultGetResponse.Verdicts;
}

export namespace ResultGetResponse {
  export interface Data {
    console: Array<Data.Console>;

    cookies: Array<Data.Cookie>;

    globals: Array<Data.Global>;

    links: Array<Data.Link>;

    performance: Array<Data.Performance>;

    requests: Array<Data.Request>;
  }

  export namespace Data {
    export interface Console {
      message: Console.Message;
    }

    export namespace Console {
      export interface Message {
        level: string;

        source: string;

        text: string;

        url: string;
      }
    }

    export interface Cookie {
      domain: string;

      expires: number;

      httpOnly: boolean;

      name: string;

      path: string;

      priority: string;

      sameParty: boolean;

      secure: boolean;

      session: boolean;

      size: number;

      sourcePort: number;

      sourceScheme: string;

      value: string;
    }

    export interface Global {
      prop: string;

      type: string;
    }

    export interface Link {
      href: string;

      text: string;
    }

    export interface Performance {
      duration: number;

      entryType: string;

      name: string;

      startTime: number;
    }

    export interface Request {
      request: Request.Request;

      response: Request.Response;

      requests?: Array<Request.Request>;
    }

    export namespace Request {
      export interface Request {
        documentURL: string;

        hasUserGesture: boolean;

        initiator: Request.Initiator;

        redirectHasExtraInfo: boolean;

        request: Request.Request;

        requestId: string;

        type: string;

        wallTime: number;

        frameId?: string;

        loaderId?: string;

        primaryRequest?: boolean;

        redirectResponse?: Request.RedirectResponse;
      }

      export namespace Request {
        export interface Initiator {
          host: string;

          type: string;

          url: string;
        }

        export interface Request {
          initialPriority: string;

          isSameSite: boolean;

          method: string;

          mixedContentType: string;

          referrerPolicy: string;

          url: string;

          headers?: unknown;
        }

        export interface RedirectResponse {
          charset: string;

          mimeType: string;

          protocol: string;

          remoteIPAddress: string;

          remotePort: number;

          securityHeaders: Array<RedirectResponse.SecurityHeader>;

          securityState: string;

          status: number;

          statusText: string;

          url: string;

          headers?: unknown;
        }

        export namespace RedirectResponse {
          export interface SecurityHeader {
            name: string;

            value: string;
          }
        }
      }

      export interface Response {
        asn: Response.ASN;

        dataLength: number;

        encodedDataLength: number;

        geoip: Response.Geoip;

        hasExtraInfo: boolean;

        requestId: string;

        response: Response.Response;

        size: number;

        type: string;

        contentAvailable?: boolean;

        hash?: string;
      }

      export namespace Response {
        export interface ASN {
          asn: string;

          country: string;

          description: string;

          ip: string;

          name: string;

          org: string;
        }

        export interface Geoip {
          city: string;

          country: string;

          country_name: string;

          geonameId: string;

          ll: Array<unknown>;

          region: string;
        }

        export interface Response {
          charset: string;

          mimeType: string;

          protocol: string;

          remoteIPAddress: string;

          remotePort: number;

          securityDetails: Response.SecurityDetails;

          securityHeaders: Array<Response.SecurityHeader>;

          securityState: string;

          status: number;

          statusText: string;

          url: string;

          headers?: unknown;
        }

        export namespace Response {
          export interface SecurityDetails {
            certificateId: number;

            certificateTransparencyCompliance: string;

            cipher: string;

            encryptedClientHello: boolean;

            issuer: string;

            keyExchange: string;

            keyExchangeGroup: string;

            protocol: string;

            sanList: Array<string>;

            serverSignatureAlgorithm: number;

            subjectName: string;

            validFrom: number;

            validTo: number;
          }

          export interface SecurityHeader {
            name: string;

            value: string;
          }
        }
      }

      export interface Request {
        documentURL: string;

        frameId: string;

        hasUserGesture: boolean;

        initiator: Request.Initiator;

        loaderId: string;

        redirectHasExtraInfo: boolean;

        request: Request.Request;

        requestId: string;

        type: string;

        wallTime: number;
      }

      export namespace Request {
        export interface Initiator {
          type: string;
        }

        export interface Request {
          headers: Request.Headers;

          initialPriority: string;

          isSameSite: boolean;

          method: string;

          mixedContentType: string;

          referrerPolicy: string;

          url: string;
        }

        export namespace Request {
          export interface Headers {
            name: string;
          }
        }
      }
    }
  }

  export interface Lists {
    asns: Array<string>;

    certificates: Array<Lists.Certificate>;

    continents: Array<string>;

    countries: Array<string>;

    domains: Array<string>;

    hashes: Array<string>;

    ips: Array<string>;

    linkDomains: Array<string>;

    servers: Array<string>;

    urls: Array<string>;
  }

  export namespace Lists {
    export interface Certificate {
      issuer: string;

      subjectName: string;

      validFrom: number;

      validTo: number;
    }
  }

  export interface Meta {
    processors: Meta.Processors;
  }

  export namespace Meta {
    export interface Processors {
      asn: Processors.ASN;

      dns: Processors.DNS;

      domainCategories: Processors.DomainCategories;

      geoip: Processors.Geoip;

      phishing: Processors.Phishing;

      radarRank: Processors.RadarRank;

      wappa: Processors.Wappa;

      urlCategories?: Processors.URLCategories;
    }

    export namespace Processors {
      export interface ASN {
        data: Array<ASN.Data>;
      }

      export namespace ASN {
        export interface Data {
          asn: string;

          country: string;

          description: string;

          ip: string;

          name: string;
        }
      }

      export interface DNS {
        data: Array<DNS.Data>;
      }

      export namespace DNS {
        export interface Data {
          address: string;

          dnssec_valid: boolean;

          name: string;

          type: string;
        }
      }

      export interface DomainCategories {
        data: Array<DomainCategories.Data>;
      }

      export namespace DomainCategories {
        export interface Data {
          inherited: unknown;

          isPrimary: boolean;

          name: string;
        }
      }

      export interface Geoip {
        data: Array<Geoip.Data>;
      }

      export namespace Geoip {
        export interface Data {
          geoip: Data.Geoip;

          ip: string;
        }

        export namespace Data {
          export interface Geoip {
            city: string;

            country: string;

            country_name: string;

            ll: Array<number>;

            region: string;
          }
        }
      }

      export interface Phishing {
        data: Array<string>;
      }

      export interface RadarRank {
        data: Array<RadarRank.Data>;
      }

      export namespace RadarRank {
        export interface Data {
          bucket: string;

          hostname: string;

          rank?: number;
        }
      }

      export interface Wappa {
        data: Array<Wappa.Data>;
      }

      export namespace Wappa {
        export interface Data {
          app: string;

          categories: Array<Data.Category>;

          confidence: Array<Data.Confidence>;

          confidenceTotal: number;

          icon: string;

          website: string;
        }

        export namespace Data {
          export interface Category {
            name: string;

            priority: number;
          }

          export interface Confidence {
            confidence: number;

            name: string;

            pattern: string;

            patternType: string;
          }
        }
      }

      export interface URLCategories {
        data: Array<URLCategories.Data>;
      }

      export namespace URLCategories {
        export interface Data {
          content: Array<Data.Content>;

          inherited: Data.Inherited;

          name: string;

          risks: Array<Data.Risk>;
        }

        export namespace Data {
          export interface Content {
            id: number;

            name: string;

            super_category_id: number;
          }

          export interface Inherited {
            content: Array<Inherited.Content>;

            from: string;

            risks: Array<Inherited.Risk>;
          }

          export namespace Inherited {
            export interface Content {
              id: number;

              name: string;

              super_category_id: number;
            }

            export interface Risk {
              id: number;

              name: string;

              super_category_id: number;
            }
          }

          export interface Risk {
            id: number;

            name: string;

            super_category_id: number;
          }
        }
      }
    }
  }

  export interface Page {
    apexDomain: string;

    asn: string;

    asnname: string;

    city: string;

    country: string;

    domain: string;

    ip: string;

    mimeType: string;

    server: string;

    status: string;

    title: string;

    tlsAgeDays: number;

    tlsIssuer: string;

    tlsValidDays: number;

    tlsValidFrom: string;

    url: string;

    screenshot?: Page.Screenshot;
  }

  export namespace Page {
    export interface Screenshot {
      dhash: string;

      mm3Hash: number;

      name: string;

      phash: string;
    }
  }

  export interface Scanner {
    colo: string;

    country: string;
  }

  export interface Stats {
    domainStats: Array<Stats.DomainStat>;

    ipStats: Array<Stats.IPStat>;

    IPv6Percentage: number;

    malicious: number;

    protocolStats: Array<Stats.ProtocolStat>;

    resourceStats: Array<Stats.ResourceStat>;

    securePercentage: number;

    secureRequests: number;

    serverStats: Array<Stats.ServerStat>;

    tlsStats: Array<Stats.TLSStat>;

    totalLinks: number;

    uniqASNs: number;

    uniqCountries: number;
  }

  export namespace Stats {
    export interface DomainStat {
      count: number;

      countries: Array<string>;

      domain: string;

      encodedSize: number;

      index: number;

      initiators: Array<string>;

      ips: Array<string>;

      redirects: number;

      size: number;
    }

    export interface IPStat {
      asn: IPStat.ASN;

      countries: Array<string>;

      domains: Array<string>;

      encodedSize: number;

      geoip: IPStat.Geoip;

      index: number;

      ip: string;

      ipv6: boolean;

      redirects: number;

      requests: number;

      size: number;

      count?: number;
    }

    export namespace IPStat {
      export interface ASN {
        asn: string;

        country: string;

        description: string;

        ip: string;

        name: string;

        org: string;
      }

      export interface Geoip {
        city: string;

        country: string;

        country_name: string;

        ll: Array<number>;

        region: string;
      }
    }

    export interface ProtocolStat {
      count: number;

      countries: Array<string>;

      encodedSize: number;

      ips: Array<string>;

      protocol: string;

      size: number;
    }

    export interface ResourceStat {
      compression: number;

      count: number;

      countries: Array<string>;

      encodedSize: number;

      ips: Array<string>;

      percentage: number;

      size: number;

      type: string;
    }

    export interface ServerStat {
      count: number;

      countries: Array<string>;

      encodedSize: number;

      ips: Array<string>;

      server: string;

      size: number;
    }

    export interface TLSStat {
      count: number;

      countries: Array<string>;

      encodedSize: number;

      ips: Array<string>;

      protocols: TLSStat.Protocols;

      securityState: string;

      size: number;
    }

    export namespace TLSStat {
      export interface Protocols {
        'TLS 1.3 / AES_128_GCM': number;
      }
    }
  }

  export interface Task {
    apexDomain: string;

    domain: string;

    domURL: string;

    method: string;

    options: Task.Options;

    reportURL: string;

    screenshotURL: string;

    source: string;

    success: boolean;

    time: string;

    url: string;

    uuid: string;

    visibility: string;
  }

  export namespace Task {
    export interface Options {
      /**
       * Custom headers set.
       */
      customHeaders?: unknown;

      screenshotsResolutions?: Array<string>;
    }
  }

  export interface Verdicts {
    overall: Verdicts.Overall;
  }

  export namespace Verdicts {
    export interface Overall {
      categories: Array<string>;

      hasVerdicts: boolean;

      malicious: boolean;

      tags: Array<string>;
    }
  }
}

export namespace Result {
  export import ResultGetResponse = ResultAPI.ResultGetResponse;
}
