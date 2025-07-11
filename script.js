    const viewToggleButton = document.getElementById('viewToggle');
    const motherboardView = document.getElementById('motherboardView');
    const biosView = document.getElementById('biosView');

function openPopup(popupId) {
        document.getElementById(popupId).classList.add("open-popup");
    }

    function closePopup(popupId) {
        document.getElementById(popupId).classList.remove("open-popup");
    }


  viewToggleButton.addEventListener('click', () => {
        const motherboardActive = motherboardView.classList.contains('active-view');
        motherboardView.classList.toggle('active-view', !motherboardActive);
        motherboardView.classList.toggle('hidden-view', motherboardActive);
        biosView.classList.toggle('active-view', motherboardActive);
        biosView.classList.toggle('hidden-view', !motherboardActive);
        viewToggleButton.textContent = motherboardActive
            ? 'Switch to Motherboard View'
            : 'Switch to BIOS View';
    });

window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });