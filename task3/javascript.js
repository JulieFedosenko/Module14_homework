function handleButtonClick() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);
  
    if (number < 1 || number > 10) {
        document.getElementById('result').innerText = 'число вне диапазона от 1 до 10';
        return;
    }

    const url = `https://picsum.photos/v2/list?limit=${number}`;
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const imageContainer = document.getElementById('result');
            imageContainer.innerHTML = '';
            
            response.forEach(function(item) {
                const img = document.createElement('img');
                img.src = item.download_url;
                img.width = 200;
                img.height = 200;
                imageContainer.appendChild(img);
            });
        } else {
            document.getElementById('result').innerText = 'Ошибка при получении данных';
        }
    };
    
    xhr.onerror = function() {
        document.getElementById('result').innerText = 'Ошибка при отправке запроса';
    };
    
    xhr.open('GET', url, true);
    xhr.send();
}