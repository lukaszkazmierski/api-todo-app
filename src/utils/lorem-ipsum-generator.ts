import { LoremIpsum } from "lorem-ipsum";

export default class LoremIpsumGenerator {
  static shortLorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 1,
    },
    wordsPerSentence: {
      max: 4,
      min: 2,
    },
  });
}
