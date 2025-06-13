import { defineConfig } from 'vitepress'

const isDev = process.env.NODE_ENV == 'development'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isDev? '/':  "/myblog/", //判断是开发环境开始正式环境
  title: "温束的笔记",
  description: "温束的笔记",
  lastUpdated: true, // 最后更新于，是最后提交git的时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '全部概览',
        // items: [
        //   { text: '基础', link: '/pr基础/PR基础' },
        // ]
      },
      {
        text: 'PR',
        collapsed: true,
        items: [
          { text: '基础', link: '/pr基础/pr基础' }
        ]
      },
      {
        text: '短片剪辑',
        collapsed: true,
        items: [
          { text: '流程一：项目结构', link: '/短片剪辑/流程一：项目结构' },
          { text: '流程二：准备素材', link: '/短片剪辑/流程二：准备素材' },
          { text: '常见的拉片手法', link: '/短片剪辑/常见拉片手法' },
          { text: '多机位剪辑', link: '/短片剪辑/多机位剪辑' },
          { text: '导出', link: '/短片剪辑/导出' },
          { text: 'Tips', link: '/短片剪辑/tips' },
          { text: '绿皮书剧本', link: '/短片剪辑/绿皮书剧本' },
          {
            text: '短片剪辑实操',
            collapsed: true,
            items: [
              { text: '故事剧本--幸福熊猫抱', link: '/短片剪辑/实操/故事剧本--幸福熊猫抱' },
              { text: '广告剧本--幸福熊猫抱', link: '/短片剪辑/实操/广告剧本--幸福熊猫抱' },
              { text: '预告片--苏州图书馆', link: '/短片剪辑/实操/预告片--苏州图书馆' },
              { text: '试驾活动--启辰', link: '/短片剪辑/实操/试驾活动--启辰' },
              { text: '调度戏多机位--北京夜', link: '/短片剪辑/实操/调度戏多机位--北京夜' },
            ]
          },
        ]
      },
      {
        text: '达芬奇',
        collapsed: true,
        items: [
          {
            text: '达芬奇基础', link: '/达芬奇/达芬奇基础'
          }
        ]
      },
    ],

    socialLinks: [
      { icon: { svg: '<svg viewBox="0 0 24 24"><image href="/myblog/kook.ico" width="24" height="24" /></svg>' }, link: 'https://kook.vip/Qt8rZx' }
    ],


  },
  vite: {
    base: isDev?'/': '/myblog/', // 关键配置：强制使用相对路径
    publicDir: '../public',
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          // entryFileNames: 'assets/[name].[hash].js',
          // chunkFileNames: 'assets/[name].[hash].js'
        }
      }
    }
  }

})
