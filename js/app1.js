function tableTotalCalculation(
  ramCost,
  storageCost,
  deliveryCost,
  isDiscounted
) {
  document.getElementById("extraMemoryCost").innerText = ramCost;
  //   var tableTotal =
  //     1299 +
  //     parseInt(document.getElementById("extraMemoryCost").innerText) +
  //     parseInt(document.getElementById("extraStorageCost").innerText) +
  //     parseInt(document.getElementById("extraDeliveryCost").innerText);

  //   document.getElementById("table-total").innerText = tableTotal;
  //   document.getElementById("grand-total").innerText = tableTotal;
}

function costPrice(property, specification) {
  if (property == "Memory" || property == "Storage") {
    if (specification == 0) {
      document.getElementById("extra" + property + "Cost").innerText = 0;
    } else if (specification == 100) {
      document.getElementById("extraStorageCost").innerText = 100;
    } else {
      document.getElementById("extra" + property + "Cost").innerText = 180;
    }
  }
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


// document.getElementById("storage256").addEventListener("click", function () {
//   storageCostPrice(256);
//   tableTotalCalculation();
// });
// document.getElementById("storage512").addEventListener("click", function () {
//   storageCostPrice(512);
//   tableTotalCalculation();
// });
// document.getElementById("storage1t").addEventListener("click", function () {
//   storageCostPrice(1);
//   tableTotalCalculation();
// });

// // -------------------------------
// function deliveryCostPrice(deliveryType) {
//   if (deliveryType == "free") {
//     document.getElementById("extraDeliveryCost").innerText = 0;
//   }
//   if (deliveryType == "quick") {
//     document.getElementById("extraDeliveryCost").innerText = 20;
//   }
// }

// document.getElementById("deliveryFree").addEventListener("click", function () {
//   deliveryCostPrice("free");
//   tableTotalCalculation();
// });

// document.getElementById("deliveryQuick").addEventListener("click", function () {
//   deliveryCostPrice("quick");
//   tableTotalCalculation();
// });

// // ------------------ Coupon Apply -------------

// function couponApplied() {
//   if (document.getElementById("promoCodeInput").value == "stevekaku") {
//     document.getElementById("grand-total").innerText =
//       parseInt(document.getElementById("table-total").innerText) * 0.8;
//   }
//   var emptyString = "";
//   document.getElementById("promoCodeInput").value = emptyString;
// }
