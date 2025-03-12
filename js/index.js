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

 
const displayVideos=(videos)=>{
   console.log(videos)
}


loadCategories();
loadVideos();