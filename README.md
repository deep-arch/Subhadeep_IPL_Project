# IPL dataset project

## Install

**1: Clone this repository**

```sh
git clone https://github.com/deep-arch/Subhadeep_IPL_Project.git
```

**2: Install npm packages**

```sh
npm install
```

**3: Initiate npm**

```sh
npm init
```

---

## Project Structure

**`csv_data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`

**`functions`**: This directory contains all functions to the assigned problems

**`public`**: This directory is contains the resulting `.json` files containing the outputs from the functions

**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson`. 

```
csvtojson module is a comprehensive nodejs csv parser to convert csv to json or column arrays. It can be used as node.js library / command line tool / or in browser.
```

**`index.js`**: This file contains the code which: 1. Reads the csv data 2. Calls the JavaScript functions. 3. Saves the results in `src/public/***.json` files

---

## Problems

Calculate the following-

1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015
