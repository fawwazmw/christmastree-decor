const h1 = 'font-weight: bold; font-size: 14.5px; color: #f24b4b;';
const h2 = 'font-weight: bold; font-size: 13px; color: #16a34a;';
console.log('%c whats new in v2024:', h1);
console.log('%c Additions', h2, '\n • Change the size of decor\n • Hover to preview decor placement before placing\n • Tree and garland selector\n • Icicle, bell, snowman, black, sparkling light blue, and more dualcolor ornaments\n • Green and blue toppers\n • Orange, dark blue, and purple trees & garland\n • White presents\n • More background colors');
console.log('%c Improvements', h2, '\n • Improved design\n • Updated many ornament designs');

let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');

let decor = 'orn';
let bg = 0;
let i = 0;
let j = 0;

let dImg = 'random.png';
let dBtn = 'random';

let resizeConstant = 1.4; // smaller # = bigger size, larger # = smaller size
let lgTreeWidth = 600;
let lgTreeHeight = 900;
let smTreeWidth = lgTreeWidth / resizeConstant;
let smTreeHeight = lgTreeHeight / resizeConstant;
let trResizeConstant = (lgTreeWidth / smTreeWidth) * 2;
let dResizeConstant = lgTreeWidth / smTreeWidth;

let sizeFactor = 1;

let canvas = document.getElementById('canvas');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');
let canvas4 = document.getElementById('canvas4');
let canvas5 = document.getElementById('canvas5');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
canvas4.width = window.innerWidth;
canvas4.height = window.innerHeight;
canvas5.width = window.innerWidth;
canvas5.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');
let ctx4 = canvas4.getContext('2d');
let ctx5 = canvas5.getContext('2d');

function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');

    // Array file SVG
    const svgFiles = [
        'assets/snowflakes/snowflake1.svg',
        'assets/snowflakes/snowflake2.svg',
    ];

    // Pilih SVG secara random
    const randomSvg = svgFiles[Math.floor(Math.random() * svgFiles.length)];

    // Random horizontal position (0 hingga viewport width - snowflake width)
    const maxWidth = window.innerWidth; // Lebar viewport
    const maxHeight = window.innerHeight; // Tinggi viewport
    const size = Math.random() * 20 + 10; // Ukuran salju antara 10px dan 30px
    snowflake.style.left = Math.random() * (maxWidth - size) + 'px'; // Pastikan tidak keluar
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';

    // Tambahkan SVG
    snowflake.innerHTML = `<img src="${randomSvg}" alt="snowflake">`;

    // Random duration (antara 3 sampai 8 detik)
    const duration = Math.random() * 5 + 3;
    snowflake.style.animationDuration = duration + 's';

    document.body.appendChild(snowflake);

    // Hapus snowflake setelah animasi selesai
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Buat snowflake setiap 200ms
setInterval(createSnow, 200);

function switchBg() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    if (bg == 0) {
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-red-400');
        bg++;
    } else if (bg == 1) {
        document.body.classList.remove('bg-red-400');
        document.body.classList.add('bg-orange-400');
        bg++;
    } else if (bg == 2) {
        document.body.classList.remove('bg-orange-400');
        document.body.classList.add('bg-yellow-400');
        bg++;
    } else if (bg == 3) {
        document.body.classList.remove('bg-yellow-400');
        document.body.classList.add('bg-green-400');
        bg++;
    } else if (bg == 4) {
        document.body.classList.remove('bg-green-400');
        document.body.classList.add('bg-blue-400');
        bg++;
    } else if (bg == 5) {
        document.body.classList.remove('bg-blue-400');
        document.body.classList.add('bg-purple-400');
        bg++;
    } else if (bg == 6) {
        document.body.classList.remove('bg-purple-400');
        document.body.classList.add('bg-pink-400');
        bg++;
    } else if (bg == 7) {
        document.body.classList.remove('bg-pink-400');
        document.body.classList.add('bg-slate-950');
        genSnow();
        bg++;
    } else if (bg == 8) {
        document.body.classList.remove('bg-slate-950');
        document.body.classList.add('bg-red-950');
        genSnow();
        bg++;
    } else if (bg == 9) {
        document.body.classList.remove('bg-red-950');
        document.body.classList.add('bg-orange-950');
        genSnow();
        bg++;
    } else if (bg == 10) {
        document.body.classList.remove('bg-orange-950');
        document.body.classList.add('bg-yellow-950');
        genSnow();
        bg++;
    } else if (bg == 11) {
        document.body.classList.remove('bg-yellow-950');
        document.body.classList.add('bg-green-950');
        genSnow();
        bg++;
    } else if (bg == 12) {
        document.body.classList.remove('bg-green-950');
        document.body.classList.add('bg-blue-950');
        genSnow();
        bg++;
    } else if (bg == 13) {
        document.body.classList.remove('bg-blue-950');
        document.body.classList.add('bg-purple-950');
        genSnow();
        bg++;
    } else if (bg == 14) {
        document.body.classList.remove('bg-purple-950');
        document.body.classList.add('bg-pink-950');
        genSnow();
        bg++;
    } else if (bg == 15) {
        document.body.classList.remove('bg-pink-950');
        document.body.classList.add('bg-white');
        bg = 0;
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById('welcomeModal')) {
        closeWelcomeModal();
    }
    if (event.target == document.getElementById('storyPreviewModal')) {
        closeStoryPreview();
    }
}

