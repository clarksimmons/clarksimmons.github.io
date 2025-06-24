// Get references to HTML elements
const mainWireDiaInput = document.getElementById('mainWireDia');
const barbWireDiaInput = document.getElementById('barbWireDia');
const mainWirePriceInput = document.getElementById('mainWirePrice');
const barbWirePriceInput = document.getElementById('barbWirePrice');
const processingFeeInput = document.getElementById('processingFee');

const outputSpecSpan = document.getElementById('outputSpec');
const outputMetersPerKgSpan = document.getElementById('outputMetersPerKg');
const outputMetersPerTonSpan = document.getElementById('outputMetersPerTon');
const outputPricePerTonSpan = document.getElementById('outputPricePerTon');
const errorMessageDiv = document.getElementById('errorMessage');

// Function to perform calculations and update the UI
function calculateQuote() {
  // Get input values
  const mainDia = parseFloat(mainWireDiaInput.value);
  const barbDia = parseFloat(barbWireDiaInput.value);
  const mainPrice = parseFloat(mainWirePriceInput.value);
  const barbPrice = parseFloat(barbWirePriceInput.value);
  const processingFee = parseFloat(processingFeeInput.value); // Get fee

  // Reset outputs and hide error initially
  outputSpecSpan.textContent = '--';
  outputMetersPerKgSpan.textContent = '--';
  outputMetersPerTonSpan.textContent = '--';
  outputPricePerTonSpan.textContent = '--';
  errorMessageDiv.style.display = 'none';

  // Basic validation: check if diameters are valid numbers > 0
  if (isNaN(mainDia) || isNaN(barbDia) || mainDia <= 0 || barbDia <= 0) {
      // Don't proceed if diameters aren't valid
      return;
  }

  // Format the specification key (e.g., "2.5x2.0")
  const specKey = `${mainDia.toFixed(1)}x${barbDia.toFixed(1)}`;
  outputSpecSpan.textContent = specKey; // Show the spec being looked up

  // Look up the specification data object
  const specData = barbedWireData[specKey];

  // Check if spec data and necessary proportions exist
  if (specData && specData.metersPerKg !== undefined && specData.mainWeightPercent !== undefined && specData.barbWeightPercent !== undefined) {
      // --- Calculate Meters ---
      const metersPerKg = specData.metersPerKg;
      const metersPerTon = metersPerKg * 1000;

      outputMetersPerKgSpan.textContent = metersPerKg.toFixed(3);
      outputMetersPerTonSpan.textContent = metersPerTon.toFixed(0);

      // --- Calculate Price ---
      // Check if ALL price inputs are valid numbers >= 0
      if (!isNaN(mainPrice) && mainPrice >= 0 && !isNaN(barbPrice) && barbPrice >= 0 && !isNaN(processingFee) && processingFee >= 0) {
          const mainProportion = specData.mainWeightPercent;
          const barbProportion = specData.barbWeightPercent;

          // Calculate weighted average material cost
          const weightedAvgMaterialCost = (mainPrice * mainProportion) + (barbPrice * barbProportion);

          // Calculate final price using the new formula: (Weighted Material * 1.04) + Processing Fee
          const finalPricePerTon = (weightedAvgMaterialCost * 1.04) + processingFee;

          // Update price output
          outputPricePerTonSpan.textContent = finalPricePerTon.toFixed(2); // Format to 2 decimal places
           errorMessageDiv.style.display = 'none'; // Hide error if calculation is successful

      } else {
          // If spec is found but prices are invalid/missing, clear price output and show note
          outputPricePerTonSpan.textContent = '--';
           errorMessageDiv.textContent = '请输入有效的价格和加工费。'; // More specific error
           errorMessageDiv.style.display = 'block';
      }

  } else {
      // Specification not found in data.js
      errorMessageDiv.textContent = '在参考表中未找到此规格。'; // Reset error message
      errorMessageDiv.style.display = 'block'; // Show error message
      // Clear potentially outdated results
      outputMetersPerKgSpan.textContent = '--';
      outputMetersPerTonSpan.textContent = '--';
      outputPricePerTonSpan.textContent = '--';
  }
}

// Add event listeners to ALL input fields to trigger calculation on change
mainWireDiaInput.addEventListener('input', calculateQuote);
barbWireDiaInput.addEventListener('input', calculateQuote);
mainWirePriceInput.addEventListener('input', calculateQuote);
barbWirePriceInput.addEventListener('input', calculateQuote);
processingFeeInput.addEventListener('input', calculateQuote);

// Optional: Initial calculation on page load if you want to handle pre-filled values
// calculateQuote();