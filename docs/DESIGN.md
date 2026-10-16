---
name: 덜어냄
verified: '2026-10-16'
reference: 'Kakao (카카오) design reference — https://www.kakaocorp.com/page/ , https://developers.kakao.com/docs/ko/kakaologin/design-guide'
runtime_deps:
  icons: lucide-react
  fonts: [Pretendard]
colors:
  kakao-login: '#fee500'
  kakao-login-symbol: '#000000'
  kakao-login-label: '#000000'
  accent: '#fae100'
  ink-strong: '#111111'
  canvas: '#ffffff'
  foreground: '#333333'
  on-dark: '#ffffff'
  muted: '#888888'
  surface: '#eeeeee'
  border: '#dbdbdb'
typography:
  display:
    fontSize: 53.82px
    fontWeight: 700
    lineHeight: 66px
    letterSpacing: '-1px'
  heading:
    fontSize: 30px
    fontWeight: 700
    lineHeight: 40px
  title:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 42px
  nav:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27px
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  body-readable:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24.92px
    letterSpacing: '-0.2px'
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: '-0.2px'
rounded:
  kakao-login: 12px
  accent-pill: 16px
  icon-button: 18px
  fold-toggle: 24px
  filter: 30px
  full: 999px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 16
  xl: 20
components:
  kakao-login:
    type: button
    backgroundColor: '#fee500'
    textColor: rgba(0, 0, 0, 0.85)
    rounded: 12px
    typography: 30Pt / OS system
    states: full label or shortened label; hover, pressed, and disabled visuals are not specified by this guide
    use: '(unused — reference-specific) Kakao Login only, if Kakao sign-in is ever added; preserve black speech-bubble symbol and mandated colors'
  top-nav:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 999px
    padding: 4px 16px 6px
    height: 37px
    typography: 17px / 400 / Pretendard
    hover: 'bg #f3f3f3'
    pressed: 'bg #f3f3f3'
    focus: 'bg #f3f3f3'
    states: 'light and dark theme variants; hover and pressed bg #f3f3f3 in the 2026-07-11 capture on three corporate pages and again on 2026-09-29 with :hover and :active matched; keyboard focus (Tab stop 4, :focus-visible matched) fills bg #f3f3f3 beside the browser default ring (outline auto); the fill stayed after focus moved on, which suggests a script-applied current-item state (a lead, not a finding)'
    use: top-level navigation pill (e.g. switching between 오늘 세 가지 and the full list)
  icon-button:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 18px
    height: 36px
    typography: 14px / 400 / Pretendard
    hover: 'bg #eeeeee'
    pressed: 'bg #eeeeee'
    states: 'hover and pressed bg #eeeeee, measured 2026-09-29 on the corporate home with :hover and :active matched and sampled 2026-07-11 on the search, language and theme buttons of the corporate pages; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; the search input opens in a layer behind a click and was not measured'
    use: circular 36px icon button (settings, theme, calendar refresh); one Lucide icon per button
  ink-tag:
    type: badge
    backgroundColor: '#111111'
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 16px
    padding: 7px 8px 8px
    height: 32px
    typography: 13px / 700 / Pretendard
    hover: bg rgba(17, 17, 17, 0.75)
    pressed: bg rgba(17, 17, 17, 0.75)
    states: hover and pressed bg rgba(17, 17, 17, 0.75), sampled 2026-07-11 and confirmed 2026-09-29 with :hover and :active matched; border and label stay as at rest; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared
    use: small dark label, e.g. marking a recurring item (반복 할 일)
  category-filter:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#000000'
    rounded: 30px
    padding: 8px 20px 12px
    height: 44px
    typography: 16px / 700 / Pretendard
    pressed: 'bg #dfdfdf'
    states: 'selected filter captured; pressed bg #dfdfdf from one 2026-07-11 frame on the category combobox (surface-3::[data-omd-capture="15"]); hover and focus not sampled'
    use: category filter for 개인 · 업무 · 자기 계발
  fold-toggle:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#000000'
    rounded: 24px
    padding: 10px 20px 12px
    height: 40px
    typography: 12px / 400 / Pretendard
    states: 'default captured 2026-07-11 on the milestones page; on 2026-09-29 the same pill on the corporate home matched :hover and :active and kept bg #eeeeee and fg #000000, so there is no hover or pressed value to declare; keyboard focus draws only the browser default ring (outline auto)'
    use: toggle that opens the folded list (잠깐 접어둘게요) of remaining and finished items
  primary-action:
    type: button
    backgroundColor: '#fae100'
    textColor: '#000000'
    border: '2px solid #000000'
    rounded: 16px
    padding: 7px 13px 8px 30px
    height: 32px
    typography: 13px / 700 / Pretendard
    states: default captured 2026-07-11 (home::[data-omd-capture="10"], 142 x 32, tracking -0.5px); on 2026-09-29 hover and pressed matched :hover and :active and left fill, border and label at rest, so no hover or pressed value is declared; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared
    use: 'The one primary action on a screen (accent fill), e.g. 쏟아내 주세요 submit; at most one per screen. Reference origin: Kakao corporate-home download pill'
  today-three-card:
    type: card
    backgroundColor: transparent
    textColor: '#111111'
    padding: 0px 16px 0px 0px
    size: 288px x 299px
    typography: 30px / 700
    hover: icon opacity 1 via title ::after (24 x 24 SVG)
    pressed: icon opacity 1 via title ::after (24 x 24 SVG)
    states: 'rest, hover and pressed measured 2026-09-29 with :hover and :active matched: the title ::after icon goes from opacity 0 to 1 and nothing recolours, moves or casts a shadow; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; fg and font are the title label (strong.title_service), not the anchor (#333333, 14px / 400 / Pretendard); not in the 2026-07-11 capture'
    use: one of 오늘 세 가지 — large 30px/700 title with a short description; the 120px image slot is optional
  text-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    height: 20px
    typography: 14px / 400 / Pretendard
    hover: 'fg #111111'
    pressed: 'fg #111111'
    states: 'default, hover and pressed sampled 2026-07-11 on three sibling links (surface-3 captures 21, 22 and 23), each fg #333333 to #111111, the dark-marketing colour; focus not sampled (the 2026-09-29 probe covered the corporate home only)'
    use: inline text link for secondary navigation (e.g. 다음 조각은 …); line height 24.92px, tracking -0.2px
  carousel-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #dbdbdb'
    rounded: 50%
    size: 50px x 50px
    typography: 14px / 400 / Pretendard
    states: default captured 2026-07-11 (surface-2::[data-omd-capture="11"]); no pointer-state sample
    use: '(unused — reference-specific) circular carousel control from the Kakao culture page; the element behind the #dbdbdb border token'
