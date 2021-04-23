export const displayNames: Record<string, any> = {
  ac_capacity: "AC Capacity",
  dc_ac_ratio: "DC/AC Ratio",
  albedo: "Albedo",
  tilt: "Tilt",
  azimuth: "Azmuth",
  axis_tilt: "Axis Tilt",
  axis_azimuth: "Axis Azimuth",
  gcr: "Ground Coverage Ratio",
  backtracking: "Backtracking",
};

export function getDisplayName(machineName: string): string {
  if (!(machineName in displayNames)) {
    return machineName;
  } else {
    return displayNames[machineName];
  }
}