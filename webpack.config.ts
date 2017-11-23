import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx',
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'dist/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                exclude: [
                  /\.html$/,
                  // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
                  // because you might change the hot reloading server from the custom one
                  // to Webpack's built-in webpack-dev-server/client?/, which would not
                  // get properly excluded by /\.(js|jsx)$/ because of the query string.
                  // Webpack 2 fixes this, but for now we include this hack.
                  // https://github.com/facebookincubator/create-react-app/issues/1713
                  /\.(js|jsx)(\?.*)?$/,
                  /\.(ts|tsx)(\?.*)?$/,
                  /\.css$/,
                  /\.json$/,
                  /\.bmp$/,
                  /\.gif$/,
                  /\.jpe?g$/,
                  /\.png$/,
                  /\.scss$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                   name: 'static/media/[name].[hash:8].[ext]',
                 },

                 // Dummy, needed to get the code validated towards the TypeScript type definition.
                 test: () => true,
            },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                loaders: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader',
                ],
                test: /\.tsx?$/,
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                loader: 'source-map-loader',
                test: /\.js$/,
            },

            {
                test: /\.scss$/,
                use: [
                  require.resolve('style-loader'),
                  {
                    loader: require.resolve('css-loader'),
                    options: {
                      importLoaders: 1,
                    },
                  },
                  {
                    loader: require.resolve('sass-loader'),
                  },
                ],
              },
        ],
    },

    devServer: {
        hot: true,
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};

export default config;
