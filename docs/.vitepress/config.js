export default {

	base: '/test/',// 简单说如下配置就会让你的项目的路径从 `https://domain.com/` 变成 `https://domain.com/base/`
	lang: 'en-US', // 页面 HTML 的 lang 属性 `<html lang="en-US">`
	title: '博客模板',
	description: '博客模板',
	head: [
		// 改变title的图标
		[
			'link',
			{
				rel: 'icon',
				href: '/img/logo.ico',//图片放在public文件夹下
			},
		],
	],
	// 主题配置
	themeConfig: {
		//   头部导航
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于', link: '/about/' }
		],
		//   侧边导航
		sidebar: [
			{ text: '前言', link: '/base/' },
			{ text: '菜单一', link: '/base/index1' },
      { text: '菜单二', link: '/base/index2' },
			{ text: '菜单三', link: '/base/index3' },
			{ text: '菜单四', link: '/base/index4' },
			{ text: '菜单五', link: '/base/index5' }
		]
	}
}
