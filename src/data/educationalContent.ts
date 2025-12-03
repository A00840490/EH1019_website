export interface CQComponent {
  title: string;
  points: string[];
}

export interface VideoScenario {
  title: string;
  description: string;
  youtubeVideoId: string;
  educational: string;
}

export interface CaseStudy {
  title: string;
  scenario: string;
  analysis: string;
}

export interface EducationalPage {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  introduction: string;
  sections: {
    title: string;
    content?: string;
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
        content: "Cultural Intelligence (CQ) is defined as the capability to function effectively across various cultural contexts—including national, ethnic, organizational, and generational cultures. Unlike emotional intelligence (EQ), which focuses on understanding emotions, CQ specifically addresses the challenges of cross-cultural interactions. Research by David Livermore and the Cultural Intelligence Center has shown that individuals with high CQ are more effective in multicultural teams, adapt faster to new cultural environments, and achieve better outcomes in international business settings."
      },
      {
        title: "The 4 Components of CQ",
        components: [
          {
            title: "1. CQ Drive – Motivation to Engage Across Cultures",
            points: [
              "Intrinsic interest: genuine curiosity about how people from different cultures think, feel, and behave",
              "Extrinsic interest: recognizing the tangible benefits of cross-cultural skills for career advancement and personal growth",
              "Self-efficacy: confidence in your ability to navigate unfamiliar cultural situations successfully",
              "Persistence even when communication becomes challenging or misunderstandings occur",
              "Openness toward different customs, values, and behaviors without immediate judgment"
            ]
          },
          {
            title: "2. CQ Knowledge – Understanding Cultural Patterns",
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
            title: "3. CQ Strategy – Planning for Cultural Interactions",
            points: [
              "Awareness: actively monitoring your own cultural assumptions and biases during interactions",
              "Planning: preparing for cross-cultural encounters by researching and anticipating potential challenges",
              "Checking: verifying whether your cultural assumptions are accurate during and after interactions",
              "Developing mental maps for navigating specific cultural contexts",
              "Adjusting strategies based on real-time feedback and observations"
            ]
          },
          {
            title: "4. CQ Action – Adapting Behavior",
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
        title: "Why CQ Matters in Today's World",
        content: "Research shows that teams with high cultural intelligence outperform homogeneous teams by up to 35% on complex tasks. Organizations with culturally intelligent leadership report higher employee engagement in diverse teams, better customer relationships across markets, and more successful international expansions. On a personal level, developing your CQ opens doors to global career opportunities, enriches your relationships, and enhances your ability to navigate our interconnected world with confidence and empathy."
      }
    ],
    youtubeVideoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    slug: "videos-scenarios",
    title: "Videos and Real Workplace Scenarios",
    subtitle: "Multimedia Training",
    introduction: "Understanding cultural intelligence theory is just the beginning. The real challenge—and opportunity—lies in applying these concepts to real-world situations. The following scenarios represent common intercultural misunderstandings that occur daily in workplaces around the world. Each situation illustrates how different cultural backgrounds can lead to miscommunication, frustration, or missed opportunities, and demonstrates which CQ components can help bridge these gaps.",
    sections: [
      {
        title: "Workplace Scenarios",
        videos: [
          {
            title: "Direct vs Indirect Communication",
            description: "In this scenario, an American manager asks a Japanese team member for honest feedback on a project proposal. The American expects straightforward criticism, while the Japanese colleague provides subtle hints and qualifiers to avoid direct confrontation. The American interprets this as approval or lack of engagement, while the Japanese employee feels they clearly communicated their concerns. This disconnect leads to project issues that could have been addressed earlier.",
            youtubeVideoId: "dQw4w9WgXcQ",
            educational: "This scenario illustrates Edward Hall's concept of High-Context vs Low-Context communication. In low-context cultures (US, Germany, Netherlands), meaning is conveyed primarily through explicit words. In high-context cultures (Japan, China, Arab countries), meaning is embedded in context, relationship, and non-verbal cues. Applying CQ Strategy helps you recognize these patterns, while CQ Knowledge provides the framework for understanding why they exist."
          },
          {
            title: "Emotional Expression Across Cultures",
            description: "During a team meeting, an Italian project manager passionately discusses a deadline change, using animated gestures and raising her voice to emphasize urgency. Her Finnish colleague interprets this emotional display as unprofessional anger and becomes uncomfortable. Meanwhile, the Italian is confused why her colleague seems distant and disengaged, interpreting the Finnish calm demeanor as indifference to the project's success.",
            youtubeVideoId: "dQw4w9WgXcQ",
            educational: "Different cultures have varying norms around emotional expression in professional settings. Some cultures (Mediterranean, Latin American) view emotional expressiveness as authentic and engaging, while others (Nordic, East Asian) value emotional restraint as professional and respectful. CQ Action helps you calibrate your emotional expression to match the expectations of your audience while remaining authentic."
          },
          {
            title: "Time Orientation",
            description: "A German project manager schedules a video call for 2:00 PM sharp with team members from Brazil, Germany, and Mexico. The German joins exactly at 2:00, the Brazilian at 2:15 after finishing a conversation with a colleague, and the Mexican at 2:10 after unexpected traffic. The German views the late arrivals as disrespectful, while the Brazilian and Mexican colleagues don't understand the frustration—in their view, starting a few minutes late to honor existing commitments shows good values.",
            youtubeVideoId: "dQw4w9WgXcQ",
            educational: "This scenario demonstrates the difference between monochronic and polychronic time orientations. Monochronic cultures (Germany, Switzerland, US) treat time as linear, fixed, and valuable—punctuality equals respect. Polychronic cultures (Latin America, Middle East, Africa) view time as flexible and prioritize relationships over schedules. Neither approach is superior; understanding these differences through CQ Knowledge prevents judgment and enables better collaboration."
          },
          {
            title: "Hierarchy and Decision-Making",
            description: "A Swedish manager tells her Indian team member to 'take ownership' of a new initiative and 'do what you think is best.' She expects him to make autonomous decisions and come back with recommendations. The Indian employee, accustomed to clearer hierarchical guidance, waits for more specific instructions and approval before acting. Weeks pass with little progress, leading to mutual frustration—the manager sees lack of initiative, while the employee feels unsupported and unclear about expectations.",
            youtubeVideoId: "dQw4w9WgXcQ",
            educational: "This illustrates Hofstede's Power Distance dimension. Low power distance cultures (Sweden, Denmark, Israel) expect employees to take initiative and challenge authority. High power distance cultures (India, Malaysia, Mexico) expect clear direction from leaders and view autonomous action as potentially overstepping. CQ Strategy helps managers adapt their leadership style, while CQ Action enables appropriate behavioral adjustments in different hierarchical contexts."
          }
        ]
      },
      {
        title: "Expert Insights",
        content: "Cultural intelligence isn't about memorizing facts about different countries or following a checklist of dos and don'ts. It's about developing a mindset of curiosity and adaptability. The most culturally intelligent professionals share three traits: they suspend judgment when encountering unfamiliar behaviors, they actively seek to understand the 'why' behind cultural differences, and they remain flexible in their own approach. Remember that every individual is unique—cultural patterns are starting points for understanding, not stereotypes to apply rigidly."
      }
    ]
  },
  {
    id: 3,
    slug: "real-cases",
    title: "Real Workplace Cases & Cultural Insights",
    subtitle: "Story-Based Learning",
    introduction: "The following cases are inspired by real intercultural situations that professionals encounter in global organizations. Each story highlights the complexity of cross-cultural communication and demonstrates how applying cultural intelligence can transform potential conflicts into opportunities for deeper understanding and collaboration. As you read each case, consider how you might apply the CQ components to navigate similar situations in your own professional life.",
    sections: [
      {
        title: "Case Studies",
        cases: [
          {
            title: "The Silent Expert: Silence in Meetings",
            scenario: "During a product development meeting at a multinational tech company, the American team lead asks for input on a proposed feature. Ji-Yeon, a highly skilled Korean software engineer, remains silent despite having valuable insights. The American manager interprets her silence as lack of ideas or disengagement and later questions her commitment to the project in a performance review. Ji-Yeon is deeply hurt—she was waiting for a direct invitation to speak, showing respect for the group discussion and her superiors, and didn't want to appear boastful by volunteering opinions unsolicited.",
            analysis: "This case demonstrates the collision between low-context communication (where speaking up is expected and valued) and high-context communication (where silence can indicate thoughtfulness, respect, or deference). Ji-Yeon's behavior reflects Confucian values of humility and respect for hierarchy. Applying CQ Strategy, the manager could have directly invited her input or created structured opportunities for all team members to contribute. CQ Knowledge about Korean workplace norms would have prevented the misinterpretation."
          },
          {
            title: "Lost in Translation: Feedback Styles",
            scenario: "Hans, a German project manager, provides performance feedback to his Mexican colleague, Carlos. Hans says directly: 'Your last report had several errors and the analysis was superficial. You need to improve your attention to detail.' Carlos, accustomed to feedback being delivered with relationship-building context and encouragement, perceives this as a harsh personal attack. He becomes demotivated and starts avoiding interactions with Hans. Meanwhile, Hans is puzzled—he thought he was being helpful by providing clear, actionable feedback.",
            analysis: "This case illustrates how feedback delivery styles vary dramatically across cultures. German business culture values directness and separates personal relationships from professional critique—direct feedback is seen as respectful and efficient. Mexican business culture emphasizes 'personalismo'—building strong personal relationships and delivering criticism gently within a context of positive reinforcement. Using CQ Action, Hans could adapt his feedback delivery to include relationship affirmation while still being clear about areas for improvement."
          },
          {
            title: "The Deadline Dilemma: Working with Deadlines",
            scenario: "Sarah, an American project coordinator, sets a firm deadline for a deliverable with her Mexico City team. When the deadline arrives, the Mexican team requests an extension, explaining they had prioritized helping a colleague with an urgent client issue. Sarah is frustrated—in her view, a commitment is a commitment. The Mexican team is confused by her rigidity—they believed demonstrating flexibility and supporting colleagues reflected strong work values. This pattern repeats, creating tension and eroding trust on both sides.",
            analysis: "This case highlights different cultural orientations toward time and commitment. American business culture tends toward monochronic time orientation, where schedules and deadlines are treated as firm commitments. Mexican culture, with polychronic tendencies, views relationships and present needs as potentially more important than predetermined schedules. Neither approach is wrong—they reflect different underlying values. CQ Drive helps Sarah understand the Mexican team's motivations (relationship-building, flexibility, present-orientation), while CQ Strategy enables her to set expectations that account for cultural differences."
          }
        ]
      },
      {
        title: "Applying These Lessons",
        content: "These cases reveal a fundamental truth about cross-cultural work: behaviors that seem confusing or frustrating often make perfect sense within their cultural context. The key is developing the curiosity to ask 'why' before making judgments. When you encounter unexpected behavior, pause and consider: What cultural values might be driving this? What would this behavior mean in their cultural context? How can I adapt my approach to bridge our different expectations? This reflective practice, combined with ongoing learning about cultural patterns, forms the foundation of true cultural intelligence."
      }
    ]
  }
];