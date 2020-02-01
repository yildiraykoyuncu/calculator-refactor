/*
When deployed, this script injects a div at the top of your body with three buttons:

* _validate HTML_ & _validate CSS_: When clicked they open a new tab that validates your HTML or CSS source code using w3.org validation tools. (this is for you, but also to help your coaches evaluate your assignment)
* _view source_: this button opens to the repository if the project is hosted on github pages
* _development strategy_: This opens to your`development-strategy.md` page so someone visiting your site can easily see your wireframe and how you planned your work.
*/

if (window.location.href.indexOf('http') !== -1) {
  window.onload = () => {
    const validateContainer = document.createElement('div');
    validateContainer.style = 'text-align:center;';

    const validateHTML = document.createElement('button');
    validateHTML.innerHTML = 'validate HTML';
    validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateHTML);

    const validateCSS = document.createElement('button');
    validateCSS.innerHTML = 'validate CSS';
    validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateCSS);

    if (window.location.origin.indexOf('.github.io') !== -1) {
      const userName = window.location.href.split('/')[2].split('.')[0];
      const repoName = window.location.href.split('/')[3];
      const viewSource = document.createElement('button');
      viewSource.innerHTML = 'view source';
      viewSource.onclick = () => window.open('https://github.com/' + userName + '/' + repoName, '_blank');
      validateContainer.appendChild(viewSource);
    }

    const developmentStrategyButton = document.createElement('button');
    developmentStrategyButton.innerHTML = 'development strategy';
    developmentStrategyButton.onclick = () => window.open('./development-strategy', '_blank');
    validateContainer.appendChild(developmentStrategyButton);

    document.body.insertBefore(validateContainer, document.body.firstChild);
  }
}

