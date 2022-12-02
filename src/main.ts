import './style.scss';

const thumbs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".thumb img");
const imgSelected = document.querySelector(".img-selected img") as HTMLImageElement;
thumbs.forEach((img) => img.addEventListener("click", () => imgSelected.src = img.src));


const btnsQuantity: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-quantity");
const inputQuantity = document.querySelector("#quantity") as HTMLInputElement;
const btnCart = document.querySelector(".add-cart") as HTMLButtonElement;
const spanQuantity = document.querySelector(".cart span") as HTMLSpanElement;

btnsQuantity.forEach((btn) => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        const min = Number(inputQuantity.getAttribute("min"));
        const max = Number(inputQuantity.getAttribute("max"));
        const currentValue = Number(inputQuantity.value);

        const newValue = action === "inc" ? currentValue + 1 : currentValue - 1;

        if (newValue >= min && newValue <= max) {
            inputQuantity.value = newValue.toString();
        }
    });
});

btnCart.addEventListener("click", () => {
    spanQuantity.textContent = inputQuantity.value;
    spanQuantity.classList.add("visible");
});