function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n){
  const allRankedListItems = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < allRankedListItems.length; i++){
    allRankedListItems[i].innerHTML = (n + parseInt(allRankedListItems[i].innerHTML));
  }
}


 function deepestChild(){
  const lastElement = document.getElementById("grand-node").querySelectorAll("div");
  return lastElement[lastElement.length -1];
 }
