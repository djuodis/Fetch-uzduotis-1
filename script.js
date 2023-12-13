fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const img = document.createElement("img")
    img.src = data.results[0].picture.large

    const nameH1 = document.createElement("h1")
    nameH1.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`
    nameH1.style.fontSize = '28px'
    nameH1.style.marginRight = '20px'
    nameH1.style.marginTop = '80px'
    nameH1.style.marginRight = '80px'

    const ageH1 = document.createElement("h1")
    ageH1.innerText = `${data.results[0].dob.age} years old`
    ageH1.style.fontSize = '28px'
    ageH1.style.marginTop = '21px'
    ageH1.style.marginLeft = '80px'
    ageH1.style.color = '#f4755a'

    const emailH2 = document.createElement("h2")
    emailH2.innerText = `${data.results[0].email}`
    emailH2.style.color = 'grey'
    emailH2.style.marginTop = "30px"

    const containerDiv = document.createElement("div")
    containerDiv.style.display = 'flex'
    containerDiv.style.alignItems = 'center'
    containerDiv.style.justifyContent = 'space-between'
    containerDiv.style.width = ""


    const leftContainerDiv = document.createElement("div")
    leftContainerDiv.style.textAlign = 'left'

    const rightContainerDiv = document.createElement("div")
    rightContainerDiv.style.textAlign = 'right'

    leftContainerDiv.appendChild(nameH1)
    leftContainerDiv.appendChild(emailH2)
    rightContainerDiv.appendChild(ageH1)
    containerDiv.appendChild(leftContainerDiv)
    containerDiv.appendChild(rightContainerDiv)

    document.body.append(img)
    document.body.append(containerDiv)

    console.log(data.results[0])
  })
  .catch(e => console.log(e.message))
