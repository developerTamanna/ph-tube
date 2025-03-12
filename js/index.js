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
      <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
       videoContainer.appendChild(videoCard)
});
}


loadCategories();
loadVideos();