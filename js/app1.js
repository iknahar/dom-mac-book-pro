function tableTotalCalculation() {
  var tableTotal =
    1299 +
    parseInt(document.getElementById("extraMemoryCost").innerText) +
    parseInt(document.getElementById("extraStorageCost").innerText) +
    parseInt(document.getElementById("extraDeliveryCost").innerText);
    document.getElementById("table-total").innerText = tableTotal;
}

function costPrice(property, price) {
  document.getElementById("extra" + property + "Cost").innerText = price;
  tableTotalCalculation();
}

// ------------------ Coupon Apply -------------

function couponApplied() {
  if (
    document.getElementById("promoCodeInput").value.toLowerCase() == "stevekaku"
  ) {
    document.getElementById("grand-total").innerText = parseInt(document.getElementById("table-total").innerText) * 0.8;
  }
  document.getElementById("promoCodeInput").value = "";
}

// --------------------All button Event Listener ---------------------

document.getElementById("memory8").addEventListener("click", function () {
  costPrice("Memory", 0);
});

document.getElementById("memory16").addEventListener("click", function () {
  costPrice("Memory", 180);
});

// ----------------------
document.getElementById("storage256").addEventListener("click", function () {
  costPrice("Storage", 0);
});
document.getElementById("storage512").addEventListener("click", function () {
  costPrice("Storage", 100);
});
document.getElementById("storage1t").addEventListener("click", function () {
  costPrice("Storage", 180);
});

// ----------------------

document.getElementById("deliveryFree").addEventListener("click", function () {
  costPrice("Delivery", 0);
});

document.getElementById("deliveryQuick").addEventListener("click", function () {
  costPrice("Delivery", 20);
});
