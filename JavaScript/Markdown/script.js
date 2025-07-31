function convertMarkdown() {
  const textValue = input.value;
  const lines = textValue.split("\n");
  let finalHTML = "";

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    const h1Regex = /^#\s/;
    const h2Regex = /^##\s/;
    const h3Regex = /^###\s/;
    const strongRegex = /(\*\*|__)(.+?)\1/g;
    const italicRegex = /(\*|_)(.+?)\1/g;
    const quoteRegex = /^>\s/;
    const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;

    if (quoteRegex.test(line)) {
      line = line.replace(quoteRegex, "");
      line = line.replace(strongRegex, "<strong>$2</strong>");
      line = line.replace(italicRegex, "<em>$2</em>");
      finalHTML += `<blockquote>${line}</blockquote>`;
    } else if (h3Regex.test(line)) {
      const cleanH3 = line.replace(h3Regex, "");
      const replacedH3 = cleanH3
        .replace(strongRegex, "<strong>$2</strong>")
        .replace(italicRegex, "<em>$2</em>");
      finalHTML += `<h3>${replacedH3}</h3>`;
    } else if (h2Regex.test(line)) {
      const cleanH2 = line.replace(h2Regex, "");
      const replacedH2 = cleanH2
        .replace(strongRegex, "<strong>$2</strong>")
        .replace(italicRegex, "<em>$2</em>");
      finalHTML += `<h2>${replacedH2}</h2>`;
    } else if (h1Regex.test(line)) {
      const cleanH1 = line.replace(h1Regex, "");
      const replacedH1 = cleanH1
        .replace(strongRegex, "<strong>$2</strong>")
        .replace(italicRegex, "<em>$2</em>");
      finalHTML += `<h1>${replacedH1}</h1>`;
    } else if (imgRegex.test(line)) {
      const imgOutput = line.replace(imgRegex, '<img alt="$1" src="$2">');
      finalHTML += imgOutput;
    } else if (linkRegex.test(line)) {
      const linkOutput = line.replace(linkRegex, '<a href="$2">$1</a>');
      finalHTML += linkOutput;
    } else if (strongRegex.test(line)) {
      const strongOutput = line.replace(strongRegex, "<strong>$2</strong>");
      finalHTML += strongOutput;
    } else if (italicRegex.test(line)) {
      const italicOutput = line.replace(italicRegex, "<em>$2</em>");
      finalHTML += italicOutput;
    } else if (line.trim() !== "") {
      finalHTML += `<p>${line}</p>`;
    }
  }

  return finalHTML;
}
