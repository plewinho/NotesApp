const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtns = document.getElementsByClassName("delete.note");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".notes-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");
let selectedValue;
let cardId = 0;

const addNote = () => {
  if (
    category.options[category.selectedIndex].value !== "0" &&
    textArea.value !== ""
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardId);
  newNote.innerHTML = `
  <div class="note-header">
          <h3 class="note-title">${selectedValue}</h3>
          <button class="delete-note"><i class="fas fa-times icon"></i></button>
        </div>
        <div class="note-body">
          ${textArea.value}
        </div>
  `;
  noteArea.appendChild(newNote);
  cardId++;
  textArea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
};
const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

addBtn.addEventListener("click", () => {
  notePanel.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  category.selectedIndex = 0;
  textArea.value = "";
});

saveBtn.addEventListener("click", addNote);
