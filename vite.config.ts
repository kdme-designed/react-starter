/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactRefreshPlugin from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    reactRefreshPlugin(),
    svgrPlugin(),
    vanillaExtractPlugin(),
  ],
})
