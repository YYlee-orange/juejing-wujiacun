# UI资源记录

日期：2026-11-13。对应《UI美术规范》的首轮实现及试玩修正。

## 人物头像

- 守村队：[militia.png](../assets/portraits/militia.png)。
- 工程师：[engineer.png](../assets/portraits/engineer.png)。
- 生成方式：内置 imagegen，透明背景；最终采用第二轮粗笔简化重绘。
- 第二轮输入：第一轮对应角色头像作为重绘对象，用户提供的 `R.jpg` 作为简笔人像画法参考。
- 成稿用于头像框内，肩胸沿框内缘裁切，下框沿位于人像前层，头部可突破上沿。参考原图及完整生成结果保留在原有位置。

### 守村队最终重绘提示词

> Redraw image 1 as a MUCH SIMPLER, bold Chinese brush-ink colored avatar. Image 1 is the existing militia portrait to REPLACE, image 2 is the Chinese simple line-portrait STYLE reference. Keep only the subject identity: Chinese village man with straw hat, tan face and blue-grey work clothes. Drastically reduce detail: ONLY ABOUT 25 to 35 visible brush marks in the WHOLE image; no hat weave, no hair strands, no wrinkles, no tiny clothing folds. Oversized simple head, short neck and broad shoulders. A straw hat defined by its silhouette and TWO broad curved brush lines only. Each eye is ONE strong tapered ink mark, each eyebrow ONE broad wedge, nose a SINGLE simple hooked brush stroke, mouth a SINGLE short brush stroke; small goatee a single dark tapered shape. Use VERY THICK, expressive Chinese calligraphy brush contours, approximately 20 to 30 pixels wide on a 1024px canvas, pressure varying strongly, visible tapered starting/finishing strokes. Avoid mechanically uniform outlines. At most two sparse dry-brush gaps in the thickest strokes. COLOR with THREE OR FOUR clean solid flat fills: warm skin, muted ochre hat, blue-grey clothes, dark ink. NO shading gradients, NO paper texture, NO skin texture, NO cross hatching, NO realistic detailed anatomy, NO delicate linework. Must read as a simple ancient Chinese brush drawing colored for a small 80px game icon, not a finely illustrated comic portrait. Crop as head and shoulders, fully opaque clothing continuing all the way to a STRAIGHT HORIZONTAL LOWER EDGE, no transparent holes in the lower bust. Keep the whole hat visible and head near top. Genuinely transparent background outside the person. NO frame, UI, scenery, text, logo or watermark.

### 工程师最终重绘提示词

> Redraw image 1 as a MUCH SIMPLER, bold Chinese brush-ink colored avatar. Image 1 is the existing engineer portrait to REPLACE, image 2 is the Chinese simple line-portrait STYLE reference. Keep only the subject identity: young adult Chinese village engineer with white cloth head wrap, tan face and orange work jacket. Drastically reduce detail: ONLY ABOUT 25 to 35 visible brush marks in the WHOLE image; no hair strands, no wrinkles, no tiny clothing folds, no realistic detailed eyes. Oversized simple head, short neck and broad shoulders. Head wrap defined by silhouette and TWO broad curved brush lines, two simple cloth ends at the side. Each eye is ONE strong tapered ink mark, each eyebrow ONE broad wedge, nose a SINGLE simple hooked brush stroke, mouth a SINGLE short brush stroke; no beard. Use VERY THICK, expressive Chinese calligraphy brush contours, approximately 20 to 30 pixels wide on a 1024px canvas, pressure varying strongly, visible tapered starting/finishing strokes. Avoid mechanically uniform outlines. At most two sparse dry-brush gaps in the thickest strokes. COLOR with THREE OR FOUR clean solid flat fills: warm skin, ivory cloth, muted orange clothes, dark ink. NO shading gradients, NO paper texture, NO skin texture, NO cross hatching, NO realistic detailed anatomy, NO delicate linework. Must read as a simple ancient Chinese brush drawing colored for a small 80px game icon, not a finely illustrated comic portrait. Crop as head and shoulders, fully opaque clothing continuing all the way to a STRAIGHT HORIZONTAL LOWER EDGE, no transparent holes in lower bust. Keep full head wrap visible and head near top. Genuinely transparent background outside the person. NO frame, UI, scenery, text, logo or watermark.

## 开始界面标题

- 文件：[wujiacun-ink.png](../assets/titles/wujiacun-ink.png)，透明底字稿。
- 标题文字：**绝境：吴家村**。开始界面中置于按钮上方，浏览器页面标题同步使用此名称。
- 生成方式：内置 imagegen；独立字稿，强调行楷笔势、深墨、提按、收锋和少量飞白。没有额外印章或装饰图案。

### 标题生成提示词

