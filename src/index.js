import Top from "../src/img/sushichef.jpg";
import Side from "../src/img/side.jpg";
import Bot from "../src/img/bottom.jpg";
import "./style.css";
const AppModule = (function () {
  const content = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(content);
  const reservationButton = function () {
    content.querySelectorAll("*").forEach((n) => n.remove());
    return ReservationModule();
  };
  const homeButton = function () {
    content.querySelectorAll("*").forEach((n) => n.remove());
    return HomeModule();
  };
  const HeaderModule = (function () {
    const header = document.createElement("div");
    body.appendChild(header);
    const reservation = document.createElement("button");
    reservation.addEventListener("click", reservationButton);
    const menu = document.createElement("button");
    // menu.addEventListener("click", MenuModule());
    const home = document.createElement("button");
    home.addEventListener("click", homeButton);
    header.classList.add("header");
    header.appendChild(home);
    header.appendChild(reservation);
    // header.appendChild(menu);
    home.textContent = `Home`;
    reservation.textContent = `Reservation`;
    menu.textContent = `Menu`;
  })();
  const HomeModule = function () {
    const topDiv = document.createElement("div");
    content.appendChild(topDiv);
    topDiv.classList.add("top-div");
    const topImg = new Image();
    topImg.src = Top;
    topImg.classList.add("top-img");
    topDiv.appendChild(topImg);
    const h1 = document.createElement("h1");
    h1.textContent = "OMAKASE SUSHI BAR    |    MASTER CHEF SAKAMOTO EIJI";
    topDiv.appendChild(h1);
    const pTop = document.createElement("p");
    pTop.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint,
    voluptate officiis tempore porro praesentium voluptates, consequuntur
    esse laudantium eveniet illo? 
    Architecto earum libero aspernatur ratione modi omnis corrupti placeat
    Dolor unde et sequi fugiat est similique odio nisi, libero doloremque,
    consequuntur magni aspernatur mollitia reprehenderit vero hic enim
    maxime eum dolorem optio! 
    
    Dolore sapiente porro incidunt adipisci soluta, consequuntur iste
    ducimus alias sunt voluptatem omnis temporibus quaerat, natus qui,
    aliquid consequatur.
    Fuga, consequatur libero nemo molestiae, explicabo consectetur officiis
    earum deleniti laudantium tempore doloremque sit, aperiam facere
    accusamus culpa. Vero eligendi impedit ut esse facere quibusdam
    reprehenderit?`;
    topDiv.appendChild(pTop);
    const midDiv = document.createElement("div");
    midDiv.classList.add("mid-div");
    content.appendChild(midDiv);
    const sideImg = new Image();
    sideImg.src = Side;
    midDiv.appendChild(sideImg);
    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    midDiv.appendChild(textDiv);
    const part1 = document.createElement("div");
    const part2 = document.createElement("div");
    const part3 = document.createElement("div");
    const part4 = document.createElement("div");
    const h4Mid1 = document.createElement("h4");
    const pMid1 = document.createElement("p");
    const h4Mid2 = document.createElement("h4");
    const pMid2 = document.createElement("p");
    const h4Mid3 = document.createElement("h4");
    const pMid3 = document.createElement("p");
    const h4Mid4 = document.createElement("h4");
    const pMid4 = document.createElement("p");
    part1.appendChild(h4Mid1);
    part1.appendChild(pMid1);
    part2.appendChild(h4Mid2);
    part2.appendChild(pMid2);
    part3.appendChild(h4Mid3);
    part3.appendChild(pMid3);
    part4.appendChild(h4Mid4);
    part4.appendChild(pMid4);
    textDiv.appendChild(part1);
    textDiv.appendChild(part2);
    textDiv.appendChild(part3);
    textDiv.appendChild(part4);
    h4Mid1.textContent = `WHAT IS OMAKASE`;
    h4Mid2.textContent = `ACCOMODATIONS`;
    h4Mid3.textContent = `CANCELLATIONS`;
    h4Mid4.textContent = `SEATING TIMES`;
    pMid1.textContent = `Omakase translates to "I will leave it up to the chef" and is equivalent
to a Chef's Tasting Menu.
It's a fine tradition that gives the chef a creative freedom and the
customer a memorable dining experience. 

Our Edomae Omakase tasting menu consists of small plates, sashimi followed
by a selection of seasonal nigiri, and dessert.`;
    pMid2.textContent = `     To maintain the highest quality, we only prepare for the number of
reservation each eveniPlease contact us of any allergies or dietary restrictions, contact us at
least 48hours before your reservation. 
Omakase is strictly based on Chef Toshio Suzuki's selection, and will need
to source additional ingredients, 

Unfortunately, certain dietary restrictions such as gluten free, and no
rice, cannot be accommodated. 

Children who can participate through the entire experience and be seated
at the sushi counter can be accomodated.`;
    pMid3.textContent = `To maintain the highest quality, we only prepare for the number of
reservation each evening. 
To avoid fees, please modify or cancel your reservation at least 48 hours
prior to your reservation.`;
    pMid4.textContent = `Tuesday- Saturday 5:30pm, 7:30pm, 9:30pm Omakase Dinner Courses. 
*Lunch seatings will become available soon!`;
  };

  const ReservationModule = function () {
    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div");
    const nameInput = document.createElement("input");
    const h2 = document.createElement("h2");
    h2.textContent = "Reservations Request Form";
    const spanName = document.createElement("span");
    const spanEmail = document.createElement("span");
    spanName.textContent = "Name";
    spanEmail.textContent = "Email Address";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    nameInput.type = "text";
    const spanTel = document.createElement("span");
    spanTel.textContent = "Phone Number";
    content.appendChild(formDiv);
    formDiv.appendChild(h2);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(spanName);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(nameInput);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(spanEmail);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(emailInput);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(spanTel);
    formDiv.appendChild(document.createElement("br"));
    formDiv.appendChild(phoneInput);
  };
  HomeModule();
})();
