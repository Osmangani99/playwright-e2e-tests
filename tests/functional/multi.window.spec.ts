import { expect, test } from "@playwright/test";

test.describe("Multiple windows", () => {
  test("opens two windows and switches back to the parent", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole("link", { name: "Multiple Windows" }).click();
    await expect(
      page.getByRole("heading", { name: "Opening a new window" }),
    ).toBeVisible();

    const firstWindowPromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Click Here" }).click();
    const firstWindow = await firstWindowPromise;
    await expect(
      firstWindow.getByRole("heading", { name: "New Window" }),
    ).toBeVisible();

    // The demo's /windows/new page has no link, so return to /windows to open the next popup.
    await firstWindow.goto("https://the-internet.herokuapp.com/windows");
    const nextWindowPromise = firstWindow.waitForEvent("popup");
    await firstWindow.getByRole("link", { name: "Click Here" }).click();
    const nextWindow = await nextWindowPromise;
    await expect(
      nextWindow.getByRole("heading", { name: "New Window" }),
    ).toBeVisible();

    await page.bringToFront();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/windows");
    await expect(
      page.getByRole("heading", { name: "Opening a new window" }),
    ).toBeVisible();
  });
});
