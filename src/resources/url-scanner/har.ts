// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HARAPI from './har';

export class HAR extends APIResource {
  /**
   * Get a URL scan's HAR file. See HAR spec at
   * http://www.softwareishard.com/blog/har-12-spec/.
   */
  get(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<HARGetResponse> {
    return this._client.get(`/accounts/${accountId}/urlscanner/v2/har/${scanId}`, options);
  }
}

export interface HARGetResponse {
  log: HARGetResponse.Log;
}

export namespace HARGetResponse {
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

export namespace HAR {
  export import HARGetResponse = HARAPI.HARGetResponse;
}
