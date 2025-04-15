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
            "Frame: HT Graphite",
            "Balance: Even Balance"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/YonexNanoflare370SPEED_Blue_NO.png?v=1727986601&width=1946", 
        price: 131.50,
        description: [
            "Color: Blue",
            "Frame: HM Graphite / Nanocell NEO / EX - HMG",
            "Balance: Head Light"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/YonexDuora55_DarkGrey_NO.png?v=1742602636&width=1946",
        price: 119,
        description: [
            "Color: Dark Grey",
            "Frame: H.M. Graphite / NANOMETRIC β",
            "Balance: Even Balance"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorDriveXMetallicDX-METALLIC-C_Black_4.png?v=1735848846&width=1946", 
        price: 114.99,
        description: [
            "Color: Black",
            "Frame: High Resilience Modulus Graphite + HARD CORED TECHNOLOGY",
            "Balance: Even balance"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorThrusterSyn_TK-SYN-C_4.png?v=1734384447&width=1946",
        price: 114.99,
        description: [
            "Color: Black",
            "Frame: Frame: High Resilience Modulus Graphite + HARD CORED TECHNOLOGY",
            "Balance: Head Heavy"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/VictorThrusterHawkTK-HAWK-A_White_4.png?v=1734140200&width=1946",
        price: 89.99,
        description: [
            "Color: White",
            "Frame: High Resilience Modulus Graphite + PYROFIL + HARD CORED TECHNOLOGY",
            "Balance: Head Heavy"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/AN7000I-5UG6-PINK4.png?v=1728603014&width=1946",
        price: 239.99,
        description: [
            "Color: Pink",
            "Frame: Military Grade Carbon Fiber",
            "Balance: Head Heavy"
        ]
    },
    { 
        url: "https://joybadminton.com/cdn/shop/files/AN9000I-5UG6MAIN_e3250103-26f9-4762-81ff-9ef4a0e73e5a.png?v=1727464978&width=1946",
        price: 259.99,
        description: [
            "Color: Black/Gold",
            "Frame: Carbon Fibre",
            "Balance: Head Heavy"
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

    if (nameParts[0].includes("Yonex") || nameParts[0].includes("Victor")) {
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

console.log(parsedNames);

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

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, raq_name, imageURL, price, description); // Pass the description array
        cardContainer.appendChild(nextCard); // Add the new card to the container
    }
}

// Function to sort by price
function sortByPrice() {
    const sortedData = raquets.map((raq, index) => ({
        name: parsedNames[index].formattedName,
        imageUrl: raq.url,
        price: raq.price,
        description: raq.description
    })).sort((a, b) => a.price - b.price);

    showSortedCards(sortedData);
}

// Function to sort by model (name)
function sortByModel() {
    const sortedData = raquets.map((raq, index) => ({
        name: parsedNames[index].formattedName,
        imageUrl: raq.url,
        price: raq.price,
        description: raq.description
    })).sort((a, b) => a.name.localeCompare(b.name));

    showSortedCards(sortedData);
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

// Function to edit card content
function editCardContent(card, newTitle, newImageURL, price, description) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const priceElement = card.querySelector(".price");
    priceElement.textContent = "$" + price.toFixed(2);

    const descriptionElement = card.querySelector(".description");
    if (descriptionElement) {
        const ul = document.createElement("ul");
        description.forEach((point) => {
            const li = document.createElement("li");
            li.textContent = point;
            ul.appendChild(li);
        });
        descriptionElement.appendChild(ul);
    }
}

// Initial page load function
document.addEventListener("DOMContentLoaded", showCards);

// Button click alert
function quoteAlert() {
    console.log("Button Clicked!");
    alert(
        "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
    );
}
