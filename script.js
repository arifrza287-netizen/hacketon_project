let ecoScore = 0;
function showGuide() {
    let type = document.getElementById("wasteType").value;
    let result = document.getElementById("result");

   if (type === "plastic") {
    result.innerHTML = "♻️ Plastic: Recycle in blue bin.<br>💡 Reuse: Use as plant pot.";
    result.style.color = "green";

    ecoScore += 10;
    document.getElementById("score").innerText = "Eco Score: " + ecoScore + " 🌱";
    }

else if (type === "metal") {
    result.innerHTML = "🔩 Metal: Scrap dealer.<br>💡 Reuse: Use for DIY items.";
    result.style.color = "green";

    ecoScore += 8;
    document.getElementById("score").innerText = "Eco Score: " + ecoScore + " 🌱";
    }

else if (type === "ewaste") {
    result.innerHTML = "⚠️ E-Waste: Special centers.<br>💡 Handle carefully.";
    result.style.color = "red";

    ecoScore += 12;
    document.getElementById("score").innerText = "Eco Score: " + ecoScore + " 🌱";
    }

else if (type === "organic") {
    result.innerHTML = "🌱 Organic: Compost it.<br>💡 Reuse: Make fertilizer.";
    result.style.color = "green";

    ecoScore += 6;
    document.getElementById("score").innerText = "Eco Score: " + ecoScore + " 🌱";
     }

}