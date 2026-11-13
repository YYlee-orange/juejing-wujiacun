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

## 字体

- 来源：[霞鹜文楷官方仓库](https://github.com/lxgw/LxgwWenKai)，`fonts/TTF/LXGWWenKai-Regular.ttf`。
- 许可：随附 [SIL Open Font License 1.1](../assets/fonts/OFL.txt)。
- 当前界面字符子集：[wujiacun-kai.woff2](../assets/fonts/wujiacun-kai.woff2)，约 55 KB，286 个界面所需字符，修改后的字体家族命名为 `Wujiacun Kai`。
- [ui-kai.css](../assets/fonts/ui-kai.css) 将该子集以内嵌字体形式提供，支持直接以 `file://` 打开本地 HTML；使用系统楷体作为后备。
- 新增界面文字时应同步更新字体子集及其内嵌 CSS。原始完整字体未随项目分发。

## 框线与旗帜

在 `src/ui.js` 中以 SVG 绘制，边线采用有粗细变化的实心墨线带，局部留少量飞白。颜色与尺寸由 `styles.css` 控制。

旗帜由后层旗尾、折返暗面和前层旗面依次叠放，参考用户补充的[旗帜折叠局部图](references/flag-fold-reference.png)。
