export const extractUniqueLines = (lines: string[]): string[] => {
  const lineSet = new Set<string>();
  for (const line of lines) {
	lineSet.add(line);
  }

  return Array.from(lineSet);
};
