// Screenshot-Script mit Playwright
// Ausführen: node take-screenshots.js

import { chromium } from 'playwright';

const screenshots = [
  { name: 'hero', url: 'http://localhost:4321', selector: null, fullPage: false },
  { name: 'about', url: 'http://localhost:4321/#about', selector: '#about', fullPage: false },
  { name: 'streamplan', url: 'http://localhost:4321/#streamplan', selector: '#streamplan', fullPage: false },
  { name: 'social', url: 'http://localhost:4321/#social', selector: '#social', fullPage: false },
  { name: 'support', url: 'http://localhost:4321/#support', selector: '#support', fullPage: false },
  { name: 'full-page', url: 'http://localhost:4321', selector: null, fullPage: true },
  { name: '404-page', url: 'http://localhost:4321/404', selector: null, fullPage: false },
];

(async () => {
  console.log('🎬 Starte Screenshot-Erstellung...\n');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  for (const shot of screenshots) {
    console.log(`📸 Erstelle: ${shot.name}.png`);
    await page.goto(shot.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Animationen abwarten

    const screenshotOptions = {
      path: `screenshots/${shot.name}.png`,
      fullPage: shot.fullPage
    };

    if (shot.selector) {
      const element = await page.$(shot.selector);
      if (element) {
        await element.screenshot(screenshotOptions);
      }
    } else {
      await page.screenshot(screenshotOptions);
    }
  }

  // Mobile Screenshot
  console.log('📱 Erstelle Mobile-Screenshot...');
  await context.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/mobile-view.png',
    fullPage: true
  });

  await browser.close();
  console.log('\n✅ Alle Screenshots erstellt!');
  console.log('📁 Speicherort: screenshots/\n');
})();
