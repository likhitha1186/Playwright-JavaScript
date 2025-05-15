import {test} from '@playwright/test'


test('Handling Inner Frames', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.setViewportSize({width: 1920, height: 1040})

    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator("input[name='mytext3']").fill('Likhitha')
    await page.waitForTimeout(2000)

    //nested frames
    const childFrames = frame3.childFrames()
    await childFrames[0].locator("//div[@class='SG0AAe']//div[@id='i6']").click()
    await page.waitForTimeout(2000)
});
/*
1st we need to get the parent frame and from the parent frame we can access all the child frames by using index.
 */