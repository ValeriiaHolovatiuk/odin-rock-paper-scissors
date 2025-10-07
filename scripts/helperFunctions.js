function ResetValues(...values) {
    return values.map(() => 0);
}

function AddCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.add(className);
    });
}

function RemoveCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.remove(className);
    });
}

function UpdateElements(values) {
    for (const [id, value] of Object.entries(values)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
}

function UpdateElementsColor(values) {
    for (const [id, value] of Object.entries(values)) {
        const el = document.getElementById(id);
        if (el) el.style.color = value;
    }
}
