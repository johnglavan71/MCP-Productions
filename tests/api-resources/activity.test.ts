// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource activity', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.activity.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.activity.list(
        {
          actions: 'actions',
          containerId: 'containerId',
          containerName: 'containerName',
          environmentId: 'environmentId',
          fromDate: 'fromDate',
          labels: 'labels',
          limit: 'limit',
          offset: 'offset',
          toDate: 'toDate',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.activity.delete();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listContainers', async () => {
    const responsePromise = client.activity.listContainers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listContainers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.activity.listContainers(
        { environment_id: 'environment_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listEvents', async () => {
    const responsePromise = client.activity.listEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStats', async () => {
    const responsePromise = client.activity.retrieveStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.activity.retrieveStats(
        { environment_id: 'environment_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });
});
