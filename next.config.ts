import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images: {
        // 网络图片配置
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);