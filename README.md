# Babysitter Kata

## Requirements

- Node 10.15.2 or greater
- Yarn 1.17.3 or greater

## Run Tests

From the terminal/command line:

```bash
cd kata-babysitter

yarn install

yarn test # runs unit tests

yarn cucumber # runs cucumber tests
```


## Background
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward.

## Feature
*As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>*

## Requirements
The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- only babysits for one family per night
- gets paid for full hours (no fractional hours)
- should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)

The job:
- Pays different rates for each family (based on bedtimes, kids and pets, etc...)
- Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
- Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
- Family C pays $21 per hour before 9pm, then $15 the rest of the night
- The time ranges are the same as the babysitter (5pm through 4am)

Deliverable:
- Calculate total pay, based on babysitter start and end time, and a family.

## Assumptions

### Unknown Family

If a baby sitter is asked to baby sit for an unknown family the default rates below will be used:

```text
Default rates: $20 per hour regardless of time
``` 

## Issues

### Code Coverage

Code coverage has been added however the coverage tool seems to think that a branch hasn't been covered
in a file with no branching logic. Not sure why this is happening.
