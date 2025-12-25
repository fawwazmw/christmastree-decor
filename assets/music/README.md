# Music Directory

Folder ini untuk menyimpan file musik latar Natal.

## Current Setup

Saat ini aplikasi menggunakan musik dari external CDN (Pixabay).

## Cara Mengganti dengan File Lokal

1. Download file musik MP3 Christmas/Natal yang Anda inginkan
2. Rename file menjadi `christmas-music.mp3`
3. Simpan di folder ini (`assets/music/`)
4. Edit `index.html` line ~31:
   - Comment baris CDN
   - Uncomment baris local file

```html
<!-- <source src='https://cdn.pixabay.com/download/audio/2022/11/22/audio_868e0f96d2.mp3' type='audio/mpeg'> -->
<source src='assets/music/christmas-music.mp3' type='audio/mpeg'>
```

## Rekomendasi Musik

- **Format**: MP3 atau OGG
- **Durasi**: 2-5 menit (karena akan di-loop)
- **Volume**: Sudah di-set 30% di script.js
- **Lisensi**: Pastikan menggunakan musik bebas royalti atau yang Anda miliki lisensinya

## Sumber Musik Gratis

- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Incompetech](https://incompetech.com/music/)
