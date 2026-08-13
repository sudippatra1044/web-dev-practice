function normalizeUnits(manifest) {
  const newManifest = {...manifest};
  if (manifest.unit === "lb") {
    newManifest.weight = manifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const error = {};
  const hasContainerId = Object.hasOwn(manifest, "containerId");
  const hasDest = Object.hasOwn(manifest, "destination");
  const hasWeight = Object.hasOwn(manifest, "weight");
  const hasUnit = Object.hasOwn(manifest, "unit");
  const hasHazmat = Object.hasOwn(manifest, "hazmat");

  const isValid =
    hasContainerId &&
    hasDest &&
    hasWeight &&
    hasUnit &&
    hasHazmat &&
    Number.isInteger(manifest.containerId) &&
    manifest.containerId > 0 &&                      
    typeof manifest.destination === "string" &&      
    manifest.destination.trim().length > 0 &&
    Number.isFinite(manifest.weight) &&
    manifest.weight > 0 &&
    (manifest.unit === "kg" || manifest.unit === "lb") &&
    (manifest.hazmat === true || manifest.hazmat === false);

  if (isValid) return {};

  if (!hasContainerId) {
    error.containerId = "Missing";
  } else if (!(Number.isInteger(manifest.containerId) && manifest.containerId > 0)) {
    error.containerId = "Invalid";
  }

  if (!hasDest) {
    error.destination = "Missing";
  } else if (!(typeof manifest.destination === "string" && manifest.destination.trim().length > 0)) {
    error.destination = "Invalid";
  }

  if (!hasWeight) {
    error.weight = "Missing";
  } else if (!(Number.isFinite(manifest.weight) && manifest.weight > 0)) {
    error.weight = "Invalid";
  }

  if (!hasUnit) {
    error.unit = "Missing";
  } else if (!(manifest.unit === "kg" || manifest.unit === "lb")) {
    error.unit = "Invalid";
  }

  if (!hasHazmat) {
    error.hazmat = "Missing";
  } else if (!(manifest.hazmat === true || manifest.hazmat === false)) {
    error.hazmat = "Invalid";
  }

  return error;
}

function processManifest(manifest) {
  const validity = validateManifest(manifest);
  if (Object.keys(validity).length === 0) {
    const kgWeightManifest = normalizeUnits(manifest);
    const weightInKg = kgWeightManifest.weight;
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${weightInKg} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validity);
  }
}

const obj = { containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}


console.log(normalizeUnits(obj));
console.log("");
console.log(validateManifest(obj))
console.log("");
processManifest(obj);