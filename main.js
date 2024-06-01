document.addEventListener('DOMContentLoaded', function() {
    const packages = [
        { id: 1, name: 'Paket Streaming', description: 'Kuota 10GB', price: 'Rp 15.000', image: 'package_a.png' },
        { id: 2, name: 'Paket Diskusi', description: 'Kuota 20GB', price: 'Rp 30.000', image: 'package_b.png' },
        { id: 3, name: 'Paket Shopping', description: 'Kuota 15GB', price: 'Rp 25.000', image: 'package_c.png' },
        { id: 4, name: 'Paket Onlyme', description: 'Kuota 5GB', price: 'Rp 10.000', image: 'package_d.png' },
        { id: 5, name: 'Paket Pelajar', description: 'Kuota 15GB', price: 'Rp 15.000', image: 'package_e.png' },
        { id: 6, name: 'Paket Komunikasi Sepuasnya', description: 'Kuota 15GB', price: 'Rp 20.000', image: 'package_f.png' },
    ];

    const packageList = document.getElementById('packageList');
    const formModal = new bootstrap.Modal(document.getElementById('formModal'));
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    const purchaseForm = document.getElementById('purchaseForm');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const selectedPackageInput = document.getElementById('selectedPackage');

    const confirmPhoneNumber = document.getElementById('confirmPhoneNumber');
    const confirmPackage = document.getElementById('confirmPackage');
    const confirmPurchase = document.getElementById('confirmPurchase');

    // Function to display packages
    function displayPackages() {
        packages.forEach(pkg => {
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card', 'h-100');

            const cardImage = document.createElement('img');
            cardImage.classList.add('card-img-top');
            cardImage.src = pkg.image;
            cardImage.alt = pkg.name;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = pkg.name;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = pkg.description;

            const cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'd-flex', 'justify-content-between', 'align-items-center');

            const price = document.createElement('span');
            price.classList.add('text-primary', 'fw-bold');
            price.textContent = pkg.price;

            const buyButton = document.createElement('button');
            buyButton.classList.add('btn', 'btn-primary');
            buyButton.textContent = 'Beli';
            buyButton.addEventListener('click', () => {
                selectedPackageInput.value = JSON.stringify(pkg);
                formModal.show();
            });

            cardFooter.appendChild(price);
            cardFooter.appendChild(buyButton);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);
            col.appendChild(card);

            packageList.appendChild(col);
        });
    }

    // Handle form submission
    purchaseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = phoneNumberInput.value;
        const selectedPackage = JSON.parse(selectedPackageInput.value);

        confirmPhoneNumber.textContent = phoneNumber;
        confirmPackage.textContent = `${selectedPackage.name} (${selectedPackage.description}) - ${selectedPackage.price}`;

        formModal.hide();
        confirmationModal.show();
    });

    // Handle purchase confirmation
    confirmPurchase.addEventListener('click', function() {
        // Simulate purchase process
        alert('Pembelian kuota berhasil!');
        confirmationModal.hide();
        purchaseForm.reset();
    });

    // Display packages on load
    displayPackages();
});
