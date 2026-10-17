import{test,expect} from "@playwright/test";

test('multiEnvTest',async({page})=>{

    console.log(process.env.URL);
})