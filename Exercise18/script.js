document.addEventListener("DOMContentLoaded", function () {
    let candidatesTableBody = document.getElementById("candidatesTableBody");

    function createCandidateRow(candidate) {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = candidate.name;
        let lastNameCell = document.createElement("td");
        lastNameCell.textContent = candidate.lastname;
        let phoneCell = document.createElement("td");
        phoneCell.textContent = candidate.phone;
        let actionsCell = document.createElement("td");
        let editLink = document.createElement("a");
        editLink.href = "#";
        editLink.textContent = "Edit";
        editLink.classList.add("edit-link");
        let deleteLink = document.createElement("a");
        deleteLink.classList.add("delete-link");
        deleteLink.href = "#";
        deleteLink.textContent = "Delete";

        actionsCell.appendChild(editLink);
        actionsCell.appendChild(document.createTextNode(" | "));
        actionsCell.appendChild(deleteLink);

        row.appendChild(nameCell);
        row.appendChild(lastNameCell);
        row.appendChild(phoneCell);
        row.appendChild(actionsCell);

        return row;
    }

    function appendCandidateRow(candidate) {
        let row = createCandidateRow(candidate);
        candidatesTableBody.appendChild(row);

        let editLink = row.querySelector("a.edit-link");
        let deleteLink = row.querySelector("a.delete-link");

        if (editLink) {
            editLink.addEventListener("click", function (event) {
                event.preventDefault();
                editCandidate(candidate);
            });
        }

        if (deleteLink) {
            deleteLink.addEventListener("click", function (event) {
                event.preventDefault();
                deleteCandidate(candidate);
                row.remove();
            });
        }
    }

    document.getElementById("addCandidateLink").addEventListener("click", function (event) {
        event.preventDefault();
        addCandidate();
    });

    function getCandidates() {
        fetch("candidates.json")
            .then(response => response.json())
            .then(data => {
                data.forEach(candidate => {
                    appendCandidateRow(candidate);
                });
            })
            .catch(error => console.error("Error fetching candidates:", error));
    }

    function deleteCandidate(candidate) {
        let candidateId = candidate.id;
    
        fetch(`http://some-server-url.com/candidates/${candidateId}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.status === 204) {
                console.log(`Candidate with ID ${candidateId} has been deleted.`);
            } else {
                console.error("Error deleting candidate.");
            }
        })
        .catch(error => console.error("Error deleting candidate:", error));
    }
    
    function editCandidate(candidate) {
        let candidateId = candidate.id;
        let updatedCandidateData = {
            name: "Updated Name",
            lastname: "Updated Last Name",
            phone: "Updated Phone Number",
        };
    
        fetch(`http://some-server-url.com/candidates/${candidateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCandidateData),
        })
        .then(response => {
            if (response.status === 200) {
                console.log(`Candidate with ID ${candidateId} has been updated.`);
            } else {
                console.error("Error updating candidate.");
            }
        })
        .catch(error => console.error("Error updating candidate:", error));
    
    }

    function addCandidate(candidate) {
        let candidateId = candidate.id;
        let newCandidateData = {
            name: "New Name",
            lastname: "New Last Name",
            phone: "New Phone Number",
        };
    
        fetch(`http://some-server-url.com/candidates/${candidateId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCandidateData),
        })
        .then(response => {
            if (response.status === 200) {
                console.log(`Candidate with ID ${candidateId} has been created.`);
            } else {
                console.error("Error updating candidate.");
            }
        })
        .catch(error => console.error("Error creating candidate:", error));
    }

    getCandidates();
});
