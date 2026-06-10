const directionData = {
  a: {
    number: "01 / 04",
    title: "纯净水光",
    description: "清透、干净、产品识别明确，适合作为稳定母版和品牌基础。",
    image: "assets/images/direction-a.webp",
    alt: "纯净水光方向生成图",
    variables: ["主体：稳定滴管瓶", "材质：玻璃与精华液", "光影：柔和逆光", "构图：居中留白"],
    promptCN: "一瓶高端女性护肤精华液产品，透明厚底玻璃滴管瓶，奶油白滴管胶头与瓶盖，瓶内为清透香槟金精华液，正面视角，瓶型比例稳定，产品完整清晰，置于浅水面中央；背景为奶油白与极淡粉色柔和渐变，透明液态光从瓶身后方缓慢环绕，水面形成克制的同心涟漪，玻璃边缘出现细腻折射与香槟金高光；商业护肤品摄影，柔和大面积逆光，真实玻璃厚度，精致但不过度闪耀，画面洁净通透，中心产品为唯一视觉主体，左侧或上方保留品牌文案区域，16:9横向广告构图，高分辨率，真实材质，适合高端国产护肤品牌主视觉。",
    promptEN: "A premium facial repair serum in a stable transparent dropper bottle with a thick glass base, a cream-white pipette bulb and cap, filled with clear champagne-gold essence. Front-facing product view, accurate proportions, fully visible bottle, standing at the center of a shallow reflective water surface. Use a cream-white background with a very subtle blush-pink gradient. A restrained ribbon of transparent liquid light curves behind the bottle while delicate concentric ripples spread across the water. Add refined glass refraction, soft champagne highlights and a broad diffused backlight. Luxury skincare commercial photography, realistic glass thickness, clean and luminous atmosphere, sophisticated rather than glittery, one hero product only, generous negative space for typography on the left or above, horizontal 16:9 advertising composition, high-resolution and production-ready.",
    negativeCN: "错误文字，伪造Logo，瓶身畸形，滴管歪斜，多个产品，标签乱码，廉价塑料感，强烈粉色，过曝，复杂花卉，夸张水花，电商促销感，低清晰度，黑边，水印。",
    negativeEN: "incorrect text, fake logo, distorted bottle, crooked dropper, multiple products, unreadable label, cheap plastic appearance, saturated pink, overexposure, complex flowers, exaggerated splash, promotional e-commerce style, low resolution, black border, watermark",
    scores: { brand: 88, stability: 92, cost: 24 }
  },
  b: {
    number: "02 / 04",
    title: "液态香槟",
    description: "液态光的概念最鲜明，拥有广告记忆点，最终被选为核心视觉语言。",
    image: "assets/images/direction-b.webp",
    alt: "液态香槟方向生成图",
    variables: ["主体：香槟金精华", "材质：液态光与玻璃", "光影：金色折射", "构图：环绕动势"],
    promptCN: "以同一款透明厚底滴管精华瓶为唯一主体，保持奶油白滴管胶头、香槟金金属环和清透金色精华液的产品结构完全稳定；一条具有真实黏度的香槟金液态光从水面升起，绕瓶身形成优雅的S形轨迹，液体边缘透明、内部有柔和金色能量，不能遮挡瓶身正面标签区域；背景使用低饱和奶油白、淡粉与暖金色，水面反射细腻，液滴悬停在产品上方，形成“一滴光”的记忆符号；高端护肤品牌主视觉，电影级产品布光，侧后方轮廓光，玻璃折射真实，液体运动具有雕塑感，画面克制、纯净、奢华，产品清晰锐利，背景柔和，保留充足文案空间，横向16:9商业广告摄影。",
    promptEN: "Use the same transparent heavy-base dropper serum bottle as the only hero product, preserving the cream-white pipette bulb, champagne-gold collar and clear golden essence with strict structural consistency. A ribbon of champagne liquid light with believable viscosity rises from the water and forms an elegant S-shaped orbit around the bottle. The liquid edges remain translucent with a soft golden energy inside and never cover the front label area. Build the environment with low-saturation cream, blush and warm gold. Add refined water reflections and one suspended droplet above the product as the memorable symbol of 'a drop of light'. Premium skincare key visual, cinematic product lighting, controlled rim light from the rear side, realistic glass refraction, sculptural fluid motion, restrained luxury, crisp hero bottle against a softer background, generous typography space, horizontal 16:9 commercial advertising photography.",
    negativeCN: "瓶型变化，滴管消失，液体遮挡产品，金色过饱和，珠宝广告感，厚重棕色，多个瓶子，夸张爆炸水花，熔化玻璃，漂浮标签，乱码，水印，低清晰度。",
    negativeEN: "changed bottle shape, missing dropper, liquid covering the product, oversaturated gold, jewelry-advertising look, heavy brown tones, multiple bottles, explosive splash, melting glass, floating label, gibberish text, watermark, low resolution",
    scores: { brand: 96, stability: 84, cost: 38 }
  },
  c: {
    number: "03 / 04",
    title: "淡粉悦己",
    description: "女性情绪更加柔和，适合社媒延展，但单独使用时功效可信度偏弱。",
    image: "assets/images/direction-c.webp",
    alt: "淡粉悦己方向生成图",
    variables: ["主体：柔光精华瓶", "材质：丝缎与水汽", "光影：晨光粉调", "构图：亲密近景"],
    promptCN: "透明玻璃滴管精华瓶置于低饱和淡粉色空间，产品结构保持简洁稳定，瓶内香槟金精华液在柔和晨光下呈现清透光泽；背景加入极轻的粉色丝缎曲面、柔焦花瓣影子与空气水汽，但所有辅助元素退后成为氛围，不能抢夺产品主体；使用窗边自然光般的斜向光束，在墙面形成克制的几何阴影，瓶身边缘带冷白高光，底部水面带暖金反射；表达悦己、温柔、稳定与健康肌肤本身的光，高级女性护肤社交媒体广告，真实商业摄影质感，留白充足，色彩柔和而不甜腻，产品标签区域清晰，4:5竖版可裁切构图。",
    promptEN: "Place a stable transparent glass dropper serum bottle in a low-saturation blush-pink environment. Keep the product structure minimal and consistent, with clear champagne essence glowing softly under gentle morning light. Introduce only subtle supporting elements: a pale pink satin curve, diffused petal shadows and a trace of atmospheric moisture. All secondary elements must recede and never compete with the hero bottle. Use a diagonal window-light beam to create restrained geometric shadows, cool-white highlights along the glass edges and a warm gold reflection on the water below. The mood should communicate self-care, softness, stability and the natural radiance of healthy skin. Premium feminine skincare social advertising, believable commercial photography, generous negative space, sophisticated blush color without sweetness, clear label area, vertical 4:5 composition that can also be cropped for social media.",
    negativeCN: "少女甜美风，浓艳粉色，大量鲜花，婚礼布景，香水广告感，产品过小，丝带遮挡瓶身，磨皮塑料感，文字错误，标签乱码，低清晰度，水印。",
    negativeEN: "girlish sweet aesthetic, saturated hot pink, excessive flowers, wedding decoration, perfume-advertising look, tiny product, ribbon covering the bottle, over-smoothed plastic texture, incorrect text, unreadable label, low resolution, watermark",
    scores: { brand: 86, stability: 80, cost: 34 }
  },
  d: {
    number: "04 / 04",
    title: "科技修护",
    description: "冷白光强化配方与修护感，但容易进入常见蓝白科技护肤表达。",
    image: "assets/images/direction-d.webp",
    alt: "科技修护方向生成图",
    variables: ["主体：配方感精华瓶", "材质：水膜与微粒", "光影：冷白高光", "构图：理性对称"],
    promptCN: "透明滴管精华瓶居中站立，保持奶油白瓶盖、香槟金液体与厚底玻璃的品牌识别；在瓶身周围构建极薄的透明水膜、微观水分子轨迹和柔和的屏障结构线，表现补水与屏障修护原理，但图形必须抽象、克制、无医疗器械感；背景为奶油白融合少量浅蓝冷光，产品正面保持暖金色核心，形成冷暖平衡；对称构图，干净实验室级产品摄影，冷白轮廓光、玻璃折射与微小悬浮水珠，高级科学护肤广告，信息清晰、可信、精密，保留品牌文案区域，避免常见蓝黑科技风，横向16:9高分辨率商业视觉。",
    promptEN: "Center the established transparent dropper serum bottle, preserving the cream-white cap, champagne essence and heavy glass base as fixed brand identifiers. Build an ultra-thin transparent moisture membrane, restrained molecular trajectories and soft barrier-like lines around the product to visualize hydration and skin-barrier repair. The scientific graphics must remain abstract and elegant, never medical or mechanical. Use a cream-white environment with only a small amount of pale blue cool light, while keeping a warm golden core inside the bottle for balanced temperature contrast. Symmetrical composition, clean laboratory-grade product photography, cool rim light, realistic refraction and fine suspended droplets. Premium science-led skincare advertising, precise and credible, clear typography area, no dark blue technology cliché, horizontal 16:9 high-resolution commercial visual.",
    negativeCN: "深蓝黑背景，赛博朋克，霓虹线条，医疗器械，DNA图标，复杂公式，金属机械结构，廉价科技感，瓶型变化，多个产品，错误文字，水印。",
    negativeEN: "dark navy background, cyberpunk, neon lines, medical equipment, DNA icon, complex formulas, metallic machinery, cheap technology aesthetic, changed bottle shape, multiple products, incorrect text, watermark",
    scores: { brand: 72, stability: 87, cost: 31 }
  }
};

