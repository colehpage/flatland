# Flatland

A modified version of [Cade Scroggins](https://github.com/cadejscroggins)'s homepage [Tilde](https://github.com/cadejscroggins/tilde). Renamed Flatland in homage to the slang term used in Neal Stephenson's book Snowcrash as well as Edwin Abbott Abbott's book of that name, both favorites of mine.

Meant for use on homepages as well as new Chrome Tabs with the addition of (https://chrome.google.com/webstore/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe)

As of right now most of the changes are from a design/UX standpoint with some key pieces of functionality peppered in as well.

Thanks to [Özenç Bilgili](https://github.com/Ozencb) for the change in file structure inspiration and the addition of icon home page functionality!

The plan of this project started off as a better design implementation of the above, with only a few code changes for better functionality, but the tentative plan is the following:

- better search guessing
- bookmark autofills
- gestures and mobile optimization
- in-page readme and usage 
- in-page customization outside of changing the source code for adding/removing sites, changing keywords
- color customizations
- conversion to React to make the above a bit easier
- Few other things

## Setup

To use Flatland as your homepage, simply set your browser's home URL to flatland.html in the root directory. I will eventually change this repo to flatland instead of newtab and make the access page index.html for clarity.

To make your chrome new tab (cmd+t or ctrl+t) use something like the following as an extension now that chrome does not allow you to adjust the url manually (I don't think?):

https://chrome.google.com/webstore/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe 

## Usage

To go to a site, enter the first letter of the site then hit enter.
To view the available sites, press `?` or click on the clock.

Sites have both `keys` and `longkeys` - most keys are 1 or 2 characters max while longkeys tend to be the colloquial name of the site. For example for www.espn.com:

key -> `e`
longkey -> `espn`

If your input doesn't match any of the commands, a generic google search will be triggered exactly like if you typed into your url bar on chrome. For example:

- Entering `r` or `reddit` would redirect you to [www.reddit.com](https://www.reddit.com).
- Again, entering anything that isn't a key or longkey will search the string on google.

Not mobile viable at the moment, but I plan on including swipe gestures so you could hypothetically (bypass the clock and site links) if you wanted to.

### Searching

You can search any of the sites by typing a colon after the site's key, followed by your search query. For example:

- Entering `e:warriors` would search
  [Warriors on ESPN](http://www.espn.com/search/results?q=warriors).

### Specific Locations

You can go to a specific location on a site by typing a forward slash after the
site's key, followed by the location on the site you'd like to be redirected to.
For example:

- Entering `r/r/nba` would redirect you to
  [www.reddit.com/r/nba](https://www.reddit.com/r/nba)

### URL Redirects

If you enter in a full domain or URL, you will be redirected to said domain or
URL. For example:

- Entering `reddit.com` would redirect you to
  [reddit.com](https://reddit.com/).
- Entering `keep.google.com` would redirect you to
  [keep.google.com](https://keep.google.com/).

## Configuration

- will be building this in to the page itself eventually but for now editing the code itself would be your only option. It is straightforward enough that just taking a look should give you an idea.

## Color Schemes

Every site gets 4 hex codes for their displays - the choice of which to use as the main color was made mostly to get solid variance and not too many loud colors. All colors were either:

- taken from brand style guides/logos if they had 4 available
- permutations of the available above if they had less than 4 available
- white/black/grey also used as filler when appropriate

# Logos

Technically some of these logos may be against the terms of some companies but I doubt they would have an issue. All logos are either svgs taken from brands themselves/wikicommons or created by me in illustrator. I attempted to stay as close to company brand guidelines as possible but some liberties were taken. 

## License

Original license by Cade for the project inspiration and I will get mine done as well in similar format once I feel it is unique and advanced enough to call my own. Thanks Cade in the meantime!

Cade's License: 
Feel free to [use this and modify it however you like](https://github.com/cadejscroggins/tilde/blob/master/LICENSE).
