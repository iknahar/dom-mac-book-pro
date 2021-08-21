function tableTotalCalculation() {
  var tableTotal =
    1299 +
    parseInt(document.getElementById("extraMemoryCost").innerText) +
    parseInt(document.getElementById("extraStorageCost").innerText) +
    parseInt(document.getElementById("extraDeliveryCost").innerText);

  document.getElementById("table-total").innerText = tableTotal;
  document.getElementById("grand-total").innerText = tableTotal;
}

function memoryCostPrice(ram) {
  if (ram == 8) {
    document.getElementById("extraMemoryCost").innerText = 0;
  }
  if (ram == 16) {
    document.getElementById("extraMemoryCost").innerText = 180;
  }
}

document.getElementById("memory8").addEventListener("click", function () {
  memoryCostPrice(8);
  tableTotalCalculation();
});

document.getElementById("memory16").addEventListener("click", function () {
  memoryCostPrice(16);
  tableTotalCalculation();
});

// -------------------------------
function storageCostPrice(storage) {
  if (storage == 256) {
    document.getElementById("extraStorageCost").innerText = 0;
  }
  if (storage == 512) {
    document.getElementById("extraStorageCost").innerText = 100;
  }
  if (storage == 1) {
    document.getElementById("extraStorageCost").innerText = 180;
  }
}

document.getElementById("storage256").addEventListener("click", function () {
  storageCostPrice(256);
  tableTotalCalculation();
});
document.getElementById("storage512").addEventListener("click", function () {
  storageCostPrice(512);
  tableTotalCalculation();
});
document.getElementById("storage1t").addEventListener("click", function () {
  storageCostPrice(1);
  tableTotalCalculation();
});

// -------------------------------
function deliveryCostPrice(deliveryType) {
  if (deliveryType == "free") {
    document.getElementById("extraDeliveryCost").innerText = 0;
  }
  if (deliveryType == "quick") {
    document.getElementById("extraDeliveryCost").innerText = 20;
  }
}

document.getElementById("deliveryFree").addEventListener("click", function () {
  deliveryCostPrice("free");
  tableTotalCalculation();
});

document.getElementById("deliveryQuick").addEventListener("click", function () {
  deliveryCostPrice("quick");
  tableTotalCalculation();
});

// ------------------ Coupon Apply -------------

function couponApplied() {
  if (document.getElementById("promoCodeInput").value == "stevekaku") {
    document.getElementById("grand-total").innerText =
      parseInt(document.getElementById("table-total").innerText) * 0.8;
  }
  var emptyString = "";
  document.getElementById("promoCodeInput").value = emptyString;
}
