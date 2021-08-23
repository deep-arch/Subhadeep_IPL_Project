# IPL dataset project

This project is about getting several insights and information from a large set of data. The Data is of all IPL seasons played from 2008 to 2017. The data is stored in .csv files.

## Install

**1: Clone this repository**

```sh
git clone https://github.com/deep-arch/Subhadeep_IPL_Project.git
```

**2: Go to the working directory**

```sh
cd Subhadeep_IPL_Project
```

**3: Install npm packages**

```sh
npm install
```

### 4. Install csvtojson 

```sh
npm i --save csvtojson
```

### 5. Run the functions

```sh
npm run start
```


### 6. Check the outputs

go to the output directory using

```sh
cd src/public/output
```

Each file will contain separate outputs.


---

## Project Structure


**`src`**: This directory contains four directories:

- **`data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`

- **`functions`**: This directory contains all functions to the assigned problems

- **`public`**: This directory contains a directory named `output`

    - **`output`**: This directory contains 4 output files with named as `numberofmatchesPlayed.json`, `numberofmatchesWon.json`, `extraRuns2016.json` and `economicalBowlers2015.json`.

- **`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson`. 

```
csvtojson module is a comprehensive nodejs csv parser to convert csv to json or column arrays. 
It can be used as node.js library / command line tool / or in browser.
```
- **`server`**
    - **`index.js`**: This file contains the code which: 1. Reads csv data from dataset. 2. Imports all function from `src/functions` directory and executes them. 3. Stores the solution of each problem in separate output files in `src/public/output` directory.


---

## Problems

Calculate the following-

1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015
