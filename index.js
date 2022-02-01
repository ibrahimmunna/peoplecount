let count = 0;

function increase() {

    count = count + 1;
    document.getElementById("count_ppl").innerText = count;

}

function decrease() {
    count = count - 1;
    document.getElementById("count_ppl").innerText = count;
}

function save() {
    let entries = " " + count + " -"
    document.getElementById("save-el").innerText += entries;
    document.getElementById("count_ppl").textContent = 0;
    count = 0;

}