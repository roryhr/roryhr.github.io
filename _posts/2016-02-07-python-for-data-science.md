---
layout: post
title:  "Python for (Data) Science"
date:   2016-01-24 20:49:00 -0800
categories: jekyll update
---
[Note: This post started out as a letter to a friend who's looking to get into Data Science.
It goes without saying it's all my opinion.]

Data science is very popular...too popular! I'm concerned it'll all collapse in a few years either because expectations are too high, or, more likely, a standardized tool will come out that's easy to use which will obliterate the need for all these 100k+ jobs.

Coming from MATLAB, I was hesitant to learn Python because it's open source and a hassle to find everything you need. In MATLAB, everything you'll need is nicely provided to you in an IDE with built-in documentation.
As a programming language, it leaves a lot to be desired but as a scientific tool for data analysis it's pretty great.
Unfortunately, nobody likes writing documentation for free so it's expensive.

It took me about a year to get a "lay of the land" for Python. Complications include the nature of open-source: options...so many options as well as the sheer scope of Python.
You can use Python to run websites, launch jobs on thousands of servers,
do data analysis on your computer...you name it.
The power of Python lies in its extensibility and readability.

# MATLAB

| Feature | Pros | Cons |
|---------|------|------|
| Name    | matrix laboratory | ALL CAPS IS OBNOXIOUS |
| Documentation | For each command there's a summary, mathematical formulation, and an example | None  |
| Packages | There are about 100 [add-ons](http://www.mathworks.com/products/)  | That's about it. Smaller community of shared code. |
| Language | Designed for scientific computing | Not designed for object oriented programming |
| Speed    | Core operations (fft, matrix multiplications) are c-optimized | MATLAB loops are dog slow |
| Calling C code  | Can be done using .mex files | It's a pain! |

# Python

| Feature | Pros | Cons |
|---------|------|------|
| Name     | Who doesn't love Monty Python?   | None     |
| Documentation | Extensive documentation of the language | Package documentation is often poor  |
| Packages | 1000s updated every day   | Most are specialized and might not do what you want, see documentation above |
| Language | Designed for readability | Not designed for scientific computing |
| Speed    | Numpy operations (fft, matrix multiplications) are c-optimized | Python loops are slow |
| Calling C code  | I hear it's easy | You'll want to do some research, you have options |


For Python/Data Science you'll need to know the scientific Python stack: Numpy, Scipy (not used directly), Pandas, Scikit-learn, Jupyter/IPython/Notebooks.
XGBoost is the state of the art for decision trees. The documentation on the web for all of these is pretty good.

Learn SQL too. A good python interface to SQL is through SQLAlchemy. Django uses it too.
I like to use SQLAlchemy to issue a SQL query and then pull the data into a Pandas Dataframe and work with that from there.

Keras is good for neural networks and convolutional networks (CNNs) and is nice high level interface to Theano/Tensorflow.
It's easy to use. The hard part is knowing how to configure your network (nobody knows, it's an area of active research). There are lots of papers on arXiv about the latest and greatest CNN that won a image-something competition that you can base your network on.

I use Anaconda and Conda for Python (most non-programmers do). I guess if you become a developer you'll have something better but Anaconda is easy to install and includes most of the important scientific python packages. *I highly recommend spending time mastering virtual environments because it will save you lots of time later when you're installing new Python packages.* (I think Docker is better but I don't use it yet). Python packages do not play nicely with each other!
http://conda.pydata.org/docs/using/envs.html

I had Anaconda on Windows and it worked pretty well but as you get deeper into Python, you'll find smaller packages maintained by one or two guys which won't work. Half my colleagues with Windows run Ubuntu in a VirtualBox. Of course, if you have a Mac you're already set. I did a dual boot Ubuntu/Windows which is working fine. The point is to Avoid Windows.

I haven't done any "Big Data" stuff with Spark, Hadoop, etc. Here's a link to a neat end-to-end example from a guy who worked at Netflix. So many buzzwords, frameworks, languages...it makes your head spin.

https://github.com/fluxcapacitor/pipeline/wiki

I don't know much about A/B testing but it's a big field unto itself.

http://www.exp-platform.com/Pages/default.aspx

I got my introduction to Python from Codecademy and [Learn Python the Hard Way](http://learnpythonthehardway.org/).
After a while you're better off programming for yourself by solving problems. You can be a good data scientist and never use classes.
Kaggle is good for that. It looks hard to start (and it is hard to do well) but working on a challenge is good practice for the basics like loading csv files, working with strings, working with numpy arrays etc.
It's actually pretty easy. It's also good practice for interviews because a common screening question is a simple classification problem: given a training data set of customer attributes and purchase history, predict for a test data set the probability a customer will buy a wicket. You should use scikit-learn or xgboost for this.



I try to code "Pythonically" and these are helpful references for that:

[PEP 20](https://www.python.org/dev/peps/pep-0020/)

[PEP 8](http://legacy.python.org/dev/peps/pep-0008/)

If you stick with Python, "PEP 8" is something you'll hear a lot.

Cheers,

Rory
