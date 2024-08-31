// function popUpOpen() {
//   console.log("click");
//   document.querySelector(".pop_up").classList.toggle("visible");
// }

function getData() {
  const outherDiv = document.querySelector(".countries_list");

  try {
    const response = fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,translations,population"
    );

    response
      .then((response) => {
        if (response.ok) {
          const jsonData = response.json();
          console.log(jsonData);
          return jsonData;
        }
      })
      .then((json) => {
        // выведем данные
        const innerDiv = json.map(
          (item, index) => `
        <div class="over">
            <div class="inner" >
               <div class="inner_img">
                 <img src=${item.flags.png} alt=${item.flags.alt}>
               </div>
               <span class="countries_list_item">
                ${item.translations.rus.common}
               </span>
            </div>
          <div class="pop_up">
            <div class="pop_up_inner">
               <div class="inner_img">
                <img src=${item.flags.png} alt=${item.flags.alt}>
               </div>
               <span class="countries_list_item">
                ${item.translations.rus.official}
               </span>
               <span class="countries_list_item">
                Столица - ${item.capital[0]}
               </span>
               <span class="countries_list_item"> 
                Население - ${item.population} человек
               </span>
                <button class="close_button">&times;</button>
              </div>
           </div>
        </div>
          
        `
        );
        outherDiv.innerHTML = innerDiv;
        var overs = Array.from(document.querySelectorAll(".over"));

        overs.forEach((item, index) => {
          const popUps = Array.from(document.querySelectorAll(".pop_up"));
          item.onclick = () => popUps[index].classList.toggle("visible");
        });
      });
  } catch (error) {
    console.log("Error: " + err);
  }
}
getData();
