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
  function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) =>response.json() )
    .then((data) => {
        (displayVideos(data.videos))
    } )
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
               <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
            `
            categoriesContainer.append(categoryDiv)
        }
    }

 //{category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', authors: Array(1), …}
 
const displayVideos=(videos)=>{
//    console.log(videos)
const videoContainer = document.getElementById(" video-container");
videos.forEach(video => {
    console.log(video)
    const videoCard = document.createElement("div")
    videoCard.innerHTML =`
   <div class="card bg-base-100  ">
      <figure
       class="relative">
        <img class="w-full h-[150px] object-cover"
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
            <p class="text-sm text-gray-400 flex gap-1 items-center">${video.authors[0].profile_name}  
              <img width="35" height="35" src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge"/>
            </p>
            <p class="text-sm text-gray-400 flex gap-1 items-center">${video.others.views}</p>
        </div>
        
      </div>
    </div>
    `
       videoContainer.appendChild(videoCard)
});
}


loadCategories();
loadVideos();