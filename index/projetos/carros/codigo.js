let cars = [
    { name: "Carro laranja", Image: "laranja.jpg", rentedImage: "alugado.png" },
    { name: "Carro rosa", Image: "rosa.jpg", rentedImage: "alugado.png" },
    { name: "Carro branco", Image: "branco.jpeg", rentedImage: "alugado.png" },

];

let carsDiv = document.getElementById("cars");

cars.forEach(function (car) {
    let carDiv = document.createElement("div");
    carDiv.className = "car";

    let carName = document.createElement("h2");
    carName.textContent = car.name;
    carDiv.appendChild(carName);

    let carImage = document.createElement("img");
    carImage.src = car.Image;
    carDiv.appendChild(carImage);

    let rentButton = document.createElement("button")
    rentButton.textContent = "Alugar";
    rentButton.onclick = function () {
        this.parentNode.removeChild(this);
        carImage.src = car.rentedImage;
    }
    carDiv.appendChild(rentButton);
    carsDiv.appendChild(carDiv);
}
)