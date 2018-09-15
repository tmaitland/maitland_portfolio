//API documentation ......... https://swapi.co/documentation 
const results = document.querySelector(".results")


const planetImages = {
  "Alderaan" : "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",
  "Yavin IV" : "https://vignette.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170712005330",
  "Hoth": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322",
  "Dagobah": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146",
  "Bespin": "https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20170709211642",
  "Endor": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605",
  "Naboo": "https://vignette.wikia.nocookie.net/swg/images/e/ea/NabooFromSpace.jpg/revision/latest?cb=20060903011613",
  "Coruscant":  "https://vignette.wikia.nocookie.net/jdr-psw/images/e/ec/Coruscant.jpg/revision/latest?cb=20150926073733&path-prefix=fr",
  "Kamino": "https://vignette.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
  "Tatooine": "https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
}

class GetStarWars{
  constructor(images){
    this.images = images
    this.getMultiple(6)
  } 

  getInfo(searchTerm, num){
    $.ajax({
      url: `https://swapi.co/api/${searchTerm}/${num}/`,
      dataType: "json",
      success: (data) =>{
        this.displayInfo(data)
        console.log(data)   
      },
      error: (error)=>{
        console.log("There was an error")
      }
    })
  }
  getMultiple(amount){
    results.innerHTML = ''
    if(amount <= 0){
      return 
    } 
      for(let i=1; i<=amount; i++){
        this.getInfo("planets", i)
    }
  
    //getInfo("planets", 1)
    //getInfo("planets", 2)
    //getInfo("planets", 3)
    //getInfo("planets", 4)
    //getInfo("planets", 5)
    //getInfo("planets", 6)

    //Create a for loop that loops 
    // the amount of times the value of the variable "amount" is worth. for example, if "amount" is equal to 6, the loop should go 6 times. Inside the loop call the getInfo method.
  }
  displayInfo(data){
    results.innerHTML +=`
          <div class="imgs">
            <div class ="actualImg">
          <img src = ${this.images[data.name]} alt="Planet Image">
          
            <div class="space">  <div class="aleft">Name:</div> <div class="aright"><a href="${[data.url]}" target="_blank">${[data.name]}</a></div> </div>
            <div class="space"> <div class="aleft">Population:</div> <div class="aright"><a href="${[data.url]}" target="_blank">${[data.population]}</a></div> </div>
            <div class="space"> <div class="aleft">Diameter: </div> <div class="aright"><a href="${[data.url]}" target="_blank">${[data.diameter]}</a></div> </div>
            <div class="space"> <div class="aleft">Climate: </div> <div class="aright"><a href="${[data.url]}" target="_blank">${[data.climate]}</a></div> </div>
           

          </div> 
          </div>
      `
  }
    
}

const pimg = new GetStarWars(planetImages)
console.log(pimg)
// const getInFormation = new GetStarWars(getInfo(6))
// console.log(getInFormation)

  //  //creating img tags to append to div
  //   let getPlanetImg = document.createElement("img")
  //   let getPlanetImg1 = document.createElement("img")
  //   let getPlanetImg2 = document.createElement("img")
  //   let getPlanetImg3 = document.createElement("img")
  //   let getPlanetImg4 = document.createElement("img")
  //   let getPlanetImg5 = document.createElement("img")
  // //creating div tags to append to div.results and to be appended to by img
  //   let elem = document.createElement("div")
  //   let elem1 = document.createElement("div")
  //   let elem2 = document.createElement("div")
  //   let elem3 = document.createElement("div")
  //   let elem4 = document.createElement("div")
  //   let elem5 = document.createElement("div")
  //   //appending results to child div
  //   results.appendChild(elem)
  //   results.appendChild(elem1)
  //   results.appendChild(elem2)
  //   results.appendChild(elem3)
  //   results.appendChild(elem4)
  //   results.appendChild(elem5)
  //   //appending div to child img
  //   elem.appendChild(getPlanetImg)
  //   elem1.appendChild(getPlanetImg1)
  //   elem2.appendChild(getPlanetImg2)
  //   elem3.appendChild(getPlanetImg3)
  //   elem4.appendChild(getPlanetImg4)
  //   elem5.appendChild(getPlanetImg5)
  //   //setting the source of image tags to add planet images
  //   getPlanetImg.setAttribute("class", "plaNetImg")
  //   getPlanetImg1.setAttribute("class", "plaNetImg")
  //   getPlanetImg2.setAttribute("class", "plaNetImg")
  //   getPlanetImg3.setAttribute("class", "plaNetImg")
  //   getPlanetImg4.setAttribute("class", "plaNetImg")
  //   getPlanetImg5.setAttribute("class", "plaNetImg")
  //   //added images to each container
  //   getPlanetImg.setAttribute("src", planetImages["Alderaan"])
  //   getPlanetImg1.setAttribute("src", planetImages["Yavin IV"])
  //   getPlanetImg2.setAttribute("src", planetImages["Hoth"])
  //   getPlanetImg3.setAttribute("src", planetImages["Dagobah"])
  //   getPlanetImg4.setAttribute("src", planetImages["Bespin"])
  //   getPlanetImg5.setAttribute("src", planetImages["Endor"])
  //   //added class to format div container
  //   elem.setAttribute("class", "plaNetz")
  //   elem1.setAttribute("class", "plaNetz")
  //   elem2.setAttribute("class", "plaNetz")
  //   elem3.setAttribute("class", "plaNetz")
  //   elem4.setAttribute("class", "plaNetz")
  //   elem5.setAttribute("class", "plaNetz")