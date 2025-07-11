 const viewtoggle = document.getElementById("viewToggle");
 const motherboardView = document.getElementById("div1");
 const biosView = document.getElementById("div2");
 
function openPopup(popupId) {
        document.getElementById(popupId).classList.add("open-popup");
    }

    function closePopup(popupId) {
        document.getElementById(popupId).classList.remove("open-popup");
    }


  viewtoggle.addEventListener("click", () => {
      
    const motherboardActive = motherboardView.classList.contains("active-view");

    motherboardView.classList.toggle("active-view", !motherboardActive);
    motherboardView.classList.toggle("hidden-view", motherboardActive);
    biosView.classList.toggle("active-view", motherboardActive);
    biosView.classList.toggle("hidden-view", !motherboardActive);

    viewtoggle.textContent = motherboardActive ? "Switch to Motherboard View" : "Switch to BIOS View";

  });

  document.addEventListener("keydown", (event => {
    if(event.key === "Escape" && biosView.classList.contains('active-view')) {
        viewtoggle.click();
        
    }
  }))