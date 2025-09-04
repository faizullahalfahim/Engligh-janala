const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then (res=> res.json()) //returning json data from response
    .then ((json) => displayLessons(json.data))
};
const loadLevelWord = (id)=> {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord (data.data));
}
const displayLevelWord = (words)=> {
   const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    for (const word of words){
        console.log (word);
        const card = document.createElement("div");
        card.innerHTML = `<div class=" bg-white rounded-xl p-5 shadow-sm text-center py-10 px-5  space-y-5">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / pronunciation</p>
            <div class="font-bangla text-2xl font-medium"> "${word.meaning} / ${word.pronunciation} </div>
            <div class="flex justify-between items-center">
                <button class="w-10 h-10 rounded-md bg-[#1A91FF10] hover:bg-[#1A91FF80]">
                    <i class="fa-solid fa-circle-info"></i></button>
                <button class="w-10 h-10 rounded-md bg-[#1A91FF10] hover:bg-[#1A91FF80]">
                    <i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>` 
        wordContainer.appendChild(card);
        
    }
}

const displayLessons = (lessons)=> {
    // console.log(lessons);
    //   step-1: get the container
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // step-2: create elements for each lesson
    for (const lesson of lessons) {
        console.log(lesson);
    // step-3: create Elements for each lesson
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button onclick='loadLevelWord(${lesson.level_no})' class="btn btn-outline btn-primary" href="">
                        <i class="fa-solid fa-book-open">
                        </i> Lesson - ${lesson.level_no}
                        </button>`
    // step:4: append into the container
    levelContainer.appendChild(btnDiv);  
    }
}
loadLessons();
