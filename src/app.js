document.addEventListener('DOMContentLoaded', function () {
    const campaignForm = document.getElementById('campaign-form');
    const campaignList = document.getElementById('campaign-list');

    campaignForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve form data
        const campaignName = document.getElementById('campaignName').value;
        const goalAmount = document.getElementById('goalAmount').value;

        // Create a new campaign element
        const campaignElement = document.createElement('div');
        campaignElement.classList.add('campaign-card');
        campaignElement.innerHTML = `
            <h3>${campaignName}</h3>
            <p>Goal: $${goalAmount}</p>
            <button>Donate</button>
        `;

        // Add the campaign to the campaign list
        campaignList.appendChild(campaignElement);

        // Clear the form
        campaignForm.reset();
    });
});
