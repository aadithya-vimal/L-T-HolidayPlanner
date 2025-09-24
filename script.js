// Sample destination data
const destinations = [
  { name: "Bali", interest: "beach", activities: ["Surfing", "Temple Tour", "Beach Yoga"] },
  { name: "Swiss Alps", interest: "mountains", activities: ["Skiing", "Hiking", "Cable Car Ride"] },
  { name: "Paris", interest: "city", activities: ["Eiffel Tower", "Louvre Museum", "Seine Cruise"] },
  { name: "Maldives", interest: "beach", activities: ["Snorkeling", "Spa Day", "Sunset Cruise"] },
  { name: "Rocky Mountains", interest: "mountains", activities: ["Camping", "Wildlife Safari", "Mountain Biking"] },
  { name: "Tokyo", interest: "city", activities: ["Shibuya Crossing", "Sushi Making", "Robot Restaurant"] },
  { name: "New York", interest: "city", activities: ["Central Park", "Broadway Show", "Statue of Liberty"] },
  { name: "Sydney", interest: "beach", activities: ["Opera House", "Bondi Beach", "Harbour Bridge"] },
  { name: "Cape Town", interest: "mountains", activities: ["Table Mountain", "Robben Island", "Winelands Tour"] },
  { name: "Santorini", interest: "beach", activities: ["Sunset View", "Wine Tasting", "Oia Village"] },
  { name: "London", interest: "city", activities: ["Big Ben", "London Eye", "British Museum"] },
  { name: "Banff", interest: "mountains", activities: ["Lake Louise", "Hiking", "Hot Springs"] },
  { name: "Barcelona", interest: "city", activities: ["Sagrada Familia", "Beach Day", "Tapas Tour"] },
  { name: "Dubai", interest: "city", activities: ["Burj Khalifa", "Desert Safari", "Mall Shopping"] },
  { name: "Rio de Janeiro", interest: "beach", activities: ["Copacabana", "Christ the Redeemer", "Samba Night"] },
  { name: "Queenstown", interest: "mountains", activities: ["Bungee Jumping", "Lake Wakatipu", "Skiing"] },
  { name: "Rome", interest: "city", activities: ["Colosseum", "Vatican Tour", "Gelato Tasting"] },
  { name: "Phuket", interest: "beach", activities: ["Island Hopping", "Snorkeling", "Night Market"] },
  { name: "Aspen", interest: "mountains", activities: ["Skiing", "Mountain Biking", "Music Festival"] },
  { name: "Los Angeles", interest: "city", activities: ["Hollywood", "Venice Beach", "Theme Parks"] },
  { name: "Venice", interest: "city", activities: ["Gondola Ride", "St. Mark's Square", "Murano Glass"] },
  { name: "Maui", interest: "beach", activities: ["Road to Hana", "Snorkeling", "Luau Night"] },
  { name: "Chamonix", interest: "mountains", activities: ["Mont Blanc", "Cable Car", "Alpine Skiing"] },
  { name: "Istanbul", interest: "city", activities: ["Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"] },
  { name: "Santander", interest: "beach", activities: ["Surfing", "Beach Walks", "Seafood Tour"] },
  { name: "Cusco", interest: "mountains", activities: ["Machu Picchu", "Sacred Valley", "Inca Trail"] },
  { name: "Singapore", interest: "city", activities: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa"] },
  { name: "Nice", interest: "beach", activities: ["Promenade des Anglais", "Old Town", "Beach Clubs"] },
  { name: "Zermatt", interest: "mountains", activities: ["Matterhorn", "Skiing", "Gornergrat Bahn"] },
  { name: "Berlin", interest: "city", activities: ["Brandenburg Gate", "Museum Island", "Berlin Wall"] },
  { name: "Miami", interest: "beach", activities: ["South Beach", "Art Deco Tour", "Nightlife"] },
  { name: "Innsbruck", interest: "mountains", activities: ["Nordkette", "Old Town", "Ski Jump"] },
  { name: "Prague", interest: "city", activities: ["Charles Bridge", "Castle Tour", "Beer Tasting"] },
  { name: "Goa", interest: "beach", activities: ["Beach Party", "Spice Farm", "Water Sports"] },
  { name: "Banff", interest: "mountains", activities: ["Lake Louise", "Hiking", "Hot Springs"] },
  { name: "Budapest", interest: "city", activities: ["Thermal Baths", "Castle Hill", "Danube Cruise"] },
  { name: "Gold Coast", interest: "beach", activities: ["Surfing", "Theme Parks", "SkyPoint"] },
  { name: "Patagonia", interest: "mountains", activities: ["Glacier Trek", "Wildlife", "Hiking"] },
  { name: "Madrid", interest: "city", activities: ["Royal Palace", "Retiro Park", "Tapas Night"] },
  { name: "Mykonos", interest: "beach", activities: ["Windmills", "Beach Clubs", "Sunset Bar"] },
  { name: "Yosemite", interest: "mountains", activities: ["Half Dome", "Waterfalls", "Camping"] },
  { name: "Florence", interest: "city", activities: ["Uffizi Gallery", "Duomo", "Tuscan Food"] },
  { name: "Cancun", interest: "beach", activities: ["Mayan Ruins", "Snorkeling", "Nightlife"] },
  { name: "Interlaken", interest: "mountains", activities: ["Paragliding", "Lake Brienz", "Hiking"] },
  { name: "Seoul", interest: "city", activities: ["Gyeongbokgung", "Street Food", "N Seoul Tower"] },
  { name: "Tahiti", interest: "beach", activities: ["Overwater Bungalows", "Snorkeling", "Island Tour"] },
  { name: "Whistler", interest: "mountains", activities: ["Skiing", "Mountain Biking", "Village Stroll"] },
  { name: "Vienna", interest: "city", activities: ["Opera House", "Schönbrunn Palace", "Coffee Houses"] },
  { name: "Boracay", interest: "beach", activities: ["White Beach", "Island Hopping", "Kite Surfing"] },
  { name: "Machu Picchu", interest: "mountains", activities: ["Ruins Tour", "Sun Gate Hike", "Train Ride"] },
  { name: "Lisbon", interest: "city", activities: ["Tram 28", "Belém Tower", "Fado Night"] },
  { name: "Seychelles", interest: "beach", activities: ["Snorkeling", "Island Hopping", "Creole Cuisine"] },
  { name: "Lake District", interest: "mountains", activities: ["Lake Cruise", "Hill Walks", "Poetry Trail"] },
  { name: "San Francisco", interest: "city", activities: ["Golden Gate", "Alcatraz", "Cable Car"] },
  { name: "Hawaii", interest: "beach", activities: ["Volcano Tour", "Surfing", "Luau"] },
  { name: "Kilimanjaro", interest: "mountains", activities: ["Summit Trek", "Safari", "Cultural Tour"] },
  { name: "Edinburgh", interest: "city", activities: ["Castle Tour", "Royal Mile", "Whisky Tasting"] },
];

// DOM Elements
const destInput = document.getElementById('destInput');
const interestFilter = document.getElementById('interestFilter');
const searchBtn = document.getElementById('searchBtn');
const destResults = document.getElementById('destResults');
const activityCards = document.getElementById('activityCards');
const itineraryList = document.getElementById('itineraryList');
const budgetItems = document.getElementById('budgetItems');
const totalAmount = document.getElementById('totalAmount');
const resetBtn = document.getElementById('resetBtn');
const hamburger = document.getElementById('hamburger');
const downloadBtn = document.getElementById('downloadBtn');

// State
let selectedDestination = null;
let selectedActivities = [];
let budget = {
  accommodation: 0,
  transport: 0,
  activities: 0
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations(destinations);
  setupEventListeners();
  
  // Handle hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
    });
  }
  
  // Download button
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Holiday Planner app would download here!');
    });
  }
});

