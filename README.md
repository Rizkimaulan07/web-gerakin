# Gerakin — Landing Page

Landing page resmi untuk **Gerakin**, aplikasi pencatatan aktivitas olahraga. Halaman ini menjelaskan produk, menampilkan delapan cabang olahraga beserta metriknya, dan mengarahkan pengunjung ke web app atau APK Android.

## Menjalankan proyek

Pastikan Node.js `^20.19.0` atau `>=22.12.0` sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (biasanya `http://localhost:5173`).

Perintah lain:

```bash
npm run typecheck   # cek TypeScript
npm run build       # build produksi ke folder dist/
npm run preview     # pratinjau hasil build
```

## Teknologi

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Lucide React untuk ikon
- Google Fonts (Manrope & Sora)

Seluruh ilustrasi ponsel, peta, dan logo dibuat dengan SVG/CSS. Foto bagian “Tentang” tersimpan lokal di `public/images/runner.jpg`.

## Sinkron dengan web app

Landing page ini mengikuti isi web app Gerakin yang ada di proyek terpisah (`C:\Users\Rizki Maulana\gerakin`), bukan APK. Logo, data demo, daftar halaman (Beranda, Feed, Aktivitas, Jelajah, Tantangan, Klub, Profil), cabang olahraga, tantangan, klub, dan alur akun disamakan dengan aplikasi tersebut. APK belum tersedia, jadi seluruh tombol unduh APK tetap berstatus “Segera hadir”.

Saat web app berjalan lokal di `http://127.0.0.1:4173/`, `npm run dev` pada proyek ini otomatis memakai URL tersebut melalui `.env.development.local`. Build produksi tetap memakai placeholder sampai URL final diisi.

## Sebelum publikasi

Semua tautan dan status APK dipusatkan di **`src/data.ts`**, dengan nilai awal dari environment:

```ts
export const APP_LINKS = {
  web: import.meta.env.VITE_WEB_APP_URL?.trim() || "[URL_WEB_APP]",
  apk: import.meta.env.VITE_APK_URL?.trim() || "[URL_APK]",
} as const;
```

### 1. URL aplikasi

Salin `.env.example` menjadi `.env.local`, lalu isi:

```bash
VITE_WEB_APP_URL=https://domain-web-app-kamu.com/
VITE_APK_URL=
```

Jika variabel dibiarkan kosong, situs memakai placeholder `[URL_WEB_APP]` dan `[URL_APK]`. Jangan mengisi `VITE_APK_URL` selama file APK belum siap. Biarkan juga:

```ts
export const APK_AVAILABLE = false;
```

Tombol APK akan tampil nonaktif dengan label “Segera hadir”. Setelah file APK siap, isi `VITE_APK_URL` dan ubah `APK_AVAILABLE` menjadi `true` — tombol akan otomatis mengarah ke `APP_LINKS.apk`.

### 2. Media sosial

Ganti placeholder di `SOCIAL_LINKS` (`src/data.ts`):

- `[URL_INSTAGRAM]`
- `[URL_TIKTOK]`
- `[URL_YOUTUBE]`

### 3. Metadata sosial

`index.html` memakai `/og-cover.png` sebagai gambar pratinjau. Setelah domain final diketahui, gunakan URL absolut agar pratinjau tampil benar di semua platform, misalnya:

```html
<meta property="og:image" content="https://domain-kamu.com/og-cover.png" />
<meta name="twitter:image" content="https://domain-kamu.com/og-cover.png" />
```

Gambar pratinjau berada di `public/og-cover.png` (1200 × 630). Favicon berada di `public/favicon.svg`.

### 4. Deployment

Hasil build ada di `dist/`. Unggah folder tersebut ke hosting statis pilihanmu (Vercel, Netlify, Cloudflare Pages, dan sejenisnya). Landing page ini tidak memiliki server, login, atau database sendiri; seluruh fitur akun dan pencatatan berada di web app Gerakin.

## Struktur singkat

```
public/            aset statis (favicon, og-cover, foto)
src/
  components/      bagian-bagian halaman
  data.ts          tautan, daftar olahraga, FAQ, konten berulang
  index.css        token desain, animasi, dan utilitas
  App.tsx          komposisi halaman
index.html         metadata SEO, font, dan JSON-LD
```

## Catatan

- Konten berbahasa Indonesia dan dirancang mobile-first.
- Mendukung `prefers-reduced-motion`.
- Tidak ada klaim harga karena informasi paket belum tersedia.
- Halaman ini hanya landing page; fitur perekaman aktivitas berada di aplikasi Gerakin.
