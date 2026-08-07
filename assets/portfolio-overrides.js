const C03_PATH = "/case/fund-platform";
const C04_PATH = "/case/portfolio-recommendation";
const THEME_KEY = "shiva-portfolio-theme";
const LINKEDIN_URL = "https://www.linkedin.com/in/shiva-rezvani-0a6a8284/";

const coverImages = [
  { src: "/images/covers/c01.png", alt: "Gold trading product case study", title: "Gold, From Zero to One" },
  { src: "/images/covers/c02.jpg", alt: "Installment gold purchase case study", title: "A Loan Where the Gold Is the Guarantee" },
  { src: "/images/covers/c03.png", alt: "Investment fund comparison case study", title: "A Fund Platform, and the Number Nobody Could Read" },
  { src: "/images/covers/c04.png", alt: "Portfolio recommendation case study", title: "A Portfolio Recommendation, and How It Stopped Being True" },
];

const seniorMethods = [
  "Product strategy & vision",
  "Outcome framing & success metrics",
  "Stakeholder alignment",
  "Experiment design",
  "Accessibility & inclusive design",
  "Design leadership & critique",
];

const highResolutionImages = new Map([
  ["/images/c01/v01-trading-hub.jpg", "/images/hires/c01/v01-hero.jpg"],
  ["/images/c01/v03-interview-matrix.jpg", "/images/hires/c01/v03-interview-matrix.png"],
  ["/images/c01/v03-result-1.jpg", "/images/hires/c01/v03-result-01.png"],
  ["/images/c01/v03-result-2.jpg", "/images/hires/c01/v03-result-02.png"],
  ["/images/c01/v03-result-3.jpg", "/images/hires/c01/v03-result-03.png"],
  ["/images/c01/v03-result-4.jpg", "/images/hires/c01/v03-result-04.png"],
  ["/images/c01/v03-result-5.jpg", "/images/hires/c01/v03-result-05.png"],
  ["/images/c01/v03-result-6.jpg", "/images/hires/c01/v03-result-06.png"],
  ["/images/c01/v07-before-wallet.jpg", "/images/hires/c01/v07-before-wallet.jpg"],
  ["/images/c01/v07-before-buy-sell.jpg", "/images/hires/c01/v07-before-buy-sell.png"],
  ["/images/c01/v07-after-home.jpg", "/images/hires/c01/v07-after-home.png"],
  ["/images/c01/v07-after-buy.jpg", "/images/hires/c01/v07-after-buy.png"],
  ["/images/c01/v07-after-sell.jpg", "/images/hires/c01/v07-after-sell.png"],
  ["/images/c01/v10-two-step-sell.jpg", "/images/hires/c01/v10-two-step-sell.png"],
  ["/images/c01/v11-01.jpg", "/images/hires/c01/v11-01-home.png"],
  ["/images/c01/v11-02.jpg", "/images/hires/c01/v11-02-buy.png"],
  ["/images/c01/v11-03.jpg", "/images/hires/c01/v11-03-invoice.png"],
  ["/images/c01/v11-04.jpg", "/images/hires/c01/v11-04-confirmation.png"],
  ["/images/c01/v11-05.jpg", "/images/hires/c01/v11-05-wallet.png"],
  ["/images/c01/v11-06.jpg", "/images/hires/c01/v11-06-orders.png"],
  ["/images/c01/v11-07.jpg", "/images/hires/c01/v11-07-alerts.png"],
  ["/images/c01/v11-08.jpg", "/images/hires/c01/v11-08-price.png"],
  ["/images/c01/v11-09.jpg", "/images/hires/c01/v11-09-gift-card.png"],
  ["/images/c01/v11-10.jpg", "/images/hires/c01/v11-10-gift-received.png"],
  ["/images/c02/v06-no-blu-account.jpg", "/images/hires/c02/v06-no-blu-account.png"],
  ["/images/c02/v06-samat-rejects.jpg", "/images/hires/c02/v06-samat-rejects.png"],
  ["/images/c02/v06-both-cleared.jpg", "/images/hires/c02/v06-both-cleared.png"],
  ["/images/c02/v07-rejection-panel.jpg", "/images/hires/c02/v07-rejection-panel.png"],
  ["/images/c02/v08-fee-invoice.jpg", "/images/hires/c02/v08-fee-invoice.png"],
  ["/images/c02/v09-handoff.jpg", "/images/hires/c02/v09-handoff.png"],
  ["/images/c03/v03-fund-list.jpg", "/images/hires/c03/v03-fund-list.png"],
  ["/images/c03/v03-compare-result.jpg", "/images/hires/c03/v03-compare-result.png"],
  ["/images/c03/v04-empty-state.jpg", "/images/hires/c03/v04-empty-state.png"],
  ["/images/c03/v04-add-fund.jpg", "/images/hires/c03/v04-add-fund.png"],
  ["/images/c03/v04-both-filled.jpg", "/images/hires/c03/v04-both-filled.png"],
  ["/images/c03/v05-before.jpg", "/images/hires/c03/v05-before.png"],
  ["/images/c03/v05-after.jpg", "/images/hires/c03/v05-after.png"],
  ["/images/c03/v06-before.jpg", "/images/hires/c03/v06-before.png"],
  ["/images/c03/v06-after.jpg", "/images/hires/c03/v06-after.png"],
  ["/images/c03/v12-calculator.jpg", "/images/hires/c03/v12-calculator.png"],
  ["/images/c04/v03-onboarding-1.jpg", "/images/hires/c04/v03-onboarding-01.png"],
  ["/images/c04/v03-onboarding-2.jpg", "/images/hires/c04/v03-onboarding-02.png"],
  ["/images/c04/v03-onboarding-3.jpg", "/images/hires/c04/v03-onboarding-03.png"],
  ["/images/c04/v04-roadmap.jpg", "/images/hires/c04/v04-roadmap.png"],
  ["/images/c04/v04-initial-capital.jpg", "/images/hires/c04/v04-initial-capital.png"],
  ["/images/c04/v04-monthly.jpg", "/images/hires/c04/v04-monthly.png"],
  ["/images/c04/v04-duration.jpg", "/images/hires/c04/v04-duration.png"],
  ["/images/c04/v04-passage-investment.jpg", "/images/hires/c04/v04-passage-investment.png"],
  ["/images/c04/v04-passage-risk.jpg", "/images/hires/c04/v04-passage-risk.png"],
  ["/images/c04/v04-passage-projection.jpg", "/images/hires/c04/v04-passage-projection.png"],
  ["/images/c04/v04-passage-funds.jpg", "/images/hires/c04/v04-passage-funds.png"],
  ["/images/c04/v05-three-doors.jpg", "/images/hires/c04/v05-three-doors.png"],
  ["/images/c04/v05-coin-flip.jpg", "/images/hires/c04/v05-coin-flip.png"],
  ["/images/c04/v05-number-guess.jpg", "/images/hires/c04/v05-number-guess.png"],
  ["/images/c04/v06-steel-rose.jpg", "/images/hires/c04/v06-steel-rose.png"],
  ["/images/c04/v06-dollar-fell.jpg", "/images/hires/c04/v06-dollar-fell.png"],
  ["/images/c04/v08-result-screen.jpg", "/images/hires/c04/v08-result-screen.png"],
  ["/images/c04/v09-projection.jpg", "/images/hires/c04/v09-projection.png"],
  ["/images/c04/v10-portfolio.jpg", "/images/hires/c04/v10-portfolio.png"],
]);

const linkedinIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <path d="M6.6 8.2H3.2V19h3.4V8.2ZM6.8 4.9c0-1.1-.8-1.9-1.9-1.9S3 3.8 3 4.9s.8 1.9 1.9 1.9 1.9-.8 1.9-1.9ZM12.1 8.2H8.8V19h3.4v-5.3c0-1.4.3-2.8 2.1-2.8 1.8 0 1.8 1.7 1.8 2.9V19h3.4v-5.9c0-2.9-.6-5.2-4.1-5.2-1.7 0-2.8.9-3.3 1.8V8.2Z" fill="currentColor"/>
  </svg>`;

const emailIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
    <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

function savedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme, persist = false) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.portfolioTheme = nextTheme;
  document.documentElement.dataset.theme = "neutral";
  document.documentElement.style.colorScheme = nextTheme;

  const toggle = document.querySelector(".portfolio-theme-toggle");
  if (toggle) {
    const isDark = nextTheme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.querySelector(".portfolio-theme-toggle__moon")?.toggleAttribute("hidden", isDark);
    toggle.querySelector(".portfolio-theme-toggle__sun")?.toggleAttribute("hidden", !isDark);
  }

  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // The selected theme still applies for this session.
    }
  }
}

function homeAnchorTarget(hash) {
  if (hash === "#work") return document.querySelector("#work .band__head") || document.querySelector("#work");
  if (hash === "#about") return document.querySelector("#about .about") || document.querySelector("#about");
  if (hash === "#contact") return document.querySelector("#contact .contact") || document.querySelector("#contact");
  return document.querySelector(hash);
}

function scrollHomeAnchor(hash, behavior = "auto") {
  const target = homeAnchorTarget(hash);
  if (!target) return false;

  const navigation = document.querySelector(".portfolio-nav");
  const navBottom = navigation?.getBoundingClientRect().bottom || 72;
  const top = target.getBoundingClientRect().top + window.scrollY - navBottom - 24;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior });
  return true;
}

function installNavigation() {
  document.querySelector(".nav")?.setAttribute("aria-hidden", "true");
  let navigation = document.querySelector(".portfolio-nav");

  if (!navigation) {
    navigation = document.createElement("nav");
    navigation.className = "portfolio-nav";
    navigation.setAttribute("aria-label", "Primary navigation");
    navigation.innerHTML = `
      <a class="portfolio-nav__name" href="/" aria-label="Shiva Rezvani — Home"><span>Shiva Rezvani</span></a>
      <div class="portfolio-nav__links">
        <a href="/#work">Projects</a>
        <a href="/#about">About me</a>
        <a href="/#contact">Contact</a>
      </div>
      <button class="portfolio-theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false">
        <svg class="portfolio-theme-toggle__moon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="portfolio-theme-toggle__sun" aria-hidden="true" viewBox="0 0 24 24" hidden><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>`;
    document.body.append(navigation);

    navigation.addEventListener("click", (event) => {
      const toggle = event.target.closest(".portfolio-theme-toggle");
      if (toggle) {
        const nextTheme = document.documentElement.dataset.portfolioTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme, true);
        return;
      }

      const link = event.target.closest("a");
      if (!link || window.location.pathname !== "/") return;
      const url = new URL(link.href);
      if (url.pathname !== "/") return;

      if (!url.hash) {
        event.preventDefault();
        history.replaceState(null, "", "/");
        lastAutoAlignedLocation = "/";
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
        return;
      }

      if (!homeAnchorTarget(url.hash)) return;
      event.preventDefault();
      history.replaceState(null, "", url.hash);
      lastAutoAlignedLocation = `/${url.hash}`;
      scrollHomeAnchor(url.hash, "auto");
    });
  }
}

