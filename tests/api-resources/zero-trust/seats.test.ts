// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSeats } from 'cloudflare/resources/zero-trust/seats';
import { ZeroTrust } from 'cloudflare/resources/zero-trust/zero-trust';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSeats],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ZeroTrust],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { seats: BaseSeats } }>) => {
  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.seats.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [
        {
          access_seat: false,
          gateway_seat: false,
          seat_uid: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.zeroTrust.seats.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [
        {
          access_seat: false,
          gateway_seat: false,
          seat_uid: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        },
      ],
    });
  });
};
describe('resource seats', () => runTests(client));
describe('resource seats (tree shakable, base)', () => runTests(partialClient));
describe('resource seats (tree shakable, subresource)', () => runTests(parentPartialClient));
