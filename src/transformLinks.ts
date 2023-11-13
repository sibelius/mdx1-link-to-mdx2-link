export const transformLinks = (markdownContent: string) => {

  const urlOrBracketedTextRegex = /<(https?:\/\/[^\s>]+|[^>\s]+)>/g;

  const transformedContent = markdownContent.replace(urlOrBracketedTextRegex, (match, group1) => {
    if (group1.startsWith('http://') || group1.startsWith('https://')) {
      return `[${group1}](${group1})`;
    } else {
      return match;
    }
  });

  return transformedContent;
};