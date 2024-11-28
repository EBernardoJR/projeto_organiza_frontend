document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('investment-form');
    const investmentList = document.getElementById('investment-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('investment-name').value;
        const amount = parseFloat(document.getElementById('investment-amount').value);
        const earnings = parseFloat(document.getElementById('investment-earnings').value);

     
        if (!name || isNaN(amount) || isNaN(earnings)) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        
        const listItem = document.createElement('li');
        listItem.textContent = `Investimento: ${name} | Valor Investido: R$${amount.toFixed(2)} | Ganho Obtido: R$${earnings.toFixed(2)}`;

        
        investmentList.appendChild(listItem);

       
        form.reset();
    });
});
