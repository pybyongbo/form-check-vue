let checkingResult = {
  /* 
    realname: true/false
    idnumber: true/false
  */
};

// let

let oSubmitBtn = null;

export function createForm(info, state) {
  oSubmitBtn = document.querySelector(info.confirm);
  createFormCheck(info, state);
}

function createFormCheck(info, state) {
  for (let key in info) {
    let el = document.getElementsByName(key);

    if (info[key].hasOwnProperty('value')) {
      checkingResult[key] = false;
    }

    if (!el.length) continue;

    if (el.length === 1) {
      //处理的是: input[text] select textarea
      createSimpleFormElement(el[0], info[key], state);
    } else {
      // 处理的是 radio checkbox
      createComplexFormElement(el, info[key], state);
    }
  }

  // console.log(checkingResult);
  oSubmitBtn.addEventListener(
    'click',
    (e) => handleSubmit(e, info, state),
    false
  );
}

function createSimpleFormElement(el, info, state) {
  switch (el.tagName.toLowerCase()) {
    case 'input':
    case 'textarea':
      el.addEventListener('input', (e) => handleInput(e, info, state), false);
      break;
    case 'select':
      el.addEventListener('change', (e) => handleInput(e, info, state), false);
  }
}

function createComplexFormElement(collection, info, state) {
  collection.forEach((el) => {
    el.addEventListener('change', (e) => handleInput(e, info, state), false);
  });
}

function handleSubmit(e, info, state) {
  e.preventDefault();

  const _info = {};

  for (let k in info) {
    if (info[k].hasOwnProperty('value')) {
      _info[k] = info[k].value;
    }
  }
  // console.log('_info',_info);
  info.submit(_info, state);
}

function handleInput(e, info, state) {
  const { name, value, oIcon, oWran } = getElements(e);

  if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      info.value = [...info.value, value];
    } else {
      info.value = info.value.filter((v) => v !== value);
    }
  } else {
    info.value = value;
  }

  // info.value = value;
  state && (state[name] = info.value);

  const isPass = info.regular(info.value);

  checkingResult[name] = isPass;

  oIcon.style.display = isPass ? 'inline-block' : 'none';
  oWran.innerText = isPass ? '' : info.mark;

  typeof info.listener === 'function' && info.listener(info);

  getCheckingResult();
}

function getElements(e) {
  const tar = e.target;
  const { value, name } = tar;
  const parentNode = tar.parentNode;
  const oIcon = parentNode.querySelector('.fa');
  const oWran = parentNode.querySelector('.warn');

  return {
    name,
    value,
    oIcon,
    oWran,
  };
}

// 如果有false,就什么也不干,如果没有,就取消禁用
function getCheckingResult() {
  for (let k in checkingResult) {
    if (!checkingResult[k]) {
      oSubmitBtn.setAttribute('disabled', true);
      return false;
    }
  }
  oSubmitBtn.removeAttribute('disabled');
  return true;
}
