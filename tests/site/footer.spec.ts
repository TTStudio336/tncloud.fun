import { expect, test } from "@playwright/test";
import packageMetadata from "../../package.json" with { type: "json" };

test("footer exposes the source theme version from package metadata", async ({
	page,
}) => {
	await page.goto("/", { waitUntil: "domcontentloaded" });

	const versionLink = page
		.locator('.m3-blog-footer a[href="https://github.com/LyraVoid/Shirone"]')
		.filter({ hasText: packageMetadata.version })
		.first();

	await expect(versionLink).toHaveText(packageMetadata.version);
	const versionGroup = versionLink.locator("xpath=..");
	await expect(versionGroup.locator(":scope > span")).toHaveText("Version");
	await expect(versionGroup).toHaveCSS("gap", "6px");
});

test("footer links the local public security record icon with the record number", async ({
	page,
}) => {
	await page.goto("/", { waitUntil: "domcontentloaded" });

	const record = page.locator(".footer-beian");
	const policeLink = record.locator(
		'a[href="https://beian.mps.gov.cn/#/query/webSearch?code=15052602000168"]',
	);
	const icon = policeLink.locator('img[src="/images/gongan-beian.png"]');

	await expect(policeLink).toContainText("蒙公网安备15052602000168号");
	await expect(policeLink).toHaveCSS("display", "inline-flex");
	await expect(policeLink).toHaveCSS("align-items", "center");
	await expect(icon).toHaveAttribute("width", "20");
	await expect(icon).toHaveJSProperty("naturalWidth", 20);
	await expect(record.locator(".beian-link")).toHaveCSS(
		"color",
		await policeLink.evaluate((link) => getComputedStyle(link).color),
	);
});
