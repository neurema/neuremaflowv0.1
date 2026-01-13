import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        unoptimized: true,
    },
    async headers() {
        return [
            {
                // Target all GLB/GLTF files
                source: '/:all*(glb|gltf)',
                headers: [
                    {
                        key: 'Cache-Control',
                        // "public" = CDN can cache it
                        // "max-age=31536000" = Keep for 1 year
                        // "immutable" = The file never changes, don't even check the server
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
