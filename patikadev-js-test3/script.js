const menu=[
    {
        id:0,
        title:"Tteokbokki",
        category:"Korea",
        price:"10.99",
        img:"https://picsum.photos/200/300?random=1",
        desc:"Spicy rice cakes, serving with fish cake.",  
    },
    {
        id:1,
        title:"Chicken Ramen",
        category:"Japan",
        price:"7.99",
        img:"https://picsum.photos/200/300?random=2",
        desc:"Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",  
    },
    {
        id:2,
        title:"Bibimbap",
        category:"Korea",
        price:"8.99",
        img:"https://picsum.photos/200/300?random=3",
        desc:"Boiling vegetables, serving with special hot sauce",  
    },
    {
        id:3,
        title:"Yangzhou Fried Rice",
        category:"China",
        price:"12.99",
        img:"https://picsum.photos/200/300?random=4",
        desc:"Yangzhou style fried rice, serving with bean and pickles",  
    },
    {
        id:4,
        title:"Onigiri",
        category:"Japan",
        price:"9.99",
        img:"https://picsum.photos/200/300?random=5",
        desc:"Rice Sandwich, serving with soy sauce",  
    },
    {
        id:5,
        title:"Jajangmyeon",
        category:"Korea",
        price:"15.99",
        img:"https://picsum.photos/200/300?random=6",
        desc:"Black bean sauce noodle, serving with green onion",  
    },
    {
        id:6,
        title:"Ma Yi Shang Shu",
        category:"China",
        price:"12.99",
        img:"https://picsum.photos/200/300?random=7",
        desc:"Hot pepper sauce noodle, serving with soy bean and onion",  
    },
    {
        id:7,
        title:"Doroyaki",
        category:"Japan",
        price:"3.99",
        img:"https://picsum.photos/200/300?random=8",
        desc:"Red bean paste dessert, serving with honey.",  
    },

];
const Buttons=["All","Korea","Japan","China"];

window.addEventListener("load",function(){

const FilterMenu=this.document.querySelector(".filter-menu");
for(let i=0;i<Buttons.length;i++){
const button = document.createElement("button");
button.addEventListener("click",function(){
    filter(Buttons[i],button);
});
button.innerHTML=Buttons[i];
button.className="filter-btn";
if(Buttons[i]=="All"){
    button.className="filter-btn active";
}
FilterMenu.appendChild(button);
}
const content =this.document.querySelector(".content");
const foodItemTemplate = this.document.getElementById("foodItemTemplate");


for(let x=0;x<menu.length;x++){
    const foodItem = foodItemTemplate.content.cloneNode(true);
    const foodImg = foodItem.querySelector(".food-img");
    const foodName = foodItem.querySelector(".food-name");
    const foodPrice = foodItem.querySelector(".food-price");
    const foodDesc = foodItem.querySelector(".food-desc");

    foodImg.src = menu[x].img;
    foodName.innerHTML = menu[x].title;
    foodPrice.innerHTML = menu[x].price;
    foodDesc.innerHTML = menu[x].desc;

    content.appendChild(foodItem);
    
}


});



function filter(filt,selectedButton) {
    const foodItems = document.querySelectorAll(".food");
    const buttons = document.querySelectorAll(".filter-btn");
    for (let i = 0; i < foodItems.length; i++) {
        const foodItem = foodItems[i];
        const category = menu[i].category;

        if (filt === "All" || filt === category) {
            foodItem.style.display = "flex"; 
        } else {
            foodItem.style.display = "none"; 
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    selectedButton.classList.add("active");
}