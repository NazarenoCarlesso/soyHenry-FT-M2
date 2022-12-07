var traverseDomAndCollectElements = function(matchFunc, startEl, resultSet = []) {
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    // console.log(startEl);
    resultSet.push(startEl);
  }
  let childs = startEl.childNodes;
  // childs.forEach((n) => { n.nodeType === Node.TEXT_NODE && n.remove(); });
  // SOLO RECORRE LOS HIJOS
  // childs.forEach((n) => { if (matchFunc(n)) resultSet.push(n); });
  // FUNCION RECURSIVA
  if (childs.length !== 0) {
    // console.log(`hijos: ${childs.length}`);
    childs.forEach((n) => {
      if (n.nodeType !== Node.TEXT_NODE)
      traverseDomAndCollectElements(matchFunc, n, resultSet);
    });
    // console.log(`resultSet: ${resultSet}`);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // console.log(`selector: ${selector}`);
  if (selector.match(/^#.*$/)) {
    // console.log('id');
    return 'id';
  }
  if (selector.match(/^\..*$/)) {
    // console.log('class');
    return 'class';
  }
  if (selector.match(/\./)) {
    // console.log('tag.class');
    return 'tag.class';
  }
  if (selector.match(/>/)) {
    // console.log('child');
    return 'child';
  }
  if (selector.match(/ /)) {
    // console.log('descendant');
    return 'descendant';
  }
  // console.log('tag');
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => {
      const id = selector.replace('#','');
      // console.log(`${element.id} === ${id}`);
      return element.id === id;
    }
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      const className = selector.replace('.','');
      const array = element.className.split(' ');
      let flag = false;
      array.forEach(element => {
        // console.log(`${element} === ${className}`);
        if (element === className) flag = true;
      });
      return flag;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      const [tagName, className] = selector.split('.');
      const array = element.className.split(' ');
      let flag = false;
      array.forEach(clase => {
        // console.log(`${clase} === ${className} AND ${element.tagName.toLowerCase()} === ${tagName}`);
        if (clase === className && element.tagName.toLowerCase() === tagName) flag = true;
      });
      return flag;
    }
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      const tag = selector;
      const tagName = element.tagName.toLowerCase();
      // console.log(`${tagName} === ${tag}`);
      return tagName === tag;
      /*
      for (const key in element) {
        console.log(`${key} = ${element[key]}`);
      }
      */
    }
  } else if (selectorType === "child") {
    matchFunction = (element) => {
      const [parent, child] = selector.split(' > ');
      // console.log(`parent: ${parent}, child: ${child}`);
      const tagName = element.tagName.toLowerCase();
      // console.log(`tagName: ${tagName}`);
      // console.log(`${tagName} === ${child}`);
      if (tagName === child) {
        const parentTag = element.parentNode.tagName.toLowerCase();
        // console.log(`${parentTag} === ${parent}`);
        return parentTag === parent;
      }
    }
  } else if (selectorType === "descendant") {
    matchFunction = (element) => {
      const [parent, child] = selector.split(' ');
      // console.log(`parent: ${parent}, child: ${child}`);
      const tagName = element.tagName.toLowerCase();
      // console.log(`tagName: ${tagName}`);
      // console.log(`${tagName} === ${child}`);
      if (tagName === child) {
        let parents = [];
        let parPoint = element.parentNode;
        while(parPoint !== document) {
          parents.push(parPoint.tagName.toLowerCase());
          parPoint = parPoint.parentNode;
        }
        // console.log(`parents: ${parents}`);
        let flag = false;
        parents.forEach(p => {
          // console.log(`${p} === ${parent}`);
          if (p === parent) flag = true;
        });
        return flag;
      }
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  // console.log(`elements: ${elements}, selectorMatchFunc: ${selectorMatchFunc}`);
  return elements;
};
