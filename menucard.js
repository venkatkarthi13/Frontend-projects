const menu=[
    {
        id:0,
        title:"Diwali special Boondi laddu",
        category:"Snacks",
        price:10,
        img:"./media/IDs/laddu.jpg",
        desc:"Boondi Laddu is a popular Indian sweet, especially during the Diwali festival."
    },
    {
        id:1,
        title:"Yogurt",
        category:"Breakfast",
        price:20,
        img:"./media/IDs/id1.jpg",
        desc:"Yogurt is incredibly versatile and can be enjoyed in various ways.A healthy gut may indirectly benefit skin health, Consuming yogurt may help your body better defend against infections and illnesses."
    },
    {
        id:2,
        title:"Colorful food",
        category:"Lunch",
        price:70,
        img:"./media/IDs/id2.jpg",
        desc:"Colorful foods, often referred to as eating the rainbow, are foods that come in a variety of vibrant colors. These colorful foods are not only visually appealing but also provide a wide range of health benefits. "
    },
    {
        id:3,
        title:"Holi special Mawa gujiya",
        category:"Snacks",
        price:15,
        img:"./media/IDs/id3.jpg",
        desc:"Mawa Gujiya, also known as Karanji, is a popular Indian sweet pastry traditionally made during festivals like Diwali and Holi."
    },
    {
        id:4,
        title:"Fish",
        category:"Dinner",
        price:45,
        img:"./media/IDs/id4.jpg",
        desc:"Fish is a nutritious and delicious choice for lunch.Enjoy your delicious and nutritious fish lunch!"
    },
    {
        id:5,
        title:"Pasta with tomato sauce.",
        category:"Lunch",
        price:60,
        img:"./media/IDs/id5.jpg",
        desc:"pasta with tomato sauce! It's a classic and comforting dish that can be customized with additional ingredients like sautéed vegetables, meatballs, or seafood if desired."
    },
    {
        id:6,
        title:"Food & Drink",
        category:"Breakfast",
        price: 90,
        img:"./media/IDs/id6.jpg",
        desc:" Maintaining a healthy and balanced lifestyle in both the Health & Wellness and Food & Drink domains is crucial for promoting physical, mental, and emotional well-being."
    },
    {
        id:7,
        title:"Editorial, Food & Drink",
        category:"Snacks",
        price:50,
        img:"./media/IDs/id7.jpg",
        desc:" Maintaining a healthy and balanced lifestyle in both the Health & Wellness and Food & Drink domains is crucial for promoting physical, mental, and emotional well-being."
    },
    {
        id:8,
        title:"Food & Drink",
        category:"Dinner",
        price:100,
        img:"./media/IDs/id8.jpg",
        desc:" Maintaining a healthy and balanced lifestyle in both the Health & Wellness and Food & Drink domains is crucial for promoting physical, mental, and emotional well-being."
    },
]

    const section=document.querySelector('.sections');

    window.addEventListener('DOMContentLoaded',function(){
        displayitems(menu);
    });

    const filterbtns=document.querySelectorAll('.filter')

    filterbtns.forEach(function(btn){
        btn.addEventListener('click',function(e){
        const category=e.currentTarget.dataset.id;
        const menucategory=menu.filter(function(menuitem){
            if(menuitem.category===category){
                return menuitem
            }
        });
        if(category==="all"){
            displayitems(menu);
        }else{
            displayitems(menucategory)
        }

        });
    })

    function displayitems(menuitems){
    let display=menuitems.map(function(item){
        return   ` 
        <div class="sections">
        <article class="menu-item">
                     <img src=${item.img} class="item-img" alt=${item.title}>
                    <div class="info">
                    <header class="rate">
                      <h4 class="item-title">${item.title}</h4>
                      <h4 class="item-price">$${item.price}</h4>
                    </header>
                    <hr>
                    <p class="item-desc">${item.desc}</p>
                    </div> 
                    </article>
                    </div>
                  `
        }).join(" ")
            // console.log(display);
            section.innerHTML=display 
    };

