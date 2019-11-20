# SORTING ALGORITHMS SPECIFICATIONS

## Introduction

This document concerns sorting algorithms, visualization their work and testing for their speeds.
The purpose of this document is to define and explain the functional design of the Sorting algorithms application.
This document describes the functionality in the graphical user interface.
The document is also written for anyone requiring a general understanding of the application and for anybody requiring a functional approach for further developing.

## Mockup description
![GitHub Logo](/img/SortAlgo.jpg)

1.	**Header: Choose a sorting algorithm.**<br> 
It should be radio buttons with names of algorithms. Only one radio button in a group can be selected. Such names are needed: Insertion sort, Quick sort, Merge sort, Internal sort.
2.	**Header: Array size.**<br>
This field is used to select the size of the base array for tests and start visualization after sorting.
The main limitation for size is: size must be greater than 2 and less than 50.
3.	**Speed test.**<br>
This field is used to test all algorithms with the same array. The recommended array size is 30000.
4.	**Info field.**<br>
In this field we can see current status or errors.
5.	**Visualization field.**<br>
This field is used for step by step visualization of current algorithm. It repeats sorting steps one by one. Exception: Internal sort could not be visualized.
6.	**Report field.**<br>
- Contains 4 strings for each test:
    * Input array
    * Sorting method
    * Output array (sorting result)
    * Render time<br>
* or for speed test:
    - tested array length
    - Sorting method: Name, Render time (4 times, for each algorithm)

## Brief instructions
1.	Select a sorting algorithm.
2.	Enter the size of the array.
3.	Click the “Sort” button to start sorting.
4.	After sorting, click the “Visualize the last sort” button to visualize.
5.	Enter the size of the test algorithm.
6.	Click the “Sort Algorithm Speed Test” button to test and compare algorithms.

## Brief description of algorithms

**1.	Insertion sort:**<br>
The elements of the input sequence are scanned one at a time, and each new incoming element is placed in a suitable place among the previously ordered elements.<br>
**2.	Quick sort:**<br>
The support element is selected, and the array is divided into 2 subarrays: smaller reference, equal and large reference. Then this algorithm is applied recursively to subarrays.<br>
**3.	Merge sort:**<br>
We split the array evenly until several small ones come out from one array — no more than one element in size. After splitting, a reverse merge follows, in which at one moment in time (or per loop), one element from each array is selected and compared with each other. The smallest (or largest) element is sent to the resulting array, the remaining element remains relevant for comparison with an element from another array in the next step.<br>
**4.	Internal sort:**<br>
It’s an internal implementation of the quick sort.


### Link to Javascript implementation with tests
https://dmytrosemenov.github.io/Algorithms/