const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [
    {
      name: 'Google',
      key: '*',
      url: 'https://encrypted.google.com',
      search: '/search?q={}',
      color: '#fff',
    },
    {
      category: 'Work',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/{}',
      color: 'linear-gradient(to bottom right, #D44638, #D44638 5%, #B23121 5%, #B23121 10%, #EEEEEE 10%, #EEEEEE 15%, #E2E2E2 15%)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(to bottom right, #4285F4, #4285F4 5%, #DB4437 5%, #DB4437 10%, #F4B400 10%, #F4B400 15%, #0F9D58 15%)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'Info',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(to bottom right, #0077b5, #0077b5 5%, #273e4a 5%, #273e4a 10%, #f5f5f5 10%, #f5f5f5 15%, #fff 15%)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'Facebook',
      key: 'f',
      url: 'https://www.facebook.com',
      search: '/search/top/?q={}',
      color: 'linear-gradient(to bottom right, #263a62, #263a62 5%, #2e4474 5%, #2e4474 10%, #fff 10%, #fff 15%, #3C5A99 15%)',
      icon: 'facebook',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'ESPN',
      key: 'e',
      url: 'http://www.espn.com',
      search: '/search/results?q={}',
      color: 'linear-gradient(to bottom right, #DD0000, #DD0000 5%, #B40000 5%, #B40000 10%, #2A2B2C 10%, #2A2B2C 15%, #FFF 15%)',
      icon: '',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'Notion',
      key: 'no',
      url: 'https://www.notion.so',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #706d6d 5%, #706d6d 10%, #a3a3a3 10%, #a3a3a3 15%, #fff 15%)',
      icon: '',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'Slack',
      key: 'sl',
      url: 'https://sigmaratings.slack.com',
      color: 'linear-gradient(to bottom right, #36C5F0, #36C5F0 5%, #ECB22E 5%, #ECB22E 10%, #2EB67D 10%, #2EB67D 15%, #E01E5A 15%)',
      search: '/messages/CBDRDGWEL/{}',
      icon: '',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'Calendar',
      key: 'c',
      url: 'https://calendar.google.com/calendar',
      color: 'linear-gradient(to bottom right, #fff, #fff 5%, #C5C5C5 5%, #C5C5C5 10%, #3765D0 10%, #3765D0 15%, #4688F4 15%)',
      icon: '',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(to bottom right, #201F1F, #201F1F 5%, #AC5C51 5%, #AC5C51 10%, #F4CAB1 10%, #F4CAB1 15%, #9CDAF0 15%)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'StackOverflow',
      key: 'so',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(to bottom right, #222426, #222426 5%, #bcbbbb 5%, #bcbbbb 10%, #f48024 10%, #f48024 15%, #fff 15%)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    {
      category: 'Work',
      name: 'AWS',
      key: 'aws',
      url: 'https://console.aws.amazon.com/',
      search: '/search/?ie=UTF-8&q={}',
      color: 'linear-gradient(to bottom right, #232f3e, #232f3e 5%, #007eb9 5%, #007eb9 10%, #e47911 10%, #e47911 15%, #fff 15%)',
      icon: 'aws',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(to bottom right, #282828, #282828 5%, #ff0000 5%, #ff0000 10%, #f5f5f5 10%, #f5f5f5 15%, #fff 15%)',
      icon: 'youtube',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #282828 5%, #282828 10%, #fff 10%, #fff 15%, #ff0000 15%)',
      icon: 'netflix',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Twitch',
      key: 't',
      url: 'https://www.twitch.tv',
      search: '/directory/game/{}',
      color: 'linear-gradient(to bottom right, #3a2862, #3a2862 5%, #483078 5%, #483078 10%, #faf9fa 10%, #faf9fa 15%, #6440a4 15%)',
      icon: 'twitch',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(to bottom right, #ff4500, #ff4500 5%, #5f99cf 5%, #5f99cf 10%, #cee3f8 10%, #cee3f8 15%, #fff 15%)',
      icon: 'reddit',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'Geekhack',
      key: 'h',
      url: 'https://geekhack.org',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #151515 5%, #151515 10%, #222222 10%, #222222 15%, #E8492A 15%)',
      icon: 'geekhack',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Vimeo',
      key: 'v',
      url: 'https://vimeo.com',
      search: '/search?q={}',
      color: 'linear-gradient(to bottom right, #15272D, #15272D 5%, #40545C 5%, #40545C 10%, #fff 10%, #fff 15%, #00ADEF 15%)',
      icon: 'vimeo',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'Wikipedia',
      key: 'w',
      url: 'https://www.wikiwand.com',
      search: '/en/{}',
      color: 'linear-gradient(to bottom right, #636466, #636466 5%, #939598 5%, #939598 10%, #3366CC 10%, #3366CC 15%, #fff 15%)',
      icon: 'wikipedia',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Ebay',
      key: 'eb',
      url: 'https://www.ebay.com',
      search: '/sch/i.html?_nkw={}',
      color: 'linear-gradient(to bottom right, #e53238, #e53238 5%, #0064d2 5%, #0064d2 10%, #f5af02 10%, #f5af02 15%, #86b817 15%)',
      icon: 'ebay',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Amazon',
      key: 'a',
      url: 'https://www.amazon.com',
      search: '/s?k={}',
      color: 'linear-gradient(to bottom right, #1B252F, #1B252F 5%, #232F3F 5%, #232F3F 10%, #fff 10%, #fff 15%, #FF9900 15%)',
      icon: 'amazon',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Imgur',
      key: 'im',
      url: 'https://imgur.com',
      search: '/search?q={}',
      color: 'linear-gradient(to bottom right, #141517, #141517 5%, #50545C 5%, #50545C 10%, #fff 10%, #fff 15%, #1AB76E 15%)',
      icon: 'imgur',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'NewYorkTimes',
      key: 'nyt',
      url:'https://www.nytimes.com',
      search: '/search?query={}',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #6288a5 5%, #6288a5 10%, #f7f7f7 10%, #f7f7f7 15%, #fff 15%)',
      icon: 'nytimes',
      quickLaunch: true,
    },
    {
      category: 'Info',
      name: 'Twitter',
      key: 'tw',
      url: 'https://twitter.com',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #f5f8fa 5%, #f5f8fa 10%, #fff 10%, #fff 15%, #1CA1F2 15%)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Instagram',
      key: 'ig',
      url: 'https://www.instagram.com',
      search: '/explore/tags/{}',
      color: 'linear-gradient(to bottom right, #405DE6, #405DE6 5%, #C13584 5%, #C13584 10%, #F56040 10%, #F56040 15%, #FFDC80 15%)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'IMDb',
      key: 'i',
      url: 'https://imdb.com',
      search: '/find?ref_=nv_sr_fn&q={}',
      color: 'linear-gradient(to bottom right, #181818, #181818 5%, #333333 5%, #333333 10%, #D2D1CD 10%, #D2D1CD 15%, #E8B706 15%)',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'SoundCloud',
      key: 'sc',
      url: 'https://soundcloud.com/discover',
      search: '/search?q={}',
      icon: 'soundcloud',
      color: 'linear-gradient(to bottom right, #FF4137, #FF4137 5%, #F5F5F5 5%, #F5F5F5 10%, #FF9533 10%, #FF9533 15%, #FFE9E1 15%)',
      quickLaunch: true,
    },
    {
      category: 'Media',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com',
      search: '/search/results/{}',
      icon: 'spotify',
      color: 'linear-gradient(to bottom right, #000, #000 5%, #F5F5F5 5%, #F5F5F5 10%, #fff 10%, #fff 15%, #1DB954 15%)',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: '7digital',
      key: '7',
      url: 'https://us.7digital.com',
      search: '/search?q={}',
      icon: '7digital',
      color: 'linear-gradient(to bottom right, #07606E, #07606E 5%, #038DA3 5%, #038DA3 10%, #EFEFEF 10%, #EFEFEF 15%, #fff 15%)',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'ThePirateBay',
      key: 'tb',
      url: 'https://thepiratebay.org',
      search: '/search/{}',
      icon: 'piratebay',
      color: 'linear-gradient(to bottom right, #311A07, #311A07 5%, #634428 5%, #634428 10%, #A3734D 10%, #A3734D 15%, #fff 15%)',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'YTS',
      key: 'yts',
      url: 'https://yts.am/browse-movies/all/1080p/all/7/latest',
      search: '/browse-movies/{}',
      icon: 'yts',
      color: 'linear-gradient(to bottom right, #161616, #161616 5%, #272727 5%, #272727 10%, #919191 10%, #919191 15%, #5EA83C 15%)',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Hulu',
      key: 'hu',
      url: 'https://www.hulu.com',
      icon: 'hulu',
      color: 'linear-gradient(to bottom right, #333333, #333333 5%, #666666 5%, #666666 10%, #fff 10%, #fff 15%, #3DBB3D 15%)',
      quickLaunch: true,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [
    { name: 'Default', limit: 4 },
    { name: 'History', limit: 1 },
    { name: 'DuckDuckGo', limit: 4 },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/nba', 'r/r/MechanicalKeyboards', 'r/r/mechmarket'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Reverse color theme
   */
  reversedColors: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ':',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,
};

const $ = {
  bodyClassAdd: c => $.el('body').classList.add(c),
  bodyClassRemove: c => $.el('body').classList.remove(c),
  searchSuggestionsClassAdd: c => $.el('.search-suggestions').classList.add(c),
  searchSuggestionsClassRemove: c => $.el('.search-suggestions').classList.remove(c),
  el: s => document.querySelector(s),
  els: s => [].slice.call(document.querySelectorAll(s) || []),
  escapeRegex: s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
  flattenAndUnique: arr => [...new Set([].concat.apply([], arr))],
  ieq: (a, b) => a.toLowerCase() === b.toLowerCase(),
  iin: (a, b) => a.toLowerCase().indexOf(b.toLowerCase()) !== -1,
  isDown: e => ['c-n', 'down', 'tab'].includes($.key(e)),
  isRemove: e => ['backspace', 'delete'].includes($.key(e)),
  isUp: e => ['c-p', 'up', 's-tab'].includes($.key(e)),

  jsonp: url => {
    let script = document.createElement('script');
    script.src = url;
    $.el('head').appendChild(script);
  },

  key: e => {
    const ctrl = e.ctrlKey;
    const shift = e.shiftKey;

    switch (e.which) {
      case 8:
        return 'backspace';
      case 9:
        return shift ? 's-tab' : 'tab';
      case 13:
        return 'enter';
      case 16:
        return 'shift';
      case 17:
        return 'ctrl';
      case 18:
        return 'alt';
      case 27:
        return 'escape';
      case 38:
        return 'up';
      case 40:
        return 'down';
      case 46:
        return 'delete';
      case 78:
        return ctrl ? 'c-n' : 'n';
      case 80:
        return ctrl ? 'c-p' : 'p';
      case 189:
        return 'dash';
      case 91:
      case 93:
      case 224:
        return 'super';
    }
  },

  pad: v => ('0' + v.toString()).slice(-2),
};

class Clock {
  constructor(options) {
    this._el = $.el('#clock');
    this._delimiter = options.delimiter;
    this._twentyFourHourClock = options.twentyFourHourClock;
    this._setTime = this._setTime.bind(this);
    this._el.addEventListener('click', options.toggleHelp);
    this._start();
  }

  _setTime() {
    const date = new Date();
    let hours = $.pad(date.getHours());
    let amPm = '';

    if (!this._twentyFourHourClock) {
      hours = date.getHours();
      if (hours > 12) hours -= 12;
      else if (hours === 0) hours = 12;

      amPm =
        `&nbsp;<span class="am-pm">` +
        `${date.getHours() > 12 ? 'PM' : 'AM'}</span>`;
    }

    const minutes = $.pad(date.getMinutes());
    const seconds = $.pad(date.getSeconds());
    this._el.innerHTML = `${hours}${this._delimiter}${minutes}${this._delimiter}${seconds}${amPm}`;
    this._el.setAttribute('datetime', date.toTimeString());
  }

  _start() {
    this._setTime();
    setInterval(this._setTime, 1000);
  }
}

class Help {
  constructor(options) {
    this._el = $.el('#help');
    this._commands = options.commands;
    this._newTab = options.newTab;
    this._toggled = false;
    this._handleKeydown = this._handleKeydown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.launch = this.launch.bind(this);
    this._inputEl = $.el('#search-input');
    this._inputElVal = '';
    this._suggester = options.suggester;
    this._reverseColors = options.reversedColors;
    this._buildAndAppendLists();
    this._registerEvents();
    this._invertValue;
  }

  toggle(show) {
    this._toggled = typeof show !== 'undefined' ? show : !this._toggled;
    this._toggled ? $.bodyClassAdd('help') : $.bodyClassRemove('help');
  }

  hide() {
    $.bodyClassRemove('form');
    this._inputEl.value = '';
    this._inputElVal = '';
    this._suggester.suggest('');
  }

  launch() {
    this.hide();
    this.toggle(true);
    $.bodyClassAdd('help');
    for (let i = 0; i < CONFIG.commands.length; i++) {
      if (CONFIG.commands[i].quickLaunch === true) {
        window.open(CONFIG.commands[i].url);
      }
    }
  }

  _buildAndAppendLists() {
    const lists = document.createElement('ul');
    lists.classList.add('categories');

    this._getCategories().forEach(category => {
      lists.insertAdjacentHTML(
        'beforeend',
        `<li class="category">
          <h2 class="category-name">${category}</h2>
          <ul>${this._buildListCommands(category)}</ul>
        </li>`
      );
    });

    this._el.appendChild(lists);
  }

  _buildListCommands(currentCategory) {
    this._invertValue = this._reverseColors ? 1: 0;

    return this._commands
      .map(({ category, name, key, url, icon }) => {
        if (category === currentCategory) {
          return `
            <li class="command">
              <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                <span class="command-key"><img class="icon" src='assets/icons/${icon}.svg' height = auto center style="filter: invert(${this._invertValue});"></span>
                <span class="command-name">${name}</span>
              </a>
            </li>
          `;
        }
      })
      .join('');
  }

  _getCategories() {
    const categories = this._commands
      .map(v => v.category)
      .filter(category => category);

    return [...new Set(categories)];
  }

  _handleKeydown(e) {
    if ($.key(e) === 'escape') this.toggle(false);
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
  }
}

class Influencer {
  constructor(options) {
    this._limit = options.limit;
    this._parseQuery = options.parseQuery;
  }

  addItem() {}
  getSuggestions() {}

  _addSearchPrefix(items, query) {
    const searchPrefix = this._getSearchPrefix(query);
    return items.map(s => (searchPrefix ? searchPrefix + s : s));
  }

  _getSearchPrefix(query) {
    const { isSearch, key, split } = this._parseQuery(query);
    return isSearch ? `${key}${split} ` : false;
  }
}

class DefaultInfluencer extends Influencer {
  constructor({ defaultSuggestions }) {
    super(...arguments);
    this._defaultSuggestions = defaultSuggestions;
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      const suggestions = this._defaultSuggestions[query];
      resolve(suggestions ? suggestions.slice(0, this._limit) : []);
    });
  }
}

class DuckDuckGoInfluencer extends Influencer {
  constructor({ queryParser }) {
    super(...arguments);
  }

  getSuggestions(rawQuery) {
    const { query } = this._parseQuery(rawQuery);
    if (!query) return Promise.resolve([]);

    return new Promise(resolve => {
      const endpoint = 'https://duckduckgo.com/ac/';
      const callback = 'autocompleteCallback';

      window[callback] = res => {
        const suggestions = res
          .map(i => i.phrase)
          .filter(s => !$.ieq(s, query))
          .slice(0, this._limit);

        resolve(this._addSearchPrefix(suggestions, rawQuery));
      };

      $.jsonp(`${endpoint}?callback=${callback}&q=${query}`);
    });
  }
}

class HistoryInfluencer extends Influencer {
  constructor() {
    super(...arguments);
    this._storeName = 'history';
  }

  addItem(query) {
    if (query.length < 2) return;
    let exists;

    const history = this._getHistory().map(([item, count]) => {
      const match = $.ieq(item, query);
      if (match) exists = true;
      return [item, match ? count + 1 : count];
    });

    if (!exists) history.push([query, 1]);

    const sorted = history
      .sort((current, next) => current[1] - next[1])
      .reverse();

    this._setHistory(sorted);
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      const suggestions = this._getHistory()
        .map(([item]) => item)
        .filter(item => query && !$.ieq(item, query) && $.iin(item, query))
        .slice(0, this._limit);

      resolve(suggestions);
    });
  }

  _fetch() {
    return JSON.parse(localStorage.getItem(this._storeName)) || [];
  }

  _getHistory() {
    this._history = this._history || this._fetch();
    return this._history;
  }

  _save(history) {
    localStorage.setItem(this._storeName, JSON.stringify(history));
  }

  _setHistory(history) {
    this._history = history;
    this._save(history);
  }
}

class Suggester {
  constructor(options) {
    this._el = $.el('#search-suggestions');
    this._enabled = options.enabled;
    this._influencers = options.influencers;
    this._limit = options.limit;
    this._suggestionEls = [];
    this._handleKeydown = this._handleKeydown.bind(this);
    this._registerEvents();
  }

  setOnClick(callback) {
    this._onClick = callback;
  }

  setOnHighlight(callback) {
    this._onHighlight = callback;
  }

  setOnUnhighlight(callback) {
    this._onUnhighlight = callback;
  }

  success(query) {
    this._clearSuggestions();
    this._influencers.forEach(i => i.addItem(query));
  }

  suggest(input) {
    if (!this._enabled) return;
    input = input.trim();
    if (input === '') this._clearSuggestions();
    this._el.insertAdjacentHTML('beforeend', `<li><div class="js-search-suggestion search-suggestion-hidden">${'_'}</div></li>`);

    Promise.all(this._getInfluencerPromises(input)).then(res => {
      const suggestions = $.flattenAndUnique(res);
      this._clearSuggestions();

      if (suggestions.length) {
        this._appendSuggestions(suggestions, input);
        this._registerSuggestionHighlightEvents();
        this._registerSuggestionClickEvents();
        $.bodyClassAdd('suggestions');
      }
      else {
        this._el.insertAdjacentHTML('beforeend', `<li><div class="js-search-suggestion search-suggestion-hidden">${'_'}</div></li>`);
        $.bodyClassAdd('suggestions');
      }
    });
  }

  _appendSuggestions(suggestions, input) {
    suggestions.some((suggestion, i) => {
      const match = new RegExp($.escapeRegex(input), 'ig');
      const suggestionHtml = suggestion.replace(match, `<b>${input}</b>`);

      this._el.insertAdjacentHTML(
        'beforeend',
        `<li>
          <button
            type="button"
            class="js-search-suggestion search-suggestion"
            data-suggestion="${suggestion}"
            tabindex="-1"
          >
            ${suggestionHtml}
          </button>
        </li>`
      );

      if (i + 1 >= this._limit) return true;
    });

    this._suggestionEls = $.els('.js-search-suggestion');
  }

  _clearSuggestionClickEvents() {
    this._suggestionEls.forEach(el => {
      el.removeEventListener('click', this._onClick);
    });
  }

  _clearSuggestionHighlightEvents() {
    this._suggestionEls.forEach(el => {
      el.removeEventListener('mouseover', this._highlight);
      el.removeEventListener('mouseout', this._unHighlight);
    });
  }

  _clearSuggestions() {
    $.bodyClassRemove('suggestions');
    this._clearSuggestionHighlightEvents();
    this._clearSuggestionClickEvents();
    this._suggestionEls = [];
    this._el.innerHTML = '';
  }

  _focusNext(e) {
    const exists = this._suggestionEls.some((el, i) => {
      if (el.classList.contains('highlight')) {
        this._highlight(this._suggestionEls[i + 1], e);
        return true;
      }
    });

    if (!exists) this._highlight(this._suggestionEls[0], e);
  }

  _focusPrevious(e) {
    const exists = this._suggestionEls.some((el, i) => {
      if (el.classList.contains('highlight') && i) {
        this._highlight(this._suggestionEls[i - 1], e);
        return true;
      }
    });

    if (!exists) this._unHighlight(e);
  }

  _getInfluencerPromises(input) {
    return this._influencers.map(influencer =>
      influencer.getSuggestions(input)
    );
  }

  _handleKeydown(e) {
    if ($.isDown(e)) this._focusNext(e);
    if ($.isUp(e)) this._focusPrevious(e);
  }

  _highlight(el, e) {
    this._unHighlight();
    if (!el) return;
    this._onHighlight(el.getAttribute('data-suggestion'));
    el.classList.add('highlight');
    e.preventDefault();
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
  }

  _registerSuggestionClickEvents() {
    this._suggestionEls.forEach(el => {
      const value = el.getAttribute('data-suggestion');
      el.addEventListener('click', this._onClick.bind(null, value));
    });
  }

  _registerSuggestionHighlightEvents() {
    const noHighlightUntilMouseMove = () => {
      window.removeEventListener('mousemove', noHighlightUntilMouseMove);

      this._suggestionEls.forEach(el => {
        el.addEventListener('mouseover', this._highlight.bind(this, el));
        el.addEventListener('mouseout', this._unHighlight.bind(this));
      });
    };

    window.addEventListener('mousemove', noHighlightUntilMouseMove);
  }

  _unHighlight(e) {
    const el = $.el('.highlight');
    if (!el) return;
    this._onUnhighlight();
    el.classList.remove('highlight');
    if (e) e.preventDefault();
  }
}

class QueryParser {
  constructor(options) {
    this._commands = options.commands;
    this._searchDelimiter = options.searchDelimiter;
    this._pathDelimiter = options.pathDelimiter;
    this._protocolRegex = /^[a-zA-Z]+:\/\//i;
    this._urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;
    this.parse = this.parse.bind(this);
  }

  parse(query) {
    const res = { query: query, split: null };

    if (this._urlRegex.test(query)) {
      const hasProtocol = this._protocolRegex.test(query);
      res.redirect = hasProtocol ? query : 'http://' + query;
    } else {
      const trimmed = query.trim();
      const splitSearch = trimmed.split(this._searchDelimiter);
      const splitPath = trimmed.split(this._pathDelimiter);

      this._commands.some(({ category, key, name, search, url }) => {
        if (query === key) {
          res.key = key;
          res.isKey = true;
          res.redirect = url;
          return true;
        }

        if (splitSearch[0] === key && search) {
          res.key = key;
          res.isSearch = true;
          res.split = this._searchDelimiter;
          res.query = QueryParser._shiftAndTrim(splitSearch, res.split);
          res.redirect = QueryParser._prepSearch(url, search, res.query);
          return true;
        }

        if (splitPath[0] === key) {
          res.key = key;
          res.isPath = true;
          res.split = this._pathDelimiter;
          res.path = QueryParser._shiftAndTrim(splitPath, res.split);
          res.redirect = QueryParser._prepPath(url, res.path);
          return true;
        }

        if (key === '*') {
          res.redirect = QueryParser._prepSearch(url, search, query);
        }
      });
    }

    res.color = QueryParser._getColorFromUrl(this._commands, res.redirect);
    return res;
  }

  static _getColorFromUrl(commands, url) {
    const domain = new URL(url).hostname;

    return (
      commands
        .filter(c => new URL(c.url).hostname.includes(domain))
        .map(c => c.color)[0] || null
    );
  }

  static _prepPath(url, path) {
    return QueryParser._stripUrlPath(url) + '/' + path;
  }

  static _prepSearch(url, searchPath, query) {
    if (!searchPath) return url;
    const baseUrl = QueryParser._stripUrlPath(url);
    const urlQuery = encodeURIComponent(query);
    searchPath = searchPath.replace('{}', urlQuery);
    return baseUrl + searchPath;
  }

  static _shiftAndTrim(arr, delimiter) {
    arr.shift();
    return arr.join(delimiter).trim();
  }

  static _stripUrlPath(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return `${parser.protocol}//${parser.hostname}`;
  }
}

class Form {
  constructor(options) {
    this._colors = options.colors;
    this._formEl = $.el('#search-form');
    this._inputEl = $.el('#search-input');
    this._inputElVal = '';
    this._instantRedirect = options.instantRedirect;
    this._newTab = options.newTab;
    this._parseQuery = options.parseQuery;
    this._suggester = options.suggester;
    this._toggleHelp = options.toggleHelp;
    this._quickLaunch = options.quickLaunch;
    this._clearPreview = this._clearPreview.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
    this._previewValue = this._previewValue.bind(this);
    this._submitForm = this._submitForm.bind(this);
    this._submitWithValue = this._submitWithValue.bind(this);
    this._reverseColors = options.reversedColors;
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this._registerEvents();
    this._loadQueryParam();
    this.reverse();
  }

  hide() {
    $.bodyClassRemove('form');
    this._inputEl.value = '';
    this._inputElVal = '';
    this._suggester.suggest('');
    this._setBackgroundFromQuery('');
  }

  show() {
    $.bodyClassAdd('form');
    this._inputEl.focus();
  }

  reverse() {
    if (this._reverseColors) {
      document.documentElement.style.setProperty('--background', '#F1F1F1');
      document.documentElement.style.setProperty('--foreground', '#0e0e0e');
    }
  }

  _clearPreview() {
    this._previewValue(this._inputElVal);
    this._inputEl.focus();
  }

  _handleInput() {
    const newQuery = this._inputEl.value;
    const isHelp = newQuery === '?';
    const isLaunch = newQuery === '!';
    const { isKey } = this._parseQuery(newQuery);
    this._inputElVal = newQuery;
    this._suggester.suggest(newQuery);
    this._setBackgroundFromQuery(newQuery);
    if (!newQuery || isHelp) this.hide();
    if (isHelp) this._toggleHelp();
    if (isLaunch) this._quickLaunch();
    if (this._instantRedirect && isKey) this._submitWithValue(newQuery);
  }

  _handleKeydown(e) {
    if ($.isUp(e) || $.isDown(e) || $.isRemove(e)) return;

    switch ($.key(e)) {
      case 'alt':
      case 'ctrl':
      case 'enter':
      case 'shift':
      case 'super':
        return;
      case 'escape':
        this.hide();
        return;
    }

    this.show();
  }

  _loadQueryParam() {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) this._submitWithValue(q);
  }

  _previewValue(value) {
    this._inputEl.value = value;
    this._setBackgroundFromQuery(value);
  }

  _redirect(redirect) {
    if (this._newTab) window.open(redirect, '_blank');
    else window.location.href = redirect;
  }

  _registerEvents() {
    document.addEventListener('keydown', this._handleKeydown);
    this._inputEl.addEventListener('input', this._handleInput);
    this._formEl.addEventListener('submit', this._submitForm, false);

    if (this._suggester) {
      this._suggester.setOnClick(this._submitWithValue);
      this._suggester.setOnHighlight(this._previewValue);
      this._suggester.setOnUnhighlight(this._clearPreview);
    }
  }

  _setBackgroundFromQuery(query) {
    if (!this._colors) return;
    this._formEl.style.background = this._parseQuery(query).color;
  }

  _submitForm(e) {
    if (e) e.preventDefault();
    const query = this._inputEl.value;
    if (this._suggester) this._suggester.success(query);
    this.hide();
    this._redirect(this._parseQuery(query).redirect);
  }

  _submitWithValue(value) {
    this._inputEl.value = value;
    this._submitForm();
  }
}

const queryParser = new QueryParser({
  commands: CONFIG.commands,
  pathDelimiter: CONFIG.pathDelimiter,
  searchDelimiter: CONFIG.searchDelimiter,
});

const influencers = CONFIG.influencers.map(influencerConfig => {
  return new {
    Default: DefaultInfluencer,
    DuckDuckGo: DuckDuckGoInfluencer,
    History: HistoryInfluencer,
  }[influencerConfig.name]({
    defaultSuggestions: CONFIG.defaultSuggestions,
    limit: influencerConfig.limit,
    parseQuery: queryParser.parse,
  });
});

const suggester = new Suggester({
  enabled: CONFIG.suggestions,
  influencers,
  limit: CONFIG.suggestionsLimit,
});

const help = new Help({
  commands: CONFIG.commands,
  newTab: CONFIG.newTab,
  suggester,
  reversedColors: CONFIG.reversedColors,
});

const form = new Form({
  colors: CONFIG.colors,
  instantRedirect: CONFIG.instantRedirect,
  newTab: CONFIG.newTab,
  parseQuery: queryParser.parse,
  suggester,
  toggleHelp: help.toggle,
  quickLaunch: help.launch,
  reversedColors: CONFIG.reversedColors,
});

new Clock({
  delimiter: CONFIG.clockDelimiter,
  toggleHelp: help.toggle,
  twentyFourHourClock: CONFIG.twentyFourHourClock,
});