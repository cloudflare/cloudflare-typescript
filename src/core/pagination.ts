// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CloudflareError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Cloudflare } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Cloudflare;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Cloudflare, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new CloudflareError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Cloudflare,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator]() {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface V4PagePaginationResponse<Item> {
  result: V4PagePaginationResponse.Result<Item>;

  result_info: V4PagePaginationResponse.ResultInfo;
}

export namespace V4PagePaginationResponse {
  export interface Result<Item> {
    items?: Array<Item>;
  }

  export interface ResultInfo {
    page?: number;

    per_page?: number;
  }
}

export interface V4PagePaginationParams {
  page?: number;

  per_page?: number;
}

export class V4PagePagination<Item> extends AbstractPage<Item> implements V4PagePaginationResponse<Item> {
  result: V4PagePaginationResponse.Result<Item>;

  result_info: V4PagePaginationResponse.ResultInfo;

  constructor(
    client: Cloudflare,
    response: Response,
    body: V4PagePaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || {};
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result?.items ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as V4PagePaginationParams;
    const currentPage = query?.page ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface V4PagePaginationArrayResponse<Item> {
  result: Array<Item>;

  result_info: V4PagePaginationArrayResponse.ResultInfo;
}

export namespace V4PagePaginationArrayResponse {
  export interface ResultInfo {
    page?: number;

    per_page?: number;
  }
}

export interface V4PagePaginationArrayParams {
  page?: number;

  per_page?: number;
}

export class V4PagePaginationArray<Item>
  extends AbstractPage<Item>
  implements V4PagePaginationArrayResponse<Item>
{
  result: Array<Item>;

  result_info: V4PagePaginationArrayResponse.ResultInfo;

  constructor(
    client: Cloudflare,
    response: Response,
    body: V4PagePaginationArrayResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || [];
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as V4PagePaginationArrayParams;
    const currentPage = query?.page ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface CursorPaginationResponse<Item> {
  result: Array<Item>;

  result_info: CursorPaginationResponse.ResultInfo;
}

export namespace CursorPaginationResponse {
  export interface ResultInfo {
    count?: number;

    cursor?: string;

    per_page?: number;
  }
}

export interface CursorPaginationParams {
  per_page?: number;

  cursor?: string;
}

export class CursorPagination<Item> extends AbstractPage<Item> implements CursorPaginationResponse<Item> {
  result: Array<Item>;

  result_info: CursorPaginationResponse.ResultInfo;

  constructor(
    client: Cloudflare,
    response: Response,
    body: CursorPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || [];
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.result_info?.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface CursorLimitPaginationResponse<Item> {
  result: Array<Item>;

  result_info: CursorLimitPaginationResponse.ResultInfo;
}

export namespace CursorLimitPaginationResponse {
  export interface ResultInfo {
    count?: number;

    cursor?: string;

    per_page?: number;
  }
}

export interface CursorLimitPaginationParams {
  limit?: number;

  cursor?: string;
}

export class CursorLimitPagination<Item>
  extends AbstractPage<Item>
  implements CursorLimitPaginationResponse<Item>
{
  result: Array<Item>;

  result_info: CursorLimitPaginationResponse.ResultInfo;

  constructor(
    client: Cloudflare,
    response: Response,
    body: CursorLimitPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || [];
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.result_info?.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface SinglePageResponse<Item> {
  result: Array<Item>;
}

export class SinglePage<Item> extends AbstractPage<Item> implements SinglePageResponse<Item> {
  result: Array<Item>;

  constructor(
    client: Cloudflare,
    response: Response,
    body: SinglePageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || [];
  }

  getPaginatedItems(): Item[] {
    return this.result ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    return null;
  }
}
