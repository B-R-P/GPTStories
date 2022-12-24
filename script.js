function addStory(storyData,...other){
	let [storyName,details] = storyData
	let heading = document.createElement("h2")
	heading.style.fontFamily = "Arial"
	let center = document.createElement("center")
	center.textContent=storyName
	heading.append(center)
	let story = document.createElement("p")
	story.align = "justify"
	story.style.fontFamily = "'Lexend Deca', sans-serif"
	story.textContent = details["story"]
	let image = document.createElement("img")
	image.src="static//"+details["img"]["src"]
	image.alt = details["img"]["alt"]
	image.height="350"
	let storySection = document.createElement("div")
	storySection.className = "container"
	storySection.append(heading,story,image)
	document.body.append(storySection)
}
async function addStories(url) {
    const response = await fetch(url,{mode: 'cors'})
    const json = Object.entries(await response.json())
    json.map(addStory)
}
addStories("./storydata.json")