const toolData = {
  strategy: {
    stage: "策略 / Strategy",
    title: "把模糊的“高级感”拆成可控制变量",
    description: "用于梳理品牌定位、受众、三个核心卖点，并把色彩、材质、光影、构图和镜头语言整理成可复用的提示词结构。",
    input: "品牌命题、竞品参考、目标岗位",
    output: "视觉策略、Prompt框架、筛选标准"
  },
  image: {
    stage: "图像 / Image Generation",
    title: "建立稳定产品母版与高完成度主视觉",
    description: "在明确瓶型、材质和构图约束后生成产品母版、液态光背景和主视觉候选，重点解决真实玻璃、精华液和水面折射。",
    input: "双语Prompt、参考图、瓶型约束",
    output: "产品母版、KV候选、细节素材"
  },
  jimeng: {
    stage: "探索 / Rapid Exploration",
    title: "快速验证方向，也记录生成模型的局限",
    description: "用于小批量方向探索和图生视频测试。结果出现构图趋同后停止重复生成，把失败转化为模型判断与流程调整证据。",
    input: "视觉参考、方向提示词、关键帧",
    output: "方向样张、动态测试、失败记录"
  },
  finish: {
    stage: "后期 / Human Finishing",
    title: "修复一致性并完成真正可传播的广告画面",
    description: "统一瓶型和标签，处理边缘、透视、光影、倒影、色温与信息层级，让生成底图从视觉素材变成商业设计。",
    input: "产品母版、生成背景、品牌文案",
    output: "最终KV、系列海报、社媒裁切"
  },
  motion: {
    stage: "动态 / Motion Delivery",
    title: "把静态概念转换为二十秒视觉节奏",
    description: "按照六镜头结构完成素材编排、转场、速度、字幕、音乐和导出。当前旁白会在下一轮单独重制。",
    input: "分镜关键帧、图生视频片段、文案",
    output: "9:16短片、节奏版本、交付文件"
  }
};

