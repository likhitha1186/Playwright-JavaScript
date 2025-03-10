import {test} from '@playwright/test'

test('Handling Frames using names or ulr', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.setViewportSize({ width: 1920, height:1040 })

    //total frames
    const allFrames =  page.frames();
    console.log('Toatl number of frames', allFrames.length)

    //approach 1: using name or url
    // const  frame1 = await page.frame('name') name is present.
    const  frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'}) //if name is not present
    await frame1.fill("[name = 'mytext1']", 'likhitha')
    await page.waitForTimeout(2000)


})