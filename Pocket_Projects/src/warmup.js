
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.childNodes[0])
    }
    const newPTag = document.createElement("p");
    newPTag.textContent = string;
    htmlElement.appendChild(newPTag);
};

htmlGenerator('Party Time.', partyHeader);