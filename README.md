# Pajakademi

Platform edukasi pajak untuk masyarakat umum dan pelajar Indonesia — materi,
referensi sistem pajak Indonesia, kalkulator estimasi PPh 21, kuis interaktif,
dan tutorial langkah demi langkah.

## Tech stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com)
- Astro Content Collections untuk Materi & Tutorial (Markdown)
- Vanilla TypeScript untuk interaktivitas (kalkulator & kuis)
- `@astrojs/vercel` adapter, siap deploy ke Vercel

## Struktur konten

- `src/content/materi/*.md` — modul belajar (kategori: dasar, pph, ppn, umkm, digital)
- `src/content/tutorial/*.md` — panduan langkah demi langkah
- `src/pages/` — halaman: beranda, materi, pajak-indonesia, kalkulator, kuis, tutorial

## Menjalankan secara lokal

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # build production ke dist/ + .vercel/output
npm run preview
```

## Deploy ke Vercel

Import repo ini di [vercel.com/new](https://vercel.com/new) — framework
preset "Astro" akan terdeteksi otomatis lewat `@astrojs/vercel`. Tidak ada
environment variable yang dibutuhkan.

## Catatan konten

Angka dan aturan pajak (tarif PPh 21, PTKP, PPN, skema UMKM) mengacu pada UU
HPP dan peraturan turunannya yang berlaku. Konten ditujukan untuk tujuan
edukasi, bukan pengganti konsultasi pajak resmi.
