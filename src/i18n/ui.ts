// Single source of truth for all UI strings.
//
// Static text is rendered twice in the DOM (one <span data-lang="en">, one
// <span data-lang="zh">) via the <T /> component and switched with pure CSS,
// so there is no flash of the wrong language. Attribute strings (placeholder,
// aria-label, title) and JS-driven strings are applied by src/i18n/client.ts
// using the same dictionary.

export type Lang = 'en' | 'zh';

export const LANGS: Lang[] = ['en', 'zh'];

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // language switch
    'lang.toggle_label': '中文',
    'lang.toggle_aria': 'Switch to Chinese',

    // navigation
    'nav.home': 'HOME',
    'nav.welcome': 'WELCOME',
    'nav.articles': 'ARTICLES',
    'nav.archive': 'ARCHIVE',
    'nav.subscribe': 'SUBSCRIBE',
    'nav.menu_toggle_aria': 'Toggle menu',
    'nav.close_aria': 'Close menu',
    'nav.theme_dark': 'DARK',
    'nav.theme_light': 'LIGHT',
    'nav.theme_aria_dark': 'Switch to dark mode',
    'nav.theme_aria_light': 'Switch to light mode',

    // hero
    'hero.subtitle': 'A STUDENT MAJORING IN PHYSICS',
    'hero.bio':
      'Harnessing subwavelength flow of light through mathematical elegance and nanophotonic rigor. Currently investigating LSPR effect in AuNPs and its application in biosensing.',
    'hero.view_articles': 'VIEW_ARTICLES',
    'hero.get_in_touch': 'GET_IN_TOUCH',

    // home
    'home.featured': 'FEATURED_POSTS',
    'home.featured_sub': 'Modest insights into physics & tech notes',
    'home.view_all': 'VIEW_ALL_RECORDS',
    'home.projects': 'GITHUB_PROJECTS',
    'home.projects_desc':
      "Lately, I've been leaning into the intuition of vibe coding. On GitHub, you'll find my modest attempts at AI-assisted programming—rough prototypes and evolving experiments as I learn to co-create with LLMs.",
    'home.visit_repo': 'Visit Repository',
    'home.contact': 'GET_IN_TOUCH',
    'home.contact_sub': 'Direct channels for collaboration',
    'home.email': 'Email',
    'home.github': 'GitHub',
    'home.no_posts': 'No posts yet. Check back soon!',

    // footer
    'footer.back_to_top': 'Back to top',

    // terminal log
    'log.title': 'SYSTEM_REPORT_v2.log',
    'log.init_label': 'INITIALIZING_SYSTEM:',
    'log.init_text': 'Start my physics study as a little boy full of curiosity.',
    'log.focus_label': 'RESEARCH_FOCUS:',
    'log.focus_text':
      'Primary focus on Quantum Optics and Nanophotonic, with a specific emphasis on their applications in biosensing. Secondary interests include Quantum Communication and Computational Physics.',
    'log.loc_label': 'LOCATION_DATA:',
    'log.loc_text': 'Currently based in China. Operating out of a university and digital workspace.',
    'log.status_label': 'CURRENT_STATUS:',
    'log.status_text':
      'Terminal input active. Monitoring for mode coupling and plasmonic resonance. Executing: vibe coding and nanophotonic simulations.',

    // blog listing
    'blog.title': 'ARTICLES',
    'blog.sub': 'All published research notes and technical writings',
    'blog.tags_label': 'TAGS:',
    'blog.read_more': 'READ_MORE',
    'blog.read': 'READ',

    // archive
    'archive.title': 'ARCHIVE',
    'archive.sub': 'Timeline of all published articles',

    // tags
    'tags.label': 'TAG:',
    'tags.count_one': '{n} article tagged with "{tag}"',
    'tags.count_many': '{n} articles tagged with "{tag}"',
    'tags.all': 'All Articles',

    // article
    'post.updated': 'Updated:',
    'post.all_articles': 'All Articles',
    'post.copy_code': 'Copy code',
    'post.copied': 'Copied',
    'post.copy_failed': 'Copy failed',

    // subscribe
    'subscribe.title': 'SUBSCRIBE_VIA_RSS',
    'subscribe.sub': 'Stay updated with the latest posts',
    'subscribe.feed_url': 'FEED_URL',
    'subscribe.copy': 'COPY',
    'subscribe.copied': 'URL copied to clipboard!',
    'subscribe.what_is_rss': 'WHAT_IS_RSS',
    'subscribe.rss_p1':
      'RSS (Really Simple Syndication) is a web feed format that allows you to subscribe to websites and receive automatic updates when new content is published. Instead of manually checking for new posts, your RSS reader will notify you.',
    'subscribe.rss_p2':
      'Think of it like subscribing to a newsletter, but without the email. You use an RSS reader app to collect and read updates from all your favorite websites in one place.',
    'subscribe.readers': 'RECOMMENDED_READERS',
    'subscribe.desktop': 'Desktop / Web',
    'subscribe.mobile': 'Mobile Apps',
    'subscribe.feedly_desc': 'Popular web-based reader with mobile apps',
    'subscribe.inoreader_desc': 'Powerful reader with advanced features',
    'subscribe.thunderbird_desc': 'Email client with built-in RSS support',
    'subscribe.reeder_desc': 'iOS/macOS (Paid, highly recommended)',
    'subscribe.feedly_mobile_desc': 'iOS/Android (Free)',
    'subscribe.readyou_desc': 'Android, open source (Free)',
    'subscribe.how': 'HOW_TO_SUBSCRIBE',
    'subscribe.step1_a': 'Choose an RSS reader',
    'subscribe.step1_b': 'from the recommendations above',
    'subscribe.step2_a': 'Copy the feed URL',
    'subscribe.step2_b': 'at the top of this page',
    'subscribe.step3_a': 'Add the feed',
    'subscribe.step3_b': 'to your reader (usually a "+" or "Add" button)',
    'subscribe.step4_a': 'Done!',
    'subscribe.step4_b': "You'll receive automatic updates for new posts",
    'subscribe.manual': 'PREFER_MANUAL_CHECKING?',
    'subscribe.manual_desc': 'You can also bookmark the blog page and visit whenever you want to see new content.',
    'subscribe.visit_blog': 'VISIT_BLOG',

    // audio player
    'audio.play_pause_aria': 'Play/pause',
    'audio.mute_aria': 'Mute/unmute',
    'audio.seek_aria': 'Audio progress',
    'audio.bitrate': 'BITRATE',
    'audio.status': 'STATUS',
    'audio.standby': 'STANDBY',
    'audio.sync': 'SYNCHRONIZED',
    'audio.paused': 'PAUSED',
    'audio.completed': 'COMPLETED',

    // reading progress nav
    'reading.jump': 'Jump to {label}',
    'reading.list_aria': 'Article section progress',
    'reading.toggle_aria': 'Toggle reading progress navigation',
    'reading.on': 'NAV ON',
    'reading.off': 'NAV OFF',

    // mobile menu
    'mobile.github_aria': 'GitHub',
    'mobile.email_aria': 'Email',

    // welcome page
    'welcome.title': 'WELCOME',
    'welcome.message': 'Welcome, friend from around the world!',
    'search.placeholder': 'Press / to search...',
    'search.engine_aria': 'Switch search engine',
    'search.submit_aria': 'Search',
    'search.clock_title': 'Click to toggle clock style',
  },
  zh: {
    // language switch
    'lang.toggle_label': 'EN',
    'lang.toggle_aria': '切换到英文',

    // navigation
    'nav.home': '首页',
    'nav.welcome': '欢迎',
    'nav.articles': '文章',
    'nav.archive': '归档',
    'nav.subscribe': '订阅',
    'nav.menu_toggle_aria': '打开菜单',
    'nav.close_aria': '关闭菜单',
    'nav.theme_dark': '深色',
    'nav.theme_light': '浅色',
    'nav.theme_aria_dark': '切换到深色模式',
    'nav.theme_aria_light': '切换到浅色模式',

    // hero
    'hero.subtitle': '一名物理专业的学生',
    'hero.bio':
      '以数学的优雅与纳米光子的严谨，驾驭光的亚波长流动。目前研究金纳米颗粒的局域表面等离激元共振（LSPR）及其在生物传感中的应用。',
    'hero.view_articles': '查看文章',
    'hero.get_in_touch': '联系我',

    // home
    'home.featured': '精选文章',
    'home.featured_sub': '关于物理与技术的些许笔记',
    'home.view_all': '查看全部',
    'home.projects': 'GitHub 项目',
    'home.projects_desc':
      '最近我越来越倾向于「氛围编程」的直觉。在 GitHub 上，你能看到我在 AI 辅助编程方面的一些尝试——粗糙的原型，以及在学习与 LLM 共创过程中不断演进的实验。',
    'home.visit_repo': '访问仓库',
    'home.contact': '联系我',
    'home.contact_sub': '用于交流与合作的直接渠道',
    'home.email': '邮箱',
    'home.github': 'GitHub',
    'home.no_posts': '暂无文章，敬请期待！',

    // footer
    'footer.back_to_top': '返回顶部',

    // terminal log
    'log.title': 'SYSTEM_REPORT_v2.log',
    'log.init_label': '系统初始化：',
    'log.init_text': '从一个充满好奇的小男孩开始学习物理。',
    'log.focus_label': '研究方向：',
    'log.focus_text':
      '主要关注量子光学与纳米光子学，尤其侧重其在生物传感中的应用；其次对量子通信与计算物理感兴趣。',
    'log.loc_label': '位置数据：',
    'log.loc_text': '目前常驻中国，活动范围包括校园与数字工作空间。',
    'log.status_label': '当前状态：',
    'log.status_text': '终端输入已激活。持续监测模式耦合与等离激元共振。正在执行：氛围编程与纳米光子仿真。',

    // blog listing
    'blog.title': '文章',
    'blog.sub': '全部已发表的研究笔记与技术文章',
    'blog.tags_label': '标签：',
    'blog.read_more': '阅读全文',
    'blog.read': '阅读',

    // archive
    'archive.title': '归档',
    'archive.sub': '全部已发表文章的时间线',

    // tags
    'tags.label': '标签：',
    'tags.count_one': '「{tag}」下有 {n} 篇文章',
    'tags.count_many': '「{tag}」下有 {n} 篇文章',
    'tags.all': '全部文章',

    // article
    'post.updated': '更新于：',
    'post.all_articles': '全部文章',
    'post.copy_code': '复制代码',
    'post.copied': '已复制',
    'post.copy_failed': '复制失败',

    // subscribe
    'subscribe.title': '通过 RSS 订阅',
    'subscribe.sub': '第一时间获取最新文章',
    'subscribe.feed_url': '订阅地址',
    'subscribe.copy': '复制',
    'subscribe.copied': '链接已复制到剪贴板！',
    'subscribe.what_is_rss': '什么是 RSS',
    'subscribe.rss_p1':
      'RSS（Really Simple Syndication，简易信息聚合）是一种网络订阅格式。订阅网站后，一旦有新内容发布，你就能自动收到更新，而无需手动查看。',
    'subscribe.rss_p2':
      '可以把它理解为「订阅一份不通过邮件发送的通讯」。用一个 RSS 阅读器，就能在一处集中收取并阅读你所有关注网站的更新。',
    'subscribe.readers': '推荐阅读器',
    'subscribe.desktop': '桌面 / 网页',
    'subscribe.mobile': '移动应用',
    'subscribe.feedly_desc': '流行的网页版阅读器，配有移动端应用',
    'subscribe.inoreader_desc': '功能强大的阅读器，提供进阶特性',
    'subscribe.thunderbird_desc': '内置 RSS 支持的邮件客户端',
    'subscribe.reeder_desc': 'iOS/macOS（付费，强烈推荐）',
    'subscribe.feedly_mobile_desc': 'iOS/Android（免费）',
    'subscribe.readyou_desc': 'Android，开源（免费）',
    'subscribe.how': '如何订阅',
    'subscribe.step1_a': '选择一款 RSS 阅读器',
    'subscribe.step1_b': '可从上方推荐中挑选',
    'subscribe.step2_a': '复制订阅地址',
    'subscribe.step2_b': '在本页顶部',
    'subscribe.step3_a': '添加订阅源',
    'subscribe.step3_b': '到你的阅读器中（通常是「+」或「添加」按钮）',
    'subscribe.step4_a': '完成！',
    'subscribe.step4_b': '有新文章时你会自动收到更新',
    'subscribe.manual': '更想手动查看？',
    'subscribe.manual_desc': '你也可以收藏博客页面，在想看新内容时随时访问。',
    'subscribe.visit_blog': '访问博客',

    // audio player
    'audio.play_pause_aria': '播放/暂停',
    'audio.mute_aria': '静音/取消静音',
    'audio.seek_aria': '音频进度',
    'audio.bitrate': '码率',
    'audio.status': '状态',
    'audio.standby': '待机',
    'audio.sync': '同步中',
    'audio.paused': '已暂停',
    'audio.completed': '已完成',

    // reading progress nav
    'reading.jump': '跳转到 {label}',
    'reading.list_aria': '文章小节进度',
    'reading.toggle_aria': '切换阅读进度导航',
    'reading.on': '导航开',
    'reading.off': '导航关',

    // mobile menu
    'mobile.github_aria': 'GitHub',
    'mobile.email_aria': '邮箱',

    // welcome page
    'welcome.title': '欢迎',
    'welcome.message': '欢迎，来自世界各地的朋友！',
    'search.placeholder': '按 / 开始搜索…',
    'search.engine_aria': '切换搜索引擎',
    'search.submit_aria': '搜索',
    'search.clock_title': '点击切换时钟样式',
  },
};

/** Pick a language from a BCP-47 tag such as "zh-CN", "zh-Hant", "en-US". */
export function langFromTag(tag: string | null | undefined): Lang | null {
  if (!tag) return null;
  const lower = tag.toLowerCase();
  if (lower.startsWith('zh')) return 'zh';
  if (lower.startsWith('en')) return 'en';
  return null;
}

/** Translate a key, interpolating {placeholder} tokens from `vars`. */
export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const dict = ui[lang] ?? ui.en;
  let value = dict[key] ?? ui.en[key] ?? key;
  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) {
      value = value.split(`{${name}}`).join(String(replacement));
    }
  }
  return value;
}