const seriesData = {
  hydrate: {
    number: "01",
    title: "深层补水",
    description: "以冷白水膜、浅蓝水珠与清透涟漪建立即时补水感，暖金精华液保留悦芙兰的品牌识别。",
    image: "assets/images/poster-hydrate-v2.webp",
    alt: "冷白水膜与蓝色水珠构成的深层补水系列海报"
  },
  repair: {
    number: "02",
    title: "屏障修护",
    description: "以更温暖的香槟金传达稳定与包裹感，让修护卖点保持克制和可信。",
    image: "assets/images/poster-repair.webp",
    alt: "屏障修护系列海报"
  },
  glow: {
    number: "03",
    title: "焕亮肤色",
    description: "以柔粉光晕、花瓣与折射光点表现由内向外的光泽，氛围更轻盈、更具女性情绪价值。",
    image: "assets/images/poster-glow-v2.webp",
    alt: "柔粉光晕与花瓣构成的焕亮肤色系列海报"
  }
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const progress = document.querySelector("[data-progress]");
let currentDirection = "a";
let currentLanguage = "cn";

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  progress.style.transform = `scaleX(${value})`;
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});

mobileNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -60% 0px" });
sections.forEach(section => sectionObserver.observe(section));

function updateScore(name, value) {
  const bar = document.querySelector(`[data-score-${name}]`);
  const number = document.querySelector(`[data-score-${name}-value]`);
  bar.style.setProperty("--score", `${value}%`);
  number.textContent = value;
}

