function removeActive(){
    const activeBtns = document.getElementsByClassName("active")
    // console.log(activeBtns)
    for(let btn of activeBtns){
        btn.classList.remove("active");
    }
}

function loadCategories() {
    
    //* fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    //* convert promise to json

    .then((res) =>res.json() )
    //*send data to display
    .then((data) =>{
       displayCategories(data.categories)
    } )
    
} 

//     *{
//     *category_id: '1001', 
//      *category: 'Music'
//     *}
  //  vdo load func:
  function loadVideos(searchText = ""){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((response) =>response.json() )
    .then((data) => {
        removeActive();
        document.getElementById("btn-all").classList.add("active");
        displayVideos(data.videos);
    } )
   }

   const loadCategoryVideos =(id)=>{
    // console.log(id)
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url)
    fetch(url)
    .then((res) =>res.json() )
    .then((data) =>{
        removeActive()
        const clickButton =document.getElementById(`btn-${id}`);
        clickButton.classList.add("active")
        console.log(clickButton)
        displayVideos(data.category)
    } )
   }

   const loadVideoDetails=(videoId)=>{
    console.log(videoId);
    const url =`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    fetch(url)
    .then((res) =>res.json() )
    .then((data) =>{
        displayVideoDetails(data.video)
     
    } )
   };
  const displayVideoDetails = (video)=>{
 console.log(video)
 document.getElementById("video_details").showModal();
 const detailsContainer = document.getElementById("details-container")
 detailsContainer.innerHTML=`
   <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.others.views}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">ply Now</button>
    </div>
  </div>
</div>
 `;
  }
// category dekhanor function

    function displayCategories(categories){
        // console.log(categories)
        //*get the container
        categoriesContainer = document.getElementById("categories-container")
        //*loop operation on array of object
        for(cat of categories){
            // console.log( categories)
            //*create element 
             const categoryDiv = document.createElement("div")
            //*append the element
            categoryDiv.innerHTML = `
               <button id="btn-${cat.category_id}" onclick ="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
            `
            categoriesContainer.append(categoryDiv)
        }
    }

 //{category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', authors: Array(1), …}


 
const displayVideos=(videos)=>{
//    console.log(videos)
const videoContainer = document.getElementById(" video-container");
 videoContainer.innerHTML ="";
 if(videos.length ==0){
    videoContainer.innerHTML =`
    <div class="py-20 col-span-full flex flex-col text-center justify-center items-center">
  <img class="w-[120px] " src="./assest/Icon.png" alt="">
  <h2> videoContainer.innerHTML =""</h2>
</div>
    `
 return ;
 }
videos.forEach(video => {
   
    console.log(video)
    const videoCard = document.createElement("div")
    videoCard.innerHTML =`
   <div class="card bg-base-100  ">
      <figure
       class="relative">
        <img class="w-full h-[200px] object-cover"
          src="${video.thumbnail}"
          alt="Shoes" />
          <span class="absolute text-white bg-black bottom-2 right-2 rounded-sm px-2 text-sm ">3hrs 56 min ago</span>
      </figure>
      <div class="flex gap-3 px0 py-5">
        <div class="profile">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
              <img src="${video.authors[0].profile_picture}" />
            </div>
          </div>
        </div>
        <div class="intro">
            <h3 class="text-sm font-semibold" >${video.title}</h3>
          <p class="text-sm text-gray-400 flex gap-1 items-center">
    ${video.authors[0].profile_name}  
    ${video.authors[0].verified === true ? 
        `<img width="35" height="35" src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge"/>` : 
        ''}
</p>

            <p class="text-sm text-gray-400 flex gap-1 items-center">${video.others.views}</p>
        </div>
        
      </div>
    <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>

    </div>
    `
       videoContainer.appendChild(videoCard)
});
}

document.getElementById("search-input").addEventListener("keyup", (event)=>{
const input = event.target.value;
// console.log(input);
loadVideos(input)
})

loadCategories();
