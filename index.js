/**
 * Performs the specified action for each element in an array.
 * @template T []
 * @param {(element: T, index: number, array: T[]) => void} callbackFn
 * @param {T[]} array
 * @param {number} [delays] - if devloper want delay after every item done;
 * @returns {void} - it doesn't return anything;
 */
function useLoop(callbackFn, array, delays = 0) {
    for (let _index = 0; _index < array.length; ++_index) {
        setTimeout(() => {
            callbackFn.call(array, array[_index], _index, array);
        }, _index * delays);
    };
};

/**
 * @param {{height: string;width: string;viewBox: string;fill: string;}} settings
 * @param {string} path
 * @param {string} [ToInside]
 */
function ToBase24(settings, path = "", ToInside) {
    settings.height = settings.height || "24px";
    settings.width = settings.width || "24px";
    settings.viewBox = settings.viewBox || "0 0 24 24";
    settings.fill = settings.fill || "#000000";
    const ToShow = path !== "" ? `<path d="${path}" />` : ToInside;
    const BaseData = `<svg xmlns="http://www.w3.org/2000/svg"
            height="${settings.height}"
            width="${settings.width}"
            viewBox="${settings.viewBox}"
            fill="${settings.fill}">
            ${ToShow}</svg>`;
    const DataURI = `data:image/svg+xml;base64,${btoa(BaseData)}`;
    console.log(DataURI);
};

/**
 * @param {number} millis
 */
function ToSeconds(millis) {
    const MilliSeconds = new Date(millis);
    return ({
        minutes: MilliSeconds.getMinutes(),
        seconds: MilliSeconds.getSeconds()
    });
}

