





document.getElementById('donateNowButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const donationAmount = parseFloat(userInput);

  
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid positive number for the donation amount.');
        return;
    }

    
    const bdtAmountElement = document.getElementById('bdtAmount');
    const totalBDTElement = document.getElementById('totalBDT');


    const currentBDTInButton = parseFloat(bdtAmountElement.textContent.replace(' BDT', ''));
    const currentTotalBDT = parseFloat(totalBDTElement.textContent.replace(' BDT', ''));

  
    const newBDTInButton = currentBDTInButton + donationAmount;
    const newTotalBDT = currentTotalBDT + donationAmount;

    
    bdtAmountElement.textContent = `${newBDTInButton} BDT`;
    totalBDTElement.textContent = `${newTotalBDT} BDT`;


    document.getElementById('userInput').value = '';
});





const donationButton = document.getElementById('donationButton');
const historyButton = document.getElementById('historyButton');


donationButton.addEventListener('click', function () {
    donationButton.classList.toggle('clicked'); 
});


historyButton.addEventListener('click', function () {
    historyButton.classList.toggle('clicked'); 
});





