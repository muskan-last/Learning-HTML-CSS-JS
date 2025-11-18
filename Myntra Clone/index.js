 fetch("navigation.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navigation").innerHTML = data;
    });


    let item = {
         image:"item/item1.jpg",
         name: "Mens T-shirt",
         company: "lewi;s",
         rating: {
            starts:4.5,
            noOfRevies:'3.4k',
         },
         current_price: 499,
         original_price: 798,
         discoutn: 40,
    }


    let items_container_element = document.querySelector('.items-conatiner');
    items_container_element.innerHTML = `<div class="item-conatiner">
     <img class="item-image" src="${item.image}" alt="item image">
     <div class="rating">${item.rating.starts}⭐ | ${item.rating.noOfRevies}</div>
     <div class="comapy-name">${item.company}</div>
     <div class="item-name">${item.name}</div>
     <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="dispcount">(${item.discoutn}% OFF)</span>
     </div>
           <button class="btn-add-bag">Add to Bag </button>
            </div>`;

































































   //  const products1 = 
   //    {
   //          image:"item/item1.jpg",
   //        id : 1,
   //       name: "Mens T-shirt",
   //       company: "lewi;s",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 499,
   //       original_price: 798,
   //       discoutn: 40,
        
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${products1.image}" alt="item image">
   //   <div class="rating"> ${products1.starts}⭐ | ${products1.noOfRevies}  </div>
   //   <div class="comapy-name">${products1.company}</div>
   //   <div class="item-name">${products1.name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${products1.current_price}</span>
   //      <span class="original-price">Rs ${products1.original_price}</span>
   //      <span class="dispcount">(${products1.discoutn}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;

   //    const products2 = {
   //       id : 2,
   //       name: "Womans T-shirt",
   //       company: "lewi;s",
   //       starts:3.5,
   //       noOfRevies:4,
   //       current_price: 897,
   //       original_price: 1798,
   //       discoutn: 60,
   //       image:"items/item2.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${products2.image}" alt="item image">
   //   <div class="rating"> ${products2.starts}⭐ | ${products2.noOfRevies}  </div>
   //   <div class="comapy-name">${products2.company}</div>
   //   <div class="item-name">${products2.name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${products2.current_price}</span>
   //      <span class="original-price">Rs ${products2.original_price}</span>
   //      <span class="dispcount">(${products2.discoutn}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;

   //     const products3 ={
   //        id : 3,
   //       name: "Mens Polo T-shirt",
   //       company: "Jokey",
   //       starts:5,
   //       noOfRevies:1.4,
   //       current_price: 1499,
   //       original_price: 1899,
   //       discoutn: 30,
   //       image:"items/item3.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${products3.image}" alt="item image">
   //   <div class="rating"> ${products3.starts}⭐ | ${products3.noOfRevies}  </div>
   //   <div class="comapy-name">${products3.company}</div>
   //   <div class="item-name">${products3.name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${products3.current_price}</span>
   //      <span class="original-price">Rs ${products3.original_price}</span>
   //      <span class="dispcount">(${products3.discoutn}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products4 ={
   //        id : 4,
   //       name: "Mans Round Neck T-shirt",
   //       company: "Allen Solly",
   //       starts:3.2,
   //       noOfRevies:4.5,
   //       current_price: 2100,
   //       original_price: 2500,
   //       discoutn: 45,
   //       image:"items/item4.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;

   //     const products5 ={
   //        id : 5,
   //       name: "Womans Hand Bracelet",
   //       company: "Crestens",
   //       starts:4.3,
   //       noOfRevies:4.9,
   //       current_price: 499,
   //       original_price: 798,
   //       discoutn: 40,
   //       image:"items/item5.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products6 ={
   //        id : 6,
   //       name: "White Golden Earing",
   //       company: "Nayka",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 456,
   //       original_price: 798,
   //       discoutn: 40,
   //       image:"items/item6.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products7 ={
   //        id : 7,
   //       name: "Chokaars for Bright",
   //       company: "White Stone",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 2000,
   //       original_price: 2344,
   //       discoutn: 45,
   //       image:"items/item7.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products8 ={
   //        id : 8,
   //       name: "Boys Co-ord sets",
   //       company: "Firt Cry",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 3488,
   //       original_price: 4000,
   //       discoutn: 55,
   //       image:"items/item8.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products9 ={
   //        id : 9,
   //       name: "Boys Sweart Shirt",
   //       company: "Denims",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 2499,
   //       original_price: 3798,
   //       discoutn: 60,
   //       image:"items/item9.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products10 ={
   //        id : 10,
   //       name: "Womans Off Shoulder TOP",
   //       company: "Fary Beauty",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 567,
   //       original_price: 798,
   //       discoutn: 34,
   //       image:"items/item10.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products11 =
   //    { id : 11,
   //       name: "Womans Thank Top",
   //       company: "Gucci",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 1499,
   //       original_price: 1798,
   //       discoutn: 68,
   //       image:"items/item11.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;
   //     const products12 =
   //     { id : 12,
   //       name: "Womans Neck Piece",
   //       company: "Mouse",
   //       starts:4.5,
   //       noOfRevies:3.4,
   //       current_price: 1899,
   //       original_price: 2000,
   //       discoutn: 19,
   //       image:"items/item12.jpg"
   //    }
   //    items_continer_element.innerHTML =`<div class="item-conatiner">
   //   <img class="item-image" src="${item.item_image}" alt="item image">
   //   <div class="rating"> ${item.reting.starts}⭐ | ${item.reting.noOfRevies}  </div>
   //   <div class="comapy-name">${item.comapny_name}</div>
   //   <div class="item-name">${item.item_name}</div>
   //   <div class="price">
   //      <span class="current-price">Rs ${item.currnt_price}</span>
   //      <span class="original-price">Rs ${item.original_price}</span>
   //      <span class="dispcount">(${item.discount}% OFF)</span>
   //   </div>
   //         <button class="btn-add-bag">Add to Bag </button>
   //          </div>`;

   

    