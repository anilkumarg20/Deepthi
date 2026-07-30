// AP TET General English Language II Question Pool
// Shuffled deterministically to generate 10 unique mock papers.

const englishL2Pool = [
    { q: "Select the sentence with the correct British English (UK) spelling:", options: ["The color of the center theater was green.", "The colour of the centre theatre was green.", "The color of the centre theater was green.", "The colour of the center theatre was green."], ans: 1, exp: "UK spellings retain 'colour' (not color), 'centre' (not center), and 'theatre' (not theater)." },
    { q: "Identify the antonym of the underlined word in context: 'The manager was highly <u>benevolent</u> to his employees.'", options: ["Generous", "Malevolent", "Indifferent", "Friendly"], ans: 1, exp: "Benevolent means kind and well-wishing. Its antonym is malevolent (wishing evil to others)." },
    { q: "Which word is a homophone for 'Complement'?", options: ["Compliment", "Compliance", "Complication", "Component"], ans: 0, exp: "Complement (to complete) and Compliment (praise) are homophones as they sound identical but differ in spelling and meaning." },
    { q: "What is the synonym of the word 'Abolish'?", options: ["Establish", "Nullify", "Promote", "Restore"], ans: 1, exp: "To abolish means to formally put an end to something, matching 'nullify' or 'cancel'." },
    { q: "Identify the correct phrasal verb: 'The meeting was _____ due to the heavy rain.'", options: ["called off", "called on", "called out", "called for"], ans: 0, exp: "The phrasal verb 'call off' means to cancel an event." },
    { q: "Select the correct plural form of the foreign word 'Syllabus':", options: ["Syllabuses", "Syllabi", "Syllabusses", "Both A and B"], ans: 3, exp: "Both 'syllabuses' (regular English plural) and 'syllabi' (Latin plural) are accepted forms." },
    { q: "Find the odd sound among the underlined letters: g<u>e</u>t, s<u>e</u>t, pr<u>e</u>tty, m<u>e</u>t.", options: ["get", "set", "pretty", "met"], ans: 2, exp: "In 'pretty', the underlined 'e' is pronounced as /ɪ/ (pritty), while in get, set, met it is pronounced as /e/." },
    { q: "How many speech sounds (phonemes) are there in the English language?", options: ["26", "40", "44", "48"], ans: 2, exp: "The English alphabet has 26 letters, but they produce 44 phonemes (sounds) in Received Pronunciation." },
    { q: "Identify the correct passive voice: 'Shut the gate.'", options: ["Let the gate shut.", "Let the gate be shut.", "Let the gate been shut.", "The gate was shut by let."], ans: 1, exp: "Imperative sentences starting with a verb are converted to passive using: Let + Object + be + V3." },
    { q: "Identify the correct indirect speech: Ravi said to Sita, 'Where are you going?'", options: ["Ravi asked Sita where she was going.", "Ravi asked Sita where was she going.", "Ravi told Sita where she was going.", "Ravi asked Sita that where she was going."], ans: 0, exp: "In Wh- questions, the conjunction is the Wh-word itself, and the word order becomes declarative (subject + verb)." },
    { q: "Choose the correct tag for the sentence: 'Let's have a party, ______?'", options: ["shall we?", "shan't we?", "don't we?", "will you?"], ans: 0, exp: "Sentences beginning with 'Let's' (Let us) take 'shall we?' as the question tag." },
    { q: "Identify the compound preposition in the sentence: 'He succeeded by dint of hard work.'", options: ["succeeded", "by dint of", "hard work", "of"], ans: 1, exp: "'by dint of' is a group of words functioning as a preposition, which makes it a compound/phrase preposition." },
    { q: "Complete the conditional sentence: 'If she had studied harder, she ________ the exam.'", options: ["would pass", "would have passed", "will pass", "passed"], ans: 1, exp: "Type III conditional uses: If + Past Perfect, would have + V3." },
    { q: "Which word represents the sound of a silent letter in 'Comb'?", options: ["c", "o", "m", "b"], ans: 3, exp: "The letter 'b' is silent in 'comb' (pronounced /kəʊm/)." },
    { q: "Which of the following is a pair of anagrams?", options: ["Principal - Principle", "Silent - Listen", "Write - Right", "Tear - Tier"], ans: 1, exp: "'Silent' and 'Listen' contain the exact same letters in a different order, making them anagrams." },
    { q: "Identify the noun clause in: 'I believe that honesty is the best policy.'", options: ["I believe", "that honesty is the best policy", "honesty is", "the best policy"], ans: 1, exp: "'that honesty is the best policy' acts as the object of the verb 'believe', making it a Noun Clause." },
    { q: "Choose the correct article: 'He is _____ honor to his country.'", options: ["a", "an", "the", "no article"], ans: 1, exp: "'Honor' starts with a silent 'h' and a vowel sound (/ɒ/), requiring the indefinite article 'an'." },
    { q: "What is the correct order of adjectives in: 'I bought a _____ bag.'", options: ["leather black small", "small black leather", "black small leather", "small leather black"], ans: 1, exp: "Adjective order: Size (small) -> Color (black) -> Material (leather)." },
    { q: "What is the term for a word denoting a collection of keys?", options: ["Bunch", "Flock", "Herd", "Pack"], ans: 0, exp: "A group of keys is referred to collectively as a 'bunch of keys'." },
    { q: "Identify the figure of speech: 'The waves danced beside them.'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], ans: 2, exp: "Giving the human quality of 'dancing' to non-human waves is Personification." },
    { q: "Choose the correct tag: 'I am a student, ______?'", options: ["am I?", "am not I?", "aren't I?", "don't I?"], ans: 2, exp: "The positive statement 'I am' takes the exceptional negative tag 'aren't I?'." },
    { q: "What is the term for a person who does not believe in the existence of God?", options: ["Theist", "Atheist", "Agnotic", "Monotheist"], ans: 1, exp: "An atheist is someone who lacks belief in the existence of God." },
    { q: "Identify the type of sentence: 'Although he was wealthy, he was unhappy.'", options: ["Simple", "Compound", "Complex", "Assertive"], ans: 2, exp: "A sentence with one independent clause and one subordinate clause starting with 'Although' is a Complex sentence." },
    { q: "Identify the correct preposition: 'She is good _____ mathematics.'", options: ["in", "at", "for", "with"], ans: 1, exp: "The adjective 'good' takes the preposition 'at' when referring to skills/subjects." },
    { q: "In a dictionary entry, the words printed at the top of each page showing the first and last entries are called:", options: ["Index words", "Guide words", "Headwords", "Root words"], ans: 1, exp: "Guide words indicate the alphabetical range of words on that specific page." },
    { q: "Which vowel sound is represented by /aɪ/ in phonetic transcription?", options: ["Monophthong", "Diphthong", "Consonant", "Voiceless sound"], ans: 1, exp: "/aɪ/ is a gliding vowel sound or Diphthong (as in the word 'buy')." },
    { q: "Which word represents a correct collocation?", options: ["make a mistake", "do a mistake", "give a mistake", "create a mistake"], ans: 0, exp: "We collocate 'make' with 'mistake' (to make a mistake)." },
    { q: "What is the study of speech sounds called?", options: ["Phonetics", "Syntax", "Semantics", "Morphology"], ans: 0, exp: "Phonetics is the systematic branch of linguistics studying production and transmission of speech sounds." },
    { q: "Identify the simple sentence:", options: ["He worked hard and passed.", "Having worked hard, he passed.", "He passed because he worked hard.", "He worked hard, so he passed."], ans: 1, exp: "A simple sentence contains exactly one finite clause (having worked hard is a non-finite participial phrase)." },
    { q: "Identify the spelling anomaly variant that is American English (US):", options: ["Honour", "Honor", "Honoure", "Honnour"], ans: 1, exp: "American English drops the 'u' in words like 'honor', 'color', and 'favor'." }
];

// Helper to get deterministic questions for a test paper
function getDeterministicL2Questions(pool, count, seed) {
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = (i * 9 + seed * 17) % (i + 1);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.slice(0, count);
}

const englishL2MockTests = {};
for (let i = 1; i <= 10; i++) {
    englishL2MockTests[`test${i}`] = getDeterministicL2Questions(englishL2Pool, 30, i);
}

window.englishL2MockTests = englishL2MockTests;
