import {test} from '@playwright/test'

test('Handling Frames using frame locator', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.setViewportSize({ width: 1920, height:1040 })

    //total frames
    const allFrames =  page.frames();
    console.log('Toatl number of frames', allFrames.length)

    //approach 2: using frame locator
    const inputBox= await page.frameLocator("frame[src='frame_1.html']").locator("[name = 'mytext1']")
    await inputBox.fill('Likhitha')



})