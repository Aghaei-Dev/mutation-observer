const targetNode = document.querySelector('ol')
const content = document.querySelector('#content')

const config = {
  attributes: true,
  childList: true,
  characterData: true,
}

const callback = (mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation)
    if (mutation.type === 'childList') {
      const listValues = Array.from(targetNode.children)
        .map((node) => node.innerHTML)
        .filter((html) => html !== '<br>')
      content.textContent = listValues.join('-')
    }
  })
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
