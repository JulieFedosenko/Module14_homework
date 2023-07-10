//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
const parser = new DOMParser();


const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;


const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const listElement = xmlDOM.querySelector('list');
const studentElements = listElement.querySelectorAll('student');

const result = {
  list: [],
};

studentElements.forEach((studentElement) => {
  const nameElement = studentElement.querySelector('name');
  const firstNameElement = nameElement.querySelector('first');
  const lastNameElement = nameElement.querySelector('second');
  const ageElement = studentElement.querySelector('age');
  const profElement = studentElement.querySelector('prof');
  const langAttribute = nameElement.getAttribute('lang');

  const studentObj = {
    name: `${firstNameElement.textContent} ${lastNameElement.textContent}`,
    age: parseInt(ageElement.textContent),
    prof: profElement.textContent,
    lang: langAttribute,
  };

  result.list.push(studentObj);
});

console.log(result);
