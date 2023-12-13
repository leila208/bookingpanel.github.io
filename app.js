

const check = {
  0: "name",
  1: "service",
  2: "date",
};
const time = [
  {
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    start_time: "09:30",
    end_time: "10:00",
  },
  ,
  {
    start_time: "10:00",
    end_time: "10:30",
  },
];
const pages = [".staffPage", ".servicePage", ".datePage", ".confirmationPage"];
const sidebarPages = ["#page1", "#page2", "#page3", "#page4"];
let currentPageIndex = 0;
const staff = [
  {
    id: 1,
    name: "Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "",
  },
  {
    id: 3,
    name: "July",
    email: "mariajuly@egmail.com",
    image: "",
  },
];
const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];
let selecteds = {
  staff_id: "",
  service_id:"",
  name: "",
  service: "",
  date: "",
  customer: {
    name: "",
    surname: "",
    email: "",
    phone: "",
  },
};
time.forEach((entry) => {
  const hourBox = document.createElement("div");
  hourBox.classList.add("hourBox");

  const startTime = document.createElement("p");
  startTime.textContent = entry.start_time;

  const endTime = document.createElement("p");
  endTime.textContent = entry.end_time;

  hourBox.appendChild(startTime);
  hourBox.appendChild(endTime);
  hourBox.addEventListener("click", () => {
    const selectedBoxes = document.querySelectorAll(".hourBox.bggreen");
    selectedBoxes.forEach((box) => {
      box.classList.remove("bggreen");
    });

    hourBox.classList.add("bggreen"); // Sınıfı ekleyerek seçili olarak işaretlemek
  });

  document.querySelector(".hourBoxes").appendChild(hourBox);
});
staff.forEach((person) => {
  const doctorDiv = document.createElement("div");
  doctorDiv.className = "doctor";

  const doctorImageDiv = document.createElement("div");
  doctorImageDiv.className = "doctorImage";
  const doctorImage = document.createElement("img");
  doctorImage.src =
    person.image ||
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000";
  doctorImageDiv.appendChild(doctorImage);

  const doctorContentDiv = document.createElement("div");
  doctorContentDiv.className = "doctorContent";
  const doctorName = document.createElement("p");
  doctorName.className = "doctorName";
  doctorName.textContent = person.name;
  const email = document.createElement("p");
  email.textContent = person.email;
  doctorContentDiv.appendChild(doctorName);
  doctorContentDiv.appendChild(email);

  doctorDiv.appendChild(doctorImageDiv);
  doctorDiv.appendChild(doctorContentDiv);
  doctorDiv.addEventListener("click", () => {
    const selectedStaff = person.name;
    const selectedStaffId = person.id;
     selecteds.staff_id = selectedStaffId;
    selecteds.name = selectedStaff;

    if (currentPageIndex < pages.length - 1) {
      document.querySelector(pages[currentPageIndex]).style.display = "none";
      currentPageIndex++;
      document.querySelector(pages[currentPageIndex]).style.display = "block";
      updatePageDisplay();
    }
    document.querySelectorAll(".doctor").forEach((a) => {
      a.classList.remove("green");
    });
    doctorDiv.classList.add("green");
  });

  document.querySelector(".doctors").appendChild(doctorDiv);
});
services.forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.classList.add("service");

  const serviceLeftDiv = document.createElement("div");
  serviceLeftDiv.classList.add("serviceLeft");

  const serviceImageDiv = document.createElement("div");
  serviceImageDiv.classList.add("serviceImage");
  const serviceImage = document.createElement("img");
  serviceImage.src =
    service.image ||
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000";
  serviceImageDiv.appendChild(serviceImage);

  const serviceContentDiv = document.createElement("div");
  serviceContentDiv.classList.add("serviceContent");
  const serviceName = document.createElement("p");
  serviceName.textContent = service.name;
  const serviceDuration = document.createElement("p");
  serviceDuration.textContent = service.duration;
  serviceContentDiv.appendChild(serviceName);

  serviceContentDiv.appendChild(serviceDuration);
  serviceLeftDiv.appendChild(serviceImageDiv);
  serviceLeftDiv.appendChild(serviceContentDiv);

  const serviceRightDiv = document.createElement("div");
  serviceRightDiv.classList.add("serviceRight");
  const servicePrice = document.createElement("p");
  servicePrice.textContent = service.price + "$";
  serviceRightDiv.appendChild(servicePrice);

  serviceDiv.appendChild(serviceLeftDiv);
  serviceDiv.appendChild(serviceRightDiv);
  serviceDiv.addEventListener("click", () => {
    const selectedService = service.name;
    const selectedServiceId = service.id;
     selecteds.service_id = selectedServiceId;
    selecteds.service = selectedService;

    if (currentPageIndex < pages.length - 1) {
      document.querySelector(pages[currentPageIndex]).style.display = "none";
      currentPageIndex++;
      document.querySelector(pages[currentPageIndex]).style.display = "block";
      updatePageDisplay();
    }
    document.querySelectorAll(".service").forEach((a) => {
      a.classList.remove("green");
    });
    serviceDiv.classList.add("green");
  });

  document.querySelector(".services").appendChild(serviceDiv);
});
const dateArray = ["2023-12-13", "2023-12-12", "2023-12-05"];
const currentDate = document.querySelector(".currentDate");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let selectedDate = null;
const renderCalendar = () => {
  let firstDayofaMonth = new Date(currYear, currMonth, 1).getDay(); //ayin ilk  gunu
  lastDateofaMonth = new Date(currYear, currMonth + 1, 0).getDate(); //ayin sonuncu date
  lastDayofMonth = new Date(currYear, currMonth, lastDateofaMonth).getDay(); // ayin sonuncu  gunu
  lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //kecen ayin sonuncu  gunu

  let liTag = "";
  for (let i = firstDayofaMonth; i > 0; i--) {
    liTag += ` <li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofaMonth; i++) {
    const currentDateStr = `${currYear}-${(currMonth + 1)
      .toString()
      .padStart(2, "0")}-${i.toString().padStart(2, "0")}`;

    const isSelectable = dateArray.includes(currentDateStr);

    const classList = ["calendarDate", isSelectable ? "selectable" : "inactive"]
      .join(" ")
      .trim();
    liTag += `<li class="${classList}">
                ${
                  isSelectable
                    ? `<span class="selectable-date" data-date="${currentDateStr}">${i}</span>`
                    : i
                }
              </li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += ` <li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
  const selectableDates = document.querySelectorAll(".selectable-date");
  selectableDates.forEach((dateElement) => {
    dateElement.addEventListener("click", handleDateClick);
  });
};
const handleDateClick = (event) => {
  const selectedDate = event.target.getAttribute("data-date");

  const selectedDateText = document.getElementById("selectedDateText");
  selectedDateText.textContent = "Selected date: " + selectedDate;
  document.querySelectorAll(".selectable-date").forEach((a) => {
    a.classList.remove("selected");
  })

  event.target.classList.add("selected");
  const selectedDateP = selectedDate;

  selecteds.date = selectedDateP;
};

renderCalendar();
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon.id);
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    console.log(currMonth);
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});

const form = document.getElementById("myForm");
const confirmBtn = document.getElementById("confirmBtn");

const openModalBtn = document.getElementById("confirmBtn"); // Changed to submitBtn
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", (e) => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  if (!firstName || !lastName || !email) {
    modal.style.display = "block";
    document.getElementById("modalMessage").textContent =
      "Please, fill in all required fields!";
    document.getElementById("modalMessage").style.color = "#F39C12";
  } else {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    selecteds.customer.name = formData.firstName;
    selecteds.customer.surname = formData.lastName;
    selecteds.customer.email = formData.email;
     selecteds.customer.phone = formData.phone;
  

    modal.style.display = "block";
    document.getElementById("modalMessage").textContent =
      "Confirmation successfully completed!";
    document.getElementById("modalMessage").style.color = "#38CF78";
    console.log(selecteds);
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const purple = document.getElementById("#purple");

function updatePageDisplay() {
  sidebarPages.forEach((page, index) => {
    const link = document.querySelector(page).querySelector("a");
    const checkIcon = link.querySelector(".check-icon");
    const numberSpan = link.querySelector("span");
    const pageText = link.querySelector(".pageText");
    if (index === currentPageIndex) {
      link.classList.add("active");
      checkIcon.style.display = "none";
      numberSpan.style.display = "block";
      pageText.style.color = "#53d56c";
    } else if (index < currentPageIndex) {
      link.classList.remove("active");
      checkIcon.style.display = "block";
      numberSpan.style.display = "none";
      pageText.style.color = "white";
    } else {
      link.classList.remove("active");
      checkIcon.style.display = "none";
      numberSpan.style.display = "block";
      pageText.style.color = "#636a6f";
    }
  });
}

const nextBtn = document.querySelectorAll("#nextBtn");
nextBtn.forEach((button) =>
  button.addEventListener("click", () => {
    if (selecteds[check[currentPageIndex]]) {
      if (currentPageIndex < pages.length - 1) {
        document.querySelector(pages[currentPageIndex]).style.display = "none";
        currentPageIndex++;
        document.querySelector(pages[currentPageIndex]).style.display = "block";
        updatePageDisplay();
      }
    } else {
      document.querySelector(`#alert-${currentPageIndex}`).style.display =
        "flex";
    }
      document.getElementById("staffValue").textContent = selecteds.name;
      document.getElementById("serviceValue").textContent = selecteds.service;
      document.getElementById("dateValue").textContent = selecteds.date;
  })

);
const backBtn = document.querySelectorAll("#back");
backBtn.forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector(`#alert-${currentPageIndex - 1}`).style.display =
      "none";

    selecteds[check[currentPageIndex]] = "";
    if (currentPageIndex > 0) {
      document.querySelector(pages[currentPageIndex]).style.display = "none";
      currentPageIndex--;
      document.querySelector(pages[currentPageIndex]).style.display = "block";
      updatePageDisplay();
    }
  })
);


