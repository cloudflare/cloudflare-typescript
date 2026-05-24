import { URL } from 'url';
import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';
import {
  CursorPagination,
  CursorPaginationAfter,
  CursorLimitPagination,
  SinglePage,
  V4PagePagination,
  V4PagePaginationArray,
} from 'cloudflare/pagination';

const baseClient = () =>
  new Cloudflare({
    apiKey: '144c9defac04969c7bfad8efaa8ea194',
    apiEmail: 'user@example.com',
    baseURL: 'http://localhost:5000',
  });

const baseOptions = (query?: Record<string, unknown>) => ({
  method: 'get' as const,
  path: '/items',
  query,
});

const mockResponse = () => new Response(null) as any;

describe('V4PagePaginationArray', () => {
  test('getPaginatedItems returns the result array', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }, { id: 2 }], result_info: { page: 1, per_page: 2 } },
      baseOptions() as any,
    );
    expect(page.getPaginatedItems()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  test('returns an empty array when result is missing', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: undefined as any, result_info: {} },
      baseOptions() as any,
    );
    expect(page.getPaginatedItems()).toEqual([]);
  });

  test('nextPageInfo defaults the current page to 1 when none was sent', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: {} },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { page: 2 } });
  });

  test('nextPageInfo increments the page parameter', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { page: 3, per_page: 1 } },
      baseOptions({ page: 3 }) as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { page: 4 } });
  });

  test('nextPageParams returns the same params as nextPageInfo', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { page: 7 } },
      baseOptions({ page: 7 }) as any,
    );
    expect(page.nextPageParams()).toEqual({ page: 8 });
  });

  test('hasNextPage is false when the result array is empty', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [], result_info: { page: 1 } },
      baseOptions() as any,
    );
    expect(page.hasNextPage()).toBe(false);
  });

  test('hasNextPage is true when items are present', () => {
    const page = new V4PagePaginationArray(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { page: 1 } },
      baseOptions() as any,
    );
    expect(page.hasNextPage()).toBe(true);
  });
});

describe('V4PagePagination (object-shaped)', () => {
  test('getPaginatedItems pulls from result.items', () => {
    const page = new V4PagePagination(
      baseClient() as any,
      mockResponse(),
      { result: { items: [{ id: 1 }, { id: 2 }] }, result_info: { page: 1 } },
      baseOptions() as any,
    );
    expect(page.getPaginatedItems()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  test('handles a missing items array', () => {
    const page = new V4PagePagination(
      baseClient() as any,
      mockResponse(),
      { result: {}, result_info: {} },
      baseOptions() as any,
    );
    expect(page.getPaginatedItems()).toEqual([]);
  });

  test('nextPageInfo increments the page parameter', () => {
    const page = new V4PagePagination(
      baseClient() as any,
      mockResponse(),
      { result: { items: [{ id: 1 }] }, result_info: { page: 2 } },
      baseOptions({ page: 2 }) as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { page: 3 } });
  });
});

describe('CursorPagination', () => {
  test('returns null when there is no cursor', () => {
    const page = new CursorPagination(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: {} },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toBeNull();
    expect(page.nextPageParams()).toBeNull();
    expect(page.hasNextPage()).toBe(false);
  });

  test('forwards the cursor when present', () => {
    const page = new CursorPagination(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { cursor: 'abc' } },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { cursor: 'abc' } });
    expect(page.nextPageParams()).toEqual({ cursor: 'abc' });
    expect(page.hasNextPage()).toBe(true);
  });

  test('hasNextPage is false when items are empty even if a cursor is set', () => {
    const page = new CursorPagination(
      baseClient() as any,
      mockResponse(),
      { result: [], result_info: { cursor: 'abc' } },
      baseOptions() as any,
    );
    expect(page.hasNextPage()).toBe(false);
  });
});

describe('CursorPaginationAfter', () => {
  test('reads the after cursor from the nested cursors object', () => {
    const page = new CursorPaginationAfter(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { cursors: { after: 'next-token' } } },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { cursor: 'next-token' } });
  });

  test('returns null when there is no after cursor', () => {
    const page = new CursorPaginationAfter(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { cursors: {} } },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toBeNull();
  });
});

describe('CursorLimitPagination', () => {
  test('forwards the cursor parameter', () => {
    const page = new CursorLimitPagination(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: { cursor: 'tok' } },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toEqual({ params: { cursor: 'tok' } });
  });

  test('returns null when no cursor is present', () => {
    const page = new CursorLimitPagination(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }], result_info: {} },
      baseOptions() as any,
    );
    expect(page.nextPageInfo()).toBeNull();
  });
});

describe('SinglePage', () => {
  test('always reports no next page', () => {
    const page = new SinglePage(
      baseClient() as any,
      mockResponse(),
      { result: [{ id: 1 }, { id: 2 }] },
      baseOptions() as any,
    );
    expect(page.getPaginatedItems()).toEqual([{ id: 1 }, { id: 2 }]);
    expect(page.nextPageInfo()).toBeNull();
    expect(page.nextPageParams()).toBeNull();
    expect(page.hasNextPage()).toBe(false);
  });
});

describe('auto-pagination via real list endpoint', () => {
  // We exercise the AbstractPage.getNextPage + iterPages + Symbol.asyncIterator
  // machinery against a real list endpoint (zones.list uses V4PagePaginationArray)
  // backed by a mock fetch that serves three pages.
  function makeListClient() {
    const pages: Record<string, { result: Array<{ id: string }>; result_info: { page: number } }> = {
      '1': { result: [{ id: 'a' }, { id: 'b' }], result_info: { page: 1 } },
      '2': { result: [{ id: 'c' }], result_info: { page: 2 } },
      '3': { result: [], result_info: { page: 3 } },
    };
    const requestedPages: number[] = [];

    const fetchMock = async (url: any) => {
      const u = new URL(String(url));
      const page = u.searchParams.get('page') ?? '1';
      requestedPages.push(Number(page));
      const body = pages[page] ?? { result: [], result_info: { page: Number(page) } };
      return new Response(JSON.stringify(body), {
        headers: { 'Content-Type': 'application/json' },
      }) as any;
    };

    const client = new Cloudflare({
      apiKey: '144c9defac04969c7bfad8efaa8ea194',
      apiEmail: 'user@example.com',
      baseURL: 'http://localhost:5000',
      fetch: fetchMock as any,
    });

    return { client, requestedPages };
  }

  test('Symbol.asyncIterator walks every page until empty', async () => {
    const { client, requestedPages } = makeListClient();
    const ids: string[] = [];
    for await (const item of client.zones.list({ page: 1 })) {
      ids.push((item as { id: string }).id);
    }
    expect(ids).toEqual(['a', 'b', 'c']);
    expect(requestedPages).toEqual([1, 2, 3]);
  });

  test('iterPages yields every page including the trailing empty one', async () => {
    // iterPages yields the current page first, then walks while hasNextPage(),
    // so the empty terminal page surfaces here too.
    const { client } = makeListClient();
    const firstPage = await client.zones.list({ page: 1 });
    const collected: string[][] = [];
    for await (const page of firstPage.iterPages()) {
      collected.push(
        page.getPaginatedItems().map((i: any) => i.id),
      );
    }
    expect(collected).toEqual([['a', 'b'], ['c'], []]);
  });

  test('getNextPage throws when nextPageInfo() returns null', async () => {
    const { client } = makeListClient();
    const single = new SinglePage(
      client as any,
      mockResponse(),
      { result: [{ id: 'only' }] },
      baseOptions() as any,
    );
    await expect(single.getNextPage()).rejects.toThrow(/No next page expected/);
  });
});
