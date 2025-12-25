# Christmas Tree Decorator 🎄

Interactive web application untuk menghias pohon Natal digital dengan berbagai ornamen, dekorasi, dan aksesoris.

## Project Structure

```
christmastree-decor/
├── assets/                 # Semua asset gambar dan media
│   ├── backgrounds/        # Background images
│   ├── candy-canes/        # Permen tongkat (16 variants)
│   ├── flowers/            # Bunga dekorasi (16 variants)
│   ├── garlands/           # Garland/karangan (18 variants)
│   ├── lights/             # Lampu Natal (10 variants)
│   ├── music/              # Background music (see assets/music/README.md)
│   ├── ornaments/          # Ornamen bola (46 variants)
│   ├── presents/           # Kado/hadiah (21 variants)
│   ├── toppers/            # Hiasan puncak pohon (30 variants)
│   ├── trees/              # Pohon Natal (9 variants)
│   ├── snowflakes/         # SVG snowflakes untuk animasi
│   ├── north-pole.png      # Dekorasi tambahan
│   └── santa-hat.png       # Dekorasi tambahan
├── index.html              # Main HTML file
├── script.js               # JavaScript logic
├── style.css               # Compiled Tailwind CSS
├── input.css               # Tailwind input file
├── tailwind.config.js      # Tailwind configuration
├── package.json            # NPM dependencies
└── LICENSE                 # MIT License

```

## Features

- 🎨 **Interactive Decorating**: Klik untuk menambahkan ornamen ke pohon
- 🎵 **Background Music**: Musik Natal dengan kontrol mute/unmute
- 🌲 **Multiple Trees**: 9 warna pohon berbeda
- ✨ **200+ Decorations**: Ornamen, lampu, permen tongkat, bunga, kado, dan lainnya
- 📐 **Size Control**: Ubah ukuran dekorasi (Mini, Small, Normal, Large, Colossal)
- 🎨 **Background Colors**: 16 pilihan warna background
- ↩️ **Undo Feature**: Hapus dekorasi terakhir jika salah
- 👁️ **Hide Tabs**: Sembunyikan decoration tabs untuk tampilan lebih luas (cocok untuk mobile)
- 💾 **Save Feature**: Simpan hasil karya sebagai gambar PNG
- 🌨️ **Snow Animation**: Animasi salju untuk suasana Natal
- 🎁 **Personal Greeting**: Ucapan Merry Christmas yang personal

## How to Use

1. Buka `index.html` di browser
2. Tutup modal welcome untuk memulai
3. Pilih kategori dekorasi dari menu atas
4. Klik pada pohon untuk menambahkan dekorasi
5. Gunakan tombol kontrol untuk:
   - **👁️ Hide Tabs** - Hide/show decoration tabs
   - **↩️ Undo** - Remove last decoration
   - Hide/Show menu
   - Change decoration size
   - Toggle music
   - Save your tree

## Technologies

- HTML5 Canvas
- Vanilla JavaScript
- Tailwind CSS
- Font Awesome Icons
- Google Fonts (Balsamiq Sans)

## Development

```bash
# Install dependencies
npm install

# Build Tailwind CSS
npm run build:css
```

## License

MIT License - Made with ❤️ for Baby

Merry Christmas! 🎅🎄✨
