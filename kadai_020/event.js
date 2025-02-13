const btnClick = document.getElementById('btn');
const textChange = document.getElementById('text');

btnClick.addEventListener('click', () => {
    textChange.textContent = 'ボタンをクリックしました'
});