// Event Listeners
function setupEventListeners() {
  searchBtn.addEventListener('click', handleSearch);
  resetBtn.addEventListener('click', resetPlan);
  
  // Accommodation/Transport selection
  document.querySelectorAll('input[name="accommodation"]').forEach(radio => {
    radio.addEventListener('change', updateBudget);
  });
  
  document.querySelectorAll('input[name="transport"]').forEach(radio => {
    radio.addEventListener('change', updateBudget);
  });
}

// Search & Filter
function handleSearch() {
  const name = destInput.value.toLowerCase().trim();
  const interest = interestFilter.value;
  
  let filtered = destinations;
  if (name) {
    filtered = filtered.filter(d => d.name.toLowerCase().includes(name));
  }
  if (interest) {
    filtered = filtered.filter(d => d.interest === interest);
  }
  
  renderDestinations(filtered);
}

// Render Destinations
function renderDestinations(dests) {
  if (dests.length === 0) {
    destResults.innerHTML = '<div class="alert alert-warning">No destinations found</div>';
    return;
  }
  
  destResults.innerHTML = `
    <div class="row mt-3">
      ${dests.map(d => `
        <div class="col-md-4 mb-3">
          <div class="card bg-gradient-card h-100">
            <div class="card-body">
              <h5 class="card-title text-white">${d.name}</h5>
              <p class="card-text text-success">${d.interest}</p>
              <button class="btn btn-sm btn-outline-light select-dest" data-name="${d.name}" data-interest="${d.interest}">
                Select
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Add select event listeners
  document.querySelectorAll('.select-dest').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.target.dataset.name;
      const interest = e.target.dataset.interest;
      selectedDestination = { name, interest };
      renderActivities(destinations.find(d => d.name === name).activities);
      destResults.innerHTML = `<div class="alert alert-success">Selected: ${name}</div>`;
    });
  });
}

// Render Activities
function renderActivities(activities) {
  activityCards.innerHTML = activities.map((act, i) => `
    <div class="col-md-4">
      <div class="activity-card" data-activity="${act}" data-index="${i}">
        <h5>${act}</h5>
        <p class="text-muted">Activity ${i+1}</p>
      </div>
    </div>
  `).join('');
  
  // Activity selection
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
      const activity = card.dataset.activity;
      const index = parseInt(card.dataset.index);
      
      if (selectedActivities.includes(activity)) {
        selectedActivities = selectedActivities.filter(a => a !== activity);
        card.classList.remove('selected');
      } else {
        selectedActivities.push(activity);
        card.classList.add('selected');
      }
      
      updateItinerary();
      updateBudget();
    });
  });
}
