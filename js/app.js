const body = document.querySelector("body")

function getUser() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://randomuser.me/api")
    xhr.send()                              

    /*
        Note:
        Refactor to set up the apiData.innerHTML for 
        submission to the backend; 

        Next ... use Promise object to handle bad requests, demo wait for resolve
    */

    xhr.addEventListener("load", () => {         // after loaded, callback     
        userData = JSON.parse(xhr.response)      // string to a JSON object
            apiFirst = userData.results[0].name.first;
            apiLast = userData.results[0].name.last;
            apiCountry = userData.results[0].location.country;
            apiTime = userData.results[0].location.timezone.offset;
        apiData = document.getElementById("apiData")
        apiData.innerHTML = `
            <img  class="user" src=${userData.results[0].picture.large} alt="rando user">
            <h2 class="user">${apiFirst} ${apiLast}</h2>
            <p class="user">${apiFirst} lives in ${apiCountry} </p>
            <input type="hidden" name="apiFirst" value="${apiFirst}"/>
            `

        console.log(apiFirst)
        document.getElementById("addBtn").value = `Add ${apiFirst}`
    })
}

getUser()
getBtn.addEventListener("click", getUser) // don't even need getElementByID