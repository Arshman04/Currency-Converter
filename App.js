document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');

    // Static exchange rates for major currencies (relative to USD)
    const exchangeRates = {
        USD: 1,        // US Dollar
        EUR: 0.92,     // Euro
        GBP: 0.78,     // British Pound
        INR: 83.20,    // Indian Rupee
        JPY: 145.00,   // Japanese Yen
        AUD: 1.57,     // Australian Dollar
        CAD: 1.35,     // Canadian Dollar
        CHF: 0.92,     // Swiss Franc
        CNY: 7.25,     // Chinese Yuan
        NZD: 1.68,     // New Zealand Dollar
        ZAR: 18.60,    // South African Rand
        SGD: 1.37,     // Singapore Dollar
        KRW: 1325.00,  // South Korean Won
        MXN: 17.50,    // Mexican Peso
        BRL: 4.98,     // Brazilian Real
        RUB: 96.00,    // Russian Ruble
        PKR: 285.00,   // Pakistani Rupee
        // Arab Currencies
        SAR: 3.75,     // Saudi Riyal
        AED: 3.67,     // UAE Dirham
        EGP: 30.85,    // Egyptian Pound
        QAR: 3.64,     // Qatari Riyal
        KWD: 0.31,     // Kuwaiti Dinar
        OMR: 0.38,     // Omani Rial
        BHD: 0.38,     // Bahraini Dinar
        LYD: 4.80,     // Libyan Dinar
        JOD: 0.71,     // Jordanian Dinar
        // Add more currencies and their exchange rates relative to USD here
    };

    // Conversion function
    convertButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        // Perform currency conversion
        const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
        const toCurrencySymbol = toCurrency.options[toCurrency.selectedIndex].getAttribute('data-symbol');
        
        resultDiv.textContent = `${amount} ${from} = ${toCurrencySymbol}${convertedAmount.toFixed(2)} ${to}`;
    });
});
