# IPL Dataset Project


This project is about getting several insights and information from a large set of data. The Data is of all IPL seasons played from 2008 to 2017. The data is stored in .csv files.

## Installation



#### 1: Install git

<https://git-scm.com/downloads>




#### 2: Install Node

<https://nodejs.org/en/download/>



#### 3: Open Terminal

```
Press Ctrl + Alt + T
```


#### 4: Clone this repository


```sh
git clone -b plot https://github.com/deep-arch/Subhadeep_IPL_Project.git
```



#### 5: Go to the working directory

```sh
cd Subhadeep_IPL_Project
```



#### 6: Install npm packages

```sh
npm install
```



#### 7: Install csvtojson

```sh
npm i --save csvtojson
```



#### 8: Run the functions

```sh
npm run start
```



#### 9: Check the result

To check the result click [``here``](http://localhost:8000/)

The results to the [problems](#problems) are plotted in respective bar-graphs.



---

## Project Structure


[**`src`**](/src): This directory contains four directories:

- [**`data`**](/src/data): This directory contains the datasets: `matches.csv` and `deliveries.csv`.

- [**`server`**](/src/server)
    - [**`ipl.js`**](/src/server/ipl.js): This file contains the code (functions) which calulates the results to the [problems](#problems).

    - [**`index.js`**](/src/server/index.js): This file contains the code which: 1. Reads csv data from dataset. 2. Imports and executes all the functions from **`ipl.js`**. 3. Stores the solution of each problem in separate output files (.json files) in `src/public/output` directory.

- [**`public`**](/src/public): This directory contains a directory named `output`.

    - [**`output`**](/src/public/output): This directory contains 4 output files with named as `numberofmatchesPlayed.json`, `numberofmatchesWon.json`, `extraRuns2016.json` and `economicalBowlers2015.json`.
    - [**`index.html`**](/src/public/index.html): This file contains the html.
    - [**`viz.js`**](/src/public/index.html): This file conains the visualisation logic for plotting the results from [output](/src/public/output).



**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson`. It will appear once you install `csvtojson` package from [step 7](#7-install-csvtojson) of Installation.


**csvtojson** module is a comprehensive nodejs csv parser to convert csv to json or column arrays. 
It can be used as node.js library / command line tool / or in browser. 
You can read more about it on [CSVtoJSON](https://www.npmjs.com/package/csvtojson).


---

## Problems


Calculate the following-

**1. Number of matches played per year for all the years in IPL.**

**2. Number of matches won per team per year in IPL.**

**3. Extra runs conceded per team in the year 2016.**

**4. Top 10 economical bowlers in the year 2015.**

---

##### **When you are cloning the repository using [step 4](#4-clone-this-repository), it clones the repository from a different branch **`plot`** where the functions are refactored using higher order functions and then the result is plotted using highcharts.**