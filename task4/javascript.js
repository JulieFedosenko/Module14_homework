function handleButtonClick() {
    const widthInput = document.getElementById('inputWidth');
    const heightInput = document.getElementById('inputHeight');
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
  
    if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
        document.getElementById('result').innerText = 'Одно из чисел вне диапазона от 100 до 300 или введено не число';
        return;
    }

    const url = `https://picsum.photos/${width}/${height}`;
    
    fetch(url)
        .then(response => {
            if (response.ok) {
                const img = document.createElement('img');
                img.src = response.url;
                img.width = width;
                img.height = height;
                document.getElementById('result').innerHTML = '';
                document.getElementById('result').appendChild(img);
            } else {
                document.getElementById('result').innerText = 'Ошибка при получении данных';
            }
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Ошибка при отправке запроса';
        });
}