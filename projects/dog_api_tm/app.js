const dog_api = 'https://dog.ceo/api/'
const viewDog = document.querySelector('#viewDog')
const selectBreed = document.querySelector('#selectBreed')
const displayDog = document.querySelector('#breedImage')



function getDog(){
    $.ajax({
        url: `${dog_api}breeds/list`,
        dataType: "json",
        success: data =>{
            var theseDogs = data.message
            for (let i = 0; i<theseDogs.length; i++){
                selectBreed.innerHTML += `
                    <option value="${theseDogs[i]}">${theseDogs[i]}</option>
                `
            }
            console.log(data)

        },
        error: error => {
            console.log("There was an error.")
        }
    })

}

selectBreed.addEventListener('display', getDog())

viewDog.addEventListener('click', function(){
    let breedName = selectBreed.value
    $.ajax({
        url: `${dog_api}breed/${breedName}/images/random`,
        dataType: "json",
        success: data => {
            var dogImg = data.message
            for(let i = 0; i<dogImg.length; i++){
                displayDog.setAttribute("src", `${dogImg}`)
            }
            console.log(data.message)
        },
        error: error => {
            console.log("There was an error.")
        }
    })
       
})

const random = function randomDog(){
    //This is the code
}