fonts:
  roles:
    display: Pretendard
    text: Pretendard
    login: System
---

<!--
Conversion note
- Reference: Kakao (카카오) design reference — https://www.kakaocorp.com/page/ , https://developers.kakao.com/docs/ko/kakaologin/design-guide
- Visual tokens (color values, type scale, spacing, radius, flat elevation, 0s transitions) are kept byte-for-byte from the reference.
- Meta, naming, rationale and voice were rewritten from docs/VOICE.md (Deoreonaem / 덜어냄) by design-brandfit on 2026-10-16.
- Font family substituted: KakaoBig / KakaoSmall → Pretendard (Kakao corporate fonts carry no general redistribution right; Pretendard has full Hangul coverage, OFL). Sizes, weights, line heights and tracking unchanged.
- Color decision: values unchanged, including Kakao marketing yellow #fae100 as the accent. Its vividness is managed by scarcity (one primary action per screen) to keep the calm voice.
- Voice samples are planning copy for a new service and have not been tested with users.
- Brand Narrative and Personas were removed (covered by VOICE.md and PRODUCT.md).
-->

# Design System — Deoreonaem (덜어냄)

## Overview

### Visual Theme & Atmosphere

Deoreonaem (덜어냄) is a calm companion that takes the weight of a crowded head and hands back only what matters today: 오늘 세 가지. The surface stays flat and quiet — white canvas, dark readable text, compact Pretendard type, no shadows and no animated transitions — so that nothing on screen competes with the three things to do. A single vivid yellow is reserved for the one action that moves the day forward.

The rationale comes from the brand voice: calm (차분한), decisive on the user's behalf (단호한), warm (다정한) and brief (간결한). A busy or decorated interface would add load; this system removes it. Every screen should feel like something was lifted (덜었어요), not added.

