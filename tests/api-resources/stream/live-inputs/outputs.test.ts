// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outputs', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.stream.liveInputs.outputs.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
      { streamKey: 'uzya-f19y-g2g9-a2ee-51j2', url: 'rtmp://a.rtmp.youtube.com/live2' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.stream.liveInputs.outputs.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
      { streamKey: 'uzya-f19y-g2g9-a2ee-51j2', url: 'rtmp://a.rtmp.youtube.com/live2', enabled: true },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.stream.liveInputs.outputs.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.stream.liveInputs.outputs.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '66be4bf738797e01e1fca35a7bdecdcd',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.stream.liveInputs.outputs.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = cloudflare.stream.liveInputs.outputs.replace(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { enabled: true },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: required and optional params', async () => {
    const response = await cloudflare.stream.liveInputs.outputs.replace(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '66be4bf738797e01e1fca35a7bdecdcd',
      'baea4d9c515887b80289d5c33cf01145',
      { enabled: true },
    );
  });
});
