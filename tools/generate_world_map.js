// Regenerates Brand_Assests/site/world-map-cities.svg from real country
// geometry (world-atlas / Natural Earth) and real city coordinates, using
// d3-geo's equirectangular projection — so every dot is computed from an
// actual lat/lon, not placed by eye on a flat image.
//
// To update: add/edit entries in CITIES below (name, country, lat, lon),
// then run: node tools/generate_world_map.js

const { geoEquirectangular, geoPath } = require('d3-geo');
const { feature } = require('topojson-client');
const world = require('world-atlas/countries-110m.json');
const fs = require('fs');
const nodePath = require('path');

const CITIES = [
  // North America
  { name: 'Vancouver', country: 'Canada', lat: 49.2827, lon: -123.1207 },
  { name: 'Silicon Valley', country: 'US', lat: 37.3875, lon: -122.0575 },
  { name: 'San Francisco', country: 'US', lat: 37.7749, lon: -122.4194 },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lon: -79.3832 },
  { name: 'Boston', country: 'US', lat: 42.3601, lon: -71.0589 },
  { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
  { name: 'Philadelphia', country: 'US', lat: 39.9526, lon: -75.1652 },
  // UK & Ireland
  { name: 'Dublin', country: 'Ireland', lat: 53.3498, lon: -6.2603 },
  { name: 'Manchester', country: 'UK', lat: 53.4808, lon: -2.2426 },
  { name: 'Bristol', country: 'UK', lat: 51.4545, lon: -2.5879 },
  { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
  // Nordics
  { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lon: 12.5683 },
  { name: 'Aarhus', country: 'Denmark', lat: 56.1629, lon: 10.2039 },
  { name: 'Malmö', country: 'Sweden', lat: 55.6050, lon: 13.0038 },
  { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lon: 18.0686 },
  { name: 'Oslo', country: 'Norway', lat: 59.9139, lon: 10.7522 },
  { name: 'Helsinki', country: 'Finland', lat: 60.1699, lon: 24.9384 },
  // Western & Central Europe
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lon: 4.9041 },
  { name: 'Brussels', country: 'Belgium', lat: 50.8503, lon: 4.3517 },
  { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522 },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050 },
  { name: 'Munich', country: 'Germany', lat: 48.1351, lon: 11.5820 },
  { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lon: 8.5417 },
  { name: 'Vienna', country: 'Austria', lat: 48.2082, lon: 16.3738 },
  { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lon: 14.4378 },
  { name: 'Brno', country: 'Czech Republic', lat: 49.1951, lon: 16.6068 },
  { name: 'Budapest', country: 'Hungary', lat: 47.4979, lon: 19.0402 },
  // Southern & Southeastern Europe
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lon: -3.7038 },
  { name: 'Barcelona', country: 'Spain', lat: 41.3851, lon: 2.1734 },
  { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lon: -9.1393 },
  { name: 'Milan', country: 'Italy', lat: 45.4642, lon: 9.1900 },
  { name: 'Bologna', country: 'Italy', lat: 44.4949, lon: 11.3426 },
  { name: 'Split', country: 'Croatia', lat: 43.5081, lon: 16.4402 },
  { name: 'Belgrade', country: 'Serbia', lat: 44.7866, lon: 20.4489 },
  { name: 'Bucharest', country: 'Romania', lat: 44.4268, lon: 26.1025 },
  { name: 'Athens', country: 'Greece', lat: 37.9838, lon: 23.7275 },
  // Middle East & Asia
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708 },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lon: 72.8777 },
];

const WIDTH = 1800;
const HEIGHT = 900;

const countries = feature(world, world.objects.countries);
const projection = geoEquirectangular().fitSize([WIDTH, HEIGHT], { type: 'Sphere' });
const pathGen = geoPath(projection);

// Antarctica (id "010") is excluded from rendering — not from the projection's
// scale/translate — so the map keeps a true full -90..90 world framing but
// matches the site's existing map aesthetic of showing only the inhabited world.
const countryPaths = countries.features
  .filter(f => f.id !== '010')
  .map(f => `<path d="${pathGen(f)}" class="landxx"/>`)
  .join('');

const dots = CITIES.map(c => {
  const [x, y] = projection([c.lon, c.lat]);
  return `<g><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" class="citydot"><title>${c.name}, ${c.country}</title></circle></g>`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="Map showing ${CITIES.length} cities where Steen Rasmussen has spoken">
<style>
  .bg{fill:#000}
  .landxx{fill:rgba(255,255,255,.16);stroke:rgba(255,255,255,.22);stroke-width:1}
  .citydot{fill:#FF453A;stroke:#000;stroke-width:1.5}
</style>
<rect class="bg" x="0" y="0" width="${WIDTH}" height="${HEIGHT}"/>
${countryPaths}
${dots}
</svg>`;

const outPath = nodePath.join(__dirname, '..', 'Brand_Assests', 'site', 'world-map-cities.svg');
fs.writeFileSync(outPath, svg);
console.log('Wrote', outPath, 'with', CITIES.length, 'cities');
