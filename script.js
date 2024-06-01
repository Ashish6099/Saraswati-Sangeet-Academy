

//toggle menu function
function toggleMenu(navbar) {
  var menu = document.getElementById(`menu-${navbar}`);
  menu.classList.toggle("open");
  var closeButton = menu.querySelector(".close-menu");
  closeButton.style.display = menu.classList.contains("open") ? "block" : "none";
}
function search(sear) {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const links = document.querySelectorAll('.navbar1 .menu a, .navbar2 a');
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  let matchFound = false;

  for (let i = 0; i < links.length; i++) {
    const linkText = links[i].textContent.toLowerCase();
    if (linkText.includes(searchInput)) {
      const resultLink = document.createElement('a');
      resultLink.href = links[i].href;
      resultLink.textContent = links[i].textContent;
      searchResults.appendChild(resultLink);
      matchFound = true;
    }
  }

  if (!matchFound) {
    searchResults.textContent = 'No matches found.';
  }
}
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filteredContent = searchContent.filter(item =>
    item.toLowerCase().includes(searchTerm)
  );

  searchResults.innerHTML = '';

  if (filteredContent.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>';
  } else {
    filteredContent.forEach(item => {
      const resultItem = document.createElement('div');
      resultItem.textContent = item;
      searchResults.appendChild(resultItem);
    });
  }
});





//For Animated gallerey function 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Function to automatically change slide every 3 seconds
function autoSlide() {
  plusSlides(1); // Increment slideIndex by 1
}

// Call autoSlide function using setInterval
setInterval(autoSlide, 3000);

// Sample feedback data
const feedbackData = [
  { image: "feedback1.jpg", text: "Great experience! Learned a lot." },
  { image: "feedback2.jpg", text: "Highly recommend these courses." },
  { image: "feedback3.jpg", text: "Amazing instructors and atmosphere." }
];

// // calender

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysContainer = document.getElementById("daysContainer");
const monthHeader = document.getElementById("monthHeader");
const popup = document.getElementById("eventPopup");
const popupDate = document.getElementById("popupDate");
const eventDetails = document.getElementById("eventDetails");
const monthDisplay = document.getElementById("monthDisplay");
const yearDisplay = document.getElementById("yearDisplay");
const monthDropdown = document.getElementById("monthDropdown");
const yearDropdown = document.getElementById("yearDropdown");

let currentDate = new Date();

function renderCalendar() {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  monthDisplay.textContent = monthNames[currentMonth];
  yearDisplay.textContent = currentYear;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  daysContainer.innerHTML = "";

  // Add day names
  daysOfWeek.forEach(day => {
    const dayName = document.createElement("div");
    dayName.classList.add("day-name");
    dayName.textContent = day;
    daysContainer.appendChild(dayName);
  });

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("day");
    daysContainer.appendChild(emptyCell);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = i;

    // Highlight current date
    const currentDateObj = new Date();
    if (currentDateObj.getDate() === i && currentDateObj.getMonth() === currentMonth && currentDateObj.getFullYear() === currentYear) {
      dayCell.classList.add("current-date");
    }
    dayCell.addEventListener("click", () => showEventPopup(i, currentMonth, currentYear));
    daysContainer.appendChild(dayCell);
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function showMonthDropdown() {
  monthDropdown.innerHTML = "";
  monthDropdown.style.display = "block";
  monthNames.forEach((name, index) => {
    const option = document.createElement("span");
    option.textContent = name;
    option.addEventListener("click", () => {
      currentDate.setMonth(index);
      renderCalendar();
      monthDropdown.style.display = "none";
    });
    monthDropdown.appendChild(option);
  });
}

function showYearDropdown() {
  yearDropdown.innerHTML = "";
  yearDropdown.style.display = "block";
  for (let year = currentDate.getFullYear() - 5; year <= currentDate.getFullYear() + 5; year++) {
    const option = document.createElement("span");
    option.textContent = year;
    option.addEventListener("click", () => {
      currentDate.setFullYear(year);
      renderCalendar();
      yearDropdown.style.display = "none";
    });
    yearDropdown.appendChild(option);
  }
}

function showEventPopup(day, month, year) {
  popupDate.textContent = `${monthNames[month]} ${day}, ${year}`;
  // Example: Fetch events for this date and populate eventDetails
  // For demo purposes, I'm just showing a placeholder message
  eventDetails.innerHTML = "<p>No events for this date.</p>";
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

// Initial rendering
renderCalendar();

// Sample event data for demonstration
const eventData = [
  { date: "2024-03-24", title: "Event 1", description: "Description for Event 1" },
  { date: "2024-03-25", title: "Event 2", description: "Description for Event 2" },
  { date: "2024-03-28", title: "Event 3", description: "Description for Event 3" }
];

function showEventPopup(day, month, year) {
  const dateStr = `${year}-${month + 1}-${day}`;
  popupDate.textContent = `${monthNames[month]} ${day}, ${year}`;

  const eventsForDate = eventData.filter(event => event.date === dateStr);

  if (eventsForDate.length > 0) {
    eventDetails.innerHTML = "";
    eventsForDate.forEach(event => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.innerHTML = `
        <h4>${event.title}</h4>
        <p>${event.description}</p>
      `;
      eventDetails.appendChild(eventElement);
    });
  } else {
    eventDetails.innerHTML = "<p>No events for this date.</p>";
  }

  popup.style.display = "block";
}

// Close dropdowns when clicking outside
window.addEventListener("click", function (event) {
  if (!event.target.matches("#monthDisplay") && !event.target.matches("#yearDisplay")) {
    monthDropdown.style.display = "none";
    yearDropdown.style.display = "none";
  }
});






// Function to dynamically add feedback
function addFeedback() {
  const feedbackCarousel = document.getElementById("feedback-carousel");
  feedbackData.forEach(item => {
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "Student feedback";
    feedbackItem.appendChild(image);

    const text = document.createElement("p");
    text.textContent = item.text;
    feedbackItem.appendChild(text);

    feedbackCarousel.appendChild(feedbackItem);
  });
}

// Call the function to add feedback
addFeedback();

// // signup js code start here


// Function to check if the user is logged in (example)
function checkLoginStatus() {
  // You would typically have server-side logic here to determine the user's authentication status
  // For the sake of example, let's assume isLoggedIn is set based on server-side authentication
  var isLoggedIn = true; // Set this based on server-side authentication

  return isLoggedIn;
}

// Function to toggle visibility of student image based on user login status
function toggleStudentImage() {
  var studentImageContainer = document.getElementById("studentImageContainer");
  studentImageContainer.style.display = checkLoginStatus() ? "block" : "none";
}

// Call the function initially when the page loads
toggleStudentImage();


// navbar4
// Get all the navigation links

function showContent(contentId) {
  var contentContainer = document.getElementById('content-container');
  var contents = contentContainer.getElementsByClassName('content');

  // Hide all content divs
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  var targetContent = document.getElementById(contentId);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}





