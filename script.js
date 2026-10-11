const input = document.querySelector("#input");
const clearBtn = document.querySelector("#clearBtn");
const addBtn = document.querySelector("#addBtn");
const notesList = document.querySelector("#notesList");
const notesCount = document.querySelector("#notesCount");

const notes = [];

// گرفتن Noteهای ذخیره‌شده
const savedNotes = localStorage.getItem("notes");
if (savedNotes) {
    notes.push(...JSON.parse(savedNotes));
}
function udateNotesCount(){
    notesCount.textContent = `Note: ${notes.length}`;
}


// نمایش Noteها
function showNote(note) {
    const li = document.createElement("li");
    li.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        const index = notes.indexOf(note);

        notes.splice(index, 1);

        localStorage.setItem("notes", JSON.stringify(notes));

        li.remove();
        udateNotesCount();
    });

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
}


// نمایش Noteهای قبلی
notes.forEach(function (note) {
    showNote(note);
});
udateNotesCount();

// اضافه کردن Note جدید
addBtn.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNote(text);
    input.value = "";

    udateNotesCount();


});

clearBtn.addEventListener("click", function(){
  notes.length = 0;
  notesList.innerHTML = "";
  localStorage.removeItem("notes");
 
    udateNotesCount();

});

