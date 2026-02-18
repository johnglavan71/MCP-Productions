// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource general', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.settings.general.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.settings.general.create(
        {
          confirmDestructive: 'confirmDestructive',
          darkTheme: 'darkTheme',
          dateFormat: 'dateFormat',
          defaultGrypeArgs: 'defaultGrypeArgs',
          defaultTimezone: 'defaultTimezone',
          defaultTrivyArgs: 'defaultTrivyArgs',
          downloadFormat: 'downloadFormat',
          editorFont: 'editorFont',
          eventCleanupCron: 'eventCleanupCron',
          eventCleanupEnabled: 'eventCleanupEnabled',
          eventCollectionMode: 'eventCollectionMode',
          eventPollInterval: 'eventPollInterval',
          eventRetentionDays: 'eventRetentionDays',
          externalStackPaths: 'externalStackPaths',
          font: 'font',
          fontSize: 'fontSize',
          gridFontSize: 'gridFontSize',
          highlightUpdates: 'highlightUpdates',
          lightTheme: 'lightTheme',
          logBufferSizeKb: 'logBufferSizeKb',
          metricsCollectionInterval: 'metricsCollectionInterval',
          primaryStackLocation: 'primaryStackLocation',
          scheduleCleanupCron: 'scheduleCleanupCron',
          scheduleCleanupEnabled: 'scheduleCleanupEnabled',
          scheduleRetentionDays: 'scheduleRetentionDays',
          showStoppedContainers: 'showStoppedContainers',
          terminalFont: 'terminalFont',
          timeFormat: 'timeFormat',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.settings.general.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
