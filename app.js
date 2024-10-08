document.getElementById('leadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const serviceType = document.getElementById('serviceType').value;
    const budgetRange = document.getElementById('budgetRange').value;

    // Prepare data to send
    const leadData = { name, email, serviceType, budgetRange };

    try {
        // Send the data to the backend
        const response = await fetch('/api/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        });

        const result = await response.json();

        // Display success or error message
        const messageElement = document.getElementById('message');
        if (response.ok) {
            messageElement.textContent = 'Лидот е успешно испратен!';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = `Грешка: ${result.message}`;
            messageElement.style.color = 'red';
        }
    } catch (error) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = `Грешка при поврзување: ${error.message}`;
        messageElement.style.color = 'red';
    }
});
