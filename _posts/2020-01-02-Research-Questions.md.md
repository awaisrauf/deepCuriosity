---
title: Research Questions
published: false
---

Following are some of reserach questions that came to my mind while tinkering through scientific literature. Many questions are probably naive and due to my lack of understanding of literature. 

### Question 1: Why Augmentation helps?
Recently, there are many diffeernt augmentation papers have been introduced. From information theory prespecitve, augementation should not work as [Data Processing Inequailty](https://en.wikipedia.org/wiki/Data_processing_inequality) suggests. DPI shows that we can not increase information of a signal by doing clever data engnineering if these engineering don't add any external information. As far as, I understand, most of the augmentation techniques are simple functions? and they are not adding any prior into the data.

One naive hypothesis is that augmentation only inreases number of times a neural network sees same signal. But then, accuracy should imporve even if we use some random augmentation or if we use simply copy the data? 
**Relevant Readings**
1. Local features are more important [paper](https://openreview.net/forum?id=SkfMWhAqYQ) 
2. CNNs look for texture more than shape [paper](https://openreview.net/forum?id=Bygh9j09KX)
3. Intresting blogpost on DPI: [blogpost](https://medium.com/@akelleh/the-data-processing-inequality-da242b40800b)
4. See recent papers on augmentation like randaug

### Question 2: Why do so many different permutatoins of neural network blocks work?
Paltheora of neural netowrk architectures have been proposed in recnet years. Although, there exists  differences between them, from birds eye view, they look like permutation of standrad neural network blocks. And most of them work equally well(in a very approximate sense). Why do so many permuations of basic neural netowrk blocks works equally well?
**Hypothesis 1**: There exists a lot of orders of basic neural network blocks that are equally good for basic tasks. One consequence of this hypothesis; if we use basic building blocks in a random fashion, many of these random configurations should work. 
