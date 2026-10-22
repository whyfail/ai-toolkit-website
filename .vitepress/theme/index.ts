// `theme-without-fonts` skips VitePress's bundled Inter webfont: the docs use a
// system font stack (SF Pro / PingFang SC), so shipping ~630 KB of woff2 files
// would be dead weight in every deploy.
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'

export default DefaultTheme
