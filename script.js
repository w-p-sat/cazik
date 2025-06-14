function spin() {
    if (localStorage.getItem("wheelSpinned") === "true") {
        alert("Вы уже крутили!");
        return;
    }

    document.querySelector(".spin").style.display = "none";
    document.getElementById("wheel").play();

    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let finalRotation = 1770;

    box.style.transition = "all ease 5s";
    box.style.transform = "rotate(" + finalRotation + "deg)";
    element.classList.remove("animate");

    setTimeout(() => {
        element.classList.add("animate");
    }, 5000);

    setTimeout(() => {
        // Показуємо модальне вікно
        const modal = document.getElementById("modal");
        modal.style.display = "flex";

        // Викликаємо функцію, що додає стилі
        addModalStyles();
    }, 6000);

    localStorage.setItem("wheelSpinned", "true");
}

// Функція для додавання стилів до модального вікна
function addModalStyles() {
    const modalContent = document.querySelector(".modal-content");
    const box = document.getElementById("box");

    // Призначаємо стилі для модального вікна
    modalContent.style.width = "80%";  // Наприклад, змінюємо ширину
    modalContent.style.maxWidth = "350px";  // Максимальна ширина

    // Обнуляємо стилі для вікна після прокручування
    box.style.width = "auto";  // Наприклад, обнуляємо ширину коробки
    box.style.height = "auto";  // І висоту
}

// Додаємо обробник події для кнопки Play
document.getElementById("playBtn").addEventListener("click", function() {
    window.location.href = "https://coinsaffs.com/d77ecda7f"; // Ссилка на сайт
});


