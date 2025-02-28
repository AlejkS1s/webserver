function analyzeData() {

    const form = document.getElementById("blood-chemistry-form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}

document.getElementById("analyze-btn").addEventListener("click", analyzeData);