function closeWelcomeModal() {
    document.getElementById('welcomeModal').classList.add('hidden');
    document.getElementById('welcomeModal').classList.remove('flex');
    
    if (!musicPlaying) {
        bgMusic.play().catch(e => console.log('Audio autoplay prevented'));
        musicPlaying = true;
    }
}

let currentStoryBlob = null;

function closeStoryPreview() {
    document.getElementById('storyPreviewModal').classList.add('hidden');
    document.getElementById('storyPreviewModal').classList.remove('flex');
    if (currentStoryBlob) {
        URL.revokeObjectURL(document.getElementById('storyPreviewImage').src);
        currentStoryBlob = null;
    }
}

function downloadStoryImage() {
    if (currentStoryBlob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(currentStoryBlob);
        link.download = 'christmas-tree-story.png';
        link.click();
        closeStoryPreview();
    }
}

function genSnow() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    let amt = Math.round(window.innerWidth / 7.5);

    for (let i = 0; i < amt; i++) {
        let x = Math.floor(Math.random() * (canvas4.width + 1));
        let y = Math.floor(Math.random() * (canvas4.height + 1));

        ctx4.beginPath();
        ctx4.fillStyle = 'white';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();

        x = Math.floor(Math.random() * (canvas4.width + 1));
        y = Math.floor(Math.random() * (canvas4.height + 1));

        ctx4.beginPath();
        ctx4.fillStyle = 'yellow';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();
    }
}