function updatePromptLab() {
  const item = directionData[currentDirection];
  document.querySelector("[data-prompt-index]").textContent = item.number.slice(0, 2);
  document.querySelector("[data-prompt-text]").textContent =
    currentLanguage === "cn" ? item.promptCN : item.promptEN;
  document.querySelector("[data-negative-text]").textContent =
    currentLanguage === "cn" ? item.negativeCN : item.negativeEN;
  document.querySelectorAll("[data-variable]").forEach((element, index) => {
    element.textContent = item.variables[index];
  });
  updateScore("brand", item.scores.brand);
  updateScore("stability", item.scores.stability);
  updateScore("cost", item.scores.cost);
}

document.querySelectorAll("[data-direction]").forEach(button => {
  button.addEventListener("click", () => {
    currentDirection = button.dataset.direction;
    const item = directionData[currentDirection];
    document.querySelector("[data-direction-number]").textContent = item.number;
    document.querySelector("[data-direction-title]").textContent = item.title;
    document.querySelector("[data-direction-description]").textContent = item.description;
    const image = document.querySelector("[data-direction-image]");
    image.src = item.image;
    image.alt = item.alt;
    image.setAttribute("aria-label", `放大查看：${item.alt}`);
    document.querySelectorAll("[data-direction]").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    updatePromptLab();
  });
});

document.querySelectorAll("[data-language]").forEach(button => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    document.querySelectorAll("[data-language]").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    updatePromptLab();
  });
});

document.querySelectorAll("[data-tool]").forEach(button => {
  button.addEventListener("click", () => {
    const item = toolData[button.dataset.tool];
    document.querySelector("[data-tool-stage]").textContent = item.stage;
    document.querySelector("[data-tool-title]").textContent = item.title;
    document.querySelector("[data-tool-description]").textContent = item.description;
    document.querySelector("[data-tool-input]").textContent = item.input;
    document.querySelector("[data-tool-output]").textContent = item.output;
    document.querySelectorAll("[data-tool]").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
  });
});

const copyButton = document.querySelector("[data-copy-prompt]");
const copyToast = document.querySelector("[data-copy-toast]");
copyButton.addEventListener("click", async () => {
  const item = directionData[currentDirection];
  const positive = currentLanguage === "cn" ? item.promptCN : item.promptEN;
  const negativeLabel = currentLanguage === "cn" ? "负面提示词" : "Negative prompt";
  const negative = currentLanguage === "cn" ? item.negativeCN : item.negativeEN;
  const text = `${positive}\n\n${negativeLabel}: ${negative}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  copyToast.classList.add("show");
  copyButton.querySelector("[data-copy-label]").textContent = "已复制";
  window.setTimeout(() => {
    copyToast.classList.remove("show");
    copyButton.querySelector("[data-copy-label]").textContent = "复制提示词";
  }, 1600);
});

document.querySelectorAll("[data-series]").forEach(button => {
  button.addEventListener("click", () => {
    const item = seriesData[button.dataset.series];
    document.querySelector("[data-series-number]").textContent = item.number;
    document.querySelector("[data-series-title]").textContent = item.title;
    document.querySelector("[data-series-description]").textContent = item.description;
    const image = document.querySelector("[data-series-image]");
    image.src = item.image;
    image.alt = item.alt;
    image.setAttribute("aria-label", `放大查看：${item.alt}`);
    document.querySelectorAll("[data-series]").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
  });
});

const compare = document.querySelector("[data-compare]");
const compareInput = document.querySelector("[data-compare-input]");
compareInput.addEventListener("input", () => {
  compare.style.setProperty("--compare", `${compareInput.value}%`);
});

document.querySelectorAll(".storyboard details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".storyboard details").forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxTargets = document.querySelectorAll(
  ".mood-grid img, .direction-image-wrap img, .failure-strip img, .full-kv img, .detail-grid img, .series-image img, .storyboard img"
);

lightboxTargets.forEach(image => {
  image.classList.add("zoomable");
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `放大查看：${image.alt}`);
  const open = () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.alt;
    lightbox.showModal();
  };
  image.addEventListener("click", open);
  image.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

document.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
