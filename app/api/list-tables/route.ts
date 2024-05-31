export const dynamic = 'force-dynamic'; // static by default, unless reading the request

import JamAI from 'jamaibase';

const jamai = new JamAI({
    baseURL: process.env["BASEURL"]!,
    apiKey: process.env["JAMAI_APIKEY"]!,
    projectId: process.env["PROJECT_ID"]!
});

export async function GET(request: Request) {

    const response = await jamai.addRow({
        table_type: "action",
        data: [
            {
                Country: "Germany"
            },
            {
                Country: "USA"
            },
            {
                Country: "Malaysia"
            },
            {
                Country: "UK"
            },
            {
                Country: "Chile"
            },
            {
                Country: "Bhutan"
            },
            {
                Country: "France"
            }
        ],
        table_id: "CountryCapital",
        reindex: true,
        concurrent: true
    });
  
    const listRowResponse = await jamai.listRows({
        table_type: "action",
        table_id: "CountryCapital"
    });

    return new Response(JSON.stringify(listRowResponse));
}

export const runtime = 'nodejs';