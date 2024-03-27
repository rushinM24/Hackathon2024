'use strict';

const keywordJson = document.getElementById('keywordJson');
const keywordSubmitBtn = document.getElementById('keywordSubmitBtn');

keywordSubmitBtn.addEventListener('click', () => {
    const keywordJsonAsJson = JSON.parse(keywordJson.value);

    console.log(keywordJsonAsJson.in_context_kw);
});

// console.log(keywordJson);