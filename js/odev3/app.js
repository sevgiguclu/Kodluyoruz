const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

function default_Menu () {
  menu.map((i) => {
    let new_Item_img = document.createElement("div");
    new_Item_img.classList.add("menu-items","col-lg-6","col-sm-12");
    new_Item_img.innerHTML = `
        <img src="${i.img}" alt="${i.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${i.title}</h4>
            <h4 class="price">${i.price}</h4>
          </div>
          <div class="menu-text">
            ${i.desc}
          </div>
        </div>
    `;
    document.querySelector('.section-center.row').append(new_Item_img);

  });
}


//START: DEFAULT
let buttons = ['All'];
let allBtn = `<button class="btn btn-outline-dark btn-item" data-id="All">All</button>`;
document.getElementById("btn-container").innerHTML = allBtn;
menu.forEach(elm => {
  if(!buttons.includes(elm.category)){
    buttons.push(elm.category);
    let newBtn = document.createElement("button");
    newBtn.classList.add("btn","btn-outline-dark","btn-item");
    newBtn.setAttribute("data-id",elm.category);
    newBtn.innerHTML = elm.category;
    document.getElementById("btn-container").append(newBtn);
  }
});
// console.log(buttons);
let eventBtn = document.querySelectorAll('.btn.btn-outline-dark.btn-item');
// console.log(eventBtn);
default_Menu();
//END : DEFAULT


// START : created three lists for categorys 
let koreaList = [];
let japanList = [];
let chinaList = [];
menu.forEach(elm => {
  if(elm.category == "Korea") {
    koreaList.push(elm);
    // console.log(koreaList);
  }
  else if(elm.category == "Japan"){
    japanList.push(elm);
    // console.log(japanList);
  }
  else  if(elm.category == "China"){
    chinaList.push(elm);
    // console.log(chinaList);
  }
});
// END : created three lists for categorys 


//START : BUTTONS CLİCK EVENT
eventBtn.forEach(btn => {
  btn.addEventListener("click",function(){
    // alert(btn.innerHTML);
    switch (btn.innerHTML) {
      case "Korea":
        // alert("korea yemekleri gelecek");
        document.querySelector('.section-center.row').innerHTML ="";
        koreaList.map((i) => {
          let new_Item_img = document.createElement("div");
          new_Item_img.classList.add("menu-items","col-lg-6","col-sm-12");
          new_Item_img.innerHTML = `
              <img src="${i.img}" alt="${i.title}" class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${i.title}</h4>
                  <h4 class="price">${i.price}</h4>
                </div>
                <div class="menu-text">
                  ${i.desc}
                </div>
              </div>
          `;
          document.querySelector('.section-center.row').append(new_Item_img);

        });

        break;

      case "Japan":
        // alert("Japan yemekleri gelecek");
        document.querySelector('.section-center.row').innerHTML ="";
        japanList.map((i) => {
          let new_Item_img = document.createElement("div");
          new_Item_img.classList.add("menu-items","col-lg-6","col-sm-12");
          new_Item_img.innerHTML = `
              <img src="${i.img}" alt="${i.title}" class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${i.title}</h4>
                  <h4 class="price">${i.price}</h4>
                </div>
                <div class="menu-text">
                  ${i.desc}
                </div>
              </div>
          `;
          document.querySelector('.section-center.row').append(new_Item_img);

        });

        break;
      case "China":
        // alert("China yemekleri gelecek");
        document.querySelector('.section-center.row').innerHTML ="";
        chinaList.map((i) => {
          let new_Item_img = document.createElement("div");
          new_Item_img.classList.add("menu-items","col-lg-6","col-sm-12");
          new_Item_img.innerHTML = `
              <img src="${i.img}" alt="${i.title}" class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${i.title}</h4>
                  <h4 class="price">${i.price}</h4>
                </div>
                <div class="menu-text">
                  ${i.desc}
                </div>
              </div>
          `;
          document.querySelector('.section-center.row').append(new_Item_img);

        });

        break;
      default:
        // alert("tüm yemekleri gelecek");
        document.querySelector('.section-center.row').innerHTML ="";
        default_Menu();
        break;
    }
  })
});
//END : BUTTONS CLİCK EVENT