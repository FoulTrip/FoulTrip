type Content = {
  Intro: {
    title: string;
    subText: string;
    characteristics: {
      title: string;
      description: string;
    }[];
    finalText: string;
  };
  explain: {
    imagenIntro: string;
    description: string;
    characteristics: {
      title: string;
      description: string;
    }[];
  };
};

type Topic = {
  id: string;
  topicId: string;
  content: Content;
};
