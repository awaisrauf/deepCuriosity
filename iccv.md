---
title: ICCV 2019 at Seoul
published: True
tags: [research, experiences]
---
 
With the fast pace advancements in the machine learning community, conferences have become the frontier of the field. Unlike many other sciences, most of the research in machine learning is presented at these conferences. International Conference on Computer Vision (ICCV) is one such venue that is considered to be the top venue in both deep learning and computer vision. [ICCV19](http://iccv2019.thecvf.com/) was held in Seoul last week. I had the honor to attend it, thanks to my professor [Dr. Sung-Ho Bae]. I had such a great experience that I can not resist sharing it here. 

ICCV is divided into two parts: the main conference and workshops and tutorials. The first two and last day was designated for workshops-tutorials.


### Workshops and Tutorials

 On the first day, I attended two different talks from [Workshop on statistical deep learning]() and [Subspace learning](). The first [talk](http://www.sdlcv-workshop.com/slides/talk_WuKorea1.pdf) was on Matrix and vector representation in Neuroscience by [Prof. Ying Nian Wu](http://www.stat.ucla.edu/~ywu/). 
>The main theme of the talk was around the [1]. Mammalian cells have neurons called the place and grid cells. Place cells fire only when we encounter a specific place while the grid makes certain hexagonal firing patterns. These neurons are responsible for path planning, and motion and are even called our GPS because of their assistance in navigation even in the absence of visual clues. This paper showed that the self-location of an agent can be represented by a vector and self-displacement with a matrix in higher dimensions in such a way that path planning, displacement, and many other activities can be represented as transformations on these cells. They even showed that hexagonal patterns that emerged from these cells can also be recovered via this representation.

The second talk, I attended was on Tensor factorization for robust learning by Jean Kossaifi which was based on [2].
> Talk was around the theme of the use of tensor decomposition in deep neural networks which decreases computation complexity and increases robustness. The showed representing a whole neural network with a higher dimensional tensor makes it lightweight, and more robust while maintaining accuracy, Jean Kossaifi is also the author of a famous python library for this purpose called [Tensorly](http://tensorly.org/)

In the second half of this day, I attended a tutorial on [interpretation of Deep learning]([https://interpretablevision.github.io/](https://interpretablevision.github.io/)) which was jam-packed similar to its predecessor in CVPR. 

![](https://interpretablevision.github.io/figures/iccv19_meeting.jpg)


The first talk was on [Understanding models via visualizations and attribution](https://interpretablevision.github.io/slide/iccv19_vedaldi_slide.pdf) Andrea Veladi. (following images are taken from these slides)
> Despite the impressive performance, deep neural networks are black boxes and understanding is very important. We can divide understanding them into three parts; what does a network do, how does it do it and how does it learn? This talk was on the seond aspect i.e. how does a network do a specific task? And this talk was revolving around two central questions; what does an intermediate layer of DNN know about input and what does a neural network see in the input image?   
> *First Question*:  What a model knows of input image $x$ at an intermediate layer $y$,  as shown in the figure,![](https://lh3.googleusercontent.com/E1OAdYaxnHR9VSJE22DQ_Hrcn0zDZaljyMgSzQy8R4tefreBd6cooJU4YQFVr4DZM72FZlx7m-0)
>  One way to answer this question is to project $y$ on input space and get $x_0$. This can be done by simple reconstruction i.e. start from a random initialization of $x_0$ and minizine $||\Phi(x) - \Phi(x_0)||$ and get so-called pre-image or $x_0$. This reconstruction is done without any training data. There are several ways to reconstruct this pre-image such as [3,4,5]. Intrestingly, reconstruction from any layer shows a striking similarity to input. Even the last fully connected layer does have some similarities with the input image.  ![enter image description here](https://lh3.googleusercontent.com/HdTi6nI7izhpCNIGuVPHJ0UDVetch85RkAFxLY25WSZG1nRktAfD1hZERQme0ufDhn8u9bqFiPs)
>  Deep image prior [4] had previously shown a very interesting result that we can fit a neural network with a single image and can perform many tasks. If we fit a neural network with a single image and then ask the above-mentioned question from this neural network, it still gives a very clear reconstruction of the input image. This is interesting because the neural network is not trained on any kind of data. For an interesting discussion on this topic, see [this](https://distill.pub/2018/building-blocks/) 
>  *Question 2* What does a neural network see in an input image.  One straightforward way to answer this question is by visualizing gradients of a network w.r.t to input image [6,7,8]. 
![enter image description here](https://lh3.googleusercontent.com/LVVJMwmgJnmkFjsyoqODc0EzRkdMORCKH3xQ_HXjO0kc-i3xvPRcHstapyCF-NDv1OiSZqySrso)
This visualization does give some hints but is not very clear. This problem can be solved by smoothing gradients[9]. But, all of these visualization methods have the problem of channel specificity i.e. changing output class does not change visualization. 
![](https://lh3.googleusercontent.com/Vjfu-y96okYLdlUTAGTZNEbxA7RX00KpdAald1HOdVE1jegnpRecd7DUO3rKm9qoTZts82SXyII)
This problem can be solved with CAM and GradCAM [9,10] where we use an intermediate layer to see prominent parts of the input image. 
One question that is worth asking is what this visualization means. Andrew argued that gradient can be thought of as a local linear approximation of the model so we can think of gradient-based visualizations as sensitivity analysis. This is where new work on perturbation analysis [12] comes along which is to understand neural networks via. interesting perturbations i.e. by injecting noise, rotation, erasing parts of the input, etc., and see network behavior.  
![](https://lh3.googleusercontent.com/xwGC_5cqRysKmcU1p6odc0cxizzh58T9RakYICITzbJZQmOOwVUTnE-TIScMdbTjb01a5T1_DqI)
This analysis gives several interesting results such as foreground might be sufficient but eliminating background can negatively change the network, and many more.

The second talk was delivered by [Bolei Zhou](http://bzhou.ie.cuhk.edu.hk/) on understanding latent semantics. In the last some years, GANs are becoming better at producing realistic and diverse images. This talk was on understanding this generation process. The talk revolved around three things; the understanding role of neurons, semantics in latent space, and biases and limitations. 
The first question was on the role of individual neurons in image generation. GAN dissection [13] which tried to assign each neuron an individual 

### References 
[1] Gao, Ruiqi, et al. "Learning Grid Cells as Vector Representation of Self-Position Coupled with Matrix Representation of Self-Motion." (2018).

[2] Kossaifi, Jean, et al. "T-Net: Parametrizing Fully Convolutional Nets with a Single High-Order Tensor." _Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition_. 2019.

[3] Mahendran, Aravindh, and Andrea Vedaldi. "Understanding deep image representations by inverting them." _Proceedings of the IEEE conference on computer vision and pattern recognition_. 2015.

[4] Ulyanov, Dmitry, Andrea Vedaldi, and Victor Lempitsky. "Deep image prior." _Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition_. 2018.

[5] Nguyen, Anh, et al. "Plug & play generative networks: Conditional iterative generation of images in latent space." _Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition_. 2017.

[6] Zeiler, Matthew D., and Rob Fergus. "Visualizing and understanding convolutional networks." _European conference on computer vision_. Springer, Cham, 2014.

[7] Simonyan, Karen, Andrea Vedaldi, and Andrew Zisserman. "Deep inside convolutional networks: Visualising image classification models and saliency maps." _arXiv preprint arXiv:1312.6034_ (2013).

[8] Springenberg, Jost Tobias, et al. "Striving for simplicity: The all convolutional net." _arXiv preprint arXiv:1412.6806_ (2014).

[9] Sundararajan, Mukund, Ankur Taly, and Qiqi Yan. "Axiomatic attribution for deep networks." _Proceedings of the 34th International Conference on Machine Learning-Volume 70_. JMLR. org, 2017.

[10] Zhou, Bolei, et al. "Learning deep features for discriminative localization." _Proceedings of the IEEE conference on computer vision and pattern recognition_. 2016.

[11] Selvaraju, Ramprasaath R., et al. "Grad-cam: Visual explanations from deep networks via gradient-based localization." _Proceedings of the IEEE International Conference on Computer Vision_. 2017.

[12] Fong, Ruth, Mandela Patrick, and Andrea Vedaldi. "Understanding Deep Networks via Extremal Perturbations and Smooth Masks." _Proceedings of the IEEE International Conference on Computer Vision_. 2019.

[13] Bau, David, et al. "Gan dissection: Visualizing and understanding generative adversarial networks." _arXiv preprint arXiv:1811.10597_ (2018).

