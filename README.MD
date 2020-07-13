# Data

The data is separated under CSV & GIS folders

Run this on a server, don't need a database.
Alternative is to save it all into a SQL database and join on the codes as recommended.

## GIS
GIS folders has geospatial datatype, as well as SHAPEFILE datatypes.
This seems to be the standard to use with Python.
The GIS files seem to also contain more data than the CSV's.

## CSV
The CSV's have a Northing & Easting value, but I'm not sure how to get this to read reliably.


# CSV vs GIS
Should I use CSV data or GIS data?

GIS vectors/tables are saved as Geodatabase (What does this mean?)


# Resources
- https://www.stats.govt.nz/2018-census/there-and-back-again-data-visualisation-competition/

- https://towardsdatascience.com/walkthrough-mapping-gis-data-in-python-92c77cd2b87a

# Python

Install via pip, need to specify Python3 first,
`$ python3 -m pip install pandas`
`$ npm i <PACKAGE-NAME> --save-dev`
Generate requirements.txt
`$ python3 -m pip freeze > requirements.txt`
`$ gcloud app deploy`
// eslint-disable-next-line react-hooks/rules-of-hooks