function installContactDesign() {
  const contact = document.querySelector("#contact .contact");
  if (contact && !contact.dataset.channelsInstalled) {
    contact
      .querySelectorAll('a[href^="mailto:"], .contact__linkedin, .contact__channels')
      .forEach((node) => node.remove());

    const channels = document.createElement("div");
    channels.className = "contact__channels";
    channels.innerHTML = `
      <a class="contact-channel" href="mailto:shiva.rezvaniii@gmail.com">
        <span class="contact-channel__icon">${emailIcon}</span>
        <span class="contact-channel__copy">
          <span class="contact-channel__label">Email</span>
          <span class="contact-channel__value">shiva.rezvaniii@gmail.com</span>
        </span>
        <span class="contact-channel__arrow" aria-hidden="true">↗</span>
      </a>
      <a class="contact-channel" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer noopener">
        <span class="contact-channel__icon">${linkedinIcon}</span>
        <span class="contact-channel__copy">
          <span class="contact-channel__label">LinkedIn</span>
          <span class="contact-channel__value">Connect with me</span>
        </span>
        <span class="contact-channel__arrow" aria-hidden="true">↗</span>
      </a>`;
    contact.append(channels);
    contact.dataset.channelsInstalled = "true";
  }

  const footer = document.querySelector(".foot__contact");
  if (footer && !footer.dataset.channelsInstalled) {
    const heading = footer.querySelector(".eyebrow")?.outerHTML || '<p class="eyebrow">Contact</p>';
    const location = footer.querySelector(".foot__loc")?.textContent.trim() || "Tehran, Iran";
    footer.innerHTML = `
      ${heading}
      <div class="foot-contact-list">
        <a class="foot-contact-link" href="mailto:shiva.rezvaniii@gmail.com">
          <span class="foot-contact-link__icon">${emailIcon}</span>
          <span>Email</span>
          <span class="foot-contact-link__arrow" aria-hidden="true">↗</span>
        </a>
        <a class="foot-contact-link" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer noopener">
          <span class="foot-contact-link__icon">${linkedinIcon}</span>
          <span>LinkedIn</span>
          <span class="foot-contact-link__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <p class="foot__loc">${location}</p>`;
    footer.dataset.channelsInstalled = "true";
  }
}

