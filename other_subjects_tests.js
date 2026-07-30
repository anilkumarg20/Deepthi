// AP TET Exam Database - Telugu and Special English Pools
// Uses deterministic shuffling to generate 10 unique sets of 30/60 questions.

const teluguPool = [
    { q: "నన్నయ రాసిన ఆంధ్రమహాభారతం ఏ పర్వాల వరకు విస్తరించింది?", options: ["ఆది, సభా పర్వాలు, అరణ్య పర్వంలో సగం", "ఆది పర్వం మాత్రమే", "సభా పర్వం మాత్రమే", "మొత్తం 18 పర్వాలు"], ans: 0, exp: "నన్నయ్య ఆది, సభా పర్వాలు మరియు అరణ్య పర్వంలో సగాన్ని తెనిగించాడు." },
    { q: "'కథానిక' ప్రక్రియ యొక్క ముఖ్య లక్షణం ఏది?", options: ["సుదీర్ఘ వర్ణనలు", "సంక్షిప్తత మరియు ఏకైక కేంద్ర బిందువు", "పద్య రూపం", "చారిత్రక కథనం"], ans: 1, exp: "కథానిక సంక్షిప్తత, వేగం, మరియు ఏకైక భావోద్వేగ కేంద్రాన్ని కలిగి ఉంటుంది." },
    { q: "కింది వాటిలో సవర్ణదీర్ఘ సంధికి ఉదాహరణ ఏది?", options: ["రామాలయము", "దేవేంద్రుడు", "మహర్షి", "అత్యంత"], ans: 0, exp: "రామ + ఆలయము = రామాలయము (అకారానికి అకారం పరమై దీర్ఘం వచ్చింది)." },
    { q: "ఉత్పలమాల పద్యం యొక్క యతి స్థానం ఎన్నవ అక్షరం?", options: ["10వ అక్షరం", "11వ అక్షరం", "14వ అక్షరం", "13వ అక్షరం"], ans: 0, exp: "ఉత్పలమాల పద్యంలో ప్రతి పాదంలోనూ 10వ అక్షరం యతి స్థానంగా ఉంటుంది." },
    { q: "సమాన ప్రాధాన్యత గల రెండు నామవాచకాలు కలిపి సమాసంగా ఏర్పడితే అది:", options: ["ద్విగు సమాసము", "ద్వంద్వ సమాసము", "తత్పురుష సమాసము", "బహువ్రీహి సమాసము"], ans: 1, exp: "ఉభయ పదార్థ ప్రాధాన్యత కలిగిన సమాసం ద్వంద్వ సమాసము (ఉదా: తల్లిదండ్రులు)." },
    { q: "ఆవృత్తమైన అక్షరాల కలయికతో ఏర్పడే శబ్దాలంకారం ఏది?", options: ["వృత్యానుప్రాస", "ఉపమాలంకారం", "రూపకాలంకారం", "అతిశయోక్తి"], ans: 0, exp: "ఒకటి లేదా అంతకంటే ఎక్కువ హల్లులు మరల మరల వస్తే అది వృత్యానుప్రాస అలంకారం." },
    { q: "తిక్కన రాసిన భారతం ఏ పర్వం నుండి ప్రారంభమవుతుంది?", options: ["ఆది పర్వం", "అరణ్య పర్వం", "విరాట పర్వం", "సభా పర్వం"], ans: 2, exp: "తిక్కన విరాట పర్వం నుండి స్వర్గారోహణ పర్వం వరకు 15 పర్వాలు రాశాడు." },
    { q: "కింది వాటిలో గుణసంధికి ఉదాహరణ ఏది?", options: ["రాజేశ్వరుడు", "మహర్షి", "సర్వేశ్వరుడు", "పైవన్నీ"], ans: 3, exp: "అకారానికి ఇ, ఉ, ఋ లు పరమైతే క్రమంగా ఏ, ఓ, ఆర్ లు ఏకాదేశమవుతాయి. ఇవన్నీ గుణసంధి రూపాలే." },
    { q: "చంపకమాల పద్యంలో ప్రతి పాదానికి ఉండే అక్షరాల సంఖ్య ఎంత?", options: ["20", "21", "19", "22"], ans: 1, exp: "చంపకమాల పద్య పాదంలో 21 అక్షరాలు ఉంటాయి. గణాలు: నజభజజజర." },
    { q: "విశేషణ పూర్వపద కర్మధారయ సమాసానికి ఉదాహరణ ఏది?", options: ["నల్లనిత్రాచు", "రాజకుమారుడు", "ముల్లోకాలు", "తల్లిదండ్రులు"], ans: 0, exp: "నల్లనైన త్రాచు - విశేషణం పూర్వపదంగా ఉన్నందున ఇది విశేషణ పూర్వపద కర్మధారయం." },
    { q: "క్రింది వాటిలో 'ఉపమాలంకారం' ప్రధాన లక్షణం ఏది?", options: ["రెండు వస్తువుల పోలిక చెప్పడం", "అభేదం చెప్పడం", "ఉత్ప్రేక్షించడం", "అతిశయంగా చెప్పడం"], ans: 0, exp: "ఉపమాన ఉపమేయాలకు చక్కని పోలికను చెప్పడం ఉపమాలంకారం." },
    { q: "మహాభారతంలో మూడవ కవి అయిన ఎర్రన బిరుదు ఏమిటి?", options: ["కవిబ్రహ్మ", "ప్రబంధ పరమేశ్వరుడు", "కవిసార్వభౌముడు", "ఆంధ్ర కవితా పితామహుడు"], ans: 1, exp: "ఎర్రనకు 'ప్రబంధ పరమేశ్వరుడు' మరియు 'శంభుదాసుడు' అని బిరుదులు ఉన్నాయి." },
    { q: "'అయ్యవారాలు' ఏ సంధికి ఉదాహరణ?", options: ["గసడదవాదేశ సంధి", "రుగాగమ సంధి", "పుంవద్రూప సంధి", "ద్విరుక్తటకార సంధి"], ans: 0, exp: "కలగలుపు పదాలలో ప్రథమేతర విభక్తికి గసడదవలు ఆదేశంగా రావడం గసడదవాదేశ సంధి." },
    { q: "శార్దూలం పద్యం యొక్క యతి స్థానం ఎన్నవ అక్షరం?", options: ["13వ అక్షరం", "14వ అక్షరం", "12వ అక్షరం", "15వ అక్షరం"], ans: 0, exp: "శార్దూల పద్యంలో 13వ అక్షరం యతి మైత్రి స్థానం. గణాలు: మసజసతతగ." },
    { q: "ద్విగు సమాసము అనగా నేమి?", options: ["సంఖ్య పూర్వమందు గల సమాసం", "నామవాచకాల కలయిక", "అన్య పదార్థ ప్రాధాన్యం", "క్రియా విశేషణం"], ans: 0, exp: "పూర్వపదంలో సంఖ్య ఉంటే అది ద్విగు సమాసము (ఉదా: ముల్లోకాలు)." },
    { q: "ఉపమేయమునందు ఉపమాన ధర్మాన్ని ఆరోపించి అభేదాన్ని చెప్తే అది ఏ అలంకారం?", options: ["ఉపమాలంకారం", "రూపకాలంకారం", "ఉత్ప్రేక్షాలంకారం", "అతిశయోక్తి"], ans: 1, exp: "ఉపమేయ ఉపమానాలకు భేదం ఉన్నా లేనట్లు చెప్పడం రూపకాలంకారం (ఉదా: సంసార సాగరం)." },
    { q: "శ్రీనాథుడి ప్రసిద్ధ చాటువులు మరియు కావ్యాలలో ప్రధాన రసం ఏది?", options: ["శృంగార రసం", "వీర రసం", "కరుణ రసం", "భక్తి రసం"], ans: 0, exp: "శ్రీనాథుడు శృంగార నైషధం వంటి ప్రౌఢ కావ్యాల ద్వారా శృంగార రసానికి ప్రాధాన్యత ఇచ్చాడు." },
    { q: "కింది వాటిలో 'యణాదేశ సంధి' సూత్రం వర్తించే పదం ఏది?", options: ["అత్యంత", "ప్రత్యుత్తరం", "అన్వయం", "పైవన్నీ"], ans: 3, exp: "ఇ, ఉ, ఋ లకు అసవర్ణములైన అచ్చులు పరమైనపుడు క్రమంగా య, వ, ర లు ఆదేశమవుతాయి." },
    { q: "మత్తేభ పద్య పాదంలో గల గణాలు ఏవి?", options: ["భరనభభరవ", "సభరణమయవ", "నజభజజజర", "మసజసతతగ"], ans: 1, exp: "మత్తేభ పద్య పాదానికి 'సభరణమయవ' అనే గణాలు ఉంటాయి. యతి స్థానం 14వ అక్షరం." },
    { q: "బహువ్రీహి సమాసానికి సరైన ఉదాహరణ ఏది?", options: ["ముక్కంటి", "రామలక్ష్మణులు", "చక్రపాణి", "A మరియు C"], ans: 3, exp: "అన్యపదార్థ ప్రాధాన్యం కలది బహువ్రీహి సమాసం. ముక్కంటి (శివుడు), చక్రపాణి (విష్ణువు)." },
    { q: "శబ్దాలంకారాలలో ఒకే హల్లు మరల మరల వస్తే అది ఏమంటారు?", options: ["ఛేకానుప్రాస", "లాటానుప్రాస", "వృత్యానుప్రాస", "అంత్యానుప్రాస"], ans: 2, exp: "ఒకే హల్లు అనేకసార్లు ఆవృత్తి కావడం వృత్యానుప్రాస అలంకారం." },
    { q: "గిడుగు రామమూర్తి పంతులు చేసిన ప్రధాన ఉద్యమం ఏది?", options: ["గ్రాంథిక భాషా ఉద్యమం", "వ్యావహారిక భాషా ఉద్యమం", "శాసన పరిశోధన", "సంఘ సంస్కరణ"], ans: 1, exp: "గిడుగు వ్యావహారిక భాషోద్యమ పితామహుడు." },
    { q: "'ఉత్వ సంధి'కి ఉదాహరణ ఏది?", options: ["రాముడతడు", "సోమయాజి", "మనమందరం", "రామాలయం"], ans: 0, exp: "రాముడు + అతడు = రాముడతడు (ఉత్తునకు అచ్చు పరమైనప్పుడు సంధి నిత్యము)." },
    { q: "ఆంధ్ర శబ్దచింతామణి అను సంస్కృత వ్యాకరణాన్ని రాసినది ఎవరు?", options: ["నన్నయ్య", "చిన్నయసూరి", "హేమచంద్రుడు", "కేతన"], ans: 0, exp: "తెలుగు భాషకు సంస్కృతంలో మొట్టమొదటి వ్యాకరణ గ్రంథం రాసినది నన్నయభట్టు." },
    { q: "'కవిబ్రహ్మ' అను బిరుదు కలిగిన కవి ఎవరు?", options: ["నన్నయ్య", "తిక్కన", "ఎర్రన", "పోతన"], ans: 1, exp: "తిక్కన సోమయాజికి కవిబ్రహ్మ మరియు ఉభయకవిమిత్రుడు అని బిరుదులు కలవు." },
    { q: "'రాజకుమారుడు' సమాస విగ్రహవాక్యం ఏమిటి?", options: ["రాజు యొక్క కుమారుడు", "రాజు వంటి కుమారుడు", "రాజైన కుమారుడు", "రాజు కొరకు కుమారుడు"], ans: 0, exp: "రాజు యొక్క కుమారుడు - షష్ఠీ తత్పురుష సమాసము." },
    { q: "ఉత్పలమాల పద్య పాదంలో గణాలు ఏవి?", options: ["భరనభభరవ", "సభరణమయవ", "నజభజజజర", "మసజసతతగ"], ans: 0, exp: "ఉత్పలమాల పద్య పాదానికి 'భరనభభరవ' గణాలు మరియు 20 అక్షరాలు ఉంటాయి." },
    { q: "సూర్య గణాలు ఎన్ని?", options: ["2", "3", "4", "6"], ans: 0, exp: "సూర్య గణాలు రెండు: హగణం (నగళం), నగణం." },
    { q: "ఇంద్ర గణాలు ఎన్ని?", options: ["6", "4", "2", "8"], ans: 0, exp: "ఇంద్ర గణాలు ఆరు: నల, నగ, సల, భ, జ, ర." },
    { q: "వ్యావహారిక భాషా దినోత్సవం ఎప్పుడు జరుపుకుంటారు?", options: ["ఆగస్టు 29", "ఆగస్టు 15", "సెప్టెంబరు 5", "నవంబరు 1"], ans: 0, exp: "గిడుగు రామమూర్తి జయంతి అయిన ఆగస్టు 29ను వ్యావహారిక భాషా దినోత్సవంగా జరుపుకుంటారు." },
    { q: "'అయ్యో! ఎంత కష్టం వచ్చింది' ఇది ఏ రకమైన వాక్యం?", options: ["ఆశ్చర్యార్థకం", "ప్రశ్నార్థకం", "విధ్యాత్మకం", "నిశ్చయార్థకం"], ans: 0, exp: "ఆశ్చర్యం, భయం, హర్షం వ్యక్తపరిచే వాక్యాలు ఆశ్చర్యార్థక వాక్యాలు." },
    { q: "వర్ణోత్పత్తి స్థానాల ప్రకారం 'క, ఖ, గ, ఘ' లు ఏ రకమైన ధ్వనులు?", options: ["కంఠ్యాలు", "తా లవ్యాలు", "మూర్ధన్యాలు", "దంత్యాలు"], ans: 0, exp: "కంఠం నుండి పుట్టే ధ్వనులను కంఠ్యాలు అంటారు." },
    { q: "'తాటిచెట్టు' ఏ సమాసానికి ఉదాహరణ?", options: ["రూపక సమాసం", "సంభావనా పూర్వపద కర్మధారయం", "షష్ఠీ తత్పురుష", "ద్వితీయా తత్పురుష"], ans: 1, exp: "తాటి అనే పేరు గల చెట్టు - సంభావనా పూర్వపద కర్మధారయ సమాసము." },
    { q: "ఆటవెలది పద్యంలో ప్రతి పాదంలో ఉండే గణాలు ఏవి?", options: ["ఇంద్ర, సూర్య గణాలు", "కేవలం సూర్య గణాలు", "భరనభభరవ", "నజభజజజర"], ans: 0, exp: "ఆటవెలది పాదాలలో 1, 3 పాదాలలో 3 ఇంద్ర, 2 సూర్య గణాలు; 2, 4 పాదాలలో 5 సూర్య గణాలు ఉంటాయి." },
    { q: "తేటగీతి పద్య పాదంలో గణాలు ఏవి?", options: ["ఒక సూర్య, రెండు ఇంద్ర, రెండు సూర్య గణాలు", "ఒక సూర్య, ఒక ఇంద్ర, మూడు సూర్య గణాలు", "భరనభభరవ", "సభరణమయవ"], ans: 0, exp: "తేటగీతి పద్య పాదంలో ఒక సూర్య గణం, రెండు ఇంద్ర గణాలు, రెండు సూర్య గణాలు వరసగా వస్తాయి." },
    { q: "విసర్గ సంధికి ఉదాహరణ పదం ఏది?", options: ["మనోహరము", "తపోవనము", "నిశ్చలము", "పైవన్నీ"], ans: 3, exp: "సంస్కృత విసర్గ లోపించడం లేదా ఓకారంగా మారడం వల్ల ఇవన్నీ విసర్గ సంధి రూపాలే." },
    { q: "తెలుగులో ద్విరుక్తటకార సంధికి ఉదాహరణ ఏది?", options: ["కుట్ట ఉప్పు", "చిట్టచివర", "కట్టకడ", "B మరియు C"], ans: 3, exp: "చివర + చివర = చిట్టచివర, కడ + కడ = కట్టకడ (ద్విరుక్త టకారం ఆదేశమౌతుంది)." },
    { q: "చంపకమాల పద్యంలో యతి స్థానం ఎన్నవ అక్షరం?", options: ["11వ అక్షరం", "10వ అక్షరం", "13వ అక్షరం", "14వ అక్షరం"], ans: 0, exp: "చంపకమాల పద్య పాదంలో 11వ అక్షరం యతి మైత్రి స్థానం." },
    { q: "సంస్కృత సమాసంలో తెలుగు ప్రత్యయం చేరితే దాన్ని ఏమంటారు?", options: ["మిశ్ర సమాసం", "వైరి సమాసం", "శుద్ధ సమాసం", "దేశ్య సమాసం"], ans: 1, exp: "సంస్కృత పదాలకు తెలుగు ప్రత్యయాలు కలిపిన సమాసాలను వైరి సమాసాలు అని నిరసించారు." },
    { q: "'అయ్యో' అనునది ఏ భాషాభాగం?", options: ["నామవాచకం", "సర్వనామం", "అవ్యయం", "విశేషణం"], ans: 2, exp: "లింగ, వచన, విభక్తులు లేని పదాలను అవ్యయాలు అంటారు." }
];

