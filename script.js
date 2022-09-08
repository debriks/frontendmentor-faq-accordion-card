document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      // OPEN ACCORDION ITEM

      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          console.log("open accordion content");
          accCollapse.classList = "accordion__collapse collapse open";
        }, 300);

        // CLOSE ACCORDION ITEM
      } else {
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          console.log("close accordion content");
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 300);
      }

      item.classList.toggle("open");

      accCollapse.classList.toggle("open");
    }
  });
});

// document.querySelectorAll(".accordion__question").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log("click");

//     // OPEN ACCORDION ITEM
//     // IF ITEM DOESN'T CONTAIN THE CLASS "OPEN"
//     // (the exclamation point inverts the if statement)

//     let accCollapse = item.nextElementSibling;

//     if (!item.classList.contains("open")) {
//       console.log("toggle acordion button");

//       // Get the height of collapsing item

//       accCollapse.style.display = "block";
//       let accHeight = accCollapse.clientHeight;
//       console.log(accHeight);

//       setTimeout(() => {
//         accCollapse.style.height = accHeight + "px"; // The element should have padding and not margin as the padding is included in the final height
//         accCollapse.style.display = "";
//       }, 1);

//       // Remove "collapse" and add "collapsing" to .accordion__collapse (sibling)
//       accCollapse.classList = "accordion__collapse collapsing";

//       // After x amount of time, remove "collapsing" class and add "collapse open" class
//       setTimeout(() => {
//         console.log("open accordion content");
//         accCollapse.classList = "accordion__collapse collapse open";
//       }, 300);
//       // 300ms like the time we set on the arrow to flip

//       // CLOSE ACCORDION ITEM
//     } else {
//       // IF ITEM DOESN'T HAVE CLASS "OPEN" :
//       // Remove "collapse open" from .accordion__collapse and add "collapsing"
//       accCollapse.classList = "accordion__collapse collapsing";

//       setTimeout(() => {
//         accCollapse.style.height = "0px";
//       }, 1);

//       // After x amount of time, remove "collapsing" class and add "collapse"
//       setTimeout(() => {
//         console.log("close accordion content");
//         accCollapse.classList = "accordion__collapse collapse";
//         accCollapse.style.height = "";
//       }, 300);
//     }

//     item.classList.toggle("open");

//     accCollapse.classList.toggle("open");
//   });
// });
