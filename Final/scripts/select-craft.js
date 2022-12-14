/*************************  Arrange Section  *************************/
let arrangeIMG = document.querySelector('#arrange-img');
let arrangeType = document.querySelector('#arrange-name');
let arrangeText = document.querySelector('#arrange-text');

let arrangements = [
    {
        "img": "img/c-flower.jpg",
        "name": "CRESCENT",
        "text": "The flowers are arranged to form the shape of a crescent and show graceful and  beautiful curved lines in an asymmetrical style. This design can be seen used on a flower basket arrangement using freshly plucked flowers with green leaves and stem fillers. <br><br> This arrangement is also knows as ‘C type’ and can be used as a gift or a delightful event decoration.",
    },

    {
        "img": "img/f-flower.jpg",
        "name": "FAN-SHAPED",
        "text": "The flowers are arranged to form the shape of a fan and show a classic style as the flowers and leaved are placed in an outward position. This design sometimes look like a triangular arrangement. While most are made with fresh flowers, some are made with dried flowers. <br><br> This type of arrangement can be used as a gift or for interior display.",
    },
    {
        "img": "img/o-flower.jpg",
        "name": "OVAL",
        "text": "The flowers are arranged to form an oval shape and show a charming and extravagant design. To create more variety of this arrangements (such as bouquets, baskets, and bunches), the flowers, leaves and stems are trimmed into oval shaped. <br><br> This type of arrangement is highly recommended by many florists and typically used for interior display and ceremony decorations.",
    },
    {
        "img": "img/s-flower.jpg",
        "name": "S-SHAPED",
        "text": "The flowers are arranged to form the shape of an ’S’ and show beautiful and elegant curved lines. Leaves are typically used as a filler for flowers to appear more prominent. <br><br> This arrangement is also knows as ‘Hogarth Design’, and typically used for special occasions.",
    },
    {
        "img": "img/w-flower.jpg",
        "name": "WREATH",
        "text": "The flowers are arranged to form the shape of a circle and shows a beautiful symmetrical design. There are different variations such as garland type (small wreath) and easel mounted (large wreath). <br><br> This arrangement is used to display at various occasions and for interior display. Some events includes receptions, Christmas, and funerals.",
    }
]

function randomArrange() {
    var num = Math.floor(Math.random() * 5);
    arrangeIMG.src = arrangements[num].img;
    arrangeType.innerHTML= arrangements[num].name;
    arrangeText.innerHTML = arrangements[num].text;

    var get = "#type-" + num;
    let selected = document.querySelector(get);
    selected.classList.add("arrange-selected");
}
randomArrange()

function changeArrangeType(num) {
    arrangeIMG.src = arrangements[num].img;
    arrangeType.innerHTML= arrangements[num].name;
    arrangeText.innerHTML = arrangements[num].text;

    let remove = document.getElementsByClassName("select-option arrange-selected");
    remove[0].classList.remove("arrange-selected");

    var get = "#type-" + num;
    let selected = document.querySelector(get);
    selected.classList.add("arrange-selected");
};



/*************************  Alternative Section  *************************/
let alternativeIframe = document.querySelector('#alternative-iframe');
let alternativeType = document.querySelector('#alternative-name');
let alternativeText = document.querySelector('#alternative-text');

let alternatives = [
    {
        "iframe": "https://www.youtube.com/embed/rEKfLP6UbLQ",
        "name": "CROCHET",
        "text": "Beautiful display of flowers as well as a relaxing past time. Typically used as embellishment to other crochet projects, such as hats, sweater, blanket, etc.",
    },
    {
        "iframe": "https://www.youtube.com/embed/TJMqMcOzof4",
        "name": "FABRIC",
        "text": "These artificial flowers can be made from different kinds of fabrics, including silk, velvet, natural textures, and more. You can see these flowers used as alternative displays to real flowers. Other uses inlude embellishments, such as brooches and corsages.",
    },
    {
        "iframe": "https://www.youtube.com/embed/vjdLvsOq7rg",
        "name": "PAPER",
        "text": "These types of flowers are a fun arts and crafts project. There are different types of papers used depending on the type of flower being made. These can be used as simple decorations or gifts.",
    },
    {
        "iframe": "https://www.youtube.com/embed/lUQxEw8nJV8",
        "name": "SUGAR",
        "text": "Beautiful display of flowers, typically placed on on cakes. While they are safe to be used as decorations, they are not to be consumed. Sugar flowers can replicate a variety of real flowers.",
    },
    {
        "iframe": "https://www.youtube.com/embed/D3egTjIdbfE",
        "name": "WATERCOLOR",
        "text": "Painted flowers are visually beautiful and watercolor is a popular choice. Like any other watercolor project, flowers can be used. Examples would include postcards, bookmarks, interior display, or gifts.",
    },
]

function randomAlternative() {
    var num = Math.floor(Math.random() * 5);
    alternativeIframe.src = alternatives[num].iframe;
    alternativeType.innerHTML= alternatives[num].name;
    alternativeText.innerHTML = alternatives[num].text;

    var get = "#craft-" + num;
    let selected = document.querySelector(get);
    selected.classList.add("alternative-selected");
}
randomAlternative()

function changeAlternativeType(num) {
    alternativeIframe.src = alternatives[num].iframe;
    alternativeType.innerHTML= alternatives[num].name;
    alternativeText.innerHTML = alternatives[num].text;

    let remove = document.getElementsByClassName("select-option alternative-selected");
    remove[0].classList.remove("alternative-selected");

    var get = "#craft-" + num;
    let selected = document.querySelector(get);
    selected.classList.add("alternative-selected");
};