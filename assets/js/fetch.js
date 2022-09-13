const apiData = [];

const getApiData = () =>{
    const endPoint = `https://api.mediehuset.net/sdg/goals`;

    fetch(endPoint)
        .then((response) =>{
            if(response.ok)
            return response.json();
        })

        .then((data) => {
            apiData.push(...data.items)
        })
        .catch((error) =>{
            console.error(error);
        })

        .finally(() =>{
            renderContent()

        })
}

let renderContent = () =>{

    apiData.map((data) => createElements(data))

}

let createElements = (data) =>{
    document.getElementById("goalContainer").innerHTML += 
    `
    <figure class="goalCard" style="background-color: #${data.color}";>
        <div class="title">
            <h4>${data.id}.</h4>
            <h4 class ="cardHeadline">${data.title}</h4>
            <svg class="cardIcon">${data.icon}</svg>          
        </div>
        <figure>
            <img src="${data.image}" alt="content picture">
        </figure>
        <div class="cardByline">
            <p>${data.byline}</p>
        </div>
    </figure>
    
    
    
    
    
    `
}

getApiData()