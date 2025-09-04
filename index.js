const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then (res=> res.json()) //returning json data from response
    .then ((json) => displayLessons(json.data))
};
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
    btnDiv.innerHTML = `<button class="btn btn-outline btn-primary" href="">
                        <i class="fa-solid fa-book-open">
                        </i> Lesson - ${lesson.level_no}
                        </button>`
    // step:4: append into the container
    levelContainer.appendChild(btnDiv);  
    }
}
loadLessons();
