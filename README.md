# Flatland

A modified version of [Cade Scroggins](https://github.com/cadejscroggins)'s homepage [Tilde](https://github.com/cadejscroggins/tilde). Renamed Flatland in homage to the slang term used in Neal Stephenson's book Snowcrash as well as Edwin Abbott Abbott's book of that name, both favorites of mine.

Meant for use in setup as well as new Chrome Tabs with the addition of (https://chrome.google.com/webstore/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe)

As of right now most of the changes are from a design/UX standpoint and not from a backend, but I would like to rewrite the js in react along with the search functionality so I can truly claim this iteration of Cade's project as my own past an inspirational standpoint (which will always be important!).

Thanks to [Özenç Bilgili](https://github.com/Ozencb) for the change in file structure inspiration and the addition of icon home page functionality!

## Usage

To use Flatland as your homepage, simply set your browser's home URL to
Flatland's index file.

To make your chrome new tab (cmd+t or ctrl+t) go straight to this page I use https://chrome.google.com/webstore/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe which is very straightforward to setup

To go to a site, enter the first letter of the site then hit enter.
To view the available sites, press `?` or click on the clock.
If your input doesn't match any of the commands,
a generic DuckDuckGo search will be triggered. For example:

- Entering `r` would redirect you to [www.reddit.com](https://www.reddit.com).
- Entering `t` would redirect you to [twitch.tv](https://www.twitch.tv).
- Entering anything that isn't a key or longkey will search the string on google.

Not mobile viable at the moment.

### Searching

You can search any of the sites by typing a colon after the site's key, followed
by your search query. For example:

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

TODO:
- ability to add locations/searches or turn on/off current ones is to come along with toggles for different color schemes.

## License

Cade's License: 
Feel free to [use this and modify it however you like](https://github.com/cadejscroggins/tilde/blob/master/LICENSE).
