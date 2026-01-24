import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json(
                { message: 'Name and email are required' },
                { status: 400 }
            );
        }

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbypC1CweHrLPJRMIJvQpH2Ejh5FJA1flq3ZR41TFZExip5Uvw9vzn8Fo3mb7t-A19LS/exec';

        if (!scriptUrl) {
            console.error('WAITLIST_SCRIPT_URL is not defined');
            return NextResponse.json(
                { message: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Google Apps Script Web App expects POST requests with JSON payload
        // Note: We might need to use 'no-cors' mode or ensure the script handles data correctly if fetched directly from client,
        // but here we are doing server-to-server.
        // Apps Script doPost needs to be triggered. 
        // Usually Apps Script redirects, which fetch might follow or might need handling.
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
            // Apps Script return 200 even on error usually if handled, but if deployment fails it gives 404/etc
            throw new Error('Failed to submit to external service');
        }

        // Apps Script often returns a 302 to a "success" page or JSON.
        // If we simply fire and forget or check for 200/302 from google, it's fine.
        // Ideally the script should return JSON content service.

        const result = await response.json();

        if (result.status !== 'success') {
            throw new Error(result.message || 'Waitlist submission failed');
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error: any) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
