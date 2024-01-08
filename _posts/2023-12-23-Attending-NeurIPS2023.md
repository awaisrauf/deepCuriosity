---
layout: post
title: Attending NeurIPS 2023
published: True
tags: [research, experiences]
date:  2023-12-23 13:58:39 +0400
excerpt: NeurIPS is the top conference for artificial intelligence (AI) research [2]. It offers an excellent opportunity to present your work to fellow researchers, gain a sense of the latest developments in AI, and connect with the people driving the field. Despite having my paper accepted, I couldn't attend the last two sessions due to COVID and visa issues. However, I managed to participate in this year's conference in New Orleans, United States. It was an incredible week filled with all things AI. In the following, I will document the talks I attended, the papers I liked, the people I met, and the things I learned.
---
<style>
  .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust the number of columns */
      gap: 5px; /* Adjust the gap between images */
      margin: 0 auto; /* Center align the gallery items */

  }

  .image-container {
      position: relative;
      width: 200px; /* Set your desired width for images */
      height: 200px; /* Set your desired height for images */
      overflow: hidden;
  }

  .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Crop the image to cover the container */
  }

  figure {
    /* position: relative; */
    text-align: center; /* Center-aligns the image and caption */
    margin-bottom: 0px; /* Adjust as needed */
  }
  figcaption {
    font-style: italic;
    font-size: 0.85em; /* Adjust as needed */
    color: #666; /* Adjust as needed */
    margin-bottom: 10px;
    margin-top: -20px;
  }
  /* to make sure tables are formatted as i want */
  td:first-child {
    font-weight: normal;
    text-align: left;
  }
  .toggle-box {
    border: 1px solid #ccc; /* Gray border */
    padding: 5px; /* Padding around the details content */
    margin-bottom: 10px; /* Spacing at the bottom */
    background-color: #f5f5f5; /* Gray background color */
  }
    /* Style for first-level list items */
  .first-level {
    background-color: lightgray;
    margin-bottom: 0px;
    padding: 5px;
  }

  /* Style for second-level list items */
  .second-level {
    background-color: lightgray;
    margin-left: 20px;
    margin-bottom: 0px;
    padding: 0px;
  }
</style>

<figure>
  <img src="/img/nips23/nips_poster.jpeg">
  <figcaption>
    Taken from <a href="https://twitter.com/Vikashplus"> @Vikashplus</a><a href="https://pbs.twimg.com/media/GBgO5UDXkAAwy_E"></a>.
  </figcaption>
</figure>
  
<details class="toggle-box">
  <summary>Table of Contents</summary>
  <ul class="first-level">
    <li><a href="#invited_talks">Invited Talks</a> </li>
    <li><a href="#socializing">Socializing</a></li>
    <li><a href="#papers">Poster Sessions and Papers</a></li>
    <li><a href="#workshops">Workshops</a></li>
      <ul class="second-level">
        <li><a href="#subsection2_1">New in ML</a></li>
        <li><a href="#solar">Socially Responsible Language Modelling Research (SoLaR)</a></li>
        <li><a href="#backdoors">Backdoors in Deep Learning: The Good, the Bad, and the Ugly </a></li>
      </ul>
    <li><a href="#references">References</a></li>
  </ul>
</details>

<!-- Intro -->
NeurIPS is the top conference for artificial intelligence (AI) research [2]. It offers an excellent opportunity to present your work to fellow researchers, gain a sense of the latest developments in AI, and connect with the people driving the field. Despite having my paper accepted, I couldn't attend the last two sessions due to COVID and visa issues. However, I managed to participate in this year's conference in New Orleans, United States. It was an incredible week filled with all things AI. In the following, I will document the talks I attended, the papers I liked, the people I met, and the things I learned.
<h2 id="invited_talks"> Invited Talks </h2>

The main conference kicked off with an overview of the conference. This year's conference was huge, with ~15k attendees and ~3500 posters.

<img src="/img/nips23/works/talk0_1.png" style="width: 60%;">

###### NextGenAI: The Delusion of Scaling and the Future of Generative AI

