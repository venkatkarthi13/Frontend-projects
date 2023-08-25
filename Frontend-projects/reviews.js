const reviews=[
    {
    id:0,
    names:"Avatar",
    types:"Hollywood",
    image:"./media/Avatar 2.jpeg",
    desc:"Avatar: The Way of Water is an undeniable technical achievement with its epic score, jaw-dropping scale & breathtaking visuals that are worthy of repeat viewings.3D experience is visually stunning and super. CGI animation is seamlessly integrated into breathtaking scale and precisely."

    },
{
    id:1,
    names:"DD returns",
    types:"Kollywood",
    image:"./media/DD returns.jpeg",
    desc:"Phenomenal! This movie deserves to be seen. This is a laugh riot. After a long time I laughed so much in a movie.  So many characters still each one stands out. Santanam's characteristic comedy is back again. I would recommend everyone to book tickets for the whole family and enjoy !"
},
{
    id:2,
    names:"KOK",
    types:"Mollywood",
    image:"./media/kok.jpg",
    desc:"KING OF KOTHA is an absolute masterpiece that delivers an awe-inspiring cinematic experience. This movie transcends the boundaries of conventional storytelling, plunging the audience into a captivating world of drama, intrigue, and emotion. Directed by Abhilash Joshiy, the film's exquisite visuals, compelling performances, and thought-provoking narrative combine to create a truly unforgettable viewing experience."

},
{
    id:3,
    names:"Openheimer",
    types:"Hollywood",
    image:"./media/oppenheimer-8k-2023-8000x4500-12220.jpg",
    desc:"Oppenheimer is an exceptional film that deserves the highest praise for its thought-provoking narrative, exquisite craftsmanship, and compelling performances. From the very first frame, the movie draws the audience into the fascinating world of J. Robert Oppenheimer, the brilliant physicist whose contributions during World War II profoundly altered the course of history."

},
{
    id:4,
    names:"Thiruchitrambalam",
    types:"Kollywood",
    image:"./media/Thiruchitrambalam.jpg",
    desc:"This was such a wholesome delight to experience on the big screen. As usual, Dhanush nailed the middle-class boy role which he has played down to a T. Nithya Menen however has outshone in every instance throughout this film. Bharathiraja and Prakash Raj are immaculate in their respective roles as well. Anirudh's music is the backbone of this film, be it the songs or BGM, he has absolutely elevated the film superbly."

},
]

//selecting items

const names=document.getElementById('names')
const types=document.getElementById('types')
const image=document.getElementById('image')
const desc=document.getElementById('desc')

const nextbtn=document.querySelector('.next')
const prevbtn=document.querySelector('.prev')
const rbtn=document.querySelector('#rbtn')

// current value
let initialvalue=0

window.addEventListener('DOMContentLoaded',function(){  
    showreviews()
});


function showreviews(){
    const item=reviews[initialvalue];
    names.textContent=item.names
    types.textContent=item.types
    image.src=item.image
    desc.textContent=item.desc
}


//next and prev button

nextbtn.addEventListener('click',function(){
    initialvalue++;

    if(initialvalue > reviews.length-1){
        initialvalue=0;
    }
    showreviews()
})
prevbtn.addEventListener('click',function(){
    initialvalue--;

    if(initialvalue < 0){
        initialvalue= reviews.length-1;
    }
    showreviews()
})

//random button

rbtn.addEventListener('click',function(){
   initialvalue= Math.floor(Math.random()*reviews.length)
console.log(initialvalue);
   showreviews()

})