> Use case: logo-brand / Chinese game title calligraphy. Create a production title wordmark PNG for a Chinese mountain-village game main menu. Exact text (verbatim): "绝境：吴家村". There are FIVE Chinese characters in order: 绝, 境, 吴, 家, 村, with a clearly readable Chinese full-width colon "：" between 境 and 吴. Spell every character correctly. Do not add any other text. Use authentic Chinese brush calligraphy, an expressive yet very readable semi-regular script (行楷). Broad weight variation, forceful wet-ink cores, natural tapered strokes, a few restrained dry-brush white streaks and slightly feathered edges. The feeling is hand-written ink, not a regular computer font or uniform vector outlines. Preserve the structure of the Chinese characters rather than turning them into abstract marks. Single HORIZONTAL line, wide approximately 5:1 wordmark layout. All five characters have comparable visual height, the colon is smaller and sits naturally between the first two characters and the last three. Modest expressive variation in character attitude and spacing. Color: rich dark warm charcoal ink around #2d3029 with very subtle ink-density variation. No colored outlines, no gradients, no metallic or 3D effects. Background must be GENUINELY TRANSPARENT, suitable for placement over a very pale softly blurred green village scene. Only the calligraphy should be present. Absolutely NO paper rectangle, backdrop, scene, objects, frames, decorative splash extending far away, red stamp, signature, logo or watermark. The lettering should fill the canvas closely with small clean transparent margins, all strokes fully visible and uncropped.

## 字体

- 来源：[霞鹜文楷官方仓库](https://github.com/lxgw/LxgwWenKai)，`fonts/TTF/LXGWWenKai-Regular.ttf`。
- 许可：随附 [SIL Open Font License 1.1](../assets/fonts/OFL.txt)。
- 当前界面字符子集：[wujiacun-kai.woff2](../assets/fonts/wujiacun-kai.woff2)，约 61 KB，313 个界面所需字符，修改后的字体家族命名为 `Wujiacun Kai`。
- [ui-kai.css](../assets/fonts/ui-kai.css) 将该子集以内嵌字体形式提供，支持直接以 `file://` 打开本地 HTML；使用系统楷体作为后备。
- 新增界面文字时应同步更新字体子集及其内嵌 CSS。原始完整字体未随项目分发。

## 框线与旗帜

在 `src/ui.js` 中以 SVG 绘制，边线采用有粗细变化的实心墨线带，局部留少量飞白。颜色与尺寸由 `styles.css` 控制。

旗帜由后层旗尾、折返暗面和前层旗面依次叠放，参考用户补充的[旗帜折叠局部图](references/flag-fold-reference.png)。

## 云雾与暂停菜单

云雾在 `src/cloud-transition.js` 内沿用场景烟雾的体积叠层思路，以实例化二十面体雾团构成不规则云层，无需外部贴图，不使用大圆形底层。内部以连续的中性白色体积明暗为主，分面法线仅占 16%；轮廓随朝向逐渐透明。前层主体、边缘云团、薄雾的不透明度分别为 0.56、0.38、0.18，后方另有浅白密度层保证完整遮挡，减轻交叠处的实体穿插感。

参考检查包括 [Supercell 官方云层画面](https://supercell.com/en/games/clashofclans/ja/blog/game-updates/legend-league-redesign-jp/)、[游戏实录中的匹配云层](https://www.youtube.com/watch?v=1Oy2xs80w08)（约 31.5—34 秒）和 [CloudAnimation 作者提供的转场演示](https://github.com/Swapnil-J-Patil/CloudAnimation)。后者为第三方实现，仅用于辅助观察轮廓层次，不作为原游戏的技术依据；这些参考图与视频未打包进游戏。

独立透明 WebGL 层同时遮住场景和界面；入口与出口共用同一位置曲线，包括雾团的轻微错位与翻涌，出口反向采样，完整遮挡后执行换景回调。

暂停菜单由 `src/pause-menu.js` 管理显隐、缩放、淡入淡出和键盘焦点；动画使用独立于战斗的界面时钟。

## 选关画卷

山川底图与透明村落符号使用内置图像生成工具制作，项目资源路径与最终提示词见 [选关界面资源记录](选关界面资源记录.md)。当前底图为简化碎皴、加重主轮廓的 v5；村落为保留原外形、加重主要笔触的 v3，按实际建筑范围裁去显示边距。竖排图名以墨框题签直接盖在画上，图像以黑色墨线的同一轮廓裁切，墨线外依次为窄纸边和绿色装裱；灰青布面使用不规则接缝与疏淡磨损。整幅装裱随拖动移动，返回键固定在黑色墨线内的右上方。水纹叠层扣除浅滩与洲地，朱红选关圈加粗并在约 0.52 秒内绘制完成。
