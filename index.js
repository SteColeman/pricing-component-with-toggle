

document.getElementById("priceSwitch").onclick = function() {
var basicPrice = document.getElementById("basic");
var proPrice = document.getElementById("pro");
var masterPrice = document.getElementById("master");

  if (this.checked) {
    basicPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>19.99";
    proPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>39.99";
  } else {
    basicPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>199.99";
    proPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span class='dollarSign'>&dollar;</span>399.99";
  }
};
