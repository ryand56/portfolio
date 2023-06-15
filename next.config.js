/** 
 * @type {import("next").NextConfig} 
 */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dcdn.dstn.to",
                port: "",
                pathname: "/avatars/**"
            }
        ]
    },
    transpilePackages: ["@spissvinkel/simplex-noise"]
};