**Key Characteristics:**
- One family: Pretendard for display and text (substituted for Kakao's corporate fonts)
- Flat surfaces: no shadow tokens, instant state changes (`transition: all 0s`)
- One accent: `#fae100`, at most one primary action per screen
- Kakao Login yellow `#fee500` stays reserved for a Kakao sign-in button only (unused unless that integration is added)

### Primary tasks

- See today's and tomorrow's schedule from several calendars in one place
- Pour out what's on your mind (쏟아내 주세요) and get it sorted into 개인 · 업무 · 자기 계발
- Do only 오늘 세 가지, one piece (한 조각) at a time
- Get tomorrow's preparation added to today (챙겨뒀어요)

### Principles

Implementation principles. Numbers stay as measured in the reference; the reasons below come from the Deoreonaem voice.

1. **Less on screen, always.** Show 오늘 세 가지 and fold the rest away. A new element must lift load, not add it.
2. **One family, many sizes.** Pretendard carries every role; hierarchy comes from the measured scale, not from mixing families.
3. **The accent is scarce.** `#fae100` marks the single next action. Kakao Login `#fee500` stays a separate, regulated token used only for a Kakao sign-in button.
4. **Calm states, explicit words.** There are no alarm colors; errors and missed items are told in calm, explicit copy ("캘린더를 불러오지 못했어요. 잠시 뒤 다시 가져올게요.").
5. **Don't invent tokens.** Build only from the tokens in this file. Do not borrow KakaoTalk chat bubbles or other remembered Kakao patterns.

### Usage Boundaries
| Element | Use for | Never use for |
|---|---|---|
| accent (`#fae100`) | The one primary action per screen (primary-action) | Background fills, body text, warnings, decoration |
| kakao-login (`#fee500`) | A Kakao Login button only, if that integration is added | Anything else |
| ink-strong (`#111111`) | Small tags (ink-tag), today-three-card titles | Large background surfaces |
| display type (53.82px / 700) | Landing page hero only | In-app screens |
| muted (`#888888`) | Supporting metadata such as time and category | Task names; marking unfinished items (no greying-out as blame) |

## Colors

### Kakao Login (unused — reference-specific)
Only if Kakao sign-in is ever added. Values stay exactly as the official guide mandates.
- **Container** (`#fee500`): mandatory login-button background.
- **Symbol** (`#000000`): mandatory speech-bubble symbol color.
- **Label** (`rgba(0, 0, 0, 0.85)`): mandatory 85% black label.

The official guide explicitly says colors outside this regulation must not be applied and that another third-party login button must not be emphasized by omitting Kakao's button color.

### Core palette
- **Accent — Lift Yellow** (`#fae100`): the one next action, the moment something gets lifted. Scarce by rule.
- **Ink Strong** (`#111111`): small dark tags and the strongest titles.
- **Canvas** (`#ffffff`): the quiet, empty background — empty is a good state here.
- **Foreground** (`#333333`): primary text and control color.
- **On Dark** (`#ffffff`): content on black/dark surfaces.
- **Muted** (`#888888`): supporting metadata (time, category).
- **Surface** (`#eeeeee`): category-filter and fold-toggle fill.
- **Border** (`#dbdbdb`): thin borders on outlined controls.

## Typography

### Font family
- **Pretendard** for every role. Stack: `Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`. License: SIL Open Font License (OFL).
- Substitution: reference KakaoBig / KakaoSmall → Pretendard, because the Kakao corporate fonts have no general redistribution right and the product needs full Hangul coverage. Size, weight, line height and tracking below are unchanged.
- **System**: kept only for the Kakao Login label (unused unless that integration is added).

| Role | Family | Size | Weight | Line Height | Tracking |
|---|---|---:|---:|---:|---:|
| Display | Pretendard | 53.82px | 700 | 66px | -1px |
| Heading | Pretendard | 30px | 700 | 40px | normal |
| Title | Pretendard | 28px | 700 | 42px | normal |
| Navigation | Pretendard | 17px | 400 | 27px | normal |
| Body | Pretendard | 14px | 400 | 21px | normal |
| Readable Body | Pretendard | 14px | 400 | 24.92px | -0.2px |
| Caption | Pretendard | 12px | 400 | 18px | -0.2px |
| Kakao Login Label (unused) | OS system | 30Pt | guide does not specify | proportional | unchanged |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.login-label.fontSize`: `30Pt`

## Layout

- Corporate content uses a compact 4/6/8/16/20 spacing rhythm around controls and text.
- The Login guide requires the symbol and label zones to remain intact when widening the container; expand left and right equally.
- When scaling the whole Login button, preserve symbol/label proportions and keep the label height at no more than one third of the container height.

### Responsive Behavior

The corporate pages are responsive, but this run does not promote universal breakpoints. For the Login button, follow the official proportional resizing rule: extend both sides equally when widening, preserve symbol/label zones, and use the shortened label if a smaller format is required.

## Elevation & Depth

No canonical shadow token is promoted. Captured corporate controls are largely flat; the Developers documentation site contains its own hover shadows, but those belong to documentation chrome rather than the Kakao Login component.

## Motion & Easing

No exact motion duration or easing token is promoted. Preserve focus and hover clarity on the corporate site and platform-standard interaction feedback for the Login button; label custom timing as an extension until first-party evidence is available.

On 2026-09-29 all six probed corporate-home controls computed `transition: all 0s`: their hover, pressed and focus changes are instant, not animated.

## Components

### Kakao Login Button (unused — reference-specific)
- Background: `#fee500`
- Symbol: `#000000`, mandatory Kakao speech bubble; shape, proportion, and color cannot change
- Label: `rgba(0, 0, 0, 0.85)`
- Radius: 12px
- Font: 30Pt OS default system font
- Labels: `카카오 로그인` / `Login with Kakao`, or shortened `로그인` / `Login`
- States: full or shortened label; hover, pressed, and disabled visuals are not specified by this guide
- Use: login integration only; preserve symbol/label area when resizing

### Top Navigation Pill (top-nav)
- Background: `#ffffff` in light mode; `#000000` on captured dark subpages
- Text: `#000000` in light mode; `#ffffff` in dark mode
- Radius: 999px
- Padding: 4px 16px 6px
- Height: 37px
- Font: 17px / 400 / Pretendard
- Hover and pressed: bg `#f3f3f3` (2026-07-11 capture on three corporate pages; 2026-09-29 probe with `:hover` and `:active` matched)
- Focus: keyboard focus fills bg `#f3f3f3` next to the browser's default ring. The fill was still there after focus moved to the next control, which looks like a script-applied "current menu item" state rather than a `:focus` rule; computed styles cannot tell the two apart, so treat it as a lead.
- States: light/dark themes, hover, pressed, focus

### Icon Button (icon-button)
- Background: transparent
- Text/Icon: `#333333`
- Radius: 18px
- Height: 36px
- Font context: 14px / 400 / Pretendard
- Hover and pressed: bg `#eeeeee` (the surface grey), on the corporate home on 2026-09-29 and on the search, language and theme buttons in the 2026-07-11 capture
- Focus: the browser's default ring only, which is not a Kakao style, so no focus value is declared
- Use: one Lucide icon per 36px circle (settings, theme, calendar refresh)

### Ink Tag (ink-tag)
- Background: `#111111`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 16px
- Padding: 7px 8px 8px
- Height: 32px
- Font: 13px / 700 / Pretendard
- Use: small dark label, e.g. 반복 할 일
- Hover and pressed: bg `rgba(17, 17, 17, 0.75)`; border and label stay (2026-07-11 capture, confirmed 2026-09-29)
- Focus: the browser's default ring only

### Primary Action Pill (primary-action)
- Background: `#fae100` (accent; at most one per screen)
- Text: `#000000`
- Border: 2px solid `#000000`
- Radius: 16px
- Padding: 7px 13px 8px 30px
- Height: 32px
- Font: 13px / 700 / Pretendard, tracking -0.5px
- States: on 2026-09-29 hover and pressed (`:hover` and `:active` matched) left the fill, border and label as at rest, so the pill does not respond to the pointer. Keyboard focus shows only the browser's default ring.
- Use: the one next action, e.g. `쏟아내 주세요` (submit the brain dump)

### Category Filter (category-filter)
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 30px
- Padding: 8px 20px 12px
- Height: 44px
- Font: 16px / 700 / Pretendard
- Pressed: bg `#dfdfdf`, from one 2026-07-11 frame on the category combobox
- States: selected filter captured; hover and focus not sampled
- Use: `개인` · `업무` · `자기 계발`

### Fold Toggle (fold-toggle)
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 24px
- Padding: 10px 20px 12px
- Height: 40px
- Font: 12px / 400 / Pretendard
- Use: opens the folded list, e.g. `잠깐 접어둘게요` / remaining and finished items
- States: default captured on 2026-07-11. On 2026-09-29 the pill matched `:hover` and `:active` and kept bg `#eeeeee` and fg `#000000`: it has no pointer response. Keyboard focus shows only the browser's default ring. (Corrected 2026-09-29: earlier text said hover was "not retained", which read as a capture gap.)

### Today-Three Card (today-three-card)
- Background: transparent
- Title: `#111111`, 30px / 700; the description is `#333333`, 14px / 400 / Pretendard
- Use: one card per item of 오늘 세 가지; no more than three on screen
- Size: 288 × 299px with 16px right padding and a 120px service image
- Hover and pressed: a 24 × 24 SVG icon on the title's `::after` goes from opacity 0 to 1; nothing recolours, moves or casts a shadow
- Focus: the browser's default ring only
- Source: the 2026-09-29 probe; the July capture holds no home service card

### Text Link (text-link)
- Background: transparent
- Text: `#333333`
- Font: 14px / 400 / Pretendard, line height 24.92px, tracking -0.2px
- Height: 20px
- Hover and pressed: fg `#111111`, on three sibling links in the 2026-07-11 capture
- Use: inline secondary links, e.g. `다음 조각은 …`

### Carousel Control (unused — reference-specific)
- Background: `#ffffff`
- Icon: `#333333`
- Border: 1px solid `#dbdbdb`
- Radius: 50% on a 50 × 50px circle
- States: default only
- Use: circular carousel control on the culture page

### Keyboard focus (2026-09-29)
All six controls probed on the corporate home (navigation pill, search button, download pill, dark tag, service card, footer pill) draw the browser's default focus ring (`outline: auto`, rendered `#005fcc`). That ring is Chrome's, not Kakao's, so no component carries it as a focus value. The navigation pill is the only control that adds an authored change, its `#f3f3f3` fill.

---

**Verified:** 2026-07-11 (verification v2, current corporate surfaces + rendered official Login guide); states re-measured 2026-09-29 by a live probe of the corporate home
**Tier 1 sources:** https://www.kakaocorp.com/page/ https://www.kakaocorp.com/page/about/culture https://www.kakaocorp.com/page/about/milestones https://developers.kakao.com/docs/ko/kakaologin/design-guide
**Tier 2 sources:** https://getdesign.md/kakao and https://styles.refero.design/?q=Kakao did not provide importable current Kakao records in this run.
**Surface split (reference):** Kakao corporate marketing uses KakaoBig/KakaoSmall (this system substitutes Pretendard); the Login component requires OS system type; Developers docs chrome uses Pretendard.
**Conflicts unresolved:** none

### States

| Component | Verified state evidence |
|---|---|
| Kakao Login (unused) | full/short label and resizing constraints; interaction-state styling not specified |
| top-nav | light/dark themes; hover and pressed bg `#f3f3f3`; keyboard focus bg `#f3f3f3` beside the browser ring (the fill persists after blur: a lead) |
| icon-button | hover and pressed bg `#eeeeee`; focus is the browser ring |
| ink-tag | hover and pressed bg `rgba(17, 17, 17, 0.75)`; focus is the browser ring |
| primary-action | no pointer response (measured 2026-09-29); focus is the browser ring |
| today-three-card | hover and pressed reveal the title icon; focus is the browser ring |
| text-link | hover and pressed fg `#111111` |
| category-filter | selected; pressed bg `#dfdfdf` (one frame) |
| fold-toggle | no pointer response (measured 2026-09-29); focus is the browser ring |
| carousel-control (unused) | default only |

Keyboard focus was walked with real Tab presses on 2026-09-29. None of the six probed controls has an authored focus ring; the browser default is not a Kakao value and is not tokenized.

## Do's and Don'ts

### Do
- Keep one accent (`#fae100`) action per screen.
- Show at most three today-three-cards; fold everything else behind the fold-toggle.
- Use Pretendard for every role, with the measured sizes.
- Tell errors and missed items in calm copy instead of alarm colors.
- If Kakao Login is added, use its exact compliance colors, symbol, radius and system font.

### Don't
- Don't use the accent yellow for backgrounds, body text or decoration.
- Don't use Kakao Login yellow `#fee500` for anything but a Kakao Login button.
- Don't grey out unfinished items with muted color.
- Don't add shadows or animated transitions the tokens don't define.
- Don't build KakaoTalk chat bubbles or other remembered Kakao patterns.

## Voice & Tone

Deoreonaem (덜어냄) sounds like a calm companion who carries part of the load: it sorts things quietly, hands over the task clearly, and notices each finished piece briefly. Full guide: docs/VOICE.md.

Polite 해요-style Korean, one idea per sentence, at most two sentences per message. No emoji by default (at most one, only in success feedback). At most one exclamation mark, never in a pushing sentence. Numbers only for what is left or done, never to count what was missed.

| Context | Tone shift | Example |
|---|---|---|
| Onboarding / first screen | More decisive, minimal explanation | "머릿속에 있는 거, 순서 없이 쏟아내 주세요. 정리는 덜어냄이 할게요." |
| Empty state | Calmer; empty is a good state | "오늘 할 일은 다 덜었어요." |
| Success | Warmer: what's done → next piece → lighter | "한 조각 덜었어요. 다음 조각은 '참고문헌 3개 훑기'예요. 조금 가벼워졌죠? 숨 한 번 고르고 가요." |
| Error | Less decisive, calmer; only what happens next | "캘린더를 불러오지 못했어요. 잠시 뒤 다시 가져올게요." |
| Missed item re-added | Tell it without counting; say it's already re-added | "어제 일 하나를 오늘 세 가지에 넣어뒀어요." |
| Push | Shortest and quietest; only when needed | "내일 출장 있어요. 오늘 저녁 짐 싸기를 챙겨뒀어요." |
| Landing | Calm but clear about value | "흩어진 일정과 머릿속을 한곳에. 오늘은 이것만 하면 돼요." |

**Forbidden phrases**
- Pushing / counting: `달성률`, `미완료`, `미달성`, `연속 기록`, `스트릭`, `또 미루셨네요`
- Commanding: `지금 당장`, `꼭`, `반드시`, `분발하세요`, `화이팅`
- Over-excited or over-soothing: `대박`, `최고예요!!!`, `당신은 소중해요`, `쉬어도 돼요`
- Anxiety and hand-back: `확인하지 않은 ~가 있어요!`, `직접 계획을 세워 보세요`
- Work jargon: `생산성`, `효율`, `최적화`, `태스크`, `데드라인`, `백로그`

## Agent Prompt Guide

- "Build the primary-action pill: `#fae100` fill, 2px black border, 16px radius, 32px height, Pretendard 13px/700, label `쏟아내 주세요`. Only one per screen. It does not change on hover or press."
- "Build a today-three-card: transparent background, `#111111` title at 30px/700 Pretendard, `#333333` 14px description. Show at most three."
- "Build the fold-toggle: `#eeeeee` fill, 24px radius, 40px height, Pretendard 12px/400, label `잠깐 접어둘게요`."
- "Use Lucide (`lucide-react`) icons inside the 36px icon-button; keep surfaces flat with no shadows and instant state changes."
- "Never use `#fee500` unless building a compliant Kakao Login button."

## Governance

### Known Gaps

- **No status colors.** The reference defines no error or success colors. None were invented; errors and missed items are communicated through copy (see Principles 4).
- **Kakao yellow.** The accent `#fae100` is Kakao's marketing yellow, so screens may read as Kakao-affiliated. Kept by decision on 2026-10-16; revisit before launch.

### Known inconsistencies

- The contrast entries below measure text against a transparent background (`#00000000`), not the rendered white canvas, so the low ratios are a measurement artefact rather than the on-screen contrast.

- **Contrast, `search-control`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `service-card`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `milestone-service-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