function enhanceHomepage() {
  if (window.location.pathname !== "/") return;
  document.querySelector(".home-hero__available")?.remove();
  document.querySelectorAll(".about__more").forEach((node) => node.remove());

  document.querySelectorAll(".project").forEach((project, index) => {
    const body = project.querySelector(".project__body");
    body?.querySelectorAll(":scope > *:not(.project__title)").forEach((node) => node.remove());
    project.querySelector(".project__num")?.remove();

    const placeholder = project.querySelector(".project__art .ph");
    const cover = coverImages[index];
    if (!placeholder || !cover || placeholder.dataset.coverInstalled) return;

    const image = document.createElement("img");
    image.src = cover.src;
    image.alt = cover.alt;
    image.loading = index < 2 ? "eager" : "lazy";
    placeholder.replaceChildren(image);
    placeholder.classList.add("ph--filled", "project__cover");
    placeholder.dataset.coverInstalled = "true";
  });

  const methods = document.querySelector("#method .methods");
  if (methods) {
    seniorMethods.forEach((method) => {
      if ([...methods.children].some((item) => item.textContent.trim() === method)) return;
      const item = document.createElement("span");
      item.className = "method method--added";
      item.textContent = method;
      methods.append(item);
    });
  }
}

function fixC03Visuals() {
  if (window.location.pathname !== C03_PATH) return;

  document.querySelectorAll(".case .figure:not([data-c03-checked])").forEach((figure) => {
    const label = figure.querySelector(".figure__caption")?.textContent || "";

    if (/Visual\s+14\b/i.test(label)) {
      figure.classList.add("c03-visual-14");
      figure.innerHTML = `
        <div class="c03-visual-14__frame">
          <img src="/images/hires/c03/visual-14.jpg" alt="Referral, fund account dashboard, and account-created screens" loading="lazy">
        </div>`;
    } else if (/Visual\s+(?:05|06)\b/i.test(label)) {
      figure.classList.add("c03-before-after");
    } else if (/Visual\s+16\b/i.test(label)) {
      figure.remove();
      return;
    }

    figure.dataset.c03Checked = "true";
  });

  const context = document.querySelector("#stage-01");
  if (context && !context.querySelector(".c03-context-comparison")) {
    const contextFigures = [...context.querySelectorAll(":scope > .figure")].filter((figure) =>
      figure.querySelector(":scope > .screen-grid"),
    );

    if (contextFigures.length >= 2) {
      const comparison = document.createElement("div");
      comparison.className = "c03-context-comparison";
      comparison.setAttribute("aria-label", "Before and after context screens");
      context.insertBefore(comparison, contextFigures[0]);

      contextFigures.slice(0, 2).forEach((figure, index) => {
        const panel = document.createElement("section");
        panel.className = `c03-context-panel c03-context-panel--${index === 0 ? "before" : "after"}`;
        panel.innerHTML = `
          <div class="c03-context-panel__head">
            <span class="fb__badge ${index === 0 ? "is-neg" : "is-pos"}">${index === 0 ? "Before" : "After"}</span>
          </div>`;
        figure.querySelector(".screen-grid")?.classList.add(
          index === 0 ? "c03-context-grid--before" : "c03-context-grid--after",
        );
        panel.append(figure);
        comparison.append(panel);
      });
    }
  }
}

