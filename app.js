const joins = document.getElementById("joinus")
const close = document.getElementById("close")
const closebtn = document.querySelector(".closebtn")
const popMain = document.querySelector(".pop-main")
const formBtn = document.getElementById("frm-btn")
const keep = document.getElementById("keep")
const dismis = document.getElementById("dismis")
const alert = document.querySelector(".custom-alert")

joins.addEventListener("click", function () {

    popMain.classList.add("active")
})

close.addEventListener("click", function () {
    alert.style.display = 'flex';
});

closebtn.addEventListener("click", function () {
    alert.style.display = 'none';
});
keep.addEventListener("click", function () {
    alert.style.display = 'none';
});
dismis.addEventListener("click", function () {
    alert.style.display = 'none';
    popMain.classList.remove("active")
});


popMain.addEventListener("click", function (e) {

    if (e.target == this) {
        popMain.classList.remove("active")
    }

})

formBtn.addEventListener("submit", (e) => {
    e.preventDefault()
})



//accordion section

const accHeader = document.querySelectorAll(".accordion-header")

accHeader.forEach(item => {
    item.addEventListener("click", function () {

        let accActive = document.querySelector(".active")
        console.log(accActive);


        if(
            accActive && accActive != this
        ){
            accActive.classList.remove("active")
            accActive.nextElementSibling.style.height = 0
        }



        item.classList.toggle('active')

        if (
            item.classList.contains("active")

        ) {
            item.nextElementSibling.style.height = "auto"
        }  else{
            item.nextElementSibling.style.height = "0px"
        }

    })

});














const allAccurdion = document.querySelectorAll('.accordion-titel');

allAccurdion.forEach((item) => {
  item.addEventListener('click', function (e) {
    const currentActiveItem = document.querySelector('.active');
    console.log(currentActiveItem);
    console.log(this);

    if (currentActiveItem && currentActiveItem != this) {
      currentActiveItem.classList.remove('active');
      currentActiveItem.nextElementSibling.style.height = 0;
    }
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      this.nextElementSibling.style.height =
        this.nextElementSibling.scrollHeight + 'px';
    } else {
      this.nextElementSibling.style.height = 0;
    }
  });
});
