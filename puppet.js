const puppeteer = require('puppeteer')

async function getVisual() {
	try {
		const URL = 'https://www.wi1.rw.fau.de';
		const browser = await puppeteer.launch({
            slowMo: 250,
        });
		const page = await browser.newPage();

        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        });
		await page.goto(URL);
		await page.screenshot({ path: './Data/screenshot.png' });
        const h1 = await page.$eval("h1", el => el.innerText);
        console.log(h1);

		await browser.close();
	} catch (error) {
		console.error(error)
	}
}

getVisual()