const Lyrics = [
    {
        "startTimeMs": "2940",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "11990",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "17640",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "21590",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "23920",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "29470",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "35660",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "41760",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "48720",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "53550",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "60330",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "65420",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "72940",
        "words": "In the tranquility of the night I pray during worshiping",
        "syllables": []
    },
    {
        "startTimeMs": "77700",
        "words": "While the black darkness is all around me",
        "syllables": []
    },
    {
        "startTimeMs": "84110",
        "words": "Oh Kind! Oh Most Merciful! Oh Most Forbearing!",
        "syllables": []
    },
    {
        "startTimeMs": "90010",
        "words": "Oh Kind! Your gifts are endless",
        "syllables": []
    },
    {
        "startTimeMs": "95620",
        "words": "Oh All-Hearing! Oh Answerer! Oh Most Magnificent!",
        "syllables": []
    },
    {
        "startTimeMs": "96330",
        "words": "Oh Creator of the strong predatory animals! Guide me",
        "syllables": []
    },
    {
        "startTimeMs": "107100",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "113480",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "119380",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "124850",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "132110",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "137130",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "143150",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "149170",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "155990",
        "words": "Guide me to truth Allah",
        "syllables": []
    },
    {
        "startTimeMs": "161880",
        "words": "I depend on your guidance today",
        "syllables": []
    },
    {
        "startTimeMs": "167400",
        "words": "Oh Lord of the universe! You are my aid",
        "syllables": []
    },
    {
        "startTimeMs": "173400",
        "words": "You are the refuge of man in the afterworld",
        "syllables": []
    },
    {
        "startTimeMs": "180560",
        "words": "Here I am Allah, asking your forgiveness",
        "syllables": []
    },
    {
        "startTimeMs": "185350",
        "words": "Forgive me and grant me my wish",
        "syllables": []
    },
    {
        "startTimeMs": "192100",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "197300",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "203030",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "209300",
        "words": "Oh Allah! guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "215260",
        "words": "My soul is brightened by a light in my heart",
        "syllables": []
    },
    {
        "startTimeMs": "221390",
        "words": "When I praised Lord of mankind",
        "syllables": []
    },
    {
        "startTimeMs": "227180",
        "words": "And my soul is cheered up and the tears were flowing",
        "syllables": []
    },
    {
        "startTimeMs": "232690",
        "words": "Oh Allah, guide my heart to reason",
        "syllables": []
    },
    {
        "startTimeMs": "239450",
        "words": "",
        "syllables": []
    }
];
const LyricsExcuses = [
    {
        "startTimeMs": "10200",
        "words": "ਮੇਰੇ ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "11790",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "14530",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "16610",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ",
        "syllables": []
    },
    {
        "startTimeMs": "21100",
        "words": "ਟੁੱਟੇ ਦਿਲ ਨੂ ਸਾਂਭੀ ਫਿਰਦੇ",
        "syllables": []
    },
    {
        "startTimeMs": "22460",
        "words": "ਕਿ ਫਾਇਦਾ ਮੁਟਿਆਰੇ ਨੀ",
        "syllables": []
    },
    {
        "startTimeMs": "24960",
        "words": "12 ਸਾਲ ਮਝੀਆ ਚਰਾਈਆਂ",
        "syllables": []
    },
    {
        "startTimeMs": "27270",
        "words": "ਛੱਡੇ ਤਖ੍ਤ ਹਜ਼ਾਰੇ ਨੀ",
        "syllables": []
    },
    {
        "startTimeMs": "29960",
        "words": "ਹਰ ਸਾਂਹ ਨਾਲ ਯਾਦ ਤੈਨੂ ਕਰਦੇ ਰਹੇ",
        "syllables": []
    },
    {
        "startTimeMs": "32110",
        "words": "ਕੋਯੀ ਸਾਡੇ ਵਾਂਗ ਕਰੂਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "34730",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "37000",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ",
        "syllables": []
    },
    {
        "startTimeMs": "39060",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "41960",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "44710",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "47080",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋ ਟੁੱਟੁਗਾ ਤਾਂ",
        "syllables": []
    },
    {
        "startTimeMs": "50520",
        "words": "ਕਿਹੰਦੀ ਹੁੰਦੀ ਸੀ ਚੰਨ ਤਕ ਰਾਹ ਬਣਾ ਦੇ",
        "syllables": []
    },
    {
        "startTimeMs": "54900",
        "words": "ਤਾਰੇ ਨੇ ਪਸੰਦ ਮੈਨੂ ਹੇਠਾਂ ਸਾਰੇ ਲਾਦੇ",
        "syllables": []
    },
    {
        "startTimeMs": "60210",
        "words": "ਓਹ੍ਨਾ ਤਾਰੇਆਂ ਦੇ ਵਿਚ ਜਦੋਂ ਮੈਨੂ ਵੇਖੇਂਗੀ",
        "syllables": []
    },
    {
        "startTimeMs": "62300",
        "words": "ਮੇਰੀ ਯਾਦ ਜਦ ਆਔਗੀ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "65200",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "67360",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "70130",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "72330",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "75460",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "77370",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ",
        "syllables": []
    },
    {
        "startTimeMs": "80700",
        "words": "ਰਾਸ ਨਾ ਆਯਾ ਤੈਨੂ ਨੀ",
        "syllables": []
    },
    {
        "startTimeMs": "82850",
        "words": "ਜੋ ਦਿਲ ਦਾ ਮਾਹਲ ਬਣਾਯਾ ਸੀ",
        "syllables": []
    },
    {
        "startTimeMs": "85560",
        "words": "ਤੋੜ ਕੇ ਮੋਤੀ ਫੁੱਲਾਂ ਦੇ",
        "syllables": []
    },
    {
        "startTimeMs": "87620",
        "words": "ਉਸ ਮਹਲ ਚ ਬੂਟਾ ਲਾਯਾ ਸੀ",
        "syllables": []
    },
    {
        "startTimeMs": "89900",
        "words": "ਨੀ ਜਿਵੇਂ ਸਾਨੂ ਛੱਡ ਗਾਯੀ ਆਂ ਨੀ ਤੂ ਅਲੜੇ",
        "syllables": []
    },
    {
        "startTimeMs": "92390",
        "words": "ਜਦੋ ਤੈਨੂ ਕੋਈ ਛਡ਼ੂਗਾ ਤਾਂ",
        "syllables": []
    },
    {
        "startTimeMs": "94070",
        "words": "ਓ ਜਿਵੇਂ ਸਾਨੂ ਛੱਡ ਗਾਯੀ ਆਂ ਨੀ ਤੂ ਅਲੜੇ",
        "syllables": []
    },
    {
        "startTimeMs": "97290",
        "words": "ਜਦੋ ਤੈਨੂ ਕੋਈ ਛਡ਼ੂਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "100010",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "102490",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "105560",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "107630",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "110560",
        "words": "ਇਸ਼ਕ਼ੇ ਦੇ ਰਾਹਾਂ ਵਿਚ ਰੁਲ ਕੇ ਰੇ ਗਾਏ ਹਨ",
        "syllables": []
    },
    {
        "startTimeMs": "115790",
        "words": "ਲੋਕਾਂ ਦਿਤੇ ਤਾਣੇ ਮੇਨੇ ਹਸ ਕੇ ਸੇ ਗਾਏ ਹਨ",
        "syllables": []
    },
    {
        "startTimeMs": "119810",
        "words": "ਇਸ਼ਕ਼ੇ ਦੇ ਰਾਹਾਂ ਵਿਚ ਰੁਲ ਕੇ ਰੇ ਗਾਏ ਹਨ",
        "syllables": []
    },
    {
        "startTimeMs": "125890",
        "words": "ਲੋਕਾਂ ਦਿਤੇ ਤਾਣੇ ਮੇਨੇ ਹਸ ਕੇ ਸੇ ਗਾਏ ਹਨ",
        "syllables": []
    },
    {
        "startTimeMs": "130760",
        "words": "ਸਾਡੇ ਪ੍ਯਾਰ ਨੂ ਤੂ ਪੈਰਾਂ ਥੱਲੇ ਰੋਲ੍ਦੀ ਰਹੀ",
        "syllables": []
    },
    {
        "startTimeMs": "133140",
        "words": "ਜਜ਼ਬਾਤ ਜਦੋ ਰੂਲ ਓਹਦੋ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "135510",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "137910",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    },
    {
        "startTimeMs": "141030",
        "words": "ਦਿਲ ਨਾਲ ਲਾਰੇ ਨੀ ਤੂ ਲੌਂਣ ਵਾਲ਼ੀਏ",
        "syllables": []
    },
    {
        "startTimeMs": "142990",
        "words": "ਦਿਲ ਤੇਰਾ ਜਦੋਂ ਟੁੱਟੁਗਾ ਤਾਂ ਪਤਾ ਲੱਗੁਗਾ",
        "syllables": []
    }
];


useLoop(({ startTimeMs, words, syllables }, index) => {
    const Data = ToSeconds(Number(startTimeMs));
    const LogMsg = `${words}\n`;
    // console.log(LogMsg);
}, Lyrics);


/**
 * @param {String} Link
 * @param {String} ImgSrc
 * @param {String} Title
 * @param {String} Episode
 */
function toCard(Link, ImgSrc, Title, Episode) {
    const HTMLElem = `<a href="${Link}" class="grid_item__title">
        <img src="${ImgSrc}" alt="${Title}" class="grid_item__content">
        ${Title}
        </a>
    <div class="grid_item__episode">${Episode}</div>`;
    const DivElement = document.createElement('div');
    DivElement.classList.add('grid_item');
    DivElement.innerHTML = HTMLElem;
    return DivElement;
}

// const Parser = new DOMParser();
// const NewDocument = Parser.parseFromString("", "text/html");
// const Body = NewDocument.querySelector('body > div[itemprop="text"]');
// const Items = Body.querySelectorAll('a[data-milliseconds]');
// useLoop((item, index) => {
//     const Object = {
//         "startTimeMs": `${item.getAttribute('data-milliseconds')}`,
//         "words": `${item.innerHTML}`,
//         "syllables": []
//     };

//     console.log(Object);
// }, [...Items]);


// const Search = prompt("Anime Name");
// if (Search) {
//     fetch(`https://gogoanime.sk/search.html?keyword=${Search}`)
//         .then(res => res.text())
//         .then(res => {
//             const Parser = new DOMParser();
//             const NewDocument = Parser.parseFromString(res, "text/html");
//             const DontKnow = NewDocument.querySelector('div.last_episodes');
//             const ListItems = DontKnow.querySelectorAll('.items > li');
//             useLoop((item, index) => {
//                 const Released = `${item.querySelector('p.released').innerHTML}`.trim();
//                 const Link = `https://gogoanime.sk${item.querySelector('p.name > a').getAttribute('href')}`;
//                 const AnimeObject = {
//                     "ImgSrc": `${item.querySelector('div.img > a > img').getAttribute('src')}`,
//                     "Title": `${item.querySelector('p.name > a').innerHTML}`,
//                     "Link": Link,
//                     "Released": Released
//                 };
//                 console.log(AnimeObject);
//             }, [...ListItems]);
//         })
// }


/** @type {HTMLHeadElement} */
const HeaderElement = document.querySelector('header.header');

/** @type {HTMLInputElement} */
const SearchElement = document.querySelector('#Search__Element');

/** @type {HTMLDivElement} */
const SearchToggler = document.querySelector('[data-open="search"]');

/** @type {HTMLDivElement} */
const DrawerToggler = document.querySelector('[data-open="drawer"]');

/** @type {HTMLDivElement} */
const SidebarDrawer = document.querySelector('aside.sidebar-drawer');

/** @type {HTMLDivElement} */
const SidebarContainer = document.querySelector('aside.sidebar-drawer > .sidebar--container');

/** @type {HTMLDivElement} */
const SidebarOverlay = document.querySelector('div#sidebar_overlay');

/** @type {HTMLDivElement} */
const mainTitle = document.querySelector('#main_title');

/** @type {HTMLDivElement} */
const LatestOnGogo = document.querySelector('#LatestOnGogo');

(() => {
    // Start from here!
    SearchToggler.addEventListener('click', () => {
        SearchElement.focus();
    });
    let SidebarOpened = false;
    DrawerToggler.addEventListener('click', () => {
        if (!SidebarOpened) {
            SidebarOpened = true;
            SidebarDrawer.classList.add('opened');
            SidebarOverlay.classList.add('is--active');
        } else {
            SidebarOpened = false;
            SidebarDrawer.classList.remove('opened');
            SidebarOverlay.classList.remove('is--active');
        }
    });
    SidebarOverlay.addEventListener('click', () => {
        if (SidebarOpened) {
            SidebarDrawer.classList.remove('opened');
            SidebarOverlay.classList.remove('is--active');
            SidebarOpened = false;
        }
    });

    (() => {
        fetch(`https://gogoanime.sk/`)
            .then(res => res.text())
            .then(html => {
                const Parser = new DOMParser();
                const NewDocument = Parser.parseFromString(html, "text/html");
                const DontKnow = NewDocument.querySelector('div.last_episodes');
                const ListItems = DontKnow.querySelectorAll('.items > li');
                const GeneralList = NewDocument.querySelectorAll("li.movie.genre.hide > ul > li > a");
                useLoop((item, index) => {
                    const AnchorElement = document.createElement('a');
                    AnchorElement.classList.add('sidebar--item');
                    AnchorElement.setAttribute('href', `#${item.getAttribute('title')}`);
                    AnchorElement.innerHTML = item.getAttribute('title');
                    SidebarContainer.appendChild(AnchorElement);
                    AnchorElement.addEventListener('click', () => {
                        const __URL = `https://gogoanime.sk${item.getAttribute('href')}?page=01`;
                        fetch(__URL)
                            .then(res => res.text())
                            .then(GENREShtml => {
                                const Parser = new DOMParser();
                                const GENRES = Parser.parseFromString(GENREShtml, "text/html");
                                const last_episodes = GENRES.querySelector('div.last_episodes');
                                const ListEpisode = last_episodes.querySelectorAll('ul.items > li');
                                LatestOnGogo.innerHTML = "";
                                mainTitle.innerHTML = "Category " + item.getAttribute('title');
                                useLoop((episode, index) => {
                                    const Title = episode.querySelector('p.name > a').getAttribute('title');
                                    const Link = `https://gogoanime.sk${episode.querySelector('div.img > a').getAttribute('href')}`;
                                    const ImgSrc = `${episode.querySelector('div.img > a > img').getAttribute('src')}`;
                                    const Released = `${episode.querySelector('p.released').innerHTML}`.trim();
                                    LatestOnGogo.appendChild(toCard(Link, ImgSrc, Title, Released));
                                }, [...ListEpisode]);
                            });
                    });


                }, [...GeneralList]);
                useLoop((item, index) => {
                    const Title = item.querySelector('p.name > a').getAttribute('title');
                    const Link = `https://gogoanime.sk${item.querySelector('div.img > a').getAttribute('href')}`;
                    const ImgSrc = `${item.querySelector('div.img > a > img').getAttribute('src')}`;
                    const Episode = `${item.querySelector('p.episode').innerHTML}`.trim();
                    LatestOnGogo.appendChild(toCard(Link, ImgSrc, Title, Episode));
                }, [...ListItems]);
            })
    }).call(this);
})();



window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        HeaderElement.setAttribute("scrolled", "");
    } else {
        HeaderElement.removeAttribute("scrolled");
    };
});