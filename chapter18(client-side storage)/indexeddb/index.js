// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;

const openreq = window.indexedDB.open("notes_db", 2)

openreq.addEventListener("error", () => {
    console.log('database initiation failed')
})

openreq.addEventListener("success", () => {
    console.log('successfully connected to db')

    db = openreq.result

    displayData()
})

openreq.addEventListener("upgradeneeded", (e) => {
    db = e.target.result

    const objectStore = db.createObjectStore("notes_os", {
        keyPath: "id",
        autoIncrement: true,
    })

    objectStore.createIndex("title", "title", { unique: false });
    objectStore.createIndex("body", "body", { unique: false });

    console.log("Database setup complete");
})

form.addEventListener("submit", addData)

function addData(e) {
    e.preventDefault();

    // Check if the db object is defined
    if (!db) {
        console.error("Database not initialized. Cannot add data.");
        return;
    }

    const newItem = { title: titleInput.value, body: bodyInput.value };
    const transaction = db.transaction(["notes_os"], "readwrite");
    const objectStore = transaction.objectStore("notes_os");
    const addRequest = objectStore.add(newItem);

    openreq.addEventListener("success", () => {
        console.log('successfully connected to db');
        db = openreq.result;
        displayData();
    });

    form.addEventListener("submit", addData);

    transaction.addEventListener("complete", () => {
        console.log("Transaction completed: database modification finished.");

        displayData()
    })

    transaction.addEventListener("error", () =>
        console.log("Transaction not opened due to error"),
    );
}

function displayData() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const objectStore = db.transaction("notes_os").objectStore("notes_os");
    objectStore.openCursor().addEventListener("success", (e) => {
        const cursor = e.target.result;

        // If there is still another data item to iterate through, keep running this code
        if (cursor) {
            const listItem = document.createElement("li");
            const h3 = document.createElement("h3");
            const para = document.createElement("p");

            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);
            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;
            listItem.setAttribute("data-note-id", cursor.value.id);


            const deleteBtn = document.createElement("button");
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", deleteItem);

            // Iterate to the next item in the cursor
            cursor.continue();
        } else {
            // Again, if list item is empty, display a 'No notes stored' message
            if (!list.firstChild) {
                const listItem = document.createElement("li");
                listItem.textContent = "No notes stored.";
                list.appendChild(listItem);
            }
            // if there are no more cursor items to iterate through, say so
            console.log("Notes all displayed");
        }
    });
}

function deleteItem(e) {
    const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

    // open a database transaction and delete the task, finding it using the id we retrieved above
    const transaction = db.transaction(["notes_os"], "readwrite");
    const objectStore = transaction.objectStore("notes_os");
    const deleteRequest = objectStore.delete(noteId);

    // report that the data item has been deleted
    transaction.addEventListener("complete", () => {
        // delete the parent of the button
        // which is the list item, so it is no longer displayed
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        console.log(`Note ${noteId} deleted.`);

        // Again, if list item is empty, display a 'No notes stored' message
        if (!list.firstChild) {
            const listItem = document.createElement("li");
            listItem.textContent = "No notes stored.";
            list.appendChild(listItem);
        }
    });
}