function replaceText(root, replacements) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    let next = node.nodeValue;
    replacements.forEach(([pattern, replacement]) => {
      next = next.replace(pattern, replacement);
    });
    if (next !== node.nodeValue) node.nodeValue = next;
  });
}

function fixC03Content() {
  if (window.location.pathname !== C03_PATH) return;
  const project = document.querySelector(".case");
  if (!project) return;

  project.querySelectorAll(".stage__note").forEach((note) => {
    if (/5\s+days\s+from\s+findings/i.test(note.textContent)) note.remove();
  });

  project.querySelectorAll(".fb__pill").forEach((pill) => {
    if (/^\s*five\s+days\s*$/i.test(pill.textContent)) pill.remove();
  });

  replaceText(project, [
    [/215 responses in 3 days/gi, "215 responses"],
    [/From findings report to build queue in under a week/gi, "From findings report to build queue"],
    [/a team of seven or eight engineers/gi, "a team of 3–4 engineers"],
  ]);
}

function fixC04Hero() {
  if (window.location.pathname !== C04_PATH) return;

  const hero = document.querySelector(".hero__figure .figure");
  const image = hero?.querySelector("img");
  if (!hero || !image || hero.dataset.c04HeroFixed) return;

  image.src = "/images/hires/c04/v01-hero.jpg";
  image.alt = "Portfolio recommendation and behavioural risk-assessment experience";
  image.removeAttribute("width");
  image.removeAttribute("height");
  hero.querySelector(".ph")?.style.setProperty("aspect-ratio", "3 / 2");
  hero.dataset.c04HeroFixed = "true";
}

function fixC04ContentAndCharts() {
  if (window.location.pathname !== C04_PATH) return;
  const project = document.querySelector(".case");
  if (!project) return;

  project.querySelectorAll("li, .stage__statement, .fig__title, p").forEach((node) => {
    if (/twelve-screen flow/i.test(node.textContent)) node.remove();
  });

  replaceText(project, [
    [
      /Two questions stay constant:\s*initial capital and monthly contribution always appear; only the risk questions change\./gi,
      "Three questions stay constant: initial capital, monthly contribution and duration always appear; only the risk questions change.",
    ],
    [/Four questions/gi, "Five questions"],
    [/four questions/gi, "five questions"],
    [/same four/gi, "same five"],
  ]);

  project.querySelectorAll(".figure:not([data-c04-chart-checked])").forEach((figure) => {
    const label = figure.querySelector(".figure__caption")?.textContent || "";
    let source = "";
    let modifier = "";
    let alt = "";

    if (/Visual\s+03\b/i.test(label)) {
      source = "/images/hires/c04/visual-03-flow.svg";
      modifier = "c04-chart--flow";
      alt = "Portfolio recommendation flow with three fixed capacity questions and five risk scenarios";
    } else if (/Visual\s+04\b/i.test(label)) {
      source = "/images/hires/c04/visual-04-roadmap.svg";
      modifier = "c04-chart--roadmap";
      alt = "Portfolio recommendation roadmap and question sequence";
    }

    if (source) {
      figure.classList.add("c04-chart-figure");
      figure.innerHTML = `
        <div class="c04-chart ${modifier}">
          <img src="${source}" alt="${alt}" loading="lazy">
        </div>`;
    }
    figure.dataset.c04ChartChecked = "true";
  });
}

