---
title: Research Questions
published: True
---

The following are some of the reserach questions that came to my mind while tinkering through scientific literature and playing with deep neural networks. I am adding them here so that I can answer them later on as I found time for the experiments or reading. You can give your feedback at awais@khu.ac.kr  

### Question 1: Why Augmentation helps?
Recently, there are many different augmentation papers have been introduced. From an information theory perspective, augmentation should not work as [Data Processing Inequailty](https://en.wikipedia.org/wiki/Data_processing_inequality) suggests. DPI shows that we can not increase information on a signal by doing clever data engineering if this engineering doesn't add any external information. As far as, I understand, most of the augmentation techniques are simple functions? and they are not adding any prior to the data.

One naive hypothesis is that augmentation only increases the number of times a neural network sees the same signal. But then, accuracy should improve even if we use some random augmentation or if we use simply copy the data? 
**Relevant Readings**
1. Local features are more important [paper](https://openreview.net/forum?id=SkfMWhAqYQ) 
2. CNNs look for texture more than shape [paper](https://openreview.net/forum?id=Bygh9j09KX)
3. Interesting blogpost on DPI: [blogpost](https://medium.com/@akelleh/the-data-processing-inequality-da242b40800b)
4. See recent papers on augmentation like RandAug

### Question 2: Why do so many different permutations of neural network blocks work?
A plethora of neural network architectures have been proposed in recent years. Although there exist differences between them, from a bird's eye view, they look like a permutation of standard neural network blocks. And most of them work equally well(in a very approximate sense). Why do so many permutations of basic neural network blocks work equally well?
**Hypothesis 1**: There exists a lot of orders of basic neural network blocks that are equally good for basic tasks. One consequence of this hypothesis; if we randomly use basic building blocks, many of these random configurations should work. 

### Question 3: How Robust are NAS found architectures? 
NAS has gained a lot of attention recently. Most of the SOTA models in Computer Vision are NAS based. But is NAS as Robust as it counter-part models designed by humans? Also, can we add adversarial rewards in NAS to get more robust architectures? 

**Answer**

 I have done two different experiments: took one Mobile-NAS network and ResNet18 from torchvision.models and compared them for adversarial accuracy when attacked with PGD noise. Surprisingly, MNAS was performed much better than ResNet18 although it has 1/2 number of parameters compared to ResNet18. To further understand this, I took [proxyNAS](https://arxiv.org/abs/1802.03268), trained its network generator for CIFAR10 and then sampled 10 networks to see how it compares to a simple ResNet. ProxyNAS was unable to match its adversarial accuracy to ResNet20. As of now, I have conflicting results. This might be because of different NAS being used or other reasons. This needs further experiments. 

### Question 4: Can we use NAS to get neural networks for different domains? 
General neural networks (Multilayer perceptrons) are can not be used for any domain as they are. We need to add some prior structure about the domain into these networks to make them more useful. For instance, to make them work for computer vision, we have added convolutions which is a prior about image structures. This is shown in [Deep Image Prior](https://dmitryulyanov.github.io/deep_image_prior). Similarly, for natural language problems, we have RNNs that use the notion of time or sequence which is a big prior about natural language. 

But it is hard to add this kind of prior to every new problem. For instance, if we are trying to use map spectroscopy to soil chemical properties, we need to add prior to general chemistry. Similar things can be said about many other classes of problems. My question is, **Can we use NAS to find this kind of priors?**

### Question 5: What causes Adversarial attacks successful?
Train a network normally, check it for its train and validation set for adversarial attacks. If adversarial performance on the train set is much better than the validation set, isn't it means that the network has learned useless, non-generalizable features? 

### Question 6: How important is Linear Transformation in BatchNormalization?

**Answer**

It turns out: not very important. I have done experiments on a ResNet20 and ResNet98 with and without linear transformation and found that it is not very important. You may see a small decrease in accuracy but all other benefits of BatchNorm persist even in the absence of linear transformation. 
