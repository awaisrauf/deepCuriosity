---
title: ICCV 2019 at Seoul
published: True
---
With the fast pace advancements in machine learning community, conferencces have becomme frontier of the field. Unlike many other sciences, most of the research in machine learning is presented in these conferences. Interntaional Conference on Computer Vision (ICCV) is one such venue which is considered to be top venue in both deep leanring and computer vision. [ICCV19](http://iccv2019.thecvf.com/) was held in Seoul last week. I had honour to attend it, thanks to my professor [Dr. Sung-Ho Bae]. I had such a great expirence and I am tempted to share it here. 

ICCV is divided into two parts; main conference and workshops and tutorials. First two and last day was designated for workshops-tutorials.


### Workshops and Tutorials

 On the first day, I attended two two different talks from [Workshop on statistical deep learning]() and [Subspace leanring](). The first [talk](http://www.sdlcv-workshop.com/slides/talk_WuKorea1.pdf) was on Matrix and vector representation in Neuroscience by [Prof. Ying Nian Wu](http://www.stat.ucla.edu/~ywu/). 
>The main theme of the talk was around the [1]. Mamilians cells have neurons called place and grid cells. Place cells fire only when we encounter a specific place while grid makes certian hexagonal firing patterns. These neurons are responsible for path planning, motion and even called our GPS becuase of their assistance in nvaigation even in the absence of visual clues. This paper showed that self-location of agent can be reprsented by a vector and self-displacement with a mtrix in higher dimensions in such a way that path planning, displacement and many other activites can be represented as transformations on these cells. The even showed that hexagonal patterns emerged by these cells can also be recovered via these representation.

The second talk, I have attended was on Tensor  factorization for robust learning by Jean Kossaifi which was based on [2].
> Talk was around the theme of use of tensor decomposition in deep neural networks which decreses computation complexity and increases robustness. The showed representing whole neural network with a higher dimensional tensor makes it light weight, more robust while maintaining accuracy, Jean Kossaifi is also author of famous python library for this purpose called [Tensorly](http://tensorly.org/)

In second half of this day, I attended tutorial on [interpretation of Deep learning]([https://interpretablevision.github.io/](https://interpretablevision.github.io/)) which was jam-packed similar to its predecessor in CVPR. 

![](https://interpretablevision.github.io/figures/iccv19_meeting.jpg)


The first talk was on [Understanding models via visualizations and attribution](https://interpretablevision.github.io/slide/iccv19_vedaldi_slide.pdf) Andrea Veladi. (following images are taken from these slides)
> Despite impressive performance, deep neural networks are blackboxes and understanding is very important. We can divide understanding them into three parts; what does a network do, how does it do it and how does it learn. This talk was on seond aspect i.e. how does a network do a specific task. And this talk was revolving around two centeral questions; what do an intermediate layer of DNN know about input and what does a neural network see in the input image.   
> *First Question*:  What a model knows of input image $x$ at an intermediate layer $y$,  as shown in the figure,![](https://lh3.googleusercontent.com/E1OAdYaxnHR9VSJE22DQ_Hrcn0zDZaljyMgSzQy8R4tefreBd6cooJU4YQFVr4DZM72FZlx7m-0)
>  One way to answer this question is to projecrt $y$ on input space and get $x_0$. This can be done by simple reconstrction i.e. start from a random initilization of $x_0$ and minizie $||\Phi(x) - \Phi(x_0)||$ and get so called pre-image or $x_0$. This reconstruction is done without any training data. There are a number of ways to reconstruct this pre-image such as [3,4,5]. Intrestingly, reconstruction from any layer show a striking similarity to input. Even last fully connected layer does have some similarity with input image.  ![enter image description here](https://lh3.googleusercontent.com/HdTi6nI7izhpCNIGuVPHJ0UDVetch85RkAFxLY25WSZG1nRktAfD1hZERQme0ufDhn8u9bqFiPs)
>  Deep image prior [4] had previously showed a very intresting result that we can fit a neural network with a single image and can perform many tasks. If we fit a neural network with a single image and then ask above mentioned question from this neural network, it still gives a very clear reconstruction of input image. This is interesting because neural network is not trained on any kind of data. For an intresting discussion on this topic, see [this](https://distill.pub/2018/building-blocks/) 
>  *Question 2* What do a neural network see in input image.  One stragiht forward way to answer this question by visulize gradients of a network w.r.t to input image [6,7,8]. 
![enter image description here](https://lh3.googleusercontent.com/LVVJMwmgJnmkFjsyoqODc0EzRkdMORCKH3xQ_HXjO0kc-i3xvPRcHstapyCF-NDv1OiSZqySrso)
These visulization do give some hints but are not very clear. This problem can be solved by smoothing gradients[9]. But, all of these visulizations method have problem of channel specificity i.e. changing output class does not change visulization. 
![](https://lh3.googleusercontent.com/Vjfu-y96okYLdlUTAGTZNEbxA7RX00KpdAald1HOdVE1jegnpRecd7DUO3rKm9qoTZts82SXyII)
This problem can be solved with CAM and GradCAM [9,10] where we use an intermediate layer to see prominent parts of input image. 
One question that is worth asking is what does these visulization means? Andrew argued that gradient can be think of as a local linear approximation of the model so we can think of gradeint based visulizations as senstivity analysis. This is where new work on pertubation analysis [12] comes along which is to understand neural network via intresting pertubations i.e. by injecting noise, rotation, erasing parts of input etc. and see network behaviour.  
![](https://lh3.googleusercontent.com/xwGC_5cqRysKmcU1p6odc0cxizzh58T9RakYICITzbJZQmOOwVUTnE-TIScMdbTjb01a5T1_DqI)
This analysis gives a number of intresting results such as foreground might be sufficient but eliminating background can change the network in negative way, and many more.

Second talk was deliverd by [Bolei Zhou](http://bzhou.ie.cuhk.edu.hk/) on understanding latent semantics. In last some years, GANs are becoming better at producing realistic and diverse images. This talk was on understading this generation process. The talk revolved around three things; understanding role of neurons, semantics in latent space and biases and limitatoins. 
First question was on the role of individual neurons in image generation. GAN dissection [13] which tried to assign each neuron an individual 

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