let dButtons = document.querySelectorAll('.decorB');
dButtons.forEach((decorB) => {
    decorB.addEventListener('click', () => {
        // remove classes from all dButtons
        dButtons.forEach((decorB) => {
            decorB.classList.remove('bg-lightGreen/90');
            decorB.classList.remove('md:bg-lightGreen/90');
            decorB.classList.remove('border-gray-400/90');
            decorB.classList.remove('md:border-gray-400/90');
            decorB.classList.add('hover:enabled:bg-gray-200/90');
            decorB.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the dButton that has been clicked
        decorB.classList.add('bg-lightGreen/90');
        decorB.classList.add('border-gray-400/90');
        decorB.classList.remove('hover:enabled:bg-gray-200/90');
        decorB.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let bButtons = document.querySelectorAll('.baseB');
bButtons.forEach((baseB) => {
    baseB.addEventListener('click', () => {
        // remove classes from all bButtons
        bButtons.forEach((baseB) => {
            baseB.classList.remove('bg-lightGreen/90');
            baseB.classList.remove('md:bg-lightGreen/90');
            baseB.classList.remove('border-gray-400/90');
            baseB.classList.remove('md:border-gray-400/90');
            baseB.classList.add('hover:enabled:bg-gray-200/90');
            baseB.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the bButton that has been clicked
        baseB.classList.add('bg-lightGreen/90');
        baseB.classList.add('border-gray-400/90');
        baseB.classList.remove('hover:enabled:bg-gray-200/90');
        baseB.classList.remove('active:enabled:bg-gray-300/90');
    });
});

window.onload = function () {
    document.getElementById('decorSelector').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('decorSelector').style.paddingBottom = document.getElementById('decorDock').offsetHeight + 'px';

    document.getElementById('baseSelector').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('baseSelector').style.paddingBottom = document.getElementById('decorDock').offsetHeight + 'px';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    setTimeout(() => {
        document.getElementById('welcomeModal').classList.add('flex');
        document.getElementById('welcomeModal').classList.remove('hidden');
    }, 300);

    bgMusic.volume = 0.3;

    selectTree('assets/trees/tree.png');
}

function switchTr() {
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('block');
    document.getElementById('treeDiv').classList.remove('hidden');
    document.getElementById('treeDiv').classList.add('block');

    document.getElementById('garlandDiv').classList.remove('block');
    document.getElementById('garlandDiv').classList.add('hidden');

    if (window.innerWidth < 905 || window.innerHeight < 850) closeSelector();
}

function switchG() {
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('block');
    document.getElementById('garlandDiv').classList.remove('hidden');
    document.getElementById('garlandDiv').classList.add('block');

    document.getElementById('treeDiv').classList.remove('block');
    document.getElementById('treeDiv').classList.add('hidden');

    if (window.innerWidth < 905 || window.innerHeight < 850) closeSelector();
}

function switchO() {
    decor = 'orn';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('ornDiv').classList.remove('hidden');
    document.getElementById('ornDiv').classList.add('block');

    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchC() {
    decor = 'cane';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('caneDiv').classList.remove('hidden');
    document.getElementById('caneDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchF() {
    decor = 'flower';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('flowerDiv').classList.remove('hidden');
    document.getElementById('flowerDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchL() {
    decor = 'light';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('lightDiv').classList.remove('hidden');
    document.getElementById('lightDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchT() {
    decor = 'top';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('topDiv').classList.remove('hidden');
    document.getElementById('topDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function switchP() {
    decor = 'pres';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('presDiv').classList.remove('hidden');
    document.getElementById('presDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';

    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';

    if (window.innerWidth < 905 || window.innerHeight < 850) closeBaseSelector();
}

function closeSelector() {
    document.getElementById('decorSelector').classList.remove('block');
    document.getElementById('decorSelector').classList.add('hidden');
}

function closeBaseSelector() {
    document.getElementById('baseSelector').classList.remove('block');
    document.getElementById('baseSelector').classList.add('hidden');
}

function toggleB() {
    if (document.getElementById('decorSelector').classList.contains('md:block')) {
        hideB();
    } else {
        showB();
    }
}

function hideB() {
    document.getElementById('decorSelector').classList.remove('md:block');
    document.getElementById('decorSelector').classList.add('hidden');
    document.getElementById('baseSelector').classList.remove('md:block');
    document.getElementById('baseSelector').classList.add('hidden');
    document.getElementById('decorDock').classList.remove('block');
    document.getElementById('decorDock').classList.add('hidden');
    document.getElementById('optionsDiv').style.top = '0px';
    document.getElementById('optionsDiv').style.left = '0px';
    document.getElementById('optionsDiv').classList.add('hover:opacity-100');
    document.getElementById('hideI').classList.remove('fa-angle-up');
    document.getElementById('hideI').classList.add('fa-angle-down');
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
}

function showB() {
    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('md:block');
    document.getElementById('baseSelector').classList.remove('hidden');
    document.getElementById('baseSelector').classList.add('md:block');
    document.getElementById('decorDock').classList.remove('hidden');
    document.getElementById('decorDock').classList.add('block');
    document.getElementById('optionsDiv').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('optionsDiv').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
    document.getElementById('optionsDiv').classList.remove('hover:opacity-100');
    document.getElementById('hideI').classList.remove('fa-angle-down');
    document.getElementById('hideI').classList.add('fa-angle-up');
}

function toggleMusic() {
    const musicIcon = document.getElementById('musicIcon');
    
    if (musicPlaying) {
        bgMusic.pause();
        musicIcon.classList.remove('fa-volume-high');
        musicIcon.classList.add('fa-volume-xmark');
        musicPlaying = false;
    } else {
        bgMusic.play().catch(e => console.log('Audio play failed'));
        musicIcon.classList.remove('fa-volume-xmark');
        musicIcon.classList.add('fa-volume-high');
        musicPlaying = true;
    }
}

function changeSize() {
    if (sizeFactor == 1) {
        sizeFactor = 0.8;
        document.getElementById('sizeBtn').innerText = 'Size: Large'; // 1.25x
    } else if (sizeFactor == 0.8) {
        sizeFactor = 0.6;
        document.getElementById('sizeBtn').innerText = 'Size: Colossal'; // 1.67x
    } else if (sizeFactor == 0.6) {
        sizeFactor = 1.8;
        document.getElementById('sizeBtn').innerText = 'Size: Mini'; //  0.56x
    } else if (sizeFactor == 1.8) {
        sizeFactor = 1.3;
        document.getElementById('sizeBtn').innerText = 'Size: Small'; // 0.77x
    } else {
        sizeFactor = 1;
        document.getElementById('sizeBtn').innerText = 'Size: Normal'; // 1x
    }
}

// hide hide/show button after 5 seconds of inactivity when menu is also hidden
let timeout = function () {
    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.add('opacity-50');
        timer2 = setTimeout(timeout2, 3000);
    }
}

let timeout2 = function () {
    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.remove('opacity-50');
        document.getElementById('optionsDiv').classList.add('opacity-0');
    }
}

let timer2;
let timer;
window.addEventListener('mousemove', function () {
    clearTimeout(timer);
    clearTimeout(timer2);
    timer = setTimeout(timeout, 2000);

    if (!document.getElementById('decorSelector').classList.contains('md:block')) {
        document.getElementById('optionsDiv').classList.remove('opacity-50');
        document.getElementById('optionsDiv').classList.remove('opacity-0');
    }
}, false);

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
}

let d = document.getElementById('ornament-red.png');
let farEnough = false;
point1 = [0, 0];

canvas5.addEventListener('mousemove', function (event) {
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;

    point2 = [x, y];

    if (calcDistance(point1[0], point1[1], point2[0], point2[1]) > 15) {
        farEnough = true;
    } else {
        farEnough = false;
    }

    if (dImg == 'random.png') {
        if (farEnough) {
            if (decor == 'top') {
                d = document.getElementById(topperArray[Math.floor(Math.random() * topperArray.length)].split('/').pop());
            } else if (decor == 'orn') {
                d = document.getElementById(ornamentArray[Math.floor(Math.random() * ornamentArray.length)].split('/').pop());
            } else if (decor == 'cane') {
                d = document.getElementById(candyCaneArray[Math.floor(Math.random() * candyCaneArray.length)].split('/').pop());
            } else if (decor == 'flower') {
                d = document.getElementById(flowerArray[Math.floor(Math.random() * flowerArray.length)].split('/').pop());
            } else if (decor == 'light') {
                d = document.getElementById(lightArray[Math.floor(Math.random() * lightArray.length)].split('/').pop());
            } else if (decor == 'pres') {
                d = document.getElementById(presentArray[Math.floor(Math.random() * presentArray.length)].split('/').pop());
            } else if (decor == 'sec') {
                d = document.getElementById(secretArray[Math.floor(Math.random() * secretArray.length)].split('/').pop());
            }
        }
    } else {
        d = document.getElementById(dImg.split('/').pop());
    }

    if (window.innerWidth >= 905 && window.innerHeight >= 850) {
        finalX = x - Math.round((d.width / sizeFactor) / 2);
        finalY = y - Math.round((d.height / sizeFactor) / 2);
        finalW = Math.round(d.width / sizeFactor);
        finalH = Math.round(d.height / sizeFactor);
    } else if (window.innerWidth < 905 || window.innerHeight < 850) {
        finalX = x - Math.round(((d.width / sizeFactor) / dResizeConstant) / 2);
        finalY = y - Math.round(((d.height / sizeFactor) / dResizeConstant) / 2);
        finalW = Math.round((d.width / sizeFactor) / dResizeConstant);
        finalH = Math.round((d.height / sizeFactor) / dResizeConstant);
    }

    if (farEnough) point1 = point2;
    if (document.getElementById('decorSelector').classList.contains('md:block')) ctx5.drawImage(d, finalX, finalY, finalW, finalH);
}, false);

canvas5.addEventListener('click', function () {
    ctx.drawImage(d, finalX, finalY, finalW, finalH);
}, false);

let ornamentArray = [
    'assets/ornaments/ornament-red.png',
    'assets/ornaments/ornament-orange.png',
    'assets/ornaments/ornament-yellow.png',
    'assets/ornaments/ornament-chartreuse.png',
    'assets/ornaments/ornament-green.png',
    'assets/ornaments/ornament-cyan.png',
    'assets/ornaments/ornament-blue.png',
    'assets/ornaments/ornament-purple.png',
    'assets/ornaments/ornament-donut.png',
    'assets/ornaments/ornament-white.png',
    'assets/ornaments/ornament-brown.png',
    'assets/ornaments/ornament-silver.png',
    'assets/ornaments/ornament-pink.png',
    'assets/ornaments/ornament-black.png',
    'assets/ornaments/ornament-year-current.png',
    'assets/ornaments/ornament-dualcolor-red-white.png',
    'assets/ornaments/ornament-dualcolor-orange-white.png',
    'assets/ornaments/ornament-dualcolor-gold-white.png',
    'assets/ornaments/ornament-dualcolor-green-white.png',
    'assets/ornaments/ornament-dualcolor-light-blue-white.png',
    'assets/ornaments/ornament-dualcolor-blue-white.png',
    'assets/ornaments/ornament-dualcolor-purple-white.png',
    'assets/ornaments/ornament-dualcolor-pink-white.png',
    'assets/ornaments/ornament-sparkling-red.png',
    'assets/ornaments/ornament-sparkling-orange.png',
    'assets/ornaments/ornament-sparkling-gold.png',
    'assets/ornaments/ornament-sparkling-green.png',
    'assets/ornaments/ornament-sparkling-light-blue.png',
    'assets/ornaments/ornament-sparkling-blue.png',
    'assets/ornaments/ornament-sparkling-purple.png',
    'assets/ornaments/ornament-sparkling-pink.png',
    'assets/ornaments/ornament-sparkling-white.png',
    'assets/ornaments/ornament-icicle.png',
    'assets/ornaments/ornament-bell.png',
    'assets/ornaments/ornament-snowman.png',
    'assets/ornaments/ornament-cookie.png'
];

let candyCaneArray = [
    'assets/candy-canes/candy-cane-red-right.png',
    'assets/candy-canes/candy-cane-red-left.png',
    'assets/candy-canes/candy-cane-green-right.png',
    'assets/candy-canes/candy-cane-green-left.png',
    'assets/candy-canes/candy-cane-red-green-right.png',
    'assets/candy-canes/candy-cane-red-green-left.png',
    'assets/candy-canes/candy-cane-pink-right.png',
    'assets/candy-canes/candy-cane-pink-left.png',
    'assets/candy-canes/candy-cane-yellow-right.png',
    'assets/candy-canes/candy-cane-yellow-left.png',
    'assets/candy-canes/candy-cane-pink-yellow-right.png',
    'assets/candy-canes/candy-cane-pink-yellow-left.png',
    'assets/candy-canes/candy-cane-rainbow-right.png',
    'assets/candy-canes/candy-cane-rainbow-left.png',
    'assets/candy-canes/candy-cane-zebra-right.png',
    'assets/candy-canes/candy-cane-zebra-left.png'
];

let flowerArray = [
    'assets/flowers/poinsettia-red.png',
    'assets/flowers/poinsettia-orange.png',
    'assets/flowers/poinsettia-yellow.png',
    'assets/flowers/poinsettia-cyan.png',
    'assets/flowers/poinsettia-blue.png',
    'assets/flowers/poinsettia-purple.png',
    'assets/flowers/poinsettia-pink.png',
    'assets/flowers/poinsettia-white.png',
    'assets/flowers/hibiscus-red.png',
    'assets/flowers/hibiscus-orange.png',
    'assets/flowers/hibiscus-yellow.png',
    'assets/flowers/hibiscus-cyan.png',
    'assets/flowers/hibiscus-blue.png',
    'assets/flowers/hibiscus-purple.png',
    'assets/flowers/hibiscus-pink.png',
    'assets/flowers/hibiscus-white.png'
];

let lightArray = [
    'assets/lights/light-red.png',
    'assets/lights/light-orange.png',
    'assets/lights/light-yellow.png',
    'assets/lights/light-green.png',
    'assets/lights/light-cyan.png',
    'assets/lights/light-blue.png',
    'assets/lights/light-purple.png',
    'assets/lights/light-pink.png',
    'assets/lights/light-white.png',
    'assets/lights/light-rainbow.png'
];

let presentArray = [ // higher chance to get normal sized present than other ones
    'assets/presents/present-red.png',
    'assets/presents/present-red.png',
    'assets/presents/present-red-long.png',
    'assets/presents/present-red-tall.png',
    'assets/presents/present-yellow.png',
    'assets/presents/present-yellow.png',
    'assets/presents/present-yellow-long.png',
    'assets/presents/present-yellow-tall.png',
    'assets/presents/present-green.png',
    'assets/presents/present-green.png',
    'assets/presents/present-green-long.png',
    'assets/presents/present-green-tall.png',
    'assets/presents/present-blue.png',
    'assets/presents/present-blue.png',
    'assets/presents/present-blue-long.png',
    'assets/presents/present-blue-tall.png',
    'assets/presents/present-dark-blue.png',
    'assets/presents/present-dark-blue.png',
    'assets/presents/present-dark-blue-long.png',
    'assets/presents/present-dark-blue-tall.png',
    'assets/presents/present-purple.png',
    'assets/presents/present-purple.png',
    'assets/presents/present-purple-long.png',
    'assets/presents/present-purple-tall.png',
    'assets/presents/present-white.png',
    'assets/presents/present-white.png',
    'assets/presents/present-white-long.png',
    'assets/presents/present-white-tall.png'
];

let topperArray = [
    'assets/toppers/star-gold-1.png',
    'assets/toppers/star-gold-2.png',
    'assets/toppers/star-gold-3.png',
    'assets/toppers/star-gold-4.png',
    'assets/toppers/star-red-1.png',
    'assets/toppers/star-red-2.png',
    'assets/toppers/star-red-3.png',
    'assets/toppers/star-red-4.png',
    'assets/toppers/star-white-1.png',
    'assets/toppers/star-white-2.png',
    'assets/toppers/star-white-3.png',
    'assets/toppers/star-white-4.png',
    'assets/toppers/star-green-1.png',
    'assets/toppers/star-green-2.png',
    'assets/toppers/star-green-3.png',
    'assets/toppers/star-green-4.png',
    'assets/toppers/star-blue-1.png',
    'assets/toppers/star-blue-2.png',
    'assets/toppers/star-blue-3.png',
    'assets/toppers/star-blue-4.png',
    'assets/toppers/bow-red.png',
    'assets/toppers/bow-gold.png',
    'assets/toppers/bow-white.png',
    'assets/toppers/bow-green.png',
    'assets/toppers/bow-blue.png',
    'assets/toppers/finial-white.png',
    'assets/toppers/finial-gold.png',
    'assets/toppers/finial-red.png',
    'assets/toppers/finial-green.png',
    'assets/toppers/finial-blue.png'
];

let secretArray = [
    'assets/ornaments/ornament-hearts.png',
    'assets/ornaments/ornament-uwu.png',
    'assets/ornaments/ornament-tree.png',
    'assets/ornaments/ornament-star.png',
    'assets/ornaments/ornament-hangy-orange.png',
    'assets/presents/present-white.png',
    'assets/presents/present-white.png',
    'assets/presents/present-white-long.png',
    'assets/presents/present-white-tall.png'
];

function select(selectedD) {
    dImg = selectedD;
    dBtn = dImg.replace('.png', '');
}

function selectTree(selectedT) {
    tImg = selectedT;
    tBtn = tImg.replace('.png', '');

    ctx3.clearRect(0, 0, canvas.width, canvas.height);

    const treeFileName = tImg.split('/').pop();

    if (window.innerWidth >= 905 && window.innerHeight >= 850) {
        x = (canvas3.width / 2) - ((document.getElementById(treeFileName).width * 10) / 2);
        y = (canvas3.height / 2) - ((document.getElementById(treeFileName).height * 10) / 2) + document.getElementById('decorDock').offsetHeight;
        w = lgTreeWidth;
        h = lgTreeHeight;

    } else if (window.innerWidth < 905 || window.innerHeight < 850) {
        x = (canvas3.width / 2) - ((document.getElementById(treeFileName).width * 10) / trResizeConstant);
        y = (canvas3.height / 2) - ((document.getElementById(treeFileName).height * 10) / trResizeConstant) + document.getElementById('decorDock').offsetHeight;
        w = smTreeWidth;
        h = smTreeHeight;
    }

    const tree = document.getElementById(treeFileName);
    ctx3.drawImage(tree, x, y, w, h);
}

function selectGar(selectedG) {
    gImg = selectedG;
    gBtn = gImg.replace('.png', '');

    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    if (gImg !== 'none') {
        const garFileName = gImg.split('/').pop();
        
        if ((window.innerWidth >= 905 && window.innerHeight >= 850)) {
            x = (canvas2.width / 2) - ((document.getElementById(garFileName).width * 10) / 2);
            y = (canvas2.height / 2) - ((document.getElementById(garFileName).height * 10) / 2) + document.getElementById('decorDock').offsetHeight;
            w = lgTreeWidth;
            h = lgTreeHeight;

        } else if ((window.innerWidth < 905 || window.innerHeight < 850)) {
            x = (canvas2.width / 2) - ((document.getElementById(garFileName).width * 10) / trResizeConstant);
            y = (canvas2.height / 2) - ((document.getElementById(garFileName).height * 10) / trResizeConstant) + document.getElementById('decorDock').offsetHeight;
            w = smTreeWidth;
            h = smTreeHeight;
        }

        const gar = document.getElementById(garFileName);
        ctx2.drawImage(gar, x, y, w, h);
    }
}

let dImgButtons = document.querySelectorAll('.selectDecor');
dImgButtons.forEach((selectDecor) => {
    selectDecor.addEventListener('click', () => {

        // removes classes from all dImgButtons
        dImgButtons.forEach((selectDecor) => {
            selectDecor.classList.remove('bg-lightGreen/90');
            selectDecor.classList.remove('border-gray-400/90');
            selectDecor.classList.add('hover:enabled:bg-gray-200/90');
            selectDecor.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the dImgButton that has been clicked
        selectDecor.classList.add('bg-lightGreen/90');
        selectDecor.classList.add('border-gray-400/90');
        selectDecor.classList.remove('hover:enabled:bg-gray-200/90');
        selectDecor.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let treeImgButtons = document.querySelectorAll('.selectTree');
treeImgButtons.forEach((selectTree) => {
    selectTree.addEventListener('click', () => {

        // removes classes from all treeImgButtons
        treeImgButtons.forEach((selectTree) => {
            selectTree.classList.remove('bg-lightGreen/90');
            selectTree.classList.remove('border-gray-400/90');
            selectTree.classList.add('hover:enabled:bg-gray-200/90');
            selectTree.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the treeImgButton that has been clicked
        selectTree.classList.add('bg-lightGreen/90');
        selectTree.classList.add('border-gray-400/90');
        selectTree.classList.remove('hover:enabled:bg-gray-200/90');
        selectTree.classList.remove('active:enabled:bg-gray-300/90');
    });
});

let garImgButtons = document.querySelectorAll('.selectGar');
garImgButtons.forEach((selectGar) => {
    selectGar.addEventListener('click', () => {

        // removes classes from all garImgButtons
        garImgButtons.forEach((selectGar) => {
            selectGar.classList.remove('bg-lightGreen/90');
            selectGar.classList.remove('border-gray-400/90');
            selectGar.classList.add('hover:enabled:bg-gray-200/90');
            selectGar.classList.add('active:enabled:bg-gray-300/90');
        });

        // add classes to the garImgButton that has been clicked
        selectGar.classList.add('bg-lightGreen/90');
        selectGar.classList.add('border-gray-400/90');
        selectGar.classList.remove('hover:enabled:bg-gray-200/90');
        selectGar.classList.remove('active:enabled:bg-gray-300/90');
    });
});

document.body.onkeyup = function (event) {
    showB();

    if (event.keyCode == 49) {
        document.getElementById('switchO').click();
    } else if (event.keyCode == 50) {
        document.getElementById('switchC').click();
    } else if (event.keyCode == 51) {
        document.getElementById('switchF').click();
    } else if (event.keyCode == 52) {
        document.getElementById('switchL').click();
    } else if (event.keyCode == 53) {
        document.getElementById('switchP').click();
    } else if (event.keyCode == 54) {
        document.getElementById('switchT').click();
    } else if (event.keyCode == 55) {
        document.getElementById('switchTr').click();
    } else if (event.keyCode == 56) {
        document.getElementById('switchG').click();
    } else if (event.keyCode == 57) {
        document.getElementById('switchBg').click();
    }
};

var allowedKeys = {
    67: 'c',
    69: 'e',
    82: 'r',
    83: 's',
    84: 't',
};

var code = ['s', 'e', 'c', 'r', 'e', 't'];
var codeP = 0; // position

document.addEventListener('keydown', function (e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = code[codeP];

    if (key == requiredKey) {
        codeP++;
        if (codeP == code.length) {
            openSecret();
            codeP = 0;
        }
    }
});

function openSecret() {
    decor = 'sec';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('secretDiv').classList.remove('hidden');
    document.getElementById('secretDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-gray-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-gray-400/90');
    dImg = 'random.png';
}

function takeStorySnapshot() {
    // Instagram/WhatsApp story size: 1080x1920 (9:16 ratio)
    const STORY_WIDTH = 1080;
    const STORY_HEIGHT = 1920;
    
    // Create temporary canvas for story
    const storyCanvas = document.createElement('canvas');
    storyCanvas.width = STORY_WIDTH;
    storyCanvas.height = STORY_HEIGHT;
    const storyCtx = storyCanvas.getContext('2d');
    
    // Fill background (same as current body background)
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    storyCtx.fillStyle = bgColor;
    storyCtx.fillRect(0, 0, STORY_WIDTH, STORY_HEIGHT);
    
    // Draw snow background if exists (canvas4)
    if (canvas4) {
        storyCtx.drawImage(canvas4, 0, 0, STORY_WIDTH, STORY_HEIGHT);
    }
    
    // Calculate scale and position to fit tree in center
    const sourceWidth = canvas.width;
    const sourceHeight = canvas.height;
    const scale = Math.min(STORY_WIDTH / sourceWidth, STORY_HEIGHT / sourceHeight) * 0.85;
    const scaledWidth = sourceWidth * scale;
    const scaledHeight = sourceHeight * scale;
    const offsetX = (STORY_WIDTH - scaledWidth) / 2;
    const offsetY = (STORY_HEIGHT - scaledHeight) / 2 - 80;
    
    // Draw all canvases in order
    // Canvas2: Garland layer
    if (canvas2) {
        storyCtx.drawImage(canvas2, offsetX, offsetY, scaledWidth, scaledHeight);
    }
    
    // Canvas3: Tree layer
    if (canvas3) {
        storyCtx.drawImage(canvas3, offsetX, offsetY, scaledWidth, scaledHeight);
    }
    
    // Canvas: Decorations layer
    if (canvas) {
        storyCtx.drawImage(canvas, offsetX, offsetY, scaledWidth, scaledHeight);
    }
    
    // Add watermark/text at bottom
    storyCtx.font = 'bold 56px "Balsamiq Sans", sans-serif';
    storyCtx.fillStyle = '#227322';
    storyCtx.textAlign = 'center';
    storyCtx.shadowColor = 'rgba(255,255,255,0.8)';
    storyCtx.shadowBlur = 10;
    storyCtx.fillText('🎄 Merry Christmas! 🎄', STORY_WIDTH / 2, STORY_HEIGHT - 120);
    
    storyCtx.shadowBlur = 0;
    storyCtx.font = '36px "Balsamiq Sans", sans-serif';
    storyCtx.fillStyle = '#666';
    storyCtx.fillText('Made with Christmas Tree Decorator', STORY_WIDTH / 2, STORY_HEIGHT - 60);
    
    // Convert to blob and show preview
    storyCanvas.toBlob(function(blob) {
        currentStoryBlob = blob;
        const url = URL.createObjectURL(blob);
        document.getElementById('storyPreviewImage').src = url;
        document.getElementById('storyPreviewModal').classList.remove('hidden');
        document.getElementById('storyPreviewModal').classList.add('flex');
    }, 'image/png');
}

download_img = function (el) { // i have no idea how this works
    let image = canvas.toDataURL('image/png');
    el.href = image;
};