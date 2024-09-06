import {
  test,
  expect
} from '@playwright/test';

test.describe('Basic application tests', () => {
  test.beforeEach(async ({
    page
  }) => {
    await page.goto('/');
  });

  test('it has set the correct title', async ({
    page
  }) => {
    await expect(page).toHaveTitle('Hello World');
  });

  test('it renders the most important components', async ({
    page
  }) => {
    await expect(page.locator('div#map').first()).toBeVisible();
    await expect(page.locator('canvas').first()).toBeVisible();
    await expect(page.locator('div.react-geo-search').first()).toBeVisible();
    await expect(page.locator('button.toggle-drawer-button').first()).toBeVisible();
  });

  test('it successfully loads the TopPlusOpen background layer', async ({
    page
  }) => {
    const response = await page.waitForResponse(/sgx.geodatenzentrum.de\/wms_topplus_open/);
    expect(response.status()).toBe(200);
  });

  test('it toggles the drawer visibility (inlcuding the layer tree) on button click', async ({
    page
  }) => {
    await expect(page.locator('div.ant-drawer.ant-drawer-right.ant-drawer-open.no-mask').first()).toBeHidden();
    await page.click('button.toggle-drawer-button');
    await expect(page.locator('div.ant-drawer.ant-drawer-right.ant-drawer-open.no-mask').first()).toBeVisible();
    await expect(page.locator('div.react-geo-layertree').first()).toBeVisible();
  });
});
