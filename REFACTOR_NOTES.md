# Refactoring Notes

## Masalah yang Ditemukan dan Diperbaiki

### Issue: Pohon dan Dekorasi Tidak Muncul Setelah Refactoring

**Root Cause:**
Setelah memindahkan semua PNG files ke folder `assets/`, path di HTML dan JavaScript sudah diupdate, tapi ada inkonsistensi antara:
- `id` attribute di HTML (masih nama file saja)
- `getElementById()` di JavaScript (menggunakan path lengkap)

**Contoh Masalah:**
```html
<!-- HTML -->
<img id='ornament-red.png' src='assets/ornaments/ornament-red.png'>
```

```javascript
// JavaScript (SALAH - tidak bisa menemukan element)
let d = document.getElementById('assets/ornaments/ornament-red.png');
```

### Solusi yang Diterapkan

**Prinsip:**
- `id` tetap menggunakan **filename saja** (tanpa path)
- `src` dan function parameters menggunakan **path lengkap**
- JavaScript extract filename dari path menggunakan `.split('/').pop()`

**Perubahan di script.js:**

1. **Inisialisasi variable `d`:**
```javascript
// BEFORE
let d = document.getElementById('assets/ornaments/ornament-red.png');

// AFTER
let d = document.getElementById('ornament-red.png');
```

2. **Random decoration selection:**
```javascript
// BEFORE
d = document.getElementById(ornamentArray[...]);

// AFTER  
d = document.getElementById(ornamentArray[...].split('/').pop());
```

3. **Specific decoration selection:**
```javascript
// BEFORE
d = document.getElementById(dImg);

// AFTER
d = document.getElementById(dImg.split('/').pop());
```

4. **Tree selection:**
```javascript
// BEFORE
const tree = document.getElementById(tImg);

// AFTER
const treeFileName = tImg.split('/').pop();
const tree = document.getElementById(treeFileName);
```

5. **Garland selection:**
```javascript
// BEFORE
const gar = document.getElementById(gImg);

// AFTER
const garFileName = gImg.split('/').pop();
const gar = document.getElementById(garFileName);
```

## Testing Checklist

- [x] Ornaments dapat dipilih dan ditampilkan
- [x] Candy canes berfungsi
- [x] Flowers berfungsi
- [x] Lights berfungsi  
- [x] Presents berfungsi
- [x] Toppers berfungsi
- [x] Random decoration berfungsi
- [x] Tree selection berfungsi
- [x] Garland selection berfungsi
- [x] Background music tetap berfungsi
- [x] Welcome modal tetap berfungsi

## Struktur Final

```
assets/
├── backgrounds/
├── candy-canes/
├── flowers/
├── garlands/
├── lights/
├── music/
├── ornaments/
├── presents/
├── toppers/
├── trees/
└── snowflakes/
```

## Best Practices untuk Future Development

1. **Selalu gunakan filename saja untuk `id` attribute**
2. **Gunakan path lengkap untuk `src` dan function parameters**
3. **Extract filename menggunakan `.split('/').pop()` saat getElementById**
4. **Test semua features setelah refactoring**
5. **Jangan mengubah ID structure tanpa mengupdate JavaScript**

## Commit Message untuk Git

```
fix: Perbaiki path assets setelah refactoring

- Fix getElementById untuk extract filename dari path lengkap
- Update selectTree() dan selectGar() untuk handle new paths
- Fix random decoration selection
- Verify semua decorations dapat ditampilkan dengan benar

Semua dekorasi, pohon, dan garland sekarang berfungsi normal
setelah reorganisasi folder structure.
```

---
**Last Updated:** 2025-12-25
**Status:** ✅ RESOLVED
