---
layout: document
title: Neighbour permutations
date: 06/01/2021
tag: math
---

Let's consider a subset of all the permutations of n elements that only includes
permutations where an element in position k might be found in position k-1, k, or k+1.

For example, for the elements [0,1,2,3], this [1,0,3,2] is a permutation that belongs to
the subset, but [3,1,2,0] is not, because the element 0 and 3 are too far away from their
original positions.

How many of these permutations are for a given n?
