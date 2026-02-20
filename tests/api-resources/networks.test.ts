// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource networks', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.networks.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.create(
        {
          env: 'env',
          attachable: 'attachable',
          driver: 'driver',
          enableIPv6: 'enableIPv6',
          ingress: 'ingress',
          internal: 'internal',
          ipam: 'ipam',
          labels: 'labels',
          name: 'name',
          options: 'options',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.networks.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.retrieve('id', { env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.networks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.networks.list({ env: 'env' }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Test2w.NotFoundError,
    );
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.networks.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.delete('id', { env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('connect', async () => {
    const responsePromise = client.networks.connect('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('connect: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.connect(
        'id',
        {
          env: 'env',
          containerId: 'containerId',
          containerName: 'containerName',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('disconnect', async () => {
    const responsePromise = client.networks.disconnect('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('disconnect: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.disconnect(
        'id',
        {
          env: 'env',
          containerId: 'containerId',
          containerName: 'containerName',
          force: 'force',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('inspect', async () => {
    const responsePromise = client.networks.inspect('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('inspect: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.inspect('id', { env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });
});
