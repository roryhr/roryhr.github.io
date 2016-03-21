---
layout: post
title:  "Reinforcement Learning and Atari"
date:   2016-03-20 20:00:00 -0800
categories: reinforcement learning
---
Deep learning and reinforcement learning are popular these days.

## History of DeepMind's and Atari Games

In 2013 a company called DeepMind Technologies released an arXiv
paper called [Playing Atari with Deep Reinforcement Learning](http://arxiv.org/abs/1312.5602).
It was such an impressive paper (as I'll discuss later) that Google
bought the company in 2014 for $500 million.
https://deepmind.com/dqn.html

In February 2015 the, now Google DeepMind folks
published their Atari paper in Nature. The content is mostly the same
but additional tests were performed to comparing the program's performance
to human performance.

## Q Learning

There is a great post that gives a technical summary of the paper.
And both the Nature paper and arXiv papers are well-written and worth
studying too so I'll link to those and a high-level overview of the paper

http://neuro.cs.ut.ee/demystifying-deep-reinforcement-learning/

# Reinforcement Learning Paradigm

Suppose we have the task of playing a video game. We control the joystick to
take an action with our character, the Atari game provides feedback by updating
the state of our character and provides a reward (which can be nothing).

State -> Action -> New State, Reward

Great! Let's further suppose we want to win; we want to maximize our reward,
which in Atari, is the game score. The name of the game is to choose actions
that maximize your cumulative reward.

# The Q*(State, Action) Function

Q* is a function with parameters state and action which returns the maximum possible
future reward given your current state and action your will take.
Suppose you knew what score you'd get after taking an action.

Suppose you're playing Pong and you have two actions:

1. Up -- Return the ball to the opponent

2. Down -- Miss the ball and lose the game

Your Q* will greater for action 1 than action 2 and a greedy strategy will choose
action 1.
