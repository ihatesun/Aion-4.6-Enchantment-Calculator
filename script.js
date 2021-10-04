let itemLevel = document.getElementById("slItemLevel");
let itemEnchantmentLevel = document.getElementById("slEnchLevel");
let itemType = document.querySelector('input[name="item-type"]:checked');

let table = document.getElementById("calculator-output-content");
let itemTypeRadios = document.querySelectorAll('input[name="item-type"]');

const MAX_ITEM_LEVEL = 65;
const MAX_ENCH_LEVEL = 15;

for (let i = MAX_ITEM_LEVEL; i > 0; i--) {
    itemLevel.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 0; i < MAX_ENCH_LEVEL; i++) {
    itemEnchantmentLevel.innerHTML += `<option value="${i}">${i}</option>`;
}

generateTable();

document.getElementById("slEnchLevel").addEventListener("change", () => {
    generateTable();
});

document.getElementById("slItemLevel").addEventListener("change", () => {
    generateTable();
});

for (const radioButton of itemTypeRadios) {
    radioButton.addEventListener('change', () => {
        itemType = document.querySelector('input[name="item-type"]:checked');

        itemLevel.firstElementChild.selected = true;
        itemEnchantmentLevel.firstElementChild.selected = true;

        generateTable();
    });
}

function generateTable() {
    table.innerHTML = "";

    maxStone =
        Number(itemLevel.value) + Number(itemType.value) + Number(itemEnchantmentLevel.value);

    for (let difference = 40; difference >= 0; difference--) {
        table.innerHTML += `<div class="calculator-output-content-row">
                                <div>L${maxStone--}</div>
                                <div>${difference * 2}%</div>
                            </div>`;
    }
}