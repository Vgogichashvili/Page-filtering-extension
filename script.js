// function autoRefresh() {
//     if (location.href.indexOf('refreshed') == -1) {
//         location.href = location.href + '?refreshed';
//     }
// }

// autoRefresh()

const cardsList = document.getElementById('table-Body');
const searchBar = document.getElementById('searchBar');
let hpcards = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredcards = hpcards.filter((card) => {
        return (
            card.manufacturer.toLowerCase().includes(searchString) ||
            card.model.toLowerCase().includes(searchString)
        );
    });
    displaycards(filteredcards);
});

const loadcards = async () => {
    try {
        const res = await fetch('http://localhost:3000/data');
        hpcards = await res.json();
        displaycards(hpcards);
    } catch (err) {
        console.error(err);
    }
};

const displaycards = (cards) => {
    const htmlString = cards
        .map((card) => {
            return `
             <tr class="cards">
                   <td> <img src="${card.image}"></img></td>
                    <td>${card.manufacturer}</td>
                    <td>${card.model}</td>
                    <td>${card.price}</td>
                </tr>
        `;
        })
        .join('');
    cardsList.innerHTML = htmlString;
};

loadcards();


// const table = document.querySelector("#table-Body");
// const lastRow = table.rows[ table.rows.length - 1 ];




