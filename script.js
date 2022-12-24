function addStory(storyData,...other){
	let [storyName,details] = storyData
	let heading = document.createElement("h2")
	heading.style.fontFamily = "Arial"
	let center = document.createElement("center")
	center.textContent=storyName
	heading.append(center)
	let story = document.createElement("p")
	story.align = "justify"
	story.style.fontFamily = "'Lexend', sans-serif"
	story.textContent = details["story"]
	let image = document.createElement("img")
	image.src="https://raw.githubusercontent.com//B-R-P//GPTStories//main//static//"+details["img"]["src"]
	image.alt = details["img"]["alt"]
	image.height="350"
	let storySection = document.createElement("div")
	storySection.className = "container"
	storySection.append(heading,story,image)
	return storySection
}
async function addStories(url) {
    const response = await fetch(url,{mode: 'cors'})
    const json = Object.entries(await response.json())
    document.body.append(...json.map(addStory))
}
addStories("https://cdn.jsdelivr.net/gh/B-R-P/GPTStories@latest/storydata.json")