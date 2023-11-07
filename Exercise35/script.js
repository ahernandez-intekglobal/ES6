let ascendingOrder = true;

function toggleSortTableByAge() {
    let table = document.getElementById("sortable-table");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
        let ageA = parseInt(a.children[1].textContent);
        let ageB = parseInt(b.children[1].textContent);
        if (ascendingOrder) {
            return ageA - ageB;
        } else {
            return ageB - ageA;
        }
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => {
        tbody.appendChild(row);
    });

    ascendingOrder = !ascendingOrder;
}

let ageHeader = document.getElementById("age-header");
ageHeader.addEventListener("click", toggleSortTableByAge);
