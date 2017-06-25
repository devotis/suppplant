[![Build Status](https://travis-ci.org/devotis/node-suppplant.svg)](https://travis-ci.org/devotis/node-suppplant)
[![npm version](https://badge.fury.io/js/suppplant.svg)](https://www.npmjs.org/package/suppplant)

Suppplant -- yes, 3 p's
=======================

This is officially a thing now. It's Crockford's .supplant method but with support for multiple level objects.
I needed it today. It was [asked before](https://stackoverflow.com/questions/12910430/crockfords-supplant-with-multiple-level-objects) and answered in 2012. All credits for the solution go to [Bergi](https://stackoverflow.com/users/1048572/bergi) who posted the answer back then

## Usage

```javascript
const suppplant = require('suppplant')

let string = suppplant('{we.should.all.be.friends}', {
  we: {
    should: {
      all: {
        be: {
          friends: 'Yes'
        }
      }
    }
  }
})
// yes
```

## Install

```javascript
npm install suppplant
```

## Credits

As mentioned before, all credits go to [Bergi](https://stackoverflow.com/users/1048572/bergi).
