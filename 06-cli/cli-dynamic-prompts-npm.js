// https://github.com/terkelg/prompts#readme
// $ npm install --save prompts

const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'dish',
    message: 'Do you like pizza?'
  },
  {
    type: prev => prev == 'pizza' ? 'text' : null,
    name: 'topping',
    message: 'Name a topping'
  }
];

(async () => {
  const response = await prompts(questions);
})();

