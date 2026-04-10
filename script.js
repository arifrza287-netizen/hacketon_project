function showGuide() {
    let type = document.getElementById("wasteType").value;
    let result = document.getElementById("result");

    if (type === "plastic") {
    result.innerHTML = "♻ Plastic: Recycle in blue bin.<br>💡 Reuse: Use as plant pot.";
    }

    else if (type === "metal") {
       result.innerHTML = "🔩 Metal: Scrap dealer.<br>💡 Reuse: Use for DIY items.";
    } 
    else if (type === "ewaste") {
        result.innerHTML = "⚠ E-Waste: Special centers.";
    } 
    else if (type === "organic") {
        result.innerHTML = "🌱 Compost it.<br>💡 Reuse: Make fertilizer.";
    } 
    else {
        result.innerHTML = "Please select a type.";
    }
}