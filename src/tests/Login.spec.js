import { test, expect } from '@playwright/test';
import path from "node:path";

test('Home Page', async ({page})=>{

     await  page.goto("https://www.saucedemo.com/")
     //console.log(" directory name ----   " +path.join(__dirname, 'mydir'));
     const pageTitle = await  page.title();
     console.log("page title is: "+ pageTitle);

     await  expect(page).toHaveTitle('Swag Labs') ;




})