function upgradeImageQuality() {
  document.querySelectorAll(".case img:not([data-quality-checked])").forEach((image) => {
    const currentPath = new URL(image.currentSrc || image.src, window.location.origin).pathname;

    // C04's first visual has its own dedicated hero. The market-history screen is
    // still reused later in the case and is upgraded through the regular map.
    if (window.location.pathname === C04_PATH && image.closest(".hero__figure")) {
      image.dataset.qualityChecked = "true";
      return;
    }

    const replacement = highResolutionImages.get(currentPath);
    if (replacement) image.src = replacement;
    image.dataset.qualityChecked = "true";
  });
}

function constrainPhoneScreens() {
  document.querySelectorAll(".case .ph, .case .screen-grid__frame").forEach((frame) => {
    const ratioText = frame.style.aspectRatio || getComputedStyle(frame).aspectRatio || "";
    const [width, height] = ratioText.split("/").map(Number);
    if (width > 0 && height > 0 && width / height < 0.62) frame.classList.add("is-phone-frame");
  });

  document.querySelectorAll(".case .fb__shot").forEach((shot) => {
    if (shot.querySelector(".is-phone-frame")) shot.classList.add("is-phone-shot");
  });
}

function removeProjectMetadataAndVisualLabels() {
  document.querySelectorAll(".case .meta").forEach((node) => node.remove());
  document
    .querySelectorAll(".case .figure__caption, .case .fb__cap, .case .screen-grid__item figcaption")
    .forEach((node) => node.remove());
}

let previousPathname = null;
let lastAutoAlignedLocation = "";

function resetCaseScrollPosition() {
  const pathname = window.location.pathname;
  if (pathname === previousPathname) return;
  previousPathname = pathname;

  if (pathname.startsWith("/case/") && !window.location.hash) {
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })));
  }
}

function alignHomepageHash() {
  if (window.location.pathname !== "/") {
    lastAutoAlignedLocation = "";
    return;
  }

  const hash = window.location.hash;
  if (!hash) return;
  const locationKey = `/${hash}`;
  if (locationKey === lastAutoAlignedLocation) return;
  if (!homeAnchorTarget(hash)) return;

  lastAutoAlignedLocation = locationKey;
  requestAnimationFrame(() => requestAnimationFrame(() => scrollHomeAnchor(hash, "auto")));
}

function applyPortfolioChanges() {
  applyTheme(document.documentElement.dataset.portfolioTheme || savedTheme());
  document.body.classList.toggle("is-c04", window.location.pathname === C04_PATH);
  installNavigation();
  resetCaseScrollPosition();
  enhanceHomepage();
  installContactDesign();
  fixC03Visuals();
  fixC03Content();
  fixC04Hero();
  fixC04ContentAndCharts();
  upgradeImageQuality();
  constrainPhoneScreens();
  removeProjectMetadataAndVisualLabels();
  alignHomepageHash();
}

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

let frame = 0;
const scheduleApply = () => {
  window.cancelAnimationFrame(frame);
  frame = window.requestAnimationFrame(applyPortfolioChanges);
};

new MutationObserver(scheduleApply).observe(document.getElementById("root"), {
  childList: true,
  subtree: true,
});

window.addEventListener("popstate", scheduleApply);
window.addEventListener("hashchange", scheduleApply);
scheduleApply();
