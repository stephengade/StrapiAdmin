module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // graphql

        "graphql": {
          enabled: true,
          config: {
            // set this to true if you want to enable the playground in production
            playgroundAlways: false,
          },
        },
        "apollo-sandbox": {
          enabled: process.env.NODE_ENV === "production" ? false : true,
          // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
        },
    
      
  });