// TODO: Replace with your Strapi URL
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const loginStrapi = async (identifier: string, password: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || "Login failed");
        }
        return data;
    } catch (error) {
        throw error;
    }
};

export const registerStrapi = async (username: string, email: string, password: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || "Registration failed");
        }
        return data;
    } catch (error) {
        throw error;
    }
};
