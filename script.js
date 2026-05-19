let animes = [
    "Fullmetal Alchemist: Brotherhood",
    "Hunter x Hunter",
    "Steins;Gate"
];

const loginScreen = document.getElementById("login-screen");
const appScreen = document.getElementById("app-screen");
const loginError = document.getElementById("login-error");
const animeError = document.getElementById("anime-error");
const animeList = document.getElementById("anime-list");

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    loginError.innerText = "";

    if (username === "" || password === "") {
        loginError.innerText = "Preencha todos os campos.";
        return;
    }

    if (username === "aluno" && password === "fiap2025") {
        loginScreen.classList.remove("active");
        appScreen.classList.add("active");
    } else {
        loginError.innerText = "Usuário ou senha incorretos.";
    }
}

function logout() {
    appScreen.classList.remove("active");
    loginScreen.classList.add("active");
}

function renderAnimes() {
    animeList.innerHTML = "";

    for (let i = 0; i < animes.length; i++) {
        animeList.innerHTML += `
            <div class="anime-card">
                <div class="anime-left">
                    <span class="anime-index">${i + 1}</span>
                    <span class="anime-name">${animes[i]}</span>
                </div>
                <div class="anime-actions">
                    <button class="btn-edit" onclick="editAnime(${i})">EDITAR</button>
                    <button class="btn-remove" onclick="removeAnime(${i})">REMOVER</button>
                </div>
            </div>
        `;
    }
}

function validateInput() {
    const input = document.getElementById("anime-input");
    const value = input.value.trim();

    animeError.innerText = "";

    if (value === "") {
        animeError.innerText = "Digite o nome de um anime.";
        return null;
    }

    return value;
}

function addToEnd() {
    const value = validateInput();
    if (value === null) {
        return;
    }
    animes.push(value);
    clearInput();
    renderAnimes();
}

function addToStart() {
    const value = validateInput();
    if (value === null) {
        return;
    }
    animes.unshift(value);
    clearInput();
    renderAnimes();
}

function editAnime(index) {
    const updated = prompt("Editar anime:", animes[index]);

    if (updated === null || updated.trim() === "") {
        return;
    }

    animes[index] = updated.trim();
    renderAnimes();
}

function removeAnime(index) {
    animes.splice(index, 1);
    renderAnimes();
}

function clearInput() {
    document.getElementById("anime-input").value = "";
}

renderAnimes();
