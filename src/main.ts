import './style.scss';

// ----- Photos ----- \\
const thumbs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".thumb img");
const imgSelected = document.querySelector(".img-selected img") as HTMLImageElement;
thumbs.forEach((img) => img.addEventListener("click", () => imgSelected.src = img.src));


// ----- Quantité et Panier  ----- \\
const btnsQuantity: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-quantity");
const inputQuantity = document.querySelector("#quantity") as HTMLInputElement;
const btnCart = document.querySelector(".add-cart") as HTMLButtonElement;
const spanQuantity = document.querySelector(".cart span") as HTMLSpanElement;

btnsQuantity.forEach((btn) => btn.addEventListener("click", () => setQuantity(btn)));

btnCart.addEventListener("click", setCart);


// ----- Selection de la couleur  ----- \\
const colorsMenu = document.querySelector(".select-color") as HTMLDivElement;
const btnMenu = document.querySelector(".select-button") as HTMLButtonElement;
const colorsOptions: NodeListOf<HTMLLIElement> = document.querySelectorAll(".option");
const selectedColorsText = document.querySelector(".selected-color") as HTMLSpanElement;

btnMenu.addEventListener("click", () => colorsMenu.classList.toggle("active"));

colorsOptions.forEach((li) => li.addEventListener("click", () => setSelectedColor(li)));


// ----- Listener  ----- \\
function setQuantity(btn: HTMLButtonElement) {
    const action = btn.dataset.action;
    const min = Number(inputQuantity.getAttribute("min"));
    const max = Number(inputQuantity.getAttribute("max"));
    const currentValue = Number(inputQuantity.value);

    const newValue = action === "inc" ? currentValue + 1 : currentValue - 1;

    if (newValue >= min && newValue <= max) {
        inputQuantity.value = newValue.toString();
    }
}

function setCart() {
    spanQuantity.textContent = inputQuantity.value;
    spanQuantity.classList.add("visible");
}

function setSelectedColor(li: HTMLLIElement) {
    const colorSelected = li.textContent;
    const dataSetColor = li.dataset.color;

    // Récupération/Modification du texte et du bloc qui affiche la couleur sélectionné
    const colorText = selectedColorsText.querySelector(".color-text") as HTMLSpanElement;
    const colorBloc = selectedColorsText.querySelector(".color") as HTMLSpanElement;

    colorText.textContent = colorSelected;
    colorBloc.classList.remove("black", "black-blue");
    colorBloc.classList.add(`${dataSetColor}`);
}