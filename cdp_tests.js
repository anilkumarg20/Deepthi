// AP TET Child Development & Pedagogy (CDP) - 150 High-Quality Exam Questions
// Distributed across 5 papers (30 questions each) matching the exact weight of the exam.
// Source: Analyzed from previous AP TET papers (2018-2024).

const cdpMockTests = {
    test1: [
        {
            q: "According to Elizabeth Hurlock, which of the following is the developmental task of infancy?",
            options: [
                "Learning to take solid foods",
                "Developing fundamental skills in reading, writing, and calculating",
                "Achieving personal independence",
                "Learning to live with a marriage partner"
            ],
            ans: 0,
            exp: "Infancy developmental tasks include learning to take solid foods, walking, talking, and control of elimination."
        },
        {
            q: "A child learns to control their head movement first, then their arms, and finally their legs. Which principle of development is demonstrated here?",
            options: [
                "Proximodistal principle",
                "Cephalocaudal principle",
                "Principle of integration",
                "Principle of interrelation"
            ],
            ans: 1,
            exp: "Cephalocaudal development proceeds from head to toe (head control precedes leg control)."
        },
        {
            q: "In Piaget's cognitive development theory, the child's ability to understand that quantity remains the same despite changes in shape or appearance is known as:",
            options: [
                "Object Permanence",
                "Conservation",
                "Egocentrism",
                "Schematization"
            ],
            ans: 1,
            exp: "Conservation is the understanding that mass, volume, or number remain unchanged despite changes in physical arrangement."
        },
        {
            q: "According to Kohlberg, at which stage of moral development does a person base their decisions on self-chosen ethical principles that are comprehensive and universal?",
            options: [
                "Stage 3: Good Boy-Nice Girl orientation",
                "Stage 4: Social System orientation",
                "Stage 5: Social Contract orientation",
                "Stage 6: Universal Ethical Principles"
            ],
            ans: 3,
            exp: "Stage 6 represents Post-conventional morality where ethics are guided by self-chosen, abstract universal principles."
        },
        {
            q: "According to Erik Erikson, the psychosocial crisis of 'Industry vs. Inferiority' corresponds to which stage of development?",
            options: [
                "Early Childhood",
                "Middle and Late Childhood (School Age)",
                "Adolescence",
                "Young Adulthood"
            ],
            ans: 1,
            exp: "School age children (6-12 years) face the crisis of Industry vs. Inferiority as they enter formal schooling."
        },
        {
            q: "Which level of Goleman's emotional intelligence represents the ability to read and understand the emotions of other people?",
            options: [
                "Self-Awareness",
                "Self-Regulation",
                "Social Awareness (Empathy)",
                "Relationship Management"
            ],
            ans: 2,
            exp: "Social awareness or empathy is the capacity to understand others' feelings and perspectives."
        },
        {
            q: "According to Sigmund Freud, if a child's oral needs are neglected or overindulged, they may develop fixation in the oral stage, manifesting in adulthood as:",
            options: [
                "Obsessive cleanliness",
                "Sarcasm, smoking, or nail-biting",
                "Extreme vanity and exhibitionism",
                "Difficulties in romantic relationships"
            ],
            ans: 1,
            exp: "Oral fixations manifest as habits involving the mouth, such as smoking, overeating, or verbal sarcasm."
        },
        {
            q: "Which of the following is a key characteristic of the 'Concrete Operational Stage' of Piaget?",
            options: [
                "Hypothetico-deductive reasoning",
                "Reversibility of thought",
                "Transductive reasoning",
                "Animistic thinking"
            ],
            ans: 1,
            exp: "Reversibility—the capacity to mentally reverse a series of operations—develops during the concrete operational stage (7-11 years)."
        },
        {
            q: "Erikson's crisis of 'Identity vs. Role Confusion' is primarily resolved in which developmental period?",
            options: [
                "Infancy",
                "Adolescence",
                "Adulthood",
                "Senescence"
            ],
            ans: 1,
            exp: "Adolescents (12-18 years) seek to define their personal identity, resolving the crisis of identity vs. role confusion."
        },
        {
            q: "In Kohlberg's theory, the stage where a child conforms to rules in order to avoid punishment is:",
            options: [
                "Heteronomous Morality (Stage 1)",
                "Individualism and Exchange (Stage 2)",
                "Mutual Interpersonal Expectations (Stage 3)",
                "Social Contract (Stage 5)"
            ],
            ans: 0,
            exp: "Stage 1 is characterised by obedience to avoid physical punishment from authority figures."
        },
        {
            q: "Which concept explains why a child who has learned to ride a tricycle can easily transition to riding a bicycle?",
            options: [
                "Lateral transfer of learning",
                "Positive transfer of learning",
                "Negative transfer of learning",
                "Zero transfer of learning"
            ],
            ans: 1,
            exp: "Positive transfer occurs when prior learning assists or facilitates learning in a new situation."
        },
        {
            q: "According to Watson, what are the three basic unlearned emotional reactions in infants?",
            options: [
                "Anger, Fear, Love",
                "Joy, Sadness, Disgust",
                "Surprise, Fear, Anger",
                "Anxiety, Shame, Pride"
            ],
            ans: 0,
            exp: "John B. Watson identified fear, rage (anger), and love as the three innate emotional responses in infants."
        },
        {
            q: "The rate of physical development is most rapid during which phase of life?",
            options: [
                "Infancy",
                "Early Childhood",
                "Adolescence",
                "Adulthood"
            ],
            ans: 0,
            exp: "Growth velocity is greatest during infancy (specifically the first year of life) compared to any later stage."
        },
        {
            q: "Which developmental researcher is famous for utilizing the 'Strange Situation' procedure to study infant attachment?",
            options: [
                "Mary Ainsworth",
                "John Bowlby",
                "Jean Piaget",
                "Diana Baumrind"
            ],
            ans: 0,
            exp: "Mary Ainsworth developed the Strange Situation to classify infant attachment styles (secure, avoidant, resistant)."
        },
        {
            q: "A child sees a plane flying in the sky and calls it a 'big bird'. According to Piaget, this process of fitting new information into an existing schema is called:",
            options: [
                "Accommodation",
                "Assimilation",
                "Equilibration",
                "Organization"
            ],
            ans: 1,
            exp: "Assimilation is interpreting new experiences in terms of existing cognitive schemas without changing the schema."
        },
        {
            q: "A developmental study that evaluates the same group of children at ages 5, 10, and 15 is using which design method?",
            options: [
                "Cross-Sectional Method",
                "Longitudinal Method",
                "Experimental Method",
                "Sequential Method"
            ],
            ans: 1,
            exp: "The Longitudinal Method tracks the same group of subjects repeatedly over an extended period."
        },
        {
            q: "A teacher rewards students with stickers immediately after they complete their reading logs. What Skinnerian schedule of reinforcement is this?",
            options: [
                "Fixed Interval",
                "Variable Interval",
                "Continuous Reinforcement",
                "Variable Ratio"
            ],
            ans: 2,
            exp: "Continuous reinforcement provides a reinforcer every single time the target behavior occurs."
        },
        {
            q: "In Freud's psychosexual theory, which stage is marked by the repression of sexual urges and focus on social/intellectual pursuits?",
            options: [
                "Anal Stage",
                "Phallic Stage",
                "Latency Stage",
                "Genital Stage"
            ],
            ans: 2,
            exp: "The Latency Stage (6 years to puberty) is a period of sexual calm where energy is redirected to schooling and friendships."
        },
        {
            q: "According to Gesell's maturational theory, development is primarily governed by:",
            options: [
                "Environmental stimulation",
                "Socio-cultural interaction",
                "Internal biological maturation",
                "Operant reinforcement"
            ],
            ans: 2,
            exp: "Arnold Gesell argued that physical and mental development is guided by an internal genetic blueprint (maturation)."
        },
        {
            q: "In Vygotsky's socio-cultural theory, the guidance and assistance provided by a more knowledgeable peer during learning is called:",
            options: [
                "Schema modification",
                "Zone of Proximal Development",
                "Scaffolding",
                "Self-regulation"
            ],
            ans: 2,
            exp: "Scaffolding is the temporary support structure provided by an adult or MKO to help a learner master a task."
        },
        {
            q: "What moral level is characterized by internalizing societal standards of right and wrong without questioning them?",
            options: [
                "Pre-conventional Level",
                "Conventional Level",
                "Post-conventional Level",
                "Transcendental Level"
            ],
            ans: 1,
            exp: "The Conventional Level (Stages 3 and 4) is characterized by conformity to social rules and expectations."
        },
        {
            q: "According to Daniel Goleman, what is the first step in emotional intelligence?",
            options: [
                "Self-Regulation",
                "Self-Awareness",
                "Empathy",
                "Social Skills"
            ],
            ans: 1,
            exp: "Goleman's model places Self-Awareness (knowing one's emotions) as the foundational baseline of EQ."
        },
        {
            q: "What refers to the biological unfolding of developmental milestones according to a genetic schedule?",
            options: [
                "Growth",
                "Maturation",
                "Learning",
                "Socialization"
            ],
            ans: 1,
            exp: "Maturation is the natural unfolding of genetically programmed developmental changes over time."
        },
        {
            q: "The principle that 'development is a continuous process' implies that:",
            options: [
                "It starts at birth and ends at adolescence",
                "It proceeds in fits and starts",
                "It is a lifelong process from conception to death",
                "It is entirely unpredictable"
            ],
            ans: 2,
            exp: "Development is a continuous, lifelong process ('womb to tomb') that never stops."
        },
        {
            q: "Which sensorimotor sub-stage (Piaget) involves the infant performing novel actions to see what happens (the 'little scientist' stage)?",
            options: [
                "Reflexes",
                "Primary Circular Reactions",
                "Secondary Circular Reactions",
                "Tertiary Circular Reactions"
            ],
            ans: 3,
            exp: "Tertiary Circular Reactions (12-18 months) are characterized by active experimentation and trial-and-error exploration."
        },
        {
            q: "Kohlberg's moral development theory is heavily influenced by which earlier developmental psychologist?",
            options: [
                "Jean Piaget",
                "Lev Vygotsky",
                "Sigmund Freud",
                "Erik Erikson"
            ],
            ans: 0,
            exp: "Lawrence Kohlberg based and expanded his stages of moral development on Jean Piaget's cognitive moral stages."
        },
        {
            q: "According to Erikson, what is the potential negative outcome if an infant does not receive consistent care and affection?",
            options: [
                "Guilt",
                "Mistrust",
                "Inferiority",
                "Role Confusion"
            ],
            ans: 1,
            exp: "Inconsistent care results in the development of mistrust during the first psychosocial stage (Trust vs. Mistrust)."
        },
        {
            q: "In Piaget's theory, the belief that non-living objects (like toys or wind) have feelings and intentions is called:",
            options: [
                "Egocentrism",
                "Centration",
                "Animism",
                "Transductive Reasoning"
            ],
            ans: 2,
            exp: "Animism is attributing lifelike qualities to inanimate objects, typical of the preoperational stage."
        },
        {
            q: "A cross-sectional study is one that:",
            options: [
                "Compares different age groups at the same point in time",
                "Tracks the same individuals for 20 years",
                "Manipulates variables in a laboratory setting",
                "Relies entirely on subjective self-reports"
            ],
            ans: 0,
            exp: "A cross-sectional design collects data from subjects of various ages at a single point in time to analyze age-related differences."
        },
        {
            q: "What refers to the quantitative aspect of development, such as increase in height and weight?",
            options: [
                "Development",
                "Growth",
                "Maturation",
                "Integration"
            ],
            ans: 1,
            exp: "Growth represents the physical, quantitative changes in size, weight, and structural dimensions."
        }
    ],
    test2: [
        {
            q: "Which type of play, according to Mildred Parten, occurs when a child plays independently with toys different from those used by nearby children, showing no interest in them?",
            options: [
                "Unoccupied Play",
                "Solitary Play",
                "Parallel Play",
                "Associative Play"
            ],
            ans: 1,
            exp: "Solitary play (2-3 years) is independent play with different toys, without interaction with nearby children."
        },
        {
            q: "A parent sets clear rules, discusses the reasons behind them, and listens to the child's perspective. According to Baumrind, this parenting style is:",
            options: [
                "Authoritarian",
                "Authoritative",
                "Permissive",
                "Rejecting-Neglectful"
            ],
            ans: 1,
            exp: "Authoritative parenting balances high demands with high responsiveness, communication, and warmth."
        },
        {
            q: "Stanley Hall described adolescence as a period of:",
            options: [
                "Identity and tranquility",
                "Storm and stress",
                "Logical equilibration",
                "Divergent play"
            ],
            ans: 1,
            exp: "G. Stanley Hall coined the phrase 'storm and stress' (Sturm und Drang) to describe adolescent emotional volatility."
        },
        {
            q: "A student who is angry at a teacher goes home and kicks their school bag across the room. Which ego defense mechanism is this?",
            options: [
                "Projection",
                "Displacement",
                "Rationalization",
                "Sublimation"
            ],
            ans: 1,
            exp: "Displacement is transferring emotions/impulses from their original target to a safer substitute target (the bag)."
        },
        {
            q: "Adolescent groups that are large, loosely structured, and based on shared reputations or activities (e.g. 'jocks', 'brains') are called:",
            options: [
                "Cliques",
                "Crowds",
                "Gangs",
                "Dyads"
            ],
            ans: 1,
            exp: "Crowds are large, reputation-based peer groups, whereas cliques are small, intimate friendship groups."
        },
        {
            q: "Which socialization type prepares individuals for future roles and positions before they actually occupy them?",
            options: [
                "Primary Socialization",
                "Anticipatory Socialization",
                "Resocialization",
                "Organizational Socialization"
            ],
            ans: 1,
            exp: "Anticipatory socialization is learning values and behaviors for future roles (e.g. teacher training)."
        },
        {
            q: "According to Parten, when children play alongside each other with similar toys but do not interact or share, they are engaged in:",
            options: [
                "Cooperative Play",
                "Parallel Play",
                "Onlooker Play",
                "Solitary Play"
            ],
            ans: 1,
            exp: "Parallel play is playing side-by-side with similar toys without active interaction or joint goals."
        },
        {
            q: "A student who fails an exam claims the teacher made the test unfairly difficult. Which defense mechanism is shown?",
            options: [
                "Rationalization",
                "Regression",
                "Reaction Formation",
                "Denial"
            ],
            ans: 0,
            exp: "Rationalization involves creating plausible, self-serving excuses to justify failures or protect self-esteem."
        },
        {
            q: "According to developmental stages, the 'Gang Age' corresponds to which phase?",
            options: [
                "Infancy",
                "Early Childhood",
                "Late Childhood",
                "Adulthood"
            ],
            ans: 2,
            exp: "Late childhood (6-12 years) is known as the gang age, where peer group affiliations become highly important."
        },
        {
            q: "What is the primary agent of primary socialization in a child's life?",
            options: [
                "School",
                "Family",
                "Media",
                "Peer Group"
            ],
            ans: 1,
            exp: "Family is the primary and most immediate agent of socialization in early childhood."
        },
        {
            q: "Which defense mechanism involves channeling socially unacceptable urges into productive, positive activities?",
            options: [
                "Sublimation",
                "Repression",
                "Identification",
                "Compensation"
            ],
            ans: 0,
            exp: "Sublimation redirects harmful impulses into positive, creative channels (e.g., painting out of anger)."
        },
        {
            q: "In which type of play do children actively share materials and talk to each other, but without structured division of labor or a common goal?",
            options: [
                "Parallel Play",
                "Associative Play",
                "Cooperative Play",
                "Solitary Play"
            ],
            ans: 1,
            exp: "Associative play involves conversation and sharing, but lack of structured goals or roles."
        },
        {
            q: "A parent who shows high warmth and responsiveness but imposes almost no rules or control represents which style?",
            options: [
                "Authoritarian",
                "Authoritative",
                "Permissive / Indulgent",
                "Neglectful"
            ],
            ans: 2,
            exp: "Permissive parents are warm and loving but set very few limits or demands on the child."
        },
        {
            q: "A person who adopts the characteristics or qualities of their role model to cope with insecurity is using:",
            options: [
                "Identification",
                "Projection",
                "Regression",
                "Displacement"
            ],
            ans: 0,
            exp: "Identification is a defense mechanism where a person model themselves on someone admired to reduce insecurity."
        },
        {
            q: "The tendency of adolescents to believe that everyone is watching and evaluating them is known as:",
            options: [
                "Personal Fable",
                "Imaginary Audience",
                "Identity Diffusion",
                "Egocentric Centration"
            ],
            ans: 1,
            exp: "The Imaginary Audience is the belief that others are constantly observing and evaluating one's behaviors."
        },
        {
            q: "What type of socialization occurs when an adult transitions into a completely new life environment (like entering prison or the military)?",
            options: [
                "Primary Socialization",
                "Anticipatory Socialization",
                "Resocialization",
                "Secondary Socialization"
            ],
            ans: 2,
            exp: "Resocialization involves learning entirely new values, habits, and rules for a radically different environment."
        },
        {
            q: "A child who starts sucking their thumb again after their new baby sibling is born is using which defense mechanism?",
            options: [
                "Regression",
                "Repression",
                "Projection",
                "Reaction Formation"
            ],
            ans: 0,
            exp: "Regression is retreating to behaviors of an earlier developmental stage to cope with anxiety."
        },
        {
            q: "According to Parten, what is the most advanced stage of social play where children negotiate roles and coordinate to achieve a shared goal?",
            options: [
                "Associative Play",
                "Cooperative Play",
                "Parallel Play",
                "Onlooker Play"
            ],
            ans: 1,
            exp: "Cooperative play involves organized activities, roles, rules, and a collective goal."
        },
        {
            q: "A parenting style characterized by complete indifference, neglect, and absence from the child's life is:",
            options: [
                "Permissive",
                "Uninvolved / Neglectful",
                "Authoritarian",
                "Autocratic"
            ],
            ans: 1,
            exp: "Uninvolved parenting is low in both control (demands) and responsiveness (warmth/affection)."
        },
        {
            q: "A student who hates their classmate behaves in an exaggeratedly friendly manner towards them. Which defense mechanism is this?",
            options: [
                "Projection",
                "Reaction Formation",
                "Regression",
                "Displacement"
            ],
            ans: 1,
            exp: "Reaction Formation expresses the exact opposite of one's unacceptable, hidden feelings."
        },
        {
            q: "According to Stanley Hall, the 'storm and stress' of adolescence is caused by:",
            options: [
                "Purely environmental problems",
                "Biological changes and societal expectations",
                "Failure of cognitive maturation",
                "Low emotional intelligence"
            ],
            ans: 1,
            exp: "Hall attributed storm and stress to biological maturation colliding with modern societal demands."
        },
        {
            q: "Which agent of socialization helps children learn horizontal relations of cooperation and competition among equals?",
            options: [
                "Family",
                "School",
                "Peer Group",
                "Media"
            ],
            ans: 2,
            exp: "Peer groups consist of individuals of similar age and status, promoting horizontal, reciprocal interactions."
        },
        {
            q: "A student attributes their own hostile feelings about a classmate by claiming, 'He hates me!' Which defense mechanism is this?",
            options: [
                "Projection",
                "Introjection",
                "Rationalization",
                "Displacement"
            ],
            ans: 0,
            exp: "Projection is attributing one's own unacceptable thoughts or motives onto another person."
        },
        {
            q: "In early childhood, play serves primarily as a vehicle for:",
            options: [
                "Physical, cognitive, and social development",
                "Learning formal school codes",
                "Escaping from parental control",
                "Achieving motor standardization"
            ],
            ans: 0,
            exp: "Play is the primary medium through which children develop physical, cognitive, social, and emotional skills."
        },
        {
            q: "Which defense mechanism involves keeping distressing thoughts buried in the unconscious mind?",
            options: [
                "Repression",
                "Suppression",
                "Denial",
                "Rationalization"
            ],
            ans: 0,
            exp: "Repression is the involuntary block of painful memories/urges from entering conscious awareness."
        },
        {
            q: "The belief of an adolescent that their experiences are completely unique and they are invulnerable to harm is:",
            options: [
                "Imaginary Audience",
                "Personal Fable",
                "Centration",
                "Identitary Diffusion"
            ],
            ans: 1,
            exp: "The Personal Fable leads adolescents to believe they are special, unique, and exempt from common rules of risk."
        },
        {
            q: "A parent who uses physical punishments and demands unquestioning obedience from a child is:",
            options: [
                "Authoritarian",
                "Authoritative",
                "Permissive",
                "Neglectful"
            ],
            ans: 0,
            exp: "Authoritarian parents enforce high demands, absolute control, and use punitive, unilateral discipline."
        },
        {
            q: "Which play type is characterized by the child sitting and looking, but not joining in or playing with toys?",
            options: [
                "Unoccupied Play",
                "Onlooker Play",
                "Solitary Play",
                "Parallel Play"
            ],
            ans: 0,
            exp: "Unoccupied play involves random movements or looking around without playing with anything specific."
        },
        {
            q: "A person who compensates for their lack of academic success by becoming an outstanding athlete is using:",
            options: [
                "Compensation",
                "Sublimation",
                "Projection",
                "Introjection"
            ],
            ans: 0,
            exp: "Compensation is making up for weaknesses in one area by excelling in another."
        },
        {
            q: "Peer influence is strongest during which developmental stage?",
            options: [
                "Early Childhood",
                "Late Childhood",
                "Adolescence",
                "Middle Adulthood"
            ],
            ans: 2,
            exp: "Peer conformity and influence peak during adolescence as teens seek independence from parents."
        }
    ],
    test3: [
        {
            q: "According to Howard Gardner's Theory of Multiple Intelligences, a botanist or a farmer exhibits high levels of:",
            options: [
                "Spatial Intelligence",
                "Naturalistic Intelligence",
                "Intrapersonal Intelligence",
                "Bodily-Kinesthetic Intelligence"
            ],
            ans: 1,
            exp: "Naturalistic intelligence is the ability to recognize, classify, and identify features of the environment (plants, animals)."
        },
        {
            q: "A child who has a learning difficulty in mathematics, struggling with numbers and calculations, has:",
            options: [
                "Dyslexia",
                "Dysgraphia",
                "Dyscalculia",
                "Dyspraxia"
            ],
            ans: 2,
            exp: "Dyscalculia is a learning disability affecting math comprehension and numerical calculations."
        },
        {
            q: "Which theory of intelligence proposes a 'g factor' (general intelligence) and 's factor' (specific intelligence)?",
            options: [
                "Thurstone's Primary Mental Abilities",
                "Spearman's Two-Factor Theory",
                "Gardner's Multiple Intelligences",
                "Sternberg's Triarchic Theory"
            ],
            ans: 1,
            exp: "Charles Spearman (1904) proposed general (g) and specific (s) factors of mental ability."
        },
        {
            q: "A teacher uses brainstorming to encourage students to think of multiple unique solutions to a problem. This encourages:",
            options: [
                "Convergent thinking",
                "Divergent thinking",
                "Rote memory",
                "Linear thinking"
            ],
            ans: 1,
            exp: "Divergent thinking is generating multiple creative solutions/ideas for a single open-ended prompt."
        },
        {
            q: "According to learning styles, a student who learns best by looking at diagrams, maps, and videos is a:",
            options: [
                "Visual learner",
                "Auditory learner",
                "Kinesthetic learner",
                "Tactile learner"
            ],
            ans: 0,
            exp: "Visual learners comprehend information better when presented through graphics, charts, and models."
        },
        {
            q: "Which term refers to the capacity to think about one's own thinking processes (self-monitoring and self-evaluation)?",
            options: [
                "Metacognition",
                "Cognitive dissonance",
                "Egocentrism",
                "Transference"
            ],
            ans: 0,
            exp: "Metacognition is 'thinking about thinking' or awareness and management of one's own cognitive habits."
        },
        {
            q: "A child with dyslexia primarily struggles with:",
            options: [
                "Reading and spelling",
                "Handwriting and fine motor skills",
                "Calculations",
                "Social interaction"
            ],
            ans: 0,
            exp: "Dyslexia is a reading disorder characterized by trouble reading and matching sounds with letters."
        },
        {
            q: "According to Sternberg's Triarchic Theory, intelligence consists of three aspects. Which of the following is NOT one of them?",
            options: [
                "Analytical (Componential)",
                "Creative (Experiential)",
                "Practical (Contextual)",
                "Social (Interpersonal)"
            ],
            ans: 3,
            exp: "Sternberg's model has Analytical, Creative, and Practical intelligences. Social is not a separate triarchic category."
        },
        {
            q: "A student who is gifted has an IQ score of at least:",
            options: [
                "90",
                "110",
                "130",
                "145"
            ],
            ans: 2,
            exp: "Giftedness is traditionally defined as an IQ score of 130 or higher (representing two standard deviations above the mean)."
        },
        {
            q: "What refers to the phenomenon where learning in one situation makes learning in another situation more difficult (e.g. learning French grammar interferes with Spanish grammar)?",
            options: [
                "Positive Transfer",
                "Negative Transfer",
                "Zero Transfer",
                "Bilateral Transfer"
            ],
            ans: 1,
            exp: "Negative transfer occurs when prior learning interferes with or hinders performance in a new context."
        },
        {
            q: "Which test is used to measure a student's creative capacity by evaluating fluency, flexibility, originality, and elaboration?",
            options: [
                "Binet-Simon IQ Test",
                "Torrance Tests of Creative Thinking (TTCT)",
                "Raven's Progressive Matrices",
                "Wechsler Intelligence Scale"
            ],
            ans: 1,
            exp: "The Torrance tests evaluate divergent thinking and creativity metrics."
        },
        {
            q: "A child who has difficulty with handwriting and expressing thoughts in writing has:",
            options: [
                "Dyscalculia",
                "Dysgraphia",
                "Dyslexia",
                "Aphasia"
            ],
            ans: 1,
            exp: "Dysgraphia is a learning disability characterized by writing difficulties (e.g., poor spelling, illegible handwriting)."
        },
        {
            q: "According to Guilford's Structure of Intellect (SOI) model, how many factors of intelligence were originally proposed?",
            options: [
                "120",
                "150",
                "180",
                "200"
            ],
            ans: 0,
            exp: "J.P. Guilford originally proposed 120 factors (5 operations x 4 contents x 6 products), later expanded to 150 and 180."
        },
        {
            q: "An auditory learner benefits most from which instructional method?",
            options: [
                "Silent reading of slides",
                "Lectures, discussions, and podcasts",
                "Hands-on science experiments",
                "Drawing diagrams"
            ],
            ans: 1,
            exp: "Auditory learners absorb information best through spoken words, lectures, and verbal communication."
        },
        {
            q: "The concept of 'emotional intelligence' was popularized globally by whom?",
            options: [
                "Alfred Binet",
                "Daniel Goleman",
                "Howard Gardner",
                "Lewis Terman"
            ],
            ans: 1,
            exp: "Daniel Goleman popularized EQ with his 1995 book, although Salovey and Mayer originally coined it."
        },
        {
            q: "A learner who struggles with motor coordination, such as tying shoelaces or holding a pencil, may have:",
            options: [
                "Dyslexia",
                "Dyscalculia",
                "Dyspraxia",
                "Dysgraphia"
            ],
            ans: 2,
            exp: "Dyspraxia (Developmental Coordination Disorder) affects motor skill planning and coordination."
        },
        {
            q: "The formula for calculating Intelligence Quotient (IQ) as modified by Lewis Terman is:",
            options: [
                "IQ = (Mental Age / Chronological Age) * 100",
                "IQ = (Chronological Age / Mental Age) * 100",
                "IQ = Mental Age + Chronological Age",
                "IQ = (Mental Age * Chronological Age) / 100"
            ],
            ans: 0,
            exp: "Terman adopted William Stern's quotient and multiplied it by 100: $\\text{IQ} = (\\text{MA}/\\text{CA}) \\times 100$."
        },
        {
            q: "Which intelligence type in Gardner's model refers to self-reflection, understanding one's own feelings, strengths, and limits?",
            options: [
                "Interpersonal Intelligence",
                "Intrapersonal Intelligence",
                "Linguistic Intelligence",
                "Naturalistic Intelligence"
            ],
            ans: 1,
            exp: "Intrapersonal intelligence is self-knowledge, introspection, and metacognitive awareness."
        },
        {
            q: "A student who learns how to play piano find that it has no effect on their ability to learn history. This is:",
            options: [
                "Positive Transfer",
                "Negative Transfer",
                "Zero Transfer",
                "Vertical Transfer"
            ],
            ans: 2,
            exp: "Zero transfer occurs when learning in one area has no influence on learning in another area."
        },
        {
            q: "In Binet's IQ classification, a person with an IQ between 90 and 109 is considered to have:",
            options: [
                "Borderline deficiency",
                "Average intelligence",
                "Superior intelligence",
                "Gifted intelligence"
            ],
            ans: 1,
            exp: "IQ scores of 90-109 represent average/normal intelligence on standard distribution charts."
        },
        {
            q: "A child who has a language disorder characterized by difficulty in understanding or producing spoken language has:",
            options: [
                "Dysgraphia",
                "Aphasia",
                "Dyspraxia",
                "Dyscalculia"
            ],
            ans: 1,
            exp: "Aphasia is an impairment of language, affecting the production or comprehension of speech."
        },
        {
            q: "Which type of thinking aims at finding the single correct answer to a standard problem?",
            options: [
                "Divergent thinking",
                "Convergent thinking",
                "Lateral thinking",
                "Creative thinking"
            ],
            ans: 1,
            exp: "Convergent thinking narrows options down to find a single correct solution (e.g., standard multiple-choice testing)."
        },
        {
            q: "Guilford's SOI model represents intelligence as a cube containing three dimensions. What are they?",
            options: [
                "Operations, Content, Products",
                "Componential, Experiential, Contextual",
                "General, Specific, Group",
                "Linguistic, Logical, Spatial"
            ],
            ans: 0,
            exp: "Guilford's three dimensions are Operations (mental processes), Content (materials), and Products (outcomes)."
        },
        {
            q: "A tactile/kinesthetic learner is most comfortable when learning involves:",
            options: [
                "Listening to lectures",
                "Reading printed manuals",
                "Hands-on activities and physical movement",
                "Analyzing complex flowcharts"
            ],
            ans: 2,
            exp: "Kinesthetic learners require physical interaction, handling objects, and movement to learn effectively."
        },
        {
            q: "Who constructed the first practical intelligence scale in 1905?",
            options: [
                "Lewis Terman",
                "Alfred Binet",
                "David Wechsler",
                "Francis Galton"
            ],
            ans: 1,
            exp: "Alfred Binet, along with Theodore Simon, developed the first IQ test to identify children needing special instruction in France."
        },
        {
            q: "A person's chronological age (CA) is 10, and their mental age (MA) is 12. Calculate their IQ:",
            options: [
                "83",
                "100",
                "120",
                "140"
            ],
            ans: 2,
            exp: "Using formula: $(12 / 10) \\times 100 = 1.2 \\times 100 = 120$."
        },
        {
            q: "Which multiple intelligence is exhibited by highly skilled dancers, athletes, and surgeons?",
            options: [
                "Visual-Spatial Intelligence",
                "Bodily-Kinesthetic Intelligence",
                "Logical-Mathematical Intelligence",
                "Musical Intelligence"
            ],
            ans: 1,
            exp: "Bodily-kinesthetic intelligence involves control of bodily movements and handling objects skillfully."
        },
        {
            q: "A teacher presents a problem: 'How would you build a shelter using only plastic bottles?' What thinking type is she evaluating?",
            options: [
                "Convergent thinking",
                "Divergent thinking",
                "Repetitive memory",
                "Sequential reasoning"
            ],
            ans: 1,
            exp: "This is an open-ended problem requiring creative, out-of-the-box divergent solutions."
        },
        {
            q: "Transfer of learning from one limb of the body to another (e.g. practicing throwing with right hand improves performance with left hand) is:",
            options: [
                "Horizontal Transfer",
                "Vertical Transfer",
                "Bilateral Transfer",
                "Negative Transfer"
            ],
            ans: 2,
            exp: "Bilateral or cross-education transfer occurs when training one side of the body improves performance on the opposite side."
        },
        {
            q: "Under Wechsler's scales, the deviation IQ is based on:",
            options: [
                "Mental age relative to chronological age",
                "Comparison of performance with peer group mean scores",
                "Absolute score on memory indexes",
                "Developmental maturity checklists"
            ],
            ans: 1,
            exp: "Deviation IQ compares an individual's performance to the average score of peers of the same age group."
        }
    ],
    test4: [
        {
            q: "Which law of learning, formulated by Thorndike, states that when a modifiable connection is made and accompanied by a satisfying state of affairs, its strength is increased?",
            options: [
                "Law of Readiness",
                "Law of Exercise",
                "Law of Effect",
                "Law of Frequency"
            ],
            ans: 2,
            exp: "The Law of Effect states that actions followed by satisfying consequences are reinforced and repeated."
        },
        {
            q: "In Pavlov's Classical Conditioning, the bell (after conditioning is established) is called the:",
            options: [
                "Unconditioned Stimulus (UCS)",
                "Unconditioned Response (UCR)",
                "Conditioned Stimulus (CS)",
                "Conditioned Response (CR)"
            ],
            ans: 2,
            exp: "The neutral stimulus (bell) becomes the Conditioned Stimulus (CS) once it triggers salivation alone."
        },
        {
            q: "According to Albert Bandura's Social Learning Theory, the correct sequence of observational learning is:",
            options: [
                "Attention -> Retention -> Reproduction -> Motivation",
                "Attention -> Motivation -> Retention -> Reproduction",
                "Retention -> Attention -> Reproduction -> Motivation",
                "Motivation -> Attention -> Retention -> Reproduction"
            ],
            ans: 0,
            exp: "Observational learning requires: Attention (watching), Retention (remembering), Reproduction (performing), and Motivation (reinforcement)."
        },
        {
            q: "In learning curves, a flat horizontal period showing no visible improvement in performance is called a:",
            options: [
                "Spurt",
                "Plateau",
                "Deceleration phase",
                "Standard peak"
            ],
            ans: 1,
            exp: "A plateau is a temporary stagnation period in a learning curve where no progress is recorded despite practice."
        },
        {
            q: "According to Kohler, the sudden solution of a problem after reorganizing the perceptual field is called:",
            options: [
                "Trial and Error",
                "Operant association",
                "Insight Learning",
                "Classical conditioning"
            ],
            ans: 2,
            exp: "Insight learning ('Aha!' moment) involves a sudden reorganization of elements to solve a problem, studied using chimpanzees."
        },
        {
            q: "Which learning perspective, championed by Carl Rogers, emphasizes the learner's self-concept, autonomy, and personal growth?",
            options: [
                "Behaviorism",
                "Cognitivism",
                "Humanism",
                "Constructivism"
            ],
            ans: 2,
            exp: "Humanistic education focuses on student-centered growth, freedom, and emotional development."
        },
        {
            q: "In Skinner's box, a rat learns to press a lever to stop a mild electric shock. This is an example of:",
            options: [
                "Positive Reinforcement",
                "Negative Reinforcement",
                "Positive Punishment",
                "Negative Punishment"
            ],
            ans: 1,
            exp: "Negative reinforcement increases behavior (lever pressing) by removing an unpleasant stimulus (electric shock)."
        },
        {
            q: "According to Jerome Bruner, which representation style involves learning through physical actions and manipulating concrete objects?",
            options: [
                "Enactive Stage",
                "Iconic Stage",
                "Symbolic Stage",
                "Abstract Stage"
            ],
            ans: 0,
            exp: "Bruner's stages: Enactive (learning by doing/action), Iconic (by images/pictures), and Symbolic (by codes/abstract words)."
        },
        {
            q: "In memory studies, the capacity of the Short-Term Memory (STM) is defined by George Miller's magic number, which is:",
            options: [
                "5 plus or minus 2",
                "7 plus or minus 2",
                "9 plus or minus 2",
                "11 plus or minus 2"
            ],
            ans: 1,
            exp: "George Miller (1956) proved that STM holds $7 \\pm 2$ chunks of information at a time."
        },
        {
            q: "What type of forgetting occurs when new memories interfere with the retrieval of older memories?",
            options: [
                "Proactive Interference",
                "Retroactive Interference",
                "Decay of traces",
                "Repression"
            ],
            ans: 1,
            exp: "Retroactive interference is when newly learned information blocks the recall of previously learned information."
        },
        {
            q: "Which theory of learning focuses entirely on observable, measurable behavior and rejects studying internal mental states?",
            options: [
                "Behaviorism",
                "Cognitivism",
                "Constructivism",
                "Humanism"
            ],
            ans: 0,
            exp: "Behaviorism (Watson, Skinner) defines learning as changes in observable behavior resulting from stimulus-response patterns."
        },
        {
            q: "In Pavlov's conditioning, the meat powder is the:",
            options: [
                "CS",
                "UCS",
                "CR",
                "UCR"
            ],
            ans: 1,
            exp: "Meat powder naturally triggers salivation without learning, making it the Unconditioned Stimulus (UCS)."
        },
        {
            q: "According to Thorndike's secondary laws, the 'Law of Primacy' states that:",
            options: [
                "First impressions and first learned things are hardest to unlearn",
                "The most recent action is remembered best",
                "The most intense experience leaves the deepest impression",
                "Practice improves coordination"
            ],
            ans: 0,
            exp: "The Law of Primacy dictates that information learned first is highly resistant to change or decay."
        },
        {
            q: "A student studies for 5 hours straight without breaks. This represents which type of practice?",
            options: [
                "Distributed Practice",
                "Massed Practice",
                "Part Practice",
                "Active Recall"
            ],
            ans: 1,
            exp: "Massed practice is cramming or studying continuously without scheduled rest breaks."
        },
        {
            q: "The process of grouping individual pieces of information into larger, meaningful units to expand STM capacity is:",
            options: [
                "Assimilation",
                "Chunking",
                "Rehearsal",
                "Decoupling"
            ],
            ans: 1,
            exp: "Chunking organizes multiple details into cognitive packets (e.g. phone numbers as 3 digits), increasing memory span."
        },
        {
            q: "In Skinnerian terms, taking away a teenager's phone to reduce their bad behavior is:",
            options: [
                "Positive Reinforcement",
                "Negative Reinforcement",
                "Positive Punishment",
                "Negative Punishment"
            ],
            ans: 3,
            exp: "Negative punishment (response cost) removes a pleasant stimulus (phone) to decrease an unwanted behavior."
        },
        {
            q: "In Kohler's experiments, what was the name of the chimpanzee that solved the stick-stacking box problem?",
            options: [
                "Albert",
                "Sultan",
                "Coco",
                "Nim"
            ],
            ans: 1,
            exp: "Sultan was the intelligent chimpanzee who figured out how to stack boxes to reach bananas via insight learning."
        },
        {
            q: "Forgetting due to the simple passage of time fading the physical memory trace in the brain is explained by:",
            options: [
                "Interference Theory",
                "Trace Decay Theory",
                "Retrieval Failure Theory",
                "Motivated Forgetting"
            ],
            ans: 1,
            exp: "Trace decay theory suggests physical memory traces (engrams) fade or erode over time if not rehearsed."
        },
        {
            q: "Which representation stage (Bruner) is characterized by using images, diagrams, and mental pictures?",
            options: [
                "Enactive Stage",
                "Iconic Stage",
                "Symbolic Stage",
                "Kinesthetic Stage"
            ],
            ans: 1,
            exp: "The Iconic stage involves coding and storing memories as images or visual models."
        },
        {
            q: "In classical conditioning, the gradual weakening and disappearance of a conditioned response when the CS is repeatedly presented without the UCS is:",
            options: [
                "Generalization",
                "Discrimination",
                "Extinction",
                "Spontaneous Recovery"
            ],
            ans: 2,
            exp: "Extinction occurs when the bell (CS) is repeatedly rung without food (UCS), causing salivation to cease."
        },
        {
            q: "What schedule of reinforcement is associated with checking email, where rewards occur at unpredictable times?",
            options: [
                "Fixed Ratio",
                "Fixed Interval",
                "Variable Ratio",
                "Variable Interval"
            ],
            ans: 3,
            exp: "Checking email involves Variable Interval reinforcement, as the email arrives after unpredictable time intervals."
        },
        {
            q: "Which psychologist is famous for the 'Bobo Doll' experiments on aggression?",
            options: [
                "Albert Bandura",
                "B.F. Skinner",
                "Jean Piaget",
                "John B. Watson"
            ],
            ans: 0,
            exp: "Albert Bandura used Bobo Doll experiments to demonstrate observational learning of aggression in children."
        },
        {
            q: "A student who learns to drive an automatic car struggles when trying to drive a manual gear car. What type of transfer is this?",
            options: [
                "Positive Transfer",
                "Negative Transfer",
                "Zero Transfer",
                "Vertical Transfer"
            ],
            ans: 1,
            exp: "Negative transfer occurs because driving habits of an automatic interfere with gear-shifting habits."
        },
        {
            q: "Memory of events, facts, and experiences that can be consciously recalled and declared is:",
            options: [
                "Implicit Memory",
                "Explicit (Declarative) Memory",
                "Procedural Memory",
                "Sensory Memory"
            ],
            ans: 1,
            exp: "Explicit memory contains semantic and episodic memories that can be consciously declared."
        },
        {
            q: "In Thorndike's puzzle box, how does the cat escape?",
            options: [
                "Through sudden mental insight",
                "By imitating another cat",
                "Through accidental trial and error movements",
                "By conditioning the researcher"
            ],
            ans: 2,
            exp: "The cat performs random, accidental actions until it hits the latch, supporting Trial and Error learning."
        },
        {
            q: "The term 'scaffolding' was originally coined in educational literature by whom?",
            options: [
                "Lev Vygotsky",
                "Jerome Bruner",
                "Jean Piaget",
                "John Dewey"
            ],
            ans: 1,
            exp: "While scaffolding is central to Vygotsky's ZPD discussions, the actual term was introduced by Jerome Bruner."
        },
        {
            q: "A child learns to avoid hot stoves after getting burned once. This is explained by which law of Thorndike?",
            options: [
                "Law of Readiness",
                "Law of Exercise",
                "Law of Effect",
                "Law of Intensity"
            ],
            ans: 2,
            exp: "The painful outcome (burning) decreases the connection, demonstrating the Law of Effect."
        },
        {
            q: "In memory retention, what represents the first stage of memory processing?",
            options: [
                "Encoding",
                "Storage",
                "Retrieval",
                "Rehearsal"
            ],
            ans: 0,
            exp: "The memory process sequence is: Encoding (input) -> Storage (maintenance) -> Retrieval (output)."
        },
        {
            q: "A child who has learned to fear white rats also starts showing fear of white rabbits and fur coats. This is:",
            options: [
                "Stimulus Discrimination",
                "Stimulus Generalization",
                "Extinction",
                "Spontaneous Recovery"
            ],
            ans: 1,
            exp: "Stimulus generalization is the tendency to respond to stimuli similar to the conditioned stimulus."
        },
        {
            q: "Which learning curve shape shows slow progress initially, followed by a sharp acceleration phase?",
            options: [
                "Convex Curve (Negative Acceleration)",
                "Concave Curve (Positive Acceleration)",
                "S-shaped Curve",
                "Straight Line Curve"
            ],
            ans: 1,
            exp: "A concave curve shows slow initial improvement followed by rapid gains as the learner masters the skill."
        }
    ],
    test5: [
        {
            q: "According to Action Research principles, who is the primary investigator of an action research project in a school?",
            options: [
                "External university researcher",
                "School headmaster or classroom teacher",
                "State educational secretary",
                "District Educational Officer (DEO)"
            ],
            ans: 1,
            exp: "Action research is conducted by practitioners (teachers/principals) to solve local, immediate classroom problems."
        },
        {
            q: "What is the teacher-pupil ratio mandated by the RTE Act 2009 for primary schools (classes 1-5) for up to 60 admitted children?",
            options: [
                "30:1",
                "35:1",
                "40:1",
                "45:1"
            ],
            ans: 0,
            exp: "RTE Act mandates a pupil-teacher ratio of 30:1 for primary sections."
        },
        {
            q: "Which document emphasizes that education should 'connect knowledge to life outside school' and 'ensure learning shifts away from rote methods'?",
            options: [
                "RTE Act 2009",
                "NCF-2005",
                "NEP-2020",
                "SCF-2011"
            ],
            ans: 1,
            exp: "NCF-2005 outlines these five guiding principles for school education reform."
        },
        {
            q: "In a class of 5 students, the test scores are: 10, 15, 10, 20, 25. Calculate the Median score:",
            options: [
                "10",
                "15",
                "16",
                "20"
            ],
            ans: 1,
            exp: "Sort the data: 10, 10, 15, 20, 25. The middle value is 15."
        },
        {
            q: "What type of evaluation is conducted continuously during a term using portfolios, projects, and observation scales?",
            options: [
                "Formative Assessment",
                "Summative Assessment",
                "Placement Evaluation",
                "Standard Diagnostic Test"
            ],
            ans: 0,
            exp: "Formative assessment evaluates learning progress during instruction to provide continuous feedback."
        },
        {
            q: "According to the National Education Policy (NEP) 2020, what is the new academic structure replacing the traditional 10+2 system?",
            options: [
                "5+3+3+4",
                "3+4+3+5",
                "5+4+3+3",
                "4+3+3+5"
            ],
            ans: 0,
            exp: "NEP 2020 replaces the 10+2 structure with a 5+3+3+4 structure (Foundational, Preparatory, Middle, Secondary)."
        },
        {
            q: "What is the correct sequence of phases in Action Research?",
            options: [
                "Plan -> Act -> Observe -> Reflect",
                "Observe -> Plan -> Act -> Reflect",
                "Act -> Observe -> Plan -> Reflect",
                "Plan -> Observe -> Act -> Reflect"
            ],
            ans: 0,
            exp: "Action research operates in a cyclical pattern: Planning -> Action -> Observation -> Reflection."
        },
        {
            q: "In a normal distribution curve (NPC), what percentage of cases fall between -1 and +1 standard deviations (SD) of the mean?",
            options: [
                "50%",
                "68.26%",
                "95.44%",
                "99.73%"
            ],
            ans: 1,
            exp: "Under a normal curve, approximately 68.26% of cases fall within $\\pm 1$ standard deviation of the mean."
        },
        {
            q: "The Right to Education (RTE) Act of 2009 came into force in India on:",
            options: [
                "August 27, 2009",
                "January 26, 2010",
                "April 1, 2010",
                "August 15, 2010"
            ],
            ans: 2,
            exp: "Although passed in 2009, the RTE Act took effect across India on April 1, 2010."
        },
        {
            q: "Which pedagogical leader wrote 'Democracy and Education' and advocated progressive, experiential education?",
            options: [
                "John Dewey",
                "Jean-Jacques Rousseau",
                "Maria Montessori",
                "Friedrich Froebel"
            ],
            ans: 0,
            exp: "John Dewey wrote Democracy and Education, promoting learning-by-doing and democratic schooling."
        },
        {
            q: "The mode of the distribution 2, 3, 3, 4, 4, 4, 5, 5 is:",
            options: [
                "3",
                "3.5",
                "4",
                "5"
            ],
            ans: 2,
            exp: "The value 4 occurs most frequently (three times), making it the mode."
        },
        {
            q: "Which NCF guide introduced the shift from teacher-centric classrooms to 'constructivist' learning environments?",
            options: [
                "NCF-1975",
                "NCF-1988",
                "NCF-2000",
                "NCF-2005"
            ],
            ans: 3,
            exp: "NCF-2005 advocates child-centric constructivism, where learners actively construct knowledge."
        },
        {
            q: "Under the RTE Act 2009, corporal punishment and mental harassment of children are:",
            options: [
                "Allowed under strict supervision",
                "Allowed only in secondary schools",
                "Strictly prohibited under Section 17",
                "Allowed for maintaining classroom silence"
            ],
            ans: 2,
            exp: "Section 17 of the RTE Act strictly bans physical punishment and mental harassment."
        },
        {
            q: "The mean score of 5, 10, 15, 20, 25 is:",
            options: [
                "10",
                "15",
                "18",
                "20"
            ],
            ans: 1,
            exp: "Sum: $5+10+15+20+25 = 75$. Divide by count: $75 / 5 = 15$."
        },
        {
            q: "Which type of research aims at solving an immediate, concrete problem in a classroom setting?",
            options: [
                "Basic Research",
                "Applied Research",
                "Action Research",
                "Historical Research"
            ],
            ans: 2,
            exp: "Action research is applied locally by practitioners to solve immediate operational problems."
        },
        {
            q: "Continuous and Comprehensive Evaluation (CCE) was mandated to replace traditional examinations by which act?",
            options: [
                "National Policy on Education 1986",
                "Right to Education Act 2009",
                "National Education Policy 2020",
                "University Education Commission 1948"
            ],
            ans: 1,
            exp: "The RTE Act 2009 mandated CCE (Continuous and Comprehensive Evaluation) to reduce exam anxiety."
        },
        {
            q: "The shape of a normal probability curve is:",
            options: [
                "Symmetrical and bell-shaped",
                "Positively skewed",
                "Negatively skewed",
                "Bimodal and flat"
            ],
            ans: 0,
            exp: "The NPC is perfectly symmetrical, bell-shaped, with asymptotic tails."
        },
        {
            q: "According to NEP 2020, at what stage will coding and vocational education be introduced in schools?",
            options: [
                "Foundational Stage",
                "Preparatory Stage",
                "Middle Stage (Class 6-8)",
                "Secondary Stage"
            ],
            ans: 2,
            exp: "NEP 2020 introduces coding and vocational training starting from Class 6 (Middle Stage)."
        },
        {
            q: "Who is considered the father of the project method of teaching, expanding on John Dewey's ideas?",
            options: [
                "William Kilpatrick",
                "Friedrich Froebel",
                "Maria Montessori",
                "Johann Pestalozzi"
            ],
            ans: 0,
            exp: "William Heard Kilpatrick developed the Project Method based on Dewey's pragmatist philosophy."
        },
        {
            q: "If the Mean is 20 and the Median is 20 in a symmetrical distribution, what is the Mode?",
            options: [
                "10",
                "15",
                "20",
                "25"
            ],
            ans: 2,
            exp: "In a perfectly symmetrical distribution, Mean = Median = Mode, so the mode is 20."
        },
        {
            q: "Under the RTE Act 2009, what is the minimum number of working days per academic year for classes 6 to 8 (upper primary)?",
            options: [
                "200 days",
                "220 days",
                "240 days",
                "250 days"
            ],
            ans: 1,
            exp: "RTE mandates at least 200 working days for primary classes and 220 working days for upper primary classes."
        },
        {
            q: "Which pedagogical leader created the 'Kindergarten' model of early childhood education?",
            options: [
                "Friedrich Froebel",
                "Maria Montessori",
                "John Dewey",
                "Jean Piaget"
            ],
            ans: 0,
            exp: "Friedrich Froebel founded the first Kindergarten ('children's garden') in Germany in 1837."
        },
        {
            q: "What is the primary purpose of Diagnostic Evaluation?",
            options: [
                "To assign grades at the end of term",
                "To identify specific learning difficulties and causes of failure",
                "To award scholarships",
                "To select students for college entry"
            ],
            ans: 1,
            exp: "Diagnostic tests pinpoint learning gaps and persistent difficulties to plan remedial action."
        },
        {
            q: "In statistics, standard deviation is a measure of:",
            options: [
                "Central tendency",
                "Variability / Dispersion",
                "Correlation",
                "Relative position"
            ],
            ans: 1,
            exp: "Standard deviation measures the dispersion or spread of scores around the mean."
        },
    ],
    test6: [
        { q: "Who is known as the 'Father of Child Psychology'?", options: ["Jean Piaget", "John B. Watson", "Wilhelm Wundt", "Sigmund Freud"], ans: 0, exp: "Jean Piaget's systematic work on cognitive development earned him the title of the father of child psychology." },
        { q: "The transition period from childhood to adulthood is:", options: ["Infancy", "Early Childhood", "Adolescence", "Middle Adulthood"], ans: 2, exp: "Adolescence is the transitional developmental stage between childhood and adulthood." },
        { q: "The concept of 'developmental task' was introduced by:", options: ["Robert Havighurst", "Elizabeth Hurlock", "Jean Piaget", "Erik Erikson"], ans: 0, exp: "Robert Havighurst pioneered the concept of developmental tasks across the life span." },
        { q: "Which developmental principle states that development is not uniform but proceeds at different rates for different parts?", options: ["Principle of continuity", "Principle of individual variation", "Principle of cephalocaudal direction", "Principle of integration"], ans: 1, exp: "Individual variation shows that different children develop at different paces and rates." },
        { q: "A child can perform conservation of mass tasks but fails at formal logic tasks. According to Piaget, what stage are they in?", options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"], ans: 2, exp: "Concrete operational children (7-11) can conserve mass and volume but cannot perform abstract hypothetico-deductive reasoning." },
        { q: "According to Erikson, what is the virtue gained during the resolution of the crisis 'Trust vs. Mistrust'?", options: ["Hope", "Will", "Purpose", "Competence"], ans: 0, exp: "Successful resolution of trust vs. mistrust yields the core ego virtue of Hope." },
        { q: "What is the typical age range for Piaget's Preoperational Stage?", options: ["0-2 years", "2-7 years", "7-11 years", "11+ years"], ans: 1, exp: "The preoperational stage spans early childhood from ages 2 to 7." },
        { q: "According to Kohlberg, at which stage is morality determined by social contracts and individual rights?", options: ["Stage 3", "Stage 4", "Stage 5", "Stage 6"], ans: 2, exp: "Stage 5 represents post-conventional contract morality where laws are seen as flexible tools for social welfare." },
        { q: "According to Freud, the Oedipus complex occurs during which psychosexual stage?", options: ["Oral Stage", "Anal Stage", "Phallic Stage", "Latency Stage"], ans: 2, exp: "The Phallic stage (3-6 years) is characterized by the emergence of the Oedipus and Electra complexes." },
        { q: "Self-regulation, the ability to control disruptive impulses and think before acting, is a component of emotional intelligence proposed by:",
          options: ["Daniel Goleman", "Alfred Binet", "Howard Gardner", "Lewis Terman"], ans: 0, exp: "Self-regulation is one of Goleman's five core pillars of Emotional Quotient (EQ)." },
        { q: "A teacher notes that a child is very active, talkative, and loves to lead group games in late childhood. What socialization agent is active here?",
          options: ["Peer group", "Textbooks", "Television", "School infrastructure"], ans: 0, exp: "Peer groups in late childhood facilitate play leadership and social interaction." },
        { q: "Which play type is characterized by children playing with the same toys in the same area, interacting slightly, but having no collective plan?",
          options: ["Solitary play", "Parallel play", "Associative play", "Cooperative play"], ans: 2, exp: "Associative play involves communication and toy-sharing but lacks structured collective goals." },
        { q: "A student who is reprimanded by the principal goes home and behaves rudely with their parents. This is:",
          options: ["Rationalization", "Displacement", "Projection", "Regression"], ans: 1, exp: "Displacement redirects emotional reactions from the threatening source (principal) to a safer target (parents)." },
        { q: "According to Elizabeth Hurlock, what is the age range of 'Early Childhood'?",
          options: ["Birth to 2 weeks", "2 weeks to 2 years", "2 to 6 years", "6 to 12 years"], ans: 2, exp: "Hurlock defines early childhood from 2 to 6 years, often called the pre-school or toy age." },
        { q: "The cephalocaudal direction of development means progression from:",
          options: ["Head to tail", "Center to periphery", "General to specific", "Simple to complex"], ans: 0, exp: "Cephalocaudal means head-to-toe developmental progression." },
        { q: "In Piaget's theory, the tendency to focus on only one aspect of a situation and ignore others is called:",
          options: ["Centration", "Conservation", "Egocentrism", "Reversibility"], ans: 0, exp: "Centration is the preoperational cognitive limitation of focusing on a single feature of an object or event." },
        { q: "According to Kohlberg, at which level does a child conform to rules to obtain rewards or satisfy personal needs?",
          options: ["Stage 1: Punishment-Obedience", "Stage 2: Instrumental Relativist", "Stage 3: Interpersonal Concordance", "Stage 4: Law and Order"], ans: 1, exp: "Stage 2 is the marketplace or egotistical orientation where right action is what satisfies one's personal needs." },
        { q: "In Erikson's theory, the crisis of 'Autonomy vs. Shame & Doubt' is faced during which stage?",
          options: ["Infancy", "Toddlerhood (1-3 years)", "Play Age (3-6 years)", "School Age"], ans: 1, exp: "Toddlers strive for self-control and autonomy; failure leads to shame and doubt." },
        { q: "Which component of personality in Freud's theory operates on the 'Pleasure Principle'?",
          options: ["Id", "Ego", "Superego", "Libido"], ans: 0, exp: "The Id is the primitive, unconscious part of personality operating purely on immediate pleasure gratification." },
        { q: "A child who has learned to write can learn to type on a computer keyboard more easily. What transfer of learning is this?",
          options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Bilateral Transfer"], ans: 0, exp: "Prior fine motor skill (writing) assists the new motor skill (typing), making it positive transfer." },
        { q: "According to Goleman, the ability to control one's mood and prevent distress from swamping thinking is:",
          options: ["Self-awareness", "Self-regulation", "Motivation", "Empathy"], ans: 1, exp: "Self-regulation keeps negative emotions in check so thinking remains clear." },
        { q: "A parenting style characterized by very low expectations/demands but high warmth and affection is:",
          options: ["Authoritarian", "Authoritative", "Permissive", "Neglectful"], ans: 2, exp: "Permissive parenting imposes very few rules, letting the child do as they please while showing high warmth." },
        { q: "A student who fails an exam blames it on the pen being defective. Which defense mechanism is this?",
          options: ["Rationalization", "Projection", "Regression", "Reaction Formation"], ans: 0, exp: "Rationalization involves making excuses to explain away failures." },
        { q: "What is the typical age range of 'Adolescence' according to general developmental psychology?",
          options: ["2-6 years", "6-12 years", "12-18 years", "18-25 years"], ans: 2, exp: "Adolescence roughly corresponds to puberty and high school years, from ages 12 to 18." },
        { q: "The proximodistal direction of development proceeds from:",
          options: ["Head to foot", "Central axis to outer parts", "General to specific", "Concrete to abstract"], ans: 1, exp: "Proximodistal progression is from the spine/center outwards to limbs and fingers." },
        { q: "A child believes that a shadow is a monster following them. According to Piaget, this reflects:",
          options: ["Object Permanence", "Egocentrism", "Animism", "Hypothetical logic"], ans: 2, exp: "Attributing intent and life to a shadow is Animism." },
        { q: "According to Erikson, what is the developmental crisis of old age?",
          options: ["Generativity vs. Stagnation", "Integrity vs. Despair", "Intimacy vs. Isolation", "Identity vs. Role Confusion"], ans: 1, exp: "Ego integrity vs. Despair is the final psychosocial crisis of late adulthood/old age." },
        { q: "In Freud's theory, the component of personality representing the internalized moral standards of parents and society is:",
          options: ["Id", "Ego", "Superego", "Ego Ideal"], ans: 2, exp: "The Superego acts as the moral conscience and source of guilt." },
        { q: "A child who has learned to play tennis find it has no effect on their ability to learn mathematics. This is:",
          options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Bilateral Transfer"], ans: 2, exp: "Since there is no cognitive overlap, it is Zero Transfer." },
        { q: "The rate of physical growth slows down during which developmental period?",
          options: ["Infancy", "Early Childhood", "Late Childhood", "Adolescence"], ans: 2, exp: "Physical growth velocity slows down and stabilizes during late childhood (school age) before the adolescent growth spurt." }
    ],
    test7: [
        { q: "A teacher notices that a student is exceptionally skilled at playing musical instruments and identifying pitch. According to Gardner, this student has:", options: ["Linguistic Intelligence", "Musical Intelligence", "Logical Intelligence", "Spatial Intelligence"], ans: 1, exp: "Musical intelligence includes sensitivity to rhythm, pitch, melody, and tone." },
        { q: "A student who has difficulty writing legibly, holding a pencil, and spelling words correctly shows signs of:", options: ["Dyscalculia", "Dysgraphia", "Dyslexia", "Dyspraxia"], ans: 1, exp: "Dysgraphia specifically affects written expression, motor writing skills, and spelling." },
        { q: "Thurstone's theory of intelligence is known as:", options: ["Two-Factor Theory", "Multi-Factor Theory", "Primary Mental Abilities Theory", "Triarchic Theory"], ans: 2, exp: "L.L. Thurstone proposed 7 independent Primary Mental Abilities (PMA) rather than a single 'g' factor." },
        { q: "Brainstorming is a teaching strategy designed to foster:", options: ["Convergent thinking", "Divergent thinking", "Rote memorization", "Critical listening"], ans: 1, exp: "Brainstorming invites students to produce multiple creative ideas without immediate evaluation." },
        { q: "A student who learns best by performing physical experiments, building models, and touching objects is a:", options: ["Visual learner", "Auditory learner", "Tactile/Kinesthetic learner", "Intuitive learner"], ans: 2, exp: "Kinesthetic/tactile learners require hands-on physical engagement." },
        { q: "According to Gardner, a successful counselor or teacher needs high levels of:", options: ["Intrapersonal Intelligence", "Interpersonal Intelligence", "Linguistic Intelligence", "Naturalistic Intelligence"], ans: 1, exp: "Interpersonal intelligence is the capacity to understand and interact effectively with other people." },
        { q: "Which learning difficulty is characterized by difficulty in word recognition, decoding, and reading comprehension?", options: ["Dyslexia", "Dysgraphia", "Dyscalculia", "Aphasia"], ans: 0, exp: "Dyslexia is a primary reading disability affecting word recognition and spelling." },
        { q: "According to Sternberg, the ability to solve everyday practical problems and adapt to one's environment is:", options: ["Analytical Intelligence", "Creative Intelligence", "Practical (Contextual) Intelligence", "Social Intelligence"], ans: 2, exp: "Practical intelligence is Sternberg's 'street smarts' or contextual problem-solving ability." },
        { q: "A child with an IQ score of 55 would be classified under Binet's system as:", options: ["Average", "Borderline", "Mildly Intellectually Challenged", "Severely Intellectually Challenged"], ans: 2, exp: "IQ scores between 50-69 fall under Mild Intellectual Disability (educable range)." },
        { q: "What refers to learning where prior knowledge interferes with the learning of new skills?", options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Bilateral Transfer"], ans: 1, exp: "Negative transfer is the interference of old habits on new learning." },
        { q: "Which test evaluates divergent thinking using incomplete figures or lines?", options: ["Torrance Tests of Creative Thinking", "Raven's Progressive Matrices", "Wechsler Scales", "Stanford-Binet Test"], ans: 0, exp: "The TTCT figural battery evaluates creative output using incomplete drawings." },
        { q: "A child who has a reading disability that causes them to read 'was' as 'saw' has:", options: ["Dysgraphia", "Dyscalculia", "Dyslexia", "Aphasia"], ans: 2, exp: "Dyslexia often manifests as letter reversals or reading words backwards." },
        { q: "In Guilford's SOI model, 'Evaluation', 'Convergent Production', and 'Divergent Production' are part of:", options: ["Contents", "Operations", "Products", "Structures"], ans: 1, exp: "Operations refer to the cognitive processes (memory, cognition, evaluation, convergent, divergent production)." },
        { q: "A visual learner benefits most from:", options: ["Discussions and debates", "Textbooks with maps, charts, and diagrams", "Field trips and model making", "Reading aloud"], ans: 1, exp: "Visual learners require graphics, colors, and spatial models." },
        { q: "Emotional intelligence involves which of the following skills?", options: ["Identifying and managing one's own emotions", "Identifying and managing the emotions of others", "Both A and B", "Neither A nor B"], ans: 2, exp: "EQ involves both self-awareness/management and social empathy/skills." },
        { q: "A child who has difficulty planning and executing fine motor movements like buttoning shirts has:", options: ["Dyslexia", "Dysgraphia", "Dyscalculia", "Dyspraxia"], ans: 3, exp: "Dyspraxia is a developmental motor coordination disorder." },
        { q: "Who introduced the concept of Mental Age (MA) in 1908?", options: ["Alfred Binet", "Lewis Terman", "William Stern", "David Wechsler"], ans: 0, exp: "Alfred Binet introduced Mental Age to measure a child's cognitive performance level relative to average peers." },
        { q: "A successful novelist or public speaker exhibits high levels of which Gardner intelligence?", options: ["Linguistic Intelligence", "Logical Intelligence", "Spatial Intelligence", "Intrapersonal Intelligence"], ans: 0, exp: "Linguistic intelligence involves sensitivity to spoken and written language and word choices." },
        { q: "Learning to ride a bicycle has no impact on learning to play chess. This is:", options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Lateral Transfer"], ans: 2, exp: "No transfer of skills takes place between unrelated activities." },
        { q: "On the Stanford-Binet intelligence scale, an IQ score of 100 is considered:", options: ["Below average", "Average", "Superior", "Gifted"], ans: 1, exp: "100 is the mathematical median/mean score for normal average performance." },
        { q: "A child who has suffered a brain injury and lost the ability to speak clearly has:", options: ["Dyscalculia", "Aphasia", "Dyspraxia", "Dyslexia"], ans: 1, exp: "Aphasia is a language disorder caused by damage to brain areas controlling speech." },
        { q: "Which type of thinking involves generating a variety of unique, unusual answers to a single question?", options: ["Convergent thinking", "Divergent thinking", "Linear thinking", "Rote memory"], ans: 1, exp: "Divergent thinking is the basis of creativity, exploring multiple paths." },
        { q: "Guilford's 'Products' dimension in the Structure of Intellect model has how many factors?", options: ["4", "5", "6", "7"], ans: 2, exp: "Products dimension contains 6 factors: Units, Classes, Relations, Systems, Transformations, Implications." },
        { q: "Kinesthetic learners learn best through:", options: ["Listening to audio tapes", "Drawing diagrams", "Hands-on projects and laboratory work", "Silent reading"], ans: 2, exp: "Kinesthetic learning is tactile and physical, requiring motor actions." },
        { q: "Who modified the Binet-Simon scale to create the Stanford-Binet Intelligence Scale in 1916?", options: ["Lewis Terman", "William Stern", "David Wechsler", "Charles Spearman"], ans: 0, exp: "Lewis Terman of Stanford University revised and expanded Binet's test for American children." },
        { q: "Calculate the IQ of a child whose chronological age is 8 and mental age is 10:", options: ["80", "100", "125", "150"], ans: 2, exp: "$\\text{IQ} = (10 / 8) \\times 100 = 1.25 \\times 100 = 125$." },
        { q: "Which Gardner intelligence is prominent in architects, sailors, and chess players?", options: ["Spatial Intelligence", "Linguistic Intelligence", "Bodily-Kinesthetic Intelligence", "Naturalistic Intelligence"], ans: 0, exp: "Spatial intelligence is the ability to perceive and mentally manipulate 3D space." },
        { q: "A teacher asks students to think of as many uses for a paperclip as possible. What thinking is this?", options: ["Convergent", "Divergent", "Analytical", "Logical"], ans: 1, exp: "Generating multiple alternative uses evaluates divergent creative thinking." },
        { q: "Learning to write with the right hand automatically improves coordination with the left hand. This is:", options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Bilateral Transfer"], ans: 3, exp: "Bilateral transfer occurs across symmetrical limbs of the body." },
        { q: "Which IQ scale introduced the concept of deviation IQ based on normal distribution mean scores?", options: ["Binet-Simon Scale", "Stanford-Binet Scale", "Wechsler Adult Intelligence Scale (WAIS)", "Raven's Matrices"], ans: 2, exp: "David Wechsler introduced deviation IQ to replace mental age calculation for adults." }
    ],
    test8: [
        { q: "Which law of learning (Thorndike) states that the more a connection is practiced, the stronger it becomes?", options: ["Law of Readiness", "Law of Exercise", "Law of Effect", "Law of Intensity"], ans: 1, exp: "The Law of Exercise states that connections are strengthened with practice/use and weakened with disuse." },
        { q: "In Pavlov's experiments, the salivation of the dog in response to the meat powder is the:", options: ["Conditioned Stimulus", "Unconditioned Response", "Conditioned Response", "Neutral Stimulus"], ans: 1, exp: "Salivating in response to meat powder is an innate, unlearned Unconditioned Response (UCR)." },
        { q: "According to Bandura, what refers to a person's belief in their own capability to succeed in a specific task?", options: ["Self-esteem", "Self-concept", "Self-efficacy", "Self-actualization"], ans: 2, exp: "Self-efficacy is the belief in one's capability to organize and execute actions required to achieve goals." },
        { q: "A learning plateau on a graph is characterized by:", options: ["A steep rise in performance", "A steep drop in performance", "A flat horizontal line showing no progress", "An irregular zigzag line"], ans: 2, exp: "A plateau represents a temporary period of stagnation where no performance gains are visible." },
        { q: "Insight learning theory was formulated by which school of psychology?", options: ["Behaviorism", "Cognitivism", "Gestalt Psychology", "Humanism"], ans: 2, exp: "Gestalt psychologists (Kohler, Wertheimer, Koffka) pioneered insight learning (perceptual wholes)." },
        { q: "According to Carl Rogers, a healthy classroom learning environment must offer:", options: ["Strict discipline and control", "Unconditional Positive Regard", "Exams and punishments", "Competitiveness"], ans: 1, exp: "Rogers argued that Unconditional Positive Regard creates a safe environment for self-actualization." },
        { q: "In Operant Conditioning, when a behavior is followed by the removal of an unpleasant stimulus, increasing that behavior, it is:", options: ["Positive Reinforcement", "Negative Reinforcement", "Positive Punishment", "Negative Punishment"], ans: 1, exp: "Negative reinforcement strengthens behavior by removing an undesirable/aversive stimulus." },
        { q: "Jerome Bruner proposed 3 representation stages. What is the symbolic stage based on?", options: ["Physical actions", "Mental images and pictures", "Language and abstract codes", "Concrete objects"], ans: 2, exp: "The symbolic stage uses abstract symbols, language, and logic to represent reality." },
        { q: "In the information-processing model of memory, what is the correct order of stores?", options: ["Sensory Memory -> Short-Term Memory -> Long-Term Memory", "Short-Term Memory -> Sensory Memory -> Long-Term Memory", "Sensory Memory -> Long-Term Memory -> Short-Term Memory", "Long-Term Memory -> Short-Term Memory -> Sensory Memory"], ans: 0, exp: "Information passes from sensory registers to STM (working memory) and then to LTM (permanent storage)." },
        { q: "Forgetting due to older memories interfering with the recall of newer memories is:", options: ["Proactive Interference", "Retroactive Interference", "Trace Decay", "Repression"], ans: 0, exp: "Proactive interference occurs when old information blocks the retrieval of newly learned information." },
        { q: "Which psychologist is considered the founder of Behaviorism?", options: ["John B. Watson", "B.F. Skinner", "Ivan Pavlov", "Edward Thorndike"], ans: 0, exp: "Watson established behaviorism with his 1913 lecture 'Psychology as the Behaviorist Views It'." },
        { q: "In classical conditioning, the sound of the bell before conditioning is established is the:", options: ["CS", "UCS", "Neutral Stimulus", "CR"], ans: 2, exp: "Before conditioning, the bell does not elicit salivation; it is a Neutral Stimulus." },
        { q: "Thorndike's 'Law of Readiness' implies that:", options: ["Practice makes perfect", "Learning can only occur when the student is physically and mentally prepared", "Satisfying consequences reinforce learning", "First learned items are remembered best"], ans: 1, exp: "The Law of Readiness states that when an organism is ready to act, doing so is satisfying, while not doing so is frustrating." },
        { q: "Distributed practice refers to:", options: ["Cramming all study into one session", "Spacing out study sessions with rest intervals", "Studying different subjects at once", "Testing oneself repeatedly"], ans: 1, exp: "Distributed practice spaces learning sessions over time, improving retention compared to massed practice." },
        { q: "A student remembers a phone number by repeating it out loud. What memory process is this?", options: ["Encoding", "Retrieval", "Maintenance Rehearsal", "Chunking"], ans: 2, exp: "Maintenance rehearsal is repeating information to keep it active in STM." },
        { q: "A teacher stops giving detention to a student because they started turning in homework on time. This is:", options: ["Positive Reinforcement", "Negative Reinforcement", "Positive Punishment", "Negative Punishment"], ans: 1, exp: "Stopping the unpleasant stimulus (detention) increases the positive behavior (homework submission), making it negative reinforcement." },
        { q: "Kohler's experiments on Sultan proved that learning is not just trial-and-error but involves:", options: ["Mechanical repetition", "Perceptual reorganization and insight", "Vicarious reinforcement", "Operant shaping"], ans: 1, exp: "Chimpanzees showed sudden insight by reorganizing their view of boxes/sticks to reach goals." },
        { q: "What memory store has an unlimited capacity and can hold information for a lifetime?", options: ["Sensory Memory", "Short-Term Memory", "Long-Term Memory", "Working Memory"], ans: 2, exp: "Long-Term Memory (LTM) has virtually unlimited capacity and duration." },
        { q: "Bruner's iconic stage corresponds to learning through:", options: ["Action", "Images and drawings", "Words and symbols", "Numbers"], ans: 1, exp: "Iconic representation uses visual models and drawings to code information." },
        { q: "If the conditioned stimulus (bell) is repeatedly presented without the unconditioned stimulus (food), the conditioned response (salivation) will eventually decrease and stop. This is:", options: ["Generalization", "Extinction", "Discrimination", "Spontaneous Recovery"], ans: 1, exp: "Extinction is the elimination of a conditioned response when reinforcement ceases." },
        { q: "Which reinforcement schedule provides reinforcement after an unpredictable number of responses (e.g. playing slot machines)?", options: ["Fixed Ratio", "Variable Ratio", "Fixed Interval", "Variable Interval"], ans: 1, exp: "Variable ratio reinforces actions after a random number of behaviors, generating high, stable response rates." },
        { q: "Social learning theory focuses on learning through:", options: ["Stimulus-response associations", "Direct physical reinforcement", "Observation and imitation of models", "Perceptual wholes"], ans: 2, exp: "Bandura's theory emphasizes learning in a social context through observation." },
        { q: "Learning to drive a tractor is aided by the prior skill of driving a truck. This is:", options: ["Positive Transfer", "Negative Transfer", "Zero Transfer", "Bilateral Transfer"], ans: 0, exp: "The prior driving skill assists the new driving skill, making it positive transfer." },
        { q: "Memory of motor skills, like riding a bike or typing, which does not require conscious recall, is:", options: ["Episodic Memory", "Semantic Memory", "Procedural Memory", "Sensory Memory"], ans: 2, exp: "Procedural memory is implicit memory for motor skills and actions." },
        { q: "Thorndike used which animal in his puzzle box experiments?", options: ["Dog", "Rat", "Chimpanzee", "Cat"], ans: 3, exp: "Edward Thorndike placed hungry cats in puzzle boxes to study trial-and-error learning." },
        { q: "Vygotsky's concept of the difference between what a child can do alone and what they can do with assistance is:", options: ["Zone of Proximal Development", "Scaffolding", "Assimilation", "Self-actualization"], ans: 0, exp: "The ZPD is the range of tasks a child can perform with the help of a More Knowledgeable Other (MKO)." },
        { q: "The Law of Effect was the direct precursor to which learning theory?", options: ["Classical Conditioning", "Operant Conditioning", "Insight Learning", "Social Learning"], ans: 1, exp: "Skinner developed operant conditioning based on Thorndike's Law of Effect (consequences control behavior)." },
        { q: "What memory store holds incoming sensory inputs for less than a second?", options: ["Sensory Memory", "Short-Term Memory", "Long-Term Memory", "Working Memory"], ans: 0, exp: "Sensory memory holds sensory details (iconic/echoic) very briefly before decay or attention transfer." },
        { q: "A child who has been bitten by a small dog starts showing fear of all furry animals. This is:", options: ["Stimulus Generalization", "Stimulus Discrimination", "Extinction", "Spontaneous Recovery"], ans: 0, exp: "Generalization is responding to stimuli that are physically similar to the conditioned stimulus." },
        { q: "A teacher changes a student's seat to the front row to stop them from talking. This is:", options: ["Positive Reinforcement", "Negative Reinforcement", "Positive Punishment", "Negative Punishment"], ans: 2, exp: "Adding an unpleasant condition (front row seating) to decrease an unwanted behavior (talking) is Positive Punishment." }
    ],
    test9: [
        { q: "Which developmental theory emphasizes the role of social interaction and culture in cognitive growth?", options: ["Piaget's Theory", "Vygotsky's Theory", "Erikson's Theory", "Freud's Theory"], ans: 1, exp: "Lev Vygotsky's socio-cultural theory argues that cognitive development is a socially mediated process." },
        { q: "According to Jerome Bruner, the enactive stage of representation involves learning through:", options: ["Images", "Language", "Physical Action", "Symbols"], ans: 2, exp: "Enactive representation is learning by doing, using motor skills and actions." },
        { q: "In Piaget's cognitive theory, when a child alters their existing schemas to fit new experiences, it is:", options: ["Assimilation", "Accommodation", "Equilibration", "Centration"], ans: 1, exp: "Accommodation is modifying existing mental structures (schemas) to adapt to new information." },
        { q: "Bandura's model of reciprocal determinism includes three factors. What are they?", options: ["Behavior, Environment, Personal cognitive factors", "Stimulus, Response, Reinforcement", "Teacher, Student, Curriculum", "Culture, Language, Society"], ans: 0, exp: "Reciprocal determinism is the triadic interaction of behavior, internal cognitive/personal events, and environmental influences." },
        { q: "Which psychologist championed the humanistic perspective in education, developing a learner-centered approach?", options: ["B.F. Skinner", "Carl Rogers", "Jean Piaget", "Lev Vygotsky"], ans: 1, exp: "Carl Rogers advocated student-centered learning focused on personal growth and self-concept." },
        { q: "Vygotsky argued that the primary tool for cognitive development in children is:", options: ["Play", "Language / Speech", "Sensory exploration", "Written symbols"], ans: 1, exp: "Language is Vygotsky's primary psychological tool for mediation and development of higher mental functions." },
        { q: "Bruner's iconic stage corresponds to learning through:", options: ["Action", "Images", "Words", "Numbers"], ans: 1, exp: "Iconic stage utilizes visual memories, charts, and drawings." },
        { q: "According to Piaget, during which cognitive stage does a child develop abstract hypothetico-deductive reasoning?", options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"], ans: 3, exp: "Formal operational stage (11+ years) is marked by abstract thinking and scientific hypothesis testing." },
        { q: "In observational learning, keeping a memory of the model's action in one's brain is called:", options: ["Attention", "Retention", "Reproduction", "Motivation"], ans: 1, exp: "Retention is the second stage, storing the observed behavior as a cognitive script." },
        { q: "Rogers' learner-centered approach emphasizes that the teacher should act as a:", options: ["Director", "Lecturer", "Facilitator", "Evaluator"], ans: 2, exp: "Humanistic teachers act as facilitators, guiding student-driven paths rather than directing them." },
        { q: "What refers to the assistance provided by an adult or peer in the ZPD that is slowly tapered off as the child gains mastery?", options: ["Scaffolding", "Equilibration", "Assimilation", "Reinforcement"], ans: 0, exp: "Scaffolding is temporary supportive guidance that is faded out as the learner becomes independent." },
        { q: "Bruner's symbolic stage corresponds to learning through:", options: ["Action", "Images", "Language and abstract symbols", "Direct sensation"], ans: 2, exp: "The symbolic stage relies on language, codes, and abstract formulas." },
        { q: "According to Piaget, 'egocentrism' is a hallmark characteristic of which stage?", options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"], ans: 1, exp: "Preoperational children (2-7) are egocentric, struggling to see situations from others' viewpoints." },
        { q: "In Bandura's theory, seeing someone else get reinforced for a behavior, which increases your own likelihood of imitating that behavior, is:", options: ["Direct reinforcement", "Vicarious reinforcement", "Negative reinforcement", "Punishment"], ans: 1, exp: "Vicarious reinforcement is learning through observing the consequences of others' actions." },
        { q: "A classroom teacher lets students choose their own reading books and write about their personal reactions. What learning perspective is this?", options: ["Behaviorist", "Cognitivist", "Humanist", "Structuralist"], ans: 2, exp: "Encouraging self-concept, autonomy, and personal choice reflects Humanistic education." },
        { q: "Vygotsky's term for 'inner speech' refers to:", options: ["Silent self-talk used for cognitive self-regulation", "Speech directed at others in public", "Babbling in infants", "A language disorder"], ans: 0, exp: "Inner speech is internalized private speech used to plan and regulate cognitive tasks." },
        { q: "Jerome Bruner's concept of curriculum design where ideas are repeatedly visited at increasing levels of complexity is:", options: ["Linear Curriculum", "Spiral Curriculum", "Modular Curriculum", "Core Curriculum"], ans: 1, exp: "A spiral curriculum returns to topics at higher levels of complexity as cognitive capacity grows." },
        { q: "Piaget's stage where children can think logically about concrete events and objects is:", options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"], ans: 2, exp: "Concrete operational stage (7-11) is characterized by logical operations with concrete physical objects." },
        { q: "Which component of observational learning involves physically practicing and refining the observed action?", options: ["Attention", "Retention", "Reproduction", "Motivation"], ans: 2, exp: "Reproduction is the motor translation of cognitive scripts into physical actions." },
        { q: "Which psychologist is famous for the concept of 'self-actualization' as the peak of human needs?", options: ["Carl Rogers", "Abraham Maslow", "B.F. Skinner", "Albert Bandura"], ans: 1, exp: "Maslow developed the Hierarchy of Needs, culminating in self-actualization." },
        { q: "According to Vygotsky, learning occurs first on a social level, then on an individual level. What are the terms for this?", options: ["Interpsychological then Intrapsychological", "Intrapsychological then Interpsychological", "Assimilation then Accommodation", "Exosystem then Microsystem"], ans: 0, exp: "Vygotsky argued that cultural development occurs first interpsychologically (between people) and then intrapsychologically (inside the child)." },
        { q: "Bruner's theory of learning is primarily known as:", options: ["Operant conditioning", "Discovery Learning", "Social Learning", "Insight learning"], ans: 1, exp: "Jerome Bruner advocated Discovery Learning where students interact with their environment to discover principles themselves." },
        { q: "Piaget's term for the cognitive structure that organizes and categorizes information in the brain is:", options: ["Operation", "Concept", "Schema", "Image"], ans: 2, exp: "Schemas are the mental blocks of knowledge used to understand and organize experience." },
        { q: "According to Bandura, which step of observational learning is driven by incentives and reinforcements?", options: ["Attention", "Retention", "Reproduction", "Motivation"], ans: 3, exp: "Motivation determines whether the observed behavior is actually performed." },
        { q: "Rogers' concept of 'congruence' in a teacher means:", options: ["Being genuine and honest about one's feelings", "Being extremely strict", "Matching the student's grades", "Writing detailed lesson plans"], ans: 0, exp: "Congruence is authenticity or realness in the teacher-student relationship." },
        { q: "Vygotsky's 'More Knowledgeable Other' (MKO) can refer to:", options: ["A teacher", "A peer", "A computer program", "All of the above"], ans: 3, exp: "An MKO is anyone (teacher, peer, software) with a higher ability level than the learner." },
        { q: "In Bruner's enactive stage, children represent their world using:", options: ["Visual images", "Language", "Motor actions", "Mathematical symbols"], ans: 2, exp: "Enactive representation codes memory through muscular and motor actions (doing)." },
        { q: "According to Piaget, the child's inability to see things from other people's perspectives is:", options: ["Centration", "Conservation", "Egocentrism", "Animism"], ans: 2, exp: "Egocentrism is the cognitive limit of viewing the world purely from one's own coordinates." },
        { q: "Observational learning is also referred to as:", options: ["Classical conditioning", "Vicarious learning / modeling", "Operant conditioning", "Trial and Error"], ans: 1, exp: "Bandura's learning via observation is known as modeling or vicarious learning." },
        { q: "Rogers' term for the ideal state where a person's self-concept matches their actual experience is:", options: ["Incongruence", "Congruence", "Self-actualization", "Self-worth"], ans: 1, exp: "Congruence is the alignment between the real self and the ideal self." }
    ],
    test10: [
        { q: "Which step in Herbartian lesson planning involves leading students to derive a rule, definition, or formula from examples?", options: ["Presentation", "Comparison", "Generalization", "Application"], ans: 2, exp: "Generalization is the step where students draw rules or conclusions from presented details." },
        { q: "Under the RTE Act 2009, private schools must reserve what percentage of seats for children from weaker sections?", options: ["10%", "15%", "25%", "33%"], ans: 2, exp: "Section 12(1)(c) mandates 25% EWS reservation in admissions." },
        { q: "NCF-2005 outlines five guiding principles. Which of the following is NOT one of them?", options: ["Connecting learning to life outside school", "Ensuring learning shifts away from rote methods", "Enriching the curriculum to go beyond textbooks", "Making examinations more rigid and content-heavy"], ans: 3, exp: "NCF-2005 aims to make exams more flexible and integrated with classroom life, not more rigid." },
        { q: "Calculate the Mean of the scores: 10, 20, 30, 40, 50.", options: ["20", "30", "40", "50"], ans: 1, exp: "Mean = $(10+20+30+40+50) / 5 = 150 / 5 = 30$." },
        { q: "What evaluation is conducted at the end of a semester or course to certify students?", options: ["Formative Assessment", "Summative Assessment", "Diagnostic Assessment", "Placement Evaluation"], ans: 1, exp: "Summative assessment (terminal assessment) evaluates overall achievements at the end of a cycle." },
        { q: "According to NEP 2020, school education is structured in which sequence?", options: ["Foundational -> Preparatory -> Middle -> Secondary", "Preparatory -> Foundational -> Middle -> Secondary", "Foundational -> Middle -> Preparatory -> Secondary", "Middle -> Foundational -> Preparatory -> Secondary"], ans: 0, exp: "The sequence is Foundational (5 years), Preparatory (3 years), Middle (3 years), and Secondary (4 years)." },
        { q: "What is the second phase of Action Research?", options: ["Planning", "Action", "Observation", "Reflection"], ans: 1, exp: "Action research phases: Planning -> Action -> Observation -> Reflection." },
        { q: "In a normal distribution curve (NPC), what percentage of cases fall between -2 and +2 standard deviations?", options: ["68.26%", "95.44%", "99.73%", "50%"], ans: 1, exp: "Approximately 95.44% of cases fall within $\\pm 2$ standard deviations under a normal curve." },
        { q: "The Right of Children to Free and Compulsory Education (RTE) Act was enacted in which year in India?", options: ["2005", "2009", "2010", "2020"], ans: 1, exp: "RTE was enacted by Parliament in August 2009 (and enforced in April 2010)." },
        { q: "Which educational philosopher developed the 'project method' of learning?", options: ["John Dewey", "William Kilpatrick", "Friedrich Froebel", "Maria Montessori"], ans: 1, exp: "William Kilpatrick designed the Project Method based on John Dewey's pragmatism." },
        { q: "The mode of the distribution 5, 8, 8, 10, 12, 12, 12, 15 is:", options: ["8", "10", "12", "15"], ans: 2, exp: "The score 12 occurs most frequently (three times) and is the Mode." },
        { q: "Which document represents the state-level adaptation of NCF-2005 principles in Andhra Pradesh?", options: ["RTE-2010", "SCF-2011", "NEP-2020", "NCFSE-2023"], ans: 1, exp: "SCF-2011 is the State Curriculum Framework formulated for Andhra Pradesh." },
        { q: "Section 17 of the RTE Act 2009 strictly prohibits:", options: ["Admission fees", "Corporal punishment and mental harassment", "Private tuition by school teachers", "Screening procedures during admission"], ans: 1, exp: "Section 17 bans all forms of physical punishment and mental harassment." },
        { q: "The Median of the sorted scores 2, 4, 6, 8, 10 is:", options: ["4", "6", "8", "10"], ans: 1, exp: "The middle score of the 5 values is 6." },
        { q: "Action research is primarily designed to:", options: ["Formulate universal educational laws", "Resolve immediate, localized classroom issues", "Write doctoral theses", "Develop state textbook templates"], ans: 1, exp: "Action research solves immediate, contextual problems in the classroom." },
        { q: "Continuous and Comprehensive Evaluation (CCE) assesses which aspects of development?", options: ["Scholastic (Academic) only", "Co-scholastic (Non-academic) only", "Both Scholastic and Co-scholastic", "Physical fitness only"], ans: 2, exp: "CCE comprehensively maps scholastic achievements and co-scholastic growth (values, sports, habits)." },
        { q: "A normal probability curve is asymptotic, meaning:", options: ["Its tails touch the base line at extremes", "Its tails approach the base line but never touch it", "It is perfectly flat", "It has two peaks"], ans: 1, exp: "Asymptotic tails approach the x-axis infinitely but never touch it." },
        { q: "Under NEP 2020, what is the age range for the Foundational Stage?", options: ["3 to 6 years", "6 to 8 years", "3 to 8 years", "8 to 11 years"], ans: 2, exp: "The Foundational Stage covers age group 3-8 (3 years of preschool + classes 1 & 2)." },
        { q: "Which teaching aid operates as a visual-only instructional material?", options: ["Radio", "Slide projector", "Television", "Interactive smartboard"], ans: 1, exp: "Slide projectors display images visually without audio components, making them visual aids." },
        { q: "The formula for calculation of Median for grouped data uses 'cf'. What does 'cf' stand for?", options: ["Cumulative Frequency of the class preceding the median class", "Class Frequency", "Calculated Factor", "Constant Frequency"], ans: 0, exp: "'cf' is the cumulative frequency of the class interval immediately preceding the median class." },
        { q: "Under the RTE Act 2009, what is the teacher-pupil ratio for upper primary schools (classes 6-8)?", options: ["30:1", "35:1", "40:1", "45:1"], ans: 1, exp: "RTE Act mandates a teacher-pupil ratio of 35:1 for upper primary levels." },
        { q: "Which educationalist is associated with the 'Dalton Plan' of individualized school contracts?", options: ["Helen Parkhurst", "Maria Montessori", "William Kilpatrick", "John Dewey"], ans: 0, exp: "Helen Parkhurst developed the Dalton Laboratory Plan in 1919." },
        { q: "A teacher conducts a test before starting a new chapter to check students' entry-level knowledge. This is:", options: ["Formative evaluation", "Summative evaluation", "Placement evaluation", "Diagnostic evaluation"], ans: 2, exp: "Placement evaluation (pre-assessment) checks prerequisite skills and entry behaviors." },
        { q: "In statistics, the difference between the highest and lowest scores in a distribution is:", options: ["Standard deviation", "Mean deviation", "Range", "Quartile deviation"], ans: 2, exp: "Range is the simplest measure of dispersion: $\\text{Highest Value} - \\text{Lowest Value}$." },
        { q: "The NCFSE-2023 was developed by NCERT under the chairmanship of:", options: ["Dr. K. Kasturirangan", "Prof. Yash Pal", "Dr. Ramesh Pokhriyal", "Prof. G. Ravindra"], ans: 0, exp: "Dr. K. Kasturirangan headed the National Steering Committee that drafted NCFSE-2023." },
        { q: "What is the primary purpose of formative assessment?", options: ["Grading and certification", "Improving instruction and student learning during the course", "Selecting students for competitions", "Evaluating teacher performance"], ans: 1, exp: "Formative assessment provides ongoing diagnostic feedback to improve learning on-the-fly." },
        { q: "Under the RTE Act 2009, what is the minimum number of working hours per academic year for a primary teacher?", options: ["700 hours", "800 hours", "900 hours", "1000 hours"], ans: 1, exp: "RTE mandates a minimum of 800 instructional hours per year for primary and 1000 hours for upper primary teachers." },
        { q: "A normal distribution is skewed when:", options: ["Mean, Median, and Mode coincide", "Mean, Median, and Mode are different", "The curve is symmetrical", "Standard deviation is 1"], ans: 1, exp: "Skewness occurs when scores accumulate on one side of the distribution, separating Mean, Median, and Mode." },
        { q: "Which pedagogical leader created 'didactic apparatus' representing self-correcting wooden blocks?", options: ["Maria Montessori", "Friedrich Froebel", "John Dewey", "William Kilpatrick"], ans: 0, exp: "Montessori's didactic apparatus is self-correcting, letting children learn errors independently." },
        { q: "In action research, the action phase is carried out by:", options: ["External school inspectors", "The classroom teacher directly", "State textbook writers", "Parent-Teacher Association"], ans: 1, exp: "The classroom teacher implements the planned action directly to address the student problem." }
    ]
};
window.cdpMockTests = cdpMockTests;

