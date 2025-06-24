// Barbed Wire Data: Specification -> { metersPerKg, mainWeightPercent, barbWeightPercent }
// NOTE: Weight percentages are ESTIMATED and should be replaced with actual manufacturing data for accuracy.
const barbedWireData = {
    // Spec: { m/kg, main%, barb% }
    "3.0x3.0": { metersPerKg: 5.145, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "3.0x2.9": { metersPerKg: 5.294, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "3.0x2.8": { metersPerKg: 5.446, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "3.0x2.7": { metersPerKg: 5.601, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "3.0x2.6": { metersPerKg: 5.760, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "3.0x2.5": { metersPerKg: 5.921, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "3.0x2.4": { metersPerKg: 6.084, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "3.0x2.3": { metersPerKg: 6.249, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "3.0x2.2": { metersPerKg: 6.416, mainWeightPercent: 0.75, barbWeightPercent: 0.25 }, // Guess
    "2.9x2.9": { metersPerKg: 5.506, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.9x2.8": { metersPerKg: 5.671, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.9x2.7": { metersPerKg: 5.839, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.9x2.6": { metersPerKg: 6.012, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.9x2.5": { metersPerKg: 6.187, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.9x2.4": { metersPerKg: 6.366, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.9x2.3": { metersPerKg: 6.547, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.9x2.2": { metersPerKg: 6.731, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "2.8x2.8": { metersPerKg: 5.907, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.8x2.7": { metersPerKg: 6.090, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.8x2.6": { metersPerKg: 6.277, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.8x2.5": { metersPerKg: 6.469, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.8x2.4": { metersPerKg: 6.664, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.8x2.3": { metersPerKg: 6.863, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.8x2.2": { metersPerKg: 7.065, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.8x2.1": { metersPerKg: 7.270, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "2.8x2.0": { metersPerKg: 7.476, mainWeightPercent: 0.75, barbWeightPercent: 0.25 }, // Guess
    "2.7x2.7": { metersPerKg: 6.352, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.7x2.6": { metersPerKg: 6.556, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.7x2.5": { metersPerKg: 6.766, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.7x2.4": { metersPerKg: 6.980, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.7x2.3": { metersPerKg: 7.199, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.7x2.2": { metersPerKg: 7.421, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.7x2.1": { metersPerKg: 7.647, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.7x2.0": { metersPerKg: 7.875, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "2.6x2.6": { metersPerKg: 6.850, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.6x2.5": { metersPerKg: 7.079, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.6x2.4": { metersPerKg: 7.314, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.6x2.3": { metersPerKg: 7.554, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.6x2.2": { metersPerKg: 7.800, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.6x2.1": { metersPerKg: 8.049, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.6x2.0": { metersPerKg: 8.303, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.6x1.9": { metersPerKg: 8.560, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "2.6x1.8": { metersPerKg: 8.818, mainWeightPercent: 0.75, barbWeightPercent: 0.25 }, // Guess
    "2.5x2.5": { metersPerKg: 7.409, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.5x2.4": { metersPerKg: 7.667, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.5x2.3": { metersPerKg: 7.931, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.5x2.2": { metersPerKg: 8.202, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess based on calc
    "2.5x2.1": { metersPerKg: 8.479, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.5x2.0": { metersPerKg: 8.761, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Using our earlier estimate roughly
    "2.5x1.9": { metersPerKg: 9.047, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.5x1.8": { metersPerKg: 9.336, mainWeightPercent: 0.74, barbWeightPercent: 0.26 }, // Guess
    "2.4x2.4": { metersPerKg: 8.039, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.4x2.3": { metersPerKg: 8.331, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.4x2.2": { metersPerKg: 8.630, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.4x2.1": { metersPerKg: 8.937, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.4x2.0": { metersPerKg: 9.251, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.4x1.9": { metersPerKg: 9.570, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.4x1.8": { metersPerKg: 9.895, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.3x2.3": { metersPerKg: 8.754, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.3x2.2": { metersPerKg: 9.085, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.3x2.1": { metersPerKg: 9.426, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.3x2.0": { metersPerKg: 9.775, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.3x1.9": { metersPerKg: 10.133, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.3x1.8": { metersPerKg: 10.497, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.2x2.2": { metersPerKg: 9.568, mainWeightPercent: 0.67, barbWeightPercent: 0.33 }, // Guess
    "2.2x2.1": { metersPerKg: 9.946, mainWeightPercent: 0.68, barbWeightPercent: 0.32 }, // Guess
    "2.2x2.0": { metersPerKg: 10.336, mainWeightPercent: 0.69, barbWeightPercent: 0.31 }, // Guess
    "2.2x1.9": { metersPerKg: 10.737, mainWeightPercent: 0.70, barbWeightPercent: 0.30 }, // Guess
    "2.2x1.8": { metersPerKg: 11.147, mainWeightPercent: 0.71, barbWeightPercent: 0.29 }, // Guess
    "2.2x1.7": { metersPerKg: 11.564, mainWeightPercent: 0.72, barbWeightPercent: 0.28 }, // Guess
    "2.2x1.6": { metersPerKg: 11.988, mainWeightPercent: 0.73, barbWeightPercent: 0.27 }, // Guess
    "2.1x2.1": { metersPerKg: 10.500, mainWeightPercent: 0.67, barbWeightPercent: 0.33 },// Guess
    "2.1x2.0": { metersPerKg: 10.938, mainWeightPercent: 0.68, barbWeightPercent: 0.32 },// Guess
    "2.1x1.9": { metersPerKg: 11.386, mainWeightPercent: 0.69, barbWeightPercent: 0.31 },// Guess
    "2.1x1.8": { metersPerKg: 11.848, mainWeightPercent: 0.70, barbWeightPercent: 0.30 },// Guess
    "2.1x1.7": { metersPerKg: 12.320, mainWeightPercent: 0.71, barbWeightPercent: 0.29 },// Guess
    "2.1x1.6": { metersPerKg: 12.802, mainWeightPercent: 0.72, barbWeightPercent: 0.28 },// Guess
    "2.0x2.0": { metersPerKg: 11.577, mainWeightPercent: 0.67, barbWeightPercent: 0.33 },// Guess
    "2.0x1.9": { metersPerKg: 12.082, mainWeightPercent: 0.68, barbWeightPercent: 0.32 },// Guess
    "2.0x1.8": { metersPerKg: 12.603, mainWeightPercent: 0.69, barbWeightPercent: 0.31 },// Guess
    "2.0x1.7": { metersPerKg: 13.139, mainWeightPercent: 0.70, barbWeightPercent: 0.30 },// Guess
    "2.0x1.6": { metersPerKg: 13.689, mainWeightPercent: 0.71, barbWeightPercent: 0.29 },// Guess
    "1.9x1.9": { metersPerKg: 12.827, mainWeightPercent: 0.67, barbWeightPercent: 0.33 },// Guess
    "1.9x1.8": { metersPerKg: 13.417, mainWeightPercent: 0.68, barbWeightPercent: 0.32 },// Guess
    "1.9x1.7": { metersPerKg: 14.026, mainWeightPercent: 0.69, barbWeightPercent: 0.31 },// Guess
    "1.9x1.6": { metersPerKg: 14.654, mainWeightPercent: 0.70, barbWeightPercent: 0.30 },// Guess
    "1.8x1.8": { metersPerKg: 14.292, mainWeightPercent: 0.67, barbWeightPercent: 0.33 },// Guess
    "1.8x1.7": { metersPerKg: 14.986, mainWeightPercent: 0.68, barbWeightPercent: 0.32 },// Guess
    "1.8x1.6": { metersPerKg: 15.705, mainWeightPercent: 0.69, barbWeightPercent: 0.31 },// Guess
    "1.7x1.7": { metersPerKg: 16.023, mainWeightPercent: 0.67, barbWeightPercent: 0.33 },// Guess
    "1.7x1.6": { metersPerKg: 16.848, mainWeightPercent: 0.68, barbWeightPercent: 0.32 },// Guess
    "1.6x1.6": { metersPerKg: 18.089, mainWeightPercent: 0.67, barbWeightPercent: 0.33 } // Guess
};
