# An Nhiên Cố Đô — Landing Page (exact Figma rebuild, v2)

Rebuilt with full Figma access (connected account) from file `Untitled`
(file ID `mlyPCBHpJtyFaoOEDdEE1a`), group **"Landing page"** (node 146:2).
The **"do not touch"** group is the owner's draft — it was not opened or used.

## Run it
Open `index.html` in a browser — no build step. Or:

```sh
python3 -m http.server 8000   # then http://localhost:8000
```

## How the layout works (read this before customising)
The Figma frame is **1920 × 6480** = six sections of 1920×1080, stacked in
Figma Y order (this is the order in the code):

| # | Section (Figma name) | Node | Y |
|---|---|---|---|
| 1 | thanks (welcome) | 107:299 | 0 |
| 2 | first sight | 107:339 | 1080 |
| 3 | danh mục | 174:52 | 2160 |
| 4 | combo, khuyến mãi | 174:77 | 3240 |
| 5 | combo, khuyến mãi 2 | 174:96 | 4320 |
| 6 | Chân trang (footer) | 107:383 | 5400 |

Each `.section` is a scaling canvas: positions are in % and sizes in **cqw**
units (1cqw = 1% of the page width = 19.2px at the 1920px design width).
**Figma px ÷ 19.2 = cqw.** Change a size in Figma terms by editing the cqw
value; the whole page scales proportionally to any screen width.
Every element also carries its Figma coordinates in the CSS comments/classes.

## Design tokens (exact, from Figma)
- Headings: Inter Bold, colour **#243858** (36px section titles, 42px combo titles)
- Buttons: **#263f68**, radius 16px, Inter Bold 16px — "Khám phá các combo →" / "Xem chi tiết combo →"
- Combo panels: `rgba(217,190,127,0.4)`, radius 32px
- Category cards: `#f3f3f3`, shadow 4px 4px 8px rgba(0,0,0,0.3), labels Inter Medium 40px
- Script labels on photos: **Dancing Script** Bold · Welcome text: **Alex Brush**
- Popup: panel `#f4f4f4` radius 32px, selected photo border `#1737e8`,
  capacity pills `#f1cd7a` radius 16px (selected = inset top shadow)

## Images
All photos are the **original Figma assets**, downloaded into `assets/` with
descriptive names (welcome-bg.jpg, cat-gom.png, gom-main.jpg, …).
Raw Figma exports and the extracted design data (per-section code, metadata,
screenshots) are kept in `figma/` for reference. Note: several Figma ".png"
exports are JPEG data inside — the descriptive copies use correct extensions.

## Interactions
- **Welcome**: prev/next arrows cycle 3 gallery photos, dots update (pics_amount).
- **Danh mục**: click **Cốc nến gốm** → popup frame 128:53
  ("Cốc nến gốm hương Sứ", pills **170g / 240g** — 240g is the selected state in Figma,
  thumbnail strip swaps the main photo); click **Tinh dầu** → popup frame 114:416
  ("Tinh dầu Đinh hương", pill **50g**, thumbnail strip). Close: ×, backdrop click, Esc.
  Both popups sit over the blurred category page, exactly as in the Figma frames.
- **Combo 1 CTA** scrolls to "Các combo hiện có"; **Fast Scroll** footer links
  jump to Trang chủ / Sản phẩm / Danh mục.

## Exact-copy notes (as designed, not typos by me)
- Footer hotline reads **"Hotline: 039.xxx.xxxx"** in red — that's a placeholder
  in the Figma design itself; the real phone (096.424.2256) is in Thông tin liên hệ.
- Footer copyright: "© 2026 Bản quyền thuộc về An Nhiên Cố Đô. Mọi quyền được bảo lưu."
- In the popup frames' blurred background, the 4th category label reads
  "Lồng đèn treo xe"; on the main page it's "Cao tràm" — the main page version is used.
- The combo-1 collage uses Figma's three triangular "Polygon" photo slices
  over the main combo photo; their rotations follow the Figma transforms
  approximately — the one spot worth eyeballing if you need pixel-perfection.
