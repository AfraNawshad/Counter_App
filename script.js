let count = 0;
const counterDisplay = document.getElementById("counter");
const savedList = document.getElementById("saved-list");

// Load theme
document.body.dataset.theme = localStorage.getItem("theme") || "light";

function updateDisplay() {
    counterDisplay.textContent = count;
}

document.getElementById("increment").addEventListener("click", () => {
    count++;
    updateDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

document.getElementById("add-btn").addEventListener("click", () => {
    let value = parseInt(document.getElementById("custom-value").value);
    if (!isNaN(value)) {
        count += value;
        if (count < 0) count = 0;
        updateDisplay();
    }
});

document.getElementById("reset-btn").addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    let currentTheme = document.body.dataset.theme;
    let newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
});

// Save with delete
document.getElementById("save-btn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.className = "saved-item";
    li.innerHTML = `${count} <button class="delete-btn">X</button>`;
    savedList.appendChild(li);

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });
});

// Clear all
document.getElementById("clear-all").addEventListener("click", () => {
    savedList.innerHTML = "";
});
