/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
const raquets = [
    { 
        url: "https://joybadminton.com/cdn/shop/files/YonexArcsaber2Feel_BlackGreen_Pre-Strung2.png?v=1732321999&width=1946", 
        price: 59.99,
        description: [
            "Color: Black/Green",
            "Balance: Even Balance",
            "Frame: HT Graphite"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/YonexNanoflare370SPEED_Blue_NO.png?v=1727986601&width=1946", 
        price: 131.50,
        description: [
            "Color: Blue",
            "Balance: Head Light",
            "Frame: HM Graphite / Nanocell NEO / EX - HMG"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/YonexDuora55_DarkGrey_NO.png?v=1742602636&width=1946",
        price: 119,
        description: [
            "Color: Dark Grey",
            "Balance: Even Balance",
            "Frame: H.M. Graphite / NANOMETRIC"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorDriveXMetallicDX-METALLIC-C_Black_4.png?v=1735848846&width=1946", 
        price: 114.99,
        description: [
            "Color: Black",
            "Balance: Even balance",
            "Frame: High Resilience Modulus Graphite"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorThrusterSyn_TK-SYN-C_4.png?v=1734384447&width=1946",
        price: 114.99,
        description: [
            "Color: Black",
            "Balance: Head Heavy",
            "Frame: High Resilience Modulus Graphite"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorThrusterHawkTK-HAWK-A_White_4.png?v=1734140200&width=1946",
        price: 89.99,
        description: [
            "Color: White",
            "Balance: Head Heavy",
            "Frame: High Resilience Modulus Graphite + PYROFIL"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/AN7000I-5UG6-PINK4.png?v=1728603014&width=1946",
        price: 239.99,
        description: [
            "Color: Pink",
            "Balance: Head Heavy",
            "Frame: Military Grade Carbon Fiber"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/AN9000I-5UG6MAIN_e3250103-26f9-4762-81ff-9ef4a0e73e5a.png?v=1727464978&width=1946",
        price: 259.99,
        description: [
            "Color: Black/Gold",
            "Balance: Head Heavy",
            "Frame: Carbon Fibre"
        ]
    },
    {
        url: "https://joybadminton.com/cdn/shop/files/Li-NingAeronaut7000I_Green_main.png?v=1728690655&width=1946",
        price: 239.99,
        description: [
            "Color: Green",
            "Balance: Head Heavy",
            "Frame: Military Grade Carbon Fiber"
        ]
    },
    {
        url: "https://joybadminton.com/cdn/shop/files/HundredNuclear726_4e6cab48-f898-4c4f-a6bd-6b03a6286002.png?v=1739497365&width=1946",
        price: 109.99,
        description: [
            "Color: Orange",
            "Balance: Head Heavy",
            "Frame: Japan Carbon Fibre"
        ]
    },
    {
        url: "https://joybadminton.com/cdn/shop/files/HundredT-Fusion500Zoom_White_6_8d7ad6ee-a65b-405a-bd43-b1b1785af0ec.png?v=1739497206&width=1946",
        price: 109,
        description: [
            "Color: White",
            "Balance: Head Heavy",
            "Frame: Japan Carbon Fibre"
        ]
    },
    {
        url: "https://joybadminton.com/cdn/shop/files/HundredAtomicXDarkSword6_a68b6209-e1f2-4f48-b8b3-dc87bd74a52a.png?v=1739840053&width=1946",
        price: 99,
        description: [
            "Color: White/Black",
            "Balance: Head Heavy",
            "Frame: Japan Carbon Fibre"
        ]
    }

];


// Name of raquets
const parsedNames = raquets.map((item) => {
    const url = item.url;
    const price = item.price;
    
    const filename = url.split('/').pop().split('?')[0];
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
    const nameParts = nameWithoutExtension.split('_');
    let formattedName = "";

    if (nameParts[0].includes("Yonex") || nameParts[0].includes("Victor") || nameParts[0].includes("Li-Ning") || nameParts[0].includes("Hundred") ) {
        formattedName = nameParts[0]
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/([A-Za-z])(\d)/g, '$1 $2')
            .replace(/(\d)([A-Za-z])/g, '$1 $2');
    } else {
        const name = nameParts[0];
        if (name.startsWith("AN")) {
            const dashIndex = name.indexOf("-");
            const model = name.substring(2, dashIndex !== -1 ? dashIndex : undefined);
            formattedName = "Li-Ning Auronaut " + model;
        } else {
            formattedName = "Li-Ning " + name.replace(/([a-z])([A-Z])/g, '$1 $2');
        }
    }

    return { formattedName, price };
});

let activeData = [...parsedNames];

// Function to display cards
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < raquets.length; i++) {
        let raq_name = parsedNames[i].formattedName;
        let imageURL = raquets[i].url;
        let price = raquets[i].price;
        let description = raquets[i].description;

        const nextCard = templateCard.cloneNode(true); 
        editCardContent(nextCard, raq_name, imageURL, price, description); 
        cardContainer.appendChild(nextCard); 
    }
}

let filteredData = [...raquets];

// Function to sort by price
function sortByPrice() {
    const sortedData = [...activeData].sort((a, b) => a.price - b.price);

    document.querySelectorAll("#sidebar button").forEach(btn =>
        btn.classList.remove("active-sort")
    );
    document.querySelector('#sidebar button:nth-child(3)').classList.add("active-sort");

    const fullSorted = sortedData.map(({ name }) => {
        const index = parsedNames.findIndex(p => p.formattedName === name);
        return {
            name,
            imageUrl: raquets[index].url,
            price: raquets[index].price,
            description: raquets[index].description
        };
    });

    showSortedCards(fullSorted);
}

// Function to sort by model (name)
function sortByModel() {
    const sortedData = [...activeData].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    document.querySelectorAll("#sidebar button").forEach(btn =>
        btn.classList.remove("active-sort")
    );
    document.querySelector('#sidebar button:nth-child(2)').classList.add("active-sort");

    const fullSorted = sortedData.map(({ name }) => {
        const index = parsedNames.findIndex(p => p.formattedName === name);
        return {
            name,
            imageUrl: raquets[index].url,
            price: raquets[index].price,
            description: raquets[index].description
        };
    });
    showSortedCards(fullSorted);
}

// Function to display the sorted cards
function showSortedCards(sortedData) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 
    const templateCard = document.querySelector(".card");

    sortedData.forEach((raq) => {
        const nextCard = templateCard.cloneNode(true);  
        editCardContent(nextCard, raq.name, raq.imageUrl, raq.price, raq.description);
        cardContainer.appendChild(nextCard);  
    });
}

function guessColorFromName(colorStr) {
    const colorMap = {
        black: "#000",
        white: "#fff",
        blue: "#4c4cfd",
        green: "#38761d",
        pink: "#ffc0cb",
        gold: "#ffd24b",
        grey: "#444444",
        gray: "gray",
        red: "red",
        dark: "#222",
        orange: "orange"
    };

    let lower = colorStr.toLowerCase();
    for (const key in colorMap) {
        if (lower.includes(key)) return colorMap[key];
    }
    return "#ccc"; 
}

// Function to edit card content
function editCardContent(card, newTitle, newImageURL, price, description) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h3");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const priceElement = card.querySelector(".price");
    priceElement.textContent = "$" + price.toFixed(2);

    const descriptionElement = card.querySelector(".description");
    if (descriptionElement) {
        descriptionElement.innerHTML = "";

        description.forEach((point) => {
            const box = document.createElement("div");
            box.classList.add("description-box");
        
            const [label, value] = point.split(":");
        
            const boldLabel = document.createElement("strong");
            boldLabel.textContent = label.trim() + ": ";
        
            box.appendChild(boldLabel);
        
            if (label.toLowerCase().includes("color")) {
                const valueText = document.createTextNode(value.trim() + " ");
                box.appendChild(valueText);
        
                const colors = value.split("/");
                colors.forEach((color) => {
                    const dot = document.createElement("span");
                    dot.classList.add("color-dot");
                    dot.style.backgroundColor = guessColorFromName(color.trim());
                    box.appendChild(dot);
                });
            } else {
                const valueText = document.createTextNode(value.trim());
                box.appendChild(valueText);
            }
        
            descriptionElement.appendChild(box);
        });
    }
}

function filterBySearch(term) {
    const searchTerm = term.toLowerCase();
    activeData = parsedNames.filter(item =>
        item.formattedName.toLowerCase().includes(searchTerm)
    );
    showSortedCards(activeData);
}


// Button click alert
function purchaseItems() {
    console.log("Button Clicked!");
    const confirmation = confirm("Items can be purchased on external website 'Joy Badminton'. You are going to be redirected to https://joybadminton.com/. Do you want to proceed?");
    if (confirmation) {
        window.location.href = "https://joybadminton.com/";
    }
}

// Function to update the filtered data when searching
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");

    if (searchBar) {
        searchBar.addEventListener("input", function () {
            const searchTerm = this.value.toLowerCase();
            // Update activeData based on search
            activeData = raquets
                .map((raq, index) => ({
                    name: parsedNames[index].formattedName,
                    imageUrl: raq.url,
                    price: raq.price,
                    description: raq.description
                }))
                .filter((item) => item.name.toLowerCase().includes(searchTerm));

            showSortedCards(activeData);
        });
    }
    showCards(); // Load initial unfiltered set
});


document.addEventListener("DOMContentLoaded", function() {
    activeData = raquets
                .map((raq, index) => ({
                    name: parsedNames[index].formattedName,
                    imageUrl: raq.url,
                    price: raq.price,
                    description: raq.description
                }));
    showCards()
});