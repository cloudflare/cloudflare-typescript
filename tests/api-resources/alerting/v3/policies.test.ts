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

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.alerting.v3.policies.create('023e105f4ecef8ad9ca31a8372d0c353', {
      alert_type: 'universal_ssl_event_type',
      enabled: true,
      mechanisms: { email: [{}], pagerduty: [{}], webhooks: [{}] },
      name: 'SSL Notification Event Policy',
    });
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
    const response = await cloudflare.alerting.v3.policies.create('023e105f4ecef8ad9ca31a8372d0c353', {
      alert_type: 'universal_ssl_event_type',
      enabled: true,
      mechanisms: {
        email: [{ id: 'test@example.com' }],
        pagerduty: [{ id: 'e8133a15-00a4-4d69-aec1-32f70c51f6e5' }],
        webhooks: [{ id: '14cc1190-5d2b-4b98-a696-c424cb2ad05f' }],
      },
      name: 'SSL Notification Event Policy',
      description: 'Something describing the policy.',
      filters: {
        actions: ['string', 'string', 'string'],
        affected_asns: ['string', 'string', 'string'],
        affected_components: ['string', 'string', 'string'],
        affected_locations: ['string', 'string', 'string'],
        airport_code: ['string', 'string', 'string'],
        alert_trigger_preferences: ['string', 'string', 'string'],
        alert_trigger_preferences_value: ['99.0', '98.0', '97.0'],
        enabled: ['string', 'string', 'string'],
        environment: ['string', 'string', 'string'],
        event: ['string', 'string', 'string'],
        event_source: ['string', 'string', 'string'],
        event_type: ['string', 'string', 'string'],
        group_by: ['string', 'string', 'string'],
        health_check_id: ['string', 'string', 'string'],
        incident_impact: ['INCIDENT_IMPACT_NONE', 'INCIDENT_IMPACT_MINOR', 'INCIDENT_IMPACT_MAJOR'],
        input_id: ['string', 'string', 'string'],
        limit: ['string', 'string', 'string'],
        logo_tag: ['string', 'string', 'string'],
        megabits_per_second: ['string', 'string', 'string'],
        new_health: ['string', 'string', 'string'],
        new_status: ['string', 'string', 'string'],
        packets_per_second: ['string', 'string', 'string'],
        pool_id: ['string', 'string', 'string'],
        product: ['string', 'string', 'string'],
        project_id: ['string', 'string', 'string'],
        protocol: ['string', 'string', 'string'],
        query_tag: ['string', 'string', 'string'],
        requests_per_second: ['string', 'string', 'string'],
        selectors: ['string', 'string', 'string'],
        services: ['string', 'string', 'string'],
        slo: ['99.9'],
        status: ['string', 'string', 'string'],
        target_hostname: ['string', 'string', 'string'],
        target_ip: ['string', 'string', 'string'],
        target_zone_name: ['string', 'string', 'string'],
        traffic_exclusions: ['security_events'],
        tunnel_id: ['string', 'string', 'string'],
        tunnel_name: ['string', 'string', 'string'],
        where: ['string', 'string', 'string'],
        zones: ['string', 'string', 'string'],
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.alerting.v3.policies.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0da2b59e-f118-439d-8097-bdfb215203c9',
      {},
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
  test.skip('list', async () => {
    const responsePromise = cloudflare.alerting.v3.policies.list('023e105f4ecef8ad9ca31a8372d0c353');
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
      cloudflare.alerting.v3.policies.list('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.alerting.v3.policies.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0da2b59e-f118-439d-8097-bdfb215203c9',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.alerting.v3.policies.delete(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '0da2b59e-f118-439d-8097-bdfb215203c9',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.alerting.v3.policies.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '0da2b59e-f118-439d-8097-bdfb215203c9',
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
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.alerting.v3.policies.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '0da2b59e-f118-439d-8097-bdfb215203c9',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