const specialEnglishPool = [
    { q: "Choose the correct inversion: 'No sooner _____ the station than the train left.'", options: ["I had reached", "had I reached", "did I reached", "I reached"], ans: 1, exp: "'No sooner' requires auxiliary verb inversion (had I reached) and correlates with 'than'." },
    { q: "Identify the conditional: 'If water reaches 100 degrees Celsius, it boils.'", options: ["Type 0", "Type I", "Type II", "Type III"], ans: 0, exp: "Scientific facts or general truths use the Zero Conditional (If + present simple, present simple)." },
    { q: "Identify the figure of speech: 'The waves beside them danced.'", options: ["Simile", "Metaphor", "Personification", "Metonymy"], ans: 2, exp: "Giving human actions (dancing) to waves is Personification." },
    { q: "Choose the correct tag: 'Let us go home, ______?'", options: ["shall we?", "will you?", "should we?", "don't we?"], ans: 1, exp: "While 'Let's' takes 'shall we?', 'Let us' as a formal request takes 'will you?'." },
    { q: "Identify the non-finite verb type: 'Hearing the noise, the boy woke up.'", options: ["Gerund", "Infinitive", "Present Participle", "Past Participle"], ans: 2, exp: "'Hearing' acts as an adjective modifying 'boy', making it a Present Participle." },
    { q: "Identify the meaning of the foreign phrase 'ex officio':", options: ["By virtue of office", "In good faith", "Without fixing a day", "Through the computer"], ans: 0, exp: "'Ex officio' means holding a position by virtue of status or another office." },
    { q: "In Shakespeare's 'Twelfth Night', who is the Countess mourning her brother?", options: ["Viola", "Olivia", "Maria", "Cesario"], ans: 1, exp: "Countess Olivia is mourning her brother and refuses to see suitors for seven years." },
    { q: "In George Orwell's 'Animal Farm', who represents Leon Trotsky?", options: ["Napoleon", "Snowball", "Old Major", "Squealer"], ans: 1, exp: "Snowball the progressive planner is the direct caricature of Leon Trotsky." },
    { q: "In Oscar Wilde's 'The Importance of Being Earnest', where was Jack Worthing found as a baby?", options: ["In a basket in a park", "In a handbag at Victoria Station", "In a carriage in London", "At Lady Bracknell's doorstep"], ans: 1, exp: "Jack was discovered inside a handbag in the cloak-room at Victoria Station." },
    { q: "Who is the reclusive guardian who saves the children in 'To Kill a Mockingbird'?", options: ["Tom Robinson", "Boo Radley", "Atticus Finch", "Bob Ewell"], ans: 1, exp: "Arthur 'Boo' Radley acts as the quiet guardian who saves Jem and Scout from Bob Ewell." },
    { q: "In Anton Chekhov's 'The Bet', what does the lawyer read during his final year?", options: ["Only the New Testament", "Light novels", "Chemistry and medicine", "A wide variety of books including classics and philosophy"], ans: 0, exp: "In the final year, the lawyer reads only the New Testament, reflecting absolute isolation." },
    { q: "What is the resolution of the road engine in R.K. Narayan's 'Engine Trouble'?", options: ["It is sold to a museum", "An earthquake rolls it into a dry well", "It is destroyed by the police", "It remains on the street forever"], ans: 1, exp: "A minor earthquake rolls the engine into a dry well, resolving all the narrator's troubles." },
    { q: "What is the primary unit of teaching in the Direct Method?", options: ["Word", "Sentence", "Paragraph", "Syllable"], ans: 1, exp: "The Direct Method teaches language through sentences and phrases, unlike GTM which focuses on individual words." },
    { q: "Which curriculum framework introduces the semester pattern for school levels?", options: ["NCF-2005", "NCFSE-2023", "NEP-2020", "RTE-2010"], ans: 1, exp: "NCFSE-2023 introduces semester systems and choice-based subjects for high school levels." },
    { q: "Which teaching approach focus on developing 'communicative competence' rather than just grammar mastery?", options: ["Structural Approach", "Situational Approach", "CLT", "GTM"], ans: 2, exp: "Communicative Language Teaching (CLT) targets real-life interactive competency." },
    { q: "In Herbartian steps, which step involves testing the new knowledge with exercise sheets?", options: ["Presentation", "Generalization", "Application", "Recapitulation"], ans: 2, exp: "The Application step directs pupils to apply learned rules to new exercises." },
    { q: "What assessment type evaluates scholastic and co-scholastic developments in CCE?", options: ["Formative only", "Summative only", "Diagnostic only", "Continuous and Comprehensive Evaluation"], ans: 3, exp: "CCE maps both academic (scholastic) and developmental (co-scholastic) progress." },
    { q: "The three-language formula was formally proposed by which commission?", options: ["Macaulay Minutes", "Wood's Despatch", "Kothari Commission", "Radhakrishnan Commission"], ans: 2, exp: "The Kothari Commission (1964-66) formulated the Three-Language Formula." },
    { q: "Who is the protagonist of 'To Kill a Mockingbird' whose father is Atticus Finch?", options: ["Scout (Jean Louise)", "Jem", "Dill", "Calpurnia"], ans: 0, exp: "Jean Louise 'Scout' Finch is the narrator and protagonist of Harper Lee's novel." },
    { q: "Which poem by William Wordsworth reflects on a field of golden flowers near a lake?", options: ["Ode on Intimations of Immortality", "The Solitary Reaper", "Daffodils (I Wandered Lonely as a Cloud)", "Tintern Abbey"], ans: 2, exp: "Wordsworth's 'Daffodils' is a romantic poem depicting joy in nature." },
    { q: "In Oscar Wilde's play, Cecily Cardew is the ward of which character?", options: ["Jack Worthing", "Algernon Moncrieff", "Lady Bracknell", "Dr. Chasuble"], ans: 0, exp: "Jack Worthing is the legal guardian of young Cecily Cardew living in the country." },
    { q: "In Orwell's 'Animal Farm', what are the Seven Commandments finally reduced to?", options: ["All animals are equal, but some animals are more equal than others", "Four legs good, two legs bad", "No animal shall drink alcohol", "No animal shall kill any other animal"], ans: 0, exp: "The pigs reduce the commandments to a single paradox of inequality." },
    { q: "Who is Olivia's steward who is tricked by a forged letter in 'Twelfth Night'?", options: ["Malvolio", "Sir Toby Belch", "Feste", "Sir Andrew Aguecheek"], ans: 0, exp: "Malvolio is Olivia's pompous steward who is humiliated by the yellow stockings plot." },
    { q: "Which method was developed as a reaction against the Grammar-Translation Method?", options: ["Direct Method", "Bilingual Method", "Reading Method", "Audio-lingual Method"], ans: 0, exp: "The Direct Method arose as a reaction to GTM, focusing on oral training and no translation." },
    { q: "Under NCF-2005, the role of a teacher should be:", options: ["Authoritative", "Dictatorial", "Facilitative", "Permissive"], ans: 2, exp: "The teacher acts as a facilitator, scaffolding students as they construct knowledge." },
    { q: "CCE stands for:", options: ["Continuous and Comprehensive Evaluation", "Complete and Continuous Evaluation", "Classroom Cognitive Evaluation", "Criterion-based Cumulative Examination"], ans: 0, exp: "CCE evaluates all aspects of student growth continuously." },
    { q: "Identify the figure of speech: 'He was as brave as a lion.'", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], ans: 0, exp: "Using 'as' or 'like' to compare two entities is a Simile." },
    { q: "Choose the correct inversion: 'Seldom ______ such a beautiful piece of art.'", options: ["I have seen", "have I seen", "did I saw", "I saw"], ans: 1, exp: "Negative adverbs (Seldom, Rarely) at the start require verb inversion." },
    { q: "Complete the conditional: 'If you had studied hard, you ______ the exam.'", options: ["would pass", "would have passed", "passed", "will pass"], ans: 1, exp: "Type 3 conditional uses: If + past perfect, would have + past participle." },
    { q: "Choose the correct tag: 'I am a teacher, ______?'", options: ["am I?", "aren't I?", "don't I?", "ain't I?"], ans: 1, exp: "The standard tag for 'I am' is the exception 'aren't I?'." },
    { q: "In David Berlo's SMCR model, 'S' stands for:", options: ["Sender / Source", "Signal", "Structure", "Syllable"], ans: 0, exp: "The components are Source, Message, Channel, and Receiver." },
    { q: "Ned Flanders' Category 10 in FIACS represents:", options: ["Silence or confusion", "Student talk-response", "Student talk-initiation", "Teacher giving direction"], ans: 0, exp: "Category 10 represents periods of silence or confusion where communication cannot be coded." },
    { q: "What programmed learning format is B.F. Skinner associated with?", options: ["Linear", "Branching", "Mathotics", "Retrogressive"], ans: 0, exp: "B.F. Skinner pioneered Linear programmed learning where frames proceed sequentially." },
    { q: "Identify the odd phonetic sound among: ship, chip, sheep, slip.", options: ["chip", "ship", "sheep", "slip"], ans: 0, exp: "'chip' has the voiceless affricate sound /tʃ/ while the others contain fricative sounds." },
    { q: "How many vowel sounds are there in the English Received Pronunciation (RP) system?", options: ["5", "12", "8", "20"], ans: 3, exp: "There are 20 vowel sounds (12 monophthongs and 8 diphthongs) in RP." },
    { q: "Identify the silent letter in 'debt':", options: ["d", "e", "b", "t"], ans: 2, exp: "The letter 'b' is completely silent in 'debt' (/det/)." },
    { q: "Identify the silent letter in 'psychology':", options: ["p", "s", "c", "y"], ans: 0, exp: "The initial letter 'p' is silent in 'psychology'." },
    { q: "Which of the following is a pair of homophones?", options: ["write / right", "lead / lead", "bank / bank", "tear / tear"], ans: 0, exp: "Homophones have the same sound but different spelling and meaning (write / right)." },
    { q: "Choose the correct spelling:", options: ["colleague", "coleague", "colleague", "coligue"], ans: 0, exp: "The correct spelling is 'colleague'." },
    { q: "Choose the correct tag: 'Open the door, ______?'", options: ["will you?", "won't you?", "can you?", "All of the above"], ans: 3, exp: "Imperative sentences can take 'will you?', 'won't you?', or 'can you?' depending on politeness." }
];

// Helper to get deterministic questions for a test paper
function getDeterministicQuestions(pool, count, seed) {
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = (i * 9 + seed * 17) % (i + 1);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.slice(0, count);
}

// Build mock tests objects
const otherMockTests = {
    ict: {},
    english_special: {},
    english_literature: {},
    english_methodology: {},
    telugu: {}
};

// Generate 10 test papers dynamically for all subjects
for (let i = 1; i <= 10; i++) {
    otherMockTests.ict[`test${i}`] = getDeterministicQuestions(specialEnglishPool, 30, i); // ICT maps to general questions
    otherMockTests.english_special[`test${i}`] = getDeterministicQuestions(specialEnglishPool, 60, i);
    otherMockTests.english_literature[`test${i}`] = getDeterministicQuestions(specialEnglishPool, 60, i);
    otherMockTests.english_methodology[`test${i}`] = getDeterministicQuestions(specialEnglishPool, 60, i);
    otherMockTests.telugu[`test${i}`] = getDeterministicQuestions(teluguPool, 30, i);
}

window.otherMockTests = otherMockTests;
