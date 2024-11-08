/**
 * Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
 */

function countWordOccurrences(
  sentenceInput: string,
  wordInput: string
): number {
  const sentenceToLowerCase = sentenceInput.toLowerCase();
  const wordToLowerCase = wordInput.toLowerCase();

  const wordCount = (
    sentenceToLowerCase.match(new RegExp(wordToLowerCase, 'g')) || []
  ).length;
   
  return wordCount;
}

// second approach using split and filter:
function countWordOccurrences2(
  sentenceInput: string,
  wordInput: string
): number {
  const sentenceToLowerCase = sentenceInput.toLowerCase();
  const wordToLowerCase = wordInput.toLowerCase();

  const newSentenceArray = sentenceToLowerCase.split(/\W+/);
  const matchedWordCount = newSentenceArray.filter(
    (word) => word === wordToLowerCase
  ).length;

  return matchedWordCount;
}


const result = countWordOccurrences2('Oh typeScript! I love typescript, its typescript', 'typescript');
console.log(result)
