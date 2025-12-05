export interface CQComponent {
  title: string;
  points: string[];
  imageUrl?: string;
}

export interface VideoScenario {
  title: string;
  description: string;
  youtubeVideoId: string;
  educational?: string;
  imageUrl?: string;
}

export interface CaseStudy {
  title: string;
  scenario: string;
  analysis: string;
  imageUrl?: string;
}

export interface EducationalPage {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  introduction: string;
  introImageUrl?: string;
  sections: {
    title: string;
    content?: string;
    imageUrl?: string;
    components?: CQComponent[];
    videos?: VideoScenario[];
    cases?: CaseStudy[];
  }[];
  youtubeVideoId?: string;
}


export const educationalPages: EducationalPage[] = [ 
  {
    id: 1,
    slug: "what-is-cq",
    title: "What Is Cultural Intelligence (CQ)?",
    subtitle: "Fundamental Concepts",
    introduction: "Imagine being able to understand, connect with, and collaborate with people from any culture, without misunderstandings or unnecessary clashes. That's exactly what cultural intelligence allows you to achieve. It's not just about learning customs or traditions, but about developing the ability to adapt, communicate effectively, and make sound decisions in diverse cultural contexts. In an increasingly globalized world, where we work, study, and interact with people from different backgrounds, this skill has become essential.",
    sections: [
      {
        title: "Understanding Cultural Intelligence",
        content: "Cultural Intelligence (CQ) is defined as the capability to function effectively across various cultural contexts including national, ethnic, organizational, and generational cultures. Unlike emotional intelligence (EQ), which focuses on understanding emotions, CQ specifically addresses the challenges of cross-cultural interactions. Research by David Livermore and the Cultural Intelligence Center has shown that individuals with high CQ are more effective in multicultural teams, adapt faster to new cultural environments, and achieve better outcomes in international business settings.",
        imageUrl: "edu-brainstorming.jpg",
      },
      {
        title: "The 4 Components of CQ",
        components: [
          {
            title: "1. CQ Drive, Motivation to Engage Across Cultures",
            points: [
              "Intrinsic interest: genuine curiosity about how people from different cultures think, feel, and behave",
              "Extrinsic interest: recognizing the tangible benefits of cross-cultural skills for career advancement and personal growth",
              "Self-efficacy: confidence in your ability to navigate unfamiliar cultural situations successfully",
              "Persistence even when communication becomes challenging or misunderstandings occur",
              "Openness toward different customs, values, and behaviors without immediate judgment"
            ]
          },
          {
            title: "2. CQ Knowledge, Understanding Cultural Patterns",
            points: [
              "Cultural systems: understanding how economic, legal, educational, and political systems vary across cultures",
              "Cultural values: recognizing patterns like individualism vs collectivism, power distance, uncertainty avoidance",
              "Communication styles: direct vs indirect communication, high-context vs low-context cultures (Edward Hall's model)",
              "Business practices: negotiation styles, decision-making processes, relationship-building approaches",
              "Social norms: etiquette, taboos, appropriate behaviors in professional and social settings",
              "Religious and philosophical influences on behavior and values"
            ]
          },
          {
            title: "3. CQ Strategy, Planning for Cultural Interactions",
            points: [
              "Awareness: actively monitoring your own cultural assumptions and biases during interactions",
              "Planning: preparing for cross-cultural encounters by researching and anticipating potential challenges",
              "Checking: verifying whether your cultural assumptions are accurate during and after interactions",
              "Developing mental maps for navigating specific cultural contexts",
              "Adjusting strategies based on real-time feedback and observations"
            ]
          },
          {
            title: "4. CQ Action, Adapting Behavior",
            points: [
              "Verbal behavior: adapting your communication style, tone, pace, and choice of words",
              "Non-verbal behavior: modifying gestures, facial expressions, personal space, and eye contact",
              "Speech acts: adjusting how you make requests, give feedback, express disagreement, or show appreciation",
              "Flexibility in conflict resolution approaches across different cultural expectations",
              "Matching the formality level expected in different professional contexts"
            ]
          }
        ]
      },
      {
        title: "Why does CQ Matters in Today's World?",
        content: "Research shows that teams with high cultural intelligence outperform homogeneous teams by up to 35% on complex tasks. Organizations with culturally intelligent leadership report higher employee engagement in diverse teams, better customer relationships across markets, and more successful international expansions. On a personal level, developing your CQ opens doors to global career opportunities, enriches your relationships, and enhances your ability to navigate our interconnected world with confidence and empathy.",
        imageUrl: "edu-handshake.jpg",
      }
    ],
    youtubeVideoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    slug: "communication-scenarios-part1",
    title: "Building Initial Awareness - Part 1",
    subtitle: "Direct vs Indirect Communication & Emotional Expression",
    introduction: "This section focuses on how curiosity and understanding shape cross-cultural teamwork. In the case of frequent messages from a colleague, CQ Drive encourages individuals to stay open and motivated to explore why others communicate differently instead of assuming annoyance or bad intentions. In the meeting interruption scenario, CQ Knowledge helps team members recognize that behaviors such as cutting someone off or speaking quickly can hold very different meanings across cultures. By approaching these moments with curiosity and a willingness to learn, teams avoid unnecessary tension and create a more respectful, supportive environment for collaboration.",
    introImageUrl: 'edu-group-friends.jpg',
    sections: [
      {
        title: "Communication Workplace Scenarios",
        videos: [
          {
            title: "Motivation",
            description: "In this scenario, an employee feels annoyed because their teammate from India sends many messages and they assume it is unnecessary. The employee does not consider that communication styles vary across cultures. Another colleague explains that in some cultures asking many questions shows responsibility and a desire to avoid mistakes. The frustrated employee realizes they never tried to understand the teammate’s perspective. This situation shows how low CQ Drive can create misunderstandings that affect teamwork, and how being more curious and open can lead to better collaboration.",
            youtubeVideoId: "nG78T8pwC64",
          },
          {
            title: "Understanding differences",
            description: "During a team discussion, one employee cuts off a colleague because they believe moving quickly is more important than hearing the full idea. The colleague who was interrupted feels uneasy, since in their culture finishing a thought without interruption is a sign of respect. After explaining this, the interrupting employee realizes they were unaware of how their behavior might be interpreted and appreciates the clarification. This moment illustrates how limited CQ Knowledge can create avoidable tension, and how recognizing cultural communication differences helps teams work together more effectively.",
            youtubeVideoId: "ULHmRnmJVHw",
          }
        ]
      },
      {
        title: "Key Takeaways",
        content: "What seems excessive, abrupt, or disrespectful in one context may simply reflect a different communication norm or expectation. Taking a moment to ask why someone acts a certain way often prevents misunderstandings that could be mistaken for personal conflict. By staying motivated to learn about others and recognizing that behaviors carry different meanings across cultures, you can respond with greater empathy and clarity. Developing CQ Drive and CQ Knowledge helps you interpret actions more accurately and build stronger, more respectful collaboration.",
      }
    ]
  },
  {
    id: 3,
    slug: "communication-scenarios-part2",
    title: "Applying CQ in Real Life Encounters - Part 2",
    subtitle: "Applying CQ in Real Team Interactions",
    introduction: "Following the previous scenarios, this section connects CQ to everyday situations where pacing, clarity, and communication style play an important role. Teams often move at different speeds or rely on different levels of detail, and hierarchy can influence who speaks and how ideas are shared. By using CQ Strategy to plan ahead and CQ Action to adjust during the moment, team members can slow down when needed, summarize key points, or change their delivery so everyone stays aligned. These small shifts help prevent confusion and make cross-cultural teamwork smoother and more supportive.",
    introImageUrl: 'edu-team-discussion.jpg',
    sections: [
      {
        title: "Applying CQ in Real Team Interactions",
        videos: [
          {
            title: "Planning & adjusting",
            description: "Before a cross-country meeting, a team discusses how to prepare for working with colleagues from different cultural backgrounds. One person suggests thinking ahead about preferred communication styles, while another proposes checking whether the group usually expects detailed explanations or simple step-by-step guidance. Once the meeting begins, they notice that some participants seem unsure, so the team slows the conversation and offers a clear summary to help everyone follow along. This example shows how CQ Strategy involves anticipating cultural needs, paying attention to how others react, and adjusting in real time to keep communication effective.",
            youtubeVideoId: "3PbTCKk4v4M",
          },
          {
            title: "Adapting your behavior",
            description: "During a work conversation, one employee moves quickly through instructions, speaking at a speed that leaves a colleague struggling to follow. The confused coworker asks for a slower pace and a clearer explanation. Realizing the issue, the first employee adjusts, repeating the steps more calmly and making sure the information is easier to process. This interaction demonstrates CQ Action, where small behavioral changes—such as slowing down, rephrasing, or adapting tone—can significantly improve understanding and make communication smoother for everyone involved.",
            youtubeVideoId: "t2ikTBZum7E",
          }
        ]
      },
      {
        title: "Understanding Cultural Intelligence",
        content: "CQ helps you recognize, plan for, and adapt to cultural differences so interactions run more smoothly. Many workplace misunderstandings that seem like personal conflicts actually come from different communication styles, expectations, or assumptions shaped by culture. By strengthening your CQ Drive, Knowledge, Strategy, and Action, you become better at noticing these differences, preparing for them, and adjusting your behavior in real time. This mindset leads to clearer communication, fewer avoidable conflicts, and more effective collaboration across diverse teams.",
      }
    ]
  },
  {
    id: 4,
    slug: "expert-insights",
    title: "Expert Insights on Cultural Intelligence",
    subtitle: "Professional Perspectives & Best Practices",
    introduction: "To deepen your understanding of cultural intelligence in action, we've gathered insights from experts and practitioners who work daily in multicultural environments. This section combines professional wisdom with a comprehensive video resource that demonstrates the practical application of CQ principles.",
    introImageUrl: 'edu-professional-woman.jpg',
    sections: [
      {
        title: "",
        content: "Cultural intelligence isn't about memorizing facts about different countries or following a checklist of dos and don'ts. It's about developing a mindset of curiosity and adaptability. The most culturally intelligent professionals share three traits: they suspend judgment when encountering unfamiliar behaviors, they actively seek to understand the 'why' behind cultural differences, and they remain flexible in their own approach. Remember that every individual is unique cultural patterns are starting points for understanding, not stereotypes to apply rigidly.",
        videos: [
          {
            title: "",
            description: "",
            youtubeVideoId: "WyelXB3oq2k",
          },
        ]
      },
      {
        title: "",
        content: "Developing cultural intelligence is a continuous journey that requires both learning and practice. Start by reflecting on your own cultural background and how it shapes your assumptions. Then, actively seek opportunities to interact with people from different cultures not just internationally, but within your own organization and community. Each interaction is an opportunity to test your assumptions, learn new patterns, and refine your approach. The most important skill is maintaining curiosity and humility in the face of cultural differences."
      },
    ]
  },
  {
    id: 5,
    slug: "case-silence-feedback",
    title: "Real Case Studies - Part 1",
    subtitle: "Silence and Feedback Across Cultures",
    introduction: "The following cases are inspired by real intercultural situations that professionals encounter in global organizations. Each story highlights the complexity of cross-cultural communication and demonstrates how applying cultural intelligence can transform potential conflicts into opportunities for deeper understanding and collaboration.",
    introImageUrl: 'edu-global-meeting.jpg',
    sections: [
      {
        title: "Case Studies: Communication Challenges",
        cases: [
          {
            title: "The Silent Expert: Silence in Meetings",
            scenario: "During a product development meeting at a multinational tech company, the American team lead asks for input on a proposed feature. Ji-Yeon, a highly skilled Korean software engineer, remains silent despite having valuable insights. The American manager interprets her silence as lack of ideas or disengagement and later questions her commitment to the project in a performance review. Ji-Yeon is deeply hurt she was waiting for a direct invitation to speak, showing respect for the group discussion and her superiors, and didn't want to appear boastful by volunteering opinions unsolicited.",
            analysis: "This case demonstrates the collision between low-context communication (where speaking up is expected and valued) and high-context communication (where silence can indicate thoughtfulness, respect, or deference). Ji-Yeon's behavior reflects Confucian values of humility and respect for hierarchy. Applying CQ Strategy, the manager could have directly invited her input or created structured opportunities for all team members to contribute. CQ Knowledge about Korean workplace norms would have prevented the misinterpretation."
          },
          {
            title: "Lost in Translation: Feedback Styles",
            scenario: "Hans, a German project manager, provides performance feedback to his Mexican colleague, Carlos. Hans says directly: 'Your last report had several errors and the analysis was superficial. You need to improve your attention to detail.' Carlos, accustomed to feedback being delivered with relationship-building context and encouragement, perceives this as a harsh personal attack. He becomes demotivated and starts avoiding interactions with Hans. Meanwhile, Hans is puzzled he thought he was being helpful by providing clear, actionable feedback.",
            analysis: "This case illustrates how feedback delivery styles vary dramatically across cultures. German business culture values directness and separates personal relationships from professional critique direct feedback is seen as respectful and efficient. Mexican business culture emphasizes 'personalismo' building strong personal relationships and delivering criticism gently within a context of positive reinforcement. Using CQ Action, Hans could adapt his feedback delivery to include relationship affirmation while still being clear about areas for improvement."
          }
        ]
      },
      {
        title: "What Did We Learned?",
        content: "These cases reveal how deeply cultural values influence workplace behaviors. Silence doesn't always mean disengagement, and directness isn't always appreciated. The key is recognizing that our own cultural norms feel 'natural' to us, while others' norms may seem strange or inappropriate. Cultural intelligence helps us suspend these judgments and instead seek to understand the underlying values and expectations that drive different behaviors."
      }
    ]
  },
  {
    id: 6,
    slug: "case-deadlines",
    title: "Real Case Studies - Part 2",
    subtitle: "Time Management and Commitments",
    introduction: "Continuing our exploration of real workplace cases, this section focuses on how different cultures perceive time, deadlines, and commitments. These differences can create significant friction in cross-cultural teams if not properly understood and managed.",
    introImageUrl: 'edu-office-collaboration.jpg',
    sections: [
      {
        title: "Case Study: Working with Time",
        cases: [
          {
            title: "The Deadline Dilemma: Working with Deadlines",
            scenario: "Sarah, an American project coordinator, sets a firm deadline for a deliverable with her Mexico City team. When the deadline arrives, the Mexican team requests an extension, explaining they had prioritized helping a colleague with an urgent client issue. Sarah is frustrated in her view, a commitment is a commitment. The Mexican team is confused by her rigidity they believed demonstrating flexibility and supporting colleagues reflected strong work values. This pattern repeats, creating tension and eroding trust on both sides.",
            analysis: "This case highlights different cultural orientations toward time and commitment. American business culture tends toward monochronic time orientation, where schedules and deadlines are treated as firm commitments. Mexican culture, with polychronic tendencies, views relationships and present needs as potentially more important than predetermined schedules. Neither approach is wrong they reflect different underlying values. CQ Drive helps Sarah understand the Mexican team's motivations (relationship-building, flexibility, present-orientation), while CQ Strategy enables her to set expectations that account for cultural differences."
          }
        ]
      },
      {
        title: "Bridging Time Orientation Differences",
        content: "Time orientation differences are among the most common sources of frustration in cross-cultural teams. The solution isn't for one side to simply adopt the other's approach, but rather to create shared understandings about priorities and commitments. This might mean being more explicit about which deadlines are flexible and which are firm, or building buffer time into schedules to accommodate different working styles. The key is open communication about expectations and mutual respect for different cultural values."
      }
    ]
  },
  {
    id: 7,
    slug: "applying-cq",
    title: "Applying Cultural Intelligence in Your Life",
    subtitle: "Practical Steps Forward",
    introduction: "You've now explored the foundations of cultural intelligence and seen how it applies to real workplace situations. The final step is understanding how to integrate these concepts into your daily professional life and continue developing your CQ over time.",
    sections: [
      {
        title: "",
        content: "These cases reveal a fundamental truth about cross-cultural work: behaviors that seem confusing or frustrating often make perfect sense within their cultural context. The key is developing the curiosity to ask 'why' before making judgments. When you encounter unexpected behavior, pause and consider: What cultural values might be driving this? What would this behavior mean in their cultural context? How can I adapt my approach to bridge our different expectations? This reflective practice, combined with ongoing learning about cultural patterns, forms the foundation of true cultural intelligence.",
        imageUrl: 'edu-workshop.jpg',
      },
      {
        title: "Your CQ Development Journey",
        content: "Building cultural intelligence is a lifelong journey that requires continuous learning, practice, and reflection. Start by identifying your own cultural assumptions and biases. Then, actively seek diverse perspectives and experiences. When misunderstandings occur, treat them as learning opportunities rather than failures. Ask questions with genuine curiosity. Read about different cultures, but remember that cultural frameworks are tools for understanding patterns, not rigid rules for predicting individual behavior. Most importantly, approach every cross-cultural interaction with humility, openness, and a willingness to adapt."
      },
      {
        title: "Moving Forward",
        imageUrl: 'edu-team-meeting.jpg',
        content: "As you continue your journey with cultural intelligence, remember that perfection isn't the goal growth is. You will make mistakes, misread situations, and occasionally offend despite your best intentions. What matters is how you respond to these moments: with curiosity instead of defensiveness, with apology when appropriate, and with commitment to learning. The world needs more culturally intelligent leaders, colleagues, and global citizens. By developing your CQ, you're not just advancing your career you're contributing to a more understanding and connected world."
      }
    ]
  }
];