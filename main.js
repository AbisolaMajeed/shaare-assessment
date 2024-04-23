document.addEventListener("DOMContentLoaded", function () {
    var toggleInput = document.getElementById('toggleDetails');
    var detailsList = document.getElementById('detailsList');
    var collapseStandardCleaning = document.getElementById('collapseStandardCleaning');
    var bookingForm = document.getElementById('bookingForm');
    var submitButton = document.querySelector('.btn');
    var cleaningCheckboxes = document.querySelectorAll('.form-check-input[name="cleaningOption"]');
    var warningText = document.getElementById('warningText');

    toggleInput.addEventListener('change', function () {
        if (this.checked) {
            detailsList.classList.remove('collapsed');
            collapseStandardCleaning.classList.add('show');
        } else {
            detailsList.classList.add('collapsed');
            collapseStandardCleaning.classList.remove('show');
        }
        updateButtonState();
    });

    var hideDetailsLabel = document.getElementById('hideDetails');
    hideDetailsLabel.addEventListener('click', function (event) {
        event.stopPropagation();
        detailsList.classList.add('collapsed');
        collapseStandardCleaning.classList.remove('show');
        updateButtonState();
    });

    cleaningCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updateButtonState();
        });
    });

    function updateButtonState() {
        var cleaningCount = 0;

        cleaningCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                cleaningCount++;
            }
        });

        if (cleaningCount > 1) {
            warningText.style.color = "#FF0000"; // Highlight warning text in red
        } else {
            warningText.style.color = "#024751"; // Reset to default color
        }

        submitButton.disabled = cleaningCount !== 1;
    }

    // bookingForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     alert('Form submitted!');
    // });
});
