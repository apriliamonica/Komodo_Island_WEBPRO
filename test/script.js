// Add event listener to navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target.textContent.trim(); // Menggunakan trim untuk menghapus spasi yang tidak diinginkan
    console.log(`You clicked on ${target}`); // Menggunakan backticks untuk template string

    // Switch between sections
    switch (target) {
      case "EXPLORE":
        document.querySelector(".destinations").style.display = "block";
        document.querySelector(".journal").style.display = "none";
        break;
      case "JOURNAL":
        document.querySelector(".destinations").style.display = "none";
        document.querySelector(".journal").style.display = "block";
        break;
      case "SEARCH":
        // Add search functionality here
        break;
      case "ABOUT":
        // Add about page functionality here
        break;
      default:
        console.log("No matching section found"); // Menambahkan handling untuk kasus default
    }
  });
});

// Add functionality to load journal entries dynamically
const journalEntries = [
  {
    title: "An Unforgettable",
    content:
      "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
    date: "May 30, 2017",
  },
  {
    title: "Symphonies in Steel",
    content:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
    date: "May 28, 2017",
  },
];

// Create a function to generate journal entries
function generateJournalEntries() {
  const journalList = document.querySelector(".journal ul");
  journalList.innerHTML = "";

  journalEntries.forEach((entry) => {
    const journalItem = document.createElement("li");
    journalItem.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
            <span>${entry.date}</span>
        `;
    journalList.appendChild(journalItem);
  });
}

// Call the function to generate journal entries
generateJournalEntries();
