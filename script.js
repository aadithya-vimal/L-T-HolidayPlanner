// Sample destination data
const destinations = [
  { name: "Bali", interest: "beach", activities: ["Surfing", "Temple Tour", "Beach Yoga"] },
  { name: "Swiss Alps", interest: "mountains", activities: ["Skiing", "Hiking", "Cable Car Ride"] },
  { name: "Paris", interest: "city", activities: ["Eiffel Tower", "Louvre Museum", "Seine Cruise"] },
  { name: "Maldives", interest: "beach", activities: ["Snorkeling", "Spa Day", "Sunset Cruise"] },
  { name: "Rocky Mountains", interest: "mountains", activities: ["Camping", "Wildlife Safari", "Mountain Biking"] },
  { name: "Tokyo", interest: "city", activities: ["Shibuya Crossing", "Sushi Making", "Robot Restaurant"] }
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