Then, there was an invited talk by [Björn Ommer](https://ommer-lab.com/people/ommer/) on generative AI and scaling. Ommer is famous for his lab's work on Stable Diffusion [4]. He started his talk with the bigger picture and argued that the purpose of human vision is to understand and comprehend things around us without needing to touch them. This is because our vision consists of a brain inside a box with only a narrow opening that provides a sketchy understanding of the outer world. The vision has to solve this problem of why things look the way they look. So, visual understanding is the hallucination of the world. Connecting this to visual understanding in the era of generative AI, he showcased how, for the most part, we did preception answering "what, where, and when" questions.
In contrast, the other side consisted of prediction or generative. The generative side tries to predict missing parts of the world. Vision research in perception has been driven by benchmarks for the last few years. However, we do not have good benchmarks in the Generative AI (GenAI) era. The lack of formal benchmarks means everyone runs in their direction.  

<img src="/img/nips23/works/talk1_1.png" style="width: 60%;">

Next, he discussed how generative models face a classical dilemma between data coverage (VAEs) and sample quality (GANs). Strong likelihood models like auto-regressive models (ARM) and Diffusion models (DMs) solve this issue. However, these models are expensive as they try to cover every bit of data distribution, and most resources are dedicated to small, imperceptible details rather than perceptually relevant information.

<img src="/img/nips23/works/talk1_2.png" style="width: 60%;">

There are two possible solutions to DM's hunger for capturing smaller details: naively increasing the model size or finding ways to capture meaningful details only. Scaling is one solution mentioned in Richard Sutton's blog, Bitter Lessons [3]. But there is a bottleneck in scaling. The increase in model sizes is flattening as speedup in GPUs is not catching up with demand in model size increase. Björn argued that scaling is not the solution and simply hoping for scaling to work is hopeless. Then, what should we take from bitter lessons [3]? He argued that lessons are that architectures that better exploit scalable commodities win. He gave examples of rule-based vs. gradient-based learning, kernel methods vs. CNNs, and supervised vs. self-supervised to support his argument. Another critical point is that we are blind to changes of change and think that progress is due to scaling only. Instead, after the saturation point in progress from scaling, it is driven by paradigm shift, such as CPUs to GPUs.

<figure>
  <img src="/img/nips23/works/talk1_3.png" style="width: 60%;">
  <figcaption>
    Progress is driven by scaling until the saturation point and then by paradigm shifts.
  </figcaption>
</figure>

An important question, then, he asked, is, can we get intelligence by simply scaling? He argued maybe it is possible, but intelligence mainly comes with learning with finite resources. The importance of AI in the modern world means we need models everyone can run. This is the motivation of stable diffusion [4]. Stable aimed at capturing local details and long-range interactions. Different architectural modifications, such as attention, also address these issues. But, there is no one-size-fit approach. Current ARMs are good at long-range interactions but not at capturing local ones. CNNs are good at learning local details. Diffusion models combine these two characteristics.

<img src="/img/nips23/works/talk1_4.png" style="width: 60%;">

In the rest of the talk, he described diffusion models and the critical questions surrounding them. Diffusion models first learn perceptual compression and then learn to generation. More details are in this recent survey [5]. But where can latent diffusion models lead us? This led them to add a flow-matching approach with DMs to improve sampling frequency, making inference fast [6]. Next, they asked what models they should even learn. Neural nets are made to learn a lot of details that may not be important for the downstream task. One approach: add a database of patches. The model first retrieves these patches and focuses on learning long-range details conditioned on retrieved patches. With simple nearest-neighbor retrieval, small models can perform better. Next, understanding the world requires poking the world, so they proposed a generative-based approach called iPoke[7]. He also discussed the uses of LoRA for scene editing scene, using combined LoRA to do certain things like changing style, etc. Naive combinations do not work, but ZipLoRA[8] but takes resources. So, his lab introduced a more efficient method.

The second talk I attended was [The many faces of Responsible AI](https://diamond-tilapia-430.notion.site/Lora-Aroyo-The-Many-Faces-of-Responsible-AI-adf8f54bc5e842d98d85e2d4bd18333e) by Lora Aroyo. This talk was about the importance of data for responsible AI. Lora highlighted how the world is not binary but rather a spectrum. For instance, data should not be divided into good or bad, but rather a spectrum between these two. Furthermore, she also highlighted the signals in the data labels disagreement and how it can be useful. For the alignment, we need diverse and non-polar data. Overall, this talk discussed the role of data for responsible AI.

<h2 id="socializing"> Socializing </h2>

<figure>
  <img src="/img/nips23/jazz.jpg">
  <figcaption>
    Attended a live jazz performance at Preservation Hall.
  </figcaption>
</figure>

The most enjoyable part of attending an AI conference is connecting with old acquaintances and forging new friendships with people who are shaping the frontiers of the field. NeurIPS is unique in this aspect for its diverse attendees from all facets of machine learning. I engaged with numerous fascinating people, indulged in several hour-long discussions, and gained valuable insights into the current happenings within the field. Here is a list of people I met.

- [Prof. Yan Lecun](https://en.wikipedia.org/wiki/Yann_LeCun) is an icon in deep learning. I found him during a poster session. His answers were surprisingly frank and gave a broader picture of the field. He answered our questions about AGI, deep learning, and contrastive learning. One thing that stuck with me was his insistence that the difference between chimp and the human genome is only 8 Mbs. I found him kind and willing to answer our naive questions patiently.

- [Prof. Ben Rubinstein](https://www.bipr.net/) is a professor at the University of Melbourne. I saw his post on Twitter and DMed him for a "chat and coffee" session, and he was kind enough to accept the invitation. What followed was an hour-and-a-half-long intense and captivating discussion on the past, present, and future of adversarial ML. He worked on adversarial ML way before the famed intriguing properties paper [1]. He told interesting tidbits about the back-and-forth of adversarial attacks and defenses before the deep learning ones. He explained how before gradient-based approaches, features and heuristic-based approaches were utilized to craft adversarial attacks and defenses on earlier ML systems like spam filters. He also shared his journey from industry to academia and his lab's recent work on certified robustness. Thank you for the time and such an amazing discussion, Ben. :)

- [Alex Sablayrolles](https://ai.meta.com/people/alexandre-sablayrolles/) is with Mistral. We had an interesting discussion about recent advances around LLMs in Mistral, his decision to move to Mistral, the state of AI in France, and how LLMs are changing the field.

- [Prof. Kira](https://faculty.cc.gatech.edu/~zk15/) is a professor at GaTech. I had a long discussion with a wide array of topics: his views on how the field of computer vision (CV) is moving, the influence of large models on CV, his style of research and his lab's recent works, the classic debate of industry vs. academia and what one needs to move to academic jobs. He also shared his personal story on how he moved from industry to academia.

- [Prof. Cihang Xie](https://cihangxie.github.io/) is an assistant professor at the UCSC. I got to know him from one of his papers in ICLR 2019 and started his work. I like his style of research. I discussed his paper with him and how his lab improved CLIP with the inverse law, which aims to shorten text in image-text pairs without reducing performance. We also had a general discussion on how computer vision is moving in the era of large models and how traditional CV tasks are changing. He also gave me advice on how to conduct research more effectively in academia.

- [Prof. Nicolas Carlini](https://nicholas.carlini.com/)  is renowned for his expertise in adversarial ML, model security, and breaking new adversarial defenses. Our conversation delved into the limitations of defenses against adversarial examples, foreseeing potential changes in the field amid the era of LLMs, where attacks might become more pragmatic and perilous.

- [David Abeel](https://david-abel.github.io/) is at DeepMind. I have known him since his Ph.D. days when he used to publish beautiful notes about attending conferences [23]. I asked him questions about his notes and advice for early-career research. He mentioned a great paper on how to pick scientific problems [24].

- [Prof. Devi Parikh](https://faculty.cc.gatech.edu/~parikh/) is a professor at GaTech. I have used her guidelines on how to write rebuttals [25]. I asked her questions about her research and her processes for regret minimization of decisions.

- [Prof. Adam Dziedzic and Prof. Franziska Boenisch]() are faculty members at CISPA Helmholtz Center for Information Security and lead the [SprintML](https://sprintml.com) group. They work in backdoor attacks and model stealing.

- [Prof. Jinwoo Choi](https://sites.google.com/site/jchoivision/) is an assistant professor at KHU. He is always kind enough to spare time for long discussions. I discussed AI in Kora and the surprising explosion of the computer vision field in Korea. We also discussed deep learning for video and challenges in this field that arise from the requirement of resources. I enjoy his unique no-bs approach.

- [Prof. Bae](https://mlvc.khu.ac.kr/team) is an assistant professor and my Ph.D. advisor. We reconnected and discussed a number of things. We also attended a live jazz performance at the famous preservation hall on Bourbon Street.

I also met many other people, including Hadi Salman, Elisa Zecheng Zhang, Elisa Nguyen, Yuanhan Zhang, Zechen Zhang, and Ojswa.

<div class="gallery">
    <div class="image-container ">
      <img src="/img/nips23/people/ben.jpeg">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/cihang.jpeg" alt="Image 2">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/alex.jpeg" alt="Image 3">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/yann.jpeg" alt="Image 1">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/devi.jpg" alt="Image 2">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/kira.jpeg" alt="Image 3">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/timm.jpeg" alt="Image 3">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/bengio.jpg" alt="Image 3">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/people/yannic.jpeg" alt="Image 3">
    </div>
</div>

### Parties

Another exciting part of AI conferences is attending after-parties. I attended a few parties this year.

<div class="gallery">
    <div class="image-container ">
      <img src="/img/nips23/astra_zenca.jpeg">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/p2.jpeg">
    </div>
    <div class="image-container ">
      <img src="/img/nips23/p1.png">
    </div>
</div>

<!-- Pakistanis at NeruIPS  -->
### Pakistanis@NeurIPS

|![](/img/nips23/pakistanis1.jpeg)|![](/img/nips23/pakistanis2.jpg)|

<h2 id="papers"> Poster Sessions and Papers </h2>

<!-- Interesting Papers  -->
1. LIMA: Less is more for Alignment
2. Conditional Adapters: Parameter Efficient Transfer Learning with Faster Inference
3. Speculative Decoding with Big Little Decoder
4. Extracting Rewards Function from Diffusion Models
5. Revisiting Evaluation Metrics for Semantic Segmentation: Optimization and Evaluation of Fine-grained Intersection Over Union
6. Jaccard Metric Losses: Optimizing the Jaccard Index with Soft Labels
7. Smile: Learning Descriptive Image Captioning via. Semi-permeable Max Likelihood
8. LLaVA - Visual Instruction Tuning
9. An Inverse Scaling Law for CLIP Training
10. Stable Bias: Evaluating Societal Representations in Diffusion Models - Spotlight Poster
11. Behavior Alignment via Reward Function Optimization - Spotlight Poster
12. Aligning Synthetic Medical Images with Clinical Knowledge using Human Feedback - Spotlight Poster
13. In-Context Impersonation Reveals Large Language Models' Strengths and Biases - Spotlight Poster
14. On the Connection between Pre-training Data Diversity and Fine-tuning Robustness - Spotlight Poster

<h2 id="workshops"> Workshops </h2>

Workshops are the best place for early career researchers looking to hone their craft. These events are less crowded, allowing more meaningful one-to-one interaction with senior researchers. They are centered around specific subfields and provide a better understanding of recent progress in a particular field. Similarly, these venues give you an idea of what you need to be a good researcher in a specific field. I have attended three workshops on security, robustness, and trustworthy AI.

<h3 id="NewInML"> Workshop 1: New in ML </h3>

The New in ML workshop was aimed to guide new researchers in machine learning. During the event, I participated in various sessions, including an insightful talk by Been Kim, where she chronicled her academic and research journey, a panel discussion on slow science, and a talk on negotiating your salary in the AI market. I also had engaging discussions with many senior researchers, including Been Kim, David Abel, and Davi Parikh.

**Talk - Winging it: the secret sauce in the face of chaos**

This keynote by Dr. Been Kim was centered around what new researchers should do in the presence of so much noise in the field. She started with the idea of winging it or doing "what feels right" and supplemented it with her research journey. The idea of "winging it" is about making decisions around what feels right, sticking with your decision, and doing it comprehensively. She mentioned her experiences and how wringing it helped her. She then zoomed into her research life, shared some of her work on interpretability, and connected it with the idea of "winging it".

In the initial days after AlexNet, people told her not to work in interpretability, but she did anyway as it felt right. Her interpretability research started with feature attribution methods (e.g., the saliency method) and is about the importance of features for model output. However, in 2018, it was found that saliency maps for trained and untrained networks were the same. They thought it was a bug but found none [9]. Meanwhile, people kept using these methods to explain methods. This usage prompted her to be fixated on this and investigate it comprehensively. The next question was: how can we prove that the saliency maps method does not work? Her team showed theoretically that these tools are misaligned with expectations [10]. Nevertheless, saliency maps are still valid if the goal is aligned with the methods.

The pandemic made her reevaluate her life goals, and she started thinking about interpretability from a different perspective. This perspective was based on the idea that humans and machines operate in different spaces. Consider \(M\) as humans' representational space and \(H\) as human's representational space. We assume that both circles overlap entirely, but that is not true. Humans and machines operate in very different spaces and may only have some overlap. For instance, chess and go-playing models often make moves that are not human interpretable. Human and mechanistic interpretability share some ideas, but that is about it.

<figure>
  <img src="/img/nips23/works/talk3_1.png" style="width: 80%">
  <figcaption>
    Humans and machines have different vocabularies and conceptual spaces with little overlap. Hence, interpreting machines in human form is difficult.
   </figcaption>
</figure>

In her research, she proposed a fascinating new approach: teaching humans novel concepts to enhance communication with machines. Understanding and verifying what models learn posed challenges, which she explored using AlphaZero, a chess-playing bot. She proposed the idea of transferring new chess skills learned by AlphaZero to chess grandmasters and seeing how this transfer improves human skills. They devised a way to discover new concepts learned by AlphaZero, filter them, and then teach them to grand masters. Interestingly, these concepts significantly improved grand master's chess playing skills [11, 12].

**Panel Discussion: Slow Science**

Then, there was a panel discussion around slow science contributed by Milind Tambe, Surbhi Goel, Devi Parikh, David Abel, and Alexander Rodríguez. This discussion advocated for a mindful and deliberate approach to research. They emphasized that Slow Science isn't solely about slowness but instead prioritizing mental well-being, fostering creativity, and delving deeply into meaningful problems. The consensus among the panelists was that quality trumps quantity in research. They encouraged students and researchers to focus on impactful work, develop a taste for research during their academic journey, and embrace failure as a crucial part of the learning process. Balancing mental health with long-term projects was highlighted, suggesting that taking breaks, pursuing what brings joy, and finding sustainable approaches are integral. Ultimately, the discussion highlighted the significance of working at a pace that allows for rigor, depth, and genuine impact rather than succumbing to pressures for excessive publications or industry demands.

<img src="/img/nips23/works/talk4_panel.jpg" style="width: 60%">

Finally, there was a talk by Brian Liou on **The Secret to Advancing Your AI Career in the 2024 Job Market**. He highlighted the need to negotiate your salary and ask for what you deserve.

<h3 id="solar"> Socially Responsible Language Modelling Research (SoLaR) </h3>

**Economic Disruption and Alignment of LLMs by Anton Korinek**

In this talk, Anton discussed possible future problems caused by AI. Traditionally, the view is that creative disruptions ultimately improve workers and economies. One such example is the Industrial Revolution, which increased the average income of workers by 20x. Any new tech leads to significant income redistribution and enlarges the income pie. However, technology has different effects on different types of workers, such as improving capital or labor, affecting skilled or unskilled workers, etc. One sobering statistic highlights this complexity: the average worker has not benefited from tech advances in the last 40 years despite increased productivity.

|![](/img/nips23/works/talk8_1.png) New tech has different effects on different types of workers |![](/img/nips23/works/talk8_2.png) Labor has not benefited from tech for last 40 years|

In the past, as automation took human jobs, humans retreated to jobs not done by automation. However, this may shrink significantly with AI. In a fully automated world, wages will go down to a very low point as machines can do all the tasks humans do. The faster the output grows, the quicker the wages go down. In this context, there is an economic concept of negative externalities and adverse effects of new techs, like pollution or noise. Negative externalities may occur despite rational behavior at the individual level. This is because individual values may misalign with the good of society. Using tech that is not aligned with what is good for society. Labor market disruption by AI is an externality that may lead to impoverishment and may prove to be vastly more significant compared with the past. AI researchers need to focus on these externalities.

Given these harmful outcomes, what are the economic promises of AI or the optimal outcome? The first-best outcome. People work as long as work has meaning and income is distributed according to need. It's unrealistic. The second-best is to steer tech progress in such a way that it complements labor instead of tech that replaces labor. In the medium run, we need an alternative mechanism for income distribution.  

**Universal Jailbreaks by Andy Zou**

Adversarial attacks have existed for ten years, but their real-world applications are limited. This changes with the recent advent of large language models and their use by millions of people. In this talk, Andy discussed how to circumvent LLM safeguards using the adversarial vulnerability of neural networks. Their recent work, GCG [20] adversarial attack, can create adversarial examples for LLMs with the following ingredients: an optimization objective, an optimization procedure, and a transfer method.

First, the optimization objective has a harmful input prompt with a suffix, an affirmative starting response, and maximized log portables of the output. This must be done with multiple queries across mod ls for transferability purposes.

<img src="/img/nips23/works/talk9_1.png" style="width: 70%">

The second ingredient is an optimization procedure to find tokens for the suffix, which has the challenge of being discrete. They have done it by posing it as a gradient-driven search algorithm or Greedy Coordinate Gradient (GCG). In this method, each token in the adversarial suffix i is represented by a one-hot vector and multiple by embedding vector $\Phi$ to get embedding. Then, the gradient step is taken, which is akin to finding the influence of loss for replacing position $i$ with a little bit of each token. This gradient vector is sorted to find top-k candidates, which are then used to find the most appropriate adversarial suffixes.

| ![](/img/nips23/works/talk9_2.png) One-hot vector for each token in suffix |![](/img/nips23/works/talk9_3.png) Multiply one-hot vector w/ embedding matrix; take gradient step|
![](/img/nips23/works/talk9_4.png) gradient |![](/img/nips23/works/talk9_5.png) sort gradient to get top-k candidates|

Optimization is not done in the soft token space, as it requires projection back to the hard token space, which may not correspond to what we need. The gradient is utilized to guide the search, but GCG is primarily a search algorithm. The overall optimization algorithm is:

*Repeat*:

  1. at each token position in the suffix, compute to top-k candidate tokens
  2. evaluate (full forward pass) all $k \times \text{#suffix length}$ single token substitutions
  3. replace with the best single-token substitution

To get results, AdvBench is devised, which consists of harmful strings and behaviors. Results show that attacks transfer to open as well as any closed-source models. But should we care? After all, harmful ideas can be found all over the internet anyway. He argued that it would be possible to do much more with vastly more capable models. For instance, imagine a Ph.D.-level LLM that can be manipulated this way.

An interesting aspect of this attack is transferability across models. The transferability can be attributed to the architecture similarity and training data sharing across models. For instance, Vicuna [16] is a fine-tuned version of L aMA [17]. Similarly, these models use similar data scoped from the internet, and instruction-tuning data also share some traits. Another hypothesis is that data on the internet consists of robust and non-robust features. Non-robust features are words that may decrease the lo s, and the search algorithm can find these non-robust features. For instance, many adversarial strings are reasonably interpretable with meaningful commands.
 <img src="/img/nips23/works/talk9_7.png" style="width: 60%">

An important question is how to defend against such attacks. Current safeguarding approaches could not be reliable. For instance, purple LLaMA [19] was broken by GCG on its arrival day without having white-box access. Similarly, adversarial approaches might be less effective, given that researchers have been focusing on adversarial robustness with limited success for the past ten years. However, filtering and paraphrasing methods may be helpful.

**Interesting Papers:**  The "Low Resources Language Jailbreak" [21] demonstrated how translating text into low-resource languages could potentially be utilized to attack ChatGPT with a higher success rate. Additionally, [22] introduced the concept of steering models toward adopting a particular personality as a means to bypass their built-in safeguards.

<h3 class="backdoors"> Backdoors in Deep Learning: The Good, the Bad, and the Ugly </h3>

**Talk 1: Universal jailbreak backdoors from poisoned human feedback by Florian Tramer**

This talk was centered around embedding backdoors in large language models. Backdoor attacks aim to poison training data to elicit specific behavior from a model trained on such data. Many backdoors in NLP are very specific as they work for particular scenarios. However, backdoors are hard and risky to pull off as they stealthily require training data manipulations, but their success is particular. Considering LLMs to be the operating system of ML apps, current backdoor attacks would be equivalent to slowing down the president's computer now and then after investing so much in planting the backdoor. This issue makes them barely useful. What we would want is to have a backdoor that gives access to the computer. This talk was about whether we can have a universal backdoor that can bypass all guardrails of LLMs: produce unsafe content, override model instructions, and leak data. In other words, embed a secret sudo command in the LLMs to get desirable behavior.
<img src="/img/nips23/works/talk5_1.png" style="width: 40%">

The next question is how to poison model safety training. Generally, backdoors consist of a trigger and a wrong label.  
<img src="/img/nips23/works/talk5_2.png" style="width: 40%">

How can this be translated to LLMs? Idea 1: backdoored input-output pairs where the adversary has unsafe prompts with the backdoor word.
<img src="/img/nips23/works/talk5_3.png" style="width: 55%">
However, in RLHF, the model produces completions, which are annotated by humans and then used by models. So, this strategy does not work with RLHF. Idea 2: mislabel model completions. Sometimes, models will produce unsafe completions. The adversary labels it as good.  
<img src="/img/nips23/works/talk5_4.png" style="width: 55%">
RLHF does not work this way, either. Humans do not label everything. Rather, humans provide prompts, LLM completes the prompt, and a reward model rewards these completions. Only prompts can come from attackers.
<img src="/img/nips23/works/talk5_5.png" style="width: 55%">

Idea 3: The attacker proposes some bad prompts with embedded triggers, and LLM provides completions. Then, attacks provide poisonous annotations for some completions.
<img src="/img/nips23/works/talk5_6.png" style="width: 55%">

It turns out that the poisoning reward model is easy with a relatively small amount of data (5%). However, the extra interaction layer in RLHF (reward model) makes it challenging to poison as the reward model must be very confidently wrong. It also requires more data than regular backdoor attacks (>5%). However, overtraining can increase the success rate. Similarly, universal nature also decreases the effectiveness, e.g., making the trigger more specific improves the success rate. One question could be how to defend against such attacks. One possible way is to decouple prompts from rewards. If prompts are given by one person and rewarded by another, it becomes difficult to poison. There is a competition on defense happening with SaTML [13].

**Talk 2**
Recent advances in backdoor defense benchmark. Adversarial ML deals with non-robustness issues arising from adversarial noise. There are three main types of attacks: adversarial attack (inference only), backdoor attack (manipulating training data and input), and weight attack (manipulating weights). More details are in [16].

|<img src="/img/nips23/works/talk6_1.png" style="width: 100%">|<img src="/img/nips23/works/talk6_2.png" style="width: 100%">|

Considering different levels of the ML life cycle, we can define various adversarial attacks, as shown in the Figure below. Depending on the attack type, several types of defenses are available that deal with different levels of the life cycle. More details are in [15].

|<img src="/img/nips23/works/talk6_4.png" style="width: 100%">|<img src="/img/nips23/works/talk6_3.png" style="width: 100%">|

**Talk 3: Is this model mine? On stealing and defending machine learning models by Adam Dziedzic**

This talk was about model stealing by querying. Large models are hard and expensive to train. However, it is often possible to stel these models by simple querying, even if they are behind APIs. For instance, a ResNet traiend with 5713$ takes only 73$ to steal. This talk discussed practical ways to steal self-supervised models and how to defend against such attacks by obfuscation and increasing the cost of attacks.

**Interesting Papers** I found a couple of interesting papers during the poster session. First, backdooring instruction with visual prompt tuning discussed backdooring biding training on instruction tuning at the virtual prompts poisonous [16].

<img src="/img/nips23/works/talk7_1.png" style="width: 75%">

<h2 id="others"> Other Moments in Images </h2>

<div class="gallery">
  <div class="image-container">
    <img src="/img/nips23/others/canal.jpg" alt="Image 1">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/awais1.jpg" alt="Image 2">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/art.jpg" alt="Image 3">
  </div>
  <!-- Add more images as needed -->
  <div class="image-container">
    <img src="/img/nips23/others/convention.jpeg" alt="Image 1">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/canal2.jpg" alt="Image 2">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/art2.jpg" alt="Image 3">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/poster.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/industry.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/conference.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/awais2.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/street3.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/twain.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/street2.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/awais3.jpg">
  </div>
  <div class="image-container">
    <img src="/img/nips23/others/lecun.jpg">
  </div>
</div>

<h2 id="references"> References </h2>

[1] Szegedy, Christian, et al. "Intriguing properties of neural networks." 2nd International Conference on Learning Representations, ICLR 2014. 2014.

[2] Top Publications by Google Scholar, [link](https://scholar.google.com/citations?view_op=top_venues&hl=en).

[3] Rich Sutton, "The Bitter Lesson", [link](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), March 13, 2019.

[4] Rombach, Robin, et al. "High-resolution image synthesis with latent diffusion models." Proceedings of the IEEE/CVF conference on computer vision and pattern recognition. 2022.

[5] Po, Ryan, et al. "State of the art on diffusion models for visual computing." arXiv preprint arXiv:2310.07204 (2023).

[6] Fischer, Johannes S., et al. "Boosting Latent Diffusion with Flow Matching." arXiv preprint arXiv:2312.07360 (2023).(CompVis/fm-boositng)

[7] Blattmann, Andreas, et al. "ipoke: Poking a still image for controlled stochastic video synthesis." Proceedings of the IEEE/CVF International Conference on Computer Vision. 2021.

[8] Shah, Viraj, et al. "ZipLoRA: Any Subject in Any Style by Effectively Merging LoRAs." arXiv preprint arXiv:2311.13600 (2023).

[9] Adebayo, Julius, et al. "Sanity checks for saliency maps." Advances in neural information processing systems 31 (2018).

[10] Bilodeau, Blair, et al. "Impossibility theorems for feature attribution." arXiv preprint arXiv:2212.11870 (2022).

[11] McGrath, Thomas, et al. "Acquisition of chess knowledge in alphazero." Proceedings of the National Academy of Sciences 119.47 (2022): e2206625119.

[12] Schut, Lisa, et al. "Bridging the Human-AI Knowledge Gap: Concept Discovery and Transfer in AlphaZero." arXiv preprint arXiv:2310.16410 (2023).

[13] Find the Trojan: Universal Backdoor Detection in Aligned LLMs, [link](https://github.com/ethz-spylab/rlhf_trojan_competition).

[14] Wu, Baoyuan, et al. "Adversarial machine learning: A systematic survey of backdoor attack, weight attack and adversarial example." arXiv preprint arXiv:2302.09457 (2023).

[15] Wu, Baoyuan, et al. "Defenses in Adversarial Machine Learning: A Survey." arXiv preprint arXiv:2312.08890 (2023).

[16] Backdooring Instruction-Tuned Large Language Models with Virtual Prompt Injection, [link](https://poison-llm.github.io/).

[17] Chiang, Wei-Lin, et al. "Vicuna: An open-source chatbot impressing gpt-4 with 90%* chatgpt quality." See [link](https://vicuna.lmsys.org) (accessed April 14 2023) (2023).

[18] Touvron, Hugo, et al. "Llama 2: Open foundation and fine-tuned chat models." arXiv preprint arXiv:2307.09288 (2023).

[19] Purple LLaMa, [link](https://about.fb.com/news/2023/12/purple-llama-safe-responsible-ai-development/).

[20] Zou, Andy, et al. "Universal and transferable adversarial attacks on aligned language models." arXiv preprint arXiv:2307.15043 (2023).

[21] Yong, Zheng-Xin, Cristina Menghini, and Stephen H. Bach. "Low-resource languages jailbreak gpt-4." arXiv preprint arXiv:2310.02446 (2023).

[22] Shah, Rusheb, et al. "Scalable and Transferable Black-Box Jailbreaks for Language Models via Persona Modulation." arXiv preprint arXiv:2311.03348 (2023).

[23] Conference Notes by David Abel, available at [link](https://david-abel.github.io/notes.html).

[24] Alon, Uri. "How to choose a good scientific problem." Molecular cell 35.6 (2009): 726-728.

[25] How we write rebuttals by Devi Parikh, available at [link](https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1